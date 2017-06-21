import {Collector} from './Collector';
import logger from '../utils/logger';
import CommonUtil from '../utils/CommonUtil';

export class LianjiaCollector extends Collector {
  constructor(html, mapping){
    super(html, mapping);
  }

  getTotalPage(){
    let result = super.collect();
    let totalCount = parseInt(result['page'].text());
    return Math.ceil(totalCount/30);
  }

  _getId(url=''){
    let splitStr = url.indexOf('%2F') > 0 ? '%2F' : '/';
    let urlParts = url.split(splitStr);
    let urlPart = '';
    urlParts.forEach((v, i, a)=>{
      if(v == 'ershoufang' || v == 'xiaoqu' || v == 'chengjiao'){
        urlPart = a[i+1];
        return;
      }
    });
    let id = urlPart.indexOf('.') >= 0 ? urlPart.substring(0, urlPart.indexOf('.')) : urlPart;
    if(!Number.isInteger(id)){
      id = CommonUtil.convertStringToInt(id);
    }
    return id;
  }
}
