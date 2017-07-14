import db from '../utils/db';
import CommonUtil from '../utils/CommonUtil';
import logger from '../utils/logger';

export class LianjiaReducer {
  constructor(startDate, endDate) {
    this.startDate = startDate || '';
    this.endDate = endDate || '';
  }

  async reduce() {
    let d = this.startDate;
    if (!d) {
      //Get the current progress
      d = new Date();
      let sql = `SELECT date from ljsummary order by date desc limit 0,1`;
      logger.debug(`Get LianjiaReducer progress by ${sql}`);
      let sqlResult = await db.query(sql);
      if (sqlResult.length == 0) {
        sql = `SELECT date from househistory order by date asc limit 0,1`;
        logger.log(`No start yet, get LianjiaReducer start by ${sql}`);
        sqlResult = await db.query(sql);
        if (sqlResult.length == 0) {
          logger.log('No date yet!');
          return;
        }
        d = new Date(sqlResult[0].date);
      } else {
        d = new Date(sqlResult[0].date);
        d.setDate(d.getDate() + 1);
      }
    }
    if (!this.endDate) {
      this.endDate = new Date();
    }
    logger.debug(`startDate: ${d}, endDate: ${this.endDate}`);
    while (CommonUtil.compareDate(this.endDate, d) >= 0) {
      logger.log(`Summary from date ${CommonUtil.formatDate(d)}`);
      let lastday = new Date(d).setDate(d.getDate() - 1);
      await Promise.all([
        this.summaryForAll(d, lastday),
        this.summaryBySpace('district', 1, d, lastday),
        this.summaryBySpace('block', 2, d, lastday),
        this.summaryBySpace('plotname', 3, d, lastday)
      ]);
      d.setDate(d.getDate() + 1);
    }
  }

