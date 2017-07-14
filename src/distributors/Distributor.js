import logger from '../utils/logger';
import CommonUtil from '../utils/CommonUtil';

export class Distributor {
  constructor(crawler, collector, reducer, options) {    
    this.crawler = crawler;
    this.collector = collector;
    this.reducer = reducer;
    if(!options){
      options = {};
    } 
    this.httpDelay = options.httpDelay || 300;
    this.urls = options.urls || [];
    this.failUrls = [];
  }

  setCollector(collector) {
    this.collector = collector;
  }

  async run(){
    logger.debug(`Distributor run`);
    for(let url of this.urls){
      logger.debug(`Process ${url}`);
      try{
        await this.process(url);
        let sleepTime = Math.floor(Math.random() * 1000 + 500) + this.httpDelay;
        logger.debug(sleepTime);
        await CommonUtil.sleep(sleepTime);
      }catch(ex){
        this.handleError(ex, url);
      }
    }
  }

  async process(url) {
    let body = await this.crawler.crawl(url);
    this.collector.setHtml(body);
    await this.collector.save();
  }

  async handleError(ex, url) {
    logger.error(ex);
    this.failUrls.push(url)
  }

  async start(name, delay = 3000) {
    logger.log(`Run task ${name}`);
    let retry = false;
    let distributor = this;
    try {
      retry = await distributor.run();
    } catch (ex) {
      logger.error(`Error happens, will run later ${ex}`);
      retry = true;
    }
    if (retry) {
      await new Promise((resolve) => {
        let timer1 = setInterval(async () => {
          try {
            logger.log(`Retry task ${name}`);
            await distributor.run();
            clearInterval(timer1);
            resolve();
          } catch (ex) {
            logger.error(`Error happens, will run later ${ex}`);
          }
        }, delay);
      });
    }
    if(this.reducer){
      await this.reducer.reduce();
    }
  }
}
