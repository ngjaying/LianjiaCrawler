import cheerio from 'cheerio';

export class Collector {

  constructor(html, mapping){
    this.mapping = mapping;
    this.html = html || '';
    this.result = {};
  }

  setHtml(html){
    this.html = html;
    this.result = {};
  }

  collect(){
    if(Object.keys(this.result).length !== 0) return this.result;
    let $ = cheerio.load(this.html, {decodeEntities: false});
    for(let p in this.mapping){
      try{
        this.result[p] = $(this.mapping[p]);
      }catch(ex){
        this.result[p] = null;
      }
    }
    return this.result;
  }
}
