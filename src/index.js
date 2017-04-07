import config from './config';
import logger from './utils/logger';
import db from './utils/db';
import crawler from './crawler';

let nextStartTime;//下次执行任务的具体时间
let isMainTaskRunning = false;
let taskStartTime = '02:05:00';//任务将于每天此时间开始
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
  }

  if (!nextStartTime) {
      nextStartTime = Date.parse(new Date().toDateString() + ' ' + taskStartTime);//默认为今天的此时间
      while (new Date().getTime() > nextStartTime) {//如果现在已经超过此时间，则加一天后再比较
          nextStartTime += 24 * 3600 * 1000;
      }
  }
  logger.log(`First task will start at ${(new Date(nextStartTime)).toLocaleString()}`);

  maintask();
}


const maintask = async () => {
  //满足以下三种条件之一时继续等待
  //1.当前运行中  2.时间未到
  if (isMainTaskRunning || new Date().getTime() < nextStartTime) {
      setTimeout(maintask, 1000);
      return;
  }
  //任务开始
  isMainTaskRunning = true;
  logger.log('Task start.');
  try{
    await crawler.crawl();
    maintask();
    // let rows = await db.query('INSERT into house (tid, price, unitprice, area, plotid) VALUES (12213213, 560, 40122, 142.1, 12321321)');
    // rows = await db.query('SELECT * from house');
  }catch(e){
    logger.error(e);
  }
}

main();
