import {LianjiaHouseCollector} from '../collectors/LianjiaHouseCollector';
import logger from '../utils/logger';
//data
let html = `
<!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge" /><meta http-equiv="Cache-Control" content="no-transform" /><meta http-equiv="Cache-Control" content="no-siteapp" /><meta http-equiv="Content-language" content="zh-CN" /><meta name="format-detection" content="telephone=no" /><meta name="applicable-device" content="pc"><link rel="alternate" media="only screen and (max-width: 640px)" href="https://m.lianjia.com/xm/ershoufang/xiangan/pg2co32ng1nb1/" >
<meta name="mobile-agent" content="format=html5;url=https://m.lianjia.com/xm/ershoufang/xiangan/pg2co32ng1nb1/"><script>
ljConf = {
    city_id: '350200',
    city_abbr: 'xm',
    city_name: '厦门',
    channel: 'ershoufang',
    page: 'ershoufang_search',
    pageConfig: {"ajaxroot":"\/\/ajax.api.lianjia.com\/","imAppid":"LIANJIA_WEB_20160624","imAppkey":"6dfdcee27d78b1107fceeca55d80b7bd"},
    feroot: '//s1.ljcdn.com/feroot/',
    ucid:'',
    cdn:'1',
};
</script>

<title>【翔安发布时间从新到旧不看车位不看地下室第2页二手房_厦门翔安发布时间从新到旧不看车位不看地下室第2页二手房出售】(厦门链家网)</title>
<meta name="description" content="链家翔安二手房网,现有翔安发布时间从新到旧不看车位不看地下室第2页二手房真实房源53套.为准备买翔安发布时间从新到旧不看车位不看地下室第2页二手房的用户提供厦门地图找房、通勤找房等快捷找房工具,方便您更快捷的了解和购买翔安二手房.买翔安二手房就到厦门链家网." />
<meta name="keywords" content="翔安发布时间从新到旧不看车位不看地下室第2页二手房,翔安发布时间从新到旧不看车位不看地下室第2页二手房出售,厦门翔安发布时间从新到旧不看车位不看地下室第2页二手房" />
<link href="/favicon.ico" type="image/x-icon" rel=icon><link href="/favicon.ico" type="image/x-icon" rel="shortcut icon"><link rel="stylesheet" href="https://s1.ljcdn.com/feroot/pc/asset/common.css?_v=20170614145350">
<link rel="stylesheet" href="https://s1.ljcdn.com/feroot/pc/asset/ershoufang/sellList/index.css?_v=20170614145350">
<!--[if lt IE 9]><script type="text/javascript" src="https://s1.ljcdn.com/feroot/dep/common-require/html5.js?_v=20170614145350"></script><![endif]-->
<script>
function RESIZEIMG(b,k,l,m){var c=b.parentNode;var d=parseInt(c.offsetWidth)||k;var e=parseInt(c.offsetHeight)||l;var f=d/e;var g=b.naturalWidth||b.width;var h=b.naturalHeight||b.height;var i=g/h;var j="width";if(f<i){j="height";try{b.style["left"]="-"+parseInt(Math.abs((d-(g*e/h))/2))+"px"}catch(e){}}else if(m){try{b.style["top"]="-"+parseInt(Math.abs((e-(h*d/g))/2))+"px"}catch(e){}};b.style[j]="100%";};
</script>
<script>
var _czc = _czc || [];
_czc.push(["_setAccount", "1254525948"]);
</script>

<script type="text/javascript">
var _smq = _smq || [];
_smq.push(['_setAccount', '41331c2', new Date()]);
_smq.push(['_setDomainName', 'lianjia.com']);
_smq.push(['pageview']);
(function() {
var sm = document.createElement('script'); sm.type = 'text/javascript'; sm.async = true;
sm.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdnmaster.com/sitemaster/collect.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(sm, s);
})();
</script>
</head><body><script>
__STAT_LJ_CONF = {
    params: {
        ljweb_group: ['SEARCH','BIGDATA_PC'],
        ljweb_id: '',
        ljweb_mod: '',
        ljweb_bl: '',
        ljweb_el: '',
        ljweb_sl: '',
        ljweb_index: '',
        ljweb_value: '',
        ljweb_url: '',
        ljweb_ljref: (document.cookie.match(/(?:^| )ljref=([^;]*)(?:;|$)/) || ['',''])[1],
        ljweb_sample: (document.cookie.match(/(?:^| )sample_traffic_test=([^;]*)(?:;|$)/) || ['',''])[1],
        ljweb_ref: document.referrer,
        ljweb_cid: '350200',
        ljweb_channel: 'ershoufang',
        ljweb_page: 'ershoufang_search',
        ljweb_source: '',
        ljweb_stat_id: ''
    }
};



var UT = {
    send: function() {

    }
};
var LjUserTrack = {
    log: [],
    initInterval: false,
    intervalLog: function() {
        setTimeout(function() {
            if(window.$ULOG && $ULOG.send) {
                for(var i = 0, l = LjUserTrack.log.length; i < l; i++) {
                    LjUserTrack.__send(LjUserTrack.log[i]);
                }

                for(var m = 0, n = LjUserTrack.logIds.length; m < n; m++) {
                    LjUserTrack.__sendId(LjUserTrack.logIds[m]);
                }
            } else {
                LjUserTrack.intervalLog();
            }
        }, 16.7);
    },
    _start_time: +new Date,
    __send: function(data) {
        var evt_id = data.evt_id || '10043';
        if('evt_id' in data) {
            delete data.evt_id;
        }

        $ULOG.send(evt_id, {
            "pid": (window.__UDL_CONFIG && window.__UDL_CONFIG.pid && window.__UDL_CONFIG.pid)||"lianjiaweb",
            "key": window.location.href,
            "action": data
        });
    },
    logIds: [],
    __sendId: function(id) {
        id && $ULOG.send(id, {
            "pid": (window.__UDL_CONFIG && window.__UDL_CONFIG.pid && window.__UDL_CONFIG.pid)||"lianjiaweb",
            "key": window.location.href
        });
    },
    sendId: function(id) {
        if(window.$ULOG && $ULOG.send) {
            LjUserTrack.__sendId(id);
        } else {
            LjUserTrack.logIds.push(id);

            LjUserTrack.initInterval || (LjUserTrack.initInterval = true, LjUserTrack.intervalLog());

        }
    },
    send: function(data, el, config) {

        var utConf = __STAT_LJ_CONF;
        var params = config || utConf.params,
            win = window,
            j;

        data.groupIndex = data.ljweb_group || 0;

        if (params) {
            for (var d in params) {
                if(params[d] !== j && data[d] === j) {
                    data[d] = params[d];
                }
            }
        }

        if(el) {
            this.checkClick(el, data);
        }

        data.ljweb_group = params['ljweb_group'][data.groupIndex || 0];

        delete data.groupIndex;

        if(data.typ) {
            data.ljweb_bl = (data.ljweb_bl || '') + '_' + data.typ;
            delete data.typ;
        }

        if(window.$ULOG && $ULOG.send) {
            LjUserTrack.__send(data);
        } else {
            LjUserTrack.log.push(data);

            LjUserTrack.initInterval || (LjUserTrack.initInterval = true, LjUserTrack.intervalLog());

        }

    },
    checkClick: function(el, data) {

        var TAG_LINK = 'A';
        var href = '';
        var elParent = null;

        href = (el.tagName.toUpperCase() === TAG_LINK ? el.getAttribute("href", 2) : '');
        if(!href && (elParent = el.parentNode) && elParent.nodeType === 1) {
            href = (elParent.tagName.toUpperCase() === TAG_LINK ? elParent.getAttribute("href", 2) : '');
        }

        if(href) {
            data.ljweb_url = href;
        } else {
            data.ljweb_url = data.ljweb_url
                  || el.getAttribute("data-log_url")
                  || (elParent=el.parentNode||el).getAttribute("data-log_url")
                  || (
                        (elParent=elParent.parentNode||elParent)
                     && (elParent.nodeType === 1)
                     && elParent.getAttribute("data-log_url")
                     )
                  || "";
        }

        this.attr(el, data);

    },
    path: function() {

    },
    attr: function(el, data) {
        var modId     = el.getAttribute("log-mod");
        var blAttr    = el.getAttribute("data-bl");
        var elAttr    = el.getAttribute("data-el");
        var slAttr    = el.getAttribute("data-sl");
        var InAttr    = el.getAttribute("data-log_index");
        var valAttr   = el.getAttribute("data-log_value");
        var idAttr    = el.getAttribute("data-log_id");
        var groupAttr = el.getAttribute("data-log_group");
        var sourceAttr = el.getAttribute("data-log_source");
        var statIdAttr = el.getAttribute("data-log_statId");
        var evtId     = el.getAttribute("data-log_evtid");

        data.ljweb_bl    = data.ljweb_bl || blAttr || '';
        data.ljweb_el    = data.ljweb_el || elAttr || '';
        data.ljweb_sl    = data.ljweb_sl || slAttr || '';
        data.ljweb_index = data.ljweb_index || InAttr || '';
        data.ljweb_value = data.ljweb_value || valAttr || '';
        data.ljweb_id    = data.ljweb_id || idAttr || '';
        data.ljweb_source    = data.ljweb_source || sourceAttr || '';
        data.ljweb_stat_id    = data.ljweb_stat_id || statIdAttr || 0;
        data.groupIndex  = data.groupIndex || groupAttr || 0;
        data.evt_id      = data.evt_id || evtId || '';

        if (!modId) {
            if (el.parentNode && el.parentNode.nodeType === 1 && el.parentNode.tagName.toUpperCase() !== 'BODY') {
                this.attr(el.parentNode, data);
            }
        } else {
            data.ljweb_mod = modId;
        }
    }
};

;;(function() {
    var isW3c = !!document.addEventListener;

    LjUserTrack.send({
        ljweb_mod: 'pv',
        ljweb_group: 1
    });

    /*window[isW3c ? 'addEventListener' : 'attachEvent'](
        (isW3c ? '': 'on') + 'beforeunload',
        function(e) {
            var _end_time = +new Date;
            UT.send({type: 'show', subtype: 'stay', time: (_end_time-UT._start_time)/1000});
        },
        false);*/
})();





</script>
<div class="banner"><div class="container"><ul class="channelList"><li><a href="//www.lianjia.com/">首页</a></li><li  class="selected"><a href="https://xm.lianjia.com/ershoufang/" >二手房</a></li><li  class=""><a href="http://xm.fang.lianjia.com/" >新房</a></li><li  class=""><a href="https://xm.lianjia.com/zufang/" >租房</a></li><li  rel="nofollow"  class=""><a href="http://you.lianjia.com/" >旅居地产</a></li><li  class=""><a href="https://us.lianjia.com/" >海外</a></li><li  class=""><a href="https://xm.lianjia.com/xiaoqu/" >小区</a></li><li  class=""><a href="https://xm.lianjia.com/jingjiren/" >经纪人</a></li><li  class=""><a href="https://news.lianjia.com/xm/baike/" >百科</a></li><li  class=""><a href="https://xm.lianjia.com/tool.html" target="_blank">工具</a></li><li  class=""><a href="https://xm.lianjia.com/yezhu/" target="_blank">业主</a></li></ul><div class="banner-right"><div class="login" id="userInfoContainer"><i></i><a href="https://passport.lianjia.com/cas/login?service=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fxiangan%2Fpg2co32ng1nb1%2F" id="loginBtn" rel="nofollow">登录</a>/<a href="https://passport.lianjia.com/register/resources/lianjia/register.html?service=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fxiangan%2Fpg2co32ng1nb1%2F" rel="nofollow">注册</a></div><div class="phone"><i></i><span>热线电话1010-9666</span></div></div></div></div>


<script type="text/template" id="userInfoTpl">
  <i></i>
  <%if(isAgent){%>
    <a id="userNameContainer" href="<%=$.env.fixedUrl('//agent.lianjia.com/')%>"><%=username%></a>
  <%}else{%>
    <a id="userNameContainer" href="<%=$.env.fixedUrl('//user.lianjia.com/')%>" rel="nofollow"><%=username%></a>
  <%}%>
  <span id="tipContainer"></span>
  &nbsp;&nbsp;<a href="<%=logoutUrl%>">退出</a>
  <span id="pushNewsListContainer"></span>
</script>
<script type="text/template" id="pushNewsListTpl">
  <div class="pushNewsList">
    <%for(var i in group_by_type){%>
      <%if(group_by_type[i].unread !== 0 && pushMsgMap.hasOwnProperty(i)){%>
        <a href="<%=pushMsgMap[i].url%>"><%=$.replaceTpl(pushMsgMap[i].text, {unread:group_by_type[i].unread})%></a>
      <%}%>
    <%}%>
  </div>
</script>

<div class="header"><div class="menu"><div class="menuLeft"><a href="/ershoufang/" class="logo"></a><ul class="typeList"><li class="selected"><a href="/ershoufang/"  title="厦门在售二手房" >在售</a></li><li ><a href="/chengjiao/"  title="厦门成交二手房" >成交</a></li><li ><a href="/xiaoqu/"  title="厦门小区二手房" >小区</a></li><li ><a href="/ditu/"  title="厦门地图找房二手房" target="_blank">地图找房</a></li><li ><a href="/tool.html"  title="厦门计算器二手房" >计算器</a></li></ul></div><div class="app"><a href="//www.lianjia.com/client/" target="_blank"><i></i>下载链家APP</a></div></div><div class="search"><div class="input" log-mod="search"><form id="searchForm" action='/ershoufang/rs'><input type="text" id="searchInput" value="" autocomplete="off"><div class="inputRightPart"><div class="save" id="savedSearchMsg"><span id="savedSearchCount">0</span>条已保存搜索<span id="savedSearchArrow" class="downArrow"></span></div><button type='submit' class="searchButton" data-bl="search" data-el="search">&nbsp;<i></i>&nbsp;</button></div></form><div class="searchMsg" id="searchMsgContainer"></div></div></div></div>


<script type="text/template" id="hotSearchTpl">
  <div class="searchMsgTitle">
    <span class="searchMsgName">热门搜索</span>
  </div>
  <ul data-bl="sug" data-el="history">
    <%for(var i =0; i < list.length; i++){%>
    <li>
      <a role="addHistory" href="<%=list[i].url%>" data-log_index="<%=i+1%>" data-log_value="<%=list[i].string%>" class="sug--search_item">
        <span class="msgListTitle" role="historyKey"><%=list[i].string%></span>
      </a>
    </li>
    <%}%>
  </ul>
</script>
<script type="text/template" id="searchHistoryTpl">
  <div class="searchMsgTitle">
    <span class="searchMsgName">搜索历史</span>
    <div class="searchMsgTitleRightPart">
      <a href="#" id="clearSearchHistory" class="manage">清除历史记录</a>
    </div>
  </div>
  <ul data-bl="sug" data-el="history">
  <%for(var i = 0; i < list.length; i++){%>
    <li>
      <a href="<%=list[i].url%>" role="addHistory" data-log_index="<%=i+1%>" data-log_value="<%=$.encodeHTML(list[i].name)%>" class="sug--search_item">
        <span class="msgListTitle" role="historyKey"><%=$.encodeHTML(list[i].name)%></span>
        <%if(list[i].newCount) {%>
          <span class="msgListAdd"><%=list[i].newCount%>套新增房源</span>
        <%}%>
      </a>
    </li>
  <%}%>
  </ul>
</script>
<script type="text/template" id="searchSuggestionTpl">
  <div class="searchMsgTitle">
    <span class="searchMsgName">你可能在找</span>
  </div>
  <ul data-bl="sug" data-el="sug">
  <%for(var i = 0;i < list.length;i++){%>
    <li>
      <a href="<%=list[i].url%>" role="addHistory" data-log_index="<%=i+1%>" data-log_value="<%=list[i].title%>">
        <span class="msgListTitle">
          <span role="historyKey"><%=list[i].title%></span>
          <%if(list[i].region){%>
            <span class="msgListArea"><%=list[i].region%></span>
          <%}%>
        </span>
        <%if(type === 'sell'){%>
          <span class="msgListAdd">约<%=list[i].count%>套在售</span>
        <%}else if(type === 'deal'){%>
          <span class="msgListAdd">约<%=list[i].count%>套成交</span>
        <%}%>
      </a>
    </li>
  <%}%>
  </ul>
</script>
<script type="text/template" id="savedSearchTpl">
  <div class="searchMsgTitle">
    <span class="searchMsgName">已保存搜索</span>
    <div class="searchMsgTitleRightPart">
    <%if(totalCount){%>
      <a class="totalNew">查看<%=totalCount%>套新增房源</a>
    <%}%>
      <a href="<%=userCenterUrl%>" class="manage">管理</a>
    </div>
  </div>
  <ul data-bl="sug" data-el="history">
    <%for(var i = 0; i < savedData.length; i++){
      var title = savedData[i].query ? savedData[i].query + '&nbsp;' : '';
      title = title + savedData[i].title.join('&nbsp;');
    %>
      <li>
        <a href="<%=savedData[i].url%>" role="savedSearch" data-log_index="<%=i+1%>" data-log_value="<%=title%>" class="sug--search_item">
          <span class="msgListTitle"><%=title%></span>
          <%if(savedData[i].unread && savedData[i].unread !== 0){%>
          <span class="msgListAdd">新增<%=savedData[i].unread%>套</span>
          <%}%>
        </a>
      </li>
    <%}%>
  </ul>
</script>

<script>
  var hotSearchData = {
    channel:[{"name":"\u4e8c\u624b\u623f","action":"ershoufang","channel":"ershoufang","checked":1,"tipsHot":{"query":[{"string":"\u53e4\u9f99\u516c\u5bd3","url":"http:\/\/xm.lianjia.com\/ershoufang\/c3911058001822\/"},{"string":"\u6c38\u5347\u65b0\u57ce","url":"http:\/\/xm.lianjia.com\/ershoufang\/c3911057447132\/"},{"string":"\u5609\u76db\u8c6a\u56ed","url":"http:\/\/xm.lianjia.com\/ershoufang\/c3911057908838\/"},{"string":"\u534e\u4fa8\u6d77\u666f\u57ce","url":"http:\/\/xm.lianjia.com\/ershoufang\/c3911058020100\/"},{"string":"\u601d\u660e","url":"http:\/\/xm.lianjia.com\/ershoufang\/siming\/"}],"tips":"\u8bf7\u8f93\u5165\u533a\u57df\u3001\u5546\u5708\u6216\u5c0f\u533a\u540d\u5f00\u59cb\u627e\u623f"}},{"name":"\u5c0f\u533a","action":"xiaoqu","channel":"xiaoqu","checked":0,"tipsHot":{"query":[{"string":"\u79b9\u6d32\u5c0a\u6d77","url":"http:\/\/xm.lianjia.com\/xiaoqu\/3911057515697\/"},{"string":"\u6d77\u665f\u7ef4\u591a\u5229\u4e9a","url":"http:\/\/xm.lianjia.com\/xiaoqu\/3911058038838\/"},{"string":"\u9752\u6625\u6d77\u5cb8","url":"http:\/\/xm.lianjia.com\/xiaoqu\/3911265908159265\/"},{"string":"\u5929\u6e56\u57ce\u5929\u6e56","url":"http:\/\/xm.lianjia.com\/xiaoqu\/3911057436176\/"},{"string":"\u4e16\u8302\u6e56\u6ee8\u9996\u5e9c","url":"http:\/\/xm.lianjia.com\/xiaoqu\/rs%E4%B8%96%E8%8C%82%E6%B9%96%E6%BB%A8%E9%A6%96%E5%BA%9C\/"},{"string":"\u79b9\u6d32\u4e2d\u592e\u6d77\u5cb8","url":"http:\/\/xm.lianjia.com\/xiaoqu\/rs%E7%A6%B9%E6%B4%B2%E4%B8%AD%E5%A4%AE%E6%B5%B7%E5%B2%B8\/"}],"tips":"\u8bf7\u8f93\u5165\u5c0f\u533a\u540d\u5f00\u59cb\u67e5\u627e\u5c0f\u533a"}},{"name":"\u65b0\u623f","action":"loupan","channel":"xinfang","checked":0,"tipsHot":{"query":[],"tips":""}},{"name":"\u79df\u623f","action":"zufang","channel":"zufang","checked":0,"tipsHot":{"query":[{"string":"\u6d77\u5ce1\u56fd\u9645\u793e\u533a","url":"http:\/\/xm.lianjia.com\/zufang\/c3911055520921\/"},{"string":"\u65b0\u666f\u56fd\u9645\u5916\u6ee9","url":"http:\/\/xm.lianjia.com\/zufang\/c3911057567022\/"},{"string":"\u79df\u623f   \u6709\u94a5\u5319","url":"http:\/\/xm.lianjia.com\/zufang\/ky1\/"}],"tips":"\u8bf7\u8f93\u5165\u533a\u57df\u3001\u5546\u5708\u6216\u5c0f\u533a\u540d\u5f00\u59cb\u627e\u623f"}},{"name":"\u7ecf\u7eaa\u4eba","action":"jingjiren","channel":"jingjiren","checked":0,"tipsHot":{"query":[],"tips":"\u8bf7\u8f93\u5165\u5546\u5708\u3001\u5c0f\u533a\u6216\u7ecf\u7eaa\u4eba\u7684\u59d3\u540d\u3001\u7535\u8bdd..."}}],
    curChannel:'ershoufang'
  };
</script>
<div class="m-filter">
      <div class="position">
      <dl>
        <h2><dt title="厦门在售位置">位置</dt></h2>
        <dd>
                  <a href="/ershoufang/" id="areaTab" class="selected" title="厦门二手房">
            区域<span class="arrow"></span>
          </a>
                                    </dd>
      </dl>
      <dl>
        <dt></dt>
        <dd>
          <!-- 区域 -->
                    <div data-role="ershoufang" >
            <div>
                                                <a href="/ershoufang/siming/co32ng1nb1/"  title="厦门思明在售二手房 ">思明</a>
                                                                <a href="/ershoufang/huli/co32ng1nb1/"  title="厦门湖里在售二手房 ">湖里</a>
                                                                <a href="/ershoufang/haicang/co32ng1nb1/"  title="厦门海沧在售二手房 ">海沧</a>
                                                                <a href="/ershoufang/jimei/co32ng1nb1/"  title="厦门集美在售二手房 ">集美</a>
                                                                <a href="/ershoufang/xiangan/co32ng1nb1/" class="selected" title="厦门翔安在售二手房 ">翔安</a>
                                                                <a href="/ershoufang/tongan/co32ng1nb1/"  title="厦门同安在售二手房 ">同安</a>
                                          </div>
                          <div>
                                  <b>D</b>
                                      <a href="/ershoufang/dadengdao/co32ng1nb1/" >大嶝岛</a>
                                                    <b>M</b>
                                      <a href="/ershoufang/maxiang/co32ng1nb1/" >马巷</a>
                                                    <b>X</b>
                                      <a href="/ershoufang/xianganqita/co32ng1nb1/" >翔安其他</a>
                                      <a href="/ershoufang/xindian/co32ng1nb1/" >新店</a>
                                                </div>
                      </div>
                    <!-- 地铁 -->
                    <!-- 学区 -->
                  </dd>
      </dl>
    </div>

  <div class="list-more">
                                                                                                                                                                                                                                          <dl class=" hasmore" >
          <h2><dt title="厦门售价在售二手房">售价</dt></h2>
          <dd>
                                                                                                                  <a href="javascript:;" class="nolink" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">100万以下</span>
                              </a>
                                                                    <a href="/ershoufang/xiangan/co32ng1nb1p2/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">100-200万</span>
                                  <span class="cnt">(3)</span>
                              </a>
                                                                    <a href="/ershoufang/xiangan/co32ng1nb1p3/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">200-300万</span>
                                  <span class="cnt">(19)</span>
                              </a>
                                                                    <a href="/ershoufang/xiangan/co32ng1nb1p4/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">300-400万</span>
                                  <span class="cnt">(21)</span>
                              </a>
                                                                    <a href="/ershoufang/xiangan/co32ng1nb1p5/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">400-500万</span>
                                  <span class="cnt">(10)</span>
                              </a>
                                                                                                                  <a href="javascript:;" class="nolink" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">500-800万</span>
                              </a>
                                                                                                                  <a href="javascript:;" class="nolink" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">800万以上</span>
                              </a>
                                                              <span class="customFilter mt" data-role="price">
                <input type="text" role="minValue" value="">
                <span>-</span>
                <input type="text" role="maxValue" value="">&nbsp;
                                  <span>万</span>
                                <button class="btn-range hide" data-url="/ershoufang/xiangan/co32ng1nb1bp{min}ep{max}/">确定</button>
              </span>
                                                  <span class="btn-showmore">+ 更多及自定义</span>
                      </dd>
        </dl>
                                                                                                                                                                                                                                  <dl class=" hasmore" >
          <h2><dt title="厦门面积在售二手房">面积</dt></h2>
          <dd>
                                                                    <a href="/ershoufang/xiangan/co32ng1nb1a1/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">50平以下</span>
                                  <span class="cnt">(1)</span>
                              </a>
                                                                    <a href="/ershoufang/xiangan/co32ng1nb1a2/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">50-70平</span>
                                  <span class="cnt">(3)</span>
                              </a>
                                                                    <a href="/ershoufang/xiangan/co32ng1nb1a3/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">70-90平</span>
                                  <span class="cnt">(20)</span>
                              </a>
                                                                    <a href="/ershoufang/xiangan/co32ng1nb1a4/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">90-110平</span>
                                  <span class="cnt">(8)</span>
                              </a>
                                                                    <a href="/ershoufang/xiangan/co32ng1nb1a5/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">110-130平</span>
                                  <span class="cnt">(17)</span>
                              </a>
                                                                    <a href="/ershoufang/xiangan/co32ng1nb1a6/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">130-150平</span>
                                  <span class="cnt">(4)</span>
                              </a>
                                                                                                                  <a href="javascript:;" class="nolink" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">150-200平</span>
                              </a>
                                                                                                                  <a href="javascript:;" class="nolink" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">200平以上</span>
                              </a>
                                                              <span class="customFilter mt" data-role="area">
                <input type="text" role="minValue" value="">
                <span>-</span>
                <input type="text" role="maxValue" value="">&nbsp;
                                  <span>平</span>
                                <button class="btn-range hide" data-url="/ershoufang/xiangan/co32ng1nb1ba{min}ea{max}/">确定</button>
              </span>
                                                  <span class="btn-showmore">+ 更多及自定义</span>
                      </dd>
        </dl>
                                                                                                                                                                            <dl class=" " >
          <h2><dt title="厦门房型在售二手房">房型</dt></h2>
          <dd>
                                                                    <a href="/ershoufang/xiangan/co32ng1nb1l1/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">一室</span>
                                  <span class="cnt">(1)</span>
                              </a>
                                                                    <a href="/ershoufang/xiangan/co32ng1nb1l2/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">二室</span>
                                  <span class="cnt">(19)</span>
                              </a>
                                                                    <a href="/ershoufang/xiangan/co32ng1nb1l3/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">三室</span>
                                  <span class="cnt">(28)</span>
                              </a>
                                                                    <a href="/ershoufang/xiangan/co32ng1nb1l4/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">四室</span>
                                  <span class="cnt">(4)</span>
                              </a>
                                                                                                                  <a href="javascript:;" class="nolink" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">五室</span>
                              </a>
                                                                    <a href="/ershoufang/xiangan/co32ng1nb1l6/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">五室以上</span>
                                  <span class="cnt">(1)</span>
                              </a>
                                                          </dd>
        </dl>
                                                                                                                                        <dl class="hide " data-role="hide-row">
          <h2><dt title="厦门用途在售二手房">用途</dt></h2>
          <dd>
                                                                    <a href="/ershoufang/xiangan/co32ng1nb1sf1/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">普通住宅</span>
                                  <span class="cnt">(53)</span>
                              </a>
                                                                                                                  <a href="javascript:;" class="nolink" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">别墅</span>
                              </a>
                                                                                                                  <a href="javascript:;" class="nolink" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">四合院</span>
                              </a>
                                                                                                                  <a href="javascript:;" class="nolink" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">其他</span>
                              </a>
                                                          </dd>
        </dl>
                                                                                                                                        <dl class="hide " data-role="hide-row">
          <h2><dt title="厦门权属在售二手房">权属</dt></h2>
          <dd>
                                                                    <a href="/ershoufang/xiangan/co32ng1nb1dp1/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">商品房</span>
                                  <span class="cnt">(50)</span>
                              </a>
                                                                                                                  <a href="javascript:;" class="nolink" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">公房</span>
                              </a>
                                                                                                                  <a href="javascript:;" class="nolink" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">经适房</span>
                              </a>
                                                                    <a href="/ershoufang/xiangan/co32ng1nb1dp4/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">其他</span>
                                  <span class="cnt">(3)</span>
                              </a>
                                                          </dd>
        </dl>
                                                                                                                      <dl class="hide " data-role="hide-row">
          <h2><dt title="厦门楼层在售二手房">楼层</dt></h2>
          <dd>
                                                                    <a href="/ershoufang/xiangan/co32ng1nb1lc1/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">低楼层</span>
                                  <span class="cnt">(19)</span>
                              </a>
                                                                    <a href="/ershoufang/xiangan/co32ng1nb1lc2/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">中楼层</span>
                                  <span class="cnt">(16)</span>
                              </a>
                                                                    <a href="/ershoufang/xiangan/co32ng1nb1lc3/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">高楼层</span>
                                  <span class="cnt">(18)</span>
                              </a>
                                                          </dd>
        </dl>
                                                                                                                                                          <dl class="hide " data-role="hide-row">
          <h2><dt title="厦门朝向在售二手房">朝向</dt></h2>
          <dd>
                                                                    <a href="/ershoufang/xiangan/co32ng1nb1f1/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">朝东</span>
                                  <span class="cnt">(6)</span>
                              </a>
                                                                    <a href="/ershoufang/xiangan/co32ng1nb1f2/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">朝南</span>
                                  <span class="cnt">(50)</span>
                              </a>
                                                                    <a href="/ershoufang/xiangan/co32ng1nb1f3/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">朝西</span>
                                  <span class="cnt">(1)</span>
                              </a>
                                                                    <a href="/ershoufang/xiangan/co32ng1nb1f4/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">朝北</span>
                                  <span class="cnt">(30)</span>
                              </a>
                                                                    <a href="/ershoufang/xiangan/co32ng1nb1f5/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">南北</span>
                                  <span class="cnt">(29)</span>
                              </a>
                                                          </dd>
        </dl>
                                                                                                                                                          <dl class="hide " data-role="hide-row">
          <h2><dt title="厦门楼龄在售二手房">楼龄</dt></h2>
          <dd>
                                                                    <a href="/ershoufang/xiangan/co32ng1nb1y1/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">5年以内</span>
                                  <span class="cnt">(31)</span>
                              </a>
                                                                    <a href="/ershoufang/xiangan/co32ng1nb1y2/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">10年以内</span>
                                  <span class="cnt">(41)</span>
                              </a>
                                                                    <a href="/ershoufang/xiangan/co32ng1nb1y3/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">15年以内</span>
                                  <span class="cnt">(42)</span>
                              </a>
                                                                    <a href="/ershoufang/xiangan/co32ng1nb1y4/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">20年以内</span>
                                  <span class="cnt">(43)</span>
                              </a>
                                                                                                                  <a href="javascript:;" class="nolink" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">20年以上</span>
                              </a>
                                                          </dd>
        </dl>
                                                                                                                      <dl class="hide " data-role="hide-row">
          <h2><dt title="厦门类型在售二手房">类型</dt></h2>
          <dd>
                                                                    <a href="/ershoufang/xiangan/co32ng1nb1bt1/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">塔楼</span>
                                  <span class="cnt">(6)</span>
                              </a>
                                                                    <a href="/ershoufang/xiangan/co32ng1nb1bt2/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">板楼</span>
                                  <span class="cnt">(36)</span>
                              </a>
                                                                    <a href="/ershoufang/xiangan/co32ng1nb1bt3/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">板塔结合</span>
                                  <span class="cnt">(2)</span>
                              </a>
                                                          </dd>
        </dl>
                                                                                                    <dl class="hide " data-role="hide-row">
          <h2><dt title="厦门电梯在售二手房">电梯</dt></h2>
          <dd>
                                                                    <a href="/ershoufang/xiangan/co32ng1nb1ie2/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">有电梯</span>
                                  <span class="cnt">(14)</span>
                              </a>
                                                                    <a href="/ershoufang/xiangan/co32ng1nb1ie1/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">无电梯</span>
                                  <span class="cnt">(1)</span>
                              </a>
                                                          </dd>
        </dl>
                                                                                                                      <dl class="hide " data-role="hide-row">
          <h2><dt title="厦门装修在售二手房">装修</dt></h2>
          <dd>
                                                                    <a href="/ershoufang/xiangan/co32ng1nb1de1/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">精装修</span>
                                  <span class="cnt">(16)</span>
                              </a>
                                                                    <a href="/ershoufang/xiangan/co32ng1nb1de2/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">普通装修</span>
                                  <span class="cnt">(4)</span>
                              </a>
                                                                    <a href="/ershoufang/xiangan/co32ng1nb1de3/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">毛坯房</span>
                                  <span class="cnt">(12)</span>
                              </a>
                                                          </dd>
        </dl>
                  <dl class="hide otherItem" data-role="hide-row">
      <dt class="other">其他</dt>
      <dd>
      <form id="otherSearchForm">
        <input class="inp-search" type="text" value="" placeholder="在结果中搜索">
        <button type="submit" class="btn-search">确定</button>
      </form>
      </dd>
    </dl>
      </div>
    <div class="more btn-more">更多选项<span class="arrow"></span></div>
  </div>
<div class="content "><!-- 左侧内容 --><div class="leftContent"><div class="orderFilter"><div class="orderTag"><ul><li ><h3><a href="/ershoufang/xiangan/ng1nb1/">默认排序</span></a></h3></li><li class='selected'><h3><a href="/ershoufang/xiangan/co32ng1nb1/">最新发布</span></a></h3></li><li ><h3><a href="/ershoufang/xiangan/co21ng1nb1/">房屋总价</a></h3></li><li ><h3><a href="/ershoufang/xiangan/co41ng1nb1/">房屋单价</a></h3></li><li ><h3><a href="/ershoufang/xiangan/co11ng1nb1/">房屋面积</a></h3></li><li ><h3><a href="/ershoufang/xiangan/co52ng1nb1/">带看较多</span></a></h3></li></ul><div class="orderType" id="switchView"><span class="list" title="列表模式"></span><span class="img" title="大图模式"></span></div></div><div class="filterAgain"><div class="title">筛选：</div><ul><li ><h3><a href="/ershoufang/xiangan/co32ng1nb1ty1/"><span class="checkbox"></span>满两年</a></h3></li><li ><h3><a href="/ershoufang/xiangan/co32ng1nb1mw1/"><span class="checkbox"></span>满五年</a></h3></li><li ><h3><a href="/ershoufang/xiangan/co32ng1nb1tt2/"><span class="checkbox"></span>新上</a></h3></li><li ><h3><a href="/ershoufang/xiangan/co32ng1nb1tt4/"><span class="checkbox"></span>随时看房<div class="info"><i></i><div class="infoContent min-wid">经纪人持有该房源钥匙，您可以随时预约看房</div></div></a></h3></li><li class="selected"><h3><a href="/ershoufang/xiangan/co32ng1/"><span class="checkbox"></span>不看地下室</a></h3></li><li class="selected"><h3><a href="/ershoufang/xiangan/co32nb1/"><span class="checkbox"></span>不看车位</a></h3></li></ul></div></div><div class="resultDes clear"><h2 class="total fl">共找到<span> 53 </span>套厦门二手房</h2><div class="button fr"><div class="clearBtn hide"><script>with(document)write('<a href="/ershoufang/"><span></span>清空条件</a>');</script></div><div class="saveBtn"><a href="#" id="saveBtn"><span></span>保存搜索</a></div></div></div><div id="newAddHouseContainer"></div><div class="listContentLine"></div><ul class="sellListContent" log-mod="list"><li class="clear"><a class="img " href="https://xm.lianjia.com/ershoufang/105100758226.html" target="_blank"data-log_index="1" data-el="ershoufang" data-sl=""><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170614145350" data-original="https://image1.ljcdn.com/350200-inspection/684b53e2-35f8-4323-8b2d-45e154c52440.jpg.232x174.jpg" alt="满两年 送家具家电 看海看中庭 居家装修 南北通透"></a><div class="info clear"><div class="title"><a class="" href="https://xm.lianjia.com/ershoufang/105100758226.html" target="_blank" data-log_index="1"   data-el="ershoufang"  data-sl="">满两年 送家具家电 看海看中庭 居家装修 南北通透</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span><a href="https://xm.lianjia.com/xiaoqu/3911057442606/" target="_blank" data-log_index="1" data-el="region">明发半岛祥湾A区 </a> | 3室2厅 | 124.5平米 | 南 北 | 精装</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>中楼层(共30层)2013年建板楼  -  <a href="https://xm.lianjia.com/ershoufang/xindian/" target="_blank">新店</a></div></div><div class="followInfo"><span class="starIcon"></span>23人关注 / 共10次带看 / 1个月以前发布</div><div class="tag"><span class="five">房本满两年</span></div><div class="priceInfo"><div class="totalPrice"><span>385</span>万</div><div class="unitPrice" data-hid="105100758226" data-rid="3911057442606" data-price="30924"><span>单价30924元/平米</span></div></div></div><div class="listButtonContainer"><div class="btn-follow followBtn" data-hid="105100758226"><span class="follow-text">关注</span></div><div class="compareBtn LOGCLICK" data-hid="105100758226" log-mod="105100758226" data-log_evtid="10230">加入对比</div></div></li><li class="clear"><a class="img " href="https://xm.lianjia.com/ershoufang/105100752858.html" target="_blank"data-log_index="2" data-el="ershoufang" data-sl=""><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170614145350" data-original="" alt="首开领翔国际 4室2厅 410万"></a><div class="info clear"><div class="title"><a class="" href="https://xm.lianjia.com/ershoufang/105100752858.html" target="_blank" data-log_index="2"   data-el="ershoufang"  data-sl="">首开领翔国际 4室2厅 410万</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span><a href="https://xm.lianjia.com/xiaoqu/3911057287787/" target="_blank" data-log_index="2" data-el="region">首开领翔国际 </a> | 4室2厅 | 131.19平米 | 东南 | 简装</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>低楼层(共22层)2014年建板楼  -  <a href="https://xm.lianjia.com/ershoufang/xindian/" target="_blank">新店</a></div></div><div class="followInfo"><span class="starIcon"></span>0人关注 / 共0次带看 / 1个月以前发布</div><div class="tag"></div><div class="priceInfo"><div class="totalPrice"><span>410</span>万</div><div class="unitPrice" data-hid="105100752858" data-rid="3911057287787" data-price="31253"><span>单价31253元/平米</span></div></div></div><div class="listButtonContainer"><div class="btn-follow followBtn" data-hid="105100752858"><span class="follow-text">关注</span></div><div class="compareBtn LOGCLICK" data-hid="105100752858" log-mod="105100752858" data-log_evtid="10230">加入对比</div></div></li><li class="clear"><a class="img " href="https://xm.lianjia.com/ershoufang/105100748092.html" target="_blank"data-log_index="3" data-el="ershoufang" data-sl=""><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170614145350" data-original="https://image1.ljcdn.com/350200-inspection/81b4d51b-b41a-4931-bd98-b6e7f9760354.jpg.232x174.jpg" alt="万科金色悦城 2室2厅 220万"></a><div class="info clear"><div class="title"><a class="" href="https://xm.lianjia.com/ershoufang/105100748092.html" target="_blank" data-log_index="3"   data-el="ershoufang"  data-sl="">万科金色悦城 2室2厅 220万</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span><a href="https://xm.lianjia.com/xiaoqu/3911057446528/" target="_blank" data-log_index="3" data-el="region">万科金色悦城 </a> | 2室2厅 | 74平米 | 南 北 | 其他</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>高楼层(共35层)2010年建板楼  -  <a href="https://xm.lianjia.com/ershoufang/maxiang/" target="_blank">马巷</a></div></div><div class="followInfo"><span class="starIcon"></span>28人关注 / 共0次带看 / 2个月以前发布</div><div class="tag"><span class="taxfree">房本满五年</span></div><div class="priceInfo"><div class="totalPrice"><span>220</span>万</div><div class="unitPrice" data-hid="105100748092" data-rid="3911057446528" data-price="29730"><span>单价29730元/平米</span></div></div></div><div class="listButtonContainer"><div class="btn-follow followBtn" data-hid="105100748092"><span class="follow-text">关注</span></div><div class="compareBtn LOGCLICK" data-hid="105100748092" log-mod="105100748092" data-log_evtid="10230">加入对比</div></div></li><li class="clear"><a class="img " href="https://xm.lianjia.com/ershoufang/105100746545.html" target="_blank"data-log_index="4" data-el="ershoufang" data-sl=""><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170614145350" data-original="https://image1.ljcdn.com/350200-inspection/4e0854f5-d561-4f33-93e9-24e17cc7108f.jpg.232x174.jpg" alt="首开领翔国际 2室2厅 350万"></a><div class="info clear"><div class="title"><a class="" href="https://xm.lianjia.com/ershoufang/105100746545.html" target="_blank" data-log_index="4"   data-el="ershoufang"  data-sl="">首开领翔国际 2室2厅 350万</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span><a href="https://xm.lianjia.com/xiaoqu/3911057287787/" target="_blank" data-log_index="4" data-el="region">首开领翔国际 </a> | 2室2厅 | 121.33平米 | 南 北 | 毛坯</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>低楼层(共27层)2014年建板楼  -  <a href="https://xm.lianjia.com/ershoufang/xindian/" target="_blank">新店</a></div></div><div class="followInfo"><span class="starIcon"></span>5人关注 / 共0次带看 / 2个月以前发布</div><div class="tag"></div><div class="priceInfo"><div class="totalPrice"><span>350</span>万</div><div class="unitPrice" data-hid="105100746545" data-rid="3911057287787" data-price="28847"><span>单价28847元/平米</span></div></div></div><div class="listButtonContainer"><div class="btn-follow followBtn" data-hid="105100746545"><span class="follow-text">关注</span></div><div class="compareBtn LOGCLICK" data-hid="105100746545" log-mod="105100746545" data-log_evtid="10230">加入对比</div></div></li><li class="clear"><a class="img " href="https://xm.lianjia.com/ershoufang/105100743725.html" target="_blank"data-log_index="5" data-el="ershoufang" data-sl=""><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170614145350" data-original="https://image1.ljcdn.com/350200-inspection/f0317190-6cb4-4556-bbcc-b8350d9c328d.jpg.232x174.jpg" alt="明发半岛祥湾B区 2室1厅 240万"></a><div class="info clear"><div class="title"><a class="" href="https://xm.lianjia.com/ershoufang/105100743725.html" target="_blank" data-log_index="5"   data-el="ershoufang"  data-sl="">明发半岛祥湾B区 2室1厅 240万</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span><a href="https://xm.lianjia.com/xiaoqu/3911057444072/" target="_blank" data-log_index="5" data-el="region">明发半岛祥湾B区 </a> | 2室1厅 | 76平米 | 南 | 毛坯</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>中楼层(共18层)2013年建板楼  -  <a href="https://xm.lianjia.com/ershoufang/xindian/" target="_blank">新店</a></div></div><div class="followInfo"><span class="starIcon"></span>18人关注 / 共2次带看 / 2个月以前发布</div><div class="tag"><span class="five">房本满两年</span></div><div class="priceInfo"><div class="totalPrice"><span>240</span>万</div><div class="unitPrice" data-hid="105100743725" data-rid="3911057444072" data-price="31579"><span>单价31579元/平米</span></div></div></div><div class="listButtonContainer"><div class="btn-follow followBtn" data-hid="105100743725"><span class="follow-text">关注</span></div><div class="compareBtn LOGCLICK" data-hid="105100743725" log-mod="105100743725" data-log_evtid="10230">加入对比</div></div></li><li class="clear"><a class="img " href="https://xm.lianjia.com/ershoufang/105100743083.html" target="_blank"data-log_index="6" data-el="ershoufang" data-sl=""><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170614145350" data-original="" alt="东方新城一区 2室2厅 230万"></a><div class="info clear"><div class="title"><a class="" href="https://xm.lianjia.com/ershoufang/105100743083.html" target="_blank" data-log_index="6"   data-el="ershoufang"  data-sl="">东方新城一区 2室2厅 230万</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span><a href="https://xm.lianjia.com/xiaoqu/3911057283716/" target="_blank" data-log_index="6" data-el="region">东方新城一区 </a> | 2室2厅 | 85.79平米 | 南 北 | 其他</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>低楼层(共17层)2007年建板塔结合  -  <a href="https://xm.lianjia.com/ershoufang/xindian/" target="_blank">新店</a></div></div><div class="followInfo"><span class="starIcon"></span>7人关注 / 共2次带看 / 2个月以前发布</div><div class="tag"></div><div class="priceInfo"><div class="totalPrice"><span>230</span>万</div><div class="unitPrice" data-hid="105100743083" data-rid="3911057283716" data-price="26810"><span>单价26810元/平米</span></div></div></div><div class="listButtonContainer"><div class="btn-follow followBtn" data-hid="105100743083"><span class="follow-text">关注</span></div><div class="compareBtn LOGCLICK" data-hid="105100743083" log-mod="105100743083" data-log_evtid="10230">加入对比</div></div></li><li class="clear"><a class="img " href="https://xm.lianjia.com/ershoufang/105100742681.html" target="_blank"data-log_index="7" data-el="ershoufang" data-sl=""><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170614145350" data-original="https://image1.ljcdn.com/350200-inspection/7a8c2d69-b06b-46e2-8ac2-f8782afde2e1.jpg.232x174.jpg" alt="翔安 马巷  正规一房一厅 毛坯"></a><div class="info clear"><div class="title"><a class="" href="https://xm.lianjia.com/ershoufang/105100742681.html" target="_blank" data-log_index="7"   data-el="ershoufang"  data-sl="">翔安 马巷  正规一房一厅 毛坯</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span><a href="https://xm.lianjia.com/xiaoqu/3911057434008/" target="_blank" data-log_index="7" data-el="region">锦绣祥安 </a> | 1室1厅 | 73.22平米 | 南 | 其他 | 有电梯</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>高楼层(共18层)2014年建塔楼  -  <a href="https://xm.lianjia.com/ershoufang/maxiang/" target="_blank">马巷</a></div></div><div class="followInfo"><span class="starIcon"></span>13人关注 / 共2次带看 / 2个月以前发布</div><div class="tag"></div><div class="priceInfo"><div class="totalPrice"><span>183</span>万</div><div class="unitPrice" data-hid="105100742681" data-rid="3911057434008" data-price="24994"><span>单价24994元/平米</span></div></div></div><div class="listButtonContainer"><div class="btn-follow followBtn" data-hid="105100742681"><span class="follow-text">关注</span></div><div class="compareBtn LOGCLICK" data-hid="105100742681" log-mod="105100742681" data-log_evtid="10230">加入对比</div></div></li><li class="clear"><a class="img " href="https://xm.lianjia.com/ershoufang/105100740811.html" target="_blank"data-log_index="8" data-el="ershoufang" data-sl=""><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170614145350" data-original="https://image1.ljcdn.com/350200-inspection/89af0861-0ef8-46d5-b3e2-9508313c2c9c.jpg.232x174.jpg" alt="满两年 高楼层  入户阳台 南北朝向 毛坯"></a><div class="info clear"><div class="title"><a class="" href="https://xm.lianjia.com/ershoufang/105100740811.html" target="_blank" data-log_index="8"   data-el="ershoufang"  data-sl="">满两年 高楼层  入户阳台 南北朝向 毛坯</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span><a href="https://xm.lianjia.com/xiaoqu/3911057442606/" target="_blank" data-log_index="8" data-el="region">明发半岛祥湾A区 </a> | 3室2厅 | 113.73平米 | 南 北 | 毛坯 | 有电梯</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>高楼层(共26层)2013年建板楼  -  <a href="https://xm.lianjia.com/ershoufang/xindian/" target="_blank">新店</a></div></div><div class="followInfo"><span class="starIcon"></span>4人关注 / 共4次带看 / 2个月以前发布</div><div class="tag"><span class="five">房本满两年</span></div><div class="priceInfo"><div class="totalPrice"><span>363</span>万</div><div class="unitPrice" data-hid="105100740811" data-rid="3911057442606" data-price="31918"><span>单价31918元/平米</span></div></div></div><div class="listButtonContainer"><div class="btn-follow followBtn" data-hid="105100740811"><span class="follow-text">关注</span></div><div class="compareBtn LOGCLICK" data-hid="105100740811" log-mod="105100740811" data-log_evtid="10230">加入对比</div></div></li><li class="clear"><a class="img " href="https://xm.lianjia.com/ershoufang/105100737933.html" target="_blank"data-log_index="9" data-el="ershoufang" data-sl=""><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170614145350" data-original="https://image1.ljcdn.com/350200-inspection/9686f49e-6c08-4f28-aacd-ff31d66e8cfb.jpg.232x174.jpg" alt="阳光城翡丽湾全明格局小两房，低总价"></a><div class="info clear"><div class="title"><a class="" href="https://xm.lianjia.com/ershoufang/105100737933.html" target="_blank" data-log_index="9"   data-el="ershoufang"  data-sl="">阳光城翡丽湾全明格局小两房，低总价</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span><a href="https://xm.lianjia.com/xiaoqu/3911100636637/" target="_blank" data-log_index="9" data-el="region">阳光城翡丽湾 </a> | 2室1厅 | 74.5平米 | 西北 | 其他</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>低楼层(共31层)  -  <a href="https://xm.lianjia.com/ershoufang/xindian/" target="_blank">新店</a></div></div><div class="followInfo"><span class="starIcon"></span>5人关注 / 共2次带看 / 2个月以前发布</div><div class="tag"></div><div class="priceInfo"><div class="totalPrice"><span>243</span>万</div><div class="unitPrice" data-hid="105100737933" data-rid="3911100636637" data-price="32618"><span>单价32618元/平米</span></div></div></div><div class="listButtonContainer"><div class="btn-follow followBtn" data-hid="105100737933"><span class="follow-text">关注</span></div><div class="compareBtn LOGCLICK" data-hid="105100737933" log-mod="105100737933" data-log_evtid="10230">加入对比</div></div></li><li class="clear"><a class="img " href="https://xm.lianjia.com/ershoufang/105100736353.html" target="_blank"data-log_index="10" data-el="ershoufang" data-sl=""><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170614145350" data-original="" alt="翔安汇景新城5.8米挑高楼中楼精装修"></a><div class="info clear"><div class="title"><a class="" href="https://xm.lianjia.com/ershoufang/105100736353.html" target="_blank" data-log_index="10"   data-el="ershoufang"  data-sl="">翔安汇景新城5.8米挑高楼中楼精装修</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span><a href="https://xm.lianjia.com/xiaoqu/3911057286402/" target="_blank" data-log_index="10" data-el="region">汇景新城中心 </a> | 2室2厅 | 68平米 | 南 北 | 精装</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>低楼层(共16层)2011年建  -  <a href="https://xm.lianjia.com/ershoufang/xindian/" target="_blank">新店</a></div></div><div class="followInfo"><span class="starIcon"></span>4人关注 / 共0次带看 / 2个月以前发布</div><div class="tag"></div><div class="priceInfo"><div class="totalPrice"><span>275</span>万</div><div class="unitPrice" data-hid="105100736353" data-rid="3911057286402" data-price="40442"><span>单价40442元/平米</span></div></div></div><div class="listButtonContainer"><div class="btn-follow followBtn" data-hid="105100736353"><span class="follow-text">关注</span></div><div class="compareBtn LOGCLICK" data-hid="105100736353" log-mod="105100736353" data-log_evtid="10230">加入对比</div></div></li><li class="clear"><a class="img " href="https://xm.lianjia.com/ershoufang/105100725932.html" target="_blank"data-log_index="11" data-el="ershoufang" data-sl=""><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170614145350" data-original="https://image1.ljcdn.com/350200-inspection/06d41c56-1279-494c-a3b5-de4732570413.jpg.232x174.jpg" alt="翔安隧道口，欧式装修，高层朝南三房"></a><div class="info clear"><div class="title"><a class="" href="https://xm.lianjia.com/ershoufang/105100725932.html" target="_blank" data-log_index="11"   data-el="ershoufang"  data-sl="">翔安隧道口，欧式装修，高层朝南三房</a><span class="yezhushuo tagBlock">房主自荐</span></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span><a href="https://xm.lianjia.com/xiaoqu/3911057444072/" target="_blank" data-log_index="11" data-el="region">明发半岛祥湾B区 </a> | 3室2厅 | 126.86平米 | 南 | 精装</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>高楼层(共30层)2013年建板楼  -  <a href="https://xm.lianjia.com/ershoufang/xindian/" target="_blank">新店</a></div></div><div class="followInfo"><span class="starIcon"></span>2人关注 / 共0次带看 / 2个月以前发布</div><div class="tag"><span class="five">房本满两年</span></div><div class="priceInfo"><div class="totalPrice"><span>430</span>万</div><div class="unitPrice" data-hid="105100725932" data-rid="3911057444072" data-price="33896"><span>单价33896元/平米</span></div></div></div><div class="listButtonContainer"><div class="btn-follow followBtn" data-hid="105100725932"><span class="follow-text">关注</span></div><div class="compareBtn LOGCLICK" data-hid="105100725932" log-mod="105100725932" data-log_evtid="10230">加入对比</div></div></li><li class="clear"><a class="img " href="https://xm.lianjia.com/ershoufang/105100723941.html" target="_blank"data-log_index="12" data-el="ershoufang" data-sl=""><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170614145350" data-original="https://image1.ljcdn.com/350200-inspection/0bad0ed7-2890-4538-99e6-d344c36c3bd2.jpg.232x174.jpg" alt="宝嘉誉园高层精装小两房 配套成熟 2014年建成"></a><div class="info clear"><div class="title"><a class="" href="https://xm.lianjia.com/ershoufang/105100723941.html" target="_blank" data-log_index="12"   data-el="ershoufang"  data-sl="">宝嘉誉园高层精装小两房 配套成熟 2014年建成</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span><a href="https://xm.lianjia.com/xiaoqu/3911057272065/" target="_blank" data-log_index="12" data-el="region">宝嘉誉园 </a> | 2室2厅 | 81.21平米 | 东 南 | 其他</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>中楼层(共32层)2000年建板楼  -  <a href="https://xm.lianjia.com/ershoufang/xindian/" target="_blank">新店</a></div></div><div class="followInfo"><span class="starIcon"></span>6人关注 / 共2次带看 / 2个月以前发布</div><div class="tag"></div><div class="priceInfo"><div class="totalPrice"><span>300</span>万</div><div class="unitPrice" data-hid="105100723941" data-rid="3911057272065" data-price="36942"><span>单价36942元/平米</span></div></div></div><div class="listButtonContainer"><div class="btn-follow followBtn" data-hid="105100723941"><span class="follow-text">关注</span></div><div class="compareBtn LOGCLICK" data-hid="105100723941" log-mod="105100723941" data-log_evtid="10230">加入对比</div></div></li><li class="clear"><a class="img " href="https://xm.lianjia.com/ershoufang/105100720165.html" target="_blank"data-log_index="13" data-el="ershoufang" data-sl=""><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170614145350" data-original="https://image1.ljcdn.com/350200-inspection/7dce6de3-fb6b-40fa-852e-b954cb758c2c.jpg.232x174.jpg" alt="联合博学院   楼中楼，赠送面积80平"></a><div class="info clear"><div class="title"><a class="" href="https://xm.lianjia.com/ershoufang/105100720165.html" target="_blank" data-log_index="13"   data-el="ershoufang"  data-sl="">联合博学院   楼中楼，赠送面积80平</a><span class="yezhushuo tagBlock">房主自荐</span></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span><a href="https://xm.lianjia.com/xiaoqu/3911057286948/" target="_blank" data-log_index="13" data-el="region">联合博学园 </a> | 7室2厅 | 122.26平米 | 南 | 其他 | 有电梯</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>低楼层(共25层)2015年建板楼  -  <a href="https://xm.lianjia.com/ershoufang/xindian/" target="_blank">新店</a></div></div><div class="followInfo"><span class="starIcon"></span>15人关注 / 共1次带看 / 2个月以前发布</div><div class="tag"></div><div class="priceInfo"><div class="totalPrice"><span>380</span>万</div><div class="unitPrice" data-hid="105100720165" data-rid="3911057286948" data-price="31082"><span>单价31082元/平米</span></div></div></div><div class="listButtonContainer"><div class="btn-follow followBtn" data-hid="105100720165"><span class="follow-text">关注</span></div><div class="compareBtn LOGCLICK" data-hid="105100720165" log-mod="105100720165" data-log_evtid="10230">加入对比</div></div></li><li class="clear"><a class="img " href="https://xm.lianjia.com/ershoufang/105100710518.html" target="_blank"data-log_index="14" data-el="ershoufang" data-sl=""><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170614145350" data-original="https://image1.ljcdn.com/350200-inspection/7fd83670-4405-4310-a294-80d6303086dd.jpg.232x174.jpg" alt="阳光城翡丽湾一期 2室1厅 280万"></a><div class="info clear"><div class="title"><a class="" href="https://xm.lianjia.com/ershoufang/105100710518.html" target="_blank" data-log_index="14"   data-el="ershoufang"  data-sl="">阳光城翡丽湾一期 2室1厅 280万</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span><a href="https://xm.lianjia.com/xiaoqu/3912941590278260/" target="_blank" data-log_index="14" data-el="region">阳光城翡丽湾一期 </a> | 2室1厅 | 73.27平米 | 东南 | 精装</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>高楼层(共33层)2014年建塔楼  -  <a href="https://xm.lianjia.com/ershoufang/xindian/" target="_blank">新店</a></div></div><div class="followInfo"><span class="starIcon"></span>6人关注 / 共0次带看 / 2个月以前发布</div><div class="tag"></div><div class="priceInfo"><div class="totalPrice"><span>280</span>万</div><div class="unitPrice" data-hid="105100710518" data-rid="3912941590278260" data-price="38215"><span>单价38215元/平米</span></div></div></div><div class="listButtonContainer"><div class="btn-follow followBtn" data-hid="105100710518"><span class="follow-text">关注</span></div><div class="compareBtn LOGCLICK" data-hid="105100710518" log-mod="105100710518" data-log_evtid="10230">加入对比</div></div></li><li class="clear"><a class="img " href="https://xm.lianjia.com/ershoufang/105100700995.html" target="_blank"data-log_index="15" data-el="ershoufang" data-sl=""><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170614145350" data-original="https://image1.ljcdn.com/350200-inspection/21f14a68-d3e1-47c7-ad77-ea86a25816ab.jpg.232x174.jpg" alt="汇景新城中心 3室2厅 365万"></a><div class="info clear"><div class="title"><a class="" href="https://xm.lianjia.com/ershoufang/105100700995.html" target="_blank" data-log_index="15"   data-el="ershoufang"  data-sl="">汇景新城中心 3室2厅 365万</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span><a href="https://xm.lianjia.com/xiaoqu/3911057286402/" target="_blank" data-log_index="15" data-el="region">汇景新城中心 </a> | 3室2厅 | 89平米 | 东 | 精装</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>中楼层(共16层)2011年建板楼  -  <a href="https://xm.lianjia.com/ershoufang/xindian/" target="_blank">新店</a></div></div><div class="followInfo"><span class="starIcon"></span>7人关注 / 共0次带看 / 2个月以前发布</div><div class="tag"><span class="taxfree">房本满五年</span></div><div class="priceInfo"><div class="totalPrice"><span>365</span>万</div><div class="unitPrice" data-hid="105100700995" data-rid="3911057286402" data-price="41012"><span>单价41012元/平米</span></div></div></div><div class="listButtonContainer"><div class="btn-follow followBtn" data-hid="105100700995"><span class="follow-text">关注</span></div><div class="compareBtn LOGCLICK" data-hid="105100700995" log-mod="105100700995" data-log_evtid="10230">加入对比</div></div></li><li class="clear"><a class="img " href="https://xm.lianjia.com/ershoufang/105100700585.html" target="_blank"data-log_index="16" data-el="ershoufang" data-sl=""><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170614145350" data-original="https://image1.ljcdn.com/350200-inspection/67c7b71f-1622-4269-91b6-36ba0bb366b8.jpg.232x174.jpg" alt="翔安首开领翔国际毛坯三房  看房方便预约"></a><div class="info clear"><div class="title"><a class="" href="https://xm.lianjia.com/ershoufang/105100700585.html" target="_blank" data-log_index="16"   data-el="ershoufang"  data-sl="">翔安首开领翔国际毛坯三房  看房方便预约</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span><a href="https://xm.lianjia.com/xiaoqu/3911057287787/" target="_blank" data-log_index="16" data-el="region">首开领翔国际 </a> | 3室2厅 | 143平米 | 南 北 | 毛坯</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>低楼层(共24层)2014年建板楼  -  <a href="https://xm.lianjia.com/ershoufang/xindian/" target="_blank">新店</a></div></div><div class="followInfo"><span class="starIcon"></span>2人关注 / 共0次带看 / 2个月以前发布</div><div class="tag"></div><div class="priceInfo"><div class="totalPrice"><span>430</span>万</div><div class="unitPrice" data-hid="105100700585" data-rid="3911057287787" data-price="30070"><span>单价30070元/平米</span></div></div></div><div class="listButtonContainer"><div class="btn-follow followBtn" data-hid="105100700585"><span class="follow-text">关注</span></div><div class="compareBtn LOGCLICK" data-hid="105100700585" log-mod="105100700585" data-log_evtid="10230">加入对比</div></div></li><li class="clear"><a class="img " href="https://xm.lianjia.com/ershoufang/105100689814.html" target="_blank"data-log_index="17" data-el="ershoufang" data-sl=""><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170614145350" data-original="" alt="首开领翔国际 3室2厅 410万"></a><div class="info clear"><div class="title"><a class="" href="https://xm.lianjia.com/ershoufang/105100689814.html" target="_blank" data-log_index="17"   data-el="ershoufang"  data-sl="">首开领翔国际 3室2厅 410万</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span><a href="https://xm.lianjia.com/xiaoqu/3911057287787/" target="_blank" data-log_index="17" data-el="region">首开领翔国际 </a> | 3室2厅 | 132平米 | 南 | 精装</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>高楼层(共26层)2014年建板楼  -  <a href="https://xm.lianjia.com/ershoufang/xindian/" target="_blank">新店</a></div></div><div class="followInfo"><span class="starIcon"></span>1人关注 / 共1次带看 / 2个月以前发布</div><div class="tag"></div><div class="priceInfo"><div class="totalPrice"><span>410</span>万</div><div class="unitPrice" data-hid="105100689814" data-rid="3911057287787" data-price="31061"><span>单价31061元/平米</span></div></div></div><div class="listButtonContainer"><div class="btn-follow followBtn" data-hid="105100689814"><span class="follow-text">关注</span></div><div class="compareBtn LOGCLICK" data-hid="105100689814" log-mod="105100689814" data-log_evtid="10230">加入对比</div></div></li><li class="clear"><a class="img " href="https://xm.lianjia.com/ershoufang/105100683859.html" target="_blank"data-log_index="18" data-el="ershoufang" data-sl=""><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170614145350" data-original="https://image1.ljcdn.com/350200-inspection/14fa09dd-4f91-47da-8371-20501ab4df2f.jpg.232x174.jpg" alt="翔安楼梯房高楼层楼中楼，拎包即住"></a><div class="info clear"><div class="title"><a class="" href="https://xm.lianjia.com/ershoufang/105100683859.html" target="_blank" data-log_index="18"   data-el="ershoufang"  data-sl="">翔安楼梯房高楼层楼中楼，拎包即住</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span><a href="https://xm.lianjia.com/xiaoqu/3911057272924/" target="_blank" data-log_index="18" data-el="region">东方新城二区 </a> | 3室2厅 | 65.3平米 | 南 北 | 其他</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>高楼层(共6层)2006年建板楼  -  <a href="https://xm.lianjia.com/ershoufang/xindian/" target="_blank">新店</a></div></div><div class="followInfo"><span class="starIcon"></span>13人关注 / 共3次带看 / 3个月以前发布</div><div class="tag"></div><div class="priceInfo"><div class="totalPrice"><span>245</span>万</div><div class="unitPrice" data-hid="105100683859" data-rid="3911057272924" data-price="37520"><span>单价37520元/平米</span></div></div></div><div class="listButtonContainer"><div class="btn-follow followBtn" data-hid="105100683859"><span class="follow-text">关注</span></div><div class="compareBtn LOGCLICK" data-hid="105100683859" log-mod="105100683859" data-log_evtid="10230">加入对比</div></div></li><li class="clear"><a class="img " href="https://xm.lianjia.com/ershoufang/105100683182.html" target="_blank"data-log_index="19" data-el="ershoufang" data-sl=""><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170614145350" data-original="https://image1.ljcdn.com/350200-inspection/531b10e4-bb7f-46be-84e2-a68354d7e218.jpg.232x174.jpg" alt="翔安新店  大四房 大阳台 拎包即住"></a><div class="info clear"><div class="title"><a class="" href="https://xm.lianjia.com/ershoufang/105100683182.html" target="_blank" data-log_index="19"   data-el="ershoufang"  data-sl="">翔安新店  大四房 大阳台 拎包即住</a><span class="yezhushuo tagBlock">房主自荐</span></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span><a href="https://xm.lianjia.com/xiaoqu/3911057286402/" target="_blank" data-log_index="19" data-el="region">汇景新城中心 </a> | 4室2厅 | 121.42平米 | 南 北 | 其他</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>低楼层(共16层)2011年建板楼  -  <a href="https://xm.lianjia.com/ershoufang/xindian/" target="_blank">新店</a></div></div><div class="followInfo"><span class="starIcon"></span>4人关注 / 共0次带看 / 3个月以前发布</div><div class="tag"><span class="taxfree">房本满五年</span></div><div class="priceInfo"><div class="totalPrice"><span>470</span>万</div><div class="unitPrice" data-hid="105100683182" data-rid="3911057286402" data-price="38709"><span>单价38709元/平米</span></div></div></div><div class="listButtonContainer"><div class="btn-follow followBtn" data-hid="105100683182"><span class="follow-text">关注</span></div><div class="compareBtn LOGCLICK" data-hid="105100683182" log-mod="105100683182" data-log_evtid="10230">加入对比</div></div></li><li class="clear"><a class="img " href="https://xm.lianjia.com/ershoufang/105100677223.html" target="_blank"data-log_index="20" data-el="ershoufang" data-sl=""><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170614145350" data-original="https://image1.ljcdn.com/350200-inspection/a9b93b2f-e4a2-4766-93a7-6a33461d9e43.jpg.232x174.jpg" alt="翔安  拎包即住三房两厅  全明户型"></a><div class="info clear"><div class="title"><a class="" href="https://xm.lianjia.com/ershoufang/105100677223.html" target="_blank" data-log_index="20"   data-el="ershoufang"  data-sl="">翔安  拎包即住三房两厅  全明户型</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span><a href="https://xm.lianjia.com/xiaoqu/3911057442606/" target="_blank" data-log_index="20" data-el="region">明发半岛祥湾A区 </a> | 3室2厅 | 124.5平米 | 南 北 | 精装 | 有电梯</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>中楼层(共30层)2013年建板楼  -  <a href="https://xm.lianjia.com/ershoufang/xindian/" target="_blank">新店</a></div></div><div class="followInfo"><span class="starIcon"></span>11人关注 / 共1次带看 / 3个月以前发布</div><div class="tag"></div><div class="priceInfo"><div class="totalPrice"><span>410</span>万</div><div class="unitPrice" data-hid="105100677223" data-rid="3911057442606" data-price="32932"><span>单价32932元/平米</span></div></div></div><div class="listButtonContainer"><div class="btn-follow followBtn" data-hid="105100677223"><span class="follow-text">关注</span></div><div class="compareBtn LOGCLICK" data-hid="105100677223" log-mod="105100677223" data-log_evtid="10230">加入对比</div></div></li><li class="clear"><a class="img " href="https://xm.lianjia.com/ershoufang/105100629824.html" target="_blank"data-log_index="21" data-el="ershoufang" data-sl=""><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170614145350" data-original="https://image1.ljcdn.com/350200-inspection/530b5c95-fcaa-481f-95d6-f35b4b317907.jpg.232x174.jpg" alt="阳光城翡丽湾，三房两厅两阳台，毛坯，高楼层"></a><div class="info clear"><div class="title"><a class="" href="https://xm.lianjia.com/ershoufang/105100629824.html" target="_blank" data-log_index="21"   data-el="ershoufang"  data-sl="">阳光城翡丽湾，三房两厅两阳台，毛坯，高楼层</a><span class="yezhushuo tagBlock">房主自荐</span></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span><a href="https://xm.lianjia.com/xiaoqu/3911100636637/" target="_blank" data-log_index="21" data-el="region">阳光城翡丽湾 </a> | 3室2厅 | 127.05平米 | 南 北 | 毛坯</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>高楼层(共31层)  -  <a href="https://xm.lianjia.com/ershoufang/xindian/" target="_blank">新店</a></div></div><div class="followInfo"><span class="starIcon"></span>9人关注 / 共5次带看 / 3个月以前发布</div><div class="tag"></div><div class="priceInfo"><div class="totalPrice"><span>398</span>万</div><div class="unitPrice" data-hid="105100629824" data-rid="3911100636637" data-price="31327"><span>单价31327元/平米</span></div></div></div><div class="listButtonContainer"><div class="btn-follow followBtn" data-hid="105100629824"><span class="follow-text">关注</span></div><div class="compareBtn LOGCLICK" data-hid="105100629824" log-mod="105100629824" data-log_evtid="10230">加入对比</div></div></li><li class="clear"><a class="img " href="https://xm.lianjia.com/ershoufang/105100587050.html" target="_blank"data-log_index="22" data-el="ershoufang" data-sl=""><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170614145350" data-original="" alt="翔安联合博学园 三房毛坯可塑性大 看房方便"></a><div class="info clear"><div class="title"><a class="" href="https://xm.lianjia.com/ershoufang/105100587050.html" target="_blank" data-log_index="22"   data-el="ershoufang"  data-sl="">翔安联合博学园 三房毛坯可塑性大 看房方便</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span><a href="https://xm.lianjia.com/xiaoqu/3911057286948/" target="_blank" data-log_index="22" data-el="region">联合博学园 </a> | 3室1厅 | 90.33平米 | 南 | 毛坯</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>低楼层(共18层)2015年建板楼  -  <a href="https://xm.lianjia.com/ershoufang/xindian/" target="_blank">新店</a></div></div><div class="followInfo"><span class="starIcon"></span>5人关注 / 共0次带看 / 5个月以前发布</div><div class="tag"></div><div class="priceInfo"><div class="totalPrice"><span>300</span>万</div><div class="unitPrice" data-hid="105100587050" data-rid="3911057286948" data-price="33212"><span>单价33212元/平米</span></div></div></div><div class="listButtonContainer"><div class="btn-follow followBtn" data-hid="105100587050"><span class="follow-text">关注</span></div><div class="compareBtn LOGCLICK" data-hid="105100587050" log-mod="105100587050" data-log_evtid="10230">加入对比</div></div></li><li class="clear"><a class="img " href="https://xm.lianjia.com/ershoufang/105092824422.html" target="_blank"data-log_index="23" data-el="ershoufang" data-sl=""><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170614145350" data-original="https://image1.ljcdn.com/350200-inspection/a9702e3f-cd07-4ca0-b478-8936ccc3b7f7.jpg.232x174.jpg" alt="翔安三房，自住精装，拎包即住。"></a><div class="info clear"><div class="title"><a class="" href="https://xm.lianjia.com/ershoufang/105092824422.html" target="_blank" data-log_index="23"   data-el="ershoufang"  data-sl="">翔安三房，自住精装，拎包即住。</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span><a href="https://xm.lianjia.com/xiaoqu/3911057434008/" target="_blank" data-log_index="23" data-el="region">锦绣祥安 </a> | 3室2厅 | 110平米 | 南 北 | 精装 | 有电梯</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>低楼层(共18层)2014年建塔楼  -  <a href="https://xm.lianjia.com/ershoufang/maxiang/" target="_blank">马巷</a></div></div><div class="followInfo"><span class="starIcon"></span>33人关注 / 共1次带看 / 7个月以前发布</div><div class="tag"></div><div class="priceInfo"><div class="totalPrice"><span>260</span>万</div><div class="unitPrice" data-hid="105092824422" data-rid="3911057434008" data-price="23637"><span>单价23637元/平米</span></div></div></div><div class="listButtonContainer"><div class="btn-follow followBtn" data-hid="105092824422"><span class="follow-text">关注</span></div><div class="compareBtn LOGCLICK" data-hid="105092824422" log-mod="105092824422" data-log_evtid="10230">加入对比</div></div></li></ul>
<div class="bigImgList" style="display: none;" log-mod="list"><div class="item" data-houseid="105100758226"><a class="img" href="https://xm.lianjia.com/ershoufang/105100758226.html" target="_blank" data-bl="list" data-log_index="1" data-el="ershoufang"><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170614145350" data-original="https://image1.ljcdn.com/350200-inspection/684b53e2-35f8-4323-8b2d-45e154c52440.jpg.437x300.jpg"><div class="btn-follow follow" data-hid="105100758226"><span class="star"></span><span class="follow-text">关注</span></div><div class="leftArrow"><span></span></div><div class="rightArrow"><span></span></div><div class="price"><span>385</span>万</div></a><a class="title" href="https://xm.lianjia.com/ershoufang/105100758226.html" target="_blank" data-bl="list" data-log_index="1" data-el="ershoufang">满两年 送家具家电 看海看中庭 居家装修 南北通透</a><div class="info">新店<span>/</span>3室2厅<span>/</span>124.5平米<span>/</span>南 北<span>/</span>精装</div><div class="tag"><span class="five">房本满两年</span></div></div><div class="item" data-houseid="105100752858"><a class="img" href="https://xm.lianjia.com/ershoufang/105100752858.html" target="_blank" data-bl="list" data-log_index="2" data-el="ershoufang"><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170614145350" data-original=""><div class="btn-follow follow" data-hid="105100752858"><span class="star"></span><span class="follow-text">关注</span></div><div class="leftArrow"><span></span></div><div class="rightArrow"><span></span></div><div class="price"><span>410</span>万</div></a><a class="title" href="https://xm.lianjia.com/ershoufang/105100752858.html" target="_blank" data-bl="list" data-log_index="2" data-el="ershoufang">首开领翔国际 4室2厅 410万</a><div class="info">新店<span>/</span>4室2厅<span>/</span>131.19平米<span>/</span>东南<span>/</span>简装</div><div class="tag"></div></div><div class="item" data-houseid="105100748092"><a class="img" href="https://xm.lianjia.com/ershoufang/105100748092.html" target="_blank" data-bl="list" data-log_index="3" data-el="ershoufang"><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170614145350" data-original="https://image1.ljcdn.com/350200-inspection/81b4d51b-b41a-4931-bd98-b6e7f9760354.jpg.437x300.jpg"><div class="btn-follow follow" data-hid="105100748092"><span class="star"></span><span class="follow-text">关注</span></div><div class="leftArrow"><span></span></div><div class="rightArrow"><span></span></div><div class="price"><span>220</span>万</div></a><a class="title" href="https://xm.lianjia.com/ershoufang/105100748092.html" target="_blank" data-bl="list" data-log_index="3" data-el="ershoufang">万科金色悦城 2室2厅 220万</a><div class="info">马巷<span>/</span>2室2厅<span>/</span>74平米<span>/</span>南 北<span>/</span>其他</div><div class="tag"><span class="taxfree">房本满五年</span></div></div><div class="item" data-houseid="105100746545"><a class="img" href="https://xm.lianjia.com/ershoufang/105100746545.html" target="_blank" data-bl="list" data-log_index="4" data-el="ershoufang"><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170614145350" data-original="https://image1.ljcdn.com/350200-inspection/4e0854f5-d561-4f33-93e9-24e17cc7108f.jpg.437x300.jpg"><div class="btn-follow follow" data-hid="105100746545"><span class="star"></span><span class="follow-text">关注</span></div><div class="leftArrow"><span></span></div><div class="rightArrow"><span></span></div><div class="price"><span>350</span>万</div></a><a class="title" href="https://xm.lianjia.com/ershoufang/105100746545.html" target="_blank" data-bl="list" data-log_index="4" data-el="ershoufang">首开领翔国际 2室2厅 350万</a><div class="info">新店<span>/</span>2室2厅<span>/</span>121.33平米<span>/</span>南 北<span>/</span>毛坯</div><div class="tag"></div></div><div class="item" data-houseid="105100743725"><a class="img" href="https://xm.lianjia.com/ershoufang/105100743725.html" target="_blank" data-bl="list" data-log_index="5" data-el="ershoufang"><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170614145350" data-original="https://image1.ljcdn.com/350200-inspection/f0317190-6cb4-4556-bbcc-b8350d9c328d.jpg.437x300.jpg"><div class="btn-follow follow" data-hid="105100743725"><span class="star"></span><span class="follow-text">关注</span></div><div class="leftArrow"><span></span></div><div class="rightArrow"><span></span></div><div class="price"><span>240</span>万</div></a><a class="title" href="https://xm.lianjia.com/ershoufang/105100743725.html" target="_blank" data-bl="list" data-log_index="5" data-el="ershoufang">明发半岛祥湾B区 2室1厅 240万</a><div class="info">新店<span>/</span>2室1厅<span>/</span>76平米<span>/</span>南<span>/</span>毛坯</div><div class="tag"><span class="five">房本满两年</span></div></div><div class="item" data-houseid="105100743083"><a class="img" href="https://xm.lianjia.com/ershoufang/105100743083.html" target="_blank" data-bl="list" data-log_index="6" data-el="ershoufang"><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170614145350" data-original=""><div class="btn-follow follow" data-hid="105100743083"><span class="star"></span><span class="follow-text">关注</span></div><div class="leftArrow"><span></span></div><div class="rightArrow"><span></span></div><div class="price"><span>230</span>万</div></a><a class="title" href="https://xm.lianjia.com/ershoufang/105100743083.html" target="_blank" data-bl="list" data-log_index="6" data-el="ershoufang">东方新城一区 2室2厅 230万</a><div class="info">新店<span>/</span>2室2厅<span>/</span>85.79平米<span>/</span>南 北<span>/</span>其他</div><div class="tag"></div></div><div class="item" data-houseid="105100742681"><a class="img" href="https://xm.lianjia.com/ershoufang/105100742681.html" target="_blank" data-bl="list" data-log_index="7" data-el="ershoufang"><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170614145350" data-original="https://image1.ljcdn.com/350200-inspection/7a8c2d69-b06b-46e2-8ac2-f8782afde2e1.jpg.437x300.jpg"><div class="btn-follow follow" data-hid="105100742681"><span class="star"></span><span class="follow-text">关注</span></div><div class="leftArrow"><span></span></div><div class="rightArrow"><span></span></div><div class="price"><span>183</span>万</div></a><a class="title" href="https://xm.lianjia.com/ershoufang/105100742681.html" target="_blank" data-bl="list" data-log_index="7" data-el="ershoufang">翔安 马巷  正规一房一厅 毛坯</a><div class="info">马巷<span>/</span>1室1厅<span>/</span>73.22平米<span>/</span>南<span>/</span>其他<span>/</span>有电梯</div><div class="tag"></div></div><div class="item" data-houseid="105100740811"><a class="img" href="https://xm.lianjia.com/ershoufang/105100740811.html" target="_blank" data-bl="list" data-log_index="8" data-el="ershoufang"><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170614145350" data-original="https://image1.ljcdn.com/350200-inspection/89af0861-0ef8-46d5-b3e2-9508313c2c9c.jpg.437x300.jpg"><div class="btn-follow follow" data-hid="105100740811"><span class="star"></span><span class="follow-text">关注</span></div><div class="leftArrow"><span></span></div><div class="rightArrow"><span></span></div><div class="price"><span>363</span>万</div></a><a class="title" href="https://xm.lianjia.com/ershoufang/105100740811.html" target="_blank" data-bl="list" data-log_index="8" data-el="ershoufang">满两年 高楼层  入户阳台 南北朝向 毛坯</a><div class="info">新店<span>/</span>3室2厅<span>/</span>113.73平米<span>/</span>南 北<span>/</span>毛坯<span>/</span>有电梯</div><div class="tag"><span class="five">房本满两年</span></div></div><div class="item" data-houseid="105100737933"><a class="img" href="https://xm.lianjia.com/ershoufang/105100737933.html" target="_blank" data-bl="list" data-log_index="9" data-el="ershoufang"><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170614145350" data-original="https://image1.ljcdn.com/350200-inspection/9686f49e-6c08-4f28-aacd-ff31d66e8cfb.jpg.437x300.jpg"><div class="btn-follow follow" data-hid="105100737933"><span class="star"></span><span class="follow-text">关注</span></div><div class="leftArrow"><span></span></div><div class="rightArrow"><span></span></div><div class="price"><span>243</span>万</div></a><a class="title" href="https://xm.lianjia.com/ershoufang/105100737933.html" target="_blank" data-bl="list" data-log_index="9" data-el="ershoufang">阳光城翡丽湾全明格局小两房，低总价</a><div class="info">新店<span>/</span>2室1厅<span>/</span>74.5平米<span>/</span>西北<span>/</span>其他</div><div class="tag"></div></div><div class="item" data-houseid="105100736353"><a class="img" href="https://xm.lianjia.com/ershoufang/105100736353.html" target="_blank" data-bl="list" data-log_index="10" data-el="ershoufang"><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170614145350" data-original=""><div class="btn-follow follow" data-hid="105100736353"><span class="star"></span><span class="follow-text">关注</span></div><div class="leftArrow"><span></span></div><div class="rightArrow"><span></span></div><div class="price"><span>275</span>万</div></a><a class="title" href="https://xm.lianjia.com/ershoufang/105100736353.html" target="_blank" data-bl="list" data-log_index="10" data-el="ershoufang">翔安汇景新城5.8米挑高楼中楼精装修</a><div class="info">新店<span>/</span>2室2厅<span>/</span>68平米<span>/</span>南 北<span>/</span>精装</div><div class="tag"></div></div><div class="item" data-houseid="105100725932"><a class="img" href="https://xm.lianjia.com/ershoufang/105100725932.html" target="_blank" data-bl="list" data-log_index="11" data-el="ershoufang"><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170614145350" data-original="https://image1.ljcdn.com/350200-inspection/06d41c56-1279-494c-a3b5-de4732570413.jpg.437x300.jpg"><div class="btn-follow follow" data-hid="105100725932"><span class="star"></span><span class="follow-text">关注</span></div><div class="leftArrow"><span></span></div><div class="rightArrow"><span></span></div><div class="price"><span>430</span>万</div></a><a class="title" href="https://xm.lianjia.com/ershoufang/105100725932.html" target="_blank" data-bl="list" data-log_index="11" data-el="ershoufang">翔安隧道口，欧式装修，高层朝南三房</a><div class="info">新店<span>/</span>3室2厅<span>/</span>126.86平米<span>/</span>南<span>/</span>精装</div><div class="tag"><span class="five">房本满两年</span></div></div><div class="item" data-houseid="105100723941"><a class="img" href="https://xm.lianjia.com/ershoufang/105100723941.html" target="_blank" data-bl="list" data-log_index="12" data-el="ershoufang"><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170614145350" data-original="https://image1.ljcdn.com/350200-inspection/0bad0ed7-2890-4538-99e6-d344c36c3bd2.jpg.437x300.jpg"><div class="btn-follow follow" data-hid="105100723941"><span class="star"></span><span class="follow-text">关注</span></div><div class="leftArrow"><span></span></div><div class="rightArrow"><span></span></div><div class="price"><span>300</span>万</div></a><a class="title" href="https://xm.lianjia.com/ershoufang/105100723941.html" target="_blank" data-bl="list" data-log_index="12" data-el="ershoufang">宝嘉誉园高层精装小两房 配套成熟 2014年建成</a><div class="info">新店<span>/</span>2室2厅<span>/</span>81.21平米<span>/</span>东 南<span>/</span>其他</div><div class="tag"></div></div><div class="item" data-houseid="105100720165"><a class="img" href="https://xm.lianjia.com/ershoufang/105100720165.html" target="_blank" data-bl="list" data-log_index="13" data-el="ershoufang"><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170614145350" data-original="https://image1.ljcdn.com/350200-inspection/7dce6de3-fb6b-40fa-852e-b954cb758c2c.jpg.437x300.jpg"><div class="btn-follow follow" data-hid="105100720165"><span class="star"></span><span class="follow-text">关注</span></div><div class="leftArrow"><span></span></div><div class="rightArrow"><span></span></div><div class="price"><span>380</span>万</div></a><a class="title" href="https://xm.lianjia.com/ershoufang/105100720165.html" target="_blank" data-bl="list" data-log_index="13" data-el="ershoufang">联合博学院   楼中楼，赠送面积80平</a><div class="info">新店<span>/</span>7室2厅<span>/</span>122.26平米<span>/</span>南<span>/</span>其他<span>/</span>有电梯</div><div class="tag"></div></div><div class="item" data-houseid="105100710518"><a class="img" href="https://xm.lianjia.com/ershoufang/105100710518.html" target="_blank" data-bl="list" data-log_index="14" data-el="ershoufang"><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170614145350" data-original="https://image1.ljcdn.com/350200-inspection/7fd83670-4405-4310-a294-80d6303086dd.jpg.437x300.jpg"><div class="btn-follow follow" data-hid="105100710518"><span class="star"></span><span class="follow-text">关注</span></div><div class="leftArrow"><span></span></div><div class="rightArrow"><span></span></div><div class="price"><span>280</span>万</div></a><a class="title" href="https://xm.lianjia.com/ershoufang/105100710518.html" target="_blank" data-bl="list" data-log_index="14" data-el="ershoufang">阳光城翡丽湾一期 2室1厅 280万</a><div class="info">新店<span>/</span>2室1厅<span>/</span>73.27平米<span>/</span>东南<span>/</span>精装</div><div class="tag"></div></div><div class="item" data-houseid="105100700995"><a class="img" href="https://xm.lianjia.com/ershoufang/105100700995.html" target="_blank" data-bl="list" data-log_index="15" data-el="ershoufang"><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170614145350" data-original="https://image1.ljcdn.com/350200-inspection/21f14a68-d3e1-47c7-ad77-ea86a25816ab.jpg.437x300.jpg"><div class="btn-follow follow" data-hid="105100700995"><span class="star"></span><span class="follow-text">关注</span></div><div class="leftArrow"><span></span></div><div class="rightArrow"><span></span></div><div class="price"><span>365</span>万</div></a><a class="title" href="https://xm.lianjia.com/ershoufang/105100700995.html" target="_blank" data-bl="list" data-log_index="15" data-el="ershoufang">汇景新城中心 3室2厅 365万</a><div class="info">新店<span>/</span>3室2厅<span>/</span>89平米<span>/</span>东<span>/</span>精装</div><div class="tag"><span class="taxfree">房本满五年</span></div></div><div class="item" data-houseid="105100700585"><a class="img" href="https://xm.lianjia.com/ershoufang/105100700585.html" target="_blank" data-bl="list" data-log_index="16" data-el="ershoufang"><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170614145350" data-original="https://image1.ljcdn.com/350200-inspection/67c7b71f-1622-4269-91b6-36ba0bb366b8.jpg.437x300.jpg"><div class="btn-follow follow" data-hid="105100700585"><span class="star"></span><span class="follow-text">关注</span></div><div class="leftArrow"><span></span></div><div class="rightArrow"><span></span></div><div class="price"><span>430</span>万</div></a><a class="title" href="https://xm.lianjia.com/ershoufang/105100700585.html" target="_blank" data-bl="list" data-log_index="16" data-el="ershoufang">翔安首开领翔国际毛坯三房  看房方便预约</a><div class="info">新店<span>/</span>3室2厅<span>/</span>143平米<span>/</span>南 北<span>/</span>毛坯</div><div class="tag"></div></div><div class="item" data-houseid="105100689814"><a class="img" href="https://xm.lianjia.com/ershoufang/105100689814.html" target="_blank" data-bl="list" data-log_index="17" data-el="ershoufang"><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170614145350" data-original=""><div class="btn-follow follow" data-hid="105100689814"><span class="star"></span><span class="follow-text">关注</span></div><div class="leftArrow"><span></span></div><div class="rightArrow"><span></span></div><div class="price"><span>410</span>万</div></a><a class="title" href="https://xm.lianjia.com/ershoufang/105100689814.html" target="_blank" data-bl="list" data-log_index="17" data-el="ershoufang">首开领翔国际 3室2厅 410万</a><div class="info">新店<span>/</span>3室2厅<span>/</span>132平米<span>/</span>南<span>/</span>精装</div><div class="tag"></div></div><div class="item" data-houseid="105100683859"><a class="img" href="https://xm.lianjia.com/ershoufang/105100683859.html" target="_blank" data-bl="list" data-log_index="18" data-el="ershoufang"><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170614145350" data-original="https://image1.ljcdn.com/350200-inspection/14fa09dd-4f91-47da-8371-20501ab4df2f.jpg.437x300.jpg"><div class="btn-follow follow" data-hid="105100683859"><span class="star"></span><span class="follow-text">关注</span></div><div class="leftArrow"><span></span></div><div class="rightArrow"><span></span></div><div class="price"><span>245</span>万</div></a><a class="title" href="https://xm.lianjia.com/ershoufang/105100683859.html" target="_blank" data-bl="list" data-log_index="18" data-el="ershoufang">翔安楼梯房高楼层楼中楼，拎包即住</a><div class="info">新店<span>/</span>3室2厅<span>/</span>65.3平米<span>/</span>南 北<span>/</span>其他</div><div class="tag"></div></div><div class="item" data-houseid="105100683182"><a class="img" href="https://xm.lianjia.com/ershoufang/105100683182.html" target="_blank" data-bl="list" data-log_index="19" data-el="ershoufang"><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170614145350" data-original="https://image1.ljcdn.com/350200-inspection/531b10e4-bb7f-46be-84e2-a68354d7e218.jpg.437x300.jpg"><div class="btn-follow follow" data-hid="105100683182"><span class="star"></span><span class="follow-text">关注</span></div><div class="leftArrow"><span></span></div><div class="rightArrow"><span></span></div><div class="price"><span>470</span>万</div></a><a class="title" href="https://xm.lianjia.com/ershoufang/105100683182.html" target="_blank" data-bl="list" data-log_index="19" data-el="ershoufang">翔安新店  大四房 大阳台 拎包即住</a><div class="info">新店<span>/</span>4室2厅<span>/</span>121.42平米<span>/</span>南 北<span>/</span>其他</div><div class="tag"><span class="taxfree">房本满五年</span></div></div><div class="item" data-houseid="105100677223"><a class="img" href="https://xm.lianjia.com/ershoufang/105100677223.html" target="_blank" data-bl="list" data-log_index="20" data-el="ershoufang"><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170614145350" data-original="https://image1.ljcdn.com/350200-inspection/a9b93b2f-e4a2-4766-93a7-6a33461d9e43.jpg.437x300.jpg"><div class="btn-follow follow" data-hid="105100677223"><span class="star"></span><span class="follow-text">关注</span></div><div class="leftArrow"><span></span></div><div class="rightArrow"><span></span></div><div class="price"><span>410</span>万</div></a><a class="title" href="https://xm.lianjia.com/ershoufang/105100677223.html" target="_blank" data-bl="list" data-log_index="20" data-el="ershoufang">翔安  拎包即住三房两厅  全明户型</a><div class="info">新店<span>/</span>3室2厅<span>/</span>124.5平米<span>/</span>南 北<span>/</span>精装<span>/</span>有电梯</div><div class="tag"></div></div><div class="item" data-houseid="105100629824"><a class="img" href="https://xm.lianjia.com/ershoufang/105100629824.html" target="_blank" data-bl="list" data-log_index="21" data-el="ershoufang"><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170614145350" data-original="https://image1.ljcdn.com/350200-inspection/530b5c95-fcaa-481f-95d6-f35b4b317907.jpg.437x300.jpg"><div class="btn-follow follow" data-hid="105100629824"><span class="star"></span><span class="follow-text">关注</span></div><div class="leftArrow"><span></span></div><div class="rightArrow"><span></span></div><div class="price"><span>398</span>万</div></a><a class="title" href="https://xm.lianjia.com/ershoufang/105100629824.html" target="_blank" data-bl="list" data-log_index="21" data-el="ershoufang">阳光城翡丽湾，三房两厅两阳台，毛坯，高楼层</a><div class="info">新店<span>/</span>3室2厅<span>/</span>127.05平米<span>/</span>南 北<span>/</span>毛坯</div><div class="tag"></div></div><div class="item" data-houseid="105100587050"><a class="img" href="https://xm.lianjia.com/ershoufang/105100587050.html" target="_blank" data-bl="list" data-log_index="22" data-el="ershoufang"><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170614145350" data-original=""><div class="btn-follow follow" data-hid="105100587050"><span class="star"></span><span class="follow-text">关注</span></div><div class="leftArrow"><span></span></div><div class="rightArrow"><span></span></div><div class="price"><span>300</span>万</div></a><a class="title" href="https://xm.lianjia.com/ershoufang/105100587050.html" target="_blank" data-bl="list" data-log_index="22" data-el="ershoufang">翔安联合博学园 三房毛坯可塑性大 看房方便</a><div class="info">新店<span>/</span>3室1厅<span>/</span>90.33平米<span>/</span>南<span>/</span>毛坯</div><div class="tag"></div></div><div class="item" data-houseid="105092824422"><a class="img" href="https://xm.lianjia.com/ershoufang/105092824422.html" target="_blank" data-bl="list" data-log_index="23" data-el="ershoufang"><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170614145350" data-original="https://image1.ljcdn.com/350200-inspection/a9702e3f-cd07-4ca0-b478-8936ccc3b7f7.jpg.437x300.jpg"><div class="btn-follow follow" data-hid="105092824422"><span class="star"></span><span class="follow-text">关注</span></div><div class="leftArrow"><span></span></div><div class="rightArrow"><span></span></div><div class="price"><span>260</span>万</div></a><a class="title" href="https://xm.lianjia.com/ershoufang/105092824422.html" target="_blank" data-bl="list" data-log_index="23" data-el="ershoufang">翔安三房，自住精装，拎包即住。</a><div class="info">马巷<span>/</span>3室2厅<span>/</span>110平米<span>/</span>南 北<span>/</span>精装<span>/</span>有电梯</div><div class="tag"></div></div></div><!-- 无搜索结果 --><div id="noResultPush"></div><div class="contentBottom clear" ><div class="crumbs fl"><a href="/">链家网厦门站</a><span >&nbsp;&gt;&nbsp;</span><a href="/ershoufang/">厦门二手房</a><span >&nbsp;&gt;&nbsp;</span><h1><a href="/ershoufang/xiangan/">翔安二手房</a></h1></div><div class="page-box fr"><div class="page-box house-lst-page-box" comp-module='page' page-url="/ershoufang/xiangan/pg{page}co32ng1nb1/"page-data='{"totalPage":2,"curPage":2}'></div>


</div></div><div style="display:none;"><p>厦门二手房信息</p><p>链家网厦门站翔安二手房频道提供真实、时时的翔安二手房房源信息，翔安二手房房源目前为53套，全>部由线下经纪人确认核实上传，信息可靠，翔安二手房用户可以在链家网翔安二手房频道和翔安二手房频道移动端最快速、最及时的找到自己想要的真>实、放心房源。链家网翔安二手房平台，真房源，如你所见！</p><p>一元花园二期 电梯小两房 朝西南 核心卖点:此房满五年，税费较少。电梯小两房，刚需户型，业主稳定出售。 户型介绍:房子楼龄较新，东北西南朝向，主卧室带阳台朝西南，次卧室也挺大，厨房做了隔离油烟的门。相比一元花园二期的其他户型而言，本房户型较为方正。 交通出行:小区楼下就是中孚花园站，有多路公交车经过，临金尚路，出行很方便。 适宜人群:居家装修，适合小家庭。小区人车分流，离交通主干道有一定距离，相对安静。 税费解析:房屋产权为：商品房。
税费方面：满两年，不需要增值税。满五年且唯一，省去个人所得税。仅需契税2.6万元。</p></div></div><!-- 右侧sidebar --><div class="rightLayout"><div class="rightContent"><div class="map"><div class="pic"></div><button id="btn-map">试试地图找房</button></div><div class="price" id='priceSideBarContainer' log-mod="recommand_price"></div><div class="suggestAgent" id='suggestAgentContainer' log-mod="ershoufang_list_recommend-agent"></div><div class="suggestHouse" id="suggestHouseContainer" log-mod="recommand_house"></div><div class="suggestCommunity" id="suggestCommunityContainer" log-mod="ershoufang_list_recommend-community"></div><div class="wenda zixun" id="pushZixunContainer" log-mod="recommand_zixun"></div><div class="wenda SCROLLVIEWLOG" id="pushWendaContainer" log-mod="recommand_wenda"></div><div class="download"><div class="title">下载链家APP</div><div class="qr-code"><img width="94" height="94" src="//ajax.api.lianjia.com/qr/getDownloadQr?location=right&ljweb_channel_key=ershoufang_search" alt="下载链家app"><div class="text"><p>扫描上方二维码</p><p>随时查看新房源</p><p class="get-more"><a href="//www.lianjia.com/client">了解更多<img width="9" height="9" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGFBMVEUAAACcn6Gfn5+an5+bnqCbnqGfn5+cn6EV6DbuAAAAB3RSTlMA0BAw8LAgvf5k9AAAAEdJREFUKM9jIBOkBqMJhBcqoAmUC6EKmJSjKWEWR1eiiK6ECZsSA3QlzuhKSihRghDA0EJ/BWIoCgzh4YMIZALRYBrMQAkAAF5bGMBkrwzqAAAAAElFTkSuQmCC"></a></p></div></div></div></div></div></div><div id="pushCommunity" class="pushCommunity" log-mod="ershoufang_list_recommend-community"></div><div id="newHousePush" class="newHousePush"></div><div class="saveMegmask"></div><div class="saveok"><div class="fl"></div><div class="fr"><span>已成功保存搜索条件！</span><p>您可在搜索框右侧下拉列表中快速使用该条件。该条件有新房源出现时，我们将会用站内提醒的方式来通知您</p><label class="close">确定</label></div></div><div class="saveerror"><div class="fl"></div><div class="fr"><span>你的搜索条件已达到上限！</span><p>您可在搜索框右侧下拉列表中快速使用该条件。该条件有新房源出现时，我们将会用站内提醒的方式来通知您。</p><a href="//user.lianjia.com/site/searchlist/" rel="nofollow">个人中心</a><label  class="close">取消</label></div></div><div class="footer"><div class="wrapper"><div class="f-title"><div class="fl"><ul><li><a href="https://www.lianjia.com/zhuanti/home/" rel="nofollow" target="_blank">了解链家网</a></li><li><a href="https://xm.lianjia.com/about/aboutlianjia/" rel="nofollow" target="_blank">关于链家</a></li><li><a href="https://xm.lianjia.com/about/contactus/" rel="nofollow" target="_blank">联系我们</a></li><li><a href="https://join.lianjia.com/" rel="nofollow" target="_blank">加入我们</a></li><li><a href="https://www.lianjia.com/privacy/" rel="nofollow" target="_blank">隐私声明</a></li><li><a href="https://xm.lianjia.com/sitemap/" target="_blank">网站地图</a></li><li><a href="https://www.lianjia.com/notice/7.html" rel="nofollow" target="_blank">友情链接</a></li><li><a href="https://agent.lianjia.com/" rel="nofollow" target="_blank">经纪人登录</a></li></ul></div><div class="fr">官方客服 1010 9666</div></div><div class="lianjia-link-box"><div class="fl"><div class="tab"><span  class="hover">厦门小区二手房</span><span >热门城市二手房</span><span >热门城市租房网</span><span >热门城市楼盘</span><span >热门百科</span></div><div class="link-list"><div><dd><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3911100142405/">新景缘二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3911055353836/">自然家园二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3911056688012/">莲岳里小区东区二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3911056390773/">世纪海湾二期二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3911057156560/">音乐家生活广场二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3911100121031/">国贸蓝海二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3911057774056/">特房山水新座二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3911055180822/">华天花园二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3911099530425/">源昌君悦山思明二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3911055010937/">时尚国际二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3911059545532/">联发滨海名居二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3911057568481/">亿力悦海二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3911057597766/">鑫锦家园（南区）二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3911057585039/">双桥明珠二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3911057808808/">宁宝花园二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3911057287787/">首开领翔国际二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c398301033041975/">东方高尔夫国际公寓二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3911100636637/">阳光城翡丽湾二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3911057516119/">金博水岸二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3911057444072/">明发半岛祥湾B区二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3912557198307167/">海上五月花六期二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3911057418508/">泰和花园二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3911055033339/">航空大厦二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3911057360229/">万景花园二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3911057725985/">艾德花园一期二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3911057350074/">金彩花苑二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3911057719937/">益辉花园二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3911056367453/">黄金大厦二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3911100900608/">海景奥斯卡二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3911100501372/">家家海景二手房</a></dd></div><div><dd><a target="_blank" href="https://bj.lianjia.com/ershoufang/">北京二手房</a><a target="_blank" href="https://gz.lianjia.com/ershoufang/">广州二手房</a><a target="_blank" href="https://sz.lianjia.com/ershoufang/">深圳二手房</a><a target="_blank" href="https://tj.lianjia.com/ershoufang/">天津二手房</a><a target="_blank" href="https://cd.lianjia.com/ershoufang/">成都二手房</a><a target="_blank" href="https://nj.lianjia.com/ershoufang/">南京二手房</a><a target="_blank" href="https://hz.lianjia.com/ershoufang/">杭州二手房</a><a target="_blank" href="https://qd.lianjia.com/ershoufang/">青岛二手房</a><a target="_blank" href="https://dl.lianjia.com/ershoufang/">大连二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/">厦门二手房</a><a target="_blank" href="https://wh.lianjia.com/ershoufang/">武汉二手房</a><a target="_blank" href="https://cq.lianjia.com/ershoufang/">重庆二手房</a><a target="_blank" href="https://cs.lianjia.com/ershoufang/">长沙二手房</a><a target="_blank" href="https://jn.lianjia.com/ershoufang/">济南二手房</a><a target="_blank" href="https://fs.lianjia.com/ershoufang/">佛山二手房</a></dd></div><div><dd><a target="_blank" href="https://bj.lianjia.com/zufang/">北京租房</a><a target="_blank" href="https://gz.lianjia.com/zufang/">广州租房</a><a target="_blank" href="https://sz.lianjia.com/zufang/">深圳租房</a><a target="_blank" href="https://tj.lianjia.com/zufang/">天津租房</a><a target="_blank" href="https://cd.lianjia.com/zufang/">成都租房</a><a target="_blank" href="https://nj.lianjia.com/zufang/">南京租房</a><a target="_blank" href="https://hz.lianjia.com/zufang/">杭州租房</a><a target="_blank" href="https://qd.lianjia.com/zufang/">青岛租房</a><a target="_blank" href="https://dl.lianjia.com/zufang/">大连租房</a><a target="_blank" href="https://xm.lianjia.com/zufang/">厦门租房</a><a target="_blank" href="https://wh.lianjia.com/zufang/">武汉租房</a><a target="_blank" href="https://cq.lianjia.com/zufang/">重庆租房</a><a target="_blank" href="https://cs.lianjia.com/zufang/">长沙租房</a><a target="_blank" href="https://jn.lianjia.com/zufang/">济南租房</a></dd></div><div><dd><a target="_blank" href="//sh.fang.lianjia.com/">北京楼盘</a><a target="_blank" href="//tj.fang.lianjia.com/">天津楼盘</a><a target="_blank" href="//nj.fang.lianjia.com/">南京楼盘</a><a target="_blank" href="//cd.fang.lianjia.com/">成都楼盘</a><a target="_blank" href="//dl.fang.lianjia.com/">大连楼盘</a><a target="_blank" href="//qd.fang.lianjia.com/">青岛楼盘</a><a target="_blank" href="//hz.fang.lianjia.com/">杭州楼盘</a><a target="_blank" href="//wh.fang.lianjia.com/">武汉楼盘</a><a target="_blank" href="//sz.fang.lianjia.com/">深圳楼盘</a><a target="_blank" href="//cq.fang.lianjia.com/">重庆楼盘</a><a target="_blank" href="//cs.fang.lianjia.com/">长沙楼盘</a><a target="_blank" href="//xa.fang.lianjia.com/">西安楼盘</a><a target="_blank" href="//jn.fang.lianjia.com/">济南楼盘</a><a target="_blank" href="//sjz.fang.lianjia.com/">石家庄楼盘</a></dd></div><div><dd><a target="_blank" href="//news.lianjia.com/cd/baike/011207.html">绿地率和绿化率对比</a><a target="_blank" href="//news.lianjia.com/cd/baike/010664.html">买卖小产权房风险</a><a target="_blank" href="//news.lianjia.com/cd/baike/010530.html">房屋产权核验要素</a><a target="_blank" href="//news.lianjia.com/bj/baike/033371.html">如何选择换房方案</a><a target="_blank" href="//news.lianjia.com/bj/baike/06645.html">卖房收款项</a><a target="_blank" href="//news.lianjia.com/bj/baike/029526.html">买两限房注意事项</a><a target="_blank" href="//news.lianjia.com/bj/baike/017029.html">卖房补充协议</a><a target="_blank" href="//news.lianjia.com/bj/baike/027738.html">租房物业交割</a><a target="_blank" href="//news.lianjia.com/bj/baike/019792.html">二手房资金监管</a><a target="_blank" href="//news.lianjia.com/bj/baike/017745.html">通州二手房限购政策</a><a target="_blank" href="//news.lianjia.com/bj/baike/06607.html">新房装修注意事项</a><a target="_blank" href="//news.lianjia.com/dl/baike/09536.html">大连购房奖励领取</a><a target="_blank" href="//news.lianjia.com/dl/baike/06682.html">买房公证类型</a><a target="_blank" href="//news.lianjia.com/dl/baike/025723.html">房屋法定继承顺序</a><a target="_blank" href="//news.lianjia.com/dl/baike/030230.html">大连购房提取公积金</a><a target="_blank" href="//news.lianjia.com/dl/baike/09438.html">大连二手房购买流程</a><a target="_blank" href="//news.lianjia.com/dl/baike/049312.html">二手房个人所得税</a><a target="_blank" href="//news.lianjia.com/dl/baike/054567.html">新房得房率计算</a><a target="_blank" href="//news.lianjia.com/dl/baike/032782.html">商业贷款银行拒贷</a><a target="_blank" href="//news.lianjia.com/dl/baike/052395.html">大连买房落户</a><a target="_blank" href="//news.lianjia.com/tj/baike/010503.html">买新房二手房区别</a><a target="_blank" href="//news.lianjia.com/tj/baike/010865.html">二手房买卖交易流程</a><a target="_blank" href="//news.lianjia.com/tj/baike/09968.html">物业交割清算费用</a><a target="_blank" href="//news.lianjia.com/tj/baike/017136.html">二手房交定金注意事项</a><a target="_blank" href="//news.lianjia.com/tj/baike/011251.html">二手房遗留物业费</a><a target="_blank" href="//news.lianjia.com/tj/baike/011420.html">二手房物业交割步骤</a><a target="_blank" href="//news.lianjia.com/sjz/baike/0102291.html">规避租房合同纠纷</a><a target="_blank" href="//news.lianjia.com/sjz/baike/099896.html">农村房产买卖政策</a><a target="_blank" href="//news.lianjia.com/sjz/baike/099157.html">套内建筑面积</a><a target="_blank" href="//news.lianjia.com/sjz/baike/098358.html">规避查房封房风险</a><a target="_blank" href="//news.lianjia.com/sjz/baike/098105.html">老房子采光改造</a><a target="_blank" href="//news.lianjia.com/sjz/baike/097456.html">好户型实例解析</a><a target="_blank" href="//news.lianjia.com/sjz/baike/030648.html">委托买房核实真假</a><a target="_blank" href="//news.lianjia.com/sjz/baike/038797.html">委托中介买房环节</a><a target="_blank" href="//news.lianjia.com/sjz/baike/033364.html">购房意向定金退还</a><a target="_blank" href="//news.lianjia.com/sjz/baike/033385.html">买安置房风险</a><a target="_blank" href="//news.lianjia.com/sjz/baike/018776.html">石家庄住房公积金提取</a><a target="_blank" href="//news.lianjia.com/sjz/baike/08331.html">办理房产继承公证</a><a target="_blank" href="//news.lianjia.com/cd/baike/040041.html">小户型的装修技巧</a><a target="_blank" href="//news.lianjia.com/sjz/baike/098088.html">水路验收标准</a></dd></div></div></div><div class="clear"></div></div><div class="bottom"><div class="copyright fl">北京链家房地产经纪有限公司 | 网络经营许可证 京ICP备11024601号-12 | © Copyright©2010-2017 链家网Lianjia.com版权所有</div></div></div></div>

<script src="https://s1.ljcdn.com/feroot/pc/asset/base/fe.js?_v=20170614145350"></script><script src="https://s1.ljcdn.com/feroot/pc/asset/common/common.js?_v=20170614145350"></script><div style="display:none"><script src="https://s1.ljcdn.com/feroot/dep/ljanalytics.js?_v=20170614145350"></script></div><div id="only" data-city="xm" data-page="ershoufang_search"></div>
<script>var path = 'https://s1.ljcdn.com/feroot/pc/asset?_v=20170614145350'.split("?");require.config({baseUrl: path[0],paths: {'echarts' : '../../dep/echarts-1.4.1/build/echarts','echarts/chart/bar' : '../../dep/echarts-1.4.1/build/echarts','echarts/chart/line' : '../../dep/echarts-1.4.1/build/echarts','echarts/chart/pie' : '../../dep/echarts-1.4.1/build/echarts','echarts3' : '../../dep/echarts3/echarts3','common': 'common','jquery-ui': '../../dep/jquery-ui/jquery-ui.min','zeroclipboard': '../../dep/zeroclipboard-2.2.0/ZeroClipboard'},urlArgs:  path[1]});var feData = {"cityName": "北京","getFavHouseUrl":       "/api/gethousefav","setFavHouseUrl":       "/api/sethousefav","getLastSearch":        "/api/getlastsearch","getCommunityHistory":  "/api/getcommunityhistory","verifyHouse":          "/api/verifyHouse","getUser":              "/api/getUser","verifyCode":           "/api/getVerifyCode","complaint":            "/api/complaint","getDecoration":        "/api/getDecoration","trendData" :           "/site/getpicinfo"}</script>
<script type="text/template" id="priceSideBarTpl">
<%if(tag !== 'school'){%>
  <div class="title"><%=name%>最新参考均价</div>
  <div class="priceMap" id="priceChartContainer"></div>
  <a href="<%=fangjia_url%>" class="unitPrice" target="_blank">
    <span><%=month_trans%></span>元/平米
  </a>
  <div class="info">
    <a href="<%=fangjia_url%>" target="_blank">环比上月均价<%=month_trans_ratio>=0?'上涨':'下降'%> <%=month_trans_ratio%>%</a>
    <a href="<%=chengjiao_url%>" target="_blank">/ 近90天成交<%=sold_90_day%>套</a>
    <%if(tag === '小区'){%>
    <div>
      <a class="cardMoreDetail" href="<%=url%>" target="_blank">查看小区详情>></a>
    </div>
    <%}%>
  </div>
<%}else{%>
  <a class="title" href="<%=url%>" target="_blank"><%=name%></a>
  <div class="unitPrice school">
    <span><%=min_unit_price%></span>万元起
  </div>
  <div class="info">
    <a href="<%=url%>" target="_blank">本学区目前有在售二手房<%=sell_num%>套，划片小区<%=resblock_nums%>个</a>
    <a class="cardMoreDetail" href="<%=url%>"  target="_blank">查看学区详情>></a>
  </div>
<%}%>
</script>

<script type="text/template" id="suggestAgentTpl">
  <div class="title">推荐置业顾问</div>
  <div class="agent">
    <a class="img <%= (desc.search('学区') > -1) ? '': 'LOGVIEW LOGCLICK'%>" href="<%=url%>" target="_blank" data-bl="agent_<%= (desc.search('学区') > -1) ? 'school': 'community'%>" data-el="<%=ucid%>" data-log_id="20001">
      <img src="<%=photo_url%>" alt="">
    </a>
    <div class="info">
      <div class="name">
        <a href="<%=url%>" target="_blank" data-bl="agent_<%= (desc.search('学区') > -1) ? 'school': 'community'%>" data-el="<%=ucid%>" class="<%= (desc.search('学区') > -1) ? '': 'LOGCLICK'%>" data-log_id="20001"><%=name%></a>
        <a class="lianjiaim-createtalk <%= (desc.search('学区') > -1) ? '': 'LOGCLICK'%>" style="padding: 1px 0 !important;" title="在线咨询" data-role="lianjiaim-createtalk" data-ucid="<%=ucid%>" data-bl="agentim_<%= (desc.search('学区') > -1) ? 'school': 'community'%>" data-el="<%=ucid%>" data-log_id="20001"></a>
      </div>
      <div class="phone"><%=phone%></div>
    </div>
  </div>
  <div class="agentInfo" title="<%=desc%>"><%=formatDesc%></div>
</script>
<script type="text/template" id="suggestHouseTpl">
  <a class="img" href="<%=url%>" target="_blank" data-bl="list" data-log_index="<%=index+1%>">
    <img src="<%=img_url%>" alt="">
    <div class="cover"></div>
    <div class="title">
      <span><%=title%></span>&nbsp;
    </div>
  </a>
  <div class="pointContainer">
  <%for(var i = 0; i < total; i++){%>
    <%if(index === i){%>
      <span data-index="<%=i%>" class="point selected"></span>
    <%}else{%>
      <span data-index="<%=i%>" class="point"></span>
    <%}%>
  <%}%>
  </div>
</script>
<script type="text/template" id="suggestCommunityTpl">
  <div class="title">小区推荐</div>
  <ul>
  <%for(var i = 0; i < list.length; i++){%>
    <li>
      <a href="<%=list[i].url%>" class="img LOGVIEW LOGCLICK" data-log_id="30001" target="_blank" data-log_index="<%=i+1%>" data-bl="<%=$.trim($('.list-more dl:first dt').text()) === '小区' ? 'community' : 'bizcircle'%>" data-el="">
        <%if(list[i].pic) {%>
          <img src="<%=list[i].picUri%>.280x210.jpg">
        <%}else{%>
          <span class="noimg">暂无图片</span>
        <%}%>
        <div class="price">
          <%if(list[i].price!=0 && list[i].price) {%><%=parseFloat(list[i].price, 10).toFixed()%>元/平<%}else{%>暂无均价<%}%>
        </div>
      </a>
      <div class="info clear">
        <a href="<%=list[i].url%>" target="_blank" class="fl"><%=list[i].name%></a>
        <div class="fr"><%=list[i].sellNum%>套在售</div>
      </div>
      <div class="desc"><%=list[i].desc%></div>
    </li>
  <%}%>
  </ul>
</script>
<script type="text/template" id="pushZhuanjiaTpl">
  <span class="name">推荐学区顾问</span>
  <span class="fl pic">
    <img src='<%=list.photoPath%>'>
  </span>
  <span class="fl">
    <a href="<%=list.agentUrl%>" target="_blank"><%=list.name%></a>
    <a class="lianjiaim-createtalk" style="display: none;" title="在线咨询" data-role="lianjiaim-createtalk" data-ucid="<%=list.agent_ucid%>"></a>
    <p class="tel"><%=list.phoneNumber%></p>
  </span>
  <p class="tips">
    <%=list.desc%>
  </p>
</script>

<script type="text/template" id="pushXuexiaoTpl">
  <div class="title"><%=data.regionName%>近期热门学校</div>
  <ul>
  <% var list = data.list;for(var i = 0;i < list.length; i++){%>
    <li class="li<%=i%>">
      <i></i>
      <a class="info" href="<%=list[i].viewUrl%>" target="_blank"><%=list[i].schoolName%></a>
      <span><%=list[i].viewCount%>浏览</span>
    </li>
  <%}%>
  </ul>
</script>
<script type="text/template" id="pushChenjiaoTpl">
  <div class="title"><%=data.regionName%>近期成交</div>
  <ul>
  <% var list = data.list; for(var i = 0;i < list.length; i++){%>
    <li class="li<%=i%>">
      <i></i>
      <a class="info" href="<%=list[i].viewUrl%>" target="_blank"><%=list[i].schoolName%></a>
      <span><%=list[i].dealCount%>套</span>
    </li>
  <%}%>
  </ul>
</script>
<script type="text/template" id="pushXuequTpl">
  <div class="title">热点精选</div>
  <ul>
  <%for(var i = 0;i < list.length; i++){%>
    <li>
      <a class="info" href="<%=list[i].pc_url%>" target="_blank"><%=list[i].title%></a>
    </li>
  <%}%>
  </ul>
</script>
<script type="text/template" id="pushZixunTpl">
  <div class="title">热点精选</div>
  <ul>
  <%for(var i = 0;i < list.length; i++){%>
    <li>
      <a class="info" href="<%=list[i].url%>" target="_blank" data-bl="list" data-log_index="<%=i+1%>">
        <i class="opt<%=i%>"><%=i+1%></i><span><%=list[i].question_title%></span>
      </a>
    </li>
  <%}%>
  </ul>
</script>
<script type="text/template" id="pushWendaTpl">
  <div class="title">热门问答</div>
  <ul>
  <%for(var i = 0;i < list.length; i++){%>
    <li>
      <a class="info" href="<%=list[i].url%>" target="_blank" data-bl="list" data-log_index="<%=i+1%>"><%=list[i].question_title%></a>
      <span class="time"><%=list[i].mtime%></span>
    </li>
  <%}%>
  </ul>
</script>
<script type="text/template" id="newAddHouseTpl">
  <div class="newAddHouse">
    自从您上次浏览（<%=time%>）之后，该搜索条件下新增加了<%=count%>套房源
    <a href="<%=url%>" class="LOGNEWERSHOUFANGSHOW" <%=logText%>><%=linkText%></a>
    <span class="newHouseRightClose">x</span>
  </div>
</script>
<script type="text/template" id="pushXinfangTpl">
  <div class="newHousePushContainer">
    <h3>推荐楼盘</h3>
    <ul log-mod="ershoufang_list_newHouseRecommand">
      <%for(var i = 0; i < list.length; i++){%>
        <li>
          <a class="pic LOGVIEW LOGCLICK" href="<%=list[i].view_url%>" target="_blank" data-bl="list" data-log_id="40001" data-el="<%=strategy_version%>" data-log_index="<%=i+1%>">
            <span class="bg"></span>
            <%if(list[i].cover_pic){%>
              <img src="<%=list[i].cover_pic%>.218x150.jpg">
            <%}else{%>
              <div class="mark"></div>
            <%}%>
            <div class="description" ><%=list[i].district_name%>－<%=list[i].resblock_name%></div>
          </a>
          <%if(list[i].rooms){%>
            <p class="area">
              <%=list[i].rooms%>
              <%if(list[i].min_frame_area != '' && list[i].max_frame_area != ''){%>
                &nbsp;-&nbsp;
                <%=list[i].min_frame_area%>~<%=list[i].max_frame_area%>平
              <%}%>
            </p>
          <%}%>
          <div class="price">
            <%if(list[i].show_price && list[i].show_price != 0){%>
              <i><%=list[i].show_price%></i>
              <%=list[i].show_price_unit%>
            <%}else{%>
              价格待定
            <%}%>
          </div>
        </li>
      <%}%>
    </ul>
  </div>
</script>

<script type="text/javascript">
require(['ershoufang/sellList/index'], function (main) {
  main({
    sidebar:{"type":"district","cityId":350200,"uuid":"15e2f095-d460-49eb-86ce-af527a684e97","ucid":null,"id":"23008798"},
    url:'/web/ershoufang/sidebar',
    xuequUrl : '/web/ershoufang/sidebarxuequ',
    ifXuqu: "\/ershoufang\/",
    ids: '105100758226,105100752858,105100748092,105100746545,105100743725,105100743083,105100742681,105100740811,105100737933,105100736353,105100725932,105100723941,105100720165,105100710518,105100700995,105100700585,105100689814,105100683859,105100683182,105100677223,105100629824,105100587050,105092824422',
    SIRKeyword:"",
    count: 53,
    pageNum:2,
    cid: null,
    bid: null,
    ucid: '',
    uuid: '15e2f095-d460-49eb-86ce-af527a684e97',
    loadingImg: 'https://s1.ljcdn.com/feroot/pc/asset/ershoufang/sellDetail/img/loading.gif?_v=20170614145350',
    qrImg: '//ajax.api.lianjia.com/qr/getDownloadQr'
  });

});


;;+function() {
    LjUserTrack.send({
        "ljweb_id": "10001",
        "ljweb_mod": "ershoufang_list_view",
        "ljweb_bl": "spk_0",
        "ljweb_el": "53",
        "ljweb_value": "",
    });
    var isHaveAgentCard = false
    var clickLinkBl = 'list';
    var resblockId = '';
    if(isHaveAgentCard){
      clickLinkBl = 'list_have_sem_card';
      resblockId = ""
    }
    $(document.body).on("click", "[data-el='ershoufang']", function() {
        var $m = $(this);
        LjUserTrack.send({
            "ljweb_id": "10002",
            "ljweb_mod": "ershoufang_list_list",
            "ljweb_bl": clickLinkBl,
            "ljweb_el": "ershoufang",
            "ljweb_index": $m.attr("data-log_index"),
            "ljweb_url": $m.attr("href"),
            "ljweb_value":resblockId
        });

    });

    $(document.body).on("mousedown", ".input [data-bl='sug'] [data-log_value]", function() {
        var $m = $(this);
        var actionId = $m.closest('[data-bl="sug"]').attr("data-el") === 'history' ? '10004' : '10003';
        LjUserTrack.send({
            "ljweb_id": actionId,
            "ljweb_mod": "ershoufang_list_search",
            "ljweb_bl": "search",
            "ljweb_el": $m.attr("data-log_value"),
            "ljweb_index": $m.attr("data-log_index"),
            "ljweb_value": $.trim($("#searchInput").val()),
            "ljweb_url": $m.attr("href")
        });
    });
    $("#searchForm").on("submit", function() {
        var $m = $(this);
        LjUserTrack.send({
            "ljweb_id": "10008",
            "ljweb_mod": "ershoufang_list_search",
            "ljweb_bl": "search",
            "ljweb_value": $.trim($("#searchInput").val())
        });
    });

}();
</script>
<script>require(['common/suggestion'], function (suggestion) {window.defaultSuggest = suggestion.init({requestOptions: {cityId: '350200',cityName: '厦门'},url: '/api/headerSearch?channel=ershoufang&q=',main: '#keyword-box',appendTo: '#suggest-cont',redirect: true});});</script><div class="loninContaner"><div class="overlay_bg"></div><div class="panel_login animated" id="dialog"><div class="panel_info"><div class="panel_tab"><div class="title"><div class="fl">用户登录</div><label class="fr">还没有链家网账号？<a href="//passport.lianjia.com/register/resources/lianjia/register.html?service=http%3A%2F%2Fbj.lianjia.com%2F" rel="nofollow">马上注册</a></label></div><div class="clear"></div><div id="con_login_user"><form action="" method="post"><ul><li class="show-error"><dd>用户名或密码错误</dd></li><li class="item userName"><i></i><input type="text" class="the_input users" placeholder="请输入手机号" /></li><li class="item pwd"><i></i><input type="password" class="the_input password"  placeholder="请输入登录密码"/></li><li class="item checkVerimg" style="display:none;"><i></i><input type="text" class="the_input ver-img" maxlength="4"  placeholder="请输入验证码"/><img class="verImg"></li><li class="li_01"><label><input type="checkbox" name="remember" value="1" class="mind-login" checked>下次自动登录</label><a href="https://passport.lianjia.com/register/resources/lianjia/forget.html?service=http://bj.lianjia.com/" rel="nofollow">找回密码</a></li><li><a class="login-user-btn"  />立即登录</a></li></ul></form></div><div id="con_login_agent" class="undis"><form action="" method="post"><ul><li class="item"><dd></dd><input type="text" class="the_input users" placeholder="输入经纪人ID号码" /></li><li class="item"><input type="password" class="the_input password"  placeholder="登录密码"/></li><li class="li_01"><label><input type="checkbox" name="remember" value="1" class="mind-login">下次自动登录</label><a href="https://passport.lianjia.com/register/resources/lianjia/forget.html?service=http://bj.lianjia.com/" rel="nofollow">找回密码</a></li><li><input class="login-agent-btn" value="立即登录"/></li></ul></form></div></div></div><div class="registered"></div></div></div>
<!-- LianjiaIM Style --><link property='stylesheet' rel="stylesheet" href="https://s1.ljcdn.com/feroot/pc/asset/lianjiaIM/css/lianjiaim.css?_v=20170614145350"/><script src="//s1.ljcdn.com/web-im-sdk/static/0.9/ljim-core.min.js?_v=20170615"></script><script>(function() {var imConf = {"ajaxroot":"\/\/ajax.api.lianjia.com\/","imAppid":"LIANJIA_WEB_20160624","imAppkey":"6dfdcee27d78b1107fceeca55d80b7bd"};$.listener.on('userInfo', function (data) {if (data.code === 1) {data.ucid = '';}require(['lianjiaIM/lianjiaim'], function (LianjiaIM) {var ljim = new LianjiaIM({appid: imConf.imAppid,appkey: imConf.imAppkey,userData: data,staticRoot: 'https://s1.ljcdn.com/feroot/?_v=20170614145350'});});});})();</script><script type="text/javascript">var advert = 'https://s1.ljcdn.com/feroot/pc/asset/common/advert.js?_v=20170614145350';
    $.listener.on('userInfo', function (data) {
      window.loginData = data;
    });
    var mvl = document.createElement('script');
    mvl.type = 'text/javascript';
    mvl.async = true;
    mvl.src = advert;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(mvl, s);
  </script><script type="text/javascript">(function(){var bp = document.createElement('script');var curProtocol = window.location.protocol.split(':')[0];if (curProtocol === 'https'){bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';} else {bp.src = 'http://push.zhanzhang.baidu.com/push.js';}var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(bp, s);})();</script></body></html>
`;
let proxyHtml = `
<!DOCTYPE html><html><head>	<script type="text/javascript">ginf={url:'https://nl.hideproxy.me',script:'go.php',target:{h:'https://xm.lianjia.com',p:'/ershoufang/siming/pg33co32ng1nb1/',b:'',u:'https://xm.lianjia.com/ershoufang/siming/pg33co32ng1nb1/'},enc:{u:'mSNLut17P8Fy6GyTo0bB3305mYziRaz1QcC8tr58nBvk5R3jG4KzWzt8lSg3SFUwFnvZCqVQPe0KWRSsKqPwP8s1OzSw2ATwLcjes4U67IGRno7VDMhiJA7nXNINep9N',e:'',x:'',p:''},b:'4'}</script>
	<script type="text/javascript" src="https://nl.hideproxy.me/includes/main.js?1.4.14"></script><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge" /><meta http-equiv="Cache-Control" content="no-transform" /><meta http-equiv="Cache-Control" content="no-siteapp" /><meta http-equiv="Content-language" content="zh-CN" /><meta name="format-detection" content="telephone=no" /><meta name="applicable-device" content="pc"><link rel="alternate" media="only screen and (max-width: 640px)" href="/go.php?u=https%3A%2F%2Fm.lianjia.com%2Fxm%2Fershoufang%2Fsiming%2Fpg33co32ng1nb1%2F&amp;b=4" >
<meta name="mobile-agent" content="format=html5;url=/xm/ershoufang/siming/pg33co32ng1nb1/"><script>
ljConf = {
    city_id: '350200',
    city_abbr: 'xm',
    city_name: '厦门',
    channel: 'ershoufang',
    page: 'ershoufang_search',
    pageConfig: {"ajaxroot":"\/\/ajax.api.lianjia.com\/","imAppid":"LIANJIA_WEB_20160624","imAppkey":"6dfdcee27d78b1107fceeca55d80b7bd"},
    feroot: '//s1.ljcdn.com/feroot/',
    ucid:'',
    cdn:'1',
};
</script>

<title>【思明发布时间从新到旧不看车位不看地下室第33页二手房_厦门思明发布时间从新到旧不看车位不看地下室第33页二手房出售】(厦门链家网)</title>
<meta name="description" content="链家思明二手房网,现有思明发布时间从新到旧不看车位不看地下室第33页二手房真实房源1666套.为准备买思明发布时间从新到旧不看车位不看地下室第33页二手房的用户提供厦门地图找房、通勤找房等快捷找房工具,方便您更快捷的了解和购买思明二手房.买思明二手房就到厦门链家网." />
<meta name="keywords" content="思明发布时间从新到旧不看车位不看地下室第33页二手房,思明发布时间从新到旧不看车位不看地下室第33页二手房出售,厦门思明发布时间从新到旧不看车位不看地下室第33页二手房" />
<link href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Ffavicon.ico&amp;b=4" type="image/x-icon" rel=icon><link href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Ffavicon.ico&amp;b=4" type="image/x-icon" rel="shortcut icon"><link rel="stylesheet" href="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fcommon.css%3F_v%3D20170616112508&amp;b=4">
<link rel="stylesheet" href="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fershoufang%2FsellList%2Findex.css%3F_v%3D20170616112508&amp;b=4">

<script>
function RESIZEIMG(b,k,l,m){var c=b.parentNode;var d=parseInt(c.offsetWidth)||k;var e=parseInt(c.offsetHeight)||l;var f=d/e;var g=b.naturalWidth||b.width;var h=b.naturalHeight||b.height;var i=g/h;var j="width";if(f<i){j="height";try{b.style["left"]="-"+parseInt(Math.abs((d-(g*e/h))/2))+"px"}catch(e){}}else if(m){try{b.style["top"]="-"+parseInt(Math.abs((e-(h*d/g))/2))+"px"}catch(e){}};b.style[j]="100%";};
</script>
<script>
var _czc = _czc || [];
_czc.push(["_setAccount", "1254525948"]);
</script>

<script type="text/javascript">
var _smq = _smq || [];
_smq.push(['_setAccount', '41331c2', new Date()]);
_smq.push(['_setDomainName', 'lianjia.com']);
_smq.push(['pageview']);
(function() {
var sm = document.createElement('script'); sm.type = 'text/javascript'; sm.async = true;
sm.src = parseURL(('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdnmaster.com/sitemaster/collect.js');
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(sm, s);
})();
</script>
</head><body><style type="text/css">
   html body{padding-top:80px}::-webkit-input-placeholder{color:#c4c4c4}:-moz-placeholder{color:#c4c4c4}::-moz-placeholder{color:#c4c4c4}:-ms-input-placeholder{color:#c4c4c4}@font-face{font-family:fontawesome;src:url(https://opensource.keycdn.com/fontawesome/4.7.0/fontawesome-webfont.eot?77951248);src:url(https://opensource.keycdn.com/fontawesome/4.7.0/fontawesome-webfont.eot?77951248#iefix) format('embedded-opentype'),url(https://opensource.keycdn.com/fontawesome/4.7.0/fontawesome-webfont.woff2?77951248) format('woff2'),url(https://opensource.keycdn.com/fontawesome/4.7.0/fontawesome-webfont.woff?77951248) format('woff'),url(https://opensource.keycdn.com/fontawesome/4.7.0/fontawesome-webfont.ttf?77951248) format('truetype'),url(https://opensource.keycdn.com/fontawesome/4.7.0/fontawesome-webfont.svg?77951248#fontawesome) format('svg');font-weight:400;font-style:normal}.hidemeproxy__share--facebook:before,.hidemeproxy__share--google:before,.hidemeproxy__share--twitter:before,input[type=checkbox]+label.hidemeproxy__menu:before{font-family:fontawesome;font-style:normal;font-weight:400;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em;background-color:transparent;position:relative;border:0;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.hidemeproxy input[type=checkbox],.hidemeproxy script{display:none}.hidemeproxy__share--facebook:before,.hidemeproxy__share--google:before,.hidemeproxy__share--twitter:before{position:absolute;left:15px;top:14px}.hidemeproxy *{padding:0;margin:0;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.hidemeproxy{position:absolute;top:0;left:0;width:100%;z-index:100000;font:12px Verdana,Arial,Tahoma;background-color:#34373e}.hidemeproxy__toolbar{z-index:1000;padding-top:14px;padding-bottom:14px;margin-right:auto;margin-left:auto;max-width:1170px;width:95%}.hidemeproxy__toolbar:after,.hidemeproxy__toolbar:before{content:"";display:table}.hidemeproxy__toolbar:after{clear:both}.hidemeproxy__form,.hidemeproxy__form .url-button,.hidemeproxy__form .url-input,.hidemeproxy__logo,input[type=checkbox]+label.hidemeproxy__menu{float:left}.hidemeproxy__logo{height:50px;width:13%;max-width:none;background-color:transparent}.hidemeproxy__options{z-index:1000;position:absolute;left:30px;top:50px;padding:10px;border:1px solid #dfe3e4;border-radius:4px;box-shadow:0 4px 4px -2px #eee;background-color:#fff;display:none}.hidemeproxy__options:before{content:'';position:absolute;bottom:100%;left:10px;height:0;width:0;border:solid transparent;border-bottom-color:#fff;border-width:7px}.hidemeproxy__options input[type=checkbox]+label{position:relative;display:block;padding-left:25px;margin-bottom:10px}.hidemeproxy__options input[type=checkbox]+label:before{content:'';font-family:fontawesome;display:block;position:absolute;text-align:center;top:0;left:0;width:14px;height:14px;border:1px solid #ebebeb;font-size:9px;line-height:14px;border-radius:3px}.hidemeproxy__options input[type=checkbox]:checked+label:before{content:'\f00c';border-color:#09a3c6;color:#fff;background-color:#06cdf7}#hide-optionsmenu:checked~.hidemeproxy__options{display:block}.hidemeproxy__form{position:relative;padding-left:30px;margin-top:6px;width:55%}.hidemeproxy__form .url-button,.hidemeproxy__form .url-input,input[type=checkbox]+label.hidemeproxy__menu{height:40px;min-height:inherit;border:0;line-height:40px}.hidemeproxy__form .url-input{padding:0 15px;width:66%;border-radius:0;-webkit-appearance:none;-moz-appearance:none}.hidemeproxy__form .url-button{padding:0;margin:0;width:16%;font-weight:700;font-size:13px;text-align:center;color:#545454;background:gold;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;border-radius:0 4px 4px 0}input[type=checkbox]+label.hidemeproxy__menu{position:relative;display:inline-block;padding:0 10px;width:18%;border-top-left-radius:4px;border-bottom-left-radius:4px;font-size:12px;font-weight:400;color:#fff;background-color:#545454;cursor:pointer}input[type=checkbox]+label.hidemeproxy__menu:before{content:'\f013';margin-right:5px}input[type=checkbox]+label.hidemeproxy__menu:after{content:'';position:absolute;top:17px;right:10px;height:0;width:0;border:solid transparent;border-top-color:#fff;border-width:5px;display:inline-block}#hide-optionsmenu:checked~label.hidemeproxy__menu:after{top:13px;border-bottom-color:#fff;border-top-color:transparent}.hidemeproxy__share{float:right;padding-left:30px;margin-top:6px;width:32%}.hidemeproxy__share a{position:relative;display:inline-block;padding-left:10px;margin-right:2%;width:30%;height:40px;list-style-type:none;line-height:40px;color:#fff;text-align:center;text-decoration:none;border-radius:4px}.hidemeproxy__share--facebook{background-color:#3b5998}.hidemeproxy__share--twitter{background-color:#1da1f2}.hidemeproxy__share--google{background-color:#dd4b39}.hidemeproxy__share--facebook:before{content:'\f09a';margin-right:5px}.hidemeproxy__share--twitter:before{content:'\f099';margin-right:6px}.hidemeproxy__share--google:before{content:'\f0d5';margin-right:11px}.hidemeproxy__share__responsive{display:none}.hidemeproxy__getnow{position:fixed;bottom:0;right:0;z-index:1000;padding:15px 20px;background-color:gold;border-top-right-radius:3px;border-top-left-radius:3px}.hidemeproxy__getnow a{text-decoration:none;font-weight:700;color:#545454}.hidemeproxy__getnow label{display:inline-block;margin-left:15px;color:#545454;cursor:pointer}#hide-getnow:checked~.hidemeproxy__getnow{display:none}@media screen and (max-width:1075px){input[type=checkbox]+label.hidemeproxy__menu:before{display:none}.hidemeproxy__share--facebook:before,.hidemeproxy__share--google:before,.hidemeproxy__share--twitter:before{left:5px}}@media screen and (max-width:900px){html body{padding-top:155px}.hidemeproxy__share--facebook:before,.hidemeproxy__share--google:before,.hidemeproxy__share--twitter:before,input[type=checkbox]+label.hidemeproxy__menu:before{display:inline-block}.hidemeproxy__footer,.hidemeproxy__menu span,.hidemeproxy__share{display:none}.hidemeproxy__logo{width:20%}.hidemeproxy__form{width:80%}.hidemeproxy__form .url-input{width:74%}input[type=checkbox]+label.hidemeproxy__menu{width:10%}.hidemeproxy__share__responsive{display:block;float:none;width:100%;background-color:#dce5e4;padding:15px}.hidemeproxy__share__responsive a{margin-right:0;width:32.85%}.hidemeproxy__share--facebook:before,.hidemeproxy__share--google:before,.hidemeproxy__share--twitter:before{display:inline-block;position:relative;top:auto;left:auto}}@media screen and (max-width:630px){html body{padding-top:200px}.hidemeproxy__logo{width:auto}.hidemeproxy__form{width:100%;padding-left:0}input[type=checkbox]+label.hidemeproxy__menu{width:12%;padding:0 5px}.hidemeproxy__form .url-input{width:66%}.hidemeproxy__form .url-button{width:22%}.hidemeproxy__options{left:0}.hidemeproxy__share__responsive a{width:32%}}
</style>
<div class="hidemeproxy">
   <div class="hidemeproxy__toolbar">
      <img class="hidemeproxy__logo" src="https://hide.me/resources/114/images/logo.svg">
      <form class="hidemeproxy__form" action="https://nl.hideproxy.me/includes/process.php?action=update" target="_top" method="post" onsubmit="return updateLocation(this);">

         <input type="checkbox" id="hide-optionsmenu">
         <label class="hidemeproxy__menu" for="hide-optionsmenu"><span>Options</span></label>
         <input type="text" name="u" size="40" value="https://xm.lianjia.com/ershoufang/siming/pg33co32ng1nb1/" class="url-input" placeholder="Enter website address">
         <input type="submit" value="HIDE ME" class="url-button">
         <div class="hidemeproxy__options">         <div>
            <input type="checkbox" name="encodeURL" id="encodeURL" />
            <label for="encodeURL">Encrypt URL</label>
         </div>
         <div>
            <input type="checkbox" name="encodePage" id="encodePage" />
            <label for="encodePage">Encrypt Page</label>
         </div>
         <div>
            <input type="checkbox" name="allowCookies" id="allowCookies" checked="checked"  />
            <label for="allowCookies">Allow Cookies</label>
         </div>
         <div>
            <input type="checkbox" name="stripJS" id="stripJS" />
            <label for="stripJS">Remove Scripts</label>
         </div>
         <div>
            <input type="checkbox" name="stripObjects" id="stripObjects" />
            <label for="stripObjects">Remove Objects</label>
         </div>
         </div>
      </form>

      <div class="hidemeproxy__share">
         <a class="hidemeproxy__share--facebook" href="#" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=https://hide.me', 'facebook-share-dialog',  'width=626,height=436'); return false;">Share</a>
         <a class="hidemeproxy__share--twitter" href="#" onclick="window.open('https://twitter.com/share', 'hideme', 'width=626,height=436'); return false;" data-lang="en" data-size="large" data-count="none" data-url="https://hide.me">Tweet</a>
         <a class="hidemeproxy__share--google" href="https://plus.google.com/share?url=https://hide.me" onclick="javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;">Share</a>
      </div>

   </div>

   <div class="hidemeproxy__share hidemeproxy__share__responsive">
      <a class="hidemeproxy__share--facebook" href="#" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=https://hide.me', 'facebook-share-dialog',  'width=626,height=436'); return false;">Share</a>
      <a class="hidemeproxy__share--twitter" href="#" onclick="window.open('https://twitter.com/share', 'hideme', 'width=626,height=436'); return false;" data-lang="en" data-size="large" data-count="none" data-url="https://hide.me">Tweet</a>
      <a class="hidemeproxy__share--google" href="https://plus.google.com/share?url=https://hide.me" onclick="javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;">Share</a>
   </div>

   <input type="checkbox" id="hide-getnow">
   <div class="hidemeproxy__getnow">
      <a href="https://hide.me/software" target="blank">Download hide.me VPN for free!</a>
      <label for="hide-getnow">X</label>
   </div>
</div>

<script>
__STAT_LJ_CONF = {
    params: {
        ljweb_group: ['SEARCH','BIGDATA_PC'],
        ljweb_id: '',
        ljweb_mod: '',
        ljweb_bl: '',
        ljweb_el: '',
        ljweb_sl: '',
        ljweb_index: '',
        ljweb_value: '',
        ljweb_url: '',
        ljweb_ljref: (document.cookie.match(/(?:^| )ljref=([^;]*)(?:;|$)/) || ['',''])[1],
        ljweb_sample: (document.cookie.match(/(?:^| )sample_traffic_test=([^;]*)(?:;|$)/) || ['',''])[1],
        ljweb_ref: document.referrer,
        ljweb_cid: '350200',
        ljweb_channel: 'ershoufang',
        ljweb_page: 'ershoufang_search',
        ljweb_source: '',
        ljweb_stat_id: ''
    }
};



var UT = {
    send: function() {

    }
};
var LjUserTrack = {
    log: [],
    initInterval: false,
    intervalLog: function() {
        setTimeout(function() {
            if(window.$ULOG && $ULOG.send) {
                for(var i = 0, l = LjUserTrack.log.length; i < l; i++) {
                    LjUserTrack.__send(LjUserTrack.log[i]);
                }

                for(var m = 0, n = LjUserTrack.logIds.length; m < n; m++) {
                    LjUserTrack.__sendId(LjUserTrack.logIds[m]);
                }
            } else {
                LjUserTrack.intervalLog();
            }
        }, 16.7);
    },
    _start_time: +new Date,
    __send: function(data) {
        var evt_id = data.evt_id || '10043';
        if('evt_id' in data) {
            delete data.evt_id;
        }

        $ULOG.send(evt_id, {
            "pid": (window.__UDL_CONFIG && window.__UDL_CONFIG.pid && window.__UDL_CONFIG.pid)||"lianjiaweb",
            "key": window.location.href,
            "action": data
        });
    },
    logIds: [],
    __sendId: function(id) {
        id && $ULOG.send(id, {
            "pid": (window.__UDL_CONFIG && window.__UDL_CONFIG.pid && window.__UDL_CONFIG.pid)||"lianjiaweb",
            "key": window.location.href
        });
    },
    sendId: function(id) {
        if(window.$ULOG && $ULOG.send) {
            LjUserTrack.__sendId(id);
        } else {
            LjUserTrack.logIds.push(id);

            LjUserTrack.initInterval || (LjUserTrack.initInterval = true, LjUserTrack.intervalLog());

        }
    },
    send: function(data, el, config) {

        var utConf = __STAT_LJ_CONF;
        var params = config || utConf.params,
            win = window,
            j;

        data.groupIndex = data.ljweb_group || 0;

        if (params) {
            for (var d in params) {
                if(params[d] !== j && data[d] === j) {
                    data[d] = params[d];
                }
            }
        }

        if(el) {
            this.checkClick(el, data);
        }

        data.ljweb_group = params['ljweb_group'][data.groupIndex || 0];

        delete data.groupIndex;

        if(data.typ) {
            data.ljweb_bl = (data.ljweb_bl || '') + '_' + data.typ;
            delete data.typ;
        }

        if(window.$ULOG && $ULOG.send) {
            LjUserTrack.__send(data);
        } else {
            LjUserTrack.log.push(data);

            LjUserTrack.initInterval || (LjUserTrack.initInterval = true, LjUserTrack.intervalLog());

        }

    },
    checkClick: function(el, data) {

        var TAG_LINK = 'A';
        var href = '';
        var elParent = null;

        href = (el.tagName.toUpperCase() === TAG_LINK ? el.getAttribute("href", 2) : '');
        if(!href && (elParent = el.parentNode) && elParent.nodeType === 1) {
            href = (elParent.tagName.toUpperCase() === TAG_LINK ? elParent.getAttribute("href", 2) : '');
        }

        if(href) {
            data.ljweb_url = href;
        } else {
            data.ljweb_url = data.ljweb_url
                  || el.getAttribute("data-log_url")
                  || (elParent=el.parentNode||el).getAttribute("data-log_url")
                  || (
                        (elParent=elParent.parentNode||elParent)
                     && (elParent.nodeType === 1)
                     && elParent.getAttribute("data-log_url")
                     )
                  || "";
        }

        this.attr(el, data);

    },
    path: function() {

    },
    attr: function(el, data) {
        var modId     = el.getAttribute("log-mod");
        var blAttr    = el.getAttribute("data-bl");
        var elAttr    = el.getAttribute("data-el");
        var slAttr    = el.getAttribute("data-sl");
        var InAttr    = el.getAttribute("data-log_index");
        var valAttr   = el.getAttribute("data-log_value");
        var idAttr    = el.getAttribute("data-log_id");
        var groupAttr = el.getAttribute("data-log_group");
        var sourceAttr = el.getAttribute("data-log_source");
        var statIdAttr = el.getAttribute("data-log_statId");
        var evtId     = el.getAttribute("data-log_evtid");

        data.ljweb_bl    = data.ljweb_bl || blAttr || '';
        data.ljweb_el    = data.ljweb_el || elAttr || '';
        data.ljweb_sl    = data.ljweb_sl || slAttr || '';
        data.ljweb_index = data.ljweb_index || InAttr || '';
        data.ljweb_value = data.ljweb_value || valAttr || '';
        data.ljweb_id    = data.ljweb_id || idAttr || '';
        data.ljweb_source    = data.ljweb_source || sourceAttr || '';
        data.ljweb_stat_id    = data.ljweb_stat_id || statIdAttr || 0;
        data.groupIndex  = data.groupIndex || groupAttr || 0;
        data.evt_id      = data.evt_id || evtId || '';

        if (!modId) {
            if (el.parentNode && el.parentNode.nodeType === 1 && el.parentNode.tagName.toUpperCase() !== 'BODY') {
                this.attr(el.parentNode, data);
            }
        } else {
            data.ljweb_mod = modId;
        }
    }
};

;;(function() {
    var isW3c = !!document.addEventListener;

    LjUserTrack.send({
        ljweb_mod: 'pv',
        ljweb_group: 1
    });

    /*window[isW3c ? 'addEventListener' : 'attachEvent'](
        (isW3c ? '': 'on') + 'beforeunload',
        function(e) {
            var _end_time = +new Date;
            UT.send({type: 'show', subtype: 'stay', time: (_end_time-UT._start_time)/1000});
        },
        false);*/
})();





</script>
<div class="banner"><div class="container"><ul class="channelList"><li><a href="/go.php?u=https%3A%2F%2Fwww.lianjia.com%2F&amp;b=4">首页</a></li><li  class="selected"><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F&amp;b=4" >二手房</a></li><li  class=""><a href="/go.php?u=http%3A%2F%2Fxm.fang.lianjia.com%2F&amp;b=4" >新房</a></li><li  class=""><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fzufang%2F&amp;b=4" >租房</a></li><li  rel="nofollow"  class=""><a href="/go.php?u=http%3A%2F%2Fyou.lianjia.com%2F&amp;b=4" >旅居地产</a></li><li  class=""><a href="/go.php?u=https%3A%2F%2Fus.lianjia.com%2F&amp;b=4" >海外</a></li><li  class=""><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fxiaoqu%2F&amp;b=4" >小区</a></li><li  class=""><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fjingjiren%2F&amp;b=4" >经纪人</a></li><li  class=""><a href="/go.php?u=https%3A%2F%2Fnews.lianjia.com%2Fxm%2Fbaike%2F&amp;b=4" >百科</a></li><li  class=""><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Ftool.html&amp;b=4" target="_blank">工具</a></li><li  class=""><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fyezhu%2F&amp;b=4" target="_blank">业主</a></li></ul><div class="banner-right"><div class="login" id="userInfoContainer"><i></i><a href="/go.php?u=https%3A%2F%2Fpassport.lianjia.com%2Fcas%2Flogin%3Fservice%3Dhttps%253A%252F%252Fxm.lianjia.com%252Fershoufang%252Fsiming%252Fpg33co32ng1nb1%252F&amp;b=4" id="loginBtn" rel="nofollow">登录</a>/<a href="/go.php?u=https%3A%2F%2Fpassport.lianjia.com%2Fregister%2Fresources%2Flianjia%2Fregister.html%3Fservice%3Dhttps%253A%252F%252Fxm.lianjia.com%252Fershoufang%252Fsiming%252Fpg33co32ng1nb1%252F&amp;b=4" rel="nofollow">注册</a></div><div class="phone"><i></i><span>热线电话1010-9666</span></div></div></div></div>


<script type="text/template" id="userInfoTpl">
  <i></i>
  <%if(isAgent){%>
    <a id="userNameContainer" href="<%=$.env.fixedUrl('//agent.lianjia.com/')%>"><%=username%></a>
  <%}else{%>
    <a id="userNameContainer" href="<%=$.env.fixedUrl('//user.lianjia.com/')%>" rel="nofollow"><%=username%></a>
  <%}%>
  <span id="tipContainer"></span>
  &nbsp;&nbsp;<a href="<%=logoutUrl%>">退出</a>
  <span id="pushNewsListContainer"></span>
</script>
<script type="text/template" id="pushNewsListTpl">
  <div class="pushNewsList">
    <%for(var i in group_by_type){%>
      <%if(group_by_type[i].unread !== 0 && pushMsgMap.hasOwnProperty(i)){%>
        <a href="<%=pushMsgMap[i].url%>"><%=$.replaceTpl(pushMsgMap[i].text, {unread:group_by_type[i].unread})%></a>
      <%}%>
    <%}%>
  </div>
</script>

<div class="header"><div class="menu"><div class="menuLeft"><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F&amp;b=4" class="logo"></a><ul class="typeList"><li class="selected"><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F&amp;b=4"  title="厦门在售二手房" >在售</a></li><li ><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fchengjiao%2F&amp;b=4"  title="厦门成交二手房" >成交</a></li><li ><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fxiaoqu%2F&amp;b=4"  title="厦门小区二手房" >小区</a></li><li ><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fditu%2F&amp;b=4"  title="厦门地图找房二手房" target="_blank">地图找房</a></li><li ><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Ftool.html&amp;b=4"  title="厦门计算器二手房" >计算器</a></li></ul></div><div class="app"><a href="/go.php?u=https%3A%2F%2Fwww.lianjia.com%2Fclient%2F&amp;b=4" target="_blank"><i></i>下载链家APP<img width="94" height="94" src="/go.php?u=https%3A%2F%2Fajax.api.lianjia.com%2Fqr%2FgetDownloadQr%3Flocation%3Dmenu_app%26ljweb_channel_key%3Dershoufang_search&amp;b=4" alt="下载链家app"></a></div></div><div class="search"><div class="input" log-mod="search"><form id="searchForm" action='/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Frs&b=4' method="post"><input type="hidden" name="convertGET" value="1"><input type="text" id="searchInput" value="" autocomplete="off"><div class="inputRightPart"><div class="save" id="savedSearchMsg"><span id="savedSearchCount">0</span>条已保存搜索<span id="savedSearchArrow" class="downArrow"></span></div><button type='submit' class="searchButton" data-bl="search" data-el="search">&nbsp;<i></i>&nbsp;</button></div></form><div class="searchMsg" id="searchMsgContainer"></div></div></div></div>


<script type="text/template" id="hotSearchTpl">
  <div class="searchMsgTitle">
    <span class="searchMsgName">热门搜索</span>
  </div>
  <ul data-bl="sug" data-el="history">
    <%for(var i =0; i < list.length; i++){%>
    <li>
      <a role="addHistory" href="<%=list[i].url%>" data-log_index="<%=i+1%>" data-log_value="<%=list[i].string%>" class="sug--search_item">
        <span class="msgListTitle" role="historyKey"><%=list[i].string%></span>
      </a>
    </li>
    <%}%>
  </ul>
</script>
<script type="text/template" id="searchHistoryTpl">
  <div class="searchMsgTitle">
    <span class="searchMsgName">搜索历史</span>
    <div class="searchMsgTitleRightPart">
      <a href="#" id="clearSearchHistory" class="manage">清除历史记录</a>
    </div>
  </div>
  <ul data-bl="sug" data-el="history">
  <%for(var i = 0; i < list.length; i++){%>
    <li>
      <a href="<%=list[i].url%>" role="addHistory" data-log_index="<%=i+1%>" data-log_value="<%=$.encodeHTML(list[i].name)%>" class="sug--search_item">
        <span class="msgListTitle" role="historyKey"><%=$.encodeHTML(list[i].name)%></span>
        <%if(list[i].newCount) {%>
          <span class="msgListAdd"><%=list[i].newCount%>套新增房源</span>
        <%}%>
      </a>
    </li>
  <%}%>
  </ul>
</script>
<script type="text/template" id="searchSuggestionTpl">
  <div class="searchMsgTitle">
    <span class="searchMsgName">你可能在找</span>
  </div>
  <ul data-bl="sug" data-el="sug">
  <%for(var i = 0;i < list.length;i++){%>
    <li>
      <a href="<%=list[i].url%>" role="addHistory" data-log_index="<%=i+1%>" data-log_value="<%=list[i].title%>">
        <span class="msgListTitle">
          <span role="historyKey"><%=list[i].title%></span>
          <%if(list[i].region){%>
            <span class="msgListArea"><%=list[i].region%></span>
          <%}%>
        </span>
        <%if(type === 'sell'){%>
          <span class="msgListAdd">约<%=list[i].count%>套在售</span>
        <%}else if(type === 'deal'){%>
          <span class="msgListAdd">约<%=list[i].count%>套成交</span>
        <%}%>
      </a>
    </li>
  <%}%>
  </ul>
</script>
<script type="text/template" id="savedSearchTpl">
  <div class="searchMsgTitle">
    <span class="searchMsgName">已保存搜索</span>
    <div class="searchMsgTitleRightPart">
    <%if(totalCount){%>
      <a class="totalNew">查看<%=totalCount%>套新增房源</a>
    <%}%>
      <a href="<%=userCenterUrl%>" class="manage">管理</a>
    </div>
  </div>
  <ul data-bl="sug" data-el="history">
    <%for(var i = 0; i < savedData.length; i++){
      var title = savedData[i].query ? savedData[i].query + '&nbsp;' : '';
      title = title + savedData[i].title.join('&nbsp;');
    %>
      <li>
        <a href="<%=savedData[i].url%>" role="savedSearch" data-log_index="<%=i+1%>" data-log_value="<%=title%>" class="sug--search_item">
          <span class="msgListTitle"><%=title%></span>
          <%if(savedData[i].unread && savedData[i].unread !== 0){%>
          <span class="msgListAdd">新增<%=savedData[i].unread%>套</span>
          <%}%>
        </a>
      </li>
    <%}%>
  </ul>
</script>

<script>
  var hotSearchData = {
    channel:[{"name":"\u4e8c\u624b\u623f","action":"ershoufang","channel":"ershoufang","checked":1,"tipsHot":{"query":[{"string":"\u53e4\u9f99\u516c\u5bd3","url":"http:\/\/xm.lianjia.com\/ershoufang\/c3911058001822\/"},{"string":"\u6c38\u5347\u65b0\u57ce","url":"http:\/\/xm.lianjia.com\/ershoufang\/c3911057447132\/"},{"string":"\u5609\u76db\u8c6a\u56ed","url":"http:\/\/xm.lianjia.com\/ershoufang\/c3911057908838\/"},{"string":"\u534e\u4fa8\u6d77\u666f\u57ce","url":"http:\/\/xm.lianjia.com\/ershoufang\/c3911058020100\/"},{"string":"\u601d\u660e","url":"http:\/\/xm.lianjia.com\/ershoufang\/siming\/"}],"tips":"\u8bf7\u8f93\u5165\u533a\u57df\u3001\u5546\u5708\u6216\u5c0f\u533a\u540d\u5f00\u59cb\u627e\u623f"}},{"name":"\u5c0f\u533a","action":"xiaoqu","channel":"xiaoqu","checked":0,"tipsHot":{"query":[{"string":"\u79b9\u6d32\u5c0a\u6d77","url":"http:\/\/xm.lianjia.com\/xiaoqu\/3911057515697\/"},{"string":"\u6d77\u665f\u7ef4\u591a\u5229\u4e9a","url":"http:\/\/xm.lianjia.com\/xiaoqu\/3911058038838\/"},{"string":"\u9752\u6625\u6d77\u5cb8","url":"http:\/\/xm.lianjia.com\/xiaoqu\/3911265908159265\/"},{"string":"\u5929\u6e56\u57ce\u5929\u6e56","url":"http:\/\/xm.lianjia.com\/xiaoqu\/3911057436176\/"},{"string":"\u4e16\u8302\u6e56\u6ee8\u9996\u5e9c","url":"http:\/\/xm.lianjia.com\/xiaoqu\/rs%E4%B8%96%E8%8C%82%E6%B9%96%E6%BB%A8%E9%A6%96%E5%BA%9C\/"},{"string":"\u79b9\u6d32\u4e2d\u592e\u6d77\u5cb8","url":"http:\/\/xm.lianjia.com\/xiaoqu\/rs%E7%A6%B9%E6%B4%B2%E4%B8%AD%E5%A4%AE%E6%B5%B7%E5%B2%B8\/"}],"tips":"\u8bf7\u8f93\u5165\u5c0f\u533a\u540d\u5f00\u59cb\u67e5\u627e\u5c0f\u533a"}},{"name":"\u65b0\u623f","action":"loupan","channel":"xinfang","checked":0,"tipsHot":{"query":[],"tips":""}},{"name":"\u79df\u623f","action":"zufang","channel":"zufang","checked":0,"tipsHot":{"query":[{"string":"\u6d77\u5ce1\u56fd\u9645\u793e\u533a","url":"http:\/\/xm.lianjia.com\/zufang\/c3911055520921\/"},{"string":"\u65b0\u666f\u56fd\u9645\u5916\u6ee9","url":"http:\/\/xm.lianjia.com\/zufang\/c3911057567022\/"},{"string":"\u79df\u623f   \u6709\u94a5\u5319","url":"http:\/\/xm.lianjia.com\/zufang\/ky1\/"}],"tips":"\u8bf7\u8f93\u5165\u533a\u57df\u3001\u5546\u5708\u6216\u5c0f\u533a\u540d\u5f00\u59cb\u627e\u623f"}},{"name":"\u7ecf\u7eaa\u4eba","action":"jingjiren","channel":"jingjiren","checked":0,"tipsHot":{"query":[],"tips":"\u8bf7\u8f93\u5165\u5546\u5708\u3001\u5c0f\u533a\u6216\u7ecf\u7eaa\u4eba\u7684\u59d3\u540d\u3001\u7535\u8bdd..."}}],
    curChannel:'ershoufang'
  };
</script>
<div class="m-filter">
      <div class="position">
      <dl>
        <h2><dt title="厦门在售位置">位置</dt></h2>
        <dd>
                  <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F&amp;b=4" id="areaTab" class="selected" title="厦门二手房">
            区域<span class="arrow"></span>
          </a>
                                    </dd>
      </dl>
      <dl>
        <dt></dt>
        <dd>
          <!-- 区域 -->
                    <div data-role="ershoufang" >
            <div>
                                                <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco32ng1nb1%2F&amp;b=4" class="selected" title="厦门思明在售二手房 ">思明</a>
                                                                <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fhuli%2Fco32ng1nb1%2F&amp;b=4"  title="厦门湖里在售二手房 ">湖里</a>
                                                                <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fhaicang%2Fco32ng1nb1%2F&amp;b=4"  title="厦门海沧在售二手房 ">海沧</a>
                                                                <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fjimei%2Fco32ng1nb1%2F&amp;b=4"  title="厦门集美在售二手房 ">集美</a>
                                                                <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fxiangan%2Fco32ng1nb1%2F&amp;b=4"  title="厦门翔安在售二手房 ">翔安</a>
                                                                <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Ftongan%2Fco32ng1nb1%2F&amp;b=4"  title="厦门同安在售二手房 ">同安</a>
                                          </div>
                          <div>
                                  <b>B</b>
                                      <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fbinglang%2Fco32ng1nb1%2F&amp;b=4" >槟榔</a>
                                      <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fbindong%2Fco32ng1nb1%2F&amp;b=4" >滨东</a>
                                      <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fbailuzhou%2Fco32ng1nb1%2F&amp;b=4" >白鹭洲</a>
                                                    <b>D</b>
                                      <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fdouxilu%2Fco32ng1nb1%2F&amp;b=4" >斗西路</a>
                                      <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fdongdu%2Fco32ng1nb1%2F&amp;b=4" >东渡</a>
                                                    <b>F</b>
                                      <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Ffushan3%2Fco32ng1nb1%2F&amp;b=4" >富山</a>
                                                    <b>G</b>
                                      <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fgongyuanxiaoxuejizhoubian%2Fco32ng1nb1%2F&amp;b=4" >公园小学及周边</a>
                                      <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fgulangyu%2Fco32ng1nb1%2F&amp;b=4" >鼓浪屿</a>
                                      <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fguanyinshan%2Fco32ng1nb1%2F&amp;b=4" >观音山</a>
                                                    <b>H</b>
                                      <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fhexiangdonglu%2Fco32ng1nb1%2F&amp;b=4" >禾祥东路</a>
                                      <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fhuochezhan4%2Fco32ng1nb1%2F&amp;b=4" >火车站</a>
                                      <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fhuizhanzhongxin%2Fco32ng1nb1%2F&amp;b=4" >会展中心</a>
                                      <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fhexiangxilu%2Fco32ng1nb1%2F&amp;b=4" >禾祥西路</a>
                                      <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fhuangcuo%2Fco32ng1nb1%2F&amp;b=4" >黄厝</a>
                                      <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fhubianshuiku%2Fco32ng1nb1%2F&amp;b=4" >湖边水库</a>
                                                    <b>J</b>
                                      <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fjinshang%2Fco32ng1nb1%2F&amp;b=4" >金尚</a>
                                      <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fjiangtou%2Fco32ng1nb1%2F&amp;b=4" >江头</a>
                                      <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fjinjiting%2Fco32ng1nb1%2F&amp;b=4" >金鸡亭</a>
                                                    <b>L</b>
                                      <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Flianban%2Fco32ng1nb1%2F&amp;b=4" >莲坂</a>
                                      <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Flianqian%2Fco32ng1nb1%2F&amp;b=4" >莲前</a>
                                      <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Flianhuayicun%2Fco32ng1nb1%2F&amp;b=4" >莲花一村</a>
                                      <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Flundu%2Fco32ng1nb1%2F&amp;b=4" >轮渡</a>
                                      <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Flianhua4%2Fco32ng1nb1%2F&amp;b=4" >莲花</a>
                                                    <b>N</b>
                                      <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fnanshanlu%2Fco32ng1nb1%2F&amp;b=4" >南山路</a>
                                                    <b>Q</b>
                                      <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fqixinglu%2Fco32ng1nb1%2F&amp;b=4" >七星路</a>
                                      <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fqianpu%2Fco32ng1nb1%2F&amp;b=4" >前埔</a>
                                                    <b>R</b>
                                      <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fruanjianyuan1%2Fco32ng1nb1%2F&amp;b=4" >软件园</a>
                                      <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fruijing%2Fco32ng1nb1%2F&amp;b=4" >瑞景</a>
                                                    <b>S</b>
                                      <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsibei%2Fco32ng1nb1%2F&amp;b=4" >思北</a>
                                      <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsimingnanlu%2Fco32ng1nb1%2F&amp;b=4" >思明南路</a>
                                      <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fshiyanxiaoxuejizhoubian%2Fco32ng1nb1%2F&amp;b=4" >实验小学及周边</a>
                                      <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsongbai%2Fco32ng1nb1%2F&amp;b=4" >松柏</a>
                                      <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fshizhengfu2%2Fco32ng1nb1%2F&amp;b=4" >市政府</a>
                                      <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fshada%2Fco32ng1nb1%2F&amp;b=4" >厦大</a>
                                      <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsm%2Fco32ng1nb1%2F&amp;b=4" >SM</a>
                                                    <b>T</b>
                                      <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Ftiyuzhongxin1%2Fco32ng1nb1%2F&amp;b=4" >体育中心</a>
                                                    <b>W</b>
                                      <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fwaiguoyuxuexiao%2Fco32ng1nb1%2F&amp;b=4" >外国语学校</a>
                                      <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fwenyuanlu%2Fco32ng1nb1%2F&amp;b=4" >文园路</a>
                                      <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fwenzao%2Fco32ng1nb1%2F&amp;b=4" >文灶</a>
                                                    <b>X</b>
                                      <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fxianyueshequ%2Fco32ng1nb1%2F&amp;b=4" >仙岳社区</a>
                                                    <b>Y</b>
                                      <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fyueyangshequ%2Fco32ng1nb1%2F&amp;b=4" >岳阳社区</a>
                                      <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fyouluncheng%2Fco32ng1nb1%2F&amp;b=4" >邮轮城</a>
                                                    <b>Z</b>
                                      <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fzhongshanlu%2Fco32ng1nb1%2F&amp;b=4" >中山路</a>
                                                </div>
                      </div>
                    <!-- 地铁 -->
                    <!-- 学区 -->
                  </dd>
      </dl>
    </div>

  <div class="list-more">
                                                                                                                                                                                                                                          <dl class=" hasmore" >
          <h2><dt title="厦门售价在售二手房">售价</dt></h2>
          <dd>
                                                                                                                  <a href="" class="nolink" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">100万以下</span>
                              </a>
                                                                    <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco32ng1nb1p2%2F&amp;b=4" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">100-200万</span>
                                  <span class="cnt">(26)</span>
                              </a>
                                                                    <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco32ng1nb1p3%2F&amp;b=4" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">200-300万</span>
                                  <span class="cnt">(142)</span>
                              </a>
                                                                    <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco32ng1nb1p4%2F&amp;b=4" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">300-400万</span>
                                  <span class="cnt">(331)</span>
                              </a>
                                                                    <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco32ng1nb1p5%2F&amp;b=4" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">400-500万</span>
                                  <span class="cnt">(246)</span>
                              </a>
                                                                    <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco32ng1nb1p6%2F&amp;b=4" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">500-800万</span>
                                  <span class="cnt">(543)</span>
                              </a>
                                                                    <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco32ng1nb1p7%2F&amp;b=4" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">800万以上</span>
                                  <span class="cnt">(378)</span>
                              </a>
                                                              <span class="customFilter mt" data-role="price">
                <input type="text" role="minValue" value="">
                <span>-</span>
                <input type="text" role="maxValue" value="">&nbsp;
                                  <span>万</span>
                                <button class="btn-range hide" data-url="/ershoufang/siming/co32ng1nb1bp{min}ep{max}/">确定</button>
              </span>
                                                  <span class="btn-showmore">+ 更多及自定义</span>
                      </dd>
        </dl>
                                                                                                                                                                                                                                  <dl class=" hasmore" >
          <h2><dt title="厦门面积在售二手房">面积</dt></h2>
          <dd>
                                                                    <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco32ng1nb1a1%2F&amp;b=4" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">50平以下</span>
                                  <span class="cnt">(202)</span>
                              </a>
                                                                    <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco32ng1nb1a2%2F&amp;b=4" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">50-70平</span>
                                  <span class="cnt">(254)</span>
                              </a>
                                                                    <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco32ng1nb1a3%2F&amp;b=4" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">70-90平</span>
                                  <span class="cnt">(328)</span>
                              </a>
                                                                    <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco32ng1nb1a4%2F&amp;b=4" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">90-110平</span>
                                  <span class="cnt">(221)</span>
                              </a>
                                                                    <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco32ng1nb1a5%2F&amp;b=4" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">110-130平</span>
                                  <span class="cnt">(188)</span>
                              </a>
                                                                    <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco32ng1nb1a6%2F&amp;b=4" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">130-150平</span>
                                  <span class="cnt">(165)</span>
                              </a>
                                                                    <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco32ng1nb1a7%2F&amp;b=4" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">150-200平</span>
                                  <span class="cnt">(210)</span>
                              </a>
                                                                    <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco32ng1nb1a8%2F&amp;b=4" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">200平以上</span>
                                  <span class="cnt">(98)</span>
                              </a>
                                                              <span class="customFilter mt" data-role="area">
                <input type="text" role="minValue" value="">
                <span>-</span>
                <input type="text" role="maxValue" value="">&nbsp;
                                  <span>平</span>
                                <button class="btn-range hide" data-url="/ershoufang/siming/co32ng1nb1ba{min}ea{max}/">确定</button>
              </span>
                                                  <span class="btn-showmore">+ 更多及自定义</span>
                      </dd>
        </dl>
                                                                                                                                                                            <dl class=" " >
          <h2><dt title="厦门房型在售二手房">房型</dt></h2>
          <dd>
                                                                    <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco32ng1nb1l1%2F&amp;b=4" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">一室</span>
                                  <span class="cnt">(236)</span>
                              </a>
                                                                    <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco32ng1nb1l2%2F&amp;b=4" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">二室</span>
                                  <span class="cnt">(506)</span>
                              </a>
                                                                    <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco32ng1nb1l3%2F&amp;b=4" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">三室</span>
                                  <span class="cnt">(615)</span>
                              </a>
                                                                    <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco32ng1nb1l4%2F&amp;b=4" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">四室</span>
                                  <span class="cnt">(204)</span>
                              </a>
                                                                    <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco32ng1nb1l5%2F&amp;b=4" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">五室</span>
                                  <span class="cnt">(54)</span>
                              </a>
                                                                    <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco32ng1nb1l6%2F&amp;b=4" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">五室以上</span>
                                  <span class="cnt">(51)</span>
                              </a>
                                                          </dd>
        </dl>
                                                                                                                                        <dl class="hide " data-role="hide-row">
          <h2><dt title="厦门用途在售二手房">用途</dt></h2>
          <dd>
                                                                    <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco32ng1nb1sf1%2F&amp;b=4" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">普通住宅</span>
                                  <span class="cnt">(1648)</span>
                              </a>
                                                                    <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco32ng1nb1sf3%2F&amp;b=4" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">别墅</span>
                                  <span class="cnt">(18)</span>
                              </a>
                                                                                                                  <a href="" class="nolink" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">四合院</span>
                              </a>
                                                                                                                  <a href="" class="nolink" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">其他</span>
                              </a>
                                                          </dd>
        </dl>
                                                                                                                                        <dl class="hide " data-role="hide-row">
          <h2><dt title="厦门权属在售二手房">权属</dt></h2>
          <dd>
                                                                    <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco32ng1nb1dp1%2F&amp;b=4" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">商品房</span>
                                  <span class="cnt">(1593)</span>
                              </a>
                                                                                                                  <a href="" class="nolink" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">公房</span>
                              </a>
                                                                    <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco32ng1nb1dp3%2F&amp;b=4" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">经适房</span>
                                  <span class="cnt">(6)</span>
                              </a>
                                                                    <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco32ng1nb1dp4%2F&amp;b=4" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">其他</span>
                                  <span class="cnt">(67)</span>
                              </a>
                                                          </dd>
        </dl>
                                                                                                                      <dl class="hide " data-role="hide-row">
          <h2><dt title="厦门楼层在售二手房">楼层</dt></h2>
          <dd>
                                                                    <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco32ng1nb1lc1%2F&amp;b=4" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">低楼层</span>
                                  <span class="cnt">(494)</span>
                              </a>
                                                                    <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco32ng1nb1lc2%2F&amp;b=4" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">中楼层</span>
                                  <span class="cnt">(631)</span>
                              </a>
                                                                    <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco32ng1nb1lc3%2F&amp;b=4" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">高楼层</span>
                                  <span class="cnt">(541)</span>
                              </a>
                                                          </dd>
        </dl>
                                                                                                                                                          <dl class="hide " data-role="hide-row">
          <h2><dt title="厦门朝向在售二手房">朝向</dt></h2>
          <dd>
                                                                    <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco32ng1nb1f1%2F&amp;b=4" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">朝东</span>
                                  <span class="cnt">(373)</span>
                              </a>
                                                                    <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco32ng1nb1f2%2F&amp;b=4" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">朝南</span>
                                  <span class="cnt">(1297)</span>
                              </a>
                                                                    <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco32ng1nb1f3%2F&amp;b=4" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">朝西</span>
                                  <span class="cnt">(264)</span>
                              </a>
                                                                    <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco32ng1nb1f4%2F&amp;b=4" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">朝北</span>
                                  <span class="cnt">(953)</span>
                              </a>
                                                                    <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco32ng1nb1f5%2F&amp;b=4" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">南北</span>
                                  <span class="cnt">(661)</span>
                              </a>
                                                          </dd>
        </dl>
                                                                                                                                                          <dl class="hide " data-role="hide-row">
          <h2><dt title="厦门楼龄在售二手房">楼龄</dt></h2>
          <dd>
                                                                    <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco32ng1nb1y1%2F&amp;b=4" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">5年以内</span>
                                  <span class="cnt">(29)</span>
                              </a>
                                                                    <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco32ng1nb1y2%2F&amp;b=4" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">10年以内</span>
                                  <span class="cnt">(298)</span>
                              </a>
                                                                    <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco32ng1nb1y3%2F&amp;b=4" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">15年以内</span>
                                  <span class="cnt">(795)</span>
                              </a>
                                                                    <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco32ng1nb1y4%2F&amp;b=4" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">20年以内</span>
                                  <span class="cnt">(1247)</span>
                              </a>
                                                                    <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco32ng1nb1y5%2F&amp;b=4" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">20年以上</span>
                                  <span class="cnt">(235)</span>
                              </a>
                                                          </dd>
        </dl>
                                                                                                                      <dl class="hide " data-role="hide-row">
          <h2><dt title="厦门类型在售二手房">类型</dt></h2>
          <dd>
                                                                    <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco32ng1nb1bt1%2F&amp;b=4" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">塔楼</span>
                                  <span class="cnt">(400)</span>
                              </a>
                                                                    <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco32ng1nb1bt2%2F&amp;b=4" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">板楼</span>
                                  <span class="cnt">(1138)</span>
                              </a>
                                                                    <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco32ng1nb1bt3%2F&amp;b=4" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">板塔结合</span>
                                  <span class="cnt">(73)</span>
                              </a>
                                                          </dd>
        </dl>
                                                                                                    <dl class="hide " data-role="hide-row">
          <h2><dt title="厦门电梯在售二手房">电梯</dt></h2>
          <dd>
                                                                    <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco32ng1nb1ie2%2F&amp;b=4" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">有电梯</span>
                                  <span class="cnt">(858)</span>
                              </a>
                                                                    <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco32ng1nb1ie1%2F&amp;b=4" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">无电梯</span>
                                  <span class="cnt">(434)</span>
                              </a>
                                                          </dd>
        </dl>
                                                                                                                      <dl class="hide " data-role="hide-row">
          <h2><dt title="厦门装修在售二手房">装修</dt></h2>
          <dd>
                                                                    <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco32ng1nb1de1%2F&amp;b=4" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">精装修</span>
                                  <span class="cnt">(653)</span>
                              </a>
                                                                    <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco32ng1nb1de2%2F&amp;b=4" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">普通装修</span>
                                  <span class="cnt">(830)</span>
                              </a>
                                                                    <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco32ng1nb1de3%2F&amp;b=4" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">毛坯房</span>
                                  <span class="cnt">(57)</span>
                              </a>
                                                          </dd>
        </dl>
                  <dl class="hide otherItem" data-role="hide-row">
      <dt class="other">其他</dt>
      <dd>
      <form id="otherSearchForm" method="post"><input type="hidden" name="convertGET" value="1">
        <input class="inp-search" type="text" value="" placeholder="在结果中搜索">
        <button type="submit" class="btn-search">确定</button>
      </form>
      </dd>
    </dl>
      </div>
    <div class="more btn-more">更多选项<span class="arrow"></span></div>
  </div>
<div class="content "><!-- 左侧内容 --><div class="leftContent"><div class="orderFilter"><div class="orderTag"><ul><li ><h3><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fng1nb1%2F&amp;b=4">默认排序</span></a></h3></li><li class='selected'><h3><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco32ng1nb1%2F&amp;b=4">最新发布</span></a></h3></li><li ><h3><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco21ng1nb1%2F&amp;b=4">房屋总价</a></h3></li><li ><h3><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco41ng1nb1%2F&amp;b=4">房屋单价</a></h3></li><li ><h3><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco11ng1nb1%2F&amp;b=4">房屋面积</a></h3></li><li ><h3><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco52ng1nb1%2F&amp;b=4">带看较多</span></a></h3></li></ul><div class="orderType" id="switchView"><span class="list" title="列表模式"></span><span class="img" title="大图模式"></span></div></div><div class="filterAgain"><div class="title">筛选：</div><ul><li ><h3><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco32ng1nb1ty1%2F&amp;b=4"><span class="checkbox"></span>满两年</a></h3></li><li ><h3><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco32ng1nb1mw1%2F&amp;b=4"><span class="checkbox"></span>满五年</a></h3></li><li ><h3><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco32ng1nb1tt2%2F&amp;b=4"><span class="checkbox"></span>新上</a></h3></li><li ><h3><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco32ng1nb1tt4%2F&amp;b=4"><span class="checkbox"></span>随时看房<div class="info"><i></i><div class="infoContent min-wid">经纪人持有该房源钥匙，您可以随时预约看房</div></div></a></h3></li><li class="selected"><h3><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco32ng1%2F&amp;b=4"><span class="checkbox"></span>不看地下室</a></h3></li><li class="selected"><h3><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2Fco32nb1%2F&amp;b=4"><span class="checkbox"></span>不看车位</a></h3></li></ul></div></div><div class="resultDes clear"><h2 class="total fl">共找到<span> 1666 </span>套厦门二手房</h2><div class="button fr"><div class="clearBtn hide"><script>with(document)write('<a href="/ershoufang/"><span></span>清空条件</a>');</script></div><div class="saveBtn"><a href="" id="saveBtn"><span></span>保存搜索</a></div></div></div><div id="newAddHouseContainer"></div><div class="listContentLine"></div><ul class="sellListContent" log-mod="list"><li class="clear"><a class="img " href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100737092.html&amp;b=4" target="_blank"data-log_index="1" data-el="ershoufang" data-housecode="105100737092" data-is_focus="" data-sl=""><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original="/350200-inspection/916e5ac3-09a0-41f7-bf3a-58c3ea81d91d.jpg.232x174.jpg" alt="海峡国际社区二期 1室2厅 850万"></a><div class="info clear"><div class="title"><a class="" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100737092.html&amp;b=4" target="_blank" data-log_index="1"   data-el="ershoufang" data-housecode="105100737092" data-is_focus=""   data-sl="">海峡国际社区二期 1室2厅 850万</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fxiaoqu%2F3911063943127%2F&amp;b=4" target="_blank" data-log_index="1" data-el="region">海峡国际社区二期 </a> | 1室2厅 | 92.89平米 | 西南 | 精装 | 有电梯</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>高楼层(共24层)2009年建板楼  -  <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fhuizhanzhongxin%2F&amp;b=4" target="_blank">会展中心</a></div></div><div class="followInfo"><span class="starIcon"></span>3人关注 / 共5次带看 / 2个月以前发布</div><div class="tag"><span class="five">房本满两年</span></div><div class="priceInfo"><div class="totalPrice"><span>850</span>万</div><div class="unitPrice" data-hid="105100737092" data-rid="3911063943127" data-price="91507"><span>单价91507元/平米</span></div></div></div><div class="listButtonContainer"><div class="btn-follow followBtn" data-hid="105100737092"><span class="follow-text">关注</span></div><div class="compareBtn LOGCLICK" data-hid="105100737092" log-mod="105100737092" data-log_evtid="10230">加入对比</div></div></li><li class="clear"><a class="img " href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100736901.html&amp;b=4" target="_blank"data-log_index="2" data-el="ershoufang" data-housecode="105100736901" data-is_focus="" data-sl=""><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original="" alt="松柏一代风华 小户型 朝南....."></a><div class="info clear"><div class="title"><a class="" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100736901.html&amp;b=4" target="_blank" data-log_index="2"   data-el="ershoufang" data-housecode="105100736901" data-is_focus=""   data-sl="">松柏一代风华 小户型 朝南.....</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fxiaoqu%2F3911057156497%2F&amp;b=4" target="_blank" data-log_index="2" data-el="region">一代风华 </a> | 1室1厅 | 30.46平米 | 南 | 简装</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>高楼层(共19层)2007年建板楼  -  <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsongbai%2F&amp;b=4" target="_blank">松柏</a></div></div><div class="followInfo"><span class="starIcon"></span>2人关注 / 共0次带看 / 2个月以前发布</div><div class="tag"></div><div class="priceInfo"><div class="totalPrice"><span>219</span>万</div><div class="unitPrice" data-hid="105100736901" data-rid="3911057156497" data-price="71898"><span>单价71898元/平米</span></div></div></div><div class="listButtonContainer"><div class="btn-follow followBtn" data-hid="105100736901"><span class="follow-text">关注</span></div><div class="compareBtn LOGCLICK" data-hid="105100736901" log-mod="105100736901" data-log_evtid="10230">加入对比</div></div></li><li class="clear"><a class="img " href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100736801.html&amp;b=4" target="_blank"data-log_index="3" data-el="ershoufang" data-housecode="105100736801" data-is_focus="" data-sl=""><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original="/350200-inspection/617278c7-b596-409a-afac-18a103eb1697.jpg.232x174.jpg" alt="嘉盛户型方正 四房 南北通风 莲前 瑞景 侨福城 福满"></a><div class="info clear"><div class="title"><a class="" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100736801.html&amp;b=4" target="_blank" data-log_index="3"   data-el="ershoufang" data-housecode="105100736801" data-is_focus=""   data-sl="">嘉盛户型方正 四房 南北通风 莲前 瑞景 侨福城 福满</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fxiaoqu%2F3911057927513%2F&amp;b=4" target="_blank" data-log_index="3" data-el="region">嘉盛豪园G组团 </a> | 4室2厅 | 159平米 | 北 | 精装 | 有电梯</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>低楼层(共18层)2009年建板楼  -  <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fruijing%2F&amp;b=4" target="_blank">瑞景</a></div></div><div class="followInfo"><span class="starIcon"></span>3人关注 / 共0次带看 / 2个月以前发布</div><div class="tag"><span class="five">房本满两年</span></div><div class="priceInfo"><div class="totalPrice"><span>848</span>万</div><div class="unitPrice" data-hid="105100736801" data-rid="3911057927513" data-price="53334"><span>单价53334元/平米</span></div></div></div><div class="listButtonContainer"><div class="btn-follow followBtn" data-hid="105100736801"><span class="follow-text">关注</span></div><div class="compareBtn LOGCLICK" data-hid="105100736801" log-mod="105100736801" data-log_evtid="10230">加入对比</div></div></li><li class="clear"><a class="img " href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100736602.html&amp;b=4" target="_blank"data-log_index="4" data-el="ershoufang" data-housecode="105100736602" data-is_focus="" data-sl=""><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original="/350200-inspection/08ffb3c9-2b88-4c92-b3e7-a6e5753bef8c.jpg.232x174.jpg" alt="新莲岳里3房 南北通透格局 满5年 户型方正 楼层适中"></a><div class="info clear"><div class="title"><a class="" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100736602.html&amp;b=4" target="_blank" data-log_index="4"   data-el="ershoufang" data-housecode="105100736602" data-is_focus=""   data-sl="">新莲岳里3房 南北通透格局 满5年 户型方正 楼层适中</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fxiaoqu%2F3911056688012%2F&amp;b=4" target="_blank" data-log_index="4" data-el="region">莲岳里小区东区 </a> | 3室1厅 | 78.97平米 | 南 北 | 简装 | 无电梯</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>中楼层(共7层)1995年建板楼  -  <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsongbai%2F&amp;b=4" target="_blank">松柏</a></div></div><div class="followInfo"><span class="starIcon"></span>13人关注 / 共10次带看 / 2个月以前发布</div><div class="tag"><span class="taxfree">房本满五年</span><span class="haskey">随时看房</span></div><div class="priceInfo"><div class="totalPrice"><span>465</span>万</div><div class="unitPrice" data-hid="105100736602" data-rid="3911056688012" data-price="58884"><span>单价58884元/平米</span></div></div></div><div class="listButtonContainer"><div class="btn-follow followBtn" data-hid="105100736602"><span class="follow-text">关注</span></div><div class="compareBtn LOGCLICK" data-hid="105100736602" log-mod="105100736602" data-log_evtid="10230">加入对比</div></div></li><li class="clear"><a class="img " href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100736551.html&amp;b=4" target="_blank"data-log_index="5" data-el="ershoufang" data-housecode="105100736551" data-is_focus="" data-sl=""><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original="/350200-inspection/1739de1d-6e08-4719-931c-b8c114aa73bc.jpg.232x174.jpg" alt="松柏 居家两居室 电梯房 拎包入住 看房预约"></a><div class="info clear"><div class="title"><a class="" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100736551.html&amp;b=4" target="_blank" data-log_index="5"   data-el="ershoufang" data-housecode="105100736551" data-is_focus=""   data-sl="">松柏 居家两居室 电梯房 拎包入住 看房预约</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fxiaoqu%2F3911099497788%2F&amp;b=4" target="_blank" data-log_index="5" data-el="region">摩登时代 </a> | 2室1厅 | 54平米 | 北 | 精装 | 有电梯</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>低楼层(共30层)2006年建板楼  -  <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsongbai%2F&amp;b=4" target="_blank">松柏</a></div></div><div class="followInfo"><span class="starIcon"></span>2人关注 / 共0次带看 / 2个月以前发布</div><div class="tag"></div><div class="priceInfo"><div class="totalPrice"><span>333</span>万</div><div class="unitPrice" data-hid="105100736551" data-rid="3911099497788" data-price="61667"><span>单价61667元/平米</span></div></div></div><div class="listButtonContainer"><div class="btn-follow followBtn" data-hid="105100736551"><span class="follow-text">关注</span></div><div class="compareBtn LOGCLICK" data-hid="105100736551" log-mod="105100736551" data-log_evtid="10230">加入对比</div></div></li><li class="clear"><a class="img " href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100736531.html&amp;b=4" target="_blank"data-log_index="6" data-el="ershoufang" data-housecode="105100736531" data-is_focus="" data-sl=""><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original="/350200-inspection/7d4501b2-9bae-402b-8480-3fde081e36a3.jpg.232x174.jpg" alt="此房户型满两年，南北通透双阳台 正看中庭"></a><div class="info clear"><div class="title"><a class="" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100736531.html&amp;b=4" target="_blank" data-log_index="6"   data-el="ershoufang" data-housecode="105100736531" data-is_focus=""   data-sl="">此房户型满两年，南北通透双阳台 正看中庭</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fxiaoqu%2F3911057929824%2F&amp;b=4" target="_blank" data-log_index="6" data-el="region">联丰新城 </a> | 3室2厅 | 132平米 | 南 西 北 | 简装 | 有电梯</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>低楼层(共18层)2008年建板楼  -  <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fruijing%2F&amp;b=4" target="_blank">瑞景</a></div></div><div class="followInfo"><span class="starIcon"></span>4人关注 / 共2次带看 / 2个月以前发布</div><div class="tag"></div><div class="priceInfo"><div class="totalPrice"><span>710</span>万</div><div class="unitPrice" data-hid="105100736531" data-rid="3911057929824" data-price="53788"><span>单价53788元/平米</span></div></div></div><div class="listButtonContainer"><div class="btn-follow followBtn" data-hid="105100736531"><span class="follow-text">关注</span></div><div class="compareBtn LOGCLICK" data-hid="105100736531" log-mod="105100736531" data-log_evtid="10230">加入对比</div></div></li><li class="clear"><a class="img " href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100736330.html&amp;b=4" target="_blank"data-log_index="7" data-el="ershoufang" data-housecode="105100736330" data-is_focus="" data-sl=""><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original="/350200-inspection/ac7ca62c-c11e-4d2f-9607-6a40091f0c07.jpg.232x174.jpg" alt="莲坂文化大厦 电梯高层 07年精装小两房"></a><div class="info clear"><div class="title"><a class="" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100736330.html&amp;b=4" target="_blank" data-log_index="7"   data-el="ershoufang" data-housecode="105100736330" data-is_focus=""   data-sl="">莲坂文化大厦 电梯高层 07年精装小两房</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fxiaoqu%2F3911057749906%2F&amp;b=4" target="_blank" data-log_index="7" data-el="region">文化大厦 </a> | 2室1厅 | 50.81平米 | 北 | 精装 | 有电梯</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>中楼层(共31层)2005年建板楼  -  <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Flianban%2F&amp;b=4" target="_blank">莲坂</a></div></div><div class="followInfo"><span class="starIcon"></span>5人关注 / 共2次带看 / 2个月以前发布</div><div class="tag"></div><div class="priceInfo"><div class="totalPrice"><span>305</span>万</div><div class="unitPrice" data-hid="105100736330" data-rid="3911057749906" data-price="60028"><span>单价60028元/平米</span></div></div></div><div class="listButtonContainer"><div class="btn-follow followBtn" data-hid="105100736330"><span class="follow-text">关注</span></div><div class="compareBtn LOGCLICK" data-hid="105100736330" log-mod="105100736330" data-log_evtid="10230">加入对比</div></div></li><li class="clear"><a class="img " href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100736310.html&amp;b=4" target="_blank"data-log_index="8" data-el="ershoufang" data-housecode="105100736310" data-is_focus="" data-sl=""><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original="/350200-inspection/f7467d48-d542-40e2-8dbc-b9581820287d.jpg.232x174.jpg" alt="华林品质  06年小区 厅带阳台朝南 全明格局"></a><div class="info clear"><div class="title"><a class="" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100736310.html&amp;b=4" target="_blank" data-log_index="8"   data-el="ershoufang" data-housecode="105100736310" data-is_focus=""   data-sl="">华林品质  06年小区 厅带阳台朝南 全明格局</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fxiaoqu%2F3911057675411%2F&amp;b=4" target="_blank" data-log_index="8" data-el="region">华林东盛花园二期 </a> | 2室2厅 | 80.31平米 | 南 | 简装 | 无电梯</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>中楼层(共6层)2006年建板楼  -  <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fqianpu%2F&amp;b=4" target="_blank">前埔</a></div></div><div class="followInfo"><span class="starIcon"></span>15人关注 / 共4次带看 / 2个月以前发布</div><div class="tag"><span class="five">房本满两年</span></div><div class="priceInfo"><div class="totalPrice"><span>450</span>万</div><div class="unitPrice" data-hid="105100736310" data-rid="3911057675411" data-price="56033"><span>单价56033元/平米</span></div></div></div><div class="listButtonContainer"><div class="btn-follow followBtn" data-hid="105100736310"><span class="follow-text">关注</span></div><div class="compareBtn LOGCLICK" data-hid="105100736310" log-mod="105100736310" data-log_evtid="10230">加入对比</div></div></li><li class="clear"><a class="img " href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100736230.html&amp;b=4" target="_blank"data-log_index="9" data-el="ershoufang" data-housecode="105100736230" data-is_focus="" data-sl=""><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original="/350200-inspection/830a04cb-ffd4-4b56-9747-f608657a3b4e.jpg.232x174.jpg" alt="龙山山庄山木清华满五年电梯房大四居"></a><div class="info clear"><div class="title"><a class="" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100736230.html&amp;b=4" target="_blank" data-log_index="9"   data-el="ershoufang" data-housecode="105100736230" data-is_focus=""   data-sl="">龙山山庄山木清华满五年电梯房大四居</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fxiaoqu%2F3911057933054%2F&amp;b=4" target="_blank" data-log_index="9" data-el="region">龙山山庄 </a> | 4室2厅 | 132.19平米 | 南 北 | 精装 | 有电梯</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>低楼层(共17层)2000年建板楼  -  <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Flianqian%2F&amp;b=4" target="_blank">莲前</a></div></div><div class="followInfo"><span class="starIcon"></span>3人关注 / 共0次带看 / 2个月以前发布</div><div class="tag"><span class="taxfree">房本满五年</span></div><div class="priceInfo"><div class="totalPrice"><span>770</span>万</div><div class="unitPrice" data-hid="105100736230" data-rid="3911057933054" data-price="58250"><span>单价58250元/平米</span></div></div></div><div class="listButtonContainer"><div class="btn-follow followBtn" data-hid="105100736230"><span class="follow-text">关注</span></div><div class="compareBtn LOGCLICK" data-hid="105100736230" log-mod="105100736230" data-log_evtid="10230">加入对比</div></div></li><li class="clear"><a class="img " href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100736210.html&amp;b=4" target="_blank"data-log_index="10" data-el="ershoufang" data-housecode="105100736210" data-is_focus="" data-sl=""><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original="/350200-inspection/d0a16b20-28b9-4c91-936a-0679b421d5ce.jpg.232x174.jpg" alt="瑞景新村 经典两房户型 稳定在售"></a><div class="info clear"><div class="title"><a class="" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100736210.html&amp;b=4" target="_blank" data-log_index="10"   data-el="ershoufang" data-housecode="105100736210" data-is_focus=""   data-sl="">瑞景新村 经典两房户型 稳定在售</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fxiaoqu%2F3911055729001%2F&amp;b=4" target="_blank" data-log_index="10" data-el="region">瑞景新村寿鹤苑 </a> | 2室2厅 | 82.82平米 | 南 北 | 简装 | 无电梯</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>高楼层(共6层)1998年建板楼  -  <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fruijing%2F&amp;b=4" target="_blank">瑞景</a></div></div><div class="followInfo"><span class="starIcon"></span>0人关注 / 共0次带看 / 2个月以前发布</div><div class="tag"><span class="taxfree">房本满五年</span></div><div class="priceInfo"><div class="totalPrice"><span>500</span>万</div><div class="unitPrice" data-hid="105100736210" data-rid="3911055729001" data-price="60372"><span>单价60372元/平米</span></div></div></div><div class="listButtonContainer"><div class="btn-follow followBtn" data-hid="105100736210"><span class="follow-text">关注</span></div><div class="compareBtn LOGCLICK" data-hid="105100736210" log-mod="105100736210" data-log_evtid="10230">加入对比</div></div></li><li class="clear"><a class="img " href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100736052.html&amp;b=4" target="_blank"data-log_index="11" data-el="ershoufang" data-housecode="105100736052" data-is_focus="" data-sl=""><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original="/350200-inspection/71d2eea3-68ab-4f5e-be1d-771af9dda448.jpg.232x174.jpg" alt="联丰瑞园 南北通透 交通便利 前排采光好"></a><div class="info clear"><div class="title"><a class="" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100736052.html&amp;b=4" target="_blank" data-log_index="11"   data-el="ershoufang" data-housecode="105100736052" data-is_focus=""   data-sl="">联丰瑞园 南北通透 交通便利 前排采光好</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fxiaoqu%2F3911057677958%2F&amp;b=4" target="_blank" data-log_index="11" data-el="region">联丰商城二期 </a> | 2室2厅 | 81平米 | 南 北 | 简装 | 有电梯</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>高楼层(共10层)2001年建塔楼  -  <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fruijing%2F&amp;b=4" target="_blank">瑞景</a></div></div><div class="followInfo"><span class="starIcon"></span>1人关注 / 共2次带看 / 2个月以前发布</div><div class="tag"><span class="five">房本满两年</span></div><div class="priceInfo"><div class="totalPrice"><span>438</span>万</div><div class="unitPrice" data-hid="105100736052" data-rid="3911057677958" data-price="54075"><span>单价54075元/平米</span></div></div></div><div class="listButtonContainer"><div class="btn-follow followBtn" data-hid="105100736052"><span class="follow-text">关注</span></div><div class="compareBtn LOGCLICK" data-hid="105100736052" log-mod="105100736052" data-log_evtid="10230">加入对比</div></div></li><li class="clear"><a class="img " href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100736008.html&amp;b=4" target="_blank"data-log_index="12" data-el="ershoufang" data-housecode="105100736008" data-is_focus="" data-sl=""><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original="/350200-inspection/034ef185-5fb1-435b-9a47-3ba7f2da0cd8.jpg.232x174.jpg" alt="火车站 繁华商圈 满两年 无贷款 楼中楼"></a><div class="info clear"><div class="title"><a class="" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100736008.html&amp;b=4" target="_blank" data-log_index="12"   data-el="ershoufang" data-housecode="105100736008" data-is_focus=""   data-sl="">火车站 繁华商圈 满两年 无贷款 楼中楼</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fxiaoqu%2F3911063909527%2F&amp;b=4" target="_blank" data-log_index="12" data-el="region">官邸大厦思明 </a> | 1室1厅 | 49.3平米 | 北 | 简装 | 有电梯</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>中楼层(共16层)2005年建塔楼  -  <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Ffushan3%2F&amp;b=4" target="_blank">富山</a></div></div><div class="followInfo"><span class="starIcon"></span>1人关注 / 共0次带看 / 2个月以前发布</div><div class="tag"><span class="taxfree">房本满五年</span></div><div class="priceInfo"><div class="totalPrice"><span>410</span>万</div><div class="unitPrice" data-hid="105100736008" data-rid="3911063909527" data-price="83165"><span>单价83165元/平米</span></div></div></div><div class="listButtonContainer"><div class="btn-follow followBtn" data-hid="105100736008"><span class="follow-text">关注</span></div><div class="compareBtn LOGCLICK" data-hid="105100736008" log-mod="105100736008" data-log_evtid="10230">加入对比</div></div></li><li class="clear"><a class="img " href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100735932.html&amp;b=4" target="_blank"data-log_index="13" data-el="ershoufang" data-housecode="105100735932" data-is_focus="" data-sl=""><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original="/350200-inspection/2b2b88e6-caf4-4dbf-91dd-7c86764002cd.jpg.232x174.jpg" alt="槟榔西里，6楼和7楼打通做成楼中楼，附带大露台！"></a><div class="info clear"><div class="title"><a class="" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100735932.html&amp;b=4" target="_blank" data-log_index="13"   data-el="ershoufang" data-housecode="105100735932" data-is_focus=""   data-sl="">槟榔西里，6楼和7楼打通做成楼中楼，附带大露台！</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fxiaoqu%2F3911054858408%2F&amp;b=4" target="_blank" data-log_index="13" data-el="region">槟榔西里双号区 </a> | 4室2厅 | 60平米 | 南 | 简装 | 无电梯</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>高楼层(共6层)1989年建板楼  -  <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fbinglang%2F&amp;b=4" target="_blank">槟榔</a></div></div><div class="followInfo"><span class="starIcon"></span>21人关注 / 共11次带看 / 2个月以前发布</div><div class="tag"><span class="haskey">随时看房</span></div><div class="priceInfo"><div class="totalPrice"><span>398</span>万</div><div class="unitPrice" data-hid="105100735932" data-rid="3911054858408" data-price="66334"><span>单价66334元/平米</span></div></div></div><div class="listButtonContainer"><div class="btn-follow followBtn" data-hid="105100735932"><span class="follow-text">关注</span></div><div class="compareBtn LOGCLICK" data-hid="105100735932" log-mod="105100735932" data-log_evtid="10230">加入对比</div></div></li><li class="clear"><a class="img " href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100735876.html&amp;b=4" target="_blank"data-log_index="14" data-el="ershoufang" data-housecode="105100735876" data-is_focus="" data-sl=""><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original="/350200-inspection/9fc1b192-f1b3-4c8d-879f-ff88b40b1a92.jpg.232x174.jpg" alt="两房格局 南北向 高层 采光好 屿后南里"></a><div class="info clear"><div class="title"><a class="" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100735876.html&amp;b=4" target="_blank" data-log_index="14"   data-el="ershoufang" data-housecode="105100735876" data-is_focus=""   data-sl="">两房格局 南北向 高层 采光好 屿后南里</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fxiaoqu%2F3911057156519%2F&amp;b=4" target="_blank" data-log_index="14" data-el="region">毅宏花园 </a> | 2室1厅 | 73.14平米 | 南 北 | 精装 | 无电梯</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>中楼层(共8层)1996年建塔楼  -  <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsongbai%2F&amp;b=4" target="_blank">松柏</a></div></div><div class="followInfo"><span class="starIcon"></span>12人关注 / 共8次带看 / 2个月以前发布</div><div class="tag"><span class="haskey">随时看房</span></div><div class="priceInfo"><div class="totalPrice"><span>420</span>万</div><div class="unitPrice" data-hid="105100735876" data-rid="3911057156519" data-price="57425"><span>单价57425元/平米</span></div></div></div><div class="listButtonContainer"><div class="btn-follow followBtn" data-hid="105100735876"><span class="follow-text">关注</span></div><div class="compareBtn LOGCLICK" data-hid="105100735876" log-mod="105100735876" data-log_evtid="10230">加入对比</div></div></li><li class="clear"><a class="img " href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100735806.html&amp;b=4" target="_blank"data-log_index="15" data-el="ershoufang" data-housecode="105100735806" data-is_focus="" data-sl=""><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original="/350200-inspection/af2fe8ea-9879-4ba7-aa62-9a5c4b01a312.jpg.232x174.jpg" alt="华林东盛二期  电梯业主自住精装房  好房出售"></a><div class="info clear"><div class="title"><a class="" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100735806.html&amp;b=4" target="_blank" data-log_index="15"   data-el="ershoufang" data-housecode="105100735806" data-is_focus=""   data-sl="">华林东盛二期  电梯业主自住精装房  好房出售</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fxiaoqu%2F3911057675411%2F&amp;b=4" target="_blank" data-log_index="15" data-el="region">华林东盛花园二期 </a> | 1室2厅 | 80.13平米 | 南 北 | 精装 | 有电梯</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>低楼层(共11层)2006年建板楼  -  <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fqianpu%2F&amp;b=4" target="_blank">前埔</a></div></div><div class="followInfo"><span class="starIcon"></span>4人关注 / 共0次带看 / 2个月以前发布</div><div class="tag"></div><div class="priceInfo"><div class="totalPrice"><span>500</span>万</div><div class="unitPrice" data-hid="105100735806" data-rid="3911057675411" data-price="62399"><span>单价62399元/平米</span></div></div></div><div class="listButtonContainer"><div class="btn-follow followBtn" data-hid="105100735806"><span class="follow-text">关注</span></div><div class="compareBtn LOGCLICK" data-hid="105100735806" log-mod="105100735806" data-log_evtid="10230">加入对比</div></div></li><li class="clear"><a class="img " href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100735710.html&amp;b=4" target="_blank"data-log_index="16" data-el="ershoufang" data-housecode="105100735710" data-is_focus="" data-sl=""><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original="/350200-inspection/d8083c04-b0ba-486a-9595-255089542cc17.jpg.232x174.jpg" alt="火车站旁  美新广场  温馨舒适   交通便利  拎包入住"></a><div class="info clear"><div class="title"><a class="" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100735710.html&amp;b=4" target="_blank" data-log_index="16"   data-el="ershoufang" data-housecode="105100735710" data-is_focus=""   data-sl="">火车站旁  美新广场  温馨舒适   交通便利  拎包入住</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fxiaoqu%2F3911057241702%2F&amp;b=4" target="_blank" data-log_index="16" data-el="region">美新广场 </a> | 3室1厅 | 67.41平米 | 东南 | 其他 | 有电梯</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>低楼层(共33层)2005年建板楼  -  <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fhuochezhan4%2F&amp;b=4" target="_blank">火车站</a></div></div><div class="followInfo"><span class="starIcon"></span>13人关注 / 共0次带看 / 2个月以前发布</div><div class="tag"></div><div class="priceInfo"><div class="totalPrice"><span>368</span>万</div><div class="unitPrice" data-hid="105100735710" data-rid="3911057241702" data-price="54592"><span>单价54592元/平米</span></div></div></div><div class="listButtonContainer"><div class="btn-follow followBtn" data-hid="105100735710"><span class="follow-text">关注</span></div><div class="compareBtn LOGCLICK" data-hid="105100735710" log-mod="105100735710" data-log_evtid="10230">加入对比</div></div></li><li class="clear"><a class="img " href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100735587.html&amp;b=4" target="_blank"data-log_index="17" data-el="ershoufang" data-housecode="105100735587" data-is_focus="" data-sl=""><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original="/350200-inspection/c3a60ccd-7a4f-4a05-ad92-1258a362246a.jpg.232x174.jpg" alt="禾祥西路 永成大厦 电梯房 安静不沿街"></a><div class="info clear"><div class="title"><a class="" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100735587.html&amp;b=4" target="_blank" data-log_index="17"   data-el="ershoufang" data-housecode="105100735587" data-is_focus=""   data-sl="">禾祥西路 永成大厦 电梯房 安静不沿街</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fxiaoqu%2F3911059493558%2F&amp;b=4" target="_blank" data-log_index="17" data-el="region">永成大厦 </a> | 2室2厅 | 95.53平米 | 东 | 精装 | 有电梯</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>高楼层(共15层)2000年建塔楼  -  <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fhexiangxilu%2F&amp;b=4" target="_blank">禾祥西路</a></div></div><div class="followInfo"><span class="starIcon"></span>3人关注 / 共0次带看 / 2个月以前发布</div><div class="tag"><span class="taxfree">房本满五年</span></div><div class="priceInfo"><div class="totalPrice"><span>620</span>万</div><div class="unitPrice" data-hid="105100735587" data-rid="3911059493558" data-price="64902"><span>单价64902元/平米</span></div></div></div><div class="listButtonContainer"><div class="btn-follow followBtn" data-hid="105100735587"><span class="follow-text">关注</span></div><div class="compareBtn LOGCLICK" data-hid="105100735587" log-mod="105100735587" data-log_evtid="10230">加入对比</div></div></li><li class="clear"><a class="img " href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100735540.html&amp;b=4" target="_blank"data-log_index="18" data-el="ershoufang" data-housecode="105100735540" data-is_focus="" data-sl=""><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original="" alt="益泰大厦   精装修两年    业主自住   领包入住"></a><div class="info clear"><div class="title"><a class="" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100735540.html&amp;b=4" target="_blank" data-log_index="18"   data-el="ershoufang" data-housecode="105100735540" data-is_focus=""   data-sl="">益泰大厦   精装修两年    业主自住   领包入住</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fxiaoqu%2F3911055350177%2F&amp;b=4" target="_blank" data-log_index="18" data-el="region">益泰大厦 </a> | 2室1厅 | 55.67平米 | 南 | 其他 | 有电梯</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>低楼层(共24层)2004年建塔楼  -  <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fhuochezhan4%2F&amp;b=4" target="_blank">火车站</a></div></div><div class="followInfo"><span class="starIcon"></span>1人关注 / 共0次带看 / 2个月以前发布</div><div class="tag"></div><div class="priceInfo"><div class="totalPrice"><span>355</span>万</div><div class="unitPrice" data-hid="105100735540" data-rid="3911055350177" data-price="63769"><span>单价63769元/平米</span></div></div></div><div class="listButtonContainer"><div class="btn-follow followBtn" data-hid="105100735540"><span class="follow-text">关注</span></div><div class="compareBtn LOGCLICK" data-hid="105100735540" log-mod="105100735540" data-log_evtid="10230">加入对比</div></div></li><li class="clear"><a class="img " href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100735117.html&amp;b=4" target="_blank"data-log_index="19" data-el="ershoufang" data-housecode="105100735117" data-is_focus="" data-sl=""><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original="" alt="火车站旁 金祥大厦  电梯房 交通便利  居家2房"></a><div class="info clear"><div class="title"><a class="" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100735117.html&amp;b=4" target="_blank" data-log_index="19"   data-el="ershoufang" data-housecode="105100735117" data-is_focus=""   data-sl="">火车站旁 金祥大厦  电梯房 交通便利  居家2房</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fxiaoqu%2F3911057239071%2F&amp;b=4" target="_blank" data-log_index="19" data-el="region">金祥大厦 </a> | 2室1厅 | 77.19平米 | 东 | 其他 | 有电梯</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>高楼层(共23层)1999年建塔楼  -  <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fhuochezhan4%2F&amp;b=4" target="_blank">火车站</a></div></div><div class="followInfo"><span class="starIcon"></span>2人关注 / 共0次带看 / 2个月以前发布</div><div class="tag"></div><div class="priceInfo"><div class="totalPrice"><span>438</span>万</div><div class="unitPrice" data-hid="105100735117" data-rid="3911057239071" data-price="56744"><span>单价56744元/平米</span></div></div></div><div class="listButtonContainer"><div class="btn-follow followBtn" data-hid="105100735117"><span class="follow-text">关注</span></div><div class="compareBtn LOGCLICK" data-hid="105100735117" log-mod="105100735117" data-log_evtid="10230">加入对比</div></div></li><li class="clear"><a class="img " href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100735048.html&amp;b=4" target="_blank"data-log_index="20" data-el="ershoufang" data-housecode="105100735048" data-is_focus="" data-sl=""><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original="/350200-inspection/1e302feb-724e-445b-8548-1459001435da.jpg.232x174.jpg" alt="火车站 城立方 13年小区楼中楼 精装3房 双阳台采光好"></a><div class="info clear"><div class="title"><a class="" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100735048.html&amp;b=4" target="_blank" data-log_index="20"   data-el="ershoufang" data-housecode="105100735048" data-is_focus=""   data-sl="">火车站 城立方 13年小区楼中楼 精装3房 双阳台采光好</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fxiaoqu%2F3911053524669%2F&amp;b=4" target="_blank" data-log_index="20" data-el="region">城立方 </a> | 3室2厅 | 60.88平米 | 东北 | 精装 | 有电梯</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>中楼层(共17层)2008年建板楼  -  <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Ffushan3%2F&amp;b=4" target="_blank">富山</a></div></div><div class="followInfo"><span class="starIcon"></span>4人关注 / 共2次带看 / 2个月以前发布</div><div class="tag"><span class="haskey">随时看房</span></div><div class="priceInfo"><div class="totalPrice"><span>658</span>万</div><div class="unitPrice" data-hid="105100735048" data-rid="3911053524669" data-price="108082"><span>单价108082元/平米</span></div></div></div><div class="listButtonContainer"><div class="btn-follow followBtn" data-hid="105100735048"><span class="follow-text">关注</span></div><div class="compareBtn LOGCLICK" data-hid="105100735048" log-mod="105100735048" data-log_evtid="10230">加入对比</div></div></li><li class="clear"><a class="img " href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100734979.html&amp;b=4" target="_blank"data-log_index="21" data-el="ershoufang" data-housecode="105100734979" data-is_focus="" data-sl=""><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original="" alt="狐尾山，电梯高层，大四房，生活、交通便利"></a><div class="info clear"><div class="title"><a class="" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100734979.html&amp;b=4" target="_blank" data-log_index="21"   data-el="ershoufang" data-housecode="105100734979" data-is_focus=""   data-sl="">狐尾山，电梯高层，大四房，生活、交通便利</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fxiaoqu%2F3911056390773%2F&amp;b=4" target="_blank" data-log_index="21" data-el="region">世纪海湾二期 </a> | 4室2厅 | 136平米 | 东 西 | 精装 | 有电梯</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>中楼层(共36层)2007年建塔楼  -  <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fshizhengfu2%2F&amp;b=4" target="_blank">市政府</a></div></div><div class="followInfo"><span class="starIcon"></span>0人关注 / 共0次带看 / 2个月以前发布</div><div class="tag"></div><div class="priceInfo"><div class="totalPrice"><span>850</span>万</div><div class="unitPrice" data-hid="105100734979" data-rid="3911056390773" data-price="62500"><span>单价62500元/平米</span></div></div></div><div class="listButtonContainer"><div class="btn-follow followBtn" data-hid="105100734979"><span class="follow-text">关注</span></div><div class="compareBtn LOGCLICK" data-hid="105100734979" log-mod="105100734979" data-log_evtid="10230">加入对比</div></div></li><li class="clear"><a class="img " href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100734807.html&amp;b=4" target="_blank"data-log_index="22" data-el="ershoufang" data-housecode="105100734807" data-is_focus="" data-sl=""><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original="/350200-inspection/8e65a156-4433-4cf6-aaeb-6e7eb0cf18b5.jpg.232x174.jpg" alt="划片大同，三层楼总价低，单价低"></a><div class="info clear"><div class="title"><a class="" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100734807.html&amp;b=4" target="_blank" data-log_index="22"   data-el="ershoufang" data-housecode="105100734807" data-is_focus=""   data-sl="">划片大同，三层楼总价低，单价低</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fxiaoqu%2F3920020956900650%2F&amp;b=4" target="_blank" data-log_index="22" data-el="region">九条巷 </a> | 1室1厅 | 40平米 | 南 | 简装</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>低楼层(共3层)板楼  -  <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Flundu%2F&amp;b=4" target="_blank">轮渡</a></div></div><div class="followInfo"><span class="starIcon"></span>29人关注 / 共15次带看 / 2个月以前发布</div><div class="tag"><span class="taxfree">房本满五年</span></div><div class="priceInfo"><div class="totalPrice"><span>220</span>万</div><div class="unitPrice" data-hid="105100734807" data-rid="3920020956900650" data-price="55000"><span>单价55000元/平米</span></div></div></div><div class="listButtonContainer"><div class="btn-follow followBtn" data-hid="105100734807"><span class="follow-text">关注</span></div><div class="compareBtn LOGCLICK" data-hid="105100734807" log-mod="105100734807" data-log_evtid="10230">加入对比</div></div></li><li class="clear"><a class="img " href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100734566.html&amp;b=4" target="_blank"data-log_index="23" data-el="ershoufang" data-housecode="105100734566" data-is_focus="" data-sl=""><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original="/350200-inspection/1ceb9558-632f-41c4-aeae-c924a251162f.jpg.232x174.jpg" alt="嘉华大厦 主卧朝南 采光充足 满五年"></a><div class="info clear"><div class="title"><a class="" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100734566.html&amp;b=4" target="_blank" data-log_index="23"   data-el="ershoufang" data-housecode="105100734566" data-is_focus=""   data-sl="">嘉华大厦 主卧朝南 采光充足 满五年</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fxiaoqu%2F397444080112370%2F&amp;b=4" target="_blank" data-log_index="23" data-el="region">嘉华大厦 </a> | 3室2厅 | 107.66平米 | 南 | 简装 | 有电梯</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>低楼层(共31层)2004年建塔楼  -  <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Flianban%2F&amp;b=4" target="_blank">莲坂</a></div></div><div class="followInfo"><span class="starIcon"></span>9人关注 / 共4次带看 / 2个月以前发布</div><div class="tag"><span class="taxfree">房本满五年</span><span class="haskey">随时看房</span></div><div class="priceInfo"><div class="totalPrice"><span>568</span>万</div><div class="unitPrice" data-hid="105100734566" data-rid="397444080112370" data-price="52759"><span>单价52759元/平米</span></div></div></div><div class="listButtonContainer"><div class="btn-follow followBtn" data-hid="105100734566"><span class="follow-text">关注</span></div><div class="compareBtn LOGCLICK" data-hid="105100734566" log-mod="105100734566" data-log_evtid="10230">加入对比</div></div></li><li class="clear"><a class="img " href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100734266.html&amp;b=4" target="_blank"data-log_index="24" data-el="ershoufang" data-housecode="105100734266" data-is_focus="" data-sl=""><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original="/350200-inspection/d0f718bf-352b-48f0-963b-a370fd249976.jpg.232x174.jpg" alt="莲坂富山女人街，电梯高层，南北通透三房，带三个阳台"></a><div class="info clear"><div class="title"><a class="" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100734266.html&amp;b=4" target="_blank" data-log_index="24"   data-el="ershoufang" data-housecode="105100734266" data-is_focus=""   data-sl="">莲坂富山女人街，电梯高层，南北通透三房，带三个阳台</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fxiaoqu%2F3911057748393%2F&amp;b=4" target="_blank" data-log_index="24" data-el="region">万禾广场 </a> | 3室1厅 | 151.72平米 | 南 北 | 简装 | 有电梯</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>高楼层(共17层)2004年建塔楼  -  <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Flianban%2F&amp;b=4" target="_blank">莲坂</a></div></div><div class="followInfo"><span class="starIcon"></span>3人关注 / 共2次带看 / 2个月以前发布</div><div class="tag"><span class="taxfree">房本满五年</span><span class="haskey">随时看房</span></div><div class="priceInfo"><div class="totalPrice"><span>900</span>万</div><div class="unitPrice" data-hid="105100734266" data-rid="3911057748393" data-price="59320"><span>单价59320元/平米</span></div></div></div><div class="listButtonContainer"><div class="btn-follow followBtn" data-hid="105100734266"><span class="follow-text">关注</span></div><div class="compareBtn LOGCLICK" data-hid="105100734266" log-mod="105100734266" data-log_evtid="10230">加入对比</div></div></li><li class="clear"><a class="img " href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100734157.html&amp;b=4" target="_blank"data-log_index="25" data-el="ershoufang" data-housecode="105100734157" data-is_focus="" data-sl=""><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original="" alt="莲花一村 电梯房 香江大花园 大两房户型"></a><div class="info clear"><div class="title"><a class="" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100734157.html&amp;b=4" target="_blank" data-log_index="25"   data-el="ershoufang" data-housecode="105100734157" data-is_focus=""   data-sl="">莲花一村 电梯房 香江大花园 大两房户型</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fxiaoqu%2F3911053599143%2F&amp;b=4" target="_blank" data-log_index="25" data-el="region">香江大花园 </a> | 2室2厅 | 98.71平米 | 西北 | 简装 | 有电梯</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>低楼层(共36层)2002年建板楼  -  <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Flianhuayicun%2F&amp;b=4" target="_blank">莲花一村</a></div></div><div class="followInfo"><span class="starIcon"></span>4人关注 / 共0次带看 / 2个月以前发布</div><div class="tag"><span class="taxfree">房本满五年</span></div><div class="priceInfo"><div class="totalPrice"><span>490</span>万</div><div class="unitPrice" data-hid="105100734157" data-rid="3911053599143" data-price="49641"><span>单价49641元/平米</span></div></div></div><div class="listButtonContainer"><div class="btn-follow followBtn" data-hid="105100734157"><span class="follow-text">关注</span></div><div class="compareBtn LOGCLICK" data-hid="105100734157" log-mod="105100734157" data-log_evtid="10230">加入对比</div></div></li><li class="clear"><a class="img " href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100733994.html&amp;b=4" target="_blank"data-log_index="26" data-el="ershoufang" data-housecode="105100733994" data-is_focus="" data-sl=""><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original="/350200-inspection/07af8b08-7fe5-449b-8fd2-8f43eb4f9072.jpg.232x174.jpg" alt="禾祥西路 海明苑 户型方正 精装四房 "></a><div class="info clear"><div class="title"><a class="" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100733994.html&amp;b=4" target="_blank" data-log_index="26"   data-el="ershoufang" data-housecode="105100733994" data-is_focus=""   data-sl="">禾祥西路 海明苑 户型方正 精装四房 </a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fxiaoqu%2F3911053936444%2F&amp;b=4" target="_blank" data-log_index="26" data-el="region">海明苑 </a> | 4室2厅 | 170.79平米 | 东 北 | 精装 | 有电梯</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>中楼层(共10层)2002年建塔楼  -  <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fhexiangxilu%2F&amp;b=4" target="_blank">禾祥西路</a></div></div><div class="followInfo"><span class="starIcon"></span>0人关注 / 共0次带看 / 2个月以前发布</div><div class="tag"><span class="taxfree">房本满五年</span></div><div class="priceInfo"><div class="totalPrice"><span>910</span>万</div><div class="unitPrice" data-hid="105100733994" data-rid="3911053936444" data-price="53282"><span>单价53282元/平米</span></div></div></div><div class="listButtonContainer"><div class="btn-follow followBtn" data-hid="105100733994"><span class="follow-text">关注</span></div><div class="compareBtn LOGCLICK" data-hid="105100733994" log-mod="105100733994" data-log_evtid="10230">加入对比</div></div></li><li class="clear"><a class="img " href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100733940.html&amp;b=4" target="_blank"data-log_index="27" data-el="ershoufang" data-housecode="105100733940" data-is_focus="" data-sl=""><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original="/350200-inspection/31525777-a5f0-4eeb-85fe-5670bd2155ae.jpg.232x174.jpg" alt="此房朝西北，带煤气管道，业主清爽装修 诚意出售"></a><div class="info clear"><div class="title"><a class="" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100733940.html&amp;b=4" target="_blank" data-log_index="27"   data-el="ershoufang" data-housecode="105100733940" data-is_focus=""   data-sl="">此房朝西北，带煤气管道，业主清爽装修 诚意出售</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fxiaoqu%2F3911058030563%2F&amp;b=4" target="_blank" data-log_index="27" data-el="region">源通中心 </a> | 1室1厅 | 44.36平米 | 西 | 简装 | 有电梯</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>中楼层(共31层)2004年建塔楼  -  <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Flundu%2F&amp;b=4" target="_blank">轮渡</a></div></div><div class="followInfo"><span class="starIcon"></span>4人关注 / 共0次带看 / 2个月以前发布</div><div class="tag"></div><div class="priceInfo"><div class="totalPrice"><span>310</span>万</div><div class="unitPrice" data-hid="105100733940" data-rid="3911058030563" data-price="69883"><span>单价69883元/平米</span></div></div></div><div class="listButtonContainer"><div class="btn-follow followBtn" data-hid="105100733940"><span class="follow-text">关注</span></div><div class="compareBtn LOGCLICK" data-hid="105100733940" log-mod="105100733940" data-log_evtid="10230">加入对比</div></div></li><li class="clear"><a class="img " href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100733811.html&amp;b=4" target="_blank"data-log_index="28" data-el="ershoufang" data-housecode="105100733811" data-is_focus="" data-sl=""><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original="/350200-inspection/21f2839f-f0de-464f-af49-5273d04a61c0.jpg.232x174.jpg" alt="建发时尚国际正规一房 52.69平335万"></a><div class="info clear"><div class="title"><a class="" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100733811.html&amp;b=4" target="_blank" data-log_index="28"   data-el="ershoufang" data-housecode="105100733811" data-is_focus=""   data-sl="">建发时尚国际正规一房 52.69平335万</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fxiaoqu%2F3911055010937%2F&amp;b=4" target="_blank" data-log_index="28" data-el="region">时尚国际 </a> | 1室1厅 | 52.69平米 | 北 | 简装 | 有电梯</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>低楼层(共24层)2007年建板楼  -  <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fhuochezhan4%2F&amp;b=4" target="_blank">火车站</a></div></div><div class="followInfo"><span class="starIcon"></span>4人关注 / 共0次带看 / 2个月以前发布</div><div class="tag"><span class="taxfree">房本满五年</span></div><div class="priceInfo"><div class="totalPrice"><span>335</span>万</div><div class="unitPrice" data-hid="105100733811" data-rid="3911055010937" data-price="63580"><span>单价63580元/平米</span></div></div></div><div class="listButtonContainer"><div class="btn-follow followBtn" data-hid="105100733811"><span class="follow-text">关注</span></div><div class="compareBtn LOGCLICK" data-hid="105100733811" log-mod="105100733811" data-log_evtid="10230">加入对比</div></div></li><li class="clear"><a class="img " href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100733746.html&amp;b=4" target="_blank"data-log_index="29" data-el="ershoufang" data-housecode="105100733746" data-is_focus="" data-sl=""><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original="/350200-inspection/0cd0895f-a393-4b20-b739-321a41b55a8b.jpg.232x174.jpg" alt="公园 南北通透3房  满5年 中高楼层"></a><div class="info clear"><div class="title"><a class="" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100733746.html&amp;b=4" target="_blank" data-log_index="29"   data-el="ershoufang" data-housecode="105100733746" data-is_focus=""   data-sl="">公园 南北通透3房  满5年 中高楼层</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fxiaoqu%2F3911059316383%2F&amp;b=4" target="_blank" data-log_index="29" data-el="region">豆仔尾路332-336号 </a> | 3室2厅 | 85.95平米 | 南 北 | 简装 | 无电梯</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>中楼层(共8层)1995年建板塔结合  -  <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fgongyuanxiaoxuejizhoubian%2F&amp;b=4" target="_blank">公园小学及周边</a></div></div><div class="followInfo"><span class="starIcon"></span>22人关注 / 共3次带看 / 2个月以前发布</div><div class="tag"><span class="taxfree">房本满五年</span></div><div class="priceInfo"><div class="totalPrice"><span>485</span>万</div><div class="unitPrice" data-hid="105100733746" data-rid="3911059316383" data-price="56429"><span>单价56429元/平米</span></div></div></div><div class="listButtonContainer"><div class="btn-follow followBtn" data-hid="105100733746"><span class="follow-text">关注</span></div><div class="compareBtn LOGCLICK" data-hid="105100733746" log-mod="105100733746" data-log_evtid="10230">加入对比</div></div></li><li class="clear"><a class="img " href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100733664.html&amp;b=4" target="_blank"data-log_index="30" data-el="ershoufang" data-housecode="105100733664" data-is_focus="" data-sl=""><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original="/350200-inspection/d74c8c8e-3c5a-4115-ac3e-1ea3fc1344b4.jpg.232x174.jpg" alt="新港龙花园 3室2厅 720万"></a><div class="info clear"><div class="title"><a class="" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100733664.html&amp;b=4" target="_blank" data-log_index="30"   data-el="ershoufang" data-housecode="105100733664" data-is_focus=""   data-sl="">新港龙花园 3室2厅 720万</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fxiaoqu%2F3911055235282%2F&amp;b=4" target="_blank" data-log_index="30" data-el="region">新港龙花园 </a> | 3室2厅 | 120平米 | 南 北 | 简装 | 无电梯</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>高楼层(共8层)2000年建塔楼  -  <a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Flianban%2F&amp;b=4" target="_blank">莲坂</a></div></div><div class="followInfo"><span class="starIcon"></span>0人关注 / 共0次带看 / 2个月以前发布</div><div class="tag"><span class="haskey">随时看房</span></div><div class="priceInfo"><div class="totalPrice"><span>720</span>万</div><div class="unitPrice" data-hid="105100733664" data-rid="3911055235282" data-price="60000"><span>单价60000元/平米</span></div></div></div><div class="listButtonContainer"><div class="btn-follow followBtn" data-hid="105100733664"><span class="follow-text">关注</span></div><div class="compareBtn LOGCLICK" data-hid="105100733664" log-mod="105100733664" data-log_evtid="10230">加入对比</div></div></li></ul>
<div class="bigImgList" style="display: none;" log-mod="list"><div class="item" data-houseid="105100737092"><a class="img" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100737092.html&amp;b=4" target="_blank" data-bl="list" data-log_index="1" data-housecode="105100737092" data-is_focus=""  data-el="ershoufang"><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original="/350200-inspection/916e5ac3-09a0-41f7-bf3a-58c3ea81d91d.jpg.437x300.jpg"><div class="btn-follow follow" data-hid="105100737092"><span class="star"></span><span class="follow-text">关注</span></div><div class="leftArrow"><span></span></div><div class="rightArrow"><span></span></div><div class="price"><span>850</span>万</div></a><a class="title" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100737092.html&amp;b=4" target="_blank" data-bl="list" data-log_index="1" data-housecode="105100737092" data-is_focus=""  data-el="ershoufang">海峡国际社区二期 1室2厅 850万</a><div class="info">会展中心<span>/</span>1室2厅<span>/</span>92.89平米<span>/</span>西南<span>/</span>精装<span>/</span>有电梯</div><div class="tag"><span class="five">房本满两年</span></div></div><div class="item" data-houseid="105100736901"><a class="img" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100736901.html&amp;b=4" target="_blank" data-bl="list" data-log_index="2" data-housecode="105100736901" data-is_focus=""  data-el="ershoufang"><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original=""><div class="btn-follow follow" data-hid="105100736901"><span class="star"></span><span class="follow-text">关注</span></div><div class="leftArrow"><span></span></div><div class="rightArrow"><span></span></div><div class="price"><span>219</span>万</div></a><a class="title" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100736901.html&amp;b=4" target="_blank" data-bl="list" data-log_index="2" data-housecode="105100736901" data-is_focus=""  data-el="ershoufang">松柏一代风华 小户型 朝南.....</a><div class="info">松柏<span>/</span>1室1厅<span>/</span>30.46平米<span>/</span>南<span>/</span>简装</div><div class="tag"></div></div><div class="item" data-houseid="105100736801"><a class="img" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100736801.html&amp;b=4" target="_blank" data-bl="list" data-log_index="3" data-housecode="105100736801" data-is_focus=""  data-el="ershoufang"><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original="/350200-inspection/617278c7-b596-409a-afac-18a103eb1697.jpg.437x300.jpg"><div class="btn-follow follow" data-hid="105100736801"><span class="star"></span><span class="follow-text">关注</span></div><div class="leftArrow"><span></span></div><div class="rightArrow"><span></span></div><div class="price"><span>848</span>万</div></a><a class="title" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100736801.html&amp;b=4" target="_blank" data-bl="list" data-log_index="3" data-housecode="105100736801" data-is_focus=""  data-el="ershoufang">嘉盛户型方正 四房 南北通风 莲前 瑞景 侨福城 福满</a><div class="info">瑞景<span>/</span>4室2厅<span>/</span>159平米<span>/</span>北<span>/</span>精装<span>/</span>有电梯</div><div class="tag"><span class="five">房本满两年</span></div></div><div class="item" data-houseid="105100736602"><a class="img" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100736602.html&amp;b=4" target="_blank" data-bl="list" data-log_index="4" data-housecode="105100736602" data-is_focus=""  data-el="ershoufang"><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original="/350200-inspection/08ffb3c9-2b88-4c92-b3e7-a6e5753bef8c.jpg.437x300.jpg"><div class="btn-follow follow" data-hid="105100736602"><span class="star"></span><span class="follow-text">关注</span></div><div class="leftArrow"><span></span></div><div class="rightArrow"><span></span></div><div class="price"><span>465</span>万</div></a><a class="title" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100736602.html&amp;b=4" target="_blank" data-bl="list" data-log_index="4" data-housecode="105100736602" data-is_focus=""  data-el="ershoufang">新莲岳里3房 南北通透格局 满5年 户型方正 楼层适中</a><div class="info">松柏<span>/</span>3室1厅<span>/</span>78.97平米<span>/</span>南 北<span>/</span>简装<span>/</span>无电梯</div><div class="tag"><span class="taxfree">房本满五年</span><span class="haskey">随时看房</span></div></div><div class="item" data-houseid="105100736551"><a class="img" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100736551.html&amp;b=4" target="_blank" data-bl="list" data-log_index="5" data-housecode="105100736551" data-is_focus=""  data-el="ershoufang"><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original="/350200-inspection/1739de1d-6e08-4719-931c-b8c114aa73bc.jpg.437x300.jpg"><div class="btn-follow follow" data-hid="105100736551"><span class="star"></span><span class="follow-text">关注</span></div><div class="leftArrow"><span></span></div><div class="rightArrow"><span></span></div><div class="price"><span>333</span>万</div></a><a class="title" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100736551.html&amp;b=4" target="_blank" data-bl="list" data-log_index="5" data-housecode="105100736551" data-is_focus=""  data-el="ershoufang">松柏 居家两居室 电梯房 拎包入住 看房预约</a><div class="info">松柏<span>/</span>2室1厅<span>/</span>54平米<span>/</span>北<span>/</span>精装<span>/</span>有电梯</div><div class="tag"></div></div><div class="item" data-houseid="105100736531"><a class="img" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100736531.html&amp;b=4" target="_blank" data-bl="list" data-log_index="6" data-housecode="105100736531" data-is_focus=""  data-el="ershoufang"><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original="/350200-inspection/7d4501b2-9bae-402b-8480-3fde081e36a3.jpg.437x300.jpg"><div class="btn-follow follow" data-hid="105100736531"><span class="star"></span><span class="follow-text">关注</span></div><div class="leftArrow"><span></span></div><div class="rightArrow"><span></span></div><div class="price"><span>710</span>万</div></a><a class="title" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100736531.html&amp;b=4" target="_blank" data-bl="list" data-log_index="6" data-housecode="105100736531" data-is_focus=""  data-el="ershoufang">此房户型满两年，南北通透双阳台 正看中庭</a><div class="info">瑞景<span>/</span>3室2厅<span>/</span>132平米<span>/</span>南 西 北<span>/</span>简装<span>/</span>有电梯</div><div class="tag"></div></div><div class="item" data-houseid="105100736330"><a class="img" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100736330.html&amp;b=4" target="_blank" data-bl="list" data-log_index="7" data-housecode="105100736330" data-is_focus=""  data-el="ershoufang"><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original="/350200-inspection/ac7ca62c-c11e-4d2f-9607-6a40091f0c07.jpg.437x300.jpg"><div class="btn-follow follow" data-hid="105100736330"><span class="star"></span><span class="follow-text">关注</span></div><div class="leftArrow"><span></span></div><div class="rightArrow"><span></span></div><div class="price"><span>305</span>万</div></a><a class="title" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100736330.html&amp;b=4" target="_blank" data-bl="list" data-log_index="7" data-housecode="105100736330" data-is_focus=""  data-el="ershoufang">莲坂文化大厦 电梯高层 07年精装小两房</a><div class="info">莲坂<span>/</span>2室1厅<span>/</span>50.81平米<span>/</span>北<span>/</span>精装<span>/</span>有电梯</div><div class="tag"></div></div><div class="item" data-houseid="105100736310"><a class="img" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100736310.html&amp;b=4" target="_blank" data-bl="list" data-log_index="8" data-housecode="105100736310" data-is_focus=""  data-el="ershoufang"><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original="/350200-inspection/f7467d48-d542-40e2-8dbc-b9581820287d.jpg.437x300.jpg"><div class="btn-follow follow" data-hid="105100736310"><span class="star"></span><span class="follow-text">关注</span></div><div class="leftArrow"><span></span></div><div class="rightArrow"><span></span></div><div class="price"><span>450</span>万</div></a><a class="title" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100736310.html&amp;b=4" target="_blank" data-bl="list" data-log_index="8" data-housecode="105100736310" data-is_focus=""  data-el="ershoufang">华林品质  06年小区 厅带阳台朝南 全明格局</a><div class="info">前埔<span>/</span>2室2厅<span>/</span>80.31平米<span>/</span>南<span>/</span>简装<span>/</span>无电梯</div><div class="tag"><span class="five">房本满两年</span></div></div><div class="item" data-houseid="105100736230"><a class="img" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100736230.html&amp;b=4" target="_blank" data-bl="list" data-log_index="9" data-housecode="105100736230" data-is_focus=""  data-el="ershoufang"><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original="/350200-inspection/830a04cb-ffd4-4b56-9747-f608657a3b4e.jpg.437x300.jpg"><div class="btn-follow follow" data-hid="105100736230"><span class="star"></span><span class="follow-text">关注</span></div><div class="leftArrow"><span></span></div><div class="rightArrow"><span></span></div><div class="price"><span>770</span>万</div></a><a class="title" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100736230.html&amp;b=4" target="_blank" data-bl="list" data-log_index="9" data-housecode="105100736230" data-is_focus=""  data-el="ershoufang">龙山山庄山木清华满五年电梯房大四居</a><div class="info">莲前<span>/</span>4室2厅<span>/</span>132.19平米<span>/</span>南 北<span>/</span>精装<span>/</span>有电梯</div><div class="tag"><span class="taxfree">房本满五年</span></div></div><div class="item" data-houseid="105100736210"><a class="img" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100736210.html&amp;b=4" target="_blank" data-bl="list" data-log_index="10" data-housecode="105100736210" data-is_focus=""  data-el="ershoufang"><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original="/350200-inspection/d0a16b20-28b9-4c91-936a-0679b421d5ce.jpg.437x300.jpg"><div class="btn-follow follow" data-hid="105100736210"><span class="star"></span><span class="follow-text">关注</span></div><div class="leftArrow"><span></span></div><div class="rightArrow"><span></span></div><div class="price"><span>500</span>万</div></a><a class="title" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100736210.html&amp;b=4" target="_blank" data-bl="list" data-log_index="10" data-housecode="105100736210" data-is_focus=""  data-el="ershoufang">瑞景新村 经典两房户型 稳定在售</a><div class="info">瑞景<span>/</span>2室2厅<span>/</span>82.82平米<span>/</span>南 北<span>/</span>简装<span>/</span>无电梯</div><div class="tag"><span class="taxfree">房本满五年</span></div></div><div class="item" data-houseid="105100736052"><a class="img" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100736052.html&amp;b=4" target="_blank" data-bl="list" data-log_index="11" data-housecode="105100736052" data-is_focus=""  data-el="ershoufang"><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original="/350200-inspection/71d2eea3-68ab-4f5e-be1d-771af9dda448.jpg.437x300.jpg"><div class="btn-follow follow" data-hid="105100736052"><span class="star"></span><span class="follow-text">关注</span></div><div class="leftArrow"><span></span></div><div class="rightArrow"><span></span></div><div class="price"><span>438</span>万</div></a><a class="title" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100736052.html&amp;b=4" target="_blank" data-bl="list" data-log_index="11" data-housecode="105100736052" data-is_focus=""  data-el="ershoufang">联丰瑞园 南北通透 交通便利 前排采光好</a><div class="info">瑞景<span>/</span>2室2厅<span>/</span>81平米<span>/</span>南 北<span>/</span>简装<span>/</span>有电梯</div><div class="tag"><span class="five">房本满两年</span></div></div><div class="item" data-houseid="105100736008"><a class="img" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100736008.html&amp;b=4" target="_blank" data-bl="list" data-log_index="12" data-housecode="105100736008" data-is_focus=""  data-el="ershoufang"><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original="/350200-inspection/034ef185-5fb1-435b-9a47-3ba7f2da0cd8.jpg.437x300.jpg"><div class="btn-follow follow" data-hid="105100736008"><span class="star"></span><span class="follow-text">关注</span></div><div class="leftArrow"><span></span></div><div class="rightArrow"><span></span></div><div class="price"><span>410</span>万</div></a><a class="title" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100736008.html&amp;b=4" target="_blank" data-bl="list" data-log_index="12" data-housecode="105100736008" data-is_focus=""  data-el="ershoufang">火车站 繁华商圈 满两年 无贷款 楼中楼</a><div class="info">富山<span>/</span>1室1厅<span>/</span>49.3平米<span>/</span>北<span>/</span>简装<span>/</span>有电梯</div><div class="tag"><span class="taxfree">房本满五年</span></div></div><div class="item" data-houseid="105100735932"><a class="img" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100735932.html&amp;b=4" target="_blank" data-bl="list" data-log_index="13" data-housecode="105100735932" data-is_focus=""  data-el="ershoufang"><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original="/350200-inspection/2b2b88e6-caf4-4dbf-91dd-7c86764002cd.jpg.437x300.jpg"><div class="btn-follow follow" data-hid="105100735932"><span class="star"></span><span class="follow-text">关注</span></div><div class="leftArrow"><span></span></div><div class="rightArrow"><span></span></div><div class="price"><span>398</span>万</div></a><a class="title" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100735932.html&amp;b=4" target="_blank" data-bl="list" data-log_index="13" data-housecode="105100735932" data-is_focus=""  data-el="ershoufang">槟榔西里，6楼和7楼打通做成楼中楼，附带大露台！</a><div class="info">槟榔<span>/</span>4室2厅<span>/</span>60平米<span>/</span>南<span>/</span>简装<span>/</span>无电梯</div><div class="tag"><span class="haskey">随时看房</span></div></div><div class="item" data-houseid="105100735876"><a class="img" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100735876.html&amp;b=4" target="_blank" data-bl="list" data-log_index="14" data-housecode="105100735876" data-is_focus=""  data-el="ershoufang"><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original="/350200-inspection/9fc1b192-f1b3-4c8d-879f-ff88b40b1a92.jpg.437x300.jpg"><div class="btn-follow follow" data-hid="105100735876"><span class="star"></span><span class="follow-text">关注</span></div><div class="leftArrow"><span></span></div><div class="rightArrow"><span></span></div><div class="price"><span>420</span>万</div></a><a class="title" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100735876.html&amp;b=4" target="_blank" data-bl="list" data-log_index="14" data-housecode="105100735876" data-is_focus=""  data-el="ershoufang">两房格局 南北向 高层 采光好 屿后南里</a><div class="info">松柏<span>/</span>2室1厅<span>/</span>73.14平米<span>/</span>南 北<span>/</span>精装<span>/</span>无电梯</div><div class="tag"><span class="haskey">随时看房</span></div></div><div class="item" data-houseid="105100735806"><a class="img" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100735806.html&amp;b=4" target="_blank" data-bl="list" data-log_index="15" data-housecode="105100735806" data-is_focus=""  data-el="ershoufang"><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original="/350200-inspection/af2fe8ea-9879-4ba7-aa62-9a5c4b01a312.jpg.437x300.jpg"><div class="btn-follow follow" data-hid="105100735806"><span class="star"></span><span class="follow-text">关注</span></div><div class="leftArrow"><span></span></div><div class="rightArrow"><span></span></div><div class="price"><span>500</span>万</div></a><a class="title" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100735806.html&amp;b=4" target="_blank" data-bl="list" data-log_index="15" data-housecode="105100735806" data-is_focus=""  data-el="ershoufang">华林东盛二期  电梯业主自住精装房  好房出售</a><div class="info">前埔<span>/</span>1室2厅<span>/</span>80.13平米<span>/</span>南 北<span>/</span>精装<span>/</span>有电梯</div><div class="tag"></div></div><div class="item" data-houseid="105100735710"><a class="img" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100735710.html&amp;b=4" target="_blank" data-bl="list" data-log_index="16" data-housecode="105100735710" data-is_focus=""  data-el="ershoufang"><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original="/350200-inspection/d8083c04-b0ba-486a-9595-255089542cc17.jpg.437x300.jpg"><div class="btn-follow follow" data-hid="105100735710"><span class="star"></span><span class="follow-text">关注</span></div><div class="leftArrow"><span></span></div><div class="rightArrow"><span></span></div><div class="price"><span>368</span>万</div></a><a class="title" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100735710.html&amp;b=4" target="_blank" data-bl="list" data-log_index="16" data-housecode="105100735710" data-is_focus=""  data-el="ershoufang">火车站旁  美新广场  温馨舒适   交通便利  拎包入住</a><div class="info">火车站<span>/</span>3室1厅<span>/</span>67.41平米<span>/</span>东南<span>/</span>其他<span>/</span>有电梯</div><div class="tag"></div></div><div class="item" data-houseid="105100735587"><a class="img" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100735587.html&amp;b=4" target="_blank" data-bl="list" data-log_index="17" data-housecode="105100735587" data-is_focus=""  data-el="ershoufang"><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original="/350200-inspection/c3a60ccd-7a4f-4a05-ad92-1258a362246a.jpg.437x300.jpg"><div class="btn-follow follow" data-hid="105100735587"><span class="star"></span><span class="follow-text">关注</span></div><div class="leftArrow"><span></span></div><div class="rightArrow"><span></span></div><div class="price"><span>620</span>万</div></a><a class="title" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100735587.html&amp;b=4" target="_blank" data-bl="list" data-log_index="17" data-housecode="105100735587" data-is_focus=""  data-el="ershoufang">禾祥西路 永成大厦 电梯房 安静不沿街</a><div class="info">禾祥西路<span>/</span>2室2厅<span>/</span>95.53平米<span>/</span>东<span>/</span>精装<span>/</span>有电梯</div><div class="tag"><span class="taxfree">房本满五年</span></div></div><div class="item" data-houseid="105100735540"><a class="img" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100735540.html&amp;b=4" target="_blank" data-bl="list" data-log_index="18" data-housecode="105100735540" data-is_focus=""  data-el="ershoufang"><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original=""><div class="btn-follow follow" data-hid="105100735540"><span class="star"></span><span class="follow-text">关注</span></div><div class="leftArrow"><span></span></div><div class="rightArrow"><span></span></div><div class="price"><span>355</span>万</div></a><a class="title" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100735540.html&amp;b=4" target="_blank" data-bl="list" data-log_index="18" data-housecode="105100735540" data-is_focus=""  data-el="ershoufang">益泰大厦   精装修两年    业主自住   领包入住</a><div class="info">火车站<span>/</span>2室1厅<span>/</span>55.67平米<span>/</span>南<span>/</span>其他<span>/</span>有电梯</div><div class="tag"></div></div><div class="item" data-houseid="105100735117"><a class="img" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100735117.html&amp;b=4" target="_blank" data-bl="list" data-log_index="19" data-housecode="105100735117" data-is_focus=""  data-el="ershoufang"><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original=""><div class="btn-follow follow" data-hid="105100735117"><span class="star"></span><span class="follow-text">关注</span></div><div class="leftArrow"><span></span></div><div class="rightArrow"><span></span></div><div class="price"><span>438</span>万</div></a><a class="title" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100735117.html&amp;b=4" target="_blank" data-bl="list" data-log_index="19" data-housecode="105100735117" data-is_focus=""  data-el="ershoufang">火车站旁 金祥大厦  电梯房 交通便利  居家2房</a><div class="info">火车站<span>/</span>2室1厅<span>/</span>77.19平米<span>/</span>东<span>/</span>其他<span>/</span>有电梯</div><div class="tag"></div></div><div class="item" data-houseid="105100735048"><a class="img" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100735048.html&amp;b=4" target="_blank" data-bl="list" data-log_index="20" data-housecode="105100735048" data-is_focus=""  data-el="ershoufang"><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original="/350200-inspection/1e302feb-724e-445b-8548-1459001435da.jpg.437x300.jpg"><div class="btn-follow follow" data-hid="105100735048"><span class="star"></span><span class="follow-text">关注</span></div><div class="leftArrow"><span></span></div><div class="rightArrow"><span></span></div><div class="price"><span>658</span>万</div></a><a class="title" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100735048.html&amp;b=4" target="_blank" data-bl="list" data-log_index="20" data-housecode="105100735048" data-is_focus=""  data-el="ershoufang">火车站 城立方 13年小区楼中楼 精装3房 双阳台采光好</a><div class="info">富山<span>/</span>3室2厅<span>/</span>60.88平米<span>/</span>东北<span>/</span>精装<span>/</span>有电梯</div><div class="tag"><span class="haskey">随时看房</span></div></div><div class="item" data-houseid="105100734979"><a class="img" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100734979.html&amp;b=4" target="_blank" data-bl="list" data-log_index="21" data-housecode="105100734979" data-is_focus=""  data-el="ershoufang"><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original=""><div class="btn-follow follow" data-hid="105100734979"><span class="star"></span><span class="follow-text">关注</span></div><div class="leftArrow"><span></span></div><div class="rightArrow"><span></span></div><div class="price"><span>850</span>万</div></a><a class="title" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100734979.html&amp;b=4" target="_blank" data-bl="list" data-log_index="21" data-housecode="105100734979" data-is_focus=""  data-el="ershoufang">狐尾山，电梯高层，大四房，生活、交通便利</a><div class="info">市政府<span>/</span>4室2厅<span>/</span>136平米<span>/</span>东 西<span>/</span>精装<span>/</span>有电梯</div><div class="tag"></div></div><div class="item" data-houseid="105100734807"><a class="img" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100734807.html&amp;b=4" target="_blank" data-bl="list" data-log_index="22" data-housecode="105100734807" data-is_focus=""  data-el="ershoufang"><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original="/350200-inspection/8e65a156-4433-4cf6-aaeb-6e7eb0cf18b5.jpg.437x300.jpg"><div class="btn-follow follow" data-hid="105100734807"><span class="star"></span><span class="follow-text">关注</span></div><div class="leftArrow"><span></span></div><div class="rightArrow"><span></span></div><div class="price"><span>220</span>万</div></a><a class="title" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100734807.html&amp;b=4" target="_blank" data-bl="list" data-log_index="22" data-housecode="105100734807" data-is_focus=""  data-el="ershoufang">划片大同，三层楼总价低，单价低</a><div class="info">轮渡<span>/</span>1室1厅<span>/</span>40平米<span>/</span>南<span>/</span>简装</div><div class="tag"><span class="taxfree">房本满五年</span></div></div><div class="item" data-houseid="105100734566"><a class="img" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100734566.html&amp;b=4" target="_blank" data-bl="list" data-log_index="23" data-housecode="105100734566" data-is_focus=""  data-el="ershoufang"><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original="/350200-inspection/1ceb9558-632f-41c4-aeae-c924a251162f.jpg.437x300.jpg"><div class="btn-follow follow" data-hid="105100734566"><span class="star"></span><span class="follow-text">关注</span></div><div class="leftArrow"><span></span></div><div class="rightArrow"><span></span></div><div class="price"><span>568</span>万</div></a><a class="title" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100734566.html&amp;b=4" target="_blank" data-bl="list" data-log_index="23" data-housecode="105100734566" data-is_focus=""  data-el="ershoufang">嘉华大厦 主卧朝南 采光充足 满五年</a><div class="info">莲坂<span>/</span>3室2厅<span>/</span>107.66平米<span>/</span>南<span>/</span>简装<span>/</span>有电梯</div><div class="tag"><span class="taxfree">房本满五年</span><span class="haskey">随时看房</span></div></div><div class="item" data-houseid="105100734266"><a class="img" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100734266.html&amp;b=4" target="_blank" data-bl="list" data-log_index="24" data-housecode="105100734266" data-is_focus=""  data-el="ershoufang"><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original="/350200-inspection/d0f718bf-352b-48f0-963b-a370fd249976.jpg.437x300.jpg"><div class="btn-follow follow" data-hid="105100734266"><span class="star"></span><span class="follow-text">关注</span></div><div class="leftArrow"><span></span></div><div class="rightArrow"><span></span></div><div class="price"><span>900</span>万</div></a><a class="title" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100734266.html&amp;b=4" target="_blank" data-bl="list" data-log_index="24" data-housecode="105100734266" data-is_focus=""  data-el="ershoufang">莲坂富山女人街，电梯高层，南北通透三房，带三个阳台</a><div class="info">莲坂<span>/</span>3室1厅<span>/</span>151.72平米<span>/</span>南 北<span>/</span>简装<span>/</span>有电梯</div><div class="tag"><span class="taxfree">房本满五年</span><span class="haskey">随时看房</span></div></div><div class="item" data-houseid="105100734157"><a class="img" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100734157.html&amp;b=4" target="_blank" data-bl="list" data-log_index="25" data-housecode="105100734157" data-is_focus=""  data-el="ershoufang"><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original=""><div class="btn-follow follow" data-hid="105100734157"><span class="star"></span><span class="follow-text">关注</span></div><div class="leftArrow"><span></span></div><div class="rightArrow"><span></span></div><div class="price"><span>490</span>万</div></a><a class="title" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100734157.html&amp;b=4" target="_blank" data-bl="list" data-log_index="25" data-housecode="105100734157" data-is_focus=""  data-el="ershoufang">莲花一村 电梯房 香江大花园 大两房户型</a><div class="info">莲花一村<span>/</span>2室2厅<span>/</span>98.71平米<span>/</span>西北<span>/</span>简装<span>/</span>有电梯</div><div class="tag"><span class="taxfree">房本满五年</span></div></div><div class="item" data-houseid="105100733994"><a class="img" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100733994.html&amp;b=4" target="_blank" data-bl="list" data-log_index="26" data-housecode="105100733994" data-is_focus=""  data-el="ershoufang"><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original="/350200-inspection/07af8b08-7fe5-449b-8fd2-8f43eb4f9072.jpg.437x300.jpg"><div class="btn-follow follow" data-hid="105100733994"><span class="star"></span><span class="follow-text">关注</span></div><div class="leftArrow"><span></span></div><div class="rightArrow"><span></span></div><div class="price"><span>910</span>万</div></a><a class="title" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100733994.html&amp;b=4" target="_blank" data-bl="list" data-log_index="26" data-housecode="105100733994" data-is_focus=""  data-el="ershoufang">禾祥西路 海明苑 户型方正 精装四房 </a><div class="info">禾祥西路<span>/</span>4室2厅<span>/</span>170.79平米<span>/</span>东 北<span>/</span>精装<span>/</span>有电梯</div><div class="tag"><span class="taxfree">房本满五年</span></div></div><div class="item" data-houseid="105100733940"><a class="img" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100733940.html&amp;b=4" target="_blank" data-bl="list" data-log_index="27" data-housecode="105100733940" data-is_focus=""  data-el="ershoufang"><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original="/350200-inspection/31525777-a5f0-4eeb-85fe-5670bd2155ae.jpg.437x300.jpg"><div class="btn-follow follow" data-hid="105100733940"><span class="star"></span><span class="follow-text">关注</span></div><div class="leftArrow"><span></span></div><div class="rightArrow"><span></span></div><div class="price"><span>310</span>万</div></a><a class="title" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100733940.html&amp;b=4" target="_blank" data-bl="list" data-log_index="27" data-housecode="105100733940" data-is_focus=""  data-el="ershoufang">此房朝西北，带煤气管道，业主清爽装修 诚意出售</a><div class="info">轮渡<span>/</span>1室1厅<span>/</span>44.36平米<span>/</span>西<span>/</span>简装<span>/</span>有电梯</div><div class="tag"></div></div><div class="item" data-houseid="105100733811"><a class="img" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100733811.html&amp;b=4" target="_blank" data-bl="list" data-log_index="28" data-housecode="105100733811" data-is_focus=""  data-el="ershoufang"><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original="/350200-inspection/21f2839f-f0de-464f-af49-5273d04a61c0.jpg.437x300.jpg"><div class="btn-follow follow" data-hid="105100733811"><span class="star"></span><span class="follow-text">关注</span></div><div class="leftArrow"><span></span></div><div class="rightArrow"><span></span></div><div class="price"><span>335</span>万</div></a><a class="title" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100733811.html&amp;b=4" target="_blank" data-bl="list" data-log_index="28" data-housecode="105100733811" data-is_focus=""  data-el="ershoufang">建发时尚国际正规一房 52.69平335万</a><div class="info">火车站<span>/</span>1室1厅<span>/</span>52.69平米<span>/</span>北<span>/</span>简装<span>/</span>有电梯</div><div class="tag"><span class="taxfree">房本满五年</span></div></div><div class="item" data-houseid="105100733746"><a class="img" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100733746.html&amp;b=4" target="_blank" data-bl="list" data-log_index="29" data-housecode="105100733746" data-is_focus=""  data-el="ershoufang"><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original="/350200-inspection/0cd0895f-a393-4b20-b739-321a41b55a8b.jpg.437x300.jpg"><div class="btn-follow follow" data-hid="105100733746"><span class="star"></span><span class="follow-text">关注</span></div><div class="leftArrow"><span></span></div><div class="rightArrow"><span></span></div><div class="price"><span>485</span>万</div></a><a class="title" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100733746.html&amp;b=4" target="_blank" data-bl="list" data-log_index="29" data-housecode="105100733746" data-is_focus=""  data-el="ershoufang">公园 南北通透3房  满5年 中高楼层</a><div class="info">公园小学及周边<span>/</span>3室2厅<span>/</span>85.95平米<span>/</span>南 北<span>/</span>简装<span>/</span>无电梯</div><div class="tag"><span class="taxfree">房本满五年</span></div></div><div class="item" data-houseid="105100733664"><a class="img" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100733664.html&amp;b=4" target="_blank" data-bl="list" data-log_index="30" data-housecode="105100733664" data-is_focus=""  data-el="ershoufang"><img class="lj-lazy" src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fimg%2Fblank.gif%3F_v%3D20170616112508&amp;b=4" data-original="/350200-inspection/d74c8c8e-3c5a-4115-ac3e-1ea3fc1344b4.jpg.437x300.jpg"><div class="btn-follow follow" data-hid="105100733664"><span class="star"></span><span class="follow-text">关注</span></div><div class="leftArrow"><span></span></div><div class="rightArrow"><span></span></div><div class="price"><span>720</span>万</div></a><a class="title" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F105100733664.html&amp;b=4" target="_blank" data-bl="list" data-log_index="30" data-housecode="105100733664" data-is_focus=""  data-el="ershoufang">新港龙花园 3室2厅 720万</a><div class="info">莲坂<span>/</span>3室2厅<span>/</span>120平米<span>/</span>南 北<span>/</span>简装<span>/</span>无电梯</div><div class="tag"><span class="haskey">随时看房</span></div></div></div><!-- 无搜索结果 --><div id="noResultPush"></div><div class="contentBottom clear" ><div class="crumbs fl"><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2F&amp;b=4">链家网厦门站</a><span >&nbsp;&gt;&nbsp;</span><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F&amp;b=4">厦门二手房</a><span >&nbsp;&gt;&nbsp;</span><h1><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fsiming%2F&amp;b=4">思明二手房</a></h1></div><div class="page-box fr"><div class="page-box house-lst-page-box" comp-module='page' page-url="/ershoufang/siming/pg{page}co32ng1nb1/"page-data='{"totalPage":56,"curPage":33}'></div>


</div></div><div style="display:none;"><p>厦门二手房信息</p><p>链家网厦门站思明二手房频道提供真实、时时的思明二手房房源信息，思明二手房房源目前为1666套，全>部由线下经纪人确认核实上传，信息可靠，思明二手房用户可以在链家网思明二手房频道和思明二手房频道移动端最快速、最及时的找到自己想要的真>实、放心房源。链家网思明二手房平台，真房源，如你所见！</p><p>2001年育秀电梯房 湖滨北路 四房两厅 满五唯一 核心卖点:满五年唯一省税费 电梯高层房龄新 育秀小广场活动娱乐场所。 户型介绍:塔楼格局，钢混结构，电梯高层，原始格局是三房两厅两卫，目前出租办公改成四房。主卧带卫生间朝北看仙岳山，次卧朝北看育秀小区中庭。 周边配套:育秀小广场，湖滨北路，艺术馆，科技馆，体育馆，图书馆，大润发，博物馆。五一广场休闲娱乐场所。思明区成熟配套，让家成就舒适的美感，幸福要安全靠岸。南边筼筜湖，风景夜景都是难得的配套设施。 交通出行:体育路，育秀中路，湖滨北路，交通线路众多，公交车穿行，出行便利之所。 教育配套:楼下就是育秀里小区，思明区艺术幼儿园，滨北六年教育配套，中等三年派位。 税费解析:产权核验通过，出让性质的商品房，70年产权，2001年建成。产权满五年，目前业主名下唯一一套住宅，省去增值税，免除个人所得税，降低购房成本。客户购房首套契税1.5%。金鼎巷 东渡路 狐尾山 都市港湾 核心卖点:三房，客厅带阳台，低楼层，动静分离 户型介绍:楼层是低楼层，三房，1房朝南，2房朝北，采光好，客厅带阳台。居家装修。 税费解析:房子目前已经满2年，没有增值税，产证填发日期:2007年05月08日。 交通出行:公交车站是商检站，有到机场的公交，有到海沧的公交，有到集美的公交。</p></div></div><!-- 右侧sidebar --><div class="rightLayout"><div class="rightContent"><div class="map"><div class="pic"></div><button id="btn-map">试试地图找房</button></div><div class="price" id='priceSideBarContainer' log-mod="recommand_price"></div><div class="suggestAgent" id='suggestAgentContainer' log-mod="ershoufang_list_recommend-agent"></div><div class="suggestHouse" id="suggestHouseContainer" log-mod="recommand_house"></div><div class="suggestCommunity" id="suggestCommunityContainer" log-mod="ershoufang_list_recommend-community"></div><div class="wenda zixun" id="pushZixunContainer" log-mod="recommand_zixun"></div><div class="wenda SCROLLVIEWLOG" id="pushWendaContainer" log-mod="recommand_wenda"></div><div class="download"><div class="title">下载链家APP</div><div class="qr-code"><img width="94" height="94" src="/go.php?u=https%3A%2F%2Fajax.api.lianjia.com%2Fqr%2FgetDownloadQr%3Flocation%3Dright%26ljweb_channel_key%3Dershoufang_search&amp;b=4" alt="下载链家app"><div class="text"><p>扫描上方二维码</p><p>随时查看新房源</p><p class="get-more"><a href="/go.php?u=https%3A%2F%2Fwww.lianjia.com%2Fclient&amp;b=4">了解更多<img width="9" height="9" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGFBMVEUAAACcn6Gfn5+an5+bnqCbnqGfn5+cn6EV6DbuAAAAB3RSTlMA0BAw8LAgvf5k9AAAAEdJREFUKM9jIBOkBqMJhBcqoAmUC6EKmJSjKWEWR1eiiK6ECZsSA3QlzuhKSihRghDA0EJ/BWIoCgzh4YMIZALRYBrMQAkAAF5bGMBkrwzqAAAAAElFTkSuQmCC"></a></p></div></div></div></div></div></div><div id="pushCommunity" class="pushCommunity" log-mod="ershoufang_list_recommend-community"></div><div id="newHousePush" class="newHousePush"></div><div class="saveMegmask"></div><div class="saveok"><div class="fl"></div><div class="fr"><span>已成功保存搜索条件！</span><p>您可在搜索框右侧下拉列表中快速使用该条件。该条件有新房源出现时，我们将会用站内提醒的方式来通知您</p><label class="close">确定</label></div></div><div class="saveerror"><div class="fl"></div><div class="fr"><span>你的搜索条件已达到上限！</span><p>您可在搜索框右侧下拉列表中快速使用该条件。该条件有新房源出现时，我们将会用站内提醒的方式来通知您。</p><a href="/go.php?u=https%3A%2F%2Fuser.lianjia.com%2Fsite%2Fsearchlist%2F&amp;b=4" rel="nofollow">个人中心</a><label  class="close">取消</label></div></div><div class="footer"><div class="wrapper"><div class="f-title"><div class="fl"><ul><li><a href="/go.php?u=https%3A%2F%2Fwww.lianjia.com%2Fzhuanti%2Fhome%2F&amp;b=4" rel="nofollow" target="_blank">了解链家</a></li><li><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fabout%2Faboutlianjia%2F&amp;b=4" rel="nofollow" target="_blank">关于链家</a></li><li><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fabout%2Fcontactus%2F&amp;b=4" rel="nofollow" target="_blank">联系我们</a></li><li><a href="/go.php?u=https%3A%2F%2Fjoin.lianjia.com%2F&amp;b=4" rel="nofollow" target="_blank">加入我们</a></li><li><a href="/go.php?u=https%3A%2F%2Fwww.lianjia.com%2Fprivacy%2F&amp;b=4" rel="nofollow" target="_blank">隐私声明</a></li><li><a href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fsitemap%2F&amp;b=4" target="_blank">网站地图</a></li><li><a href="/go.php?u=https%3A%2F%2Fwww.lianjia.com%2Fnotice%2F7.html&amp;b=4" rel="nofollow" target="_blank">友情链接</a></li><li><a href="/go.php?u=https%3A%2F%2Fagent.lianjia.com%2F&amp;b=4" rel="nofollow" target="_blank">经纪人登录</a></li></ul></div><div class="fr">官方客服 1010 9666</div></div><div class="lianjia-link-box"><div class="fl"><div class="tab"><span  class="hover">厦门小区二手房</span><span >热门城市二手房</span><span >热门城市租房网</span><span >热门城市楼盘</span></div><div class="link-list"><div><dd><a target="_blank" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fc3911053751704%2F&amp;b=4">新景园二手房</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fc3911054998765%2F&amp;b=4">莲富大厦二手房</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fc3911053841025%2F&amp;b=4">泛华大厦二手房</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fc3911099724180%2F&amp;b=4">白鹭花园二手房</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fc3911057157755%2F&amp;b=4">屿后西社区二手房</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fc3911053586004%2F&amp;b=4">福园公寓二手房</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fc399098932530701%2F&amp;b=4">森海丽景二手房</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fc3911053474543%2F&amp;b=4">皓晖花园二手房</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fc3911057239071%2F&amp;b=4">金祥大厦二手房</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fc3911053692545%2F&amp;b=4">嘉禾商业中心二手房</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fc3910027472268298%2F&amp;b=4">中山路二手房</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fc3911053531687%2F&amp;b=4">罗宾森购物广场二手房</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fc3911059316237%2F&amp;b=4">豆仔尾路二手房</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fc3911099925890%2F&amp;b=4">万泰东方二手房</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fc3911057132259%2F&amp;b=4">湖北大厦二手房</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fc3911054909140%2F&amp;b=4">湖光社区二手房</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fc3911057449198%2F&amp;b=4">水晶APPLE二手房</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fc3911099682076%2F&amp;b=4">新景数码港二手房</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fc3911063903491%2F&amp;b=4">观海澜庭二手房</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fc3911054910225%2F&amp;b=4">假日花园二手房</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fc3911054882467%2F&amp;b=4">翡翠城二手房</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fc3911054858408%2F&amp;b=4">槟榔西里双号区二手房</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fc3911057241838%2F&amp;b=4">厦门千禧园二手房</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fc3911057136457%2F&amp;b=4">天宝大厦二手房</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fc3911057583335%2F&amp;b=4">中骏天峰二手房</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fc3911057596274%2F&amp;b=4">宝马花园二手房</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fc3911053456587%2F&amp;b=4">骏景园二手房</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fc3911054921964%2F&amp;b=4">南湖中祥大厦二手房</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fc3911057213690%2F&amp;b=4">绿家园二手房</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2Fc3911059334561%2F&amp;b=4">亿力琴园二手房</a></dd></div><div><dd><a target="_blank" href="/go.php?u=https%3A%2F%2Fbj.lianjia.com%2Fershoufang%2F&amp;b=4">北京二手房</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fgz.lianjia.com%2Fershoufang%2F&amp;b=4">广州二手房</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fsz.lianjia.com%2Fershoufang%2F&amp;b=4">深圳二手房</a><a target="_blank" href="/go.php?u=https%3A%2F%2Ftj.lianjia.com%2Fershoufang%2F&amp;b=4">天津二手房</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fcd.lianjia.com%2Fershoufang%2F&amp;b=4">成都二手房</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fnj.lianjia.com%2Fershoufang%2F&amp;b=4">南京二手房</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fhz.lianjia.com%2Fershoufang%2F&amp;b=4">杭州二手房</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fqd.lianjia.com%2Fershoufang%2F&amp;b=4">青岛二手房</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fdl.lianjia.com%2Fershoufang%2F&amp;b=4">大连二手房</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fershoufang%2F&amp;b=4">厦门二手房</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fwh.lianjia.com%2Fershoufang%2F&amp;b=4">武汉二手房</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fcq.lianjia.com%2Fershoufang%2F&amp;b=4">重庆二手房</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fcs.lianjia.com%2Fershoufang%2F&amp;b=4">长沙二手房</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fjn.lianjia.com%2Fershoufang%2F&amp;b=4">济南二手房</a><a target="_blank" href="/go.php?u=https%3A%2F%2Ffs.lianjia.com%2Fershoufang%2F&amp;b=4">佛山二手房</a></dd></div><div><dd><a target="_blank" href="/go.php?u=https%3A%2F%2Fbj.lianjia.com%2Fzufang%2F&amp;b=4">北京租房</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fgz.lianjia.com%2Fzufang%2F&amp;b=4">广州租房</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fsz.lianjia.com%2Fzufang%2F&amp;b=4">深圳租房</a><a target="_blank" href="/go.php?u=https%3A%2F%2Ftj.lianjia.com%2Fzufang%2F&amp;b=4">天津租房</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fcd.lianjia.com%2Fzufang%2F&amp;b=4">成都租房</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fnj.lianjia.com%2Fzufang%2F&amp;b=4">南京租房</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fhz.lianjia.com%2Fzufang%2F&amp;b=4">杭州租房</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fqd.lianjia.com%2Fzufang%2F&amp;b=4">青岛租房</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fdl.lianjia.com%2Fzufang%2F&amp;b=4">大连租房</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fxm.lianjia.com%2Fzufang%2F&amp;b=4">厦门租房</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fwh.lianjia.com%2Fzufang%2F&amp;b=4">武汉租房</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fcq.lianjia.com%2Fzufang%2F&amp;b=4">重庆租房</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fcs.lianjia.com%2Fzufang%2F&amp;b=4">长沙租房</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fjn.lianjia.com%2Fzufang%2F&amp;b=4">济南租房</a></dd></div><div><dd><a target="_blank" href="/go.php?u=https%3A%2F%2Fsh.fang.lianjia.com%2F&amp;b=4">北京楼盘</a><a target="_blank" href="/go.php?u=https%3A%2F%2Ftj.fang.lianjia.com%2F&amp;b=4">天津楼盘</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fnj.fang.lianjia.com%2F&amp;b=4">南京楼盘</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fcd.fang.lianjia.com%2F&amp;b=4">成都楼盘</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fdl.fang.lianjia.com%2F&amp;b=4">大连楼盘</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fqd.fang.lianjia.com%2F&amp;b=4">青岛楼盘</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fhz.fang.lianjia.com%2F&amp;b=4">杭州楼盘</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fwh.fang.lianjia.com%2F&amp;b=4">武汉楼盘</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fsz.fang.lianjia.com%2F&amp;b=4">深圳楼盘</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fcq.fang.lianjia.com%2F&amp;b=4">重庆楼盘</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fcs.fang.lianjia.com%2F&amp;b=4">长沙楼盘</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fxa.fang.lianjia.com%2F&amp;b=4">西安楼盘</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fjn.fang.lianjia.com%2F&amp;b=4">济南楼盘</a><a target="_blank" href="/go.php?u=https%3A%2F%2Fsjz.fang.lianjia.com%2F&amp;b=4">石家庄楼盘</a></dd></div></div></div><div class="clear"></div></div><div class="bottom"><div class="copyright fl">北京链家房地产经纪有限公司 | 网络经营许可证 京ICP备11024601号-12 | © Copyright©2010-2017 链家网Lianjia.com版权所有</div></div></div></div>

<script src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fbase%2Ffe.js%3F_v%3D20170616112508&amp;b=4"></script><script src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2Fcommon%2Fcommon.js%3F_v%3D20170616112508&amp;b=4"></script><div style="display:none"><script src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fdep%2Fljanalytics.js%3F_v%3D20170616112508&amp;b=4"></script></div><div id="only" data-city="xm" data-page="ershoufang_search"></div>
<script>var path ='/feroot/pc/asset?_v=20170616112508'.split("?");require.config({baseUrl: path[0],paths: {'echarts' : '../../dep/echarts-1.4.1/build/echarts','echarts/chart/bar' : '../../dep/echarts-1.4.1/build/echarts','echarts/chart/line' : '../../dep/echarts-1.4.1/build/echarts','echarts/chart/pie' : '../../dep/echarts-1.4.1/build/echarts','echarts3' : '../../dep/echarts3/echarts3','common': 'common','jquery-ui': '../../dep/jquery-ui/jquery-ui.min','zeroclipboard': '../../dep/zeroclipboard-2.2.0/ZeroClipboard'},urlArgs:  path[1]});var feData = {"cityName": "北京","getFavHouseUrl":       "/api/gethousefav","setFavHouseUrl":       "/api/sethousefav","getLastSearch":        "/api/getlastsearch","getCommunityHistory":  "/api/getcommunityhistory","verifyHouse":          "/api/verifyHouse","getUser":              "/api/getUser","verifyCode":           "/api/getVerifyCode","complaint":            "/api/complaint","getDecoration":        "/api/getDecoration","trendData" :           "/site/getpicinfo"}</script>
<script type="text/template" id="priceSideBarTpl">
<%if(tag !== 'school'){%>
  <div class="title"><%=name%>最新参考均价</div>
  <div class="priceMap" id="priceChartContainer"></div>
  <a href="<%=fangjia_url%>" class="unitPrice" target="_blank">
    <span><%=month_trans%></span>元/平米
  </a>
  <div class="info">
    <a href="<%=fangjia_url%>" target="_blank">环比上月均价<%=month_trans_ratio>=0?'上涨':'下降'%> <%=month_trans_ratio%>%</a>
    <a href="<%=chengjiao_url%>" target="_blank">/ 近90天成交<%=sold_90_day%>套</a>
    <%if(tag === '小区'){%>
    <div>
      <a class="cardMoreDetail" href="<%=url%>" target="_blank">查看小区详情>></a>
    </div>
    <%}%>
  </div>
<%}else{%>
  <a class="title" href="<%=url%>" target="_blank"><%=name%></a>
  <div class="unitPrice school">
    <span><%=min_unit_price%></span>万元起
  </div>
  <div class="info">
    <a href="<%=url%>" target="_blank">本学区目前有在售二手房<%=sell_num%>套，划片小区<%=resblock_nums%>个</a>
    <a class="cardMoreDetail" href="<%=url%>"  target="_blank">查看学区详情>></a>
  </div>
<%}%>
</script>

<script type="text/template" id="suggestAgentTpl">
  <div class="title">推荐置业顾问</div>
  <div class="agent">
    <a class="img <%= (desc.search('学区') > -1) ? '': 'LOGVIEW LOGCLICK'%>" href="<%=url%>" target="_blank" data-bl="agent_<%= (desc.search('学区') > -1) ? 'school': 'community'%>" data-el="<%=ucid%>" data-log_id="20001">
      <img src="<%=photo_url%>" alt="">
    </a>
    <div class="info">
      <div class="name">
        <a href="<%=url%>" target="_blank" data-bl="agent_<%= (desc.search('学区') > -1) ? 'school': 'community'%>" data-el="<%=ucid%>" class="<%= (desc.search('学区') > -1) ? '': 'LOGCLICK'%>" data-log_id="20001"><%=name%></a>
        <a class="lianjiaim-createtalk <%= (desc.search('学区') > -1) ? '': 'LOGCLICK'%>" style="padding: 1px 0 !important;" title="在线咨询" data-role="lianjiaim-createtalk" data-ucid="<%=ucid%>" data-bl="agentim_<%= (desc.search('学区') > -1) ? 'school': 'community'%>" data-el="<%=ucid%>" data-log_id="20001"></a>
      </div>
      <div class="phone"><%=phone%></div>
    </div>
  </div>
  <div class="agentInfo" title="<%=desc%>"><%=formatDesc%></div>
</script>
<script type="text/template" id="suggestHouseTpl">
  <a class="img" href="<%=url%>" target="_blank" data-bl="list" data-log_index="<%=index+1%>">
    <img src="<%=img_url%>" alt="">
    <div class="cover"></div>
    <div class="title">
      <span><%=title%></span>&nbsp;
    </div>
  </a>
  <div class="pointContainer">
  <%for(var i = 0; i < total; i++){%>
    <%if(index === i){%>
      <span data-index="<%=i%>" class="point selected"></span>
    <%}else{%>
      <span data-index="<%=i%>" class="point"></span>
    <%}%>
  <%}%>
  </div>
</script>
<script type="text/template" id="suggestCommunityTpl">
  <div class="title">小区推荐</div>
  <ul>
  <%for(var i = 0; i < list.length; i++){%>
    <li>
      <a href="<%=list[i].url%>" class="img LOGVIEW LOGCLICK" data-log_id="30001" target="_blank" data-log_index="<%=i+1%>" data-bl="<%=$.trim($('.list-more dl:first dt').text()) === '小区' ? 'community' : 'bizcircle'%>" data-el="">
        <%if(list[i].pic) {%>
          <img src="<%=list[i].picUri%>.280x210.jpg">
        <%}else{%>
          <span class="noimg">暂无图片</span>
        <%}%>
        <div class="price">
          <%if(list[i].price!=0 && list[i].price) {%><%=parseFloat(list[i].price, 10).toFixed()%>元/平<%}else{%>暂无均价<%}%>
        </div>
      </a>
      <div class="info clear">
        <a href="<%=list[i].url%>" target="_blank" class="fl"><%=list[i].name%></a>
        <div class="fr"><%=list[i].sellNum%>套在售</div>
      </div>
      <div class="desc"><%=list[i].desc%></div>
    </li>
  <%}%>
  </ul>
</script>
<script type="text/template" id="pushZhuanjiaTpl">
  <span class="name">推荐学区顾问</span>
  <span class="fl pic">
    <img src='<%=list.photoPath%>'>
  </span>
  <span class="fl">
    <a href="<%=list.agentUrl%>" target="_blank"><%=list.name%></a>
    <a class="lianjiaim-createtalk" style="display: none;" title="在线咨询" data-role="lianjiaim-createtalk" data-ucid="<%=list.agent_ucid%>"></a>
    <p class="tel"><%=list.phoneNumber%></p>
  </span>
  <p class="tips">
    <%=list.desc%>
  </p>
</script>

<script type="text/template" id="pushXuexiaoTpl">
  <div class="title"><%=data.regionName%>近期热门学校</div>
  <ul>
  <% var list = data.list;for(var i = 0;i < list.length; i++){%>
    <li class="li<%=i%>">
      <i></i>
      <a class="info" href="<%=list[i].viewUrl%>" target="_blank"><%=list[i].schoolName%></a>
      <span><%=list[i].viewCount%>浏览</span>
    </li>
  <%}%>
  </ul>
</script>
<script type="text/template" id="pushChenjiaoTpl">
  <div class="title"><%=data.regionName%>近期成交</div>
  <ul>
  <% var list = data.list; for(var i = 0;i < list.length; i++){%>
    <li class="li<%=i%>">
      <i></i>
      <a class="info" href="<%=list[i].viewUrl%>" target="_blank"><%=list[i].schoolName%></a>
      <span><%=list[i].dealCount%>套</span>
    </li>
  <%}%>
  </ul>
</script>
<script type="text/template" id="pushXuequTpl">
  <div class="title">热点精选</div>
  <ul>
  <%for(var i = 0;i < list.length; i++){%>
    <li>
      <a class="info" href="<%=list[i].pc_url%>" target="_blank"><%=list[i].title%></a>
    </li>
  <%}%>
  </ul>
</script>
<script type="text/template" id="pushZixunTpl">
  <div class="title">热点精选</div>
  <ul>
  <%for(var i = 0;i < list.length; i++){%>
    <li>
      <a class="info" href="<%=list[i].url%>" target="_blank" data-bl="list" data-log_index="<%=i+1%>">
        <i class="opt<%=i%>"><%=i+1%></i><span><%=list[i].question_title%></span>
      </a>
    </li>
  <%}%>
  </ul>
</script>
<script type="text/template" id="pushWendaTpl">
  <div class="title">热门问答</div>
  <ul>
  <%for(var i = 0;i < list.length; i++){%>
    <li>
      <a class="info" href="<%=list[i].url%>" target="_blank" data-bl="list" data-log_index="<%=i+1%>"><%=list[i].question_title%></a>
      <span class="time"><%=list[i].mtime%></span>
    </li>
  <%}%>
  </ul>
</script>
<script type="text/template" id="newAddHouseTpl">
  <div class="newAddHouse">
    自从您上次浏览（<%=time%>）之后，该搜索条件下新增加了<%=count%>套房源
    <a href="<%=url%>" class="LOGNEWERSHOUFANGSHOW" <%=logText%>><%=linkText%></a>
    <span class="newHouseRightClose">x</span>
  </div>
</script>
<script type="text/template" id="pushXinfangTpl">
  <div class="newHousePushContainer">
    <h3>推荐楼盘</h3>
    <ul log-mod="ershoufang_list_newHouseRecommand">
      <%for(var i = 0; i < list.length; i++){%>
        <li>
          <a class="pic LOGVIEW LOGCLICK" href="<%=list[i].view_url%>" target="_blank" data-bl="list" data-log_id="40001" data-el="<%=strategy_version%>" data-log_index="<%=i+1%>">
            <span class="bg"></span>
            <%if(list[i].cover_pic){%>
              <img src="<%=list[i].cover_pic%>.218x150.jpg">
            <%}else{%>
              <div class="mark"></div>
            <%}%>
            <div class="description" ><%=list[i].district_name%>－<%=list[i].resblock_name%></div>
          </a>
          <%if(list[i].rooms){%>
            <p class="area">
              <%=list[i].rooms%>
              <%if(list[i].min_frame_area != '' && list[i].max_frame_area != ''){%>
                &nbsp;-&nbsp;
                <%=list[i].min_frame_area%>~<%=list[i].max_frame_area%>平
              <%}%>
            </p>
          <%}%>
          <div class="price">
            <%if(list[i].show_price && list[i].show_price != 0){%>
              <i><%=list[i].show_price%></i>
              <%=list[i].show_price_unit%>
            <%}else{%>
              价格待定
            <%}%>
          </div>
        </li>
      <%}%>
    </ul>
  </div>
</script>

<script type="text/javascript">
require(['ershoufang/sellList/index'], function (main) {
  main({
    sidebar:{"type":"district","cityId":350200,"uuid":"28f29ae3-17ec-4dbf-afcd-d638555c1265","ucid":null,"id":"23008796"},
    url:'/web/ershoufang/sidebar',
    xuequUrl : '/web/ershoufang/sidebarxuequ',
    ifXuqu: "\/ershoufang\/",
    ids: '105100737092,105100736901,105100736801,105100736602,105100736551,105100736531,105100736330,105100736310,105100736230,105100736210,105100736052,105100736008,105100735932,105100735876,105100735806,105100735710,105100735587,105100735540,105100735117,105100735048,105100734979,105100734807,105100734566,105100734266,105100734157,105100733994,105100733940,105100733811,105100733746,105100733664',
    SIRKeyword:"",
    count: 1666,
    pageNum:33,
    cid: null,
    bid: null,
    ucid: '',
    uuid: '28f29ae3-17ec-4dbf-afcd-d638555c1265',
    loadingImg: 'https://s1.ljcdn.com/feroot/pc/asset/ershoufang/sellDetail/img/loading.gif?_v=20170616112508',
    qrImg: '//ajax.api.lianjia.com/qr/getDownloadQr'
  });

});


;;+function() {
    LjUserTrack.send({
        "ljweb_id": "10001",
        "ljweb_mod": "ershoufang_list_view",
        "ljweb_bl": "spk_0",
        "ljweb_el": "1666",
        "ljweb_value": "",
    });
    var isHaveAgentCard = false
    var clickLinkBl = 'list';
    var resblockId = '';
    if(isHaveAgentCard){
      clickLinkBl = 'list_have_sem_card';
      resblockId = ""
    }
    $(document.body).on("click", "[data-el='ershoufang']", function() {
        var $m = $(this);
        LjUserTrack.send({
            "ljweb_id": "10002",
            "ljweb_mod": "ershoufang_list_list",
            "ljweb_bl": clickLinkBl,
            "ljweb_el": "ershoufang",
            "ljweb_index": $m.attr("data-log_index"),
            "ljweb_url": $m.attr("href"),
            "ljweb_value":resblockId,
            "ljweb_is_focus" : $m.attr("data-is_focus") || 0,
            "ljweb_house_code" : $m.attr('data-housecode')
        });

    });

    $(document.body).on("mousedown", ".input [data-bl='sug'] [data-log_value]", function() {
        var $m = $(this);
        var actionId = $m.closest('[data-bl="sug"]').attr("data-el") === 'history' ? '10004' : '10003';
        LjUserTrack.send({
            "ljweb_id": actionId,
            "ljweb_mod": "ershoufang_list_search",
            "ljweb_bl": "search",
            "ljweb_el": $m.attr("data-log_value"),
            "ljweb_index": $m.attr("data-log_index"),
            "ljweb_value": $.trim($("#searchInput").val()),
            "ljweb_url": $m.attr("href")
        });
    });
    $("#searchForm").on("submit", function() {
        var $m = $(this);
        LjUserTrack.send({
            "ljweb_id": "10008",
            "ljweb_mod": "ershoufang_list_search",
            "ljweb_bl": "search",
            "ljweb_value": $.trim($("#searchInput").val())
        });
    });

}();
</script>
<script>require(['common/suggestion'], function (suggestion) {window.defaultSuggest = suggestion.init({requestOptions: {cityId: '350200',cityName: '厦门'},url: '/api/headerSearch?channel=ershoufang&q=',main: '#keyword-box',appendTo: '#suggest-cont',redirect: true});});</script><div class="loninContaner"><div class="overlay_bg"></div><div class="panel_login animated" id="dialog"><div class="panel_info"><div class="panel_tab"><div class="title"><div class="fl">用户登录</div><label class="fr">还没有链家网账号？<a href="/go.php?u=https%3A%2F%2Fpassport.lianjia.com%2Fregister%2Fresources%2Flianjia%2Fregister.html%3Fservice%3Dhttp%253A%252F%252Fbj.lianjia.com%252F&amp;b=4" rel="nofollow">马上注册</a></label></div><div class="clear"></div><div id="con_login_user"><form action="" method="post"><ul><li class="show-error"><dd>用户名或密码错误</dd></li><li class="item userName"><i></i><input type="text" class="the_input users" placeholder="请输入手机号" /></li><li class="item pwd"><i></i><input type="password" class="the_input password"  placeholder="请输入登录密码"/></li><li class="item checkVerimg" style="display:none;"><i></i><input type="text" class="the_input ver-img" maxlength="4"  placeholder="请输入验证码"/><img class="verImg"></li><li class="li_01"><label><input type="checkbox" name="remember" value="1" class="mind-login" checked>下次自动登录</label><a href="/go.php?u=https%3A%2F%2Fpassport.lianjia.com%2Fregister%2Fresources%2Flianjia%2Fforget.html%3Fservice%3Dhttp%3A%2F%2Fbj.lianjia.com%2F&amp;b=4" rel="nofollow">找回密码</a></li><li><a class="login-user-btn"  />立即登录</a></li></ul></form></div><div id="con_login_agent" class="undis"><form action="" method="post"><ul><li class="item"><dd></dd><input type="text" class="the_input users" placeholder="输入经纪人ID号码" /></li><li class="item"><input type="password" class="the_input password"  placeholder="登录密码"/></li><li class="li_01"><label><input type="checkbox" name="remember" value="1" class="mind-login">下次自动登录</label><a href="/go.php?u=https%3A%2F%2Fpassport.lianjia.com%2Fregister%2Fresources%2Flianjia%2Fforget.html%3Fservice%3Dhttp%3A%2F%2Fbj.lianjia.com%2F&amp;b=4" rel="nofollow">找回密码</a></li><li><input class="login-agent-btn" value="立即登录"/></li></ul></form></div></div></div><div class="registered"></div></div></div>
<!-- LianjiaIM Style --><link property='stylesheet' rel="stylesheet" href="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fferoot%2Fpc%2Fasset%2FlianjiaIM%2Fcss%2Flianjiaim.css%3F_v%3D20170616112508&amp;b=4"/><script src="/go.php?u=https%3A%2F%2Fs1.ljcdn.com%2Fweb-im-sdk%2Fstatic%2F0.9%2Fljim-core.min.js%3F_v%3D20170616&amp;b=4"></script><script>(function() {var imConf = {"ajaxroot":"\/\/ajax.api.lianjia.com\/","imAppid":"LIANJIA_WEB_20160624","imAppkey":"6dfdcee27d78b1107fceeca55d80b7bd"};$.listener.on('userInfo', function (data) {if (data.code === 1) {data.ucid = '';}require(['lianjiaIM/lianjiaim'], function (LianjiaIM) {var ljim = new LianjiaIM({appid: imConf.imAppid,appkey: imConf.imAppkey,userData: data,staticRoot: 'https://s1.ljcdn.com/feroot/?_v=20170616112508'});});});})();</script><script type="text/javascript">var advert ='/feroot/pc/asset/common/advert.js?_v=20170616112508';
    $.listener.on('userInfo', function (data) {
      window.loginData = data;
    });
    var mvl = document.createElement('script');
    mvl.type = 'text/javascript';
    mvl.async = true;
    mvl.src = parseURL(advert);
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(mvl, s);
  </script><script type="text/javascript">(function(){var bp = document.createElement('script');var curProtocol = window.location.protocol.split(':')[0];if (curProtocol === 'https'){bp.src = parseURL('https://zz.bdstatic.com/linksubmit/push.js');} else {bp.src = parseURL('http://push.zhanzhang.baidu.com/push.js');}var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(bp, s);})();</script></body></html>
`;
const main = async ()=>{
  logger.enableDebug();
  let LC = new LianjiaHouseCollector();
  LC.setHtml(html);
  let page = LC.getTotalPage();
  logger.debug(page);
  LC.setDistrict('翔安');
  await LC.save();

  LC.setHtml(proxyHtml);
  LC.setDistrict('思明');
  await LC.save();
}
main();
