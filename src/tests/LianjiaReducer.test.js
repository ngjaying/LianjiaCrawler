import {LianjiaReducer} from '../reducers/LianjiaReducer';
import logger from '../utils/logger';

const main = async ()=>{
  logger.enableDebug();
  let LD = new LianjiaReducer();
  try{
    await LD.reduce();
  }catch(ex){
    logger.error(ex);
  }
}
main();
