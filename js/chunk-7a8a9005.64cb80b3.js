(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a8a9005"],{"1d06":function(t,n,e){"use strict";e("3430")},3430:function(t,n,e){},"5a0c":function(t,n,e){!function(n,e){t.exports=e()}(0,(function(){"use strict";var t=1e3,n=6e4,e=36e5,r="millisecond",i="second",s="minute",a="hour",o="day",u="week",c="month",h="quarter",l="year",f="date",d="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},v=function(t,n,e){var r=String(t);return!r||r.length>=n?t:""+Array(n+1-r.length).join(e)+t},p={s:v,z:function(t){var n=-t.utcOffset(),e=Math.abs(n),r=Math.floor(e/60),i=e%60;return(n<=0?"+":"-")+v(r,2,"0")+":"+v(i,2,"0")},m:function t(n,e){if(n.date()<e.date())return-t(e,n);var r=12*(e.year()-n.year())+(e.month()-n.month()),i=n.clone().add(r,c),s=e-i<0,a=n.clone().add(r+(s?-1:1),c);return+(-(r+(e-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:l,w:u,d:o,D:f,h:a,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},w="en",y={};y[w]=g;var D=function(t){return t instanceof k},M=function(t,n,e){var r;if(!t)return w;if("string"==typeof t)y[t]&&(r=t),n&&(y[t]=n,r=t);else{var i=t.name;y[i]=t,r=i}return!e&&r&&(w=r),r||!e&&w},_=function(t,n){if(D(t))return t.clone();var e="object"==typeof n?n:{};return e.date=t,e.args=arguments,new k(e)},S=p;S.l=M,S.i=D,S.w=function(t,n){return _(t,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var k=function(){function g(t){this.$L=M(t.locale,null,!0),this.parse(t)}var v=g.prototype;return v.parse=function(t){this.$d=function(t){var n=t.date,e=t.utc;if(null===n)return new Date(NaN);if(S.u(n))return new Date;if(n instanceof Date)return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var r=n.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return e?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(n)}(t),this.$x=t.x||{},this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return S},v.isValid=function(){return!(this.$d.toString()===d)},v.isSame=function(t,n){var e=_(t);return this.startOf(n)<=e&&e<=this.endOf(n)},v.isAfter=function(t,n){return _(t)<this.startOf(n)},v.isBefore=function(t,n){return this.endOf(n)<_(t)},v.$g=function(t,n,e){return S.u(t)?this[n]:this.set(e,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,n){var e=this,r=!!S.u(n)||n,h=S.p(t),d=function(t,n){var i=S.w(e.$u?Date.UTC(e.$y,n,t):new Date(e.$y,n,t),e);return r?i:i.endOf(o)},$=function(t,n){return S.w(e.toDate()[t].apply(e.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(n)),e)},m=this.$W,g=this.$M,v=this.$D,p="set"+(this.$u?"UTC":"");switch(h){case l:return r?d(1,0):d(31,11);case c:return r?d(1,g):d(0,g+1);case u:var w=this.$locale().weekStart||0,y=(m<w?m+7:m)-w;return d(r?v-y:v+(6-y),g);case o:case f:return $(p+"Hours",0);case a:return $(p+"Minutes",1);case s:return $(p+"Seconds",2);case i:return $(p+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,n){var e,u=S.p(t),h="set"+(this.$u?"UTC":""),d=(e={},e[o]=h+"Date",e[f]=h+"Date",e[c]=h+"Month",e[l]=h+"FullYear",e[a]=h+"Hours",e[s]=h+"Minutes",e[i]=h+"Seconds",e[r]=h+"Milliseconds",e)[u],$=u===o?this.$D+(n-this.$W):n;if(u===c||u===l){var m=this.clone().set(f,1);m.$d[d]($),m.init(),this.$d=m.set(f,Math.min(this.$D,m.daysInMonth())).$d}else d&&this.$d[d]($);return this.init(),this},v.set=function(t,n){return this.clone().$set(t,n)},v.get=function(t){return this[S.p(t)]()},v.add=function(r,h){var f,d=this;r=Number(r);var $=S.p(h),m=function(t){var n=_(d);return S.w(n.date(n.date()+Math.round(t*r)),d)};if($===c)return this.set(c,this.$M+r);if($===l)return this.set(l,this.$y+r);if($===o)return m(1);if($===u)return m(7);var g=(f={},f[s]=n,f[a]=e,f[i]=t,f)[$]||1,v=this.$d.getTime()+r*g;return S.w(v,this)},v.subtract=function(t,n){return this.add(-1*t,n)},v.format=function(t){var n=this,e=this.$locale();if(!this.isValid())return e.invalidDate||d;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=S.z(this),s=this.$H,a=this.$m,o=this.$M,u=e.weekdays,c=e.months,h=function(t,e,i,s){return t&&(t[e]||t(n,r))||i[e].substr(0,s)},l=function(t){return S.s(s%12||12,t,"0")},f=e.meridiem||function(t,n,e){var r=t<12?"AM":"PM";return e?r.toLowerCase():r},$={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:S.s(o+1,2,"0"),MMM:h(e.monthsShort,o,c,3),MMMM:h(c,o),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:h(e.weekdaysMin,this.$W,u,2),ddd:h(e.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(s),HH:S.s(s,2,"0"),h:l(1),hh:l(2),a:f(s,a,!0),A:f(s,a,!1),m:String(a),mm:S.s(a,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:i};return r.replace(m,(function(t,n){return n||$[t]||i.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(r,f,d){var $,m=S.p(f),g=_(r),v=(g.utcOffset()-this.utcOffset())*n,p=this-g,w=S.m(this,g);return w=($={},$[l]=w/12,$[c]=w,$[h]=w/3,$[u]=(p-v)/6048e5,$[o]=(p-v)/864e5,$[a]=p/e,$[s]=p/n,$[i]=p/t,$)[m]||p,d?w:S.a(w)},v.daysInMonth=function(){return this.endOf(c).$D},v.$locale=function(){return y[this.$L]},v.locale=function(t,n){if(!t)return this.$L;var e=this.clone(),r=M(t,n,!0);return r&&(e.$L=r),e},v.clone=function(){return S.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},g}(),O=k.prototype;return _.prototype=O,[["$ms",r],["$s",i],["$m",s],["$H",a],["$W",o],["$M",c],["$y",l],["$D",f]].forEach((function(t){O[t[1]]=function(n){return this.$g(n,t[0],t[1])}})),_.extend=function(t,n){return t.$i||(t(n,k,_),t.$i=!0),_},_.locale=M,_.isDayjs=D,_.unix=function(t){return _(1e3*t)},_.en=y[w],_.Ls=y,_.p={},_}))},"89d9":function(t,n,e){"use strict";class r{constructor(t){this.code=t.code||"",this.name=t.name||"",this.org_name_cn="",this.org_cn_introduction="",this.chairman="",this.secretary="",this.legal_representative="",this.general_manager=""}async getInfo(){const t=await fetch("/stocks/"+this.code),n=await t.json();this.org_name_cn=n.org_name_cn,this.org_cn_introduction=n.org_cn_introduction,this.chairman=n.chairman,this.secretary=n.secretary,this.legal_representative=n.legal_representative,this.general_manager=n.general_manager}}n["a"]=r},eafb:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("main-banner"),e("van-row",[e("van-cell",{attrs:{title:t.date,"is-link":"",value:"选择日期"},on:{click:function(n){t.calendarShow=!0}}})],1),e("van-skeleton",{attrs:{row:6,loading:t.loading}},[t.stocks.length>0?e("stock-list",{attrs:{stocks:t.stocks}}):e("van-empty",{attrs:{description:"请选择其他日期试试"}})],1),e("van-divider",[t._v("注意")]),e("van-row",[e("p",[t._v("这是一个实验性的项目，所提供数据结果仅供参考，但因此引起的收益或损失，本网站不负任何责任。")]),e("p",[t._v("本项目致力于探索数据与投资之间的关系。如果对本项目感兴趣，请加入交流群，以获取更多内容。")])]),e("van-calendar",{attrs:{color:"#3999fb","show-confirm":!1,"min-date":t.minDate,"max-date":t.maxDate},on:{confirm:t.onCalendarConfirm},model:{value:t.calendarShow,callback:function(n){t.calendarShow=n},expression:"calendarShow"}})],1)},i=[];async function s(t){const n="/bluewhale-data",e="";return await fetch(`${e}${n}${t}`)}var a=s;class o{static async fetch(t){try{const n=await a(`/filter/bluewhale/${t}.json`);return await n.json()}catch(n){return null}}}var u=o,c=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",t._l(t.stocks,(function(n){return e("van-cell",{key:n.code,attrs:{"is-link":"",title:n.name+" - "+n.code},on:{click:function(){return t.goto(n)}}})})),1)},h=[],l={props:{stocks:Array,required:!0},methods:{goto(t){this.$router.push({name:"stockDetail",params:{stock:t}})}}},f=l,d=e("2877"),$=Object(d["a"])(f,c,h,!1,null,null,null),m=$.exports,g=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("van-image",{attrs:{width:"100%",src:"./img/banner.jpg"}})},v=[],p={},w=p,y=Object(d["a"])(w,g,v,!1,null,null,null),D=y.exports,M=e("89d9");function _(t,n){return new Promise(e=>{const r=new Promise(n=>{setTimeout(()=>{n()},1e3*t)}),i=[];i.push(r),n&&i.push(n),Promise.all(i).then(t=>{e(t[1])})})}var S=e("5a0c"),k=e.n(S);function O(){return k()().format("YYYY-MM-DD")}var b={name:"Home",components:{StockList:m,MainBanner:D},data(){return{stocks:[],loading:!0,date:O(),calendarShow:!1,minDate:k()("2021-09-20").toDate(),maxDate:k()().toDate()}},mounted(){this.getStocks(this.date)},methods:{async getStocks(t){this.loading=!0;const n=await _(1,u.fetch(t));if(this.loading=!1,n&&n.list){const t=n.list;this.stocks=t.map(t=>new M["a"](t))}else this.stocks=[]},onCalendarConfirm(t){const n=k()(t).format("YYYY-MM-DD");this.date=n,this.getStocks(this.date),this.calendarShow=!1}}},Y=b,x=(e("1d06"),Object(d["a"])(Y,r,i,!1,null,"48d8c5aa",null));n["default"]=x.exports}}]);