import {Collector} from './Collector';
import logger from '../utils/logger';
import db from '../utils/db';
import CommonUtil from '../utils/CommonUtil';

export class XMListCollector extends Collector {
  constructor(html){
    let mapping = {
      'tds': '#tbClfList td',
      'total': '#RowCount' //val "53"
    }
    super(html, mapping);
    this.pageSize = 20;
  }

  async save(){
    const result = super.collect();
    if(!result['tds'] || !result['tds'].length){
      throw new Error(`XMListCollector save error: collect html without tds`);
    }
    let pageSize = Math.floor(result['tds'].length/6);
    for(let i=0;i<pageSize;i++){
      try{
        await this._saveHouse(Object.assign({}, this._getTd(result['tds'], i)));
      }catch(ex){
        if(ex['name'] == 'MSG_STOP_CRAWL') throw ex;
        logger.error(`XMListCollector save error for index ${i}: ${ex}`, {from: `XMListCollector`, code: '1001', msg: ex});
      }
    }
  }

  getTotalPage(){
    let result = super.collect();
    let totalCount = parseInt(result['total'].val());
    return Math.ceil(totalCount/20);
  }

  async _saveHouse(obj){
    let updatedate = await db.query(`SELECT lastupdateddate from xmhouse where houseid=${obj['houseid']}`);
    if(updatedate.length == 0){
      let select = `INSERT into xmhouse (houseid, name, district, block, huxing, area, price, date, lastupdateddate)
        VALUES(${obj.houseid},"${obj.name}","${obj.district}","${obj.block}","${obj.huxing}", ${obj.area}, ${obj.price}, "${obj.date}", "${CommonUtil.formatDate(new Date())}")`;
      logger.debug(select);
      db.query(select).then((plot) =>{
        logger.log(`insert successfully ${obj.houseid}`);
      }).catch(err =>{
        logger.error(`Error when insert house ${obj.houseid}, will ignore it`, {from: `XMListCollector DB`, code: '1002', msg: err});
      });
    }else{
      logger.debug(`Got existing house ${updatedate[0].lastupdateddate}`);
      if(CommonUtil.compareDate(new Date(), new Date(updatedate[0].lastupdateddate))){
        logger.debug(`compare equal houseid=${obj['houseid']}`);
        //throw {name: 'MSG_STOP_CRAWL', message: `XMList already crawl up do date`};
      }else{
        logger.debug(`compare not equal`);
        //run update
        let sqlstr = `UPDATE xmhouse set lastupdateddate = "${CommonUtil.formatDate(new Date())}" where houseid=${obj['houseid']}`;
        logger.debug(sqlstr);
        db.query(sqlstr).then(() =>{
          logger.log(`update successfully ${obj.houseid}`);
        }).catch(err =>{
          logger.error(`Error when update house ${obj.houseid}, will ignore it`, {from: `XMListCollector DB`, code: '1002', msg: err});
        });
      }
    }
  }

  _getTd(tds, i){
    let result = {houseid: 0, name: '', district: '', block: '', huxing: '', area: '', date: '', price: 0};
    try{
      let link = tds.eq(6*i +2).children().attr('href');
      result.houseid = link.substring(link.indexOf('=')+1, link.indexOf('&'));
      let title = tds.eq(6*i +2).text();
      result.name = title;
      let district = '';
      if(title.indexOf('区')==2){
        district = title.substring(0, 2);
        title = title.substring(3);
      }
      result.district = district == '开元' ? '思明' : district;
      result.block = title.substring(0, title.indexOf('*'));
      result.huxing = tds.eq(6*i + 3).text();
      result.area = parseInt(tds.eq(6*i + 4).text());
      result.price = parseInt(tds.eq(6*i + 5).text());
      result.date = CommonUtil.formatDate(new Date(tds.eq(6*i + 6).text()));
    }catch(ex){
      logger.error(ex);
    }
    return result;
  }
}
