import {Collector} from './Collector';
import logger from '../utils/logger';
import CommonUtil from '../utils/CommonUtil';
import db from '../utils/db';

export class XMNewHouseDealCollector extends Collector {
  constructor(html){
    let mapping = {
      'td' : 'td',
    }
    super(html, mapping);
  }

  async save(){
    const result = super.collect();
    if(!result['td'] || !result['td'].length){
      throw new Error(`XMNewHouseDealCollector save error: collect html without data`);
    }
    try{
      for(let i = 1;i<=6;i++){
        this._saveDeal(Object.assign({}, this._getTd(result['td'], i)));
      }
    }catch(ex){
      logger.error(`XMNewHouseDealCollector save error ${ex}`, {from: `XMNewHouseDealCollector`, code: '1001', msg: ex});
    }
  }

  async _saveDeal(obj){
    let date = CommonUtil.formatDate(new Date());
    let deals = await db.query(`SELECT date from newhousedeal where date="${date}" and district="${obj.district}" limit 0,1`);
    if(deals.length == 0){
      let sqlstr = `INSERT into newhousedeal (date, district, housecount, housearea, totalcount, totalarea) VALUES("${date}","${obj.district}",${obj.housecount}, ${obj.housearea}, ${obj.totalcount}, ${obj.totalarea})`;
      logger.debug(sqlstr);
      db.query(sqlstr).catch(err =>{
        logger.error(`Error when insert newhousedeal ${obj.district}, will ignore it`);
      });
    }else{
      logger.log(`Already crawl new house deal for ${obj.district}`)
    }
  }

  _getTd(tds, i){
    let result = {district: '', housecount: 0, housearea: 0, totalcount: 0, totalarea: 0};
    try{
      result.district = tds.eq(i).text().substring(0,2);
      result.housecount = tds.eq(i + 7).text();
      result.housearea = tds.eq(i + 14).text();
      result.totalcount = tds.eq(i + 21).text();
      result.totalarea = tds.eq(i + 28).text();
    }catch(ex){
      logger.error(ex);
    }
    return result;
  }

}
