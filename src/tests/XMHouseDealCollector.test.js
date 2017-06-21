import {XMHouseDealCollector} from '../collectors/XMHouseDealCollector';
import logger from '../utils/logger';
let html = `






<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>住房领域</title>
<style type="text/css">
body{ color:#333333; margin:0px; padding:0px; font-size:12px; font-family:"SimSun"; text-align:left;}
.h26{ line-height:26px;}
.pad5{ padding:5px;}
</style>
<script>
</script>

</head>
<body style="margin: 0px auto;">
<table width="100%" border="0" cellspacing="0" cellpadding="0" class="h26">
  <tr>
    <td valign="top" width="50%" class="pad5">&middot; 二手房今日成交<br />
    &middot; 住宅面积比例：70%<br />
    &middot; 成交住宅套数：24<br />
    &middot; 今日成交套数：48</td>
    <td valign="top" width="50%" class="pad5">&middot; 成交住宅面积（M<sup>2</sup>）：2336.01<br />
    &middot; 今日成交面积（M<sup>2</sup>）：3360.78<br /></td>
  </tr>
</table>
</body>
`;
const main = async ()=>{
  logger.enableDebug();
  let LC = new XMHouseDealCollector();
  LC.setHtml(html);
  await LC.save();
}
main();
