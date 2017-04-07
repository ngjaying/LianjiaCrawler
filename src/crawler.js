import req from 'request-promise';
import cheerio from 'cheerio';
import config from './config';
import logger from './utils/logger';
import db from './utils/db';

let reqOptions = {
  headers: {
    Accept:'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Language':'en-US,en;q=0.8,zh-CN;q=0.6,zh;q=0.4,zh-TW;q=0.2,ja;q=0.2',
    'Cache-Control':'no-cache',
    Connection:'keep-alive',
    Cookie:'lianjia_uuid=15e2f095-d460-49eb-86ce-af527a684e97; UM_distinctid=15ab752b2a34ae-03b0601076ca74-67f1a39-1fa400-15ab752b2a498c; all-lj=5ce010dbdb86da2c0bba3b0cda32eb3e; select_city=350200; _smt_uid=58c262fe.51c1f618; CNZZDATA1255847100=2017045841-1489133078-%7C1491546299; CNZZDATA1254525948=1951150616-1489134333-%7C1491548717; CNZZDATA1255633284=2091453512-1489130071-%7C1491544636; CNZZDATA1255604082=2141900817-1489132270-%7C1491546489; _ga=GA1.2.1749135290.1489134336; lianjia_ssid=4264b9ba-25b5-49d9-b55b-60fe1116abe1',
    Host:'xm.lianjia.com',
    Pragma:'no-cache',
    'Upgrade-Insecure-Requests':1,
    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.54 Safari/537.36'
  },
  encoding: 'utf-8'
};
let maxtry = 2;
let threadStatus = [];
let firsThreadStoptime;
let lastSaveResulttime;
// Crawl house pages
let page = 1;
let totalPage = 0; //Default to 0, will update by fetch page data
let houseUrls = [];
// Crawl house
let houseCursor = 0;
let housenum = 0;
// Fails
let failPages = [];
let failHouses = [];
let failPlots = [];

const initThreads = () => {
  threadStatus = new Array();
  for (var i = 0; i < config.threadCount; i++) {
    threadStatus.push("ready");
  }
}

const startThread = async(num, func) => {
  if (num < config.threadCount) {
    logger.debug("Thread " + num + " started.");
    threadStatus[num] = "running";
    await func(num);
    threadStatus[num] = "stopped";
    logger.debug("Thread " + num + " stopped.");
  }
}

const crawl = async () =>{
  initThreads();
  //分线程启动house page读取任务
  let threads = [];
  logger.debug(`Start crawl house page with ${config.threadCount}`);
  for (let i = 0; i < config.threadCount; i++) {
    threads.push(startThread(i, crawlHousePage));
  }
  await Promise.all(threads);
  logger.debug(`Complete crawl house page`);

  let houseIds = await db.query(`SELECT houseid from househistory where date ="${new Date().toLocaleDateString()}"`);
  if(houseIds.length > 0){
    logger.debug(`Already scan for ${houseIds.length}/${houseUrls.length} houses`);
    houseIds = houseIds.map(n=> n.houseid);
    houseUrls = houseUrls.filter(n=>{
      return houseIds.indexOf(parseInt(getId(n))) == -1;
    });
    logger.debug(`Resume for ${houseUrls.length} houses`);
  }
  initThreads();
  logger.debug(`Start crawl house with ${config.threadCount}`);
  for (let i = 0; i < config.threadCount; i++) {
    threads.push(startThread(i, crawlHouse));
  }
  await Promise.all(threads);
  logger.debug(`Complete crawl house`);
}