  async summaryForAll(d, lastday) {
    let salenum, salediff, newnum, newdiff, incnum, incdiff, rednum, reddiff, lowprice, lowdiff, highprice, highdiff,
      lowunitprice, lowunitdiff, highunitprice, highunitdiff, averageprice, averagediff, visitnum, newvisit, newvisitdiff;
    let sql, sqlResult, lastResult;
    let isWeek = d.getDay() == 0,
      isMonth = d.getDate() == new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate(),
      isYear = d.getMonth() == 11 && d.getDate() == 31;
    let tasks = [
      (async () => {
        sql = `SELECT count(id) as total from househistory where date="${CommonUtil.formatDate(d)}"`;
        logger.debug(sql);
        sqlResult = await db.query(sql);
        salenum = sqlResult.length > 0 ? sqlResult[0].total : 0;
      })(), (async () => {
        sql = `SELECT count(id) as total from househistory where date="${CommonUtil.formatDate(d)}" and isnew=1`;
        logger.debug(sql);
        sqlResult = await db.query(sql);
        newnum = sqlResult.length > 0 ? sqlResult[0].total : 0;
      })(), (async () => {
        sql = `SELECT count(id) as total from househistory where date="${CommonUtil.formatDate(d)}" and deltaprice>0`;
        logger.debug(sql);
        sqlResult = await db.query(sql);
        incnum = sqlResult.length > 0 ? sqlResult[0].total : 0;
      })(), (async () => {
        sql = `SELECT count(id) as total from househistory where date="${CommonUtil.formatDate(d)}" and deltaprice<0`;
        logger.debug(sql);
        sqlResult = await db.query(sql);
        rednum = sqlResult.length > 0 ? sqlResult[0].total : 0;
      })(), (async () => {
        sql = `SELECT price from househistory where date="${CommonUtil.formatDate(d)}" order by price asc limit 1`;
        logger.debug(sql);
        sqlResult = await db.query(sql);
        lowprice = sqlResult.length > 0 ? sqlResult[0].price : 0;
      })(), (async () => {
        sql = `SELECT price from househistory where date="${CommonUtil.formatDate(d)}" order by price desc limit 1`;
        logger.debug(sql);
        sqlResult = await db.query(sql);
        highprice = sqlResult.length > 0 ? sqlResult[0].price : 0;
      })(), (async () => {
        sql = `SELECT unitprice from househistory where date="${CommonUtil.formatDate(d)}" order by unitprice asc limit 1`;
        logger.debug(sql);
        sqlResult = await db.query(sql);
        lowunitprice = sqlResult.length > 0 ? sqlResult[0].unitprice : 0;
      })(), (async () => {
        sql = `SELECT unitprice from househistory where date="${CommonUtil.formatDate(d)}" order by unitprice desc limit 1`;
        logger.debug(sql);
        sqlResult = await db.query(sql);
        highunitprice = sqlResult.length > 0 ? sqlResult[0].unitprice : 0;
      })(), (async () => {
        sql = `SELECT avg(unitprice) as average from househistory where date="${CommonUtil.formatDate(d)}"`;
        logger.debug(sql);
        sqlResult = await db.query(sql);
        averageprice = sqlResult.length > 0 ? sqlResult[0].average : 0;
      })(), (async () => {
        sql = `SELECT sum(visit) as total from househistory where date="${CommonUtil.formatDate(d)}"`;
        logger.debug(sql);
        sqlResult = await db.query(sql);
        visitnum = sqlResult.length > 0 ? sqlResult[0].total : 0;
      })(), (async () => {
        sql = `SELECT * from ljsummary where date="${CommonUtil.formatDate(lastday)}" and daterange=0 and spacerange=0`;
        logger.debug(sql);
        sqlResult = await db.query(sql);
        lastResult = sqlResult.length > 0 ? sqlResult[0] : {};
        logger.debug('last result', lastResult);
      })(),
    ];
    await Promise.all(tasks);
    if (lastResult) {
      salediff = lastResult.salenum != null ? salenum - lastResult.salenum : 0;
      newdiff = lastResult.newnum != null ? newnum - lastResult.newnum : 0;
      incdiff = lastResult.incnum != null ? incnum - lastResult.incnum : 0;
      reddiff = lastResult.rednum != null ? rednum - lastResult.rednum : 0;
      lowdiff = lastResult.lowprice != null ? lowprice - lastResult.lowprice : 0;
      highdiff = lastResult.highprice != null ? highprice - lastResult.highprice : 0;
      lowunitdiff = lastResult.lowunitprice != null ? lowunitprice - lastResult.lowunitprice : 0;
      highunitdiff = lastResult.highunitprice != null ? highunitprice - lastResult.highunitprice : 0;
      averagediff = lastResult.averageprice != null ? averageprice - lastResult.averageprice : 0;
      newvisit = lastResult.visitnum != null ? visitnum - lastResult.visitnum : 0;
      newvisitdiff = lastResult.newvisit != null ? newvisit - lastResult.newvisit : 0;
    }
    sql = `Insert into ljsummary (daterange, date, spacerange, space, salenum, salediff, newnum, newdiff, incnum, incdiff, rednum, reddiff, lowprice, lowdiff, highprice, highdiff,
      lowunitprice, lowunitdiff, highunitprice, highunitdiff, averageprice, averagediff, visitnum, newvisit, newvisitdiff) VALUES(0, "${CommonUtil.formatDate(d)}", 0, "all", ${salenum}, ${salediff}, ${newnum}, ${newdiff}, ${incnum}, ${incdiff}, ${rednum}, ${reddiff}, ${lowprice}, ${lowdiff}, ${highprice}, ${highdiff}, ${lowunitprice}, ${lowunitdiff}, ${highunitprice}, ${highunitdiff}, ${averageprice}, ${averagediff}, ${visitnum}, ${newvisit}, ${newvisitdiff})`;
    logger.debug(sql);
    await db.query(sql);
    //Wait until day aggregate finished, then aggregate date into week
    if (isWeek) {
      let firstDate = new Date(d.getFullYear(), d.getMonth(), d.getDate() - 6);
      let lastWeek = new Date(d.getFullYear(), d.getMonth(), d.getDate() - 7);
      await this.aggregateAllByTime(d, 1, firstDate, lastWeek, salenum, lowprice, highprice, lowunitprice, highunitprice, averageprice, visitnum);
    }
    if (isMonth) {
      let firstDate = new Date(d.getFullYear(), d.getMonth(), 1);
      let lastMonth = new Date(d.getFullYear(), d.getMonth(), 0);
      await this.aggregateAllByTime(d, 2, firstDate, lastMonth, salenum, lowprice, highprice, lowunitprice, highunitprice, averageprice, visitnum);
    }
  }

