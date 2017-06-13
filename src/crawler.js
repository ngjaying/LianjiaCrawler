import cheerio from 'cheerio';
import config from './config';
import logger from './utils/logger';
import db from './utils/db';
import httpUtil from './utils/httpUtil';
import fs from 'fs';

let threadStatus = [];
let firsThreadStoptime;
let lastSaveResulttime;
// Crawl house pages
let page = 1;
let totalPage = 0; //Default to 0, will update by fetch page data
let districtPage = 0;
let houseUrls = [];
// Crawl house
let houseCursor = 0;
let housenum = 0;
// Fails
let failPages = [];
let failHouses = [];
let failPlots = [];
let interrupted = false;
let httpDelay = config.httpDelay;

const houseUrlsFile = './data/houses_';
const districts = ['xiangan', 'tongan', 'jimei', 'haicang', 'huli', 'siming'];
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

const init = () =>{
  // Crawl house pages
  page = 1;
  totalPage = 0; //Default to 0, will update by fetch page data
  districtPage = 0;
  houseUrls = [];
  // Crawl house
  houseCursor = 0;
  housenum = 0;
  // Fails
  failPages = [];
  failHouses = [];
  failPlots = [];
  interrupted = false;
  let hour = new Date().getHours();
  // if(hour >= 8 && hour <= 22){
  //   httpDelay = config.httpDelay;
  // }else{
  //   httpDelay = config.httpDelay * 30;
  // }
}

