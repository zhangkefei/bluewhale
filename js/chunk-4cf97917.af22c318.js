(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4cf97917"],{"5a0c":function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",a="hour",o="day",u="week",c="month",h="quarter",l="year",f="date",d="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,$=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},v=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},p={s:v,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+v(r,2,"0")+":"+v(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,a=e.clone().add(r+(s?-1:1),c);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:l,w:u,d:o,D:f,h:a,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},w="en",y={};y[w]=g;var D=function(t){return t instanceof k},M=function(t,e,n){var r;if(!t)return w;if("string"==typeof t)y[t]&&(r=t),e&&(y[t]=e,r=t);else{var i=t.name;y[i]=t,r=i}return!n&&r&&(w=r),r||!n&&w},_=function(t,e){if(D(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new k(n)},S=p;S.l=M,S.i=D,S.w=function(t,e){return _(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var k=function(){function g(t){this.$L=M(t.locale,null,!0),this.parse(t)}var v=g.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(S.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(m);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return S},v.isValid=function(){return!(this.$d.toString()===d)},v.isSame=function(t,e){var n=_(t);return this.startOf(e)<=n&&n<=this.endOf(e)},v.isAfter=function(t,e){return _(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<_(t)},v.$g=function(t,e,n){return S.u(t)?this[e]:this.set(n,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var n=this,r=!!S.u(e)||e,h=S.p(t),d=function(t,e){var i=S.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(o)},m=function(t,e){return S.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},$=this.$W,g=this.$M,v=this.$D,p="set"+(this.$u?"UTC":"");switch(h){case l:return r?d(1,0):d(31,11);case c:return r?d(1,g):d(0,g+1);case u:var w=this.$locale().weekStart||0,y=($<w?$+7:$)-w;return d(r?v-y:v+(6-y),g);case o:case f:return m(p+"Hours",0);case a:return m(p+"Minutes",1);case s:return m(p+"Seconds",2);case i:return m(p+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var n,u=S.p(t),h="set"+(this.$u?"UTC":""),d=(n={},n[o]=h+"Date",n[f]=h+"Date",n[c]=h+"Month",n[l]=h+"FullYear",n[a]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[u],m=u===o?this.$D+(e-this.$W):e;if(u===c||u===l){var $=this.clone().set(f,1);$.$d[d](m),$.init(),this.$d=$.set(f,Math.min(this.$D,$.daysInMonth())).$d}else d&&this.$d[d](m);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[S.p(t)]()},v.add=function(r,h){var f,d=this;r=Number(r);var m=S.p(h),$=function(t){var e=_(d);return S.w(e.date(e.date()+Math.round(t*r)),d)};if(m===c)return this.set(c,this.$M+r);if(m===l)return this.set(l,this.$y+r);if(m===o)return $(1);if(m===u)return $(7);var g=(f={},f[s]=e,f[a]=n,f[i]=t,f)[m]||1,v=this.$d.getTime()+r*g;return S.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=S.z(this),s=this.$H,a=this.$m,o=this.$M,u=n.weekdays,c=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},l=function(t){return S.s(s%12||12,t,"0")},f=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:S.s(o+1,2,"0"),MMM:h(n.monthsShort,o,c,3),MMMM:h(c,o),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,u,2),ddd:h(n.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(s),HH:S.s(s,2,"0"),h:l(1),hh:l(2),a:f(s,a,!0),A:f(s,a,!1),m:String(a),mm:S.s(a,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:i};return r.replace($,(function(t,e){return e||m[t]||i.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(r,f,d){var m,$=S.p(f),g=_(r),v=(g.utcOffset()-this.utcOffset())*e,p=this-g,w=S.m(this,g);return w=(m={},m[l]=w/12,m[c]=w,m[h]=w/3,m[u]=(p-v)/6048e5,m[o]=(p-v)/864e5,m[a]=p/n,m[s]=p/e,m[i]=p/t,m)[$]||p,d?w:S.a(w)},v.daysInMonth=function(){return this.endOf(c).$D},v.$locale=function(){return y[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=M(t,e,!0);return r&&(n.$L=r),n},v.clone=function(){return S.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},g}(),O=k.prototype;return _.prototype=O,[["$ms",r],["$s",i],["$m",s],["$H",a],["$W",o],["$M",c],["$y",l],["$D",f]].forEach((function(t){O[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),_.extend=function(t,e){return t.$i||(t(e,k,_),t.$i=!0),_},_.locale=M,_.isDayjs=D,_.unix=function(t){return _(1e3*t)},_.en=y[w],_.Ls=y,_.p={},_}))},"89d9":function(t,e,n){"use strict";var r=n("5a0c"),i=n.n(r);class s{constructor(t){this.code=t.code||"",this.name=t.name||"",this.time=i()(t.timestamp).format("YYYY-MM-DD"),this.org_name_cn="",this.org_cn_introduction="",this.chairman="",this.secretary="",this.legal_representative="",this.general_manager=""}async getInfo(){const t=await fetch("/stocks/"+this.code),e=await t.json();this.org_name_cn=e.org_name_cn,this.org_cn_introduction=e.org_cn_introduction,this.chairman=e.chairman,this.secretary=e.secretary,this.legal_representative=e.legal_representative,this.general_manager=e.general_manager}}e["a"]=s},eafb:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("main-banner"),n("van-row",[n("van-search",{attrs:{placeholder:"请输入搜索关键词"},on:{focus:function(e){t.calendarShow=!0}},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1),n("van-skeleton",{attrs:{row:6,loading:t.loading}},[t.stocks.length>0?n("stock-list",{attrs:{stocks:t.stocks}}):n("van-empty",{attrs:{description:"当前日期可能没有数据哦"}})],1),n("van-calendar",{attrs:{"min-date":t.minDate,"max-date":t.maxDate},on:{confirm:t.onCalendarConfirm},model:{value:t.calendarShow,callback:function(e){t.calendarShow=e},expression:"calendarShow"}})],1)},i=[];async function s(t){const e="/bluewhale-data",n="";return await fetch(`${n}${e}${t}`)}var a=s;class o{static async fetch(t){try{const e=await a(`/filter/bluewhale/${t}.json`);return await e.json()}catch(e){return null}}}var u=o,c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.stocks,(function(e){return n("van-cell",{key:e.code,attrs:{"is-link":"",title:e.name+" - "+e.code,value:e.time},on:{click:function(){return t.goto(e)}}})})),1)},h=[],l={props:{stocks:Array,required:!0},methods:{goto(t){this.$router.push({name:"stockDetail",params:{stock:t}})}}},f=l,d=n("2877"),m=Object(d["a"])(f,c,h,!1,null,null,null),$=m.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-image",{attrs:{width:"100%",src:"./img/banner.jpg"}})},v=[],p={},w=p,y=Object(d["a"])(w,g,v,!1,null,null,null),D=y.exports,M=n("89d9");function _(t,e){return new Promise(n=>{const r=new Promise(e=>{setTimeout(()=>{e()},1e3*t)}),i=[];i.push(r),e&&i.push(e),Promise.all(i).then(t=>{n(t[1])})})}var S=n("5a0c"),k=n.n(S);function O(){return k()().format("YYYY-MM-DD")}var Y={name:"Home",components:{StockList:$,MainBanner:D},data(){return{stocks:[],loading:!0,date:O(),calendarShow:!1,minDate:k()("2021-01-01").toDate(),maxDate:k()().toDate()}},mounted(){this.getStocks(this.date)},methods:{async getStocks(t){this.loading=!0;const e=await _(1,u.fetch(t));if(this.loading=!1,e&&e.list){const t=e.list;this.stocks=t.map(t=>new M["a"](t))}else this.stocks=[]},onCalendarConfirm(t){const e=k()(t).format("YYYY-MM-DD");this.date=e,this.getStocks(this.date),this.calendarShow=!1}}},b=Y,x=Object(d["a"])(b,r,i,!1,null,null,null);e["default"]=x.exports}}]);