  async aggregateAllByTime(d, daterange, firstDate, lastDate, salenum, lowprice, highprice, lowunitprice, highunitprice, averageprice, visitnum) {
    let salediff, newnum, newdiff, incnum, incdiff, rednum, reddiff, lowdiff, highdiff,
      lowunitdiff, highunitdiff, averagediff, newvisit, newvisitdiff;
    let sql, sqlResult, lastResult;
    let tasks = [
      (async () => {
        sql = `SELECT sum(newnum) as snewnum, sum(incnum) as sincnum, sum(rednum) as srednum, sum(newvisit) as snewvisit FROM ljsummary where spacerange=0 and daterange=0 and date<="${CommonUtil.formatDate(d)}" and date>="${CommonUtil.formatDate(firstDate)}";`;
        logger.debug(sql);
        sqlResult = await db.query(sql);
        logger.debug('sum result', sqlResult);
        newnum = sqlResult.length > 0 ? sqlResult[0].snewnum : 0;
        incnum = sqlResult.length > 0 ? sqlResult[0].sincnum : 0;
        rednum = sqlResult.length > 0 ? sqlResult[0].srednum : 0;
        newvisit = sqlResult.length > 0 ? sqlResult[0].snewvisit : 0;
      })(), (async () => {
        sql = `SELECT * from ljsummary where date="${CommonUtil.formatDate(lastDate)}" and daterange=${daterange} and spacerange=0`;
        logger.debug(sql);
        sqlResult = await db.query(sql);
        lastResult = sqlResult.length > 0 ? sqlResult[0] : {};
        logger.debug('last result', lastResult);
      })(),
    ];
    await Promise.all(tasks);

    salediff = lastResult.salenum != null ? salenum - lastResult.salenum : 0;
    newdiff = lastResult.newnum != null ? newnum - lastResult.newnum : 0;
    incdiff = lastResult.incnum != null ? incnum - lastResult.incnum : 0;
    reddiff = lastResult.rednum != null ? rednum - lastResult.rednum : 0;
    lowdiff = lastResult.lowprice != null ? lowprice - lastResult.lowprice : 0;
    highdiff = lastResult.highprice != null ? highprice - lastResult.highprice : 0;
    lowunitdiff = lastResult.lowunitprice != null ? lowunitprice - lastResult.lowunitprice : 0;
    highunitdiff = lastResult.highunitprice != null ? highunitprice - lastResult.highunitprice : 0;
    averagediff = lastResult.averageprice != null ? averageprice - lastResult.averageprice : 0;
    newvisitdiff = lastResult.newvisit != null ? newvisit - lastResult.newvisit : 0;

    sql = `Insert into ljsummary (daterange, date, spacerange, space, salenum, salediff, newnum, newdiff, incnum, incdiff, rednum, reddiff, lowprice, lowdiff, highprice, highdiff,
      lowunitprice, lowunitdiff, highunitprice, highunitdiff, averageprice, averagediff, visitnum, newvisit, newvisitdiff) VALUES(${daterange}, "${CommonUtil.formatDate(d)}", 0, "all", ${salenum}, ${salediff}, ${newnum}, ${newdiff}, ${incnum}, ${incdiff}, ${rednum}, ${reddiff}, ${lowprice}, ${lowdiff}, ${highprice}, ${highdiff}, ${lowunitprice}, ${lowunitdiff}, ${highunitprice}, ${highunitdiff}, ${averageprice}, ${averagediff}, ${visitnum}, ${newvisit}, ${newvisitdiff})`;
    logger.debug(sql);
    await db.query(sql);
  }

