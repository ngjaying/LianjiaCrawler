import {Distributor} from './Distributor';
import {LianjiaCrawler} from '../crawlers/LianjiaCrawler';
import {LianjiaCollector} from '../collectors/LianjiaCollector';
import db from '../utils/db';
import CommonUtil from '../utils/CommonUtil';
import logger from '../utils/logger';

export class LianjiaDistributor extends Distributor{

  constructor(){
    let crawler = new LianjiaCrawler();
    let collector = new LianjiaCollector();
    super(crawler, collector);
    this.crawler.setCookie(`lianjia_uuid=15e2f095-d460-49eb-86ce-af527a684e97; UM_distinctid=15ab752b2a34ae-03b0601076ca74-67f1a39-1fa400-15ab752b2a498c; _csrf=5f0636a97e4aee71b6c7288607413a89ea1f87ab68df51fff1dbaf9d9e2576c6a%3A2%3A%7Bi%3A0%3Bs%3A5%3A%22_csrf%22%3Bi%3A1%3Bs%3A32%3A%224a8lTQwf-OEux2r1EtR9bOJB_aoHWH3a%22%3B%7D; app_matrix_servers=e8d6171c1ec6a632142fec1ca24ccfa9; select_city=350200; _smt_uid=58c262fe.51c1f618; _ga=GA1.2.1749135290.1489134336; _gid=GA1.2.1615422921.1497167865; lianjia_ssid=c2f1438d-4538-4323-84c9-109fabd46d7b`);
    this.districts = ['xiangan', 'tongan', 'jimei', 'haicang', 'huli', 'siming'];
    this.districtNames = ['翔安', '同安', '集美', '海沧', '湖里', '思明'];
    this.totalPage = 0;
    this.collector.setDistrict(this.districtNames[this.districtPage]);
    //TODO Proxy and cookie setting
  }

  async run(){
    //Continue the work
    let sql = `SELECT * from crawlprogress where date = ${CommonUtil.formatDate(new Date())} limit 0,1`;
    logger.debug(sql);
    let progress = await db.query(sql);
    if(progress.length == 0){
      this.isContinue = false;
      this.districtPage = 0;
      this.page = 1;
    }else{
      this.isContinue = true;
      this.districtPage = progress[0].dc;
      this.page = progress[0].page;
      logger.log(`Resume from ${this.districtPage} of page ${this.page}`);
    }
    await this._doRun();
  }

  async _doRun(){
    try{
      if(this.districtPage >= this.districts.length){
        logger.debug(`Already crawl all houses!`);
        if(this.isContinue){
          await db.query(`UPDATE crawlprogress SET dc = 6 where date = ${CommonUtil.formatDate(new Date())}`);
        }else{
          await db.query(`INSERT into crawlprogress (dc, page, date) VALUES (6, 1, ${CommonUtil.formatDate(new Date())}) `);
        }
        return;
      }
      //翻区
      if (this.totalPage > 0 && this.page > this.totalPage) {
          this.districtPage++;
          this.page = 1;
          this.totalPage = 0;
          this.collector.setDistrict(this.districtNames[this.districtPage]);
      }
      let url = `http://xm.lianjia.com/ershoufang/${this.districts[this.districtPage]}/pg${this.page}co32ng1nb1`;
      logger.debug(`crawl house page ${url}`);
      let body = await this.crawler.crawl(url);
      this.collector.setHtml(body);
      if(this.totalPage<=0){
        this.totalPage = this.collector.getTotalPage();
      }
      await this.collector.save();
      this.page++;
      let sleepTime = Math.floor(Math.random() * 1000 + 500) + this.httpDelay;
      logger.debug(sleepTime);
      await CommonUtil.sleep(sleepTime);
      process.nextTick(await this._doRun());
    }catch(ex){
      //被屏蔽了
      if(ex.name == 'Crawler_Locked' || ex.name == 'Crawler_MalResult'){
        logger.error(ex['name']);
        await db.query(`INSERT into crawlprogress (dc, page, date) VALUES (${this.districtPage}, ${this.page}, ${CommonUtil.formatDate(new Date())}) `);
        //TODO change Proxy
        throw ex;
      }else{
        logger.error(ex);
      }
    }
  }
}
