import {Collector} from './Collector';
import logger from '../utils/logger';
import db from '../utils/db';

export class LianjiaCollector extends Collector {
  constructor(html, district){
    let mapping = {
      'houseid' : '.sellListContent .title a', //"https://xm.lianjia.com/ershoufang/105100823517.html"
      'price' : '.sellListContent .priceInfo .totalPrice span', //"429"
      'unitprice': '.sellListContent .priceInfo .unitPrice span', //"单价34879元/平米"
      'plot': '.sellListContent .address .houseInfo a',  // text "明发半岛祥湾A区 " href "https://xm.lianjia.com/xiaoqu/3911057442606/"
      'block': '.sellListContent .flood .positionInfo a', //"新店"
      'follow': '.sellListContent .followInfo',  //"1人关注 / 共0次带看 / 3天以前发布"
      'house': '.sellListContent .address .houseInfo',  //"明发半岛祥湾A区  | 3室2厅 | 128.55平米 | 南 北 | 精装"
      'position': '.sellListContent .flood .positionInfo', //"中楼层(共18层)2013年建板楼  -  新店"
    }
    super(html, mapping);
    this.district = district;
  }

  async save(){
    let result = super.collect();
    let obj = {};
    if(!result['houseid'] || !result['houseid'].length){
      throw new Error(`LianjiaCollector save error: collect html without house ids`);
    }
    let pageSize = result['houseid'].length;
    for(let i=0;i<pageSize;i++){
      try{
        //TODO how to deal with houseid/plotid for annonymouse proxy
        obj['houseid'] = this._getId(result['houseid'].eq(i).attr('href'));
        obj['price'] = result['price'].eq(i).text();
        obj['unitprice'] = parseInt(result['unitprice'].eq(i).text().replace( /^\D+/g, '')) || 0;
        obj['plotid'] = this._getId(result['plot'].eq(i).attr('href'));
        obj['plotname'] = result['plot'].eq(i).text().trim();
        obj['block'] = result['block'].eq(i).text().trim();
        obj['visit'] = this._getVisit(result['follow'].eq(i).text());

        this._saveHouse(obj, result, i);
        //TODO later
        //this._savePlot(obj, result, i);

        //Save history
        let historys = await db.query(`SELECT price, date from househistory where houseid = ${obj['houseid']} order by date desc limit 0,1`);
        let doInsert = true;
        if(historys.length == 0){
          obj['isnew'] = 1;
          obj['deltaprice'] = 0;
        }else{
          logger.debug(`Got existing history ${historys[0].date}`);
          if(this._compareDate(new Date(), new Date(historys[0].date))){
            logger.debug(`compare equal`);
            doInsert = false;
          }else{
            logger.debug(`compare not equal`);
            obj['isnew'] = 0;
            obj['deltaprice'] = obj['price'] - historys[0].price;
          }
        }
        if(doInsert){
          let sqlstr = `INSERT into househistory (houseid, price, unitprice, plotid, plotname, district, block, date, visit, isnew, deltaprice) VALUES(${obj.houseid},${obj.price},${obj.unitprice},${obj.plotid},"${obj.plotname}","${this.district}","${obj.block}","${this._formatDate(new Date())}",${obj.visit},${obj.isnew},${obj.deltaprice})`;
          logger.debug(sqlstr);
          db.query(sqlstr).catch(err =>{
            logger.error(`Error when insert househistory ${obj.houseid}, will ignore it`);
          });
        }
      }catch(ex){
        logger.error(`LianjiaCollector save error for index ${i}: ${ex}`, {from: `LianjiaCollector`, code: '1001', msg: ex});
      }
    }
  }

  async _saveHouse(obj, result, i){
    let houseIds = await db.query(`SELECT tid from house where tid=${obj['houseid']}`);
    if(houseIds.length == 0){
      let houseInfo = this._getHouseInfo(result['house'].eq(i).text());
      let positionInfo = this._getPositionInfo(result['position'].eq(i).text());
      obj = Object.assign(obj, houseInfo);
      obj = Object.assign(obj, positionInfo);

      let select = `INSERT into house (tid, area, plotid, plotname, district, block, huxing, storey, totalstorey, orientation, decoration,houseyear)
        VALUES(${obj.houseid},${obj.area},${obj.plotid},"${obj.plotname}","${this.district}","${obj.block}","${obj.huxing}","${obj.storey}",${obj.totalstorey},"${obj.orientation}","${obj.decoration}","${obj.houseyear}")`;
      logger.debug(select);
      db.query(select).then((house) =>{
        logger.log(`insert successfully ${obj.houseid}`);
      }).catch(err =>{
        logger.error(`Error when insert house ${obj.houseid}, will ignore it`, {from: `LianjiaCollector DB`, code: '1002', msg: err});
      });
    }
  }
  //TODO later
  async _savePlot(obj, result, i){
    let plots = await db.query(`SELECT tid from plot where tid = ${obj.plotid}`);
    if(plots.length == 0){

    }
  }

  _getId(url=''){
    let urlParts = url.split('/').filter(i => i);
    let urlPart = urlParts[urlParts.length -1];
    return urlPart.indexOf('.') >= 0 ? urlPart.substring(0, urlPart.indexOf('.')) : urlPart;
  }

  _getVisit(text){
    let result = 0;
    try{
      result = parseInt(text.split('/')[1].replace( /^\D+/g, '')) || 0;
    }catch(ex){
      logger.error(ex);
    }
    return result;
  }

  _getHouseInfo(text){
    let result = {area: 0, huxing: '', orientation: '', decoration: ''};
    try{
      let parts = text.split('|');
      result.area = parseFloat(parts[2]);
      result.huxing = parts[1].trim();
      result.orientation = parts[3].trim();
      result.decoration = parts[4].trim();
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

  _formatDate(date){
    return date.toISOString().slice(0, 10);
  }

  _compareDate(date1, date2){
    return date1.getFullYear() == date2.getFullYear() && date1.getMonth() == date2.getMonth() && date1.getDate() == date2.getDate();
  }
}