  async summaryBySpace(spaceType, spacerange, d, lastday) {
    let salenum, salediff, newnum, newdiff, incnum, incdiff, rednum, reddiff, lowprice, lowdiff, highprice, highdiff,
      lowunitprice, lowunitdiff, highunitprice, highunitdiff, averageprice, averagediff, visitnum, newvisit, newvisitdiff;
    let sql, sqlResult, lastResult;
    let isWeek = d.getDay() == 0,
      isMonth = d.getDate() == new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate(),
      isYear = d.getMonth() == 11 && d.getDate() == 31;
    await Promise.all([
      (async () => {
        sql = `SELECT ${spaceType}, count(id) as total from househistory where date="${CommonUtil.formatDate(d)}" group by ${spaceType}`;
        logger.debug(sql);
        sqlResult = await db.query(sql);
        salenum = this.convertToIndexedObject(sqlResult, spaceType, 'total');
        logger.debug('salenum', salenum);
      })(), (async () => {
        sql = `SELECT ${spaceType}, count(id) as total from househistory where date="${CommonUtil.formatDate(d)}" and isnew=1 group by ${spaceType}`;
        logger.debug(sql);
        sqlResult = await db.query(sql);
        newnum = this.convertToIndexedObject(sqlResult, spaceType, 'total');
        logger.debug('newnum', newnum);
      })(), (async () => {
        sql = `SELECT ${spaceType}, count(id) as total from househistory where date="${CommonUtil.formatDate(d)}" and deltaprice>0 group by ${spaceType}`;
        logger.debug(sql);
        sqlResult = await db.query(sql);
        incnum = this.convertToIndexedObject(sqlResult, spaceType, 'total');
        logger.debug('incnum', incnum);
      })(), (async () => {
        sql = `SELECT ${spaceType}, count(id) as total from househistory where date="${CommonUtil.formatDate(d)}" and deltaprice<0 group by ${spaceType}`;
        logger.debug(sql);
        sqlResult = await db.query(sql);
        rednum = this.convertToIndexedObject(sqlResult, spaceType, 'total');
        logger.debug('rednum', rednum);
      })(), (async () => {
        sql = `SELECT ${spaceType}, price from (SELECT * from househistory where date="${CommonUtil.formatDate(d)}" order by ${spaceType}, price asc) x group by ${spaceType}`;
        logger.debug(sql);
        sqlResult = await db.query(sql);
        lowprice = this.convertToIndexedObject(sqlResult, spaceType, 'price');
        logger.debug('lowprice', lowprice);
      })(), (async () => {
        sql = `SELECT ${spaceType}, price from (SELECT * from househistory where date="${CommonUtil.formatDate(d)}" order by ${spaceType}, price desc) x group by ${spaceType}`;
        logger.debug(sql);
        sqlResult = await db.query(sql);
        highprice = this.convertToIndexedObject(sqlResult, spaceType, 'price');
        logger.debug('highprice', highprice);
      })(), (async () => {
        sql = `SELECT ${spaceType}, unitprice from (SELECT * from househistory where date="${CommonUtil.formatDate(d)}" order by ${spaceType}, unitprice asc) x group by ${spaceType}`;
        logger.debug(sql);
        sqlResult = await db.query(sql);
        lowunitprice = this.convertToIndexedObject(sqlResult, spaceType, 'unitprice');
        logger.debug('lowunitprice', lowunitprice);
      })(), (async () => {
        sql = `SELECT ${spaceType}, unitprice from (SELECT * from househistory where date="${CommonUtil.formatDate(d)}" order by ${spaceType}, unitprice desc) x group by ${spaceType}`;
        logger.debug(sql);
        sqlResult = await db.query(sql);
        highunitprice = this.convertToIndexedObject(sqlResult, spaceType, 'unitprice');
        logger.debug('highunitprice', highunitprice);
      })(), (async () => {
        sql = `SELECT ${spaceType}, avg(unitprice) as average from househistory where date="${CommonUtil.formatDate(d)}" group by ${spaceType}`;
        logger.debug(sql);
        sqlResult = await db.query(sql);
        averageprice = this.convertToIndexedObject(sqlResult, spaceType, 'average');
        logger.debug('averageprice', averageprice);
      })(), (async () => {
        sql = `SELECT ${spaceType}, sum(visit) as total from househistory where date="${CommonUtil.formatDate(d)}" group by ${spaceType}`;
        logger.debug(sql);
        sqlResult = await db.query(sql);
        visitnum = this.convertToIndexedObject(sqlResult, spaceType, 'total');
        logger.debug('visitnum', visitnum);
      })(), (async () => {
        sql = `SELECT * from ljsummary where date="${CommonUtil.formatDate(lastday)}" and daterange=0 and spacerange=${spacerange}`;
        logger.debug(sql);
        sqlResult = await db.query(sql);
        lastResult = this.convertToIndexedObject(sqlResult, 'space');
        logger.debug('last result', lastResult);
      })(),
    ]);
    for (let s in salenum) {
      newnum[s] = newnum[s] || 0;
      incnum[s] = incnum[s] || 0;
      rednum[s] = rednum[s] || 0;
      salediff = lastResult[s] ? salenum[s] - lastResult[s].salenum : 0;
      newdiff = lastResult[s] ? newnum[s] - lastResult[s].newnum : 0;
      incdiff = lastResult[s] ? incnum[s] - lastResult[s].incnum : 0;
      reddiff = lastResult[s] ? rednum[s] - lastResult[s].rednum : 0;
      lowdiff = lastResult[s] ? lowprice[s] - lastResult[s].lowprice : 0;
      highdiff = lastResult[s] ? highprice[s] - lastResult[s].highprice : 0;
      lowunitdiff = lastResult[s] ? lowunitprice[s] - lastResult[s].lowunitprice : 0;
      highunitdiff = lastResult[s] ? highunitprice[s] - lastResult[s].highunitprice : 0;
      averagediff = lastResult[s] ? averageprice[s] - lastResult[s].averageprice : 0;
      newvisit = lastResult[s] ? visitnum[s] - lastResult[s].visitnum : 0;
      newvisitdiff = lastResult[s] ? newvisit - lastResult[s].newvisit : 0;
      sql = `Insert into ljsummary (daterange, date, spacerange, space, salenum, salediff, newnum, newdiff, incnum, incdiff, rednum, reddiff, lowprice, lowdiff, highprice, highdiff,
      lowunitprice, lowunitdiff, highunitprice, highunitdiff, averageprice, averagediff, visitnum, newvisit, newvisitdiff) VALUES(0, "${CommonUtil.formatDate(d)}", ${spacerange}, "${s}", ${salenum[s]}, ${salediff}, ${newnum[s]}, ${newdiff}, ${incnum[s]}, ${incdiff}, ${rednum[s]}, ${reddiff}, ${lowprice[s]}, ${lowdiff}, ${highprice[s]}, ${highdiff}, ${lowunitprice[s]}, ${lowunitdiff}, ${highunitprice[s]}, ${highunitdiff}, ${averageprice[s]}, ${averagediff}, ${visitnum[s]}, ${newvisit}, ${newvisitdiff})`;
      logger.debug(sql);
      await db.query(sql);
    }
    if (isWeek) {
      let firstDate = new Date(d.getFullYear(), d.getMonth(), d.getDate() - 6);
      let lastWeek = new Date(d.getFullYear(), d.getMonth(), d.getDate() - 7);
      await this.aggregateSpaceByTime(spacerange, d, 1, firstDate, lastWeek, salenum, lowprice, highprice, lowunitprice, highunitprice, averageprice, visitnum);
    }
    if (isMonth) {
      let firstDate = new Date(d.getFullYear(), d.getMonth(), 1);
      let lastMonth = new Date(d.getFullYear(), d.getMonth(), 0);
      await this.aggregateSpaceByTime(spacerange, d, 2, firstDate, lastMonth, salenum, lowprice, highprice, lowunitprice, highunitprice, averageprice, visitnum);
    }
  }

