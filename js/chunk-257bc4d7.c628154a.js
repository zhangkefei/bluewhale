(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-257bc4d7"],{"171e":function(t,n,e){"use strict";e("1891")},1891:function(t,n,e){},"5a0c":function(t,n,e){!function(n,e){t.exports=e()}(0,(function(){"use strict";var t=1e3,n=6e4,e=36e5,r="millisecond",i="second",s="minute",a="hour",o="day",c="week",u="month",h="quarter",l="year",f="date",d="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,$=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},v=function(t,n,e){var r=String(t);return!r||r.length>=n?t:""+Array(n+1-r.length).join(e)+t},p={s:v,z:function(t){var n=-t.utcOffset(),e=Math.abs(n),r=Math.floor(e/60),i=e%60;return(n<=0?"+":"-")+v(r,2,"0")+":"+v(i,2,"0")},m:function t(n,e){if(n.date()<e.date())return-t(e,n);var r=12*(e.year()-n.year())+(e.month()-n.month()),i=n.clone().add(r,u),s=e-i<0,a=n.clone().add(r+(s?-1:1),u);return+(-(r+(e-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:u,y:l,w:c,d:o,D:f,h:a,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},w="en",y={};y[w]=g;var _=function(t){return t instanceof k},D=function(t,n,e){var r;if(!t)return w;if("string"==typeof t)y[t]&&(r=t),n&&(y[t]=n,r=t);else{var i=t.name;y[i]=t,r=i}return!e&&r&&(w=r),r||!e&&w},M=function(t,n){if(_(t))return t.clone();var e="object"==typeof n?n:{};return e.date=t,e.args=arguments,new k(e)},S=p;S.l=D,S.i=_,S.w=function(t,n){return M(t,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var k=function(){function g(t){this.$L=D(t.locale,null,!0),this.parse(t)}var v=g.prototype;return v.parse=function(t){this.$d=function(t){var n=t.date,e=t.utc;if(null===n)return new Date(NaN);if(S.u(n))return new Date;if(n instanceof Date)return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var r=n.match(m);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return e?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(n)}(t),this.$x=t.x||{},this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return S},v.isValid=function(){return!(this.$d.toString()===d)},v.isSame=function(t,n){var e=M(t);return this.startOf(n)<=e&&e<=this.endOf(n)},v.isAfter=function(t,n){return M(t)<this.startOf(n)},v.isBefore=function(t,n){return this.endOf(n)<M(t)},v.$g=function(t,n,e){return S.u(t)?this[n]:this.set(e,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,n){var e=this,r=!!S.u(n)||n,h=S.p(t),d=function(t,n){var i=S.w(e.$u?Date.UTC(e.$y,n,t):new Date(e.$y,n,t),e);return r?i:i.endOf(o)},m=function(t,n){return S.w(e.toDate()[t].apply(e.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(n)),e)},$=this.$W,g=this.$M,v=this.$D,p="set"+(this.$u?"UTC":"");switch(h){case l:return r?d(1,0):d(31,11);case u:return r?d(1,g):d(0,g+1);case c:var w=this.$locale().weekStart||0,y=($<w?$+7:$)-w;return d(r?v-y:v+(6-y),g);case o:case f:return m(p+"Hours",0);case a:return m(p+"Minutes",1);case s:return m(p+"Seconds",2);case i:return m(p+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,n){var e,c=S.p(t),h="set"+(this.$u?"UTC":""),d=(e={},e[o]=h+"Date",e[f]=h+"Date",e[u]=h+"Month",e[l]=h+"FullYear",e[a]=h+"Hours",e[s]=h+"Minutes",e[i]=h+"Seconds",e[r]=h+"Milliseconds",e)[c],m=c===o?this.$D+(n-this.$W):n;if(c===u||c===l){var $=this.clone().set(f,1);$.$d[d](m),$.init(),this.$d=$.set(f,Math.min(this.$D,$.daysInMonth())).$d}else d&&this.$d[d](m);return this.init(),this},v.set=function(t,n){return this.clone().$set(t,n)},v.get=function(t){return this[S.p(t)]()},v.add=function(r,h){var f,d=this;r=Number(r);var m=S.p(h),$=function(t){var n=M(d);return S.w(n.date(n.date()+Math.round(t*r)),d)};if(m===u)return this.set(u,this.$M+r);if(m===l)return this.set(l,this.$y+r);if(m===o)return $(1);if(m===c)return $(7);var g=(f={},f[s]=n,f[a]=e,f[i]=t,f)[m]||1,v=this.$d.getTime()+r*g;return S.w(v,this)},v.subtract=function(t,n){return this.add(-1*t,n)},v.format=function(t){var n=this,e=this.$locale();if(!this.isValid())return e.invalidDate||d;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=S.z(this),s=this.$H,a=this.$m,o=this.$M,c=e.weekdays,u=e.months,h=function(t,e,i,s){return t&&(t[e]||t(n,r))||i[e].substr(0,s)},l=function(t){return S.s(s%12||12,t,"0")},f=e.meridiem||function(t,n,e){var r=t<12?"AM":"PM";return e?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:S.s(o+1,2,"0"),MMM:h(e.monthsShort,o,u,3),MMMM:h(u,o),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:h(e.weekdaysMin,this.$W,c,2),ddd:h(e.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(s),HH:S.s(s,2,"0"),h:l(1),hh:l(2),a:f(s,a,!0),A:f(s,a,!1),m:String(a),mm:S.s(a,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:i};return r.replace($,(function(t,n){return n||m[t]||i.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(r,f,d){var m,$=S.p(f),g=M(r),v=(g.utcOffset()-this.utcOffset())*n,p=this-g,w=S.m(this,g);return w=(m={},m[l]=w/12,m[u]=w,m[h]=w/3,m[c]=(p-v)/6048e5,m[o]=(p-v)/864e5,m[a]=p/e,m[s]=p/n,m[i]=p/t,m)[$]||p,d?w:S.a(w)},v.daysInMonth=function(){return this.endOf(u).$D},v.$locale=function(){return y[this.$L]},v.locale=function(t,n){if(!t)return this.$L;var e=this.clone(),r=D(t,n,!0);return r&&(e.$L=r),e},v.clone=function(){return S.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},g}(),b=k.prototype;return M.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",a],["$W",o],["$M",u],["$y",l],["$D",f]].forEach((function(t){b[t[1]]=function(n){return this.$g(n,t[0],t[1])}})),M.extend=function(t,n){return t.$i||(t(n,k,M),t.$i=!0),M},M.locale=D,M.isDayjs=_,M.unix=function(t){return M(1e3*t)},M.en=y[w],M.Ls=y,M.p={},M}))},"89d9":function(t,n,e){"use strict";var r=e("b775");class i{constructor(t){this.code=t.code||"",this.name=t.name||"",this.org_name_cn="",this.org_cn_introduction="",this.chairman="",this.secretary="",this.legal_representative="",this.general_manager=""}async getInfo(){const t=await Object(r["a"])(`/stock_info/${this.code}.json`),n=await t.json();this.name=n.org_short_name_cn,this.org_name_cn=n.org_name_cn,this.org_cn_introduction=n.org_cn_introduction,this.chairman=n.chairman,this.secretary=n.secretary,this.legal_representative=n.legal_representative,this.general_manager=n.general_manager}}n["a"]=i},b775:function(t,n,e){"use strict";async function r(t){const n="/bluewhale-data",e="";return await fetch(`${e}${n}${t}`)}n["a"]=r},eafb:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("main-banner"),e("van-grid",{attrs:{"column-num":2,direction:"horizontal"}},[e("van-grid-item",{attrs:{icon:"filter-o",text:t.tactic},on:{click:function(n){t.showPicker=!0}}}),e("van-grid-item",{attrs:{icon:"calendar-o",text:t.date},on:{click:function(n){t.calendarShow=!0}}})],1),e("van-skeleton",{attrs:{row:6,loading:t.loading}},[t.stocks.length>0?e("stock-list",{attrs:{stocks:t.stocks}}):e("van-empty",{attrs:{description:"请选择其他日期试试"}})],1),e("van-divider",[t._v("注意")]),e("van-row",[e("p",[t._v(" 这是一个实验性的项目，所提供数据结果仅供参考，但因此引起的收益或损失，本网站不负任何责任。 ")]),e("p",[t._v(" 本项目致力于探索数据与投资之间的关系。如果对本项目感兴趣，请加入交流群，以获取更多内容。 ")])]),e("van-row",{staticStyle:{height:"50px"}}),e("van-calendar",{attrs:{color:"#3999fb","show-confirm":!1,"min-date":t.minDate,"max-date":t.maxDate},on:{confirm:t.onCalendarConfirm},model:{value:t.calendarShow,callback:function(n){t.calendarShow=n},expression:"calendarShow"}}),e("van-popup",{attrs:{round:"",position:"bottom"},model:{value:t.showPicker,callback:function(n){t.showPicker=n},expression:"showPicker"}},[e("van-picker",{attrs:{title:"选择策略","show-toolbar":"",columns:t.tactics},on:{cancel:function(n){t.showPicker=!1},confirm:t.onTackticsConfirm}})],1)],1)},i=[],s=e("b775");class a{static async fetch(t){try{const n=await Object(s["a"])(`/filter/bluewhale/${t}.json`);return await n.json()}catch(n){return null}}}var o=a,c=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("van-cell-group",{staticStyle:{margin:"30px 0"}},t._l(t.stocks,(function(n){return e("van-cell",{key:n.code,attrs:{"is-link":"",title:n.name+" - "+n.code},on:{click:function(e){return t.goto(n.code)}}})})),1)},u=[],h={props:{stocks:Array,required:!0},methods:{goto(t){this.$router.push({name:"stockDetail",params:{code:t}})}}},l=h,f=e("2877"),d=Object(f["a"])(l,c,u,!1,null,null,null),m=d.exports,$=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("van-image",{attrs:{width:"100%",src:"./img/banner.jpg"}})},g=[],v={},p=v,w=Object(f["a"])(p,$,g,!1,null,null,null),y=w.exports,_=e("89d9");function D(t,n){return new Promise(e=>{const r=new Promise(n=>{setTimeout(()=>{n()},1e3*t)}),i=[];i.push(r),n&&i.push(n),Promise.all(i).then(t=>{e(t[1])})})}var M=e("5a0c"),S=e.n(M);function k(){return S()().format("YYYY-MM-DD")}var b={name:"Home",components:{StockList:m,MainBanner:y},data(){return{stocks:[],loading:!0,date:k(),calendarShow:!1,showPicker:!1,minDate:S()("2021-09-20").toDate(),maxDate:S()().toDate(),tactics:["蓝鲸1号","蓝鲸2号","蓝鲸3号","蓝鲸4号","蓝鲸5号"],tactic:"蓝鲸1号"}},mounted(){this.getStocks(this.date)},methods:{async getStocks(t){this.loading=!0;const n=await D(1,o.fetch(t));if(this.loading=!1,n&&n.list){const t=n.list;this.stocks=t.map(t=>new _["a"](t))}else this.stocks=[]},onCalendarConfirm(t){const n=S()(t).format("YYYY-MM-DD");this.date=n,this.getStocks(this.date),this.calendarShow=!1},onTackticsConfirm(t){this.tactic=t,this.showPicker=!1}}},O=b,Y=(e("171e"),Object(f["a"])(O,r,i,!1,null,"5d1bf670",null));n["default"]=Y.exports}}]);