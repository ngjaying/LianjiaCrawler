import config from './config';
import logger from './utils/logger';
import db from './utils/db';
import crawler from './crawler';
import {LianjiaDistributor} from './distributors/LianjiaDistributor';
import {XMCDistributor} from './distributors/XMCDistributor';
import {XMLDistributor} from './distributors/XMLDistributor';

let nextStartTime;//下次执行任务的具体时间
let isMainTaskRunning = false;
let isNew = false;
let taskStartTime = '18:05:00';//任务将于每天此时间开始
const main = () => {
  //logger.enableDebug();
  //处理传入参数
  if (process.argv.length > 2) {
      let argv = new Array();
      for (let i = 2; i < process.argv.length; i++) {
          argv.push(process.argv[i].trim().toLowerCase());
      }
      if (argv.indexOf('-i') != -1)//加参数-i则1秒后立即启动，否则按指定时间启动
          nextStartTime = new Date().getTime() + 1000;
      if (argv.indexOf('-db') != -1)//加参数-db则显示调试代码(DeBug)
          logger.enableDebug();
      if(argv.indexOf('-n') != -1) //全新运行
        isNew = true;
  }

  if (!nextStartTime) {
      nextStartTime = Date.parse(new Date().toDateString() + ' ' + taskStartTime);//默认为今天的此时间
  }
  logger.log(`First task will start at ${(new Date(nextStartTime)).toLocaleString()}`);
  maintask(isNew);
}


const maintask = async (isNew) => {
  //满足以下三种条件之一时继续等待
  //1.当前运行中  2.时间未到
  if (isMainTaskRunning || new Date().getTime() < nextStartTime) {
      setTimeout(()=>maintask(isNew), 1000);
      return;
  }
  //任务开始
  isMainTaskRunning = true;
  logger.log('Main Task start.');
  let tasks = [];
  let LD = new LianjiaDistributor(isNew);
  tasks.push(LD.start('Lianjia'));
  let XMCD = new XMCDistributor();
  tasks.push(XMCD.start('XMC'));
  let XMLD = new XMLDistributor();
  tasks.push(XMLD.start('XML'));
  try{
    await Promise.all(tasks);
    logger.log('ALL DONE!');
  }catch(ex){
    //Should not happen here
    logger.error(`Error happens in promise all tasks ${ex}`);
  }
  isMainTaskRunning = false;
  logger.summary();
  //Schedule for next time
  nextStartTime += 24 * 3600 * 1000;
  logger.log(`Next task will start at ${(new Date(nextStartTime)).toLocaleString()}`);  
  process.nextTick(()=>maintask(isNew));
}

main();
