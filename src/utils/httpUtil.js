import logger from './logger';
import req from 'request-promise';
import cheerio from 'cheerio';
//req.debug = true;
let reqOptions = {
   headers: {
  //   Accept:'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
  //   'Accept-Language':'en-US,en;q=0.8,zh-CN;q=0.6,zh;q=0.4,zh-TW;q=0.2,ja;q=0.2',
  //   'Cache-Control':'no-cache',
  //   Connection:'keep-alive',
  //   Cookie:'lianjia_uuid=15e2f095-d460-49eb-86ce-af527a684e97; UM_distinctid=15ab752b2a34ae-03b0601076ca74-67f1a39-1fa400-15ab752b2a498c; _csrf=5f0636a97e4aee71b6c7288607413a89ea1f87ab68df51fff1dbaf9d9e2576c6a%3A2%3A%7Bi%3A0%3Bs%3A5%3A%22_csrf%22%3Bi%3A1%3Bs%3A32%3A%224a8lTQwf-OEux2r1EtR9bOJB_aoHWH3a%22%3B%7D; app_matrix_servers=e8d6171c1ec6a632142fec1ca24ccfa9; select_city=350200; _smt_uid=58c262fe.51c1f618; _ga=GA1.2.1749135290.1489134336; _gid=GA1.2.1615422921.1497167865; lianjia_ssid=c2f1438d-4538-4323-84c9-109fabd46d7b',
  cookie:'s=iqqi9oo7moub5bgha8tvhh72g1; c[lianjia.com][/][select_city]=350200; c[lianjia.com][/][all-lj]=5ce010dbdb86da2c0bba3b0cda32eb3e; c[lianjia.com][/][lianjia_uuid]=28f29ae3-17ec-4dbf-afcd-d638555c1265; UM_distinctid=15ca6994e7a5ba-0753380bcaed56-79193c-1fa400-15ca6994e7b2a3; c[baidu.com][/][BAIDUID]=344A12EA0A8887872893CFAE0196A960%3AFG%3D1; c[mediav.com][/][v]=GNzm%28LzB%5Ew9r%5En8Ok-e%21; _jzqx=1.1497443701.1497443701.1.jzqsr=hide%2Eme|jzqct=/en/proxy.-; _jzqckmp=1;CNZZDATA1254525948=1936968370-1497438827-https%253A%252F%252Fhide.me%252F%7C1497444227; CNZZDATA1255633284=1158564671-1497441340-https%253A%252F%252Fhide.me%252F%7C1497441340; CNZZDATA1255604082=290286668-1497442295-https%253A%252F%252Fhide.me%252F%7C1497442295; _smt_uid=59412d66.1090374e; _qzja=1.412797851.1497443697595.1497443697595.1497443697597.1497443704101.1497445178155.0.0.0.3.1; _qzjb=1.1497443697596.3.0.0.0; _qzjc=1; _qzjto=3.1.0;_jzqa=1.2136902602081723600.1497443701.1497443701.1497443701.1; _jzqc=1; _jzqb=1.3.10.1497443701.1; _gat_global=1; _gat_new_global=1; _ga=GA1.2.1103582329.1497443695; _gid=GA1.2.2111465576.1497443695; _gat_dianpu_agent=1; c[admaster.com.cn][/][admckid]=1706142100331960807; c[lianjia.com][/][lianjia_ssid]=34d55d6e-5b18-4a6b-8967-f9181ed2812a'
  //   Host:'xm.lianjia.com',
  //   Pragma:'no-cache',
  //   'Upgrade-Insecure-Requests':1
   },
  encoding: 'utf-8',
  timeout: 15000,
};
let ajaxOptions = {
  headers: {
  //   Accept:'application/json, text/javascript',
  //   'Cache-Control':'no-cache',
  //   Connection:'keep-alive',
  //   // Cookie:'lianjia_uuid=15e2f095-d460-49eb-86ce-af527a684e97; UM_distinctid=15ab752b2a34ae-03b0601076ca74-67f1a39-1fa400-15ab752b2a498c; _csrf=5f0636a97e4aee71b6c7288607413a89ea1f87ab68df51fff1dbaf9d9e2576c6a%3A2%3A%7Bi%3A0%3Bs%3A5%3A%22_csrf%22%3Bi%3A1%3Bs%3A32%3A%224a8lTQwf-OEux2r1EtR9bOJB_aoHWH3a%22%3B%7D; app_matrix_servers=e8d6171c1ec6a632142fec1ca24ccfa9; select_city=350200; _smt_uid=58c262fe.51c1f618; _ga=GA1.2.1749135290.1489134336; _gid=GA1.2.1615422921.1497167865; lianjia_ssid=c2f1438d-4538-4323-84c9-109fabd46d7b',

  //   Host:'captcha.lianjia.com',
  //   Pragma:'no-cache',
  //   'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.24 Safari/537.36'
  }
}
let maxtry = 2;
let userAgents = ['Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.1.6) Gecko/20091201 Firefox/3.5.6',
    'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.12 Safari/535.11',
    'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)',
    'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:34.0) Gecko/20100101 Firefox/34.0',
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/44.0.2403.89 Chrome/44.0.2403.89 Safari/537.36',
    'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; en-us) AppleWebKit/534.50 (KHTML, like Gecko) Version/5.1 Safari/534.50',
    'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-us) AppleWebKit/534.50 (KHTML, like Gecko) Version/5.1 Safari/534.50',
    'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:2.0.1) Gecko/20100101 Firefox/4.0.1',
    'Mozilla/5.0 (Windows NT 6.1; rv:2.0.1) Gecko/20100101 Firefox/4.0.1',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_0) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.56 Safari/535.11',
    'Opera/9.80 (Macintosh; Intel Mac OS X 10.6.8; U; en) Presto/2.8.131 Version/11.11',
    'Opera/9.80 (Windows NT 6.1; U; en) Presto/2.8.131 Version/11.11'];
