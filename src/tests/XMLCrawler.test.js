import {XMLCrawler} from '../crawlers/XMLCrawler';
import logger from '../utils/logger';

const main = async ()=>{
  logger.enableDebug();
  let LC = new XMLCrawler();
  try{
    let body = await LC.crawl('http://www.xmjydj.com/search/HouseListParital?page=1');
    logger.log(body);
  }catch(ex){
    logger.error(ex);
  }
}
main();
