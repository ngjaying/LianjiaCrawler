import logger from '../utils/logger';
export class Distributor {
  constructor(crawler, collector, httpDelay){
    this.crawler = crawler;
    this.collector = collector;
    this.httpDelay = httpDelay || 300;
    this.failUrls = [];
  }

  setCollector(collector){
    this.collector = collector;
  }

  async process(url){
    try{
      let body = await this.crawler.crawl(url);
      this.collector.setHtml(body);
      if(this.totalPage<=0){
        this.totalPage = this.collector.getTotalPage();
      }
      await this.collector.save();
    }catch(ex){
      await this.handleError(ex, url);
    }
  }

  async handleError(ex, url){
    logger.error(ex);
    this.failUrls.push(url)
  }
}
