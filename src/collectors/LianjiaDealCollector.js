import {LianjiaCollector} from './LianjiaCollector';
import logger from '../utils/logger';
import db from '../utils/db';
import CommonUtil from '../utils/CommonUtil';

export class LianjiaDealCollector extends LianjiaCollector {
  constructor(html){
    let mapping = {
      'houseid' : '.listContent .info .title a', //text "兴港花园三期 2室2厅 48.87平米" href "https://xm.lianjia.com/chengjiao/105100817128.html"
      'house': '.listContent .info .address .houseInfo',  //"东南 | 简装"
      'dealdate': '.listContent .info .address .dealDate', //"2017.06.03"
      'price' : '.listContent .info .address .totalPrice .number', //"160"
      'position': '.listContent .info .flood .positionInfo', //"高楼层(共11层) 2000年建塔楼"
      'unitprice': '.listContent .info .flood .unitPrice .number', //"32740"
      'cycle': '.listContent .info .dealCycleeInfo .dealCycleTxt',  //"挂牌620万成交周期23天"
      'page': '.resultDes .total span' //"53"
    }
    super(html, mapping);
  }

  async save(){
    const result = super.collect();
    if(!result['houseid'] || !result['houseid'].length){
      throw new Error(`LianjiaDealCollector save error: collect html without house ids`);
    }
    let pageSize = result['houseid'].length;
    for(let i=0;i<pageSize;i++){
      try{
        let obj = {};
        obj['houseid'] = this._getId(result['houseid'].eq(i).attr('href'));
        obj['price'] = result['price'].eq(i).text();
        obj['unitprice'] = result['unitprice'].eq(i).text();
        this._saveHouse(Object.assign({}, obj), result, i);
        obj['dealtime'] = CommonUtil.formatDate(new Date(Date.parse(result['dealdate'].eq(i).text())));
        let cycleInfo = this._getCycleInfo(result['cycle'].eq(i).text());
        obj['targetprice'] = cycleInfo['targetprice'];
        obj['period'] = cycleInfo['period'];
        //Save deal
        let sqlstr = `SELECT houseid from deal where houseid = ${obj['houseid']}`;
        logger.debug(sqlstr);
        let houseIds = await db.query(sqlstr);
        if(houseIds.length == 0){
          sqlstr = `INSERT into deal (houseid, dealtime, price, unitprice, targetprice, period) VALUES(${obj.houseid},"${obj.dealtime}",${obj.price},${obj.unitprice},${obj.targetprice},${obj.period})`;
          logger.debug(sqlstr);
          db.query(sqlstr).catch(err =>{
            logger.error(`Error when insert deal ${obj.houseid}, will ignore it`);
          });
        }else{
          logger.debug(`House deal for ${obj.houseid} already exist`);
        }
      }catch(ex){
        logger.error(`LianjiaDealCollector save error for index ${i}: ${ex}`, {from: `LianjiaDealCollector`, code: '1001', msg: ex});
      }
    }
  }

  async _saveHouse(obj, result, i){
    let houseIds = await db.query(`SELECT tid from house where tid=${obj['houseid']}`);
    if(houseIds.length == 0){
      let houseInfo = this._getHouseInfo(result['house'].eq(i).text());
      let positionInfo = this._getPositionInfo(result['position'].eq(i).text());
      let basicInfo = this._getBasicInfo(result['houseid'].eq(i).text());
      Object.assign(obj, houseInfo);
      Object.assign(obj, positionInfo);
      Object.assign(obj, basicInfo);

      let select = `INSERT into house (tid, area, plotname, huxing, storey, totalstorey, orientation, decoration,houseyear)
        VALUES(${obj.houseid},${obj.area},"${obj.plotname}","${obj.huxing}","${obj.storey}",${obj.totalstorey},"${obj.orientation}","${obj.decoration}","${obj.houseyear}")`;
      logger.debug(select);
      db.query(select).then((house) =>{
        logger.log(`insert successfully ${obj.houseid}`);
      }).catch(err =>{
        logger.error(`Error when insert house ${obj.houseid}, will ignore it`, {from: `LianjiaDealCollector DB`, code: '1002', msg: err});
      });
    }
  }

  _getCycleInfo(text){
    let result = {targetprice: 0, period: 0};
    try{
      let parts = text.split('万');
      let targetprice = parseInt(parts[0].replace(/^\D+/g, ''));
      let period = parseInt(parts[1].replace(/^\D+/g, ''));
      result.targetprice = isNaN(targetprice) ? 0 : targetprice;
      result.period = isNaN(period) ? 0 : period;
    }catch(ex){
      logger.error(ex);
    }
    return result;
  }

  _getHouseInfo(text){
    let result = {orientation: '', decoration: ''};
    try{
      let parts = text.split('|');
      result.orientation = parts[0].trim();
      result.decoration = parts[1].trim().replace(/&nbsp;/gi,'');
    }catch(ex){
      logger.error(ex);
    }
    return result;
  }

  _getPositionInfo(text){
    let result = {storey: '', totalstorey: 0, houseyear: ''};
    try{
      let parts = text.split(/\(|\)/);
      result.storey = parts[0].trim();
      result.totalstorey = parseInt(parts[1].replace( /^\D+/g, ''));
      result.houseyear = parseInt(parts[2]) || '';
    }catch(ex){
      logger.error(ex);
    }
    return result;
  }

  _getBasicInfo(text){
    let result = {plotname: '', huxing: '', area: 0};
    try{
      let parts = text.split(' ');
      result.plotname = parts[0].trim();
      result.huxing = parts[1].trim();
      result.area = parseFloat(parts[2]);
    }catch(ex){
      logger.error(ex);
    }
    return result;
  }
}
