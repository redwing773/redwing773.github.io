(function(){"use strict";var t={5411:function(t,e,s){var a=s(6369),r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("portfolio-view")],1)},n=[],i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"header"},[e("router-link",{attrs:{to:"/news"}},[t._v("News")]),e("router-link",{attrs:{to:"/ask"}},[t._v("Ask")]),e("router-link",{attrs:{to:"/jobs"}},[t._v("Jobs")])],1)},o=[],l={},c=l,d=s(1001),u=(0,d.Z)(c,i,o,!1,null,"1d2a64e5",null),h=u.exports,p=function(){var t=this,e=t._self._c;return t.loading?e("div",{staticClass:"lds-facebook"},[e("div"),e("div"),e("div")]):t._e()},m=[],v={props:{loading:{type:Boolean,required:!0}}},f=v,_=(0,d.Z)(f,p,m,!1,null,"aa21b8a2",null),g=_.exports,b=new a.ZP,C=function(){var t=this,e=t._self._c;return e("div",{staticStyle:{width:"800px"}},[e("canvas",{ref:"barChart",attrs:{id:"acquisitions"}})])},w=[],y={props:["propsdata"],mounted(){this.$emit;const t=this,e=[{year:2010,count:10},{year:2011,count:20},{year:2012,count:15},{year:2013,count:25},{year:2014,count:22},{year:2015,count:30},{year:2016,count:28}];new this.$_Chart(this.$refs.barChart,{type:"bar",data:{labels:e.map((t=>t.year)),datasets:this.propsdata},options:{onClick:function(){t.$emit("ref_chart"),console.log("emit send")}}})}},S=y,k=(0,d.Z)(S,C,w,!1,null,null,null),T=k.exports,$=function(){var t=this,e=t._self._c;return e("div",{staticStyle:{width:"800px"}},[e("canvas",{ref:"lineChart",attrs:{id:"myChart"}})])},E=[],x={mounted(){const t=this.$refs.lineChart;new this.$_Chart(t,{type:"line",data:{labels:["Red","Blue","Yellow","Green","Purple","Orange"],datasets:[{label:"# of Votes",data:[12,19,3,5,2,3],borderWidth:1,borderColor:"rgb(255, 99, 132)"}]},options:{scales:{y:{beginAtZero:!0}}}})}},Z=x,I=(0,d.Z)(Z,$,E,!1,null,null,null),j=I.exports,L=function(){var t=this;t._self._c;return t._m(0)},P=[function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"container"}},[e("div",{attrs:{id:"wrap"}},[e("header",{attrs:{id:"header"}},[e("div",{attrs:{id:"banner"}}),e("div",{staticClass:"outer",attrs:{id:"header-outer"}},[e("div",{staticClass:"inner",attrs:{id:"header-title"}},[e("h1",{attrs:{id:"logo-wrap"}},[e("a",{staticStyle:{padding:"0 20px","font-weight":"400","text-shadow":"0 0 1px #000"},attrs:{href:"/",id:"logo"}},[t._v("웹퍼블리셔 채지민 입니다")])])]),e("div",{staticClass:"inner",attrs:{id:"header-inner"}},[e("nav",{attrs:{id:"main-nav"}},[e("a",{staticClass:"nav-icon",attrs:{id:"main-nav-toggle"}}),e("a",{staticClass:"main-nav-link",attrs:{href:"/"}},[t._v("Home")])]),e("nav",{attrs:{id:"sub-nav"}},[e("a",{staticClass:"nav-icon",attrs:{id:"nav-search-btn",title:"Search"}})]),e("div",{attrs:{id:"search-form-wrap"}},[e("form",{staticClass:"search-form",attrs:{action:"//google.com/search",method:"get","accept-charset":"UTF-8"}},[e("input",{staticClass:"search-form-input",attrs:{type:"search",name:"q",placeholder:"Search"}}),e("button",{staticClass:"search-form-submit",attrs:{type:"submit"}},[t._v("")]),e("input",{attrs:{type:"hidden",name:"sitesearch",value:"redwing773.github.io"}})])])])])]),e("div",{staticClass:"outer"},[e("section",{attrs:{id:"main"}},[e("article",{staticClass:"article article-type-post",attrs:{id:"",itemscope:"",itemprop:"blogPost"}},[e("div",{staticClass:"article-meta"},[e("a",{staticClass:"article-date",attrs:{href:"#"}},[e("time",[t._v("2020-12-31")])])]),e("div",{staticClass:"article-inner"},[e("header",{staticClass:"article-header"},[e("h1",{staticClass:"article-title",attrs:{itemprop:"name"}},[t._v(" 작업 중.. Vue.JS 프레임워크로 된 사이트로 수정 예정 ")])]),e("div",{staticClass:"article-entry popol",attrs:{itemprop:"articleBody"}},[e("a",{staticStyle:{display:"block",margin:"20px 0","text-align":"right"},attrs:{href:"",target:"_blank"}},[t._v("이력서 다운로드")]),e("div",{staticClass:"imgbox"},[e("img",{attrs:{src:"/legacy/images/html5.png",alt:""}}),e("img",{attrs:{src:"/legacy/images/css3.png",alt:""}}),e("img",{attrs:{src:"/legacy/images/js.png",alt:""}})]),e("div",{staticClass:"list"},[e("h1",{staticClass:"article-title",attrs:{itemprop:"name"}},[t._v(" 포트폴리오 ")]),e("dl",[e("dt",[t._v("포스코 SteelTrade 철강 e-MarketPlace 구축")]),e("dd",[t._v("포스코 주문 외 제품의 온라인 판매와 철강 비즈니스의 상생의 생태계를 위한 철강 오픈마켓 서비스 구축")]),e("dd",[t._v("역할 : ADMIN 페이지, 제품 상세 페이지, 메인페이지 작업 지원")]),e("dd",[e("span",{staticClass:"bold"},[t._v("Client")]),t._v(" : 포스코 인터내셔널 / Launching 2019"),e("br"),t._v(" URL : "),e("a",{attrs:{href:"https://www.steeltrade.co.kr",target:"_blank"}},[t._v("www.steeltrade.co.kr")]),e("img",{attrs:{src:"/legacy/images/포스코_e-Market_place_01_Divice_pcMo-1.jpg",alt:""}})]),e("dt",[t._v("롯데 충전형 복지카드 시스템 구축")]),e("dd",[t._v("롯데카드의 충전식 선불 복지카드 전용 홈페이지 구축")]),e("dd",[t._v("역할 : 메인,상세 등 전반적인 페이지 작업")]),e("dd",[e("span",{staticClass:"bold"},[t._v("Client")]),t._v(" : 롯데카드 / Launching 2019"),e("br"),t._v(" URL : "),e("a",{attrs:{href:"https://ccpc.lottecard.co.kr",target:"_blank"}},[t._v("https://ccpc.lottecard.co.kr")]),e("img",{attrs:{src:"/legacy/images/롯데_충전형복지카드_01_Divice_pc.jpg",alt:""}})]),e("dt",[t._v("DB손해보험 시스템 운영")]),e("dd",[t._v("DB손해보험의 전체 웹페이지 유지보수")]),e("dd",[t._v("역할 : 대고객 대표 홈페이지, 다이렉트 대표 홈페이지, 내부 시스템, 챗봇, DM등 DB의 모든 페이지 관리")]),e("dd",[e("span",{staticClass:"bold"},[t._v("Client")]),t._v(" : DB손해보험"),e("br"),t._v(" 대고객 대표 홈페이지 URL : "),e("a",{attrs:{href:"https://www.idbins.com",target:"_blank"}},[t._v("https://www.idbins.com")]),e("img",{staticStyle:{"margin-bottom":"20px"},attrs:{src:"/legacy/images/동부화재.jpg",alt:""}}),t._v(" 다이렉트 대표 홈페이지 URL : "),e("a",{attrs:{href:"https://www.directdb.co.kr",target:"_blank"}},[t._v("https://www.directdb.co.kr")]),e("img",{attrs:{src:"/legacy/images/동부화재다이렉트.jpg",alt:""}})])])])]),e("footer",{staticClass:"article-footer"})])])]),e("aside",{attrs:{id:"sidebar"}},[e("div",{staticClass:"widget-wrap"},[e("h3",{staticClass:"widget-title"},[t._v("Archives")]),e("div",{staticClass:"widget"},[e("ul",{staticClass:"archive-list"},[e("li",{staticClass:"archive-list-item"},[e("a",{staticClass:"archive-list-link",attrs:{href:""}},[t._v("February 2019")])])])])]),e("div",{staticClass:"widget-wrap"},[e("h3",{staticClass:"widget-title"},[t._v("Recent Posts")]),e("div",{staticClass:"widget"},[e("ul",[e("li",[e("a",{attrs:{href:""}},[t._v("웹퍼블리셔 채지민 이력")])])])])])])]),e("footer",{attrs:{id:"footer"}},[e("div",{staticClass:"outer"},[e("div",{staticClass:"inner",attrs:{id:"footer-info"}},[t._v(" © 2019 채지민"),e("br"),t._v(" Powered by "),e("a",{attrs:{href:"http://hexo.io/",target:"_blank"}},[t._v("Hexo")])])])])]),e("nav",{attrs:{id:"mobile-nav"}},[e("a",{staticClass:"mobile-nav-link",attrs:{href:"/"}},[t._v("Home")]),e("a",{staticClass:"mobile-nav-link",attrs:{href:"/archives"}},[t._v("Archives")])])])}],U={},H=U,O=(0,d.Z)(H,L,P,!1,null,null,null),D=O.exports,F={components:{ToolBar:h,Spinner:g,BarChart:T,LineChart:j,PortfolioView:D},data(){return{loadingStatus:!1,items:[],chartDataSet:[{label:"Acquisitions by year",data:[10,20,10,20,50,30,40]}]}},methods:{startSpinner(){this.loadingStatus=!0},endSpinner(){this.loadingStatus=!1},refreshChart(){console.log("emit received"),this.chartDataSet=[{label:"Acquisitions by",data:[20,30,20,30,50,40,10]}]}},created(){b.$on("start:spinner",this.startSpinner),b.$on("end:spinner",this.endSpinner),console.log("HELLO")},beforeDestroy(){b.$off("start:spinner",this.startSpinner),b.$off("end:spinner",this.endSpinner)}},B=F,A=(0,d.Z)(B,r,n,!1,null,null,null),M=A.exports,R=s(2631),q=function(){var t=this,e=t._self._c;return e("div",[e("list-item")],1)},J=[],N=function(){var t=this,e=t._self._c;return e("div",[e("ul",{staticClass:"news-list"},t._l(t.listItems,(function(s){return e("li",{key:s,staticClass:"post"},[e("div",{staticClass:"points"},[t._v(" "+t._s(s.points||0)+" ")]),e("div",[e("p",{staticClass:"news-title"},[s.domain?[e("a",{attrs:{href:s.url,target:"_blank"}},[t._v(" "+t._s(s.title)+" ")])]:[e("router-link",{attrs:{to:`item/${s.id}`}},[t._v(" "+t._s(s.title)+" ")])]],2),e("small",{staticClass:"link-text"},[t._v(" "+t._s(s.time_ago)+" by "),s.user?e("router-link",{attrs:{to:`/user/${s.user}`}},[t._v(t._s(s.user))]):e("a",{attrs:{href:s.url,target:"_blank"}},[t._v(t._s(s.domain))])],1)])])})),0)])},V=[],W={computed:{listItems(){return this.$store.state.list}}},K=W,G=(0,d.Z)(K,N,V,!1,null,"2ff58a56",null),Y=G.exports,z={mounted(){b.$emit("end:spinner")}},Q={components:{ListItem:Y},mixins:[z]},X=Q,tt=(0,d.Z)(X,q,J,!1,null,null,null),et=tt.exports,st=function(){var t=this,e=t._self._c;return e("div",[e("list-item")],1)},at=[],rt={components:{ListItem:Y},mixins:[z]},nt=rt,it=(0,d.Z)(nt,st,at,!1,null,null,null),ot=it.exports,lt=function(){var t=this,e=t._self._c;return e("div",[e("list-item")],1)},ct=[],dt={components:{ListItem:Y},mixins:[z]},ut=dt,ht=(0,d.Z)(ut,lt,ct,!1,null,null,null),pt=ht.exports,mt=function(){var t=this,e=t._self._c;return e("user-profile",{attrs:{info:t.userInfo}},[e("div",{attrs:{slot:"username"},slot:"username"},[t._v(t._s(t.userInfo.id))]),e("span",{attrs:{slot:"time"},slot:"time"},[t._v(t._s("Joined "+t.userInfo.created)+",")]),e("span",{attrs:{slot:"karma"},slot:"karma"},[t._v(t._s(t.userInfo.karma))])])},vt=[],ft=function(){var t=this,e=t._self._c;return e("div",{staticClass:"header-container"},[e("div",{staticClass:"user-container"},[e("div",{staticClass:"user"},[t._v("User")]),e("div",{staticClass:"user-description"},[t._t("username"),e("div",{staticClass:"time"},[t._t("time")],2),t._t("karma")],2)])])},_t=[],gt={props:{info:Object}},bt=gt,Ct=(0,d.Z)(bt,ft,_t,!1,null,"6ab33852",null),wt=Ct.exports,yt={components:{UserProfile:wt},computed:{userInfo(){return this.$store.state.user}},created(){const t=this.$route.params.id;this.$store.dispatch("FETCH_USER",t)}},St=yt,kt=(0,d.Z)(St,mt,vt,!1,null,null,null),Tt=kt.exports,$t=function(){var t=this,e=t._self._c;return e("div",[e("section",[e("user-profile",{attrs:{info:t.fetchedItem}},[e("router-link",{attrs:{slot:"username",to:`/user/${t.fetchedItem.user}`},slot:"username"},[t._v(" "+t._s(t.fetchedItem.user)+" ")]),e("template",{slot:"time"},[t._v(t._s("Posted "+t.fetchedItem.time_ago))])],2)],1),e("section",[e("h2",[t._v(t._s(t.fetchedItem.title))])]),e("section",[e("div",{domProps:{innerHTML:t._s(t.fetchedItem.content)}})])])},Et=[],xt=s(3822),Zt={components:{UserProfile:wt},computed:{...(0,xt.Se)(["fetchedItem"])},created(){const t=this.$route.params.id;this.$store.dispatch("FETCH_ITEM",t)}},It=Zt,jt=(0,d.Z)(It,$t,Et,!1,null,null,null),Lt=jt.exports,Pt=function(){var t=this,e=t._self._c;return e("div",[e("tool-bar"),e("transition",{attrs:{name:"page"}},[e("router-view")],1),e("spinner",{attrs:{loading:t.loadingStatus}}),e("bar-chart",{attrs:{propsdata:t.chartDataSet},on:{ref_chart:t.refreshChart}}),e("line-chart")],1)},Ut=[],Ht={components:{ToolBar:h,Spinner:g,BarChart:T,LineChart:j},data(){return{loadingStatus:!1,items:[],chartDataSet:[{label:"Acquisitions by year",data:[10,20,10,20,50,30,40]}]}},methods:{startSpinner(){this.loadingStatus=!0},endSpinner(){this.loadingStatus=!1},refreshChart(){console.log("emit received"),this.chartDataSet=[{label:"Acquisitions by",data:[20,30,20,30,50,40,10]}]}},created(){b.$on("start:spinner",this.startSpinner),b.$on("end:spinner",this.endSpinner),console.log("HELLO")},beforeDestroy(){b.$off("start:spinner",this.startSpinner),b.$off("end:spinner",this.endSpinner)}},Ot=Ht,Dt=(0,d.Z)(Ot,Pt,Ut,!1,null,null,null),Ft=Dt.exports,Bt={SET_USER(t,e){t.user=e},SET_ITEM(t,e){t.item=e},SET_LIST(t,e){t.list=e}},At=s(4161);const Mt={baseUrl:"https://api.hnpwa.com/v0/"};function Rt(){return At.Z.get(`${Mt.baseUrl}news/1.json`)}async function qt(){try{const t=await At.Z.get(`${Mt.baseUrl}ask/1.json`);return t}catch(t){console.log(t)}}function Jt(){return At.Z.get(`${Mt.baseUrl}jobs/1.json`)}function Nt(t){return At.Z.get(`${Mt.baseUrl}${t}/1.json`)}function Vt(t){return At.Z.get(`${Mt.baseUrl}user/${t}.json`)}function Wt(t){return At.Z.get(`${Mt.baseUrl}item/${t}.json`)}var Kt={async FETCH_NEWS(t){try{const e=await Rt();return t.commit("SET_NEWS",e.data),e}catch(e){console.log(e)}},async FETCH_JOBS(t){try{const e=await Jt();return t.commit("SET_JOBS",e.data),e}catch(e){console.log(e)}},async FETCH_ASK({commit:t}){const e=await qt();return t("SET_ASK",e.data),e},async FETCH_USER({commit:t},e){const s=await Vt(e);return t("SET_USER",s.data),s},async FETCH_ITEM({commit:t},e){const s=await Wt(e);return t("SET_ITEM",s.data),s},async FETCH_LIST({commit:t},e){const s=await Nt(e);return t("SET_LIST",s.data),s}};a.ZP.use(xt.ZP);const Gt=new xt.ZP.Store({state:{news:[],ask:[],jobs:[],user:{},item:{},list:[]},getters:{fetchedAsk(t){return t.ask},fetchedItem(t){return t.item}},mutations:Bt,actions:Kt});a.ZP.use(R.ZP);const Yt=new R.ZP({mode:"history",routes:[{path:"/"},{path:"/news",name:"news",component:et,beforeEnter:(t,e,s)=>{b.$emit("start:spinner"),Gt.dispatch("FETCH_LIST",t.name).then((()=>s())).catch((t=>{console.log(t)}))}},{path:"/ask",name:"ask",component:ot,beforeEnter:(t,e,s)=>{b.$emit("start:spinner"),Gt.dispatch("FETCH_LIST",t.name).then((()=>s())).catch((t=>{console.log(t)}))}},{path:"/jobs",name:"jobs",component:pt,beforeEnter:(t,e,s)=>{b.$emit("start:spinner"),Gt.dispatch("FETCH_LIST",t.name).then((()=>s())).catch((t=>{console.log(t)}))}},{path:"/user/:id",component:Tt},{path:"/item/:id",component:Lt},{path:"/chart",name:"chart",component:Ft,beforeEnter:(t,e,s)=>{b.$emit("start:spinner"),Gt.dispatch("FETCH_LIST",t.name).then((()=>s())).catch((t=>{console.log(t)}))}}]});var zt=s(1632),Qt={install(t){t.prototype.$_Chart=zt.ZP}};a.ZP.config.productionTip=!1,a.ZP.use(Qt,(()=>{})),new a.ZP({router:Yt,store:Gt,render:t=>t(M)}).$mount("#app")}},e={};function s(a){var r=e[a];if(void 0!==r)return r.exports;var n=e[a]={exports:{}};return t[a](n,n.exports,s),n.exports}s.m=t,function(){var t=[];s.O=function(e,a,r,n){if(!a){var i=1/0;for(d=0;d<t.length;d++){a=t[d][0],r=t[d][1],n=t[d][2];for(var o=!0,l=0;l<a.length;l++)(!1&n||i>=n)&&Object.keys(s.O).every((function(t){return s.O[t](a[l])}))?a.splice(l--,1):(o=!1,n<i&&(i=n));if(o){t.splice(d--,1);var c=r();void 0!==c&&(e=c)}}return e}n=n||0;for(var d=t.length;d>0&&t[d-1][2]>n;d--)t[d]=t[d-1];t[d]=[a,r,n]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var a in e)s.o(e,a)&&!s.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,a){var r,n,i=a[0],o=a[1],l=a[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(r in o)s.o(o,r)&&(s.m[r]=o[r]);if(l)var d=l(s)}for(e&&e(a);c<i.length;c++)n=i[c],s.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return s.O(d)},a=self["webpackChunkredwing773_github_io"]=self["webpackChunkredwing773_github_io"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=s.O(void 0,[998],(function(){return s(5411)}));a=s.O(a)})();
//# sourceMappingURL=app.fde8a411.js.map