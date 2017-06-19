import {LianjiaCollector} from './LianjiaCollector';
import logger from '../utils/logger';
import db from '../utils/db';
import CommonUtil from '../utils/CommonUtil';

export class LianjiaPlotCollector extends LianjiaCollector {
  constructor(html){
    let mapping = {
      'title' : '.listContent .info .title a', //text "海峡国际社区二期" href "https://xm.lianjia.com/xiaoqu/3911063943127/" or "https://nl.hideproxy.me/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100737092.html&b=4"
      'district' : '.listContent .info .positionInfo .district', //"思明"
      'block': '.listContent .info .positionInfo .bizcircle', //"会展中心"
      'year': '.listContent .info .positionInfo',  // " / 2009年建成"
      'page': '.page-box.house-lst-page-box'
    }
    super(html, mapping);
  }

  async save(){
    const result = super.collect();    
    if(!result['title'] || !result['title'].length){
      throw new Error(`LianjiaPlotCollector save error: collect html without plot ids`);
    }
    let pageSize = result['title'].length;
    for(let i=0;i<pageSize;i++){
      try{
        let obj = {};
        obj['tid'] = this._getId(result['title'].eq(i).attr('href'));
        obj['name'] = result['title'].eq(i).text().trim();
        obj['district'] = result['district'].eq(i).text();
        obj['block'] = result['block'].eq(i).text();
        obj['age'] = this._getAge(result['year'].eq(i).text());

        this._savePlot(Object.assign({}, obj), result, i);
      }catch(ex){
        logger.error(`LianjiaPlotCollector save error for index ${i}: ${ex}`, {from: `LianjiaPlotCollector`, code: '1001', msg: ex});
      }
    }
  }

  async _savePlot(obj, result, i){
    let plotIds = await db.query(`SELECT tid from plot where tid=${obj['tid']}`);
    if(plotIds.length == 0){
      let select = `INSERT into plot (tid, name, district, block, age)
        VALUES(${obj.tid},"${obj.name}","${obj.district}","${obj.block}","${this.age}")`;
      logger.debug(select);
      db.query(select).then((plot) =>{
        logger.log(`insert successfully ${obj.tid}`);
      }).catch(err =>{
        logger.error(`Error when insert plot ${obj.tid}, will ignore it`, {from: `LianjiaPlotCollector DB`, code: '1002', msg: err});
      });
    }else{
      logger.debug(`Got existing plot ${obj['name']} and ${i}`);
    }
  }

  _getAge(text){
    let result = '';
    try{
      let parts = text.split('/');
      result = parseInt(parts[parts.length -1].trim());
      if(isNaN(result)){
        result='';
      }
    }catch(ex){
      logger.error(ex);
    }
    return result;
  }
}
