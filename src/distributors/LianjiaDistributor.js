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
    this.proxyIndex = 0;
    this.collector.setDistrict(this.districtNames[this.districtPage]);
    //TODO Proxy and cookie setting
    this.proxies = [
      {
        'url': 'https://nl.hideproxy.me/go.php?u=url&b=4&f=norefer',
        'cookie': `s=iqqi9oo7moub5bgha8tvhh72g1; c[lianjia.com][/][select_city]=350200; c[lianjia.com][/][all-lj]=5ce010dbdb86da2c0bba3b0cda32eb3e; c[lianjia.com][/][lianjia_uuid]=28f29ae3-17ec-4dbf-afcd-d638555c1265; UM_distinctid=15ca6994e7a5ba-0753380bcaed56-79193c-1fa400-15ca6994e7b2a3; c[baidu.com][/][BAIDUID]=344A12EA0A8887872893CFAE0196A960%3AFG%3D1; c[mediav.com][/][v]=GNzm%28LzB%5Ew9r%5En8Ok-e%21; CNZZDATA1254525948=1936968370-1497438827-https%253A%252F%252Fhide.me%252F%7C1497444227; CNZZDATA1255633284=1158564671-1497441340-https%253A%252F%252Fhide.me%252F%7C1497441340; CNZZDATA1255604082=290286668-1497442295-https%253A%252F%252Fhide.me%252F%7C1497442295; _qzja=1.412797851.1497443697595.1497443697595.1497443697597.1497446210164.1497446306491.0.0.0.7.1; _qzjc=1; c[admaster.com.cn][/][admckid]=1706142128161786267; _jzqx=1.1497443701.1497593210.1.jzqsr=hide%2Eme|jzqct=/en/proxy.-; _jzqckmp=1; _jzqa=1.2136902602081723600.1497443701.1497443701.1497593210.2; _jzqc=1; _jzqb=1.3.10.1497593210.1; _ga=GA1.2.1103582329.1497443695; _gid=GA1.2.634307173.1497592648; c[lianjia.com][/][lianjia_ssid]=34d55d6e-5b18-4a6b-8967-f9181ed2812a; _smt_uid=59412d66.1090374e`
      },{
        'url': 'https://de.hideproxy.me/go.php?u=url&b=4&f=norefer',
        'cookie': `UM_distinctid=15ca6994e7a5ba-0753380bcaed56-79193c-1fa400-15ca6994e7b2a3; s=9pleha646gvj82k7e0qokjqi45; c[lianjia.com][/][select_city]=350200; c[lianjia.com][/][all-lj]=78917a1433741fe7067e3641b5c01569; c[lianjia.com][/][lianjia_uuid]=ec29f0ea-6763-4110-82f6-c3031ee8a32c; c[baidu.com][/][BAIDUID]=65645E3E7C1B349E988A2079D4A9A26E%3AFG%3D1; c[mediav.com][/][v]=%23%3C7WX3RqA%3E%3A.K%3E%3Fm%28%40zj; _jzqx=1.1497443701.1497593210.1.jzqsr=hide%2Eme|jzqct=/en/proxy.-; _jzqckmp=1; _smt_uid=59413761.2fe1af8a; CNZZDATA1254525948=1457298561-1497444227-https%253A%252F%252Fhide.me%252F%7C1497590043; CNZZDATA1255633284=1376868952-1497441340-https%253A%252F%252Fhide.me%252F%7C1497592640; CNZZDATA1255604082=799942490-1497442295-https%253A%252F%252Fhide.me%252F%7C1497588518; _qzja=1.369423634.1497446301909.1497446301909.1497592647597.1497592647597.1497593806240.0.0.0.3.2; _qzjb=1.1497592647596.2.0.0.0; _qzjc=1; _qzjto=2.1.0; _jzqa=1.2136902602081723600.1497443701.1497443701.1497593210.2; _jzqc=1; _jzqb=1.2.10.1497593210.1; _ga=GA1.2.1103582329.1497443695; _gid=GA1.2.634307173.1497592648; c[admaster.com.cn][/][admckid]=1706161436051237567; c[lianjia.com][/][lianjia_ssid]=19bb2b3d-f154-4cdd-87ea-7c68e9c8356b`
      },{
        'url': 'https://us.hideproxy.me/go.php?u=url&b=4&f=norefer',
        'cookie': `UM_distinctid=15ca6994e7a5ba-0753380bcaed56-79193c-1fa400-15ca6994e7b2a3; s=mem7jbhggro9hdv6jdenu0ttl4; c[lianjia.com][/][select_city]=350200; c[lianjia.com][/][all-lj]=492291e11daf53bf34d39f84cc442d11; c[lianjia.com][/][lianjia_uuid]=17bf6bb9-f73e-4f08-882e-6bbbe52ccbf6; CNZZDATA1254525948=1214236022-1497590043-https%253A%252F%252Fhide.me%252F%7C1497590043; CNZZDATA1255633284=793111011-1497592640-https%253A%252F%252Fhide.me%252F%7C1497592640; CNZZDATA1255604082=828363894-1497588518-https%253A%252F%252Fhide.me%252F%7C1497588518; _smt_uid=59437576.50412d04; _jzqx=1.1497443701.1497593210.1.jzqsr=hide%2Eme|jzqct=/en/proxy.-; _jzqckmp=1; c[mediav.com][/][v]=t%2FA4bambFU%3A.K%3E%3F8IWKV; _qzja=1.339898370.1497593210199.1497593210199.1497593210200.1497593210199.1497593210200.0.0.0.1.1; _qzjc=1; _qzjto=1.1.0; c[admaster.com.cn][/][admckid]=1706161416371620292; c[lianjia.com][/][lianjia_ssid]=47a7a801-d689-4956-9b97-ad78ded682df; _jzqa=1.2136902602081723600.1497443701.1497443701.1497593210.2; _jzqc=1; _jzqb=1.4.10.1497593210.1; _ga=GA1.2.1103582329.1497443695; _gid=GA1.2.634307173.1497592648`
      }
    ];
  }

  async run(){
    //Continue the work
    let sql = `SELECT * from crawlprogress where date = "${CommonUtil.formatDate(new Date())}" limit 0,1`;
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
    this.collector.setDistrict(this.districtNames[this.districtPage]);
    await this._doRun();
  }

  async _doRun(){
    try{
      //翻区
      if (this.totalPage > 0 && this.page > this.totalPage) {
          this.districtPage++;
          this.page = 1;
          this.totalPage = 0;
          this.collector.setDistrict(this.districtNames[this.districtPage]);
      }
      if(this.districtPage >= this.districts.length){
        logger.debug(`Already crawl all houses!`);
        if(this.isContinue){
          await db.query(`UPDATE crawlprogress SET dc = 6 where date = "${CommonUtil.formatDate(new Date())}"`);
        }else{
          await db.query(`INSERT into crawlprogress (dc, page, date) VALUES (6, 1, "${CommonUtil.formatDate(new Date())}") `);
        }
        return;
      }      
      let url = this._getUrl(`http://xm.lianjia.com/ershoufang/${this.districts[this.districtPage]}/pg${this.page}co32ng1nb1`);
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
      await this._doRun();
    }catch(ex){
      //被屏蔽了
      if(ex.name == 'Crawler_Locked' || ex.name == 'Crawler_MalResult'){
        logger.error(ex['name']);
        if(this.isContinue){
          await db.query(`UPDATE crawlprogress SET dc = ${this.districtPage}, page = ${this.page} where date = "${CommonUtil.formatDate(new Date())}"`);
        }else{
          await db.query(`INSERT into crawlprogress (dc, page, date) VALUES (${this.districtPage}, ${this.page}, "${CommonUtil.formatDate(new Date())}")`);
        }
        //TODO change Proxy
        this.proxyIndex++;
        if(this.proxyIndex >= this.proxies.length){
          throw ex;
        }else{
          this.crawler.setCookie(this.proxies[this.proxyIndex-1].cookie);
          await this._doRun();
        }
      }else{
        logger.error(ex);
      }
    }
  }

  _getUrl(url){
    if(this.proxyIndex > 0){
      url = this.proxies[this.proxyIndex-1].url.replace('url', encodeURIComponent(url));
    }
    return url;
  }
}
