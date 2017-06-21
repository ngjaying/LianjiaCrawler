export class Crawler{

  constructor(cookie){
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
    if(cookie){
      this._reqOptions.headers['cookie'] = cookie;
    }
  }

  setCookie(cookie){
    this._reqOptions.headers['cookie'] = cookie;
  }

  async crawl(url){
    this._reqOptions.url = url;
    let body = await req.get(this._reqOptions);
    return body;
  }
}
