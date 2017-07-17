import {LianjiaReducer} from '../reducers/LianjiaReducer';
import logger from '../utils/logger';

const main = async ()=>{
  logger.enableDebug();
  let LD = new LianjiaReducer(new Date('2017-07-16'), new Date('2017-07-16'));
  try{
    await LD.reduce();
  }catch(ex){
    logger.error(ex);
  }
}
main();