let randomReqOptions = () => {
  //reqOptions.headers['User-Agent'] = userAgents[Math.floor(Math.random() * userAgents.length)];
  reqOptions.headers['User-Agent'] = userAgents[1];
  reqOptions.headers['X-Forwarded-For'] = `${Math.floor(Math.random() * 266 )}.${Math.floor(Math.random() * 266 )}.${Math.floor(Math.random() * 266 )}.${Math.floor(Math.random() * 266 )}`;
}
const verifyHuman = async (body) => {
  let retry = 0;
  let $ = cheerio.load(body);
  let csrf = $("form.human input[name='_csrf']").val();
  logger.debug(csrf);
  let res, uuid;
  ajaxOptions.url = 'http://captcha.lianjia.com/human';
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
let httpUtil = {
    get: async(url, retry = 0) => {
        url = `https://nl.hideproxy.me/go.php?u=${encodeURIComponent(url)}&b=5&f=norefer`;
        logger.debug(url);
        randomReqOptions();
        reqOptions.url = url;
        //logger.debug(`proxy: ${reqOptions.proxy}`);
        try {
            let body = await req.get(reqOptions);
            if(body.indexOf('流量异常')!=-1){
              if(await verifyHuman(body)){
                get(url);
              }else{
                logger.error(`Cannot getting ${url}, locked`, {from: 'httpUtil/get', code: '0002', msg: 'Locked by lianjia'});
                body='stop';
              }
            }
            return body;
        } catch (err) {
            //if (retry >= maxtry) {
                logger.error(`Retry getting ${url} with ${err}`, {from: 'httpUtil/get', code: '0001', msg: err});
                return null;
            // } else {
            //     logger.log(`Error happens getting ${url}: ${err}, will retry once`);
            //     get(url, retry + 1);
            // }
        }
    }
}
export default httpUtil;
