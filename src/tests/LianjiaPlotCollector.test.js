import {LianjiaPlotCollector} from '../collectors/LianjiaPlotCollector';
import logger from '../utils/logger';
//data
let html = `
<!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge" /><meta http-equiv="Cache-Control" content="no-transform" /><meta http-equiv="Cache-Control" content="no-siteapp" /><meta http-equiv="Content-language" content="zh-CN" /><meta name="format-detection" content="telephone=no" /><meta name="applicable-device" content="pc"><link rel="alternate" media="only screen and (max-width: 640px)" href="" >
<meta name="mobile-agent" content="format=html5;url="><script>
ljConf = {
    city_id: '350200',
    city_abbr: 'xm',
    city_name: '厦门',
    channel: 'xiaoqu',
    page: 'xiaoqu_list',
    pageConfig: {"ajaxroot":"\/\/ajax.api.lianjia.com\/","imAppid":"LIANJIA_WEB_20160624","imAppkey":"6dfdcee27d78b1107fceeca55d80b7bd"},
    feroot: '//s1.ljcdn.com/feroot/',
    ucid:'',
    cdn:'1',
};
</script>

<title>厦门小区二手房(厦门链家网)</title>
<meta name="description" content="链家网厦门小区频道,现有厦门小区2127个.小区频道提供小区的二手房、租房、信息及厦门热门小区的排行情况.为您挑选小区提供便利,并提供小区户型功能,方便您找到适合自己的房子." />
<meta name="keywords" content="厦门小区,厦门小区,厦门小区房源,厦门小区二手房,厦门小区租房" />
<link href="/favicon.ico" type="image/x-icon" rel=icon><link href="/favicon.ico" type="image/x-icon" rel="shortcut icon"><link rel="stylesheet" href="https://s1.ljcdn.com/feroot/pc/asset/common.css?_v=20170616152539">
<link rel="stylesheet" href="https://s1.ljcdn.com/feroot/pc/asset/ershoufang/xiaoquList/index.css?_v=20170616152539">
<!--[if lt IE 9]><script type="text/javascript" src="https://s1.ljcdn.com/feroot/dep/common-require/html5.js?_v=20170616152539"></script><![endif]-->
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
        ljweb_channel: 'xiaoqu',
        ljweb_page: 'xiaoqu_list',
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
<div class="banner"><div class="container"><ul class="channelList"><li><a href="//www.lianjia.com/">首页</a></li><li  class=""><a href="https://xm.lianjia.com/ershoufang/" >二手房</a></li><li  class=""><a href="http://xm.fang.lianjia.com/" >新房</a></li><li  class=""><a href="https://xm.lianjia.com/zufang/" >租房</a></li><li  rel="nofollow"  class=""><a href="http://you.lianjia.com/" >旅居地产</a></li><li  class=""><a href="https://us.lianjia.com/" >海外</a></li><li  class="selected"><a href="https://xm.lianjia.com/xiaoqu/" >小区</a></li><li  class=""><a href="https://xm.lianjia.com/jingjiren/" >经纪人</a></li><li  class=""><a href="https://news.lianjia.com/xm/baike/" >百科</a></li><li  class=""><a href="https://xm.lianjia.com/tool.html" target="_blank">工具</a></li><li  class=""><a href="https://xm.lianjia.com/yezhu/" target="_blank">业主</a></li></ul><div class="banner-right"><div class="login" id="userInfoContainer"><i></i><a href="https://passport.lianjia.com/cas/login?service=https%3A%2F%2Fxm.lianjia.com%2Fxiaoqu%2F" id="loginBtn" rel="nofollow">登录</a>/<a href="https://passport.lianjia.com/register/resources/lianjia/register.html?service=https%3A%2F%2Fxm.lianjia.com%2Fxiaoqu%2F" rel="nofollow">注册</a></div><div class="phone"><i></i><span>热线电话1010-9666</span></div></div></div></div>


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

<div class="header"><div class="menu"><div class="menuLeft"><a href="/ershoufang/" class="logo"></a><ul class="typeList"><li ><a href="/ershoufang/"  title="厦门在售二手房" >在售</a></li><li ><a href="/chengjiao/"  title="厦门成交二手房" >成交</a></li><li class="selected"><a href="/xiaoqu/"  title="厦门小区二手房" >小区</a></li><li ><a href="/ditu/"  title="厦门地图找房二手房" target="_blank">地图找房</a></li><li ><a href="/tool.html"  title="厦门计算器二手房" >计算器</a></li></ul></div><div class="app"><a href="//www.lianjia.com/client/" target="_blank"><i></i>下载链家APP<img width="94" height="94" src="//ajax.api.lianjia.com/qr/getDownloadQr?location=menu_app&ljweb_channel_key=xiaoqu_list" alt="下载链家app"></a></div></div><div class="search"><div class="input" log-mod="search"><form id="searchForm" action='/ershoufang/rs'><input type="text" id="searchInput" value="" autocomplete="off"><div class="inputRightPart"><div class="save" id="savedSearchMsg"><span id="savedSearchCount">0</span>条已保存搜索<span id="savedSearchArrow" class="downArrow"></span></div><button type='submit' class="searchButton" data-bl="search" data-el="search">&nbsp;<i></i>&nbsp;</button></div></form><div class="searchMsg" id="searchMsgContainer"></div></div></div></div>


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
    channel:[{"name":"\u4e8c\u624b\u623f","action":"ershoufang","channel":"ershoufang","checked":1,"tipsHot":{"query":[{"string":"\u53e4\u9f99\u516c\u5bd3","url":"http:\/\/xm.lianjia.com\/ershoufang\/c3911058001822\/"},{"string":"\u6c38\u5347\u65b0\u57ce","url":"http:\/\/xm.lianjia.com\/ershoufang\/c3911057447132\/"},{"string":"\u5609\u76db\u8c6a\u56ed","url":"http:\/\/xm.lianjia.com\/ershoufang\/c3911057908838\/"},{"string":"\u534e\u4fa8\u6d77\u666f\u57ce","url":"http:\/\/xm.lianjia.com\/ershoufang\/c3911058020100\/"},{"string":"\u601d\u660e","url":"http:\/\/xm.lianjia.com\/ershoufang\/siming\/"}],"tips":"\u8bd5\u8bd5\u8f93\u5165\u7ec4\u5408\u6761\u4ef6\u627e\u623f\uff0c\u5982 \u83b2\u82b1 \u4e09\u5c45"}},{"name":"\u5c0f\u533a","action":"xiaoqu","channel":"xiaoqu","checked":0,"tipsHot":{"query":[{"string":"\u79b9\u6d32\u5c0a\u6d77","url":"http:\/\/xm.lianjia.com\/xiaoqu\/3911057515697\/"},{"string":"\u6d77\u665f\u7ef4\u591a\u5229\u4e9a","url":"http:\/\/xm.lianjia.com\/xiaoqu\/3911058038838\/"},{"string":"\u9752\u6625\u6d77\u5cb8","url":"http:\/\/xm.lianjia.com\/xiaoqu\/3911265908159265\/"},{"string":"\u5929\u6e56\u57ce\u5929\u6e56","url":"http:\/\/xm.lianjia.com\/xiaoqu\/3911057436176\/"},{"string":"\u4e16\u8302\u6e56\u6ee8\u9996\u5e9c","url":"http:\/\/xm.lianjia.com\/xiaoqu\/rs%E4%B8%96%E8%8C%82%E6%B9%96%E6%BB%A8%E9%A6%96%E5%BA%9C\/"},{"string":"\u79b9\u6d32\u4e2d\u592e\u6d77\u5cb8","url":"http:\/\/xm.lianjia.com\/xiaoqu\/rs%E7%A6%B9%E6%B4%B2%E4%B8%AD%E5%A4%AE%E6%B5%B7%E5%B2%B8\/"}],"tips":"\u8bf7\u8f93\u5165\u5c0f\u533a\u540d\u5f00\u59cb\u67e5\u627e\u5c0f\u533a"}},{"name":"\u65b0\u623f","action":"loupan","channel":"xinfang","checked":0,"tipsHot":{"query":[],"tips":""}},{"name":"\u79df\u623f","action":"zufang","channel":"zufang","checked":0,"tipsHot":{"query":[{"string":"\u6d77\u5ce1\u56fd\u9645\u793e\u533a","url":"http:\/\/xm.lianjia.com\/zufang\/c3911055520921\/"},{"string":"\u65b0\u666f\u56fd\u9645\u5916\u6ee9","url":"http:\/\/xm.lianjia.com\/zufang\/c3911057567022\/"},{"string":"\u79df\u623f   \u6709\u94a5\u5319","url":"http:\/\/xm.lianjia.com\/zufang\/ky1\/"}],"tips":"\u8bf7\u8f93\u5165\u533a\u57df\u3001\u5546\u5708\u6216\u5c0f\u533a\u540d\u5f00\u59cb\u627e\u623f"}},{"name":"\u7ecf\u7eaa\u4eba","action":"jingjiren","channel":"jingjiren","checked":0,"tipsHot":{"query":[],"tips":"\u8bf7\u8f93\u5165\u5546\u5708\u3001\u5c0f\u533a\u6216\u7ecf\u7eaa\u4eba\u7684\u59d3\u540d\u3001\u7535\u8bdd..."}}],
    curChannel:'ershoufang'
  };
</script>
<div class="m-filter">
      <div class="position">
      <dl>
        <h2><dt title="厦门小区位置">位置</dt></h2>
        <dd>
                  <a href="/xiaoqu/" class="selected" title="厦门小区区域">
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
                                                <a href="/xiaoqu/siming/"  title="厦门思明小区二手房 ">思明</a>
                                                                <a href="/xiaoqu/huli/"  title="厦门湖里小区二手房 ">湖里</a>
                                                                <a href="/xiaoqu/haicang/"  title="厦门海沧小区二手房 ">海沧</a>
                                                                <a href="/xiaoqu/jimei/"  title="厦门集美小区二手房 ">集美</a>
                                                                <a href="/xiaoqu/xiangan/"  title="厦门翔安小区二手房 ">翔安</a>
                                                                <a href="/xiaoqu/tongan/"  title="厦门同安小区二手房 ">同安</a>
                                          </div>
                      </div>
                    <!-- 地铁 -->
                    <!-- 学区 -->
                  </dd>
      </dl>
    </div>

  <div class="list-more">
                                                                                                                                                                                                                        <dl class=" hasmore" >
          <h2><dt title="厦门均价小区二手房">均价</dt></h2>
          <dd>
                                                                    <a href="/xiaoqu/p1/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">2万以下</span>
                              </a>
                                                                    <a href="/xiaoqu/p2/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">2-2.5万</span>
                              </a>
                                                                    <a href="/xiaoqu/p3/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">2.5-3万</span>
                              </a>
                                                                    <a href="/xiaoqu/p4/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">3-3.5万</span>
                              </a>
                                                                    <a href="/xiaoqu/p5/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">3.5-4万</span>
                              </a>
                                                                    <a href="/xiaoqu/p6/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">4万以上</span>
                              </a>
                                                              <span class="customFilter mt" data-role="price">
                <input type="text" role="minValue" value="">
                <span>-</span>
                <input type="text" role="maxValue" value="">&nbsp;
                                  <span>万</span>
                                <button class="btn-range hide" data-url="/xiaoqu/bp{min}ep{max}/">确定</button>
              </span>
                                                  <span class="btn-showmore">+ 更多及自定义</span>
                      </dd>
        </dl>
                                                                                                                                                          <dl class=" " >
          <h2><dt title="厦门楼龄小区二手房">楼龄</dt></h2>
          <dd>
                                                                    <a href="/xiaoqu/y1/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">5年以内</span>
                              </a>
                                                                    <a href="/xiaoqu/y2/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">10年以内</span>
                              </a>
                                                                    <a href="/xiaoqu/y3/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">15年以内</span>
                              </a>
                                                                    <a href="/xiaoqu/y4/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">20年以内</span>
                              </a>
                                                                    <a href="/xiaoqu/y5/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">20年以上</span>
                              </a>
                                                          </dd>
        </dl>
                </div>
  </div>
<div class="content"><!-- 左侧内容 --><div class="leftContent"><div class="orderFilter"><div class="orderTag"><ul><li class='selected'><h3><a href="/xiaoqu/">默认排序</span></a></h3></li><li ><h3><a href="/xiaoqu/cro21/">小区均价</a></h3></li><li ><h3><a href="/xiaoqu/cro11/">按成交量</a></h3></li></ul></div></div><div class="resultDes clear"><h2 class="total fl">共找到<span> 2127 </span>个小区</h2><div class="button fr"></div></div><ul class="listContent" log-mod="list"><li class="clear xiaoquListItem">
  <a class="img" href="https://xm.lianjia.com/xiaoqu/3911058020100/" target="_blank" rel="nofollow">
    <img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170616152539" data-original="https://image1.ljcdn.com/hdic-resblock/750d58a6-6ce3-430d-ab5e-a92bda888543.jpg.232x174.jpg" alt="华侨海景城">
  </a>
  <div class="info">
    <div class="title">
      <a href="https://xm.lianjia.com/xiaoqu/3911058020100/" target="_blank">华侨海景城</a>
          </div>
    <div class="houseInfo">
      <span class="houseIcon"></span>
            <a title="华侨海景城网签"  href="https://xm.lianjia.com/chengjiao/c3911058020100/" >90天成交3套</a>
      <span class="cutLine">|</span><a title="华侨海景城租房"  href="https://xm.lianjia.com/zufang/c3911058020100/" >11套正在出租</a>
    </div>
    <div class="positionInfo">
      <span class="positionIcon"></span>
      <a href="https://xm.lianjia.com/xiaoqu/siming/" class="district" title="思明小区">思明</a>
      &nbsp;<a href="https://xm.lianjia.com/xiaoqu/lundu/" class="bizcircle" title="轮渡小区">轮渡</a>&nbsp;
                  /&nbsp;2004年建成
          </div>
        <div class="tagList">
                </div>
  </div>
  <div class="xiaoquListItemRight">
    <div class="xiaoquListItemPrice">
            <div class="totalPrice"><span>78075</span>元/m<sup>2</sup></div>
            <div class="priceDesc">5月二手房参考均价</div>
    </div>
        <div class="xiaoquListItemSellCount">
      <a title="华侨海景城二手房" href="https://xm.lianjia.com/ershoufang/c3911058020100/" class="totalSellCount"><span>8</span>套</a>
      <div class="sellCountDesc">在售二手房</div>
    </div>
      </div>
</li>
<li class="clear xiaoquListItem">
  <a class="img" href="https://xm.lianjia.com/xiaoqu/3911058038838/" target="_blank" rel="nofollow">
    <img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170616152539" data-original="https://image1.ljcdn.com/hdic-resblock/35ce89ef-64b5-434e-9c37-02fa2f582037.jpg.232x174.jpg" alt="海晟维多利亚">
  </a>
  <div class="info">
    <div class="title">
      <a href="https://xm.lianjia.com/xiaoqu/3911058038838/" target="_blank">海晟维多利亚</a>
          </div>
    <div class="houseInfo">
      <span class="houseIcon"></span>
            <a title="海晟维多利亚网签"  href="https://xm.lianjia.com/chengjiao/c3911058038838/" >90天成交3套</a>
      <span class="cutLine">|</span><a title="海晟维多利亚租房"  href="https://xm.lianjia.com/zufang/c3911058038838/" >48套正在出租</a>
    </div>
    <div class="positionInfo">
      <span class="positionIcon"></span>
      <a href="https://xm.lianjia.com/xiaoqu/haicang/" class="district" title="海沧小区">海沧</a>
      &nbsp;<a href="https://xm.lianjia.com/xiaoqu/aluohaiguangchang/" class="bizcircle" title="阿罗海广场小区">阿罗海广场</a>&nbsp;
                  /&nbsp;2008年建成
          </div>
        <div class="tagList">
                </div>
  </div>
  <div class="xiaoquListItemRight">
    <div class="xiaoquListItemPrice">
            <div class="totalPrice"><span>46382</span>元/m<sup>2</sup></div>
            <div class="priceDesc">5月二手房参考均价</div>
    </div>
        <div class="xiaoquListItemSellCount">
      <a title="海晟维多利亚二手房" href="https://xm.lianjia.com/ershoufang/c3911058038838/" class="totalSellCount"><span>39</span>套</a>
      <div class="sellCountDesc">在售二手房</div>
    </div>
      </div>
</li>
<li class="clear xiaoquListItem">
  <a class="img" href="https://xm.lianjia.com/xiaoqu/399793125757750/" target="_blank" rel="nofollow">
    <img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170616152539" data-original="https://image1.ljcdn.com/hdic-resblock/980d5d9a-777c-4caf-84db-8fbbd19e4095.jpg.232x174.jpg" alt="中航城国际社区C座">
  </a>
  <div class="info">
    <div class="title">
      <a href="https://xm.lianjia.com/xiaoqu/399793125757750/" target="_blank">中航城国际社区C座</a>
          </div>
    <div class="houseInfo">
      <span class="houseIcon"></span>
            <a title="中航城国际社区C座网签"  href="https://xm.lianjia.com/chengjiao/c399793125757750/" >90天成交7套</a>
      <span class="cutLine">|</span><a title="中航城国际社区C座租房"  href="https://xm.lianjia.com/zufang/c399793125757750/" >27套正在出租</a>
    </div>
    <div class="positionInfo">
      <span class="positionIcon"></span>
      <a href="https://xm.lianjia.com/xiaoqu/jimei/" class="district" title="集美小区">集美</a>
      &nbsp;<a href="https://xm.lianjia.com/xiaoqu/jimeixincheng/" class="bizcircle" title="集美新城小区">集美新城</a>&nbsp;
                  /&nbsp;2015年建成
          </div>
        <div class="tagList">
                </div>
  </div>
  <div class="xiaoquListItemRight">
    <div class="xiaoquListItemPrice">
            <div class="totalPrice"><span>40963</span>元/m<sup>2</sup></div>
            <div class="priceDesc">5月二手房参考均价</div>
    </div>
        <div class="xiaoquListItemSellCount">
      <a title="中航城国际社区C座二手房" href="https://xm.lianjia.com/ershoufang/c399793125757750/" class="totalSellCount"><span>23</span>套</a>
      <div class="sellCountDesc">在售二手房</div>
    </div>
      </div>
</li>
<li class="clear xiaoquListItem">
  <a class="img" href="https://xm.lianjia.com/xiaoqu/3911063943127/" target="_blank" rel="nofollow">
    <img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170616152539" data-original="https://image1.ljcdn.com/hdic-resblock/dc250b89-8ebc-4672-adc2-745a2c5cec21.jpg.232x174.jpg" alt="海峡国际社区二期">
  </a>
  <div class="info">
    <div class="title">
      <a href="https://xm.lianjia.com/xiaoqu/3911063943127/" target="_blank">海峡国际社区二期</a>
          </div>
    <div class="houseInfo">
      <span class="houseIcon"></span>
            <a title="海峡国际社区二期网签"  href="https://xm.lianjia.com/chengjiao/c3911063943127/" >90天成交2套</a>
      <span class="cutLine">|</span><a title="海峡国际社区二期租房"  href="https://xm.lianjia.com/zufang/c3911063943127/" >14套正在出租</a>
    </div>
    <div class="positionInfo">
      <span class="positionIcon"></span>
      <a href="https://xm.lianjia.com/xiaoqu/siming/" class="district" title="思明小区">思明</a>
      &nbsp;<a href="https://xm.lianjia.com/xiaoqu/huizhanzhongxin/" class="bizcircle" title="会展中心小区">会展中心</a>&nbsp;
                  /&nbsp;2009年建成
          </div>
        <div class="tagList">
                </div>
  </div>
  <div class="xiaoquListItemRight">
    <div class="xiaoquListItemPrice">
            <div class="totalPrice"><span>79699</span>元/m<sup>2</sup></div>
            <div class="priceDesc">5月二手房参考均价</div>
    </div>
        <div class="xiaoquListItemSellCount">
      <a title="海峡国际社区二期二手房" href="https://xm.lianjia.com/ershoufang/c3911063943127/" class="totalSellCount"><span>30</span>套</a>
      <div class="sellCountDesc">在售二手房</div>
    </div>
      </div>
</li>
<li class="clear xiaoquListItem">
  <a class="img" href="https://xm.lianjia.com/xiaoqu/3911057436176/" target="_blank" rel="nofollow">
    <img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170616152539" data-original="https://image1.ljcdn.com/hdic-resblock/473f0514-7d60-4d5d-9304-9b0151ab5755.jpg.232x174.jpg" alt="天湖城天湖">
  </a>
  <div class="info">
    <div class="title">
      <a href="https://xm.lianjia.com/xiaoqu/3911057436176/" target="_blank">天湖城天湖</a>
          </div>
    <div class="houseInfo">
      <span class="houseIcon"></span>
            <a title="天湖城天湖网签"  href="https://xm.lianjia.com/chengjiao/c3911057436176/" >90天成交1套</a>
      <span class="cutLine">|</span><a title="天湖城天湖租房"  href="https://xm.lianjia.com/zufang/c3911057436176/" >11套正在出租</a>
    </div>
    <div class="positionInfo">
      <span class="positionIcon"></span>
      <a href="https://xm.lianjia.com/xiaoqu/haicang/" class="district" title="海沧小区">海沧</a>
      &nbsp;<a href="https://xm.lianjia.com/xiaoqu/weilaihaianpianqu/" class="bizcircle" title="未来海岸片区小区">未来海岸片区</a>&nbsp;
                  /&nbsp;2012年建成
          </div>
        <div class="tagList">
                </div>
  </div>
  <div class="xiaoquListItemRight">
    <div class="xiaoquListItemPrice">
            <div class="totalPrice"><span>41171</span>元/m<sup>2</sup></div>
            <div class="priceDesc">5月二手房参考均价</div>
    </div>
        <div class="xiaoquListItemSellCount">
      <a title="天湖城天湖二手房" href="https://xm.lianjia.com/ershoufang/c3911057436176/" class="totalSellCount"><span>28</span>套</a>
      <div class="sellCountDesc">在售二手房</div>
    </div>
      </div>
</li>
<li class="clear xiaoquListItem">
  <a class="img" href="https://xm.lianjia.com/xiaoqu/3911057858315/" target="_blank" rel="nofollow">
    <img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170616152539" data-original="https://image1.ljcdn.com/hdic-resblock/ebbcbf8e-78ef-45a4-afc0-7884135cac70.jpg.232x174.jpg" alt="泉水湾一期">
  </a>
  <div class="info">
    <div class="title">
      <a href="https://xm.lianjia.com/xiaoqu/3911057858315/" target="_blank">泉水湾一期</a>
          </div>
    <div class="houseInfo">
      <span class="houseIcon"></span>
            <a title="泉水湾一期网签"  href="https://xm.lianjia.com/chengjiao/c3911057858315/" >90天成交6套</a>
      <span class="cutLine">|</span><a title="泉水湾一期租房"  href="https://xm.lianjia.com/zufang/c3911057858315/" >10套正在出租</a>
    </div>
    <div class="positionInfo">
      <span class="positionIcon"></span>
      <a href="https://xm.lianjia.com/xiaoqu/jimei/" class="district" title="集美小区">集美</a>
      &nbsp;<a href="https://xm.lianjia.com/xiaoqu/jimeiqita/" class="bizcircle" title="集美其它小区">集美其它</a>&nbsp;
                  /&nbsp;2010年建成
          </div>
        <div class="tagList">
                </div>
  </div>
  <div class="xiaoquListItemRight">
    <div class="xiaoquListItemPrice">
            <div class="totalPrice"><span>40613</span>元/m<sup>2</sup></div>
            <div class="priceDesc">5月二手房参考均价</div>
    </div>
        <div class="xiaoquListItemSellCount">
      <a title="泉水湾一期二手房" href="https://xm.lianjia.com/ershoufang/c3911057858315/" class="totalSellCount"><span>29</span>套</a>
      <div class="sellCountDesc">在售二手房</div>
    </div>
      </div>
</li>
<li class="clear xiaoquListItem">
  <a class="img" href="https://xm.lianjia.com/xiaoqu/397987335016608/" target="_blank" rel="nofollow">
    <img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170616152539" data-original="https://image1.ljcdn.com/hdic-resblock/2c9e533f-9a9d-4d15-bf07-94dbd3686044.jpg.232x174.jpg" alt="天源">
  </a>
  <div class="info">
    <div class="title">
      <a href="https://xm.lianjia.com/xiaoqu/397987335016608/" target="_blank">天源</a>
          </div>
    <div class="houseInfo">
      <span class="houseIcon"></span>
            <a title="天源网签"  href="https://xm.lianjia.com/chengjiao/c397987335016608/" >90天成交2套</a>
      <span class="cutLine">|</span><a title="天源租房"  href="https://xm.lianjia.com/zufang/c397987335016608/" >7套正在出租</a>
    </div>
    <div class="positionInfo">
      <span class="positionIcon"></span>
      <a href="https://xm.lianjia.com/xiaoqu/haicang/" class="district" title="海沧小区">海沧</a>
      &nbsp;<a href="https://xm.lianjia.com/xiaoqu/weilaihaianpianqu/" class="bizcircle" title="未来海岸片区小区">未来海岸片区</a>&nbsp;
                  /&nbsp;2014年建成
          </div>
        <div class="tagList">
                </div>
  </div>
  <div class="xiaoquListItemRight">
    <div class="xiaoquListItemPrice">
            <div class="totalPrice"><span>44015</span>元/m<sup>2</sup></div>
            <div class="priceDesc">5月二手房参考均价</div>
    </div>
        <div class="xiaoquListItemSellCount">
      <a title="天源二手房" href="https://xm.lianjia.com/ershoufang/c397987335016608/" class="totalSellCount"><span>9</span>套</a>
      <div class="sellCountDesc">在售二手房</div>
    </div>
      </div>
</li>
<li class="clear xiaoquListItem">
  <a class="img" href="https://xm.lianjia.com/xiaoqu/3911057565932/" target="_blank" rel="nofollow">
    <img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170616152539" data-original="https://image1.ljcdn.com/hdic-resblock/0e2b5dd5-cd79-40b7-a3a1-115fc80e1c14.jpg.232x174.jpg" alt="联发五缘湾一号">
  </a>
  <div class="info">
    <div class="title">
      <a href="https://xm.lianjia.com/xiaoqu/3911057565932/" target="_blank">联发五缘湾一号</a>
          </div>
    <div class="houseInfo">
      <span class="houseIcon"></span>
            <a title="联发五缘湾一号网签"  href="https://xm.lianjia.com/chengjiao/c3911057565932/" >90天成交1套</a>
      <span class="cutLine">|</span><a title="联发五缘湾一号租房"  href="https://xm.lianjia.com/zufang/c3911057565932/" >7套正在出租</a>
    </div>
    <div class="positionInfo">
      <span class="positionIcon"></span>
      <a href="https://xm.lianjia.com/xiaoqu/huli/" class="district" title="湖里小区">湖里</a>
      &nbsp;<a href="https://xm.lianjia.com/xiaoqu/wuyuanwan/" class="bizcircle" title="五缘湾小区">五缘湾</a>&nbsp;
                  /&nbsp;2007年建成
          </div>
        <div class="tagList">
                </div>
  </div>
  <div class="xiaoquListItemRight">
    <div class="xiaoquListItemPrice">
            <div class="totalPrice"><span>73051</span>元/m<sup>2</sup></div>
            <div class="priceDesc">5月二手房参考均价</div>
    </div>
        <div class="xiaoquListItemSellCount">
      <a title="联发五缘湾一号二手房" href="https://xm.lianjia.com/ershoufang/c3911057565932/" class="totalSellCount"><span>14</span>套</a>
      <div class="sellCountDesc">在售二手房</div>
    </div>
      </div>
</li>
<li class="clear xiaoquListItem">
  <a class="img" href="https://xm.lianjia.com/xiaoqu/3911057515697/" target="_blank" rel="nofollow">
    <img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170616152539" data-original="https://image1.ljcdn.com/hdic-resblock/56780bcf-3f9d-48e8-a205-4b3d6b110dbf.jpg.232x174.jpg" alt="禹洲尊海">
  </a>
  <div class="info">
    <div class="title">
      <a href="https://xm.lianjia.com/xiaoqu/3911057515697/" target="_blank">禹洲尊海</a>
          </div>
    <div class="houseInfo">
      <span class="houseIcon"></span>
            <a title="禹洲尊海网签"  href="https://xm.lianjia.com/chengjiao/c3911057515697/" >90天成交2套</a>
      <span class="cutLine">|</span><a title="禹洲尊海租房"  href="https://xm.lianjia.com/zufang/c3911057515697/" >32套正在出租</a>
    </div>
    <div class="positionInfo">
      <span class="positionIcon"></span>
      <a href="https://xm.lianjia.com/xiaoqu/haicang/" class="district" title="海沧小区">海沧</a>
      &nbsp;<a href="https://xm.lianjia.com/xiaoqu/weilaihaianpianqu/" class="bizcircle" title="未来海岸片区小区">未来海岸片区</a>&nbsp;
                  /&nbsp;2013年建成
          </div>
        <div class="tagList">
                </div>
  </div>
  <div class="xiaoquListItemRight">
    <div class="xiaoquListItemPrice">
            <div class="totalPrice"><span>42210</span>元/m<sup>2</sup></div>
            <div class="priceDesc">5月二手房参考均价</div>
    </div>
        <div class="xiaoquListItemSellCount">
      <a title="禹洲尊海二手房" href="https://xm.lianjia.com/ershoufang/c3911057515697/" class="totalSellCount"><span>32</span>套</a>
      <div class="sellCountDesc">在售二手房</div>
    </div>
      </div>
</li>
<li class="clear xiaoquListItem">
  <a class="img" href="https://xm.lianjia.com/xiaoqu/3911057565205/" target="_blank" rel="nofollow">
    <img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170616152539" data-original="https://image1.ljcdn.com/hdic-resblock/2d271060-5659-4fc3-9642-25cc69b3b220.jpg.232x174.jpg" alt="国贸润园">
  </a>
  <div class="info">
    <div class="title">
      <a href="https://xm.lianjia.com/xiaoqu/3911057565205/" target="_blank">国贸润园</a>
          </div>
    <div class="houseInfo">
      <span class="houseIcon"></span>
            <a title="国贸润园网签"  href="https://xm.lianjia.com/chengjiao/c3911057565205/" >90天成交0套</a>
      <span class="cutLine">|</span><a title="国贸润园租房"  href="https://xm.lianjia.com/zufang/c3911057565205/" >25套正在出租</a>
    </div>
    <div class="positionInfo">
      <span class="positionIcon"></span>
      <a href="https://xm.lianjia.com/xiaoqu/huli/" class="district" title="湖里小区">湖里</a>
      &nbsp;<a href="https://xm.lianjia.com/xiaoqu/wuyuanwan/" class="bizcircle" title="五缘湾小区">五缘湾</a>&nbsp;
                  /&nbsp;2012年建成
          </div>
        <div class="tagList">
                </div>
  </div>
  <div class="xiaoquListItemRight">
    <div class="xiaoquListItemPrice">
            <div class="totalPrice"><span>82974</span>元/m<sup>2</sup></div>
            <div class="priceDesc">5月二手房参考均价</div>
    </div>
        <div class="xiaoquListItemSellCount">
      <a title="国贸润园二手房" href="https://xm.lianjia.com/ershoufang/c3911057565205/" class="totalSellCount"><span>20</span>套</a>
      <div class="sellCountDesc">在售二手房</div>
    </div>
      </div>
</li>
<li class="clear xiaoquListItem">
  <a class="img" href="https://xm.lianjia.com/xiaoqu/3911055598032/" target="_blank" rel="nofollow">
    <img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170616152539" data-original="https://image1.ljcdn.com/hdic-resblock/79e47484-fd59-4b91-adc0-26181c21a17f.jpg.232x174.jpg" alt="凯悦新城">
  </a>
  <div class="info">
    <div class="title">
      <a href="https://xm.lianjia.com/xiaoqu/3911055598032/" target="_blank">凯悦新城</a>
          </div>
    <div class="houseInfo">
      <span class="houseIcon"></span>
            <a title="凯悦新城网签"  href="https://xm.lianjia.com/chengjiao/c3911055598032/" >90天成交2套</a>
      <span class="cutLine">|</span><a title="凯悦新城租房"  href="https://xm.lianjia.com/zufang/c3911055598032/" >15套正在出租</a>
    </div>
    <div class="positionInfo">
      <span class="positionIcon"></span>
      <a href="https://xm.lianjia.com/xiaoqu/huli/" class="district" title="湖里小区">湖里</a>
      &nbsp;<a href="https://xm.lianjia.com/xiaoqu/fanghu/" class="bizcircle" title="枋湖小区">枋湖</a>&nbsp;
                  /&nbsp;2009年建成
          </div>
        <div class="tagList">
                </div>
  </div>
  <div class="xiaoquListItemRight">
    <div class="xiaoquListItemPrice">
            <div class="totalPrice"><span>64838</span>元/m<sup>2</sup></div>
            <div class="priceDesc">5月二手房参考均价</div>
    </div>
        <div class="xiaoquListItemSellCount">
      <a title="凯悦新城二手房" href="https://xm.lianjia.com/ershoufang/c3911055598032/" class="totalSellCount"><span>16</span>套</a>
      <div class="sellCountDesc">在售二手房</div>
    </div>
      </div>
</li>
<li class="clear xiaoquListItem">
  <a class="img" href="https://xm.lianjia.com/xiaoqu/3911057489733/" target="_blank" rel="nofollow">
    <img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170616152539" data-original="https://image1.ljcdn.com/hdic-resblock/cd3dedfb-6800-47c8-97e0-c33cb90349bd.jpg.232x174.jpg" alt="水岸名筑">
  </a>
  <div class="info">
    <div class="title">
      <a href="https://xm.lianjia.com/xiaoqu/3911057489733/" target="_blank">水岸名筑</a>
          </div>
    <div class="houseInfo">
      <span class="houseIcon"></span>
            <a title="水岸名筑网签"  href="https://xm.lianjia.com/chengjiao/c3911057489733/" >90天成交2套</a>
      <span class="cutLine">|</span><a title="水岸名筑租房"  href="https://xm.lianjia.com/zufang/c3911057489733/" >17套正在出租</a>
    </div>
    <div class="positionInfo">
      <span class="positionIcon"></span>
      <a href="https://xm.lianjia.com/xiaoqu/haicang/" class="district" title="海沧小区">海沧</a>
      &nbsp;<a href="https://xm.lianjia.com/xiaoqu/weilaihaianpianqu/" class="bizcircle" title="未来海岸片区小区">未来海岸片区</a>&nbsp;
                  /&nbsp;2008年建成
          </div>
        <div class="tagList">
                </div>
  </div>
  <div class="xiaoquListItemRight">
    <div class="xiaoquListItemPrice">
            <div class="totalPrice"><span>37788</span>元/m<sup>2</sup></div>
            <div class="priceDesc">5月二手房参考均价</div>
    </div>
        <div class="xiaoquListItemSellCount">
      <a title="水岸名筑二手房" href="https://xm.lianjia.com/ershoufang/c3911057489733/" class="totalSellCount"><span>24</span>套</a>
      <div class="sellCountDesc">在售二手房</div>
    </div>
      </div>
</li>
<li class="clear xiaoquListItem">
  <a class="img" href="https://xm.lianjia.com/xiaoqu/3911055521789/" target="_blank" rel="nofollow">
    <img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170616152539" data-original="https://image1.ljcdn.com/hdic-resblock/0eb509de-b0c0-4133-8cc2-abee5268af3d.jpg.232x174.jpg" alt="海峡国际社区一期">
  </a>
  <div class="info">
    <div class="title">
      <a href="https://xm.lianjia.com/xiaoqu/3911055521789/" target="_blank">海峡国际社区一期</a>
          </div>
    <div class="houseInfo">
      <span class="houseIcon"></span>
            <a title="海峡国际社区一期网签"  href="https://xm.lianjia.com/chengjiao/c3911055521789/" >90天成交0套</a>
      <span class="cutLine">|</span><a title="海峡国际社区一期租房"  href="https://xm.lianjia.com/zufang/c3911055521789/" >10套正在出租</a>
    </div>
    <div class="positionInfo">
      <span class="positionIcon"></span>
      <a href="https://xm.lianjia.com/xiaoqu/siming/" class="district" title="思明小区">思明</a>
      &nbsp;<a href="https://xm.lianjia.com/xiaoqu/huizhanzhongxin/" class="bizcircle" title="会展中心小区">会展中心</a>&nbsp;
                  /&nbsp;2008年建成
          </div>
        <div class="tagList">
                </div>
  </div>
  <div class="xiaoquListItemRight">
    <div class="xiaoquListItemPrice">
            <div class="totalPrice"><span>77510</span>元/m<sup>2</sup></div>
            <div class="priceDesc">5月二手房参考均价</div>
    </div>
        <div class="xiaoquListItemSellCount">
      <a title="海峡国际社区一期二手房" href="https://xm.lianjia.com/ershoufang/c3911055521789/" class="totalSellCount"><span>19</span>套</a>
      <div class="sellCountDesc">在售二手房</div>
    </div>
      </div>
</li>
<li class="clear xiaoquListItem">
  <a class="img" href="https://xm.lianjia.com/xiaoqu/3911055602631/" target="_blank" rel="nofollow">
    <img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170616152539" data-original="https://image1.ljcdn.com/hdic-resblock/33df7894-eed1-46a2-9340-3558c0e6bba9.JPG.232x174.jpg" alt="联发欣悦园">
  </a>
  <div class="info">
    <div class="title">
      <a href="https://xm.lianjia.com/xiaoqu/3911055602631/" target="_blank">联发欣悦园</a>
          </div>
    <div class="houseInfo">
      <span class="houseIcon"></span>
            <a title="联发欣悦园网签"  href="https://xm.lianjia.com/chengjiao/c3911055602631/" >90天成交0套</a>
      <span class="cutLine">|</span><a title="联发欣悦园租房"  href="https://xm.lianjia.com/zufang/c3911055602631/" >21套正在出租</a>
    </div>
    <div class="positionInfo">
      <span class="positionIcon"></span>
      <a href="https://xm.lianjia.com/xiaoqu/huli/" class="district" title="湖里小区">湖里</a>
      &nbsp;<a href="https://xm.lianjia.com/xiaoqu/fanghu/" class="bizcircle" title="枋湖小区">枋湖</a>&nbsp;
                  /&nbsp;2007年建成
          </div>
        <div class="tagList">
                </div>
  </div>
  <div class="xiaoquListItemRight">
    <div class="xiaoquListItemPrice">
            <div class="totalPrice"><span>61681</span>元/m<sup>2</sup></div>
            <div class="priceDesc">5月二手房参考均价</div>
    </div>
        <div class="xiaoquListItemSellCount">
      <a title="联发欣悦园二手房" href="https://xm.lianjia.com/ershoufang/c3911055602631/" class="totalSellCount"><span>15</span>套</a>
      <div class="sellCountDesc">在售二手房</div>
    </div>
      </div>
</li>
<li class="clear xiaoquListItem">
  <a class="img" href="https://xm.lianjia.com/xiaoqu/3910637618196269/" target="_blank" rel="nofollow">
    <img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170616152539" data-original="https://image1.ljcdn.com/hdic-resblock/976c0c06-c539-4177-aadf-7ed77cfe1d8b.jpg.232x174.jpg" alt="水晶湖郡B区">
  </a>
  <div class="info">
    <div class="title">
      <a href="https://xm.lianjia.com/xiaoqu/3910637618196269/" target="_blank">水晶湖郡B区</a>
          </div>
    <div class="houseInfo">
      <span class="houseIcon"></span>
            <a title="水晶湖郡B区网签"  href="https://xm.lianjia.com/chengjiao/c3910637618196269/" >90天成交1套</a>
      <span class="cutLine">|</span><a title="水晶湖郡B区租房"  href="https://xm.lianjia.com/zufang/c3910637618196269/" >19套正在出租</a>
    </div>
    <div class="positionInfo">
      <span class="positionIcon"></span>
      <a href="https://xm.lianjia.com/xiaoqu/jimei/" class="district" title="集美小区">集美</a>
      &nbsp;<a href="https://xm.lianjia.com/xiaoqu/jimeixincheng/" class="bizcircle" title="集美新城小区">集美新城</a>&nbsp;
                  /&nbsp;2014年建成
          </div>
        <div class="tagList">
                </div>
  </div>
  <div class="xiaoquListItemRight">
    <div class="xiaoquListItemPrice">
            <div class="totalPrice"><span>40186</span>元/m<sup>2</sup></div>
            <div class="priceDesc">5月二手房参考均价</div>
    </div>
        <div class="xiaoquListItemSellCount">
      <a title="水晶湖郡B区二手房" href="https://xm.lianjia.com/ershoufang/c3910637618196269/" class="totalSellCount"><span>14</span>套</a>
      <div class="sellCountDesc">在售二手房</div>
    </div>
      </div>
</li>
<li class="clear xiaoquListItem">
  <a class="img" href="https://xm.lianjia.com/xiaoqu/397034761655158/" target="_blank" rel="nofollow">
    <img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170616152539" data-original="https://image1.ljcdn.com/hdic-resblock/5851a211-511f-4b03-8ac2-83aec708e759.jpg.232x174.jpg" alt="中骏蓝湾半岛">
  </a>
  <div class="info">
    <div class="title">
      <a href="https://xm.lianjia.com/xiaoqu/397034761655158/" target="_blank">中骏蓝湾半岛</a>
          </div>
    <div class="houseInfo">
      <span class="houseIcon"></span>
            <a title="中骏蓝湾半岛网签"  href="https://xm.lianjia.com/chengjiao/c397034761655158/" >90天成交0套</a>
      <span class="cutLine">|</span><a title="中骏蓝湾半岛租房"  href="https://xm.lianjia.com/zufang/c397034761655158/" >17套正在出租</a>
    </div>
    <div class="positionInfo">
      <span class="positionIcon"></span>
      <a href="https://xm.lianjia.com/xiaoqu/haicang/" class="district" title="海沧小区">海沧</a>
      &nbsp;<a href="https://xm.lianjia.com/xiaoqu/binhaishequ/" class="bizcircle" title="滨海社区小区">滨海社区</a>&nbsp;
                  /&nbsp;2008年建成
          </div>
        <div class="tagList">
                </div>
  </div>
  <div class="xiaoquListItemRight">
    <div class="xiaoquListItemPrice">
            <div class="totalPrice"><span>43085</span>元/m<sup>2</sup></div>
            <div class="priceDesc">5月二手房参考均价</div>
    </div>
        <div class="xiaoquListItemSellCount">
      <a title="中骏蓝湾半岛二手房" href="https://xm.lianjia.com/ershoufang/c397034761655158/" class="totalSellCount"><span>13</span>套</a>
      <div class="sellCountDesc">在售二手房</div>
    </div>
      </div>
</li>
<li class="clear xiaoquListItem">
  <a class="img" href="https://xm.lianjia.com/xiaoqu/3911057696961/" target="_blank" rel="nofollow">
    <img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170616152539" data-original="https://image1.ljcdn.com/hdic-resblock/cc7151a3-2629-47c9-8306-8383628642d4.jpg.232x174.jpg" alt="故宫裕景">
  </a>
  <div class="info">
    <div class="title">
      <a href="https://xm.lianjia.com/xiaoqu/3911057696961/" target="_blank">故宫裕景</a>
          </div>
    <div class="houseInfo">
      <span class="houseIcon"></span>
            <a title="故宫裕景网签"  href="https://xm.lianjia.com/chengjiao/c3911057696961/" >90天成交1套</a>
      <span class="cutLine">|</span><a title="故宫裕景租房"  href="https://xm.lianjia.com/zufang/c3911057696961/" >2套正在出租</a>
    </div>
    <div class="positionInfo">
      <span class="positionIcon"></span>
      <a href="https://xm.lianjia.com/xiaoqu/siming/" class="district" title="思明小区">思明</a>
      &nbsp;<a href="https://xm.lianjia.com/xiaoqu/lundu/" class="bizcircle" title="轮渡小区">轮渡</a>&nbsp;
                  /&nbsp;2008年建成
          </div>
        <div class="tagList">
                </div>
  </div>
  <div class="xiaoquListItemRight">
    <div class="xiaoquListItemPrice">
            <div class="totalPrice"><span>81024</span>元/m<sup>2</sup></div>
            <div class="priceDesc">5月二手房参考均价</div>
    </div>
        <div class="xiaoquListItemSellCount">
      <a title="故宫裕景二手房" href="https://xm.lianjia.com/ershoufang/c3911057696961/" class="totalSellCount"><span>3</span>套</a>
      <div class="sellCountDesc">在售二手房</div>
    </div>
      </div>
</li>
<li class="clear xiaoquListItem">
  <a class="img" href="https://xm.lianjia.com/xiaoqu/3911100333509/" target="_blank" rel="nofollow">
    <img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170616152539" data-original="https://image1.ljcdn.com/hdic-resblock/d27858c1-4473-4118-8943-e25d3cb443c0.jpg.232x174.jpg" alt="建发中央湾区一期">
  </a>
  <div class="info">
    <div class="title">
      <a href="https://xm.lianjia.com/xiaoqu/3911100333509/" target="_blank">建发中央湾区一期</a>
          </div>
    <div class="houseInfo">
      <span class="houseIcon"></span>
            <a title="建发中央湾区一期网签"  href="https://xm.lianjia.com/chengjiao/c3911100333509/" >90天成交0套</a>
      <span class="cutLine">|</span><a title="建发中央湾区一期租房"  href="https://xm.lianjia.com/zufang/c3911100333509/" >10套正在出租</a>
    </div>
    <div class="positionInfo">
      <span class="positionIcon"></span>
      <a href="https://xm.lianjia.com/xiaoqu/huli/" class="district" title="湖里小区">湖里</a>
      &nbsp;<a href="https://xm.lianjia.com/xiaoqu/wuyuanwan/" class="bizcircle" title="五缘湾小区">五缘湾</a>&nbsp;
                  /&nbsp;2014年建成
          </div>
        <div class="tagList">
                </div>
  </div>
  <div class="xiaoquListItemRight">
    <div class="xiaoquListItemPrice">
            <div class="totalPrice"><span>89895</span>元/m<sup>2</sup></div>
            <div class="priceDesc">5月二手房参考均价</div>
    </div>
        <div class="xiaoquListItemSellCount">
      <a title="建发中央湾区一期二手房" href="https://xm.lianjia.com/ershoufang/c3911100333509/" class="totalSellCount"><span>10</span>套</a>
      <div class="sellCountDesc">在售二手房</div>
    </div>
      </div>
</li>
<li class="clear xiaoquListItem">
  <a class="img" href="https://xm.lianjia.com/xiaoqu/3912065088482575/" target="_blank" rel="nofollow">
    <img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170616152539" data-original="" alt="中航城A区">
  </a>
  <div class="info">
    <div class="title">
      <a href="https://xm.lianjia.com/xiaoqu/3912065088482575/" target="_blank">中航城A区</a>
          </div>
    <div class="houseInfo">
      <span class="houseIcon"></span>
            <a title="中航城A区网签"  href="https://xm.lianjia.com/chengjiao/c3912065088482575/" >90天成交5套</a>
      <span class="cutLine">|</span><a title="中航城A区租房"  href="https://xm.lianjia.com/zufang/c3912065088482575/" >9套正在出租</a>
    </div>
    <div class="positionInfo">
      <span class="positionIcon"></span>
      <a href="https://xm.lianjia.com/xiaoqu/jimei/" class="district" title="集美小区">集美</a>
      &nbsp;<a href="https://xm.lianjia.com/xiaoqu/xingjinlu/" class="bizcircle" title="杏锦路小区">杏锦路</a>&nbsp;
                  /&nbsp;2014年建成
          </div>
        <div class="tagList">
                </div>
  </div>
  <div class="xiaoquListItemRight">
    <div class="xiaoquListItemPrice">
            <div class="totalPrice"><span>42174</span>元/m<sup>2</sup></div>
            <div class="priceDesc">5月二手房参考均价</div>
    </div>
        <div class="xiaoquListItemSellCount">
      <a title="中航城A区二手房" href="https://xm.lianjia.com/ershoufang/c3912065088482575/" class="totalSellCount"><span>12</span>套</a>
      <div class="sellCountDesc">在售二手房</div>
    </div>
      </div>
</li>
<li class="clear xiaoquListItem">
  <a class="img" href="https://xm.lianjia.com/xiaoqu/3911100778340/" target="_blank" rel="nofollow">
    <img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170616152539" data-original="https://image1.ljcdn.com/hdic-resblock/811a6020-20f8-4e7d-9761-ce3229df4d42.jpg.232x174.jpg" alt="建发中央湾区二期">
  </a>
  <div class="info">
    <div class="title">
      <a href="https://xm.lianjia.com/xiaoqu/3911100778340/" target="_blank">建发中央湾区二期</a>
          </div>
    <div class="houseInfo">
      <span class="houseIcon"></span>
            <a title="建发中央湾区二期网签"  href="https://xm.lianjia.com/chengjiao/c3911100778340/" >90天成交1套</a>
      <span class="cutLine">|</span><a title="建发中央湾区二期租房"  href="https://xm.lianjia.com/zufang/c3911100778340/" >9套正在出租</a>
    </div>
    <div class="positionInfo">
      <span class="positionIcon"></span>
      <a href="https://xm.lianjia.com/xiaoqu/huli/" class="district" title="湖里小区">湖里</a>
      &nbsp;<a href="https://xm.lianjia.com/xiaoqu/wuyuanwan/" class="bizcircle" title="五缘湾小区">五缘湾</a>&nbsp;
                  /&nbsp;2014年建成
          </div>
        <div class="tagList">
                </div>
  </div>
  <div class="xiaoquListItemRight">
    <div class="xiaoquListItemPrice">
            <div class="totalPrice"><span>63562</span>元/m<sup>2</sup></div>
            <div class="priceDesc">5月二手房参考均价</div>
    </div>
        <div class="xiaoquListItemSellCount">
      <a title="建发中央湾区二期二手房" href="https://xm.lianjia.com/ershoufang/c3911100778340/" class="totalSellCount"><span>8</span>套</a>
      <div class="sellCountDesc">在售二手房</div>
    </div>
      </div>
</li>
<li class="clear xiaoquListItem">
  <a class="img" href="https://xm.lianjia.com/xiaoqu/3911057707446/" target="_blank" rel="nofollow">
    <img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170616152539" data-original="https://image1.ljcdn.com/hdic-resblock/ab982d19-ad96-4696-a5c9-40fec2d641af.jpg.232x174.jpg" alt="金尚小区">
  </a>
  <div class="info">
    <div class="title">
      <a href="https://xm.lianjia.com/xiaoqu/3911057707446/" target="_blank">金尚小区</a>
          </div>
    <div class="houseInfo">
      <span class="houseIcon"></span>
            <a title="金尚小区网签"  href="https://xm.lianjia.com/chengjiao/c3911057707446/" >90天成交1套</a>
      <span class="cutLine">|</span><a title="金尚小区租房"  href="https://xm.lianjia.com/zufang/c3911057707446/" >9套正在出租</a>
    </div>
    <div class="positionInfo">
      <span class="positionIcon"></span>
      <a href="https://xm.lianjia.com/xiaoqu/huli/" class="district" title="湖里小区">湖里</a>
      &nbsp;<a href="https://xm.lianjia.com/xiaoqu/jinshang/" class="bizcircle" title="金尚小区">金尚</a>&nbsp;
                  /&nbsp;1996年建成
          </div>
        <div class="tagList">
                </div>
  </div>
  <div class="xiaoquListItemRight">
    <div class="xiaoquListItemPrice">
            <div class="totalPrice"><span>47627</span>元/m<sup>2</sup></div>
            <div class="priceDesc">5月二手房参考均价</div>
    </div>
        <div class="xiaoquListItemSellCount">
      <a title="金尚小区二手房" href="https://xm.lianjia.com/ershoufang/c3911057707446/" class="totalSellCount"><span>14</span>套</a>
      <div class="sellCountDesc">在售二手房</div>
    </div>
      </div>
</li>
<li class="clear xiaoquListItem">
  <a class="img" href="https://xm.lianjia.com/xiaoqu/3911057619827/" target="_blank" rel="nofollow">
    <img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170616152539" data-original="https://image1.ljcdn.com/hdic-resblock/f6ff3de7-4d45-460f-b880-4563e8fdbec5.jpg.232x174.jpg" alt="源昌国际城二期">
  </a>
  <div class="info">
    <div class="title">
      <a href="https://xm.lianjia.com/xiaoqu/3911057619827/" target="_blank">源昌国际城二期</a>
          </div>
    <div class="houseInfo">
      <span class="houseIcon"></span>
            <a title="源昌国际城二期网签"  href="https://xm.lianjia.com/chengjiao/c3911057619827/" >90天成交1套</a>
      <span class="cutLine">|</span><a title="源昌国际城二期租房"  href="https://xm.lianjia.com/zufang/c3911057619827/" >6套正在出租</a>
    </div>
    <div class="positionInfo">
      <span class="positionIcon"></span>
      <a href="https://xm.lianjia.com/xiaoqu/siming/" class="district" title="思明小区">思明</a>
      &nbsp;<a href="https://xm.lianjia.com/xiaoqu/sibei/" class="bizcircle" title="思北小区">思北</a>&nbsp;
                  /&nbsp;2007年建成
          </div>
        <div class="tagList">
                </div>
  </div>
  <div class="xiaoquListItemRight">
    <div class="xiaoquListItemPrice">
            <div class="totalPrice"><span>76555</span>元/m<sup>2</sup></div>
            <div class="priceDesc">5月二手房参考均价</div>
    </div>
        <div class="xiaoquListItemSellCount">
      <a title="源昌国际城二期二手房" href="https://xm.lianjia.com/ershoufang/c3911057619827/" class="totalSellCount"><span>2</span>套</a>
      <div class="sellCountDesc">在售二手房</div>
    </div>
      </div>
</li>
<li class="clear xiaoquListItem">
  <a class="img" href="https://xm.lianjia.com/xiaoqu/3911099678196/" target="_blank" rel="nofollow">
    <img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170616152539" data-original="https://image1.ljcdn.com/hdic-resblock/441da606-c93b-43bc-aaee-1441e6ba338d.jpg.232x174.jpg" alt="书香佳缘">
  </a>
  <div class="info">
    <div class="title">
      <a href="https://xm.lianjia.com/xiaoqu/3911099678196/" target="_blank">书香佳缘</a>
          </div>
    <div class="houseInfo">
      <span class="houseIcon"></span>
            <a title="书香佳缘网签"  href="https://xm.lianjia.com/chengjiao/c3911099678196/" >90天成交2套</a>
      <span class="cutLine">|</span><a title="书香佳缘租房"  href="https://xm.lianjia.com/zufang/c3911099678196/" >13套正在出租</a>
    </div>
    <div class="positionInfo">
      <span class="positionIcon"></span>
      <a href="https://xm.lianjia.com/xiaoqu/huli/" class="district" title="湖里小区">湖里</a>
      &nbsp;<a href="https://xm.lianjia.com/xiaoqu/fanghu/" class="bizcircle" title="枋湖小区">枋湖</a>&nbsp;
                  /&nbsp;2007年建成
          </div>
        <div class="tagList">
                </div>
  </div>
  <div class="xiaoquListItemRight">
    <div class="xiaoquListItemPrice">
            <div class="totalPrice"><span>57016</span>元/m<sup>2</sup></div>
            <div class="priceDesc">5月二手房参考均价</div>
    </div>
        <div class="xiaoquListItemSellCount">
      <a title="书香佳缘二手房" href="https://xm.lianjia.com/ershoufang/c3911099678196/" class="totalSellCount"><span>15</span>套</a>
      <div class="sellCountDesc">在售二手房</div>
    </div>
      </div>
</li>
<li class="clear xiaoquListItem">
  <a class="img" href="https://xm.lianjia.com/xiaoqu/3911057854878/" target="_blank" rel="nofollow">
    <img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170616152539" data-original="https://image1.ljcdn.com/hdic-resblock/a7f8aa53-3412-4a78-9284-b5a968699745.jpg.232x174.jpg" alt="泉水湾二期">
  </a>
  <div class="info">
    <div class="title">
      <a href="https://xm.lianjia.com/xiaoqu/3911057854878/" target="_blank">泉水湾二期</a>
          </div>
    <div class="houseInfo">
      <span class="houseIcon"></span>
            <a title="泉水湾二期网签"  href="https://xm.lianjia.com/chengjiao/c3911057854878/" >90天成交3套</a>
      <span class="cutLine">|</span><a title="泉水湾二期租房"  href="https://xm.lianjia.com/zufang/c3911057854878/" >11套正在出租</a>
    </div>
    <div class="positionInfo">
      <span class="positionIcon"></span>
      <a href="https://xm.lianjia.com/xiaoqu/jimei/" class="district" title="集美小区">集美</a>
      &nbsp;<a href="https://xm.lianjia.com/xiaoqu/jimeiqita/" class="bizcircle" title="集美其它小区">集美其它</a>&nbsp;
                  /&nbsp;2010年建成
          </div>
        <div class="tagList">
                </div>
  </div>
  <div class="xiaoquListItemRight">
    <div class="xiaoquListItemPrice">
            <div class="totalPrice"><span>40564</span>元/m<sup>2</sup></div>
            <div class="priceDesc">5月二手房参考均价</div>
    </div>
        <div class="xiaoquListItemSellCount">
      <a title="泉水湾二期二手房" href="https://xm.lianjia.com/ershoufang/c3911057854878/" class="totalSellCount"><span>14</span>套</a>
      <div class="sellCountDesc">在售二手房</div>
    </div>
      </div>
</li>
<li class="clear xiaoquListItem">
  <a class="img" href="https://xm.lianjia.com/xiaoqu/3911058049502/" target="_blank" rel="nofollow">
    <img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170616152539" data-original="https://image1.ljcdn.com/hdic-resblock/fafbb775-454c-485e-bcb3-dfbf70a9fd33.jpg.232x174.jpg" alt="泉舜滨海上城">
  </a>
  <div class="info">
    <div class="title">
      <a href="https://xm.lianjia.com/xiaoqu/3911058049502/" target="_blank">泉舜滨海上城</a>
          </div>
    <div class="houseInfo">
      <span class="houseIcon"></span>
            <a title="泉舜滨海上城网签"  href="https://xm.lianjia.com/chengjiao/c3911058049502/" >90天成交0套</a>
      <span class="cutLine">|</span><a title="泉舜滨海上城租房"  href="https://xm.lianjia.com/zufang/c3911058049502/" >24套正在出租</a>
    </div>
    <div class="positionInfo">
      <span class="positionIcon"></span>
      <a href="https://xm.lianjia.com/xiaoqu/haicang/" class="district" title="海沧小区">海沧</a>
      &nbsp;<a href="https://xm.lianjia.com/xiaoqu/binhaishequ/" class="bizcircle" title="滨海社区小区">滨海社区</a>&nbsp;
                  /&nbsp;2007年建成
          </div>
        <div class="tagList">
                </div>
  </div>
  <div class="xiaoquListItemRight">
    <div class="xiaoquListItemPrice">
            <div class="totalPrice"><span>46843</span>元/m<sup>2</sup></div>
            <div class="priceDesc">5月二手房参考均价</div>
    </div>
        <div class="xiaoquListItemSellCount">
      <a title="泉舜滨海上城二手房" href="https://xm.lianjia.com/ershoufang/c3911058049502/" class="totalSellCount"><span>21</span>套</a>
      <div class="sellCountDesc">在售二手房</div>
    </div>
      </div>
</li>
<li class="clear xiaoquListItem">
  <a class="img" href="https://xm.lianjia.com/xiaoqu/3911057908838/" target="_blank" rel="nofollow">
    <img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170616152539" data-original="https://image1.ljcdn.com/hdic-resblock/56184d5f-af3c-4072-b9fd-5f2c7aab9895.jpg.232x174.jpg" alt="嘉盛豪园">
  </a>
  <div class="info">
    <div class="title">
      <a href="https://xm.lianjia.com/xiaoqu/3911057908838/" target="_blank">嘉盛豪园</a>
          </div>
    <div class="houseInfo">
      <span class="houseIcon"></span>
            <a title="嘉盛豪园网签"  href="https://xm.lianjia.com/chengjiao/c3911057908838/" >90天成交0套</a>
      <span class="cutLine">|</span><a title="嘉盛豪园租房"  href="https://xm.lianjia.com/zufang/c3911057908838/" >23套正在出租</a>
    </div>
    <div class="positionInfo">
      <span class="positionIcon"></span>
      <a href="https://xm.lianjia.com/xiaoqu/siming/" class="district" title="思明小区">思明</a>
      &nbsp;<a href="https://xm.lianjia.com/xiaoqu/ruijing/" class="bizcircle" title="瑞景小区">瑞景</a>&nbsp;
                  /&nbsp;2005年建成
          </div>
        <div class="tagList">
                </div>
  </div>
  <div class="xiaoquListItemRight">
    <div class="xiaoquListItemPrice">
            <div class="totalPrice"><span>55254</span>元/m<sup>2</sup></div>
            <div class="priceDesc">5月二手房参考均价</div>
    </div>
        <div class="xiaoquListItemSellCount">
      <a title="嘉盛豪园二手房" href="https://xm.lianjia.com/ershoufang/c3911057908838/" class="totalSellCount"><span>15</span>套</a>
      <div class="sellCountDesc">在售二手房</div>
    </div>
      </div>
</li>
<li class="clear xiaoquListItem">
  <a class="img" href="https://xm.lianjia.com/xiaoqu/3910636450870107/" target="_blank" rel="nofollow">
    <img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170616152539" data-original="https://image1.ljcdn.com/hdic-resblock/ede87201-9f16-4e28-8ad7-e0b87c3ff01a.jpg.232x174.jpg" alt="水晶湖郡A区">
  </a>
  <div class="info">
    <div class="title">
      <a href="https://xm.lianjia.com/xiaoqu/3910636450870107/" target="_blank">水晶湖郡A区</a>
          </div>
    <div class="houseInfo">
      <span class="houseIcon"></span>
            <a title="水晶湖郡A区网签"  href="https://xm.lianjia.com/chengjiao/c3910636450870107/" >90天成交0套</a>
      <span class="cutLine">|</span><a title="水晶湖郡A区租房"  href="https://xm.lianjia.com/zufang/c3910636450870107/" >3套正在出租</a>
    </div>
    <div class="positionInfo">
      <span class="positionIcon"></span>
      <a href="https://xm.lianjia.com/xiaoqu/jimei/" class="district" title="集美小区">集美</a>
      &nbsp;<a href="https://xm.lianjia.com/xiaoqu/jimeixincheng/" class="bizcircle" title="集美新城小区">集美新城</a>&nbsp;
                  /&nbsp;2014年建成
          </div>
        <div class="tagList">
                </div>
  </div>
  <div class="xiaoquListItemRight">
    <div class="xiaoquListItemPrice">
            <div class="totalPrice"><span>42432</span>元/m<sup>2</sup></div>
            <div class="priceDesc">5月二手房参考均价</div>
    </div>
        <div class="xiaoquListItemSellCount">
      <a title="水晶湖郡A区二手房" href="https://xm.lianjia.com/ershoufang/c3910636450870107/" class="totalSellCount"><span>13</span>套</a>
      <div class="sellCountDesc">在售二手房</div>
    </div>
      </div>
</li>
<li class="clear xiaoquListItem">
  <a class="img" href="https://xm.lianjia.com/xiaoqu/3911057456112/" target="_blank" rel="nofollow">
    <img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170616152539" data-original="https://image1.ljcdn.com/hdic-resblock/0223ecd5-e6d5-4f4f-9f13-4bc06e8e709c.jpg.232x174.jpg" alt="中央美地">
  </a>
  <div class="info">
    <div class="title">
      <a href="https://xm.lianjia.com/xiaoqu/3911057456112/" target="_blank">中央美地</a>
          </div>
    <div class="houseInfo">
      <span class="houseIcon"></span>
            <a title="中央美地网签"  href="https://xm.lianjia.com/chengjiao/c3911057456112/" >90天成交0套</a>
      <span class="cutLine">|</span><a title="中央美地租房"  href="https://xm.lianjia.com/zufang/c3911057456112/" >19套正在出租</a>
    </div>
    <div class="positionInfo">
      <span class="positionIcon"></span>
      <a href="https://xm.lianjia.com/xiaoqu/huli/" class="district" title="湖里小区">湖里</a>
      &nbsp;<a href="https://xm.lianjia.com/xiaoqu/fanghu/" class="bizcircle" title="枋湖小区">枋湖</a>&nbsp;
                  /&nbsp;2009年建成
          </div>
        <div class="tagList">
                </div>
  </div>
  <div class="xiaoquListItemRight">
    <div class="xiaoquListItemPrice">
            <div class="totalPrice"><span>75080</span>元/m<sup>2</sup></div>
            <div class="priceDesc">5月二手房参考均价</div>
    </div>
        <div class="xiaoquListItemSellCount">
      <a title="中央美地二手房" href="https://xm.lianjia.com/ershoufang/c3911057456112/" class="totalSellCount"><span>22</span>套</a>
      <div class="sellCountDesc">在售二手房</div>
    </div>
      </div>
</li>
<li class="clear xiaoquListItem">
  <a class="img" href="https://xm.lianjia.com/xiaoqu/3911057567022/" target="_blank" rel="nofollow">
    <img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170616152539" data-original="https://image1.ljcdn.com/hdic-resblock/859ad292-481c-4cce-83f5-282068549e38.jpg.232x174.jpg" alt="新景国际外滩">
  </a>
  <div class="info">
    <div class="title">
      <a href="https://xm.lianjia.com/xiaoqu/3911057567022/" target="_blank">新景国际外滩</a>
          </div>
    <div class="houseInfo">
      <span class="houseIcon"></span>
            <a title="新景国际外滩网签"  href="https://xm.lianjia.com/chengjiao/c3911057567022/" >90天成交0套</a>
      <span class="cutLine">|</span><a title="新景国际外滩租房"  href="https://xm.lianjia.com/zufang/c3911057567022/" >28套正在出租</a>
    </div>
    <div class="positionInfo">
      <span class="positionIcon"></span>
      <a href="https://xm.lianjia.com/xiaoqu/huli/" class="district" title="湖里小区">湖里</a>
      &nbsp;<a href="https://xm.lianjia.com/xiaoqu/wuyuanwan/" class="bizcircle" title="五缘湾小区">五缘湾</a>&nbsp;
                  /&nbsp;2014年建成
          </div>
        <div class="tagList">
                </div>
  </div>
  <div class="xiaoquListItemRight">
    <div class="xiaoquListItemPrice">
            <div class="totalPrice"><span>88251</span>元/m<sup>2</sup></div>
            <div class="priceDesc">5月二手房参考均价</div>
    </div>
        <div class="xiaoquListItemSellCount">
      <a title="新景国际外滩二手房" href="https://xm.lianjia.com/ershoufang/c3911057567022/" class="totalSellCount"><span>11</span>套</a>
      <div class="sellCountDesc">在售二手房</div>
    </div>
      </div>
</li>
<li class="clear xiaoquListItem">
  <a class="img" href="https://xm.lianjia.com/xiaoqu/3911099531404/" target="_blank" rel="nofollow">
    <img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/blank.gif?_v=20170616152539" data-original="https://image1.ljcdn.com/hdic-resblock/5db9ca36-b8d6-4b71-a037-79f53fcb917a.jpg.232x174.jpg" alt="源昌鑫海湾湖里">
  </a>
  <div class="info">
    <div class="title">
      <a href="https://xm.lianjia.com/xiaoqu/3911099531404/" target="_blank">源昌鑫海湾湖里</a>
          </div>
    <div class="houseInfo">
      <span class="houseIcon"></span>
            <a title="源昌鑫海湾湖里网签"  href="https://xm.lianjia.com/chengjiao/c3911099531404/" >90天成交0套</a>
      <span class="cutLine">|</span><a title="源昌鑫海湾湖里租房"  href="https://xm.lianjia.com/zufang/c3911099531404/" >35套正在出租</a>
    </div>
    <div class="positionInfo">
      <span class="positionIcon"></span>
      <a href="https://xm.lianjia.com/xiaoqu/huli/" class="district" title="湖里小区">湖里</a>
      &nbsp;<a href="https://xm.lianjia.com/xiaoqu/wuyuanwan/" class="bizcircle" title="五缘湾小区">五缘湾</a>&nbsp;
                  /&nbsp;2008年建成
          </div>
        <div class="tagList">
                </div>
  </div>
  <div class="xiaoquListItemRight">
    <div class="xiaoquListItemPrice">
            <div class="totalPrice"><span>92376</span>元/m<sup>2</sup></div>
            <div class="priceDesc">5月二手房参考均价</div>
    </div>
        <div class="xiaoquListItemSellCount">
      <a title="源昌鑫海湾湖里二手房" href="https://xm.lianjia.com/ershoufang/c3911099531404/" class="totalSellCount"><span>21</span>套</a>
      <div class="sellCountDesc">在售二手房</div>
    </div>
      </div>
</li>
</ul><!-- 无搜索结果 --><div class="contentBottom clear" ><div class="crumbs fl"><a href="/">链家网厦门站</a><span >&nbsp;&gt;&nbsp;</span><h1><a href="/xiaoqu/">厦门小区</a></h1></div><div class="page-box fr"><div class="page-box house-lst-page-box" comp-module='page' page-url="/xiaoqu/pg{page}/"page-data='{"totalPage":71,"curPage":1}'></div>


</div></div><div style="display:none;"><p>厦门小区信息</p><p>链家网厦门站厦门小区频道提供真实、时时的厦门小区房源信息，厦门小区目前为2127个，全>部由线下经纪人确认核实上传，信息可靠，厦门小区用户可以在链家网厦门小区频道和厦门小区频道移动端最快速、最及时的找到自己想要的真>实、放心房源。链家网厦门小区平台，真房源，如你所见！</p><p>小区均价:82974.2,建成年代:2012,物业费用:2.8,开发商:厦门国贸房地产有限公司,物业公司:厦门国贸物业管理有限公司,楼栋总数:15,房屋总数:1042,小区均价:76554.7,建成年代:2007,物业费用:1.95,开发商:厦门市源昌房地产开发有限公司,物业公司:厦门市新凯宾物业管理有限公司,楼栋总数:7,容积率:3,房屋总数:595,绿化率:30</p></div></div><!-- 右侧sidebar --><div class="rightContent">
<div class="sideBar_price" id='priceSideBarContainer'></div>
<div class="sideBar_hotResblock" id="hotResblockContainer">
  <div class="hotResblockTitle">北京热门小区</div>
  <ul>
  </ul>
  <a class="moreResblock_sidebar">查看更多热门小区&nbsp;>></a>
</div>
<div class="sideBar_ADSuggest" id="ADSuggestContainer"></div>
<div class="sideBar_zixun sideBar_wenda" id="pushZixunContainer"></div>
<div class="sideBar_wenda" id="pushWendaContainer"></div>
<div class="download">
  <div class="title">下载链家APP</div>
  <div class="qr-code">
    <img width="94" height="94" src="//ajax.api.lianjia.com/qr/getDownloadQr?location=right&ljweb_channel_key=xiaoqu_list" alt="下载链家app">
    <div class="text">
      <p>扫描上方二维码</p>
      <p>随时查看新房源</p>
      <p class="get-more">
        <a href="//www.lianjia.com/client">了解更多<img width="9" height="9" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGFBMVEUAAACcn6Gfn5+an5+bnqCbnqGfn5+cn6EV6DbuAAAAB3RSTlMA0BAw8LAgvf5k9AAAAEdJREFUKM9jIBOkBqMJhBcqoAmUC6EKmJSjKWEWR1eiiK6ECZsSA3QlzuhKSihRghDA0EJ/BWIoCgzh4YMIZALRYBrMQAkAAF5bGMBkrwzqAAAAAElFTkSuQmCC"></a>
      </p>
    </div>
  </div>
</div>

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

<script type="text/tempalte" id="hotResblockTpl">
  <div class="hotResblockTitle"><%=name%>成交量排行</div>
  <ul>
  <%for(var i = 0; i < rank.length; i++){%>
    <li class="clear">
    <%if(i < 3){%>
      <div class="num top"><%=i+1%></div>
    <%}else{%>
      <div class="num"><%=i+1%></div>
    <%}%>
      <a href="<%=rank[i].url%>" class="resblockName_sidebar" title="<%=rank[i].resblock_name%>"><%=rank[i].resblock_name%></a>
      <div class="reblockPrice_sidebar"><%=Math.round(rank[i].trans_price)%>元/㎡</div>
    </li>
  <%}%>
  </ul>
  <a href="<%=url%>" class="moreResblock_sidebar">查看更多小区成交量&nbsp;>></a>
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
<script type="text/template" id="pushZixunTpl">
  <div class="title">热点精选</div>
  <ul>
  <%for(var i = 0;i < list.length; i++){%>
    <li>
      <a class="info" href="<%=list[i].url%>" target="_blank" data-bl="list" data-log_index="<%=i+1%>">
        <i class="opt<%=i%>"><%=i+1%></i>
        <span><%=list[i].question_title%></span>
      </a>
    </li>
  <%}%>
  </ul>
</script>
<script type="text/template" id="sideBar_ADSuggest_tpl">
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
</div></div><div class="footer"><div class="wrapper"><div class="f-title"><div class="fl"><ul><li><a href="https://www.lianjia.com/zhuanti/home/" rel="nofollow" target="_blank">了解链家</a></li><li><a href="https://xm.lianjia.com/about/aboutlianjia/" rel="nofollow" target="_blank">关于链家</a></li><li><a href="https://xm.lianjia.com/about/contactus/" rel="nofollow" target="_blank">联系我们</a></li><li><a href="https://join.lianjia.com/" rel="nofollow" target="_blank">加入我们</a></li><li><a href="https://www.lianjia.com/privacy/" rel="nofollow" target="_blank">隐私声明</a></li><li><a href="https://xm.lianjia.com/sitemap/" target="_blank">网站地图</a></li><li><a href="https://www.lianjia.com/notice/7.html" rel="nofollow" target="_blank">友情链接</a></li><li><a href="https://agent.lianjia.com/" rel="nofollow" target="_blank">经纪人登录</a></li></ul></div><div class="fr">官方客服 1010 9666</div></div><div class="lianjia-link-box"><div class="fl"><div class="tab"><span  class="hover">热门城市小区</span><span >热门城市二手房</span><span >热门城市租房网</span><span >热门城市楼盘</span><span >合作与友情链接</span></div><div class="link-list"><div><dd><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3911056775665/">汇利花园二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3911057446528/">万科金色悦城二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3917720992871273/">华创公寓二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3911056785332/">鑫茂花园二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3911056777084/">金龙商城三期二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3911057488308/">三源弘二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3911057518005/">金銮湾二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3911057479436/">海湾锦园二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3911056774024/">海青花园二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3911058045971/">新华园二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3911544544948669/">福信商城小区二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3911058053468/">泉舜信海花园二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3913396555869974/">明园大厦二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c399073301664236/">兴港花园三期二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3911057478613/">中骏四季阳光二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3911057480604/">汇景佳园二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3911057349292/">华昌小区二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3911057502952/">旭日海湾二期二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3911057481074/">汇景雅苑二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3911632548000126/">新景舜弘天籁二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3911055921436/">中福城二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3911244712506015/">石鼓路二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3910116095029844/">永同昌大厦二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3911057381233/">绿苑小区二期二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3911055045004/">江头社区二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3911057843119/">古龙御景一期北区二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3911057299087/">海上明珠家园二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3911057861248/">天鹅美苑二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3913380111052247/">禹洲中央海岸三期二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/c3911058031943/">长乐邨一期二手房</a></dd></div><div><dd><a target="_blank" href="https://bj.lianjia.com/ershoufang/">北京二手房</a><a target="_blank" href="https://gz.lianjia.com/ershoufang/">广州二手房</a><a target="_blank" href="https://sz.lianjia.com/ershoufang/">深圳二手房</a><a target="_blank" href="https://tj.lianjia.com/ershoufang/">天津二手房</a><a target="_blank" href="https://cd.lianjia.com/ershoufang/">成都二手房</a><a target="_blank" href="https://nj.lianjia.com/ershoufang/">南京二手房</a><a target="_blank" href="https://hz.lianjia.com/ershoufang/">杭州二手房</a><a target="_blank" href="https://qd.lianjia.com/ershoufang/">青岛二手房</a><a target="_blank" href="https://dl.lianjia.com/ershoufang/">大连二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/">厦门二手房</a><a target="_blank" href="https://wh.lianjia.com/ershoufang/">武汉二手房</a><a target="_blank" href="https://cq.lianjia.com/ershoufang/">重庆二手房</a><a target="_blank" href="https://cs.lianjia.com/ershoufang/">长沙二手房</a><a target="_blank" href="https://jn.lianjia.com/ershoufang/">济南二手房</a><a target="_blank" href="https://fs.lianjia.com/ershoufang/">佛山二手房</a></dd></div><div><dd><a target="_blank" href="https://bj.lianjia.com/zufang/">北京租房</a><a target="_blank" href="https://gz.lianjia.com/zufang/">广州租房</a><a target="_blank" href="https://sz.lianjia.com/zufang/">深圳租房</a><a target="_blank" href="https://tj.lianjia.com/zufang/">天津租房</a><a target="_blank" href="https://cd.lianjia.com/zufang/">成都租房</a><a target="_blank" href="https://nj.lianjia.com/zufang/">南京租房</a><a target="_blank" href="https://hz.lianjia.com/zufang/">杭州租房</a><a target="_blank" href="https://qd.lianjia.com/zufang/">青岛租房</a><a target="_blank" href="https://dl.lianjia.com/zufang/">大连租房</a><a target="_blank" href="https://xm.lianjia.com/zufang/">厦门租房</a><a target="_blank" href="https://wh.lianjia.com/zufang/">武汉租房</a><a target="_blank" href="https://cq.lianjia.com/zufang/">重庆租房</a><a target="_blank" href="https://cs.lianjia.com/zufang/">长沙租房</a><a target="_blank" href="https://jn.lianjia.com/zufang/">济南租房</a></dd></div><div><dd><a target="_blank" href="//sh.fang.lianjia.com/">北京楼盘</a><a target="_blank" href="//tj.fang.lianjia.com/">天津楼盘</a><a target="_blank" href="//nj.fang.lianjia.com/">南京楼盘</a><a target="_blank" href="//cd.fang.lianjia.com/">成都楼盘</a><a target="_blank" href="//dl.fang.lianjia.com/">大连楼盘</a><a target="_blank" href="//qd.fang.lianjia.com/">青岛楼盘</a><a target="_blank" href="//hz.fang.lianjia.com/">杭州楼盘</a><a target="_blank" href="//wh.fang.lianjia.com/">武汉楼盘</a><a target="_blank" href="//sz.fang.lianjia.com/">深圳楼盘</a><a target="_blank" href="//cq.fang.lianjia.com/">重庆楼盘</a><a target="_blank" href="//cs.fang.lianjia.com/">长沙楼盘</a><a target="_blank" href="//xa.fang.lianjia.com/">西安楼盘</a><a target="_blank" href="//jn.fang.lianjia.com/">济南楼盘</a><a target="_blank" href="//sjz.fang.lianjia.com/">石家庄楼盘</a></dd></div><div><dd><a target="_blank" href="http://news.lianjia.com/xm/hot/">厦门房地产新闻</a><a target="_blank" href="http://xm.lianjia.com/wenda/">厦门房产知识</a><a target="_blank" href="http://news.lianjia.com/xm/baike/">厦门房产百科</a><a target="_blank" href="http://news.lianjia.com">房地产新闻</a><a target="_blank" href="http://news.lianjia.com/xm/">厦门房产资讯</a><a target="_blank" href="www.shujia365.com/wuhu">芜湖中央空调</a><a target="_blank" href="http://www.lzztzs.com">兰州装修网</a><a target="_blank" href="http://www.ynjiuju.com">昆明装饰</a><a target="_blank" href="http://www.zuiag.com/zxjsq/">装修计算器</a><a target="_blank" href="http://www.lianjia.com/">房产网</a><a target="_blank" href="http://m.lianjia.com/xm/">手机厦门房产网</a></dd></div></div></div><div class="clear"></div></div><div class="bottom"><div class="copyright fl">北京链家房地产经纪有限公司 | 网络经营许可证 京ICP备11024601号-12 | © Copyright©2010-2017 链家网Lianjia.com版权所有</div></div></div></div>

<script src="https://s1.ljcdn.com/feroot/pc/asset/base/fe.js?_v=20170616152539"></script><script src="https://s1.ljcdn.com/feroot/pc/asset/common/common.js?_v=20170616152539"></script><div style="display:none"><script src="https://s1.ljcdn.com/feroot/dep/ljanalytics.js?_v=20170616152539"></script></div><div id="only" data-city="xm" data-page="xiaoqu_list"></div>
<script>var path = 'https://s1.ljcdn.com/feroot/pc/asset?_v=20170616152539'.split("?");require.config({baseUrl: path[0],paths: {'echarts' : '../../dep/echarts-1.4.1/build/echarts','echarts/chart/bar' : '../../dep/echarts-1.4.1/build/echarts','echarts/chart/line' : '../../dep/echarts-1.4.1/build/echarts','echarts/chart/pie' : '../../dep/echarts-1.4.1/build/echarts','echarts3' : '../../dep/echarts3/echarts3','common': 'common','jquery-ui': '../../dep/jquery-ui/jquery-ui.min','zeroclipboard': '../../dep/zeroclipboard-2.2.0/ZeroClipboard'},urlArgs:  path[1]});var feData = {"cityName": "北京","getFavHouseUrl":       "/api/gethousefav","setFavHouseUrl":       "/api/sethousefav","getLastSearch":        "/api/getlastsearch","getCommunityHistory":  "/api/getcommunityhistory","verifyHouse":          "/api/verifyHouse","getUser":              "/api/getUser","verifyCode":           "/api/getVerifyCode","complaint":            "/api/complaint","getDecoration":        "/api/getDecoration","trendData" :           "/site/getpicinfo"}</script>

<script type="text/javascript">
require(['ershoufang/xiaoquList/index'], function (main) {
  main({
    sidebar:{"type":"city","cityId":350200,"uuid":"15e2f095-d460-49eb-86ce-af527a684e97","ucid":null,"id":350200}
  });
});
require(['common/backtopV3'], function (main) {
  main({
    ucid: '',
    uuid: '15e2f095-d460-49eb-86ce-af527a684e97',
    loadingImg: 'https://s1.ljcdn.com/feroot/pc/asset/ershoufang/sellDetail/img/loading.gif?_v=20170616152539',
    qrImg: '//ajax.api.lianjia.com/qr/getDownloadQr'
  });
});
</script>
<script>require(['common/suggestion'], function (suggestion) {window.defaultSuggest = suggestion.init({requestOptions: {cityId: '350200',cityName: '厦门'},url: '/api/headerSearch?channel=xiaoqu&q=',main: '#keyword-box',appendTo: '#suggest-cont',redirect: true});});</script><div class="loninContaner"><div class="overlay_bg"></div><div class="panel_login animated" id="dialog"><div class="panel_info"><div class="panel_tab"><div class="title"><div class="fl">用户登录</div><label class="fr">还没有链家网账号？<a href="//passport.lianjia.com/register/resources/lianjia/register.html?service=http%3A%2F%2Fbj.lianjia.com%2F" rel="nofollow">马上注册</a></label></div><div class="clear"></div><div id="con_login_user"><form action="" method="post"><ul><li class="show-error"><dd>用户名或密码错误</dd></li><li class="item userName"><i></i><input type="text" class="the_input users" placeholder="请输入手机号" /></li><li class="item pwd"><i></i><input type="password" class="the_input password"  placeholder="请输入登录密码"/></li><li class="item checkVerimg" style="display:none;"><i></i><input type="text" class="the_input ver-img" maxlength="4"  placeholder="请输入验证码"/><img class="verImg"></li><li class="li_01"><label><input type="checkbox" name="remember" value="1" class="mind-login" checked>下次自动登录</label><a href="https://passport.lianjia.com/register/resources/lianjia/forget.html?service=http://bj.lianjia.com/" rel="nofollow">找回密码</a></li><li><a class="login-user-btn"  />立即登录</a></li></ul></form></div><div id="con_login_agent" class="undis"><form action="" method="post"><ul><li class="item"><dd></dd><input type="text" class="the_input users" placeholder="输入经纪人ID号码" /></li><li class="item"><input type="password" class="the_input password"  placeholder="登录密码"/></li><li class="li_01"><label><input type="checkbox" name="remember" value="1" class="mind-login">下次自动登录</label><a href="https://passport.lianjia.com/register/resources/lianjia/forget.html?service=http://bj.lianjia.com/" rel="nofollow">找回密码</a></li><li><input class="login-agent-btn" value="立即登录"/></li></ul></form></div></div></div><div class="registered"></div></div></div>
<!-- LianjiaIM Style --><link property='stylesheet' rel="stylesheet" href="https://s1.ljcdn.com/feroot/pc/asset/lianjiaIM/css/lianjiaim.css?_v=20170616152539"/><script src="//s1.ljcdn.com/web-im-sdk/static/0.9/ljim-core.min.js?_v=20170619"></script><script>(function() {var imConf = {"ajaxroot":"\/\/ajax.api.lianjia.com\/","imAppid":"LIANJIA_WEB_20160624","imAppkey":"6dfdcee27d78b1107fceeca55d80b7bd"};$.listener.on('userInfo', function (data) {if (data.code === 1) {data.ucid = '';}require(['lianjiaIM/lianjiaim'], function (LianjiaIM) {var ljim = new LianjiaIM({appid: imConf.imAppid,appkey: imConf.imAppkey,userData: data,staticRoot: 'https://s1.ljcdn.com/feroot/?_v=20170616152539'});});});})();</script><script type="text/javascript">var advert = 'https://s1.ljcdn.com/feroot/pc/asset/common/advert.js?_v=20170616152539';
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
const main = async ()=>{
  logger.enableDebug();
  let LC = new LianjiaPlotCollector();
  LC.setHtml(html);
  let page = LC.getTotalPage();
  logger.debug(page);
  await LC.save();
}
main();
