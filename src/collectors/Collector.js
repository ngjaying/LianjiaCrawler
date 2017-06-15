import cheerio from 'cheerio';

export class Collector {

  constructor(html, mapping){
    if(!html){
      throw new Error('Collector: html is empty')
    }
    this.mapping = mapping;
    this.html = html;
  }

  collect(){
    let $ = cheerio.load(this.html, {decodeEntities: false});
    let result = {};
    for(let p in this.mapping){
      try{
        result[p] = $(this.mapping[p]);
      }catch(ex){
        result[p] = null;
      }
    }
    return result;
  }
}
