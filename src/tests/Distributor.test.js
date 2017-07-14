import {LianjiaCrawler} from '../crawlers/LianjiaCrawler';
import {Distributor} from '../distributors/Distributor';
import {LianjiaDealCollector} from '../collectors/LianjiaDealCollector';
import {LianjiaPlotCollector} from '../collectors/LianjiaPlotCollector';
import {LianjiaHouseCollector} from '../collectors/LianjiaHouseCollector';
import logger from '../utils/logger';

const main = async ()=>{
  logger.enableDebug();
  //let LD = new LianjiaDistributor(true);
  let LD = new Distributor(
    new LianjiaCrawler(), 
    new LianjiaHouseCollector(null, null, new Date('2017-07-13')), 
    null, 
    {urls:[
      'https://xm.lianjia.com/ershoufang/siming/pg15co32ng1nb1sf1/',
      'https://xm.lianjia.com/ershoufang/siming/pg16co32ng1nb1sf1/',
      'https://xm.lianjia.com/ershoufang/siming/pg17co32ng1nb1sf1/',
  ]});
  try{
    await LD.run();
  }catch(ex){
    logger.error(ex);
  }
}
main();
