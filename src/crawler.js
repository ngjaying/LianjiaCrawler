import req from 'request-promise';
import cheerio from 'cheerio';
import config from './config';
import logger from './utils/logger';
import db from './utils/db';

let reqOptions = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1)' +
      ' AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.65 Safari/537.36'
  },
  encoding: 'utf-8'
};
let maxtry = 2;
let page = 1;
let housenum = 0;
const crawl = () =>{
  return crawlHouse('http://xm.lianjia.com/ershoufang/105092686498.html');
//  return crawlHousePage(config.startUrl);
}

const crawlHousePage = async (url) => {
  logger.debug(`crawl house page ${url}`);
  let body = await get(url);
  if(body){
    let $ = cheerio.load(body);
    let houseUrls = [];
    $('.sellListContent li .info .title a').each((i, elem) =>{
      houseUrls.push($(elem).attr('href'));
    });
    logger.debug(`get ${houseUrls.length} house urls`);
    //read houses

    // get next page
    let pageData = JSON.parse($('.page-box.house-lst-page-box').last().attr('page-data'));
    logger.debug(`page ${pageData.curPage}`);
    if(pageData.curPage < pageData.totalPage){
      page = pageData.curPage + 1;
      crawlHousePage(`${config.startUrl}/pg${page}/`);
    }
  }else{
    page++;
    crawlHousePage(`${config.startUrl}/pg${page}/`);
  }
}

const crawlHouse = async(url) => {
  logger.debug(`crawl house ${url}`);
  housenum++;
  let body = await get(url);
  if(body){
    let $ = cheerio.load(body, {decodeEntities: false});
    let newHouse = {};
    let houseId = getId(url);
    newHouse.tid = houseId;
    newHouse.price = $('.overview .content .price .total').text();
    newHouse.unitprice = parseInt($('.overview .content .price .text .unitPrice .unitPriceValue').text());
    let houses = await db.query(`SELECT tid from house where tid = ${houseId}`);
    if(houses.length > 0){
      db.query(`UPDATE house SET price=${newHouse.price}, unitprice=${newHouse.unitprice} where tid=${newHouse.tid}`);
      //TODO update househistory
    }else{
      newHouse.area = parseFloat($('.overview .content .houseInfo .area .mainInfo').text());
      let plotUrl = $('.overview .content .aroundInfo .communityName a.info').attr('href');
      newHouse.plotid = getId(plotUrl);
      let areaEle = $('.overview .content .aroundInfo .areaName .info a');
      newHouse.district = $(areaEle[0]).text();
      newHouse.block = $(areaEle[1]).text();
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
      newHouse.housetype = getValueFromEle($(transEles[3]).html());
      newHouse.houseyear = getValueFromEle($(transEles[4]).html());
      newHouse.housecode = getValueFromEle($(transEles[8]).html());
      let select = `INSERT into house (tid, price, unitprice, area, plotid, district, block, huxing, storey, totalstorey, orientation, decoration, releasetime, tradetype,lasttradetime,housetype,houseyear,housecode)VALUES(${newHouse.tid},${newHouse.price},${newHouse.unitprice},${newHouse.area},${newHouse.plotid},"${newHouse.district}","${newHouse.block}","${newHouse.huxing}","${newHouse.storey}",${newHouse.totalstorey},"${newHouse.orientation}","${newHouse.decoration}","${newHouse.releasetime}","${newHouse.tradetype}","${newHouse.lasttradetime}","${newHouse.housetype}","${newHouse.houseyear}","${newHouse.housecode}")`;
      logger.debug(select);
      db.query(select).then((house) =>{
        logger.log(`insert successfully ${house.tid}`);
      });

      select = `SELECT tid from plot where tid = ${newHouse.plotid}`;
      logger.debug(select);
      let plots = await db.query(select);
      logger.log(plots.length);
      if(plots.length == 0){
        crawlPlot(`http://xm.lianjia.com${plotUrl}`, newHouse);
      }
    }
  }
}

const crawlPlot = async (url, house) => {
  logger.debug(`crawl plot ${url}`);
  let body = await get(url);
  if(body){
    let $ = cheerio.load(body);
    let plot = {tid: house.plotid, district: house.district, block: house.block};
    let infoEles = $('.xiaoquOverview .xiaoquDescribe .xiaoquInfo .xiaoquInfoItem .xiaoquInfoContent');
    plot.age = $(infoEles[0]).text();
    plot.archtype = $(infoEles[1]).text();
    plot.storeynum = parseInt($(infoEles[5]).text());
    plot.housenum = parseInt($(infoEles[6]).text());
    let select = `INSERT into plot (tid, district, block, age, archtype, storeynum, housenum) VALUES (${plot.tid},"${plot.district}","${plot.block}","${plot.age}","${plot.archtype}",${plot.storeynum},${plot.housenum})`;
    logger.debug(select);
    db.query(select);
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
