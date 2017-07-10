import {Distributor} from './Distributor';
import {Crawler} from '../crawlers/Crawler';
import {XMSummaryCollector} from '../collectors/XMSummaryCollector';
import {XMNewHouseDealCollector} from '../collectors/XMNewHouseDealCollector';
import {XMHouseDealCollector} from '../collectors/XMHouseDealCollector';
import db from '../utils/db';
import CommonUtil from '../utils/CommonUtil';
import logger from '../utils/logger';

export class XMCDistributor extends Distributor{

  constructor(){
    let crawler = new Crawler();
    super(crawler, null);
  }

  async run(){
    let hour = CommonUtil.getHour();
    if(hour >= 18){
      return await this._doRun();
    }else{
      logger.log(`XMCDistributor will only run after 18:00, run after ${18-hour} hours`);
      return new Promise(resolve => setTimeout(async ()=>{
        resolve(await this.run());
      }, (18 - hour) * 3600 * 1000));
    }
  }

  async _doRun(){
    let urlobjs = [{
      url: 'http://cloud.xm.gov.cn:88/xmzf/zf/newspfl.jsp', collector: new XMSummaryCollector()
    },{
      url: 'http://cloud.xm.gov.cn:88/xmzf/zf/newspfj.jsp', collector: new XMNewHouseDealCollector()
    }, {
      url: 'http://cloud.xm.gov.cn:88/xmzf/zf/newclf.jsp', collector: new XMHouseDealCollector()
    }];
    for(let urlobj of urlobjs){
      this.setCollector(urlobj.collector);
      await this.process(urlobj.url);
    }
    if(this.failUrls.length > 0){
      logger.error(`Still have ${this.failUrls.length} fails`, {from: `XMCDistributor`, code: '1001', msg: JSON.stringify(this.failUrls)})
    }
    return false;
  }

  async process(url){
    logger.log(`crawl page ${url}`);
    try{
      await super.process(url);
    }catch(ex){
      await this.handleError(ex, url);
    }
  }
}
