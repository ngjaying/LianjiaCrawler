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
    let body = await this.crawler.crawl(url);
    this.collector.setHtml(body);
    await this.collector.save();    
  }

  async handleError(ex, url){
    logger.error(ex);
    this.failUrls.push(url)
  }
}
