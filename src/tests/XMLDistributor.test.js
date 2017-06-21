import {XMLDistributor} from '../distributors/XMLDistributor';
import logger from '../utils/logger';

const main = async ()=>{
  logger.enableDebug();
  //let LD = new LianjiaDistributor(true);
  let LD = new XMLDistributor();
  try{
    await LD.run();
  }catch(ex){
    logger.error(ex);
  }
}
main();
