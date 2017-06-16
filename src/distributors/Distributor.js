export class Distributor {
  constructor(crawler, collector, httpDelay){
    this.crawler = crawler;
    this.collector = collector;
    this.httpDelay = httpDelay || 300;
  }
}
