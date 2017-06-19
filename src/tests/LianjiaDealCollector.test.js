import {LianjiaDealCollector} from '../collectors/LianjiaDealCollector';
import logger from '../utils/logger';
//data
let html = `
<!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge" /><meta http-equiv="Cache-Control" content="no-transform" /><meta http-equiv="Cache-Control" content="no-siteapp" /><meta http-equiv="Content-language" content="zh-CN" /><meta name="format-detection" content="telephone=no" /><meta name="applicable-device" content="pc"><link rel="alternate" media="only screen and (max-width: 640px)" href="https://m.lianjia.com/xm/chengjiao/siming/" >
<meta name="mobile-agent" content="format=html5;url=https://m.lianjia.com/xm/chengjiao/siming/"><script>
ljConf = {
    city_id: '350200',
    city_abbr: 'xm',
    city_name: '厦门',
    channel: 'chengjiao',
    page: 'chengjiao_index',
    pageConfig: {"ajaxroot":"\/\/ajax.api.lianjia.com\/","imAppid":"LIANJIA_WEB_20160624","imAppkey":"6dfdcee27d78b1107fceeca55d80b7bd"},
    feroot: '//s1.ljcdn.com/feroot/',
    ucid:'',
    cdn:'1',
};
</script>

<title>思明二手房网签|成交查询(厦门链家网)</title>
<meta name="description" content="厦门链家网发布思明网签二手房成交信息,提供房源网签总价及面积均价和同户型成交记录,信息精准详细,方便您对倾向购买的思明房源进行参考,查询思明网签二手房信息,就到厦门链家网." />
<meta name="keywords" content="思明二手房成交，思明二手房,思明二手房网签,思明二手房走势,思明二手房成交行情" />
<link href="/favicon.ico" type="image/x-icon" rel=icon><link href="/favicon.ico" type="image/x-icon" rel="shortcut icon"><link rel="stylesheet" href="https://s1.ljcdn.com/feroot/pc/asset/common.css?_v=20170616152539">
<link rel="stylesheet" href="https://s1.ljcdn.com/feroot/pc/asset/ershoufang/dealList/index.css?_v=20170616152539">
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
        ljweb_channel: 'chengjiao',
        ljweb_page: 'chengjiao_index',
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
<div class="banner"><div class="container"><ul class="channelList"><li><a href="//www.lianjia.com/">首页</a></li><li  class="selected"><a href="https://xm.lianjia.com/ershoufang/" >二手房</a></li><li  class=""><a href="http://xm.fang.lianjia.com/" >新房</a></li><li  class=""><a href="https://xm.lianjia.com/zufang/" >租房</a></li><li  rel="nofollow"  class=""><a href="http://you.lianjia.com/" >旅居地产</a></li><li  class=""><a href="https://us.lianjia.com/" >海外</a></li><li  class=""><a href="https://xm.lianjia.com/xiaoqu/" >小区</a></li><li  class=""><a href="https://xm.lianjia.com/jingjiren/" >经纪人</a></li><li  class=""><a href="https://news.lianjia.com/xm/baike/" >百科</a></li><li  class=""><a href="https://xm.lianjia.com/tool.html" target="_blank">工具</a></li><li  class=""><a href="https://xm.lianjia.com/yezhu/" target="_blank">业主</a></li></ul><div class="banner-right"><div class="login" id="userInfoContainer"><i></i><a href="https://passport.lianjia.com/cas/login?service=https%3A%2F%2Fxm.lianjia.com%2Fchengjiao%2Fsiming%2F" id="loginBtn" rel="nofollow">登录</a>/<a href="https://passport.lianjia.com/register/resources/lianjia/register.html?service=https%3A%2F%2Fxm.lianjia.com%2Fchengjiao%2Fsiming%2F" rel="nofollow">注册</a></div><div class="phone"><i></i><span>热线电话1010-9666</span></div></div></div></div>


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

<div class="header"><div class="menu"><div class="menuLeft"><a href="/ershoufang/" class="logo"></a><ul class="typeList"><li ><a href="/ershoufang/"  title="厦门在售二手房" >在售</a></li><li class="selected"><a href="/chengjiao/"  title="厦门成交二手房" >成交</a></li><li ><a href="/xiaoqu/"  title="厦门小区二手房" >小区</a></li><li ><a href="/ditu/"  title="厦门地图找房二手房" target="_blank">地图找房</a></li><li ><a href="/tool.html"  title="厦门计算器二手房" >计算器</a></li></ul></div><div class="app"><a href="//www.lianjia.com/client/" target="_blank"><i></i>下载链家APP<img width="94" height="94" src="//ajax.api.lianjia.com/qr/getDownloadQr?location=menu_app&ljweb_channel_key=chengjiao_index" alt="下载链家app"></a></div></div><div class="search"><div class="input" log-mod="search"><form id="searchForm" action='/ershoufang/rs'><input type="text" id="searchInput" value="" autocomplete="off"><div class="inputRightPart"><div class="save" id="savedSearchMsg"><span id="savedSearchCount">0</span>条已保存搜索<span id="savedSearchArrow" class="downArrow"></span></div><button type='submit' class="searchButton" data-bl="search" data-el="search">&nbsp;<i></i>&nbsp;</button></div></form><div class="searchMsg" id="searchMsgContainer"></div></div></div></div>


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
        <h2><dt title="厦门成交位置">位置</dt></h2>
        <dd>
                  <a href="/chengjiao/" class="selected" title="厦门成交区域">
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
                                                <a href="/chengjiao/siming/" class="selected" title="厦门思明成交二手房 ">思明</a>
                                                                <a href="/chengjiao/huli/"  title="厦门湖里成交二手房 ">湖里</a>
                                                                <a href="/chengjiao/haicang/"  title="厦门海沧成交二手房 ">海沧</a>
                                                                <a href="/chengjiao/jimei/"  title="厦门集美成交二手房 ">集美</a>
                                                                <a href="/chengjiao/xiangan/"  title="厦门翔安成交二手房 ">翔安</a>
                                                                <a href="/chengjiao/tongan/"  title="厦门同安成交二手房 ">同安</a>
                                          </div>
                          <div>
                                  <b>B</b>
                                      <a href="/chengjiao/binglang/" >槟榔</a>
                                      <a href="/chengjiao/bindong/" >滨东</a>
                                      <a href="/chengjiao/bailuzhou/" >白鹭洲</a>
                                                    <b>D</b>
                                      <a href="/chengjiao/douxilu/" >斗西路</a>
                                      <a href="/chengjiao/dongdu/" >东渡</a>
                                                    <b>F</b>
                                      <a href="/chengjiao/fushan3/" >富山</a>
                                                    <b>G</b>
                                      <a href="/chengjiao/gongyuanxiaoxuejizhoubian/" >公园小学及周边</a>
                                      <a href="/chengjiao/gulangyu/" >鼓浪屿</a>
                                      <a href="/chengjiao/guanyinshan/" >观音山</a>
                                                    <b>H</b>
                                      <a href="/chengjiao/hexiangdonglu/" >禾祥东路</a>
                                      <a href="/chengjiao/huochezhan4/" >火车站</a>
                                      <a href="/chengjiao/huizhanzhongxin/" >会展中心</a>
                                      <a href="/chengjiao/hexiangxilu/" >禾祥西路</a>
                                      <a href="/chengjiao/huangcuo/" >黄厝</a>
                                      <a href="/chengjiao/hubianshuiku/" >湖边水库</a>
                                                    <b>J</b>
                                      <a href="/chengjiao/jinshang/" >金尚</a>
                                      <a href="/chengjiao/jiangtou/" >江头</a>
                                      <a href="/chengjiao/jinjiting/" >金鸡亭</a>
                                                    <b>L</b>
                                      <a href="/chengjiao/lianban/" >莲坂</a>
                                      <a href="/chengjiao/lianqian/" >莲前</a>
                                      <a href="/chengjiao/lianhuayicun/" >莲花一村</a>
                                      <a href="/chengjiao/lundu/" >轮渡</a>
                                      <a href="/chengjiao/lianhua4/" >莲花</a>
                                                    <b>N</b>
                                      <a href="/chengjiao/nanshanlu/" >南山路</a>
                                                    <b>Q</b>
                                      <a href="/chengjiao/qixinglu/" >七星路</a>
                                      <a href="/chengjiao/qianpu/" >前埔</a>
                                                    <b>R</b>
                                      <a href="/chengjiao/ruanjianyuan1/" >软件园</a>
                                      <a href="/chengjiao/ruijing/" >瑞景</a>
                                                    <b>S</b>
                                      <a href="/chengjiao/sibei/" >思北</a>
                                      <a href="/chengjiao/simingnanlu/" >思明南路</a>
                                      <a href="/chengjiao/shiyanxiaoxuejizhoubian/" >实验小学及周边</a>
                                      <a href="/chengjiao/songbai/" >松柏</a>
                                      <a href="/chengjiao/shizhengfu2/" >市政府</a>
                                      <a href="/chengjiao/shada/" >厦大</a>
                                      <a href="/chengjiao/sm/" >SM</a>
                                                    <b>T</b>
                                      <a href="/chengjiao/tiyuzhongxin1/" >体育中心</a>
                                                    <b>W</b>
                                      <a href="/chengjiao/waiguoyuxuexiao/" >外国语学校</a>
                                      <a href="/chengjiao/wenyuanlu/" >文园路</a>
                                      <a href="/chengjiao/wenzao/" >文灶</a>
                                                    <b>X</b>
                                      <a href="/chengjiao/xianyueshequ/" >仙岳社区</a>
                                                    <b>Y</b>
                                      <a href="/chengjiao/yueyangshequ/" >岳阳社区</a>
                                      <a href="/chengjiao/youluncheng/" >邮轮城</a>
                                                    <b>Z</b>
                                      <a href="/chengjiao/zhongshanlu/" >中山路</a>
                                                </div>
                      </div>
                    <!-- 地铁 -->
                    <!-- 学区 -->
                  </dd>
      </dl>
    </div>

  <div class="list-more">
                                                                                                                                                                                                                                          <dl class=" hasmore" >
          <h2><dt title="厦门售价成交二手房">售价</dt></h2>
          <dd>
                                                                    <a href="/chengjiao/siming/p1/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">100万以下</span>
                                  <span class="cnt">(32)</span>
                              </a>
                                                                    <a href="/chengjiao/siming/p2/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">100-200万</span>
                                  <span class="cnt">(244)</span>
                              </a>
                                                                    <a href="/chengjiao/siming/p3/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">200-300万</span>
                                  <span class="cnt">(306)</span>
                              </a>
                                                                    <a href="/chengjiao/siming/p4/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">300-400万</span>
                                  <span class="cnt">(198)</span>
                              </a>
                                                                    <a href="/chengjiao/siming/p5/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">400-500万</span>
                                  <span class="cnt">(108)</span>
                              </a>
                                                                    <a href="/chengjiao/siming/p6/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">500-800万</span>
                                  <span class="cnt">(125)</span>
                              </a>
                                                                    <a href="/chengjiao/siming/p7/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">800万以上</span>
                                  <span class="cnt">(35)</span>
                              </a>
                                                              <span class="customFilter mt" data-role="price">
                <input type="text" role="minValue" value="">
                <span>-</span>
                <input type="text" role="maxValue" value="">&nbsp;
                                  <span>万</span>
                                <button class="btn-range hide" data-url="/chengjiao/siming/bp{min}ep{max}/">确定</button>
              </span>
                                                  <span class="btn-showmore">+ 更多及自定义</span>
                      </dd>
        </dl>
                                                                                                                                                                                                                                  <dl class=" hasmore" >
          <h2><dt title="厦门面积成交二手房">面积</dt></h2>
          <dd>
                                                                    <a href="/chengjiao/siming/a1/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">50平以下</span>
                                  <span class="cnt">(240)</span>
                              </a>
                                                                    <a href="/chengjiao/siming/a2/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">50-70平</span>
                                  <span class="cnt">(201)</span>
                              </a>
                                                                    <a href="/chengjiao/siming/a3/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">70-90平</span>
                                  <span class="cnt">(227)</span>
                              </a>
                                                                    <a href="/chengjiao/siming/a4/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">90-110平</span>
                                  <span class="cnt">(131)</span>
                              </a>
                                                                    <a href="/chengjiao/siming/a5/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">110-130平</span>
                                  <span class="cnt">(87)</span>
                              </a>
                                                                    <a href="/chengjiao/siming/a6/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">130-150平</span>
                                  <span class="cnt">(70)</span>
                              </a>
                                                                    <a href="/chengjiao/siming/a7/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">150-200平</span>
                                  <span class="cnt">(76)</span>
                              </a>
                                                                    <a href="/chengjiao/siming/a8/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">200平以上</span>
                                  <span class="cnt">(16)</span>
                              </a>
                                                              <span class="customFilter mt" data-role="area">
                <input type="text" role="minValue" value="">
                <span>-</span>
                <input type="text" role="maxValue" value="">&nbsp;
                                  <span>平</span>
                                <button class="btn-range hide" data-url="/chengjiao/siming/ba{min}ea{max}/">确定</button>
              </span>
                                                  <span class="btn-showmore">+ 更多及自定义</span>
                      </dd>
        </dl>
                                                                                                                                                                            <dl class=" " >
          <h2><dt title="厦门房型成交二手房">房型</dt></h2>
          <dd>
                                                                    <a href="/chengjiao/siming/l1/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">一室</span>
                                  <span class="cnt">(266)</span>
                              </a>
                                                                    <a href="/chengjiao/siming/l2/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">二室</span>
                                  <span class="cnt">(375)</span>
                              </a>
                                                                    <a href="/chengjiao/siming/l3/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">三室</span>
                                  <span class="cnt">(320)</span>
                              </a>
                                                                    <a href="/chengjiao/siming/l4/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">四室</span>
                                  <span class="cnt">(65)</span>
                              </a>
                                                                    <a href="/chengjiao/siming/l5/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">五室</span>
                                  <span class="cnt">(11)</span>
                              </a>
                                                                    <a href="/chengjiao/siming/l6/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">五室以上</span>
                                  <span class="cnt">(8)</span>
                              </a>
                                                          </dd>
        </dl>
                                                                                                                                        <dl class="hide " data-role="hide-row">
          <h2><dt title="厦门用途成交二手房">用途</dt></h2>
          <dd>
                                                                    <a href="/chengjiao/siming/sf1/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">普通住宅</span>
                                  <span class="cnt">(1025)</span>
                              </a>
                                                                                                                  <a href="javascript:;" class="nolink" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">别墅</span>
                              </a>
                                                                                                                  <a href="javascript:;" class="nolink" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">四合院</span>
                              </a>
                                                                    <a href="/chengjiao/siming/sf5/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">其他</span>
                                  <span class="cnt">(19)</span>
                              </a>
                                                          </dd>
        </dl>
                                                                                                                      <dl class="hide " data-role="hide-row">
          <h2><dt title="厦门楼层成交二手房">楼层</dt></h2>
          <dd>
                                                                    <a href="/chengjiao/siming/lc1/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">低楼层</span>
                                  <span class="cnt">(280)</span>
                              </a>
                                                                    <a href="/chengjiao/siming/lc2/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">中楼层</span>
                                  <span class="cnt">(428)</span>
                              </a>
                                                                    <a href="/chengjiao/siming/lc3/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">高楼层</span>
                                  <span class="cnt">(312)</span>
                              </a>
                                                          </dd>
        </dl>
                                                                                                                                                          <dl class="hide " data-role="hide-row">
          <h2><dt title="厦门朝向成交二手房">朝向</dt></h2>
          <dd>
                                                                    <a href="/chengjiao/siming/f1/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">朝东</span>
                                  <span class="cnt">(225)</span>
                              </a>
                                                                    <a href="/chengjiao/siming/f2/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">朝南</span>
                                  <span class="cnt">(754)</span>
                              </a>
                                                                    <a href="/chengjiao/siming/f3/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">朝西</span>
                                  <span class="cnt">(166)</span>
                              </a>
                                                                    <a href="/chengjiao/siming/f4/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">朝北</span>
                                  <span class="cnt">(606)</span>
                              </a>
                                                                    <a href="/chengjiao/siming/f5/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">南北</span>
                                  <span class="cnt">(386)</span>
                              </a>
                                                          </dd>
        </dl>
                                                                                                                                                          <dl class="hide " data-role="hide-row">
          <h2><dt title="厦门楼龄成交二手房">楼龄</dt></h2>
          <dd>
                                                                    <a href="/chengjiao/siming/y1/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">5年以内</span>
                                  <span class="cnt">(19)</span>
                              </a>
                                                                    <a href="/chengjiao/siming/y2/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">10年以内</span>
                                  <span class="cnt">(159)</span>
                              </a>
                                                                    <a href="/chengjiao/siming/y3/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">15年以内</span>
                                  <span class="cnt">(433)</span>
                              </a>
                                                                    <a href="/chengjiao/siming/y4/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">20年以内</span>
                                  <span class="cnt">(698)</span>
                              </a>
                                                                    <a href="/chengjiao/siming/y5/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">20年以上</span>
                                  <span class="cnt">(132)</span>
                              </a>
                                                          </dd>
        </dl>
                                                                                                                      <dl class="hide " data-role="hide-row">
          <h2><dt title="厦门装修成交二手房">装修</dt></h2>
          <dd>
                                                                    <a href="/chengjiao/siming/de1/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">精装修</span>
                                  <span class="cnt">(355)</span>
                              </a>
                                                                    <a href="/chengjiao/siming/de2/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">普通装修</span>
                                  <span class="cnt">(336)</span>
                              </a>
                                                                    <a href="/chengjiao/siming/de3/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">毛坯房</span>
                                  <span class="cnt">(27)</span>
                              </a>
                                                          </dd>
        </dl>
                                                                                                    <dl class="hide " data-role="hide-row">
          <h2><dt title="厦门电梯成交二手房">电梯</dt></h2>
          <dd>
                                                                    <a href="/chengjiao/siming/ie2/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">有电梯</span>
                                  <span class="cnt">(588)</span>
                              </a>
                                                                    <a href="/chengjiao/siming/ie1/" class="" rel="nofollow">
                <span class="checkbox "></span>
                <span class="name">无电梯</span>
                                  <span class="cnt">(321)</span>
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
<div class="content"><!-- 左侧内容 --><div class="leftContent"><div class="orderFilter"><div class="orderTag"><ul><li class='selected'><h3><a href="/chengjiao/siming/">默认排序</span></a></h3></li><li ><h3><a href="/chengjiao/siming/ddo21/">房屋总价</a></h3></li><li ><h3><a href="/chengjiao/siming/ddo31/">房屋单价</a></h3></li><li ><h3><a href="/chengjiao/siming/ddo11/">房屋面积</a></h3></li></ul></div><div class="filterAgain"></div></div><div class="resultDes clear"><div class="total fl">共找到<span> 1048 </span>套厦门成交房源</div><div class="button fr"><div class="clearBtn"><script>with(document)write('<a href="/chengjiao/"><span></span>清空条件</a>');</script></div></div></div><ul class="listContent"><li><a class="img" href="https://xm.lianjia.com/chengjiao/105100830673.html" target="_blank" rel="nofollow"><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/new-version/default_block.png?_v=20170616152539" data-original="https://image1.ljcdn.com/350200-inspection/801ac2b1-81e1-4f31-897d-b398442b0077.jpg.280x210.jpg" alt="民警宿舍 2室1厅 65.73平米"></a><div class="info"><div class="title"><a href="https://xm.lianjia.com/chengjiao/105100830673.html" target="_blank">民警宿舍 2室1厅 65.73平米</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span>南 | 精装</div><div class="dealDate">2017.06.04</div><div class="totalPrice"><span class='number'>313</span>万</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>中楼层(共8层) 2006年建板楼</div><div class="source">链家成交</div><div class="unitPrice"><span class="number">47620</span>元/平</div></div><div class="dealHouseInfo"><span class="dealHouseIcon"></span><span class="dealHouseTxt"><span>房屋满五年</span></span></div><div class="dealCycleeInfo"><span class="dealCycleIcon"></span><span class="dealCycleTxt"><span>挂牌320万</span><span>成交周期4天</span></span></div></div></li><li><a class="img" href="https://xm.lianjia.com/chengjiao/105100756808.html" target="_blank" rel="nofollow"><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/new-version/default_block.png?_v=20170616152539" data-original="https://image1.ljcdn.com/350200-inspection/93bbb33b-c16a-41f3-9511-4bfeb0effc7d.jpg.280x210.jpg" alt="文屏山庄 3室2厅 95.96平米"></a><div class="info"><div class="title"><a href="https://xm.lianjia.com/chengjiao/105100756808.html" target="_blank">文屏山庄 3室2厅 95.96平米</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span>南 | 简装&nbsp;| 无电梯</div><div class="dealDate">2017.06.02</div><div class="totalPrice"><span class='number'>408</span>万</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>中楼层(共8层) 2003年建板楼</div><div class="source">链家成交</div><div class="unitPrice"><span class="number">42518</span>元/平</div></div><div class="dealHouseInfo"><span class="dealHouseIcon"></span><span class="dealHouseTxt"><span>房屋满两年</span></span></div><div class="dealCycleeInfo"><span class="dealCycleIcon"></span><span class="dealCycleTxt"><span>挂牌418万</span><span>成交周期47天</span></span></div></div></li><li><a class="img" href="https://xm.lianjia.com/chengjiao/105100786234.html" target="_blank" rel="nofollow"><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/new-version/default_block.png?_v=20170616152539" data-original="https://image1.ljcdn.com/350200-inspection/0a7b6446-58a1-41ba-9a50-a1d0c2ddba2d.jpg.280x210.jpg" alt="恒滨名宫 1室1厅 47平米"></a><div class="info"><div class="title"><a href="https://xm.lianjia.com/chengjiao/105100786234.html" target="_blank">恒滨名宫 1室1厅 47平米</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span>东北 | 简装&nbsp;| 有电梯</div><div class="dealDate">2017.05.31</div><div class="totalPrice"><span class='number'>230</span>万</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>中楼层(共12层) 1998年建板楼</div><div class="source">链家成交</div><div class="unitPrice"><span class="number">48937</span>元/平</div></div><div class="dealHouseInfo"><span class="dealHouseIcon"></span><span class="dealHouseTxt"><span>房屋满五年</span></span></div><div class="dealCycleeInfo"><span class="dealCycleIcon"></span><span class="dealCycleTxt"><span>挂牌287万</span><span>成交周期27天</span></span></div></div></li><li><a class="img" href="https://xm.lianjia.com/chengjiao/105100679988.html" target="_blank" rel="nofollow"><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/new-version/default_block.png?_v=20170616152539" data-original="https://image1.ljcdn.com/350200-inspection/6efa7e13-2fd0-4958-b5b2-5aec4c2aea947.jpg.280x210.jpg" alt="罗宾森购物广场 2室2厅 106.91平米"></a><div class="info"><div class="title"><a href="https://xm.lianjia.com/chengjiao/105100679988.html" target="_blank">罗宾森购物广场 2室2厅 106.91平米</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span>北 | 精装&nbsp;| 有电梯</div><div class="dealDate">2017.05.27</div><div class="totalPrice"><span class='number'>610</span>万</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>高楼层(共31层) 2010年建板楼</div><div class="source">链家成交</div><div class="unitPrice"><span class="number">57058</span>元/平</div></div><div class="dealHouseInfo"><span class="dealHouseIcon"></span><span class="dealHouseTxt"><span>房屋满两年</span></span></div><div class="dealCycleeInfo"><span class="dealCycleIcon"></span><span class="dealCycleTxt"><span>挂牌630万</span><span>成交周期78天</span></span></div></div></li><li><a class="img" href="https://xm.lianjia.com/chengjiao/105100719544.html" target="_blank" rel="nofollow"><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/new-version/default_block.png?_v=20170616152539" data-original="https://image1.ljcdn.com/350200-inspection/79ec881a-d3b7-4de6-9cb7-ecb079c76e2f.jpg.280x210.jpg" alt="嘉华大厦 1室1厅 35.32平米"></a><div class="info"><div class="title"><a href="https://xm.lianjia.com/chengjiao/105100719544.html" target="_blank">嘉华大厦 1室1厅 35.32平米</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span>东北 | 简装&nbsp;| 有电梯</div><div class="dealDate">2017.05.24</div><div class="totalPrice"><span class='number'>196.5</span>万</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>中楼层(共31层) 2004年建塔楼</div><div class="source">链家成交</div><div class="unitPrice"><span class="number">55635</span>元/平</div></div><div class="dealCycleeInfo"><span class="dealCycleIcon"></span><span class="dealCycleTxt"><span>挂牌205万</span><span>成交周期58天</span></span></div></div></li><li><a class="img" href="https://xm.lianjia.com/chengjiao/105100738364.html" target="_blank" rel="nofollow"><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/new-version/default_block.png?_v=20170616152539" data-original="https://image1.ljcdn.com/350200-inspection/d59936ec-270c-404f-ad7a-6ea642d2f166.jpg.280x210.jpg" alt="源昌国际城二期 3室2厅 137.81平米"></a><div class="info"><div class="title"><a href="https://xm.lianjia.com/chengjiao/105100738364.html" target="_blank">源昌国际城二期 3室2厅 137.81平米</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span>南 北 | 简装&nbsp;| 有电梯</div><div class="dealDate">2017.05.24</div><div class="totalPrice"><span class='number'>1055</span>万</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>中楼层(共29层) 2007年建板楼</div><div class="source">链家成交</div><div class="unitPrice"><span class="number">76555</span>元/平</div></div><div class="dealHouseInfo"><span class="dealHouseIcon"></span><span class="dealHouseTxt"><span>房屋满五年</span></span></div><div class="dealCycleeInfo"><span class="dealCycleIcon"></span><span class="dealCycleTxt"><span>挂牌1080万</span><span>成交周期48天</span></span></div></div></li><li><a class="img noPic" href="https://xm.lianjia.com/chengjiao/105100799800.html" target="_blank" rel="nofollow"></a><div class="info"><div class="title"><a href="https://xm.lianjia.com/chengjiao/105100799800.html" target="_blank">电业花园 3室2厅 85.36平米</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span>东南 | 简装</div><div class="dealDate">2017.05.19</div><div class="totalPrice"><span class='number'>420</span>万</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>中楼层(共7层) </div><div class="source">链家成交</div><div class="unitPrice"><span class="number">49204</span>元/平</div></div><div class="dealCycleeInfo"><span class="dealCycleIcon"></span><span class="dealCycleTxt"><span>挂牌420万</span><span>成交周期7天</span></span></div></div></li><li><a class="img noPic" href="https://xm.lianjia.com/chengjiao/105100794490.html" target="_blank" rel="nofollow"></a><div class="info"><div class="title"><a href="https://xm.lianjia.com/chengjiao/105100794490.html" target="_blank">华侨海景城 1室0厅 48平米</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span>东 南 西 北 | 其他&nbsp;| 有电梯</div><div class="dealDate">2017.05.16</div><div class="totalPrice"><span class='number'>118</span>万</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>地下室(共1层) 2007年建板楼</div><div class="source">链家成交</div><div class="unitPrice"><span class="number">24584</span>元/平</div></div><div class="dealCycleeInfo"><span class="dealCycleIcon"></span><span class="dealCycleTxt"><span>挂牌130万</span><span>成交周期8天</span></span></div></div></li><li><a class="img" href="https://xm.lianjia.com/chengjiao/105100749374.html" target="_blank" rel="nofollow"><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/new-version/default_block.png?_v=20170616152539" data-original="https://image1.ljcdn.com/350200-inspection/bf6366ca-7dfc-48c5-8ec6-c60d7795456f.jpg.280x210.jpg" alt="华林紫微小区 2室2厅 41.54平米"></a><div class="info"><div class="title"><a href="https://xm.lianjia.com/chengjiao/105100749374.html" target="_blank">华林紫微小区 2室2厅 41.54平米</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span>西 北 | 精装&nbsp;| 有电梯</div><div class="dealDate">2017.05.15</div><div class="totalPrice"><span class='number'>345</span>万</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>中楼层(共7层) 2006年建板塔结合</div><div class="source">链家成交</div><div class="unitPrice"><span class="number">83053</span>元/平</div></div><div class="dealHouseInfo"><span class="dealHouseIcon"></span><span class="dealHouseTxt"><span>房屋满两年</span></span></div><div class="dealCycleeInfo"><span class="dealCycleIcon"></span><span class="dealCycleTxt"><span>挂牌362万</span><span>成交周期32天</span></span></div></div></li><li><a class="img noPic" href="https://xm.lianjia.com/chengjiao/105100670561.html" target="_blank" rel="nofollow"></a><div class="info"><div class="title"><a href="https://xm.lianjia.com/chengjiao/105100670561.html" target="_blank">禹洲世贸商城思明 1室1厅 59.4平米</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span>西 | 精装&nbsp;| 有电梯</div><div class="dealDate">2017.05.15</div><div class="totalPrice"><span class='number'>320</span>万</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>中楼层(共40层) 2006年建塔楼</div><div class="source">链家成交</div><div class="unitPrice"><span class="number">53873</span>元/平</div></div><div class="dealHouseInfo"><span class="dealHouseIcon"></span><span class="dealHouseTxt"><span>房屋满两年</span></span></div><div class="dealCycleeInfo"><span class="dealCycleIcon"></span><span class="dealCycleTxt"><span>挂牌320万</span><span>成交周期71天</span></span></div></div></li><li><a class="img" href="https://xm.lianjia.com/chengjiao/105100762579.html" target="_blank" rel="nofollow"><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/new-version/default_block.png?_v=20170616152539" data-original="https://image1.ljcdn.com/350200-inspection/d6dda58a-f214-4136-bf26-087210d2c44f.jpg.280x210.jpg" alt="禾祥首府 1室1厅 51.19平米"></a><div class="info"><div class="title"><a href="https://xm.lianjia.com/chengjiao/105100762579.html" target="_blank">禾祥首府 1室1厅 51.19平米</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span>南 | 精装&nbsp;| 有电梯</div><div class="dealDate">2017.05.12</div><div class="totalPrice"><span class='number'>350</span>万</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>高楼层(共33层) 2007年建塔楼</div><div class="source">链家成交</div><div class="unitPrice"><span class="number">68373</span>元/平</div></div><div class="dealHouseInfo"><span class="dealHouseIcon"></span><span class="dealHouseTxt"><span>房屋满五年</span></span></div><div class="dealCycleeInfo"><span class="dealCycleIcon"></span><span class="dealCycleTxt"><span>挂牌360万</span><span>成交周期22天</span></span></div></div></li><li><a class="img" href="https://xm.lianjia.com/chengjiao/105100771258.html" target="_blank" rel="nofollow"><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/new-version/default_block.png?_v=20170616152539" data-original="https://image1.ljcdn.com/350200-inspection/aa51ced9-703a-4033-a0a5-f6a6ca574d92.jpg.280x210.jpg" alt="国贸春天 4室2厅 157平米"></a><div class="info"><div class="title"><a href="https://xm.lianjia.com/chengjiao/105100771258.html" target="_blank">国贸春天 4室2厅 157平米</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span>南 北 | 毛坯&nbsp;| 有电梯</div><div class="dealDate">2017.05.06</div><div class="totalPrice"><span class='number'>1500</span>万</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>中楼层(共16层) 2007年建板楼</div><div class="source">链家成交</div><div class="unitPrice"><span class="number">95542</span>元/平</div></div><div class="dealCycleeInfo"><span class="dealCycleIcon"></span><span class="dealCycleTxt"><span>挂牌1570万</span><span>成交周期12天</span></span></div></div></li><li><a class="img" href="https://xm.lianjia.com/chengjiao/105100783100.html" target="_blank" rel="nofollow"><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/new-version/default_block.png?_v=20170616152539" data-original="https://image1.ljcdn.com/350200-inspection/1164255f-a738-45fa-b6d5-38658b4ce60c.jpg.280x210.jpg" alt="国贸春天 1室0厅 36.89平米"></a><div class="info"><div class="title"><a href="https://xm.lianjia.com/chengjiao/105100783100.html" target="_blank">国贸春天 1室0厅 36.89平米</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span>南 | 简装&nbsp;| 无电梯</div><div class="dealDate">2017.05.06</div><div class="totalPrice"><span class='number'>150</span>万</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>地下室(共1层) 板楼</div><div class="source">链家成交</div><div class="unitPrice"><span class="number">40662</span>元/平</div></div><div class="dealCycleeInfo"><span class="dealCycleIcon"></span><span class="dealCycleTxt"><span>挂牌100万</span><span>成交周期5天</span></span></div></div></li><li><a class="img" href="https://xm.lianjia.com/chengjiao/105100748009.html" target="_blank" rel="nofollow"><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/new-version/default_block.png?_v=20170616152539" data-original="https://image1.ljcdn.com/350200-inspection/a8d0a080-a971-4483-8b99-dbefb6de65f1.jpg.280x210.jpg" alt="槟榔西里单号区 2室1厅 62.61平米"></a><div class="info"><div class="title"><a href="https://xm.lianjia.com/chengjiao/105100748009.html" target="_blank">槟榔西里单号区 2室1厅 62.61平米</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span>南 | 简装&nbsp;| 无电梯</div><div class="dealDate">2017.05.03</div><div class="totalPrice"><span class='number'>366</span>万</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>中楼层(共7层) 1989年建板楼</div><div class="source">链家成交</div><div class="unitPrice"><span class="number">58458</span>元/平</div></div><div class="dealCycleeInfo"><span class="dealCycleIcon"></span><span class="dealCycleTxt"><span>挂牌375万</span><span>成交周期21天</span></span></div></div></li><li><a class="img" href="https://xm.lianjia.com/chengjiao/105100735130.html" target="_blank" rel="nofollow"><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/new-version/default_block.png?_v=20170616152539" data-original="https://image1.ljcdn.com/350200-inspection/1a1866c0-1217-49c5-b7f6-63ce79cb7db5.jpg.280x210.jpg" alt="故宫裕景 1室0厅 25.4平米"></a><div class="info"><div class="title"><a href="https://xm.lianjia.com/chengjiao/105100735130.html" target="_blank">故宫裕景 1室0厅 25.4平米</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span>南 | 简装&nbsp;| 有电梯</div><div class="dealDate">2017.05.03</div><div class="totalPrice"><span class='number'>205.8</span>万</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>中楼层(共33层) 2008年建塔楼</div><div class="source">链家成交</div><div class="unitPrice"><span class="number">81024</span>元/平</div></div><div class="dealHouseInfo"><span class="dealHouseIcon"></span><span class="dealHouseTxt"><span>房屋满五年</span></span></div><div class="dealCycleeInfo"><span class="dealCycleIcon"></span><span class="dealCycleTxt"><span>挂牌210万</span><span>成交周期28天</span></span></div></div></li><li><a class="img" href="https://xm.lianjia.com/chengjiao/105100738131.html" target="_blank" rel="nofollow"><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/new-version/default_block.png?_v=20170616152539" data-original="https://image1.ljcdn.com/350200-inspection/1f47b565-deca-4efc-80b2-3c936e823b8f.jpg.280x210.jpg" alt="官邸大厦思明 1室1厅 36.29平米"></a><div class="info"><div class="title"><a href="https://xm.lianjia.com/chengjiao/105100738131.html" target="_blank">官邸大厦思明 1室1厅 36.29平米</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span>东南 | 其他&nbsp;| 有电梯</div><div class="dealDate">2017.04.30</div><div class="totalPrice"><span class='number'>259</span>万</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>中楼层(共16层) 2005年建塔楼</div><div class="source">链家成交</div><div class="unitPrice"><span class="number">71370</span>元/平</div></div><div class="dealHouseInfo"><span class="dealHouseIcon"></span><span class="dealHouseTxt"><span>房屋满五年</span></span></div><div class="dealCycleeInfo"><span class="dealCycleIcon"></span><span class="dealCycleTxt"><span>挂牌275万</span><span>成交周期24天</span></span></div></div></li><li><a class="img" href="https://xm.lianjia.com/chengjiao/105100743557.html" target="_blank" rel="nofollow"><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/new-version/default_block.png?_v=20170616152539" data-original="https://image1.ljcdn.com/350200-inspection/3f3f6f56-300e-4eb6-931e-972d2cae3325.jpg.280x210.jpg" alt="富山花园紫荆苑 1室1厅 29.27平米"></a><div class="info"><div class="title"><a href="https://xm.lianjia.com/chengjiao/105100743557.html" target="_blank">富山花园紫荆苑 1室1厅 29.27平米</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span>北 | 精装&nbsp;| 无电梯</div><div class="dealDate">2017.04.30</div><div class="totalPrice"><span class='number'>205</span>万</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>低楼层(共7层) 2000年建板楼</div><div class="source">链家成交</div><div class="unitPrice"><span class="number">70038</span>元/平</div></div><div class="dealCycleeInfo"><span class="dealCycleIcon"></span><span class="dealCycleTxt"><span>挂牌210万</span><span>成交周期21天</span></span></div></div></li><li><a class="img" href="https://xm.lianjia.com/chengjiao/105100758625.html" target="_blank" rel="nofollow"><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/new-version/default_block.png?_v=20170616152539" data-original="https://image1.ljcdn.com/350200-inspection/8d84bc78-7b69-4d56-9367-130f5dd9b295.jpg.280x210.jpg" alt="槟榔东里双号区 3室1厅 71.4平米"></a><div class="info"><div class="title"><a href="https://xm.lianjia.com/chengjiao/105100758625.html" target="_blank">槟榔东里双号区 3室1厅 71.4平米</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span>南 北 | 精装&nbsp;| 无电梯</div><div class="dealDate">2017.04.30</div><div class="totalPrice"><span class='number'>428</span>万</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>中楼层(共6层) 1988年建板楼</div><div class="source">链家成交</div><div class="unitPrice"><span class="number">59944</span>元/平</div></div><div class="dealHouseInfo"><span class="dealHouseIcon"></span><span class="dealHouseTxt"><span>房屋满五年</span></span></div><div class="dealCycleeInfo"><span class="dealCycleIcon"></span><span class="dealCycleTxt"><span>挂牌450万</span><span>成交周期13天</span></span></div></div></li><li><a class="img" href="https://xm.lianjia.com/chengjiao/105100745409.html" target="_blank" rel="nofollow"><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/new-version/default_block.png?_v=20170616152539" data-original="https://image1.ljcdn.com/350200-inspection/0b874199-beb5-485a-b913-b92a08f36797.jpg.280x210.jpg" alt="禾祥西路 2室1厅 66.08平米"></a><div class="info"><div class="title"><a href="https://xm.lianjia.com/chengjiao/105100745409.html" target="_blank">禾祥西路 2室1厅 66.08平米</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span>南 北 | 简装</div><div class="dealDate">2017.04.27</div><div class="totalPrice"><span class='number'>312</span>万</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>高楼层(共6层) 板楼</div><div class="source">链家成交</div><div class="unitPrice"><span class="number">47216</span>元/平</div></div><div class="dealHouseInfo"><span class="dealHouseIcon"></span><span class="dealHouseTxt"><span>房屋满五年</span></span></div><div class="dealCycleeInfo"><span class="dealCycleIcon"></span><span class="dealCycleTxt"><span>挂牌320万</span><span>成交周期17天</span></span></div></div></li><li><a class="img" href="https://xm.lianjia.com/chengjiao/105100743710.html" target="_blank" rel="nofollow"><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/new-version/default_block.png?_v=20170616152539" data-original="https://image1.ljcdn.com/350200-inspection/7a3eefe5-9bed-49a7-b3a1-833ee78b51fc.jpg.280x210.jpg" alt="槟榔东里单号区 2室1厅 71.42平米"></a><div class="info"><div class="title"><a href="https://xm.lianjia.com/chengjiao/105100743710.html" target="_blank">槟榔东里单号区 2室1厅 71.42平米</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span>南 北 | 其他&nbsp;| 无电梯</div><div class="dealDate">2017.04.19</div><div class="totalPrice"><span class='number'>385</span>万</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>低楼层(共6层) 1989年建板楼</div><div class="source">链家成交</div><div class="unitPrice"><span class="number">53907</span>元/平</div></div><div class="dealCycleeInfo"><span class="dealCycleIcon"></span><span class="dealCycleTxt"><span>挂牌405万</span><span>成交周期10天</span></span></div></div></li><li><a class="img" href="https://xm.lianjia.com/chengjiao/105100692806.html" target="_blank" rel="nofollow"><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/new-version/default_block.png?_v=20170616152539" data-original="https://image1.ljcdn.com/350200-inspection/f9ad03a9-7918-41c1-9614-161863b215f72.jpg.280x210.jpg" alt="能群大厦 1室0厅 27平米"></a><div class="info"><div class="title"><a href="https://xm.lianjia.com/chengjiao/105100692806.html" target="_blank">能群大厦 1室0厅 27平米</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span>南 | 简装&nbsp;| 有电梯</div><div class="dealDate">2017.04.19</div><div class="totalPrice"><span class='number'>182</span>万</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>低楼层(共24层) 塔楼</div><div class="source">链家成交</div><div class="unitPrice"><span class="number">67408</span>元/平</div></div><div class="dealCycleeInfo"><span class="dealCycleIcon"></span><span class="dealCycleTxt"><span>挂牌188万</span><span>成交周期34天</span></span></div></div></li><li><a class="img" href="https://xm.lianjia.com/chengjiao/105100741552.html" target="_blank" rel="nofollow"><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/new-version/default_block.png?_v=20170616152539" data-original="https://image1.ljcdn.com/350200-inspection/0c347e7f-1db2-4b5e-be5b-95525eeebf50.jpg.280x210.jpg" alt="前埔北区一里 2室2厅 75.66平米"></a><div class="info"><div class="title"><a href="https://xm.lianjia.com/chengjiao/105100741552.html" target="_blank">前埔北区一里 2室2厅 75.66平米</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span>南 北 | 简装&nbsp;| 无电梯</div><div class="dealDate">2017.04.14</div><div class="totalPrice"><span class='number'>420</span>万</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>高楼层(共5层) 2001年建板楼</div><div class="source">链家成交</div><div class="unitPrice"><span class="number">55512</span>元/平</div></div><div class="dealHouseInfo"><span class="dealHouseIcon"></span><span class="dealHouseTxt"><span>房屋满五年</span></span></div><div class="dealCycleeInfo"><span class="dealCycleIcon"></span><span class="dealCycleTxt"><span>挂牌450万</span><span>成交周期6天</span></span></div></div></li><li><a class="img" href="https://xm.lianjia.com/chengjiao/105100739684.html" target="_blank" rel="nofollow"><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/new-version/default_block.png?_v=20170616152539" data-original="https://image1.ljcdn.com/350200-inspection/bed4836f-2b4e-45da-8eac-c0306513d9ce.jpg.280x210.jpg" alt="万科金域蓝湾二期 1室0厅 33平米"></a><div class="info"><div class="title"><a href="https://xm.lianjia.com/chengjiao/105100739684.html" target="_blank">万科金域蓝湾二期 1室0厅 33平米</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span>南 | 其他</div><div class="dealDate">2017.04.13</div><div class="totalPrice"><span class='number'>33.9</span>万</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>地下室(共1层) 板楼</div><div class="source">链家成交</div><div class="unitPrice"><span class="number">10273</span>元/平</div></div><div class="dealCycleeInfo"><span class="dealCycleIcon"></span><span class="dealCycleTxt"><span>挂牌34万</span><span>成交周期6天</span></span></div></div></li><li><a class="img" href="https://xm.lianjia.com/chengjiao/105100714131.html" target="_blank" rel="nofollow"><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/new-version/default_block.png?_v=20170616152539" data-original="https://image1.ljcdn.com/350200-inspection/7600e052-b68c-46c8-be57-b43af89dbe0b.jpg.280x210.jpg" alt="瑞景公园 2室2厅 157.84平米"></a><div class="info"><div class="title"><a href="https://xm.lianjia.com/chengjiao/105100714131.html" target="_blank">瑞景公园 2室2厅 157.84平米</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span>南 北 | 精装&nbsp;| 有电梯</div><div class="dealDate">2017.04.07</div><div class="totalPrice"><span class='number'>960</span>万</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>低楼层(共20层) 2009年建板楼</div><div class="source">链家成交</div><div class="unitPrice"><span class="number">60822</span>元/平</div></div><div class="dealHouseInfo"><span class="dealHouseIcon"></span><span class="dealHouseTxt"><span>房屋满五年</span></span></div><div class="dealCycleeInfo"><span class="dealCycleIcon"></span><span class="dealCycleTxt"><span>挂牌980万</span><span>成交周期14天</span></span></div></div></li><li><a class="img noPic" href="https://xm.lianjia.com/chengjiao/105100731925.html" target="_blank" rel="nofollow"></a><div class="info"><div class="title"><a href="https://xm.lianjia.com/chengjiao/105100731925.html" target="_blank">银行家园 1室0厅 50平米</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span>南 | 其他</div><div class="dealDate">2017.04.07</div><div class="totalPrice"><span class='number'>80</span>万</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>地下室(共1层) </div><div class="source">链家成交</div><div class="unitPrice"><span class="number">16000</span>元/平</div></div><div class="dealCycleeInfo"><span class="dealCycleIcon"></span><span class="dealCycleTxt"><span>挂牌80万</span><span>成交周期5天</span></span></div></div></li><li><a class="img" href="https://xm.lianjia.com/chengjiao/105100676754.html" target="_blank" rel="nofollow"><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/new-version/default_block.png?_v=20170616152539" data-original="https://image1.ljcdn.com/350200-inspection/72d80ef3-242b-4c71-8018-0d6b5024c1c1.jpg.280x210.jpg" alt="侨福城侨文里 2室2厅 78.96平米"></a><div class="info"><div class="title"><a href="https://xm.lianjia.com/chengjiao/105100676754.html" target="_blank">侨福城侨文里 2室2厅 78.96平米</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span>南 北 | 毛坯&nbsp;| 无电梯</div><div class="dealDate">2017.04.02</div><div class="totalPrice"><span class='number'>380</span>万</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>低楼层(共8层) 2000年建塔楼</div><div class="source">链家成交</div><div class="unitPrice"><span class="number">48126</span>元/平</div></div><div class="dealCycleeInfo"><span class="dealCycleIcon"></span><span class="dealCycleTxt"><span>挂牌380万</span><span>成交周期25天</span></span></div></div></li><li><a class="img" href="https://xm.lianjia.com/chengjiao/105100690941.html" target="_blank" rel="nofollow"><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/new-version/default_block.png?_v=20170616152539" data-original="https://image1.ljcdn.com/350200-inspection/979e668d-a069-4746-a1fc-167ad52bd9f3.jpg.280x210.jpg" alt="卧龙晓城 3室2厅 134.5平米"></a><div class="info"><div class="title"><a href="https://xm.lianjia.com/chengjiao/105100690941.html" target="_blank">卧龙晓城 3室2厅 134.5平米</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span>西南 北 | 精装&nbsp;| 有电梯</div><div class="dealDate">2017.04.01</div><div class="totalPrice"><span class='number'>748</span>万</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>中楼层(共17层) 2000年建板楼</div><div class="source">链家成交</div><div class="unitPrice"><span class="number">55614</span>元/平</div></div><div class="dealCycleeInfo"><span class="dealCycleIcon"></span><span class="dealCycleTxt"><span>挂牌760万</span><span>成交周期17天</span></span></div></div></li><li><a class="img noPic" href="https://xm.lianjia.com/chengjiao/105100660716.html" target="_blank" rel="nofollow"></a><div class="info"><div class="title"><a href="https://xm.lianjia.com/chengjiao/105100660716.html" target="_blank">禾祥首府 1室1厅 40.38平米</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span>西北 | 其他&nbsp;| 有电梯</div><div class="dealDate">2017.03.31</div><div class="totalPrice"><span class='number'>250.1</span>万</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>高楼层(共33层) 2007年建塔楼</div><div class="source">链家成交</div><div class="unitPrice"><span class="number">61915</span>元/平</div></div><div class="dealCycleeInfo"><span class="dealCycleIcon"></span><span class="dealCycleTxt"><span>挂牌250万</span><span>成交周期31天</span></span></div></div></li><li><a class="img" href="https://xm.lianjia.com/chengjiao/105100512059.html" target="_blank" rel="nofollow"><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/new-version/default_block.png?_v=20170616152539" data-original="https://image1.ljcdn.com/350200-inspection/be0f4185-ba5f-4572-b4dc-8377adda02f4.jpg.280x210.jpg" alt="南湖中祥大厦 3室2厅 156.96平米"></a><div class="info"><div class="title"><a href="https://xm.lianjia.com/chengjiao/105100512059.html" target="_blank">南湖中祥大厦 3室2厅 156.96平米</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span>南 北 | 精装&nbsp;| 有电梯</div><div class="dealDate">2017.03.31</div><div class="totalPrice"><span class='number'>980</span>万</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>高楼层(共29层) 2007年建板塔结合</div><div class="source">链家成交</div><div class="unitPrice"><span class="number">62437</span>元/平</div></div><div class="dealHouseInfo"><span class="dealHouseIcon"></span><span class="dealHouseTxt"><span>房屋满五年</span></span></div><div class="dealCycleeInfo"><span class="dealCycleIcon"></span><span class="dealCycleTxt"><span>挂牌990万</span><span>成交周期132天</span></span></div></div></li><li><a class="img" href="https://xm.lianjia.com/chengjiao/105100654512.html" target="_blank" rel="nofollow"><img class="lj-lazy" src="https://s1.ljcdn.com/feroot/pc/asset/img/new-version/default_block.png?_v=20170616152539" data-original="https://image1.ljcdn.com/350200-inspection/b0efaa0c-7ffd-4847-a244-d2a3f65379b8.jpg.280x210.jpg" alt="湖光路44-45号院 2室1厅 66.18平米"></a><div class="info"><div class="title"><a href="https://xm.lianjia.com/chengjiao/105100654512.html" target="_blank">湖光路44-45号院 2室1厅 66.18平米</a></div><div class="address"><div class="houseInfo"><span class="houseIcon"></span>南 北 | 简装</div><div class="dealDate">2017.03.31</div><div class="totalPrice"><span class='number'>290</span>万</div></div><div class="flood"><div class="positionInfo"><span class="positionIcon"></span>中楼层(共6层) </div><div class="source">链家成交</div><div class="unitPrice"><span class="number">43820</span>元/平</div></div><div class="dealCycleeInfo"><span class="dealCycleIcon"></span><span class="dealCycleTxt"><span>挂牌290万</span><span>成交周期33天</span></span></div></div></li></ul><!-- 无搜索结果 --><div class="contentBottom clear" ><div class="crumbs fl"><a href="/">链家网厦门站</a><h1><span >&nbsp;&gt;&nbsp;</span></h1><a href="/chengjiao/">厦门二手房成交价格</a><h1><span >&nbsp;&gt;&nbsp;</span></h1><a href="/chengjiao/siming/">思明二手房成交价格</a></div><div class="page-box fr"><div class="page-box house-lst-page-box" comp-module='page' page-url="/chengjiao/siming/pg{page}/"page-data='{"totalPage":35,"curPage":1}'></div>


</div></div></div><!-- 右侧sidebar --><div class="rightLayout"><div class="rightContent"><div class="map hide"><div class="pic"></div><button>给自己的房子估价</button></div><div class="wrap-side-content hide" id="wrap-side-content"><div class="price" id="tpl-r-price"></div><div class="suggestCommunity" id="tpl-r-house"></div><div class="wenda zixun" id="tpl-r-redian"></div><div class="wenda" id="tpl-r-wenda"></div></div></div></div></div><div class="footer"><div class="wrapper"><div class="f-title"><div class="fl"><ul><li><a href="https://www.lianjia.com/zhuanti/home/" rel="nofollow" target="_blank">了解链家</a></li><li><a href="https://xm.lianjia.com/about/aboutlianjia/" rel="nofollow" target="_blank">关于链家</a></li><li><a href="https://xm.lianjia.com/about/contactus/" rel="nofollow" target="_blank">联系我们</a></li><li><a href="https://join.lianjia.com/" rel="nofollow" target="_blank">加入我们</a></li><li><a href="https://www.lianjia.com/privacy/" rel="nofollow" target="_blank">隐私声明</a></li><li><a href="https://xm.lianjia.com/sitemap/" target="_blank">网站地图</a></li><li><a href="https://www.lianjia.com/notice/7.html" rel="nofollow" target="_blank">友情链接</a></li><li><a href="https://agent.lianjia.com/" rel="nofollow" target="_blank">经纪人登录</a></li></ul></div><div class="fr">官方客服 1010 9666</div></div><div class="lianjia-link-box"><div class="fl"><div class="tab"><span  class="hover">热门城市二手房</span><span >热门城市租房网</span><span >热门城市楼盘</span></div><div class="link-list"><div><dd><a target="_blank" href="https://bj.lianjia.com/ershoufang/">北京二手房</a><a target="_blank" href="https://gz.lianjia.com/ershoufang/">广州二手房</a><a target="_blank" href="https://sz.lianjia.com/ershoufang/">深圳二手房</a><a target="_blank" href="https://tj.lianjia.com/ershoufang/">天津二手房</a><a target="_blank" href="https://cd.lianjia.com/ershoufang/">成都二手房</a><a target="_blank" href="https://nj.lianjia.com/ershoufang/">南京二手房</a><a target="_blank" href="https://hz.lianjia.com/ershoufang/">杭州二手房</a><a target="_blank" href="https://qd.lianjia.com/ershoufang/">青岛二手房</a><a target="_blank" href="https://dl.lianjia.com/ershoufang/">大连二手房</a><a target="_blank" href="https://xm.lianjia.com/ershoufang/">厦门二手房</a><a target="_blank" href="https://wh.lianjia.com/ershoufang/">武汉二手房</a><a target="_blank" href="https://cq.lianjia.com/ershoufang/">重庆二手房</a><a target="_blank" href="https://cs.lianjia.com/ershoufang/">长沙二手房</a><a target="_blank" href="https://jn.lianjia.com/ershoufang/">济南二手房</a></dd></div><div><dd><a target="_blank" href="https://bj.lianjia.com/zufang/">北京租房</a><a target="_blank" href="https://gz.lianjia.com/zufang/">广州租房</a><a target="_blank" href="https://sz.lianjia.com/zufang/">深圳租房</a><a target="_blank" href="https://tj.lianjia.com/zufang/">天津租房</a><a target="_blank" href="https://cd.lianjia.com/zufang/">成都租房</a><a target="_blank" href="https://nj.lianjia.com/zufang/">南京租房</a><a target="_blank" href="https://hz.lianjia.com/zufang/">杭州租房</a><a target="_blank" href="https://qd.lianjia.com/zufang/">青岛租房</a><a target="_blank" href="https://dl.lianjia.com/zufang/">大连租房</a><a target="_blank" href="https://xm.lianjia.com/zufang/">厦门租房</a><a target="_blank" href="https://wh.lianjia.com/zufang/">武汉租房</a><a target="_blank" href="https://cq.lianjia.com/zufang/">重庆租房</a><a target="_blank" href="https://cs.lianjia.com/zufang/">长沙租房</a><a target="_blank" href="https://jn.lianjia.com/zufang/">济南租房</a></dd></div><div><dd><a target="_blank" href="//sh.fang.lianjia.com/">北京楼盘</a><a target="_blank" href="//tj.fang.lianjia.com/">天津楼盘</a><a target="_blank" href="//nj.fang.lianjia.com/">南京楼盘</a><a target="_blank" href="//cd.fang.lianjia.com/">成都楼盘</a><a target="_blank" href="//dl.fang.lianjia.com/">大连楼盘</a><a target="_blank" href="//qd.fang.lianjia.com/">青岛楼盘</a><a target="_blank" href="//hz.fang.lianjia.com/">杭州楼盘</a><a target="_blank" href="//wh.fang.lianjia.com/">武汉楼盘</a><a target="_blank" href="//sz.fang.lianjia.com/">深圳楼盘</a><a target="_blank" href="//cq.fang.lianjia.com/">重庆楼盘</a><a target="_blank" href="//cs.fang.lianjia.com/">长沙楼盘</a><a target="_blank" href="//xa.fang.lianjia.com/">西安楼盘</a><a target="_blank" href="//jn.fang.lianjia.com/">济南楼盘</a><a target="_blank" href="//sjz.fang.lianjia.com/">石家庄楼盘</a></dd></div></div></div><div class="clear"></div></div><div class="bottom"><div class="copyright fl">北京链家房地产经纪有限公司 | 网络经营许可证 京ICP备11024601号-12 | © Copyright©2010-2017 链家网Lianjia.com版权所有</div></div></div></div>

<script src="https://s1.ljcdn.com/feroot/pc/asset/base/fe.js?_v=20170616152539"></script><script src="https://s1.ljcdn.com/feroot/pc/asset/common/common.js?_v=20170616152539"></script><div style="display:none"><script src="https://s1.ljcdn.com/feroot/dep/ljanalytics.js?_v=20170616152539"></script></div><div id="only" data-city="xm" data-page="chengjiao_index"></div>
<script>var path = 'https://s1.ljcdn.com/feroot/pc/asset?_v=20170616152539'.split("?");require.config({baseUrl: path[0],paths: {'echarts' : '../../dep/echarts-1.4.1/build/echarts','echarts/chart/bar' : '../../dep/echarts-1.4.1/build/echarts','echarts/chart/line' : '../../dep/echarts-1.4.1/build/echarts','echarts/chart/pie' : '../../dep/echarts-1.4.1/build/echarts','echarts3' : '../../dep/echarts3/echarts3','common': 'common','jquery-ui': '../../dep/jquery-ui/jquery-ui.min','zeroclipboard': '../../dep/zeroclipboard-2.2.0/ZeroClipboard'},urlArgs:  path[1]});var feData = {"cityName": "北京","getFavHouseUrl":       "/api/gethousefav","setFavHouseUrl":       "/api/sethousefav","getLastSearch":        "/api/getlastsearch","getCommunityHistory":  "/api/getcommunityhistory","verifyHouse":          "/api/verifyHouse","getUser":              "/api/getUser","verifyCode":           "/api/getVerifyCode","complaint":            "/api/complaint","getDecoration":        "/api/getDecoration","trendData" :           "/site/getpicinfo"}</script>
<!-- 价格 -->
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

<!-- 在售小区 -->
<script type="text/template" id="tpl-house">
  <div class="title">本小区在售</div>
  <ul>
    <%for(var i = 0; i < list.length; i++){var item=list[i];%>
      <li>
        <a class="img" href="<%=item.viewUrl%>" target="_blank">
          <img src="<%=item.pic_url%>">
          <div class="price"><%=item.price%>万</div>
        </a>
        <div class="info">
          <a href="<%=item.viewUrl%>" target="_blank"><%=item.title%></a>
          <b><%=item.room%> / <%=item.area%>平</b>
        </div>
      </li>
    <%}%>
  </ul>
</script>
<!-- 热点 -->
<script type="text/template" id="tpl-redian">
  <div class="title">热点精选</div>
  <ul>
    <%for(var i=0;i<list.length;i++) { var item=list[i];%>
      <li>
        <i class="opt<%=i%>"><%=i+1%></i><a class="info" href="<%=item.url%>" title="<%=item.question_title%>" target="_blank"><%=item.question_title%></a>
      </li>
    <%}%>
  </ul>
</script>
<!-- wenda -->
<script type="text/template" id="tpl-wenda">
  <div class="title">热门问答</div>
  <ul>
    <%for(var i=0;i<list.length;i++) { var item=list[i];%>
      <li>
        <a class="info" href="<%=item.url%>" title="<%=item.question_description%>" target="_blank"><%=item.question_title%></a>
        <span class="time"><%=item.mtime%></span>
      </li>
    <%}%>
  </ul>
</script>


<script type="text/javascript">
require(['ershoufang/dealList/index'], function (main) {
  main({
    sidebar:{"type":"district","cityId":350200,"uuid":"15e2f095-d460-49eb-86ce-af527a684e97","ucid":null,"id":"23008796"},
    SIRKeyword:"",
    filterBar:[{"id":23008796,"name":"\u601d\u660e","url":"\/chengjiao\/"}]
  });

  var logMsg = $("[log-mod='laobi_spellcheck']");

  if(logMsg.length) {

    function fixUrl(originUrl, prefixStr) {
        if(originUrl.search(/\?/) > -1) {
            return [originUrl, prefixStr].join("&");
        }

        return [originUrl, prefixStr].join("?");
    }

    logMsg.each(function(ka, va) {
        var ret = [];
        var $el = $(this);

        $el.find("a").each(function(k, v) {

            $(this).attr("href", fixUrl($(this).attr("data-origin_url"), 'from_mod=spellcheck'));

            ret.push($(this).text());
        });

        UT.send({
            type: 'show',
            subtype: 'module_show',
            el: ret.join('---')
        }, $el.get(0));

        UT.send({
            type: 'show',
            subtype: 'module_show',
            mod: [$el.attr("log-mod"), $el.attr("log-mod_description")].join("_"),
            bl: $el.attr("data-bl"),
            el: ret.join('---'),
            value: $el.attr("data-log_value"),
            index: ''
        });

        $el.on("mousedown", "a", function() {
            var $m = $(this);

            UT.send({
                type: 'click',
                subtype: 'link',
                mod: [$el.attr("log-mod"), $el.attr("log-mod_description")].join("_"),
                bl: $m.attr("data-bl"),
                el: $m.attr("data-el"),
                value: $m.attr("data-log_value"),
                index: $m.attr("data-log_index"),
                url: $m.get(0).getAttribute("href", 2)
            });
        });
    });

  }

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
<script>require(['common/suggestion'], function (suggestion) {window.defaultSuggest = suggestion.init({requestOptions: {cityId: '350200',cityName: '厦门'},url: '/api/headerSearch?channel=chengjiao&q=',main: '#keyword-box',appendTo: '#suggest-cont',redirect: true});});</script><div class="loninContaner"><div class="overlay_bg"></div><div class="panel_login animated" id="dialog"><div class="panel_info"><div class="panel_tab"><div class="title"><div class="fl">用户登录</div><label class="fr">还没有链家网账号？<a href="//passport.lianjia.com/register/resources/lianjia/register.html?service=http%3A%2F%2Fbj.lianjia.com%2F" rel="nofollow">马上注册</a></label></div><div class="clear"></div><div id="con_login_user"><form action="" method="post"><ul><li class="show-error"><dd>用户名或密码错误</dd></li><li class="item userName"><i></i><input type="text" class="the_input users" placeholder="请输入手机号" /></li><li class="item pwd"><i></i><input type="password" class="the_input password"  placeholder="请输入登录密码"/></li><li class="item checkVerimg" style="display:none;"><i></i><input type="text" class="the_input ver-img" maxlength="4"  placeholder="请输入验证码"/><img class="verImg"></li><li class="li_01"><label><input type="checkbox" name="remember" value="1" class="mind-login" checked>下次自动登录</label><a href="https://passport.lianjia.com/register/resources/lianjia/forget.html?service=http://bj.lianjia.com/" rel="nofollow">找回密码</a></li><li><a class="login-user-btn"  />立即登录</a></li></ul></form></div><div id="con_login_agent" class="undis"><form action="" method="post"><ul><li class="item"><dd></dd><input type="text" class="the_input users" placeholder="输入经纪人ID号码" /></li><li class="item"><input type="password" class="the_input password"  placeholder="登录密码"/></li><li class="li_01"><label><input type="checkbox" name="remember" value="1" class="mind-login">下次自动登录</label><a href="https://passport.lianjia.com/register/resources/lianjia/forget.html?service=http://bj.lianjia.com/" rel="nofollow">找回密码</a></li><li><input class="login-agent-btn" value="立即登录"/></li></ul></form></div></div></div><div class="registered"></div></div></div>
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
  let LC = new LianjiaDealCollector();
  LC.setHtml(html);
  let page = LC.getTotalPage();
  logger.debug(page);
  await LC.save();
}
main();
