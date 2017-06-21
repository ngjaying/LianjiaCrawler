import {Collector} from './Collector';
import logger from '../utils/logger';
import CommonUtil from '../utils/CommonUtil';
import db from '../utils/db';

export class XMSummaryCollector extends Collector {
  constructor(html){
    let mapping = {
      'all' : '.h26 .pad5', /* html for 2 "· 数据截止至2017-6-19 23:30:18<br>
                                        · 在售楼盘总数：882<br>
                                        · 批准住宅套数：292760<br>
                                        · 可售住宅套数：9417" */
    }
    super(html, mapping);
  }

  async save(){
    const result = super.collect();
    if(!result['all'] || !result['all'].length){
      throw new Error(`XMSummaryCollector save error: collect html without data`);
    }
    try{
      let obj = {};
      Object.assign(obj, this._getTd0(result['all'].eq(0).html()));
      Object.assign(obj, this._getTd1(result['all'].eq(1).html()));
      this._saveSummary(Object.assign({}, obj));
    }catch(ex){
      logger.error(`LianjiaPlotCollector save error ${ex}`, {from: `XMSummaryCollector`, code: '1001', msg: ex});
    }
  }

  async _saveSummary(obj){
    let summaries = await db.query(`SELECT date from housesummary where date="${obj.date}" limit 0,1`);
    if(summaries.length == 0){
      let sqlstr = `INSERT into housesummary (date, totalproperty, approvecount, salecount, approvearea, salearea, soldcount, soldarea) VALUES("${obj.date}",${obj.totalproperty}, ${obj.approvecount}, ${obj.salecount}, ${obj.approvearea}, ${obj.salearea}, ${obj.soldcount}, ${obj.soldarea})`;
      logger.debug(sqlstr);
      db.query(sqlstr).catch(err =>{
        logger.error(`Error when insert housesummary ${obj.date}, will ignore it`);
      });
    }else{
      logger.log(`Already crawl summary for ${obj.date}`)
    }
  }

  _getTd0(text){
    let result = {date: '', totalproperty: 0, approvecount: 0, salecount: 0};
    try{
      let parts = text.split('<br>');
      let date = parts[0].match('[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}');
      result.date = date ? date[0] : '';
      result.totalproperty = CommonUtil.convertStringToInt(parts[1]);
      result.approvecount = CommonUtil.convertStringToInt(parts[2]);
      result.salecount = CommonUtil.convertStringToInt(parts[3]);
    }catch(ex){
      logger.error(ex);
    }
    return result;
  }

  _getTd1(text){
    let result = {approvearea: 0, salearea: 0, soldcount: 0, soldarea: 0};
    try{
      //全角冒号
      let parts = text.split(/\<br\>|\：/);
      result.approvearea = parts[1];
      result.salearea = parts[3];
      result.soldcount = parts[5];
      result.soldarea = parts[7];
    }catch(ex){
      logger.error(ex);
    }
    return result;
  }
}