const getPage = () => {
  page++;
  return page-1;
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const crawlHousePage = async (threadNum, nextPage) => {
  if (nextPage == undefined) nextPage = getPage();
  //如果已读完列表中所有用户，或者全部线程已停止（往往是强制停止）则返回
  //if (nextPage > totalPage || isallthreadstopped()) {
  if (totalPage > 0 && nextPage > totalPage) {
      return;
  }
  let url = `${config.host}/ershoufang/pg${nextPage}/`;
  logger.debug(`crawl house page ${url}`);
  let body = await get(url);
  if(body && body.indexOf('流量异常')==-1){
    let $ = cheerio.load(body);
    $('.sellListContent li .info .title a').each((i, elem) =>{
      houseUrls.push($(elem).attr('href'));
    });
    logger.debug(`get total ${houseUrls.length} house urls`);
    if(totalPage<=0){
      let pageData = JSON.parse($('.page-box.house-lst-page-box').last().attr('page-data'));
      logger.debug(`set total page ${pageData.totalPage}`);
      totalPage = pageData.totalPage;
    }
  }else{
    failPages.push(nextPage);
    logger.error(`Crawl page ${url} fail!`);
  }
  await sleep(Math.floor(Math.random() * 1000) + config.httpDelay);
  await crawlHousePage(threadNum);
}

const getCursor = () => {
  houseCursor++;
  return houseCursor-1;
}

const compareDate = (date1, date2) => {
  return date1.getFullYear() == date2.getFullYear() && date1.getMonth() == date2.getMonth() && date1.getDate() == date2.getDate();
}

const crawlHouse = async(threadNum, cursor) => {
  if (cursor == undefined) cursor = getCursor();
  if (cursor >= houseUrls.length) {
    return;
  }
  let url = houseUrls[cursor];
  logger.debug(`crawl house ${url}`);
  let body = await get(url);
  if(body){
    let $ = cheerio.load(body, {decodeEntities: false});
    let newHouse = {};
    let houseId = getId(url);
    let plotUrl = $('.overview .content .aroundInfo .communityName a.info').attr('href');
    let plotId = getId(plotUrl);
    let areaEle = $('.overview .content .aroundInfo .areaName .info a');
    let district = $(areaEle[0]).text();
    let block = $(areaEle[1]).text();

    let houses = await db.query(`SELECT tid from house where tid = ${houseId}`);
    if(houses.length == 0){
      newHouse.tid = houseId;
      newHouse.area = parseFloat($('.overview .content .houseInfo .area .mainInfo').text());
      newHouse.plotid = plotId;

      newHouse.district = district;
      newHouse.block = block;
      newHouse.huxing = $('.overview .content .houseInfo .room .mainInfo').text();
      let storeyInfos = $('.overview .content .houseInfo .room .subInfo').text().split('/');
      newHouse.storey = storeyInfos[0];
      newHouse.totalstorey = parseInt(storeyInfos[1].substring(1));
      newHouse.orientation = $('.overview .content .houseInfo .type .mainInfo').text();
      newHouse.decoration = $('.overview .content .houseInfo .type .subInfo').text();

      let transEles = $('.transaction ul li');
      newHouse.releasetime = getValueFromEle($(transEles[0]).html());
      newHouse.tradetype = getValueFromEle($(transEles[1]).html());
      newHouse.lasttradetime = getValueFromEle($(transEles[2]).html());
      newHouse.lasttradetime = isNaN(Date.parse(newHouse.lasttradetime)) ? null : newHouse.lasttradetime;
      newHouse.housetype = getValueFromEle($(transEles[3]).html());
      newHouse.houseyear = getValueFromEle($(transEles[4]).html());
      newHouse.housecode = getValueFromEle($(transEles[8]).html());
      let select = `INSERT into house (tid, area, plotid, district, block, huxing, storey, totalstorey, orientation, decoration, releasetime, tradetype,lasttradetime,housetype,houseyear,housecode)VALUES(${newHouse.tid},${newHouse.area},${newHouse.plotid},"${newHouse.district}","${newHouse.block}","${newHouse.huxing}","${newHouse.storey}",${newHouse.totalstorey},"${newHouse.orientation}","${newHouse.decoration}","${newHouse.releasetime}","${newHouse.tradetype}",${newHouse.lasttradetime ? '\"' + newHouse.lasttradetime + '\"' : null},"${newHouse.housetype}","${newHouse.houseyear}","${newHouse.housecode}")`;
      logger.debug(select);
      db.query(select).then((house) =>{
        logger.log(`insert successfully ${newHouse.tid}`);
      }).catch(err =>{
        logger.error(`Error when insert house ${newHouse.tid}, will ignore it`);
      });

      select = `SELECT tid from plot where tid = ${newHouse.plotid}`;
      logger.debug(select);
      let plots = await db.query(select);
      logger.log(plots.length);
      if(plots.length == 0){
        await crawlPlot(`${config.host}${plotUrl}`, newHouse);
      }
    }
    let history = {};
    history.price = parseInt($('.overview .content .price .total').text());
    history.unitprice = parseInt($('.overview .content .price .text .unitPrice .unitPriceValue').text());
    history.houseid = houseId;
    history.plotid = plotId;
    history.plotname = $('.overview .content .aroundInfo .communityName a.info').text();
    history.date = new Date().toLocaleDateString();
    history.district = district;
    history.block = block;
    history.visit = $('.record .panel .totalCount span').text();
    //db.query(`UPDATE house SET price=${history.price}, unitprice=${history.unitprice} where tid=${history.tid}`);
    let historys = await db.query(`SELECT price, date from househistory where houseid = ${houseId} order by date desc limit 0,1`);
    let doInsert = true;
    if(historys.length == 0){
      history.isnew = 1;
      history.deltaprice = 0;
    }else{
      logger.debug(`Got existing history ${historys[0].date}`);
      if(compareDate(new Date(), new Date(historys[0].date))){
        logger.debug(`compare equal`);
        doInsert = false;
      }else{
        logger.debug(`compare not equal`);
        history.isnew = 0;
        history.deltaprice = history.price - historys[0].price;
      }
    }
    if(doInsert){
      let sqlstr = `INSERT into househistory (houseid, price, unitprice, plotid, plotname, district, block, date, visit, isnew, deltaprice) VALUES(${history.houseid},${history.price},${history.unitprice},${history.plotid},"${history.plotname}","${history.district}","${history.block}","${history.date}",${history.visit},${history.isnew},${history.deltaprice})`;
      logger.debug(sqlstr);
      db.query(sqlstr).catch(err =>{
        logger.error(`Error when insert househistory ${history.houseid}, will ignore it`);
      });
    }
  }else{
    failHouses.push(cursor);
    logger.error(`crawl house ${url} fail!`);
  }
  await sleep(Math.floor(Math.random() * 1000) + config.httpDelay);
  await crawlHouse(threadNum);
}

const crawlPlot = async (url, house) => {
  logger.debug(`crawl plot ${url}`);
  let body = await get(url);
  let plot = {tid: house.plotid, district: house.district, block: house.block};
  if(body){
    let $ = cheerio.load(body);
    plot.name = $('.xiaoquDetailHeader .xiaoquDetailHeaderContent .detailHeader .detailTitle').text();
    let infoEles = $('.xiaoquOverview .xiaoquDescribe .xiaoquInfo .xiaoquInfoItem .xiaoquInfoContent');
    plot.age = $(infoEles[0]).text();
    plot.archtype = $(infoEles[1]).text();
    plot.storeynum = parseInt($(infoEles[5]).text());
    plot.housenum = parseInt($(infoEles[6]).text());
    let select = `INSERT into plot (tid, name, district, block, age, archtype, storeynum, housenum) VALUES (${plot.tid},"${plot.name}","${plot.district}","${plot.block}","${plot.age}","${plot.archtype}",${plot.storeynum},${plot.housenum})`;
    logger.debug(select);
    db.query(select).catch(err =>{
      logger.error(`Error when insert plot ${plot.tid}, will ignore it`);
    });
  }else{
    failPlots.push([url, plot]);
  }
}

const getValueFromEle = (label) => label.substring(label.lastIndexOf('>') +1, label.length);

const getId = (url) => {
  let urlParts = url.split('/').filter(i => i);
  let urlPart = urlParts[urlParts.length -1];
  return urlPart.indexOf('.') >= 0 ? urlPart.substring(0, urlPart.indexOf('.')) : urlPart;
}

const get = async (url, retry=0) => {
  reqOptions.url = url;
  try{
    let body = await req.get(reqOptions);
    return body;
  }catch(err){
    if(retry>=maxtry){
      logger.error(`Retry getting ${url} with ${err}`);
      return null;
    }else{
      logger.log(`Error happens getting ${url}: ${err}, will retry once`);
      get(url, retry+1);
    }
  }
}

export default {crawl: crawl};
