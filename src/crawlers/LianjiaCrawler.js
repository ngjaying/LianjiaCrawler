import cheerio from 'cheerio';
import logger from '../utils/logger';
import req from 'request-promise';
import {Crawler} from './Crawler';

export class LianjiaCrawler extends Crawler{

  constructor(cookie){
    super(cookie);
  }

  async crawl(url){
    this._reqOptions.url = url;
    let body = await req.get(this._reqOptions);
    if(body.indexOf('流量异常')!=-1){
      // if(await this._verifyHuman(body)){
      //   return await this.crawl(url);
      // }else{
        throw {name: 'Crawler_Locked', message: `Cannot getting ${url}, locked`};
      //}
    }else if(body.indexOf('厦门二手房')!=-1){
      return body;
    }else{
      throw {name: 'Crawler_MalResult', message: `Cannot getting ${url}, content is wrong`};
    }
  }

  async _verifyHuman(body){
    let ajaxOptions = {
      headers: {
        Accept:'application/json, text/javascript',
        'Cache-Control':'no-cache',
        Connection:'keep-alive',
        Host:'captcha.lianjia.com',
        Pragma:'no-cache',
        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.24 Safari/537.36'
      }
    }
    let $ = cheerio.load(body);
    let retry = 0;
    let csrf = $("form.human input[name='_csrf']").val();
    logger.debug(csrf);
    let res, uuid;
    ajaxOptions.url = 'http://captcha.lianjia.com/human';
    ajaxOptions.headers.cookie = this._reqOptions.headers.cookie;
    while(retry <= 20){
      res = await req.get(ajaxOptions);
      res = JSON.parse(res);
      uuid = res.uuid;
      logger.debug(`Get ${uuid}/${csrf}`);
      res = await req.post(Object.assign(ajaxOptions, {'Content-Type':'application/x-www-form-urlencoded',form:{uuid:uuid, bitvalue:1, _csrf: csrf}}));
      logger.debug(`Post ${uuid}/${csrf} res ${res}`);
      try{
        res = JSON.parse(res);
      }catch(ex){
        return false;
      }
      if(!res['error'])
        return true;
      retry++;
    }
    return false;
  }
}
