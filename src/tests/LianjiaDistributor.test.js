import {LianjiaDistributor} from '../distributors/LianjiaDistributor';
import logger from '../utils/logger';

const main = async ()=>{
  logger.enableDebug();
  //let LD = new LianjiaDistributor(true);
  let LD = new LianjiaDistributor();
  try{
    await LD.run();
  }catch(ex){
    logger.error(ex);
  }
}
main();
