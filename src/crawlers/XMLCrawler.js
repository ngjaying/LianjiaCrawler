import logger from '../utils/logger';
import req from 'request-promise';
import {Crawler} from './Crawler';

export class XMLCrawler extends Crawler{

  constructor(cookie){
    super(cookie);
  }

  async crawl(url){
    this._reqOptions.url = url;
    let body = await req.post(this._reqOptions);
    return body;
  }
}
