import {XMCDistributor} from '../distributors/XMCDistributor';
import logger from '../utils/logger';

const main = async ()=>{
  logger.enableDebug();
  //let LD = new LianjiaDistributor(true);
  let LD = new XMCDistributor();
  try{
    await LD.run();
  }catch(ex){
    logger.error(ex);
  }
}
main();
