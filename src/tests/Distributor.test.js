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
    //NOTICE!! change here
    new LianjiaHouseCollector(null, '思明', new Date('2017-07-16')), 
    null, 
    {urls:[ //NOTICE!! change here
      'https://xm.lianjia.com/ershoufang/siming/pg19co32ng1nb1sf1/',
      'https://xm.lianjia.com/ershoufang/siming/pg20co32ng1nb1sf1/',
      'https://xm.lianjia.com/ershoufang/siming/pg49co32ng1nb1sf1/',
      'https://xm.lianjia.com/ershoufang/siming/pg50co32ng1nb1sf1/',
      'https://xm.lianjia.com/ershoufang/siming/pg56co32ng1nb1sf1/',
      'https://xm.lianjia.com/ershoufang/siming/pg57co32ng1nb1sf1/',
  ]});
  try{
    await LD.run();
  }catch(ex){
    logger.error(ex);
  }
}
main();
