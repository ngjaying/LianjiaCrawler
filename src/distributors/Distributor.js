import logger from '../utils/logger';
export class Distributor {
  constructor(crawler, collector, reducer, httpDelay) {
    this.crawler = crawler;
    this.collector = collector;
    this.reducer = reducer;
    this.httpDelay = httpDelay || 300;
    this.failUrls = [];
  }

  setCollector(collector) {
    this.collector = collector;
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
