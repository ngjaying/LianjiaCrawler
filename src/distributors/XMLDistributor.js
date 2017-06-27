import {Distributor} from './Distributor';
import {XMLCrawler} from '../crawlers/XMLCrawler';
import {XMListCollector} from '../collectors/XMListCollector';
import CommonUtil from '../utils/CommonUtil';
import logger from '../utils/logger';

export class XMLDistributor extends Distributor{

  constructor(){
    let crawler = new XMLCrawler();
    let collector = new XMListCollector();
    super(crawler, collector);
    this.page = 1;
    this.totalPage = -1;
  }

  async run(){
    let url;
    try{
      logger.debug(`New run for page status ${this.page}/${this.totalPage}`);
      if (this.totalPage >= 0 && this.page > this.totalPage) {
        if(this.failUrls.length > 0){
          logger.error(`Still have ${this.failUrls.length} fails`, {from: `XMCDistributor`, code: '1001', msg: JSON.stringify(this.failUrls)})
        }
        logger.debug(`Already crawl all XMList`);
        return false;
      }
      url = this._getUrl(this.page);
      await this.process(url);
    }catch(ex){
      if(ex.name == 'MSG_STOP_CRAWL'){
        // Set total page less than current page to stop crawling this type
        logger.debug(`set total page here ${this.totalPage}`);
        this.totalPage = this.page;
      }else{
        this.failUrls.push(url);
        logger.log(ex);
      }
    }
    this.page++;
    let sleepTime = Math.floor(Math.random() * 1000 + 500) + this.httpDelay;
    logger.debug(sleepTime);
    await CommonUtil.sleep(sleepTime);
    return await this.run();
  }

  async process(url){
    logger.debug(`crawl page ${url} of total page ${this.totalPage}`);
    await super.process(url);
    if(this.totalPage<0){
      this.totalPage = this.collector.getTotalPage();
    }
  }

  _getUrl(page){
    return `http://www.xmjydj.com/search/HouseListParital?page=${page}`;
  }
}
