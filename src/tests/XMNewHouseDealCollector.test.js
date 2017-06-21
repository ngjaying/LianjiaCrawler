import {XMNewHouseDealCollector} from '../collectors/XMNewHouseDealCollector';
import logger from '../utils/logger';
let html = `






<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>住房领域</title>
<style type="text/css">
body{ color:#333333; margin:0px; padding:0px; font-size:12px; font-family:"SimSun"; text-align:left;}
.xmgtj_lpr_ctab{ background-color:#d9f0fb;}
.h24{ line-height:24px;}
.pad5{ padding:5px;}
.mar_t2{ margin-top:2px;}
.f_c{ text-align:center;}
.xmgtj_lpr_sttab{ background:url(/xmzf/images/13xmgtj_lpr_sttab.jpg) repeat-x center bottom;}
.tblack1{ color:#000000;}
td{ background-color:#ffffff;}
</style>
<script>
</script>

</head>
<body style="margin: 0px auto;">
<table width="562" height="24" border="0" cellpadding="0" cellspacing="1" align="center" class="xmgtj_lpr_ctab h24 f_c mar_t2">
    <tr>
      <td width="104" class="xmgtj_lpr_sttab f_c tblack1">所属地区</td>

      	<td width="76">思明区</td>

      	<td width="76">湖里区</td>

      	<td width="76">集美区</td>

      	<td width="76">海沧区</td>

      	<td width="76">同安区</td>

      	<td width="76">翔安区</td>

    </tr>
    <tr>
      <td width="100" class="xmgtj_lpr_sttab f_c tblack1">住宅套数</td>

      	<td width="76">3</td>

      	<td width="76">1</td>

      	<td width="76">33</td>

      	<td width="76">19</td>

      	<td width="76">36</td>

      	<td width="76">39</td>

    </tr>
    <tr>
      <td width="100" class="xmgtj_lpr_sttab f_c tblack1">住宅面积（M<sup>2</sup>）</td>

      	<td width="76">463.53</td>

      	<td width="76">251.32</td>

      	<td width="76">4450.69</td>

      	<td width="76">3523.15</td>

      	<td width="76">3902.31</td>

      	<td width="76">4246.75</td>

    </tr>
    <tr>
      <td width="100" class="xmgtj_lpr_sttab f_c tblack1">总套数</td>

      	<td width="76">27</td>

      	<td width="76">691</td>

      	<td width="76">331</td>

      	<td width="76">103</td>

      	<td width="76">132</td>

      	<td width="76">121</td>

    </tr>
    <tr>
      <td width="100" class="xmgtj_lpr_sttab f_c tblack1">总面积（M<sup>2</sup>）</td>

      	<td width="76">2175.71</td>

      	<td width="76">29629.09</td>

      	<td width="76">17301.05</td>

      	<td width="76">8019.70</td>

      	<td width="76">9044.30</td>

      	<td width="76">7817.72</td>

    </tr>
</table>
</body>
`;
const main = async ()=>{
  logger.enableDebug();
  let LC = new XMNewHouseDealCollector();
  LC.setHtml(html);
  await LC.save();
}
main();
