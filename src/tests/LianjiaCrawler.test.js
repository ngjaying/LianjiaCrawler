import {LianjiaCrawler} from '../crawlers/LianjiaCrawler';
import logger from '../utils/logger';

const main = async ()=>{
  logger.enableDebug();
  let LC = new LianjiaCrawler();
  try{
    let body = await LC.crawl('https://xm.lianjia.com/ershoufang/xiangan/co32ng1nb1/');
    logger.log(body);
  }catch(ex){
    logger.error(ex);
  }
}
main();