const crawl = async () =>{
  init();
  initThreads();
  //分线程启动house page读取任务
  let threads = [];
  logger.debug(`Read house page urls from file ${getDate()}`);
  let dc = 0;
  try{
    let obj = await readUrlsFromFile();
    dc = obj['dc'] || 0;
    page = obj['page']||page;
    houseUrls = obj['urls']||houseUrls;
    logger.log(`Resume from ${dc} of page ${page}, with total ${houseUrls.length}`);
  }catch(err){logger.log(`readUrlsFromFile error: ${err}, return empty array`)}
  logger.debug(`Read house page urls from file of ${houseUrls.length} urls`);
  if(dc < 6){
    districtPage = dc;
    logger.debug(`Start crawl house page with ${config.threadCount}`);
    for (let i = 0; i < config.threadCount; i++) {
      threads.push(startThread(i, crawlHousePage));
    }
    await Promise.all(threads);
    logger.debug(`Complete crawl house pages`);
    try{
      writeUrlsToFile(districtPage);
      logger.debug(`Complete write house pages to file ${getDate()}`);
    }catch(err){logger.error(`writeUrlsToFile error: ${err}`)}
  }
  if(!interrupted){
    let houseIds = await db.query(`SELECT houseid from househistory where date ="${formatDate(new Date())}"`);
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
  //logger.summary();
  return interrupted;
}

const getDate = () => {
  let nowDate = new Date();
  return nowDate.getFullYear()+'_'+(nowDate.getMonth()+1)+'_'+nowDate.getDate();
}

const writeUrlsToFile = (districtCount=6) => new Promise((resolve, reject) =>{
  fs.writeFile(`${houseUrlsFile}${getDate()}`, JSON.stringify({dc: districtCount, page: page-1, urls: houseUrls}), (err) => {
    if(err) reject(err);
    resolve();
  });
});

const readUrlsFromFile = () => new Promise((resolve, reject) =>{
  let fileName = `${houseUrlsFile}${getDate()}`;
  fs.stat(fileName, (err, stat) => {
    if(err) resolve({});
    if(stat && stat.isFile()){
      fs.readFile(fileName, (err, data) => {
        if(err) {
          logger.error(`readUrlsFromFile error: ${err}`)
          resolve({});
        }
        resolve(JSON.parse(data));
      });
    }
  })

});

const getPage = () => {
  page++;
  return page-1;
}

const getDistrictPage = () => {
  districtPage++;
  return districtPage;
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const crawlHousePage = async (threadNum, nextPage, nextDistrict) => {
  if(districtPage >= districts.length){
    logger.debug(`Crawl all district, return}`);
    return;
  }
  if (nextDistrict == undefined){
    nextDistrict = districtPage;
  }else{ //Start a new district
    logger.debug(`Start new district ${nextDistrict}`);
    totalPage = 0;
    page = 1;
  }
  if (nextPage == undefined) nextPage = getPage();
  //如果已读完列表中所有用户，或者全部线程已停止（往往是强制停止）则返回
  //if (nextPage > totalPage || isallthreadstopped()) {
  if (totalPage > 0 && nextPage > totalPage) {
      await crawlHousePage(threadNum, undefined, getDistrictPage());
  }
  let url = `${config.host}/ershoufang/${districts[nextDistrict]}/pg${nextPage}co32ng1nb1`;
  logger.debug(`crawl house page ${url}`);
  let body = await httpUtil.get(url);
  if(body){
    if(body=='stop'){
      interrupted = true;
      return;
    }
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
  let sleepTime = Math.floor(Math.random() * 1000 + 500) + httpDelay;
  await sleep(sleepTime);
  logger.debug(sleepTime);
  await crawlHousePage(threadNum);
}

const getCursor = () => {
  houseCursor++;
  return houseCursor-1;
}

const formatDate = date => date.toISOString().slice(0, 10);

const compareDate = (date1, date2) => {
  return date1.getFullYear() == date2.getFullYear() && date1.getMonth() == date2.getMonth() && date1.getDate() == date2.getDate();
}

const crawlHouse = async(threadNum, cursor) => {
  if (cursor == undefined) cursor = getCursor();
  if (cursor >= houseUrls.length) {
    return;
  }
  let url = houseUrls[cursor];
  try{
    logger.debug(`crawl house ${url}`);
    let body = await httpUtil.get(url);
    if(body){
      if(body=='stop'){
        interrupted = true;
        return;
      }
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
        newHouse.totalstorey = storeyInfos[1] ? parseInt(storeyInfos[1].substring(1)) : 0;
        newHouse.orientation = $('.overview .content .houseInfo .type .mainInfo').text();
        newHouse.decoration = $('.overview .content .houseInfo .type .subInfo').text();

        let transEles = $('.transaction ul li');
        newHouse.releasetime = getValueFromEle($(transEles[0]).html());
        newHouse.tradetype = getValueFromEle($(transEles[1]).html());
        newHouse.lasttradetime = getValueFromEle($(transEles[2]).html());
        newHouse.lasttradetime = isNaN(Date.parse(newHouse.lasttradetime)) ? null : newHouse.lasttradetime;
        newHouse.housetype = getValueFromEle($(transEles[3]).html());
        newHouse.houseyear = getValueFromEle($(transEles[4]).html());
        newHouse.housecode = $(transEles[8]).html()?getValueFromEle($(transEles[8]).html()):'';
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
      history.date = formatDate(new Date());
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
      logger.error(`crawl house ${url} fail: ${ex}`);
    }
  }catch(ex){
    failHouses.push(cursor);
    logger.error(`crawl house fail recorded`, {from: `crawlHouse/${url}`, code: '1001', msg: ex});
    if(cursor > 10 && failPages.length / cursor > 0.25){
      logger.log(`Too much fails, exit!`);
      return;
    }
  }
  let sleepTime = Math.floor(Math.random() * 1000 + 500) + httpDelay;
  await sleep(sleepTime);
  logger.debug(`sleep for ${sleepTime}`);
  await crawlHouse(threadNum);
}

const crawlPlot = async (url, house) => {
  logger.debug(`crawl plot ${url}`);
  let body = await httpUtil.get(url);
  let plot = {tid: house.plotid, district: house.district, block: house.block};
  try{
    if(body){
      if(body=='stop'){
        interrupted = true;
        return;
      }
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
      logger.error(`crawl plot ${url} fail: ${ex}`);
    }
  }catch(ex){
    failPlots.push([url, plot]);
    logger.error(`crawl house fail recorded ${ex}`, {from: `crawlHouse/${url}`, code: '1002', msg: ex});
  }
}

const getValueFromEle = (label) => label.substring(label.lastIndexOf('>') +1, label.length);

const getId = (url='') => {
  let urlParts = url.split('/').filter(i => i);
  let urlPart = urlParts[urlParts.length -1];
  return urlPart.indexOf('.') >= 0 ? urlPart.substring(0, urlPart.indexOf('.')) : urlPart;
}

export default {crawl: crawl};
