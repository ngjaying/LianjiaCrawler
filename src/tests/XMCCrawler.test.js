import {Crawler} from '../crawlers/Crawler';
import logger from '../utils/logger';

const main = async ()=>{
  logger.enableDebug();
  let LC = new Crawler();
  try{
    let body = await LC.crawl('http://cloud.xm.gov.cn:88/xmzf/zf/newspfl.jsp');
    logger.log(body);
    body = await LC.crawl('http://cloud.xm.gov.cn:88/xmzf/zf/newspfj.jsp');
    logger.log(body);
    body = await LC.crawl('http://cloud.xm.gov.cn:88/xmzf/zf/newclf.jsp');
    logger.log(body);
  }catch(ex){
    logger.error(ex);
  }
}
main();
