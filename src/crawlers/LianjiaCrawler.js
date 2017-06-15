import cheerio from 'cheerio';
import logger from '../utils/logger';
import req from 'request-promise';

export class LianjiaCrawler{

  constructor(){
    this._reqOptions = {
      headers: {
        Pragma:'no-cache',
        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.24 Safari/537.36',
        'Cache-Control':'no-cache',
        Connection:'keep-alive',
      },
      encoding: 'utf-8',
      timeout: 15000,
    };
  }

  async crawl(url){
    this._reqOptions.url = url;
    //req.debug = true;
    let body = await req.get(this._reqOptions);
    if(body.indexOf('流量异常')!=-1){
      if(await this._verifyHuman(body)){
        return await this.crawl(url);
      }else{
        throw error(`Cannot getting ${url}, locked`);
      }
    }else if(body.indexOf('厦门二手房')){
      return body;
    }else{
      throw error(`Cannot getting ${url}, content is wrong`);
    }
  }

  async _verifyHuman(body){
    let $ = cheerio.load(body);
    let retry = 0;
    let csrf = $("form.human input[name='_csrf']").val();
    logger.debug(csrf);
    let res, uuid;
    this._reqOptions.url = 'http://captcha.lianjia.com/human';
    while(retry <= 20){
      res = await req.get(ajaxOptions);
      res = JSON.parse(res);
      uuid = res.uuid;
      logger.debug(`Get ${uuid}/${csrf}`);
      res = await req.post(Object.assign(ajaxOptions, {'Content-Type':'application/x-www-form-urlencoded',form:{uuid:uuid, bitvalue:1, _csrf: csrf}}));
      logger.debug(`Post ${uuid}/${csrf} res ${res}`);
      res = JSON.parse(res);
      if(!res['error'])
        return true;
      retry++;
    }
    return false;
  }
}
