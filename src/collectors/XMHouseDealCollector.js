import {Collector} from './Collector';
import logger from '../utils/logger';
import CommonUtil from '../utils/CommonUtil';
import db from '../utils/db';

export class XMHouseDealCollector extends Collector {
  constructor(html){
    let mapping = {
      'all' : '.h26 .pad5',
    }
    super(html, mapping);
  }

  async save(){
    const result = super.collect();
    if(!result['all'] || !result['all'].length){
      throw new Error(`XMHouseDealCollector save error: collect html without data`);
    }
    try{
      let obj = {};
      Object.assign(obj, this._getTd0(result['all'].eq(0).html()));
      Object.assign(obj, this._getTd1(result['all'].eq(1).html()));
      this._saveDeal(Object.assign({}, obj));
    }catch(ex){
      logger.error(`XMHouseDealCollector save error ${ex}`, {from: `XMHouseDealCollector`, code: '1001', msg: ex});
    }
  }

  async _saveDeal(obj){
    let date = CommonUtil.formatDate(new Date());
    let deals = await db.query(`SELECT date from housedeal where date="${date}" limit 0,1`);
    if(deals.length == 0){
      let sqlstr = `INSERT into housedeal (date, housecount, housearea, totalcount, totalarea) VALUES("${date}",${obj.housecount}, ${obj.housearea}, ${obj.totalcount}, ${obj.totalarea})`;
      logger.debug(sqlstr);
      db.query(sqlstr).catch(err =>{
        logger.error(`Error when insert deal ${obj.date}, will ignore it`);
      });
    }else{
      logger.log(`Already crawl deal for ${obj.date}`);
    }
  }

  _getTd0(text){
    let result = {totalcount:0, housecount:0};
    try{
      let parts = text.split(/\<br\>|\：/);
      result.housecount = parts[4];
      result.totalcount = parts[6];
    }catch(ex){
      logger.error(ex);
    }
    return result;
  }

  _getTd1(text){
    let result = {housearea: 0, totalarea: 0};
    try{
      //全角冒号
      let parts = text.split(/\<br\>|\：/);
      result.housearea = parts[1];
      result.totalarea = parts[3];
    }catch(ex){
      logger.error(ex);
    }
    return result;
  }
}
