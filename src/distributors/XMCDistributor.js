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
    await this._doRun();
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
  }

  async process(url){
    logger.debug(`crawl page ${url}`);
    try{
      await super.process(url);
    }catch(ex){
      await this.handleError(ex, url);
    }
  }
}
