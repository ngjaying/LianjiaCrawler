import {XMSummaryCollector} from '../collectors/XMSummaryCollector';
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
    <td valign="top" width="50%" class="pad5">&middot; 数据截止至2017-6-19 23:30:18<br />
    &middot; 在售楼盘总数：882<br />
    &middot; 批准住宅套数：292760<br />
    &middot; 可售住宅套数：9417</td>
    <td valign="top" width="50%" class="pad5">&middot; 批准住宅面积（M<sup>2</sup>）：33780848<br />
    &middot; 可售住宅面积（M<sup>2</sup>）：1468817<br />
    &middot; 认购住宅套数：493<br />
    &middot; 认购住宅面积（M2）：83276<br /></td>
  </tr>
</table>
</body>
`;
const main = async ()=>{
  logger.enableDebug();
  let LC = new XMSummaryCollector();
  LC.setHtml(html);
  await LC.save();
}
main();
