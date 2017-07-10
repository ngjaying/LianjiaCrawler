import {LianjiaCollector} from './LianjiaCollector';
import logger from '../utils/logger';
import db from '../utils/db';
import CommonUtil from '../utils/CommonUtil';

export class LianjiaHouseCollector extends LianjiaCollector {
  constructor(html, district){
    let mapping = {
      'image' : '.sellListContent .img img', //data-original "https://image1.ljcdn.com/350200-inspection/f2599b8e-8c42-4f3f-b5d3-99fb6fc7d369.jpg.232x174.jpg"
      'houseid' : '.sellListContent .title a', //"https://xm.lianjia.com/ershoufang/105100823517.html" or "https://nl.hideproxy.me/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100737092.html&b=4"
      'price' : '.sellListContent .priceInfo .totalPrice span', //"429"
      'unitprice': '.sellListContent .priceInfo .unitPrice span', //"单价34879元/平米"
      'plot': '.sellListContent .address .houseInfo a',  // text "明发半岛祥湾A区 " href "https://xm.lianjia.com/xiaoqu/3911057442606/"
      'block': '.sellListContent .flood .positionInfo a', //"新店"
      'follow': '.sellListContent .followInfo',  //"1人关注 / 共0次带看 / 3天以前发布"
      'house': '.sellListContent .address .houseInfo',  //"明发半岛祥湾A区  | 3室2厅 | 128.55平米 | 南 北 | 精装"
      'position': '.sellListContent .flood .positionInfo', //"中楼层(共18层)2013年建板楼  -  新店"
      'page': '.resultDes .total span' //"53"
    }
    super(html, mapping);
    this.district = district || '';
  }

  setDistrict(district){
    this.district = district;
  }

  async save(){
    const result = super.collect();
    if(!result['houseid'] || !result['houseid'].length){
      throw new Error(`LianjiaHouseCollector save error: collect html without house ids`);
    }
    let pageSize = result['houseid'].length;
    for(let i=0;i<pageSize;i++){
      try{
        let obj = {};
        obj['image'] = result['image'].eq(i).attr('data-original');
        if(obj['image'] && !obj['image'].startsWith('http')){
          obj['image'] = 'https://image1.ljcdn.com' + obj['image'];
        }
        obj['houseid'] = this._getId(result['houseid'].eq(i).attr('href'));
        obj['price'] = result['price'].eq(i).text();
        obj['unitprice'] = CommonUtil.convertStringToInt(result['unitprice'].eq(i).text()) || 0;
        obj['plotid'] = this._getId(result['plot'].eq(i).attr('href'));
        obj['plotname'] = result['plot'].eq(i).text().trim();
        obj['block'] = result['block'].eq(i).text().trim();
        obj['visit'] = this._getVisit(result['follow'].eq(i).text());
        //This is async, so clone object as it is subject to change
        this._saveHouse(Object.assign({}, obj), result, i);
        //Save history
        let historys = await db.query(`SELECT price, date from househistory where houseid = ${obj['houseid']} order by date desc limit 0,1`);
        let doInsert = true;
        if(historys.length == 0){
          obj['isnew'] = 1;
          obj['deltaprice'] = 0;
        }else{
          logger.debug(`Got existing history ${historys[0].date}`);
          if(CommonUtil.compareDate(new Date(), new Date(historys[0].date))){
            logger.debug(`compare equal`);
            doInsert = false;
          }else{
            logger.debug(`compare not equal`);
            obj['isnew'] = 0;
            obj['deltaprice'] = obj['price'] - historys[0].price;
          }
        }
        if(doInsert){
          let sqlstr = `INSERT into househistory (houseid, price, unitprice, plotid, plotname, district, block, date, visit, isnew, deltaprice) VALUES(${obj.houseid},${obj.price},${obj.unitprice},${obj.plotid},"${obj.plotname}","${this.district}","${obj.block}","${CommonUtil.formatDate(new Date())}",${obj.visit},${obj.isnew},${obj.deltaprice})`;
          logger.debug(sqlstr);
          db.query(sqlstr).then(() =>{
            logger.debug(`insert history successfully ${obj.houseid}`);
          }).catch(err =>{
            logger.error(`Error when insert househistory ${obj.houseid}, will ignore it`);
          });
        }
      }catch(ex){
        logger.error(`LianjiaHouseCollector save error for index ${i}: ${ex}`, {from: `LianjiaHouseCollector`, code: '1001', msg: ex});
      }
    }
  }

  async _saveHouse(obj, result, i){
    let houses = await db.query(`SELECT image from house where tid=${obj['houseid']}`);
    if(houses.length == 0 || (!houses[0].image && obj.image)){
      let houseInfo = this._getHouseInfo(result['house'].eq(i).text());
      let positionInfo = this._getPositionInfo(result['position'].eq(i).text());
      obj = Object.assign(obj, houseInfo);
      obj = Object.assign(obj, positionInfo);
      let sql = '';
      if(houses.length == 0){
        sql = `INSERT into house (tid, area, plotid, plotname, district, block, image, huxing, storey, totalstorey, orientation, decoration,houseyear)
        VALUES(${obj.houseid},${obj.area},${obj.plotid},"${obj.plotname}","${this.district}","${obj.block}","${obj.image}","${obj.huxing}","${obj.storey}",${obj.totalstorey},"${obj.orientation}","${obj.decoration}","${obj.houseyear}")`;
      }else{
        sql = `UPDATE house set area=${obj.area},plotid=${obj.plotid},plotname="${obj.plotname}",
        district="${this.district}",block="${obj.block}",image="${obj.image}",huxing="${obj.huxing}",storey="${obj.storey}",
        totalstorey=${obj.totalstorey},orientation="${obj.orientation}",decoration="${obj.decoration}",houseyear="${obj.houseyear}"
        where tid=${obj.houseid}`;
      }      
      logger.debug(sql);
      db.query(sql).then((house) =>{
        logger.debug(`insert successfully ${obj.houseid}`);
      }).catch(err =>{
        logger.error(`Error when insert house ${obj.houseid}, will ignore it`, {from: `LianjiaHouseCollector DB`, code: '1002', msg: err});
      });
    }
  }

  _getVisit(text){
    let result = 0;
    try{
      result = CommonUtil.convertStringToInt(text.split('/')[1]) || 0;
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
      result.totalstorey = CommonUtil.convertStringToInt(parts[1]);
      result.houseyear = parseInt(parts[2]) || '';
    }catch(ex){
      logger.error(ex);
    }
    return result;
  }
}