  async aggregateSpaceByTime(spacerange, d, daterange, firstDate, lastDate, salenum, lowprice, highprice, lowunitprice, highunitprice, averageprice, visitnum) {
    let salediff, newnum, newdiff, incnum, incdiff, rednum, reddiff, lowdiff, highdiff,
      lowunitdiff, highunitdiff, averagediff, newvisit, newvisitdiff;
    let sql, sqlResult, lastResult;
    let tasks = [
      (async () => {
        sql = `SELECT space, sum(newnum) as snewnum, sum(incnum) as sincnum, sum(rednum) as srednum, sum(newvisit) as snewvisit FROM ljsummary where spacerange=${spacerange} and daterange=0 and date<="${CommonUtil.formatDate(d)}" and date>="${CommonUtil.formatDate(firstDate)}" group by space`;
        logger.debug(sql);
        sqlResult = await db.query(sql);
        logger.debug('sum result', sqlResult);
        newnum = this.convertToIndexedObject(sqlResult, 'space', 'snewnum');
        incnum = this.convertToIndexedObject(sqlResult, 'space', 'sincnum');
        rednum = this.convertToIndexedObject(sqlResult, 'space', 'srednum');
        newvisit = this.convertToIndexedObject(sqlResult, 'space', 'snewvisit');
      })(), (async () => {
        sql = `SELECT * from ljsummary where date="${CommonUtil.formatDate(lastDate)}" and daterange=${daterange} and spacerange=${spacerange}`;
        logger.debug(sql);
        sqlResult = await db.query(sql);
        lastResult = this.convertToIndexedObject(sqlResult, 'space');
        logger.debug('last result', lastResult);
      })(),
    ];
    await Promise.all(tasks);

    for (let s in salenum) {
      newnum[s] = newnum[s] || 0;
      incnum[s] = incnum[s] || 0;
      rednum[s] = rednum[s] || 0;
      salediff = lastResult[s] ? salenum[s] - lastResult[s].salenum : 0;
      newdiff = lastResult[s] ? newnum[s] - lastResult[s].newnum : 0;
      incdiff = lastResult[s] ? incnum[s] - lastResult[s].incnum : 0;
      reddiff = lastResult[s] ? rednum[s] - lastResult[s].rednum : 0;
      lowdiff = lastResult[s] ? lowprice[s] - lastResult[s].lowprice : 0;
      highdiff = lastResult[s] ? highprice[s] - lastResult[s].highprice : 0;
      lowunitdiff = lastResult[s] ? lowunitprice[s] - lastResult[s].lowunitprice : 0;
      highunitdiff = lastResult[s] ? highunitprice[s] - lastResult[s].highunitprice : 0;
      averagediff = lastResult[s] ? averageprice[s] - lastResult[s].averageprice : 0;
      newvisit = lastResult[s] ? visitnum[s] - lastResult[s].visitnum : 0;
      newvisitdiff = lastResult[s] ? newvisit - lastResult[s].newvisit : 0;
      sql = `Insert into ljsummary (daterange, date, spacerange, space, salenum, salediff, newnum, newdiff, incnum, incdiff, rednum, reddiff, lowprice, lowdiff, highprice, highdiff,
      lowunitprice, lowunitdiff, highunitprice, highunitdiff, averageprice, averagediff, visitnum, newvisit, newvisitdiff) VALUES(${daterange}, "${CommonUtil.formatDate(d)}", ${spacerange}, "${s}", ${salenum[s]}, ${salediff}, ${newnum[s]}, ${newdiff}, ${incnum[s]}, ${incdiff}, ${rednum[s]}, ${reddiff}, ${lowprice[s]}, ${lowdiff}, ${highprice[s]}, ${highdiff}, ${lowunitprice[s]}, ${lowunitdiff}, ${highunitprice[s]}, ${highunitdiff}, ${averageprice[s]}, ${averagediff}, ${visitnum[s]}, ${newvisit}, ${newvisitdiff})`;
      logger.debug(sql);
      await db.query(sql);
    }
  }

  convertToIndexedObject(arr, index, value) {
    let obj = {};
    for (let ele of arr) {
      obj[ele[index]] = value ? ele[value] : ele;
    }
    return obj;
  }
}