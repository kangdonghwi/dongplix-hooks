(this["webpackJsonpdongplix-hooks"]=this["webpackJsonpdongplix-hooks"]||[]).push([[0],{37:function(e,t,n){e.exports=n.p+"static/media/noPosterSmall.87a0eb6a.png"},47:function(e,t,n){e.exports=n.p+"static/media/header.eac42b8d.jpg"},53:function(e,t,n){e.exports=n(98)},96:function(e,t,n){e.exports=n.p+"static/media/NoVideo.13526e1e.jpg"},97:function(e,t,n){e.exports=n.p+"static/media/Loading.6bc11c2e.gif"},98:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(15),o=n.n(i),c=n(12),u=n(38),l=n(8),s=n(4),f=n(7),d=n.n(f),p="07b6a7d0f89d83629f77364a2c6521ef",m="https://api.themoviedb.org/3";var g=Object(c.c)({topRated:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_TOP_RATED":return Object(s.a)({},e,{movies:t.data});default:return e}},MoviePopular:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_MOVIE_POPULAR":return Object(s.a)({},e,{movies:t.data});default:return e}},TvPopular:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_TV_POPULAR":return Object(s.a)({},e,{movies:t.data});default:return e}},NowPlaying:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_NOW_PLAYING":return Object(s.a)({},e,{movies:t.data});default:return e}},Upcoming:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_UPCOMING":return Object(s.a)({},e,{movies:t.data});default:return e}},AiringToday:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_AIRING_TODAY":return Object(s.a)({},e,{movies:t.data});default:return e}},Detail:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_DETAIL":return Object(s.a)({},e,{movies:t.data});default:return e}}}),v=n(16),h=n(13),b=n(2),E=n(1),x=n(10),O=n(42),j=n.n(O);function y(){var e=Object(b.a)(["\n  margin-bottom: 50px;\n  margin-top: 10px;\n"]);return y=function(){return e},e}function _(){var e=Object(b.a)(["\n  font-size: 20px;\n  font-weight: 600;\n  margin-left: 10px;\n"]);return _=function(){return e},e}function w(){var e=Object(b.a)(["\n  :not(:last-child) {\n    margin-bottom: 50px;\n  }\n"]);return w=function(){return e},e}var k=E.default.div(w()),T={dots:!1,infinite:!0,slidesToShow:8,speed:500,slidesToScroll:3},U=E.default.span(_()),S=E.default.div(y()),P=function(e){var t=e.title,n=e.children;return r.a.createElement(k,null,r.a.createElement(U,null,t),r.a.createElement(S,null,r.a.createElement(j.a,T,n)))};function F(){var e=Object(b.a)(["\n  color: rgba(255, 255, 255, 0.5);\n"]);return F=function(){return e},e}function M(){var e=Object(b.a)(["\n  margin-left: 10px;\n  display: block;\n"]);return M=function(){return e},e}function C(){var e=Object(b.a)(["\n  margin: 5px;\n  position: relative;\n  &:hover {\n    "," {\n      opacity: 0.3;\n    }\n    "," {\n      opacity: 1;\n    }\n  }\n"]);return C=function(){return e},e}function I(){var e=Object(b.a)(["\n  bottom: 5px;\n  right: 5px;\n  position: absolute;\n  opacity: 0;\n  transition: opacity 0.1s linear;\n"]);return I=function(){return e},e}function N(){var e=Object(b.a)(["\n  background-image: url(",");\n  height: 300px;\n  background-size: cover;\n  border-radius: 4px;\n  background-position: center center;\n  transition: opacity 0.1s ease-in-out;\n  margin-left: 5px;\n"]);return N=function(){return e},e}function z(){var e=Object(b.a)(["\n  font-size: 12px;\n"]);return z=function(){return e},e}var A=E.default.div(z()),R=E.default.div(N(),(function(e){return e.bgUrl})),D=E.default.span(I()),H=E.default.div(C(),R,D),L=E.default.span(M()),G=E.default.span(F()),V=function(e){var t=e.id,a=e.imageUrl,i=e.title,o=e.rating,c=e.year,u=e.isMovie,l=void 0!==u&&u;return r.a.createElement(v.b,{to:l?"/movie/".concat(t):"/show/".concat(t)},r.a.createElement(A,null,r.a.createElement(H,null,r.a.createElement(R,{bgUrl:a?"https://image.tmdb.org/t/p/w300".concat(a):n(37)}),r.a.createElement(D,null,r.a.createElement("span",{role:"img","aria-label":"rating"},"\u2b50\ufe0f")," ",o,"/10")),r.a.createElement(L,null,i),r.a.createElement(G,null,c)))},Y=n(47),W=n.n(Y);function B(){var e=Object(b.a)(["\n    font-size: 16px;\n    font-weight: 600;\n    margin-top: 2%;\n    @include responsive(phone) {\n        width: 200px;\n        height: 50px;\n        display: block;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space:nowrap;\n    }\n"]);return B=function(){return e},e}function J(){var e=Object(b.a)(["\n    font-size: 2em;\n    font-weight: 600;\n"]);return J=function(){return e},e}function X(){var e=Object(b.a)(["\n    font-size: 2em;\n    font-weight: 600;\n    position: absolute;\n    bottom: 10%;\n    left: 5%;\n    width: 60%;\n    height: 50%;\n    color: white;\n    @include responsive(tab_port) {\n        width: 80%;\n    }\n"]);return X=function(){return e},e}function q(){var e=Object(b.a)(["\n  width: 100%;\n  margin-bottom : 10px;\n"]);return q=function(){return e},e}var K=E.default.img(q()),Q=E.default.div(X()),Z=E.default.h1(J()),$=E.default.p(B()),ee=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(K,{src:W.a,alt:"stranger"}),r.a.createElement(Q,null,r.a.createElement(Z,null,"STRANGER THINGS"),r.a.createElement($,null,"When a young boy vanishes, ",r.a.createElement("br",null),"a small town uncovers a mystery involving secret experiments,",r.a.createElement("br",null)," terrifying supernatural forces,",r.a.createElement("br",null)," and one strange little girl.")))};function te(){var e=Object(b.a)(["\n  padding: 20px;\n"]);return te=function(){return e},e}var ne=E.default.div(te()),ae=function(){var e=Object(l.b)();Object(a.useEffect)((function(){e((function(e){return d.a.get("".concat(m,"/movie/now_playing?api_key=").concat(p,"&language=en-US")).then((function(t){e({type:"FETCH_NOW_PLAYING",data:t.data})})).catch((function(e){throw e}))})),e((function(e){return d.a.get("".concat(m,"/movie/popular?api_key=").concat(p,"&language=en-US")).then((function(t){e({type:"FETCH_MOVIE_POPULAR",data:t.data})})).catch((function(e){throw e}))})),e((function(e){return d.a.get("".concat(m,"/movie/upcoming?api_key=").concat(p,"&language=en-US")).then((function(t){e({type:"FETCH_UPCOMING",data:t.data})})).catch((function(e){throw e}))}))}),[]);var t=Object(l.c)((function(e){return e.Upcoming.movies}),[])||[],n=Object(l.c)((function(e){return e.MoviePopular.movies}),[])||[],i=Object(l.c)((function(e){return e.NowPlaying.movies}),[])||[];return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,null,r.a.createElement("title",null,"Movies | Dongflix")),r.a.createElement(ne,null,r.a.createElement(ee,null),r.a.createElement(P,{title:"Upcoming"},t.results&&t.results.map((function(e){return r.a.createElement(V,{key:e.id,props:e,id:e.id,imageUrl:e.poster_path,title:e.title,rating:e.vote_average,isMovie:!0})}))),r.a.createElement(P,{title:"Popular"},n.results&&n.results.map((function(e){return r.a.createElement(V,{key:e.id,props:e,id:e.id,imageUrl:e.poster_path,title:e.title,rating:e.vote_average,isMovie:!0})}))),r.a.createElement(P,{title:"NowPlaying"},i.results&&i.results.map((function(e){return r.a.createElement(V,{key:e.id,props:e,id:e.id,imageUrl:e.poster_path,title:e.title,rating:e.vote_average,isMovie:!0})})))))};function re(){var e=Object(b.a)(["\n  padding: 20px;\n"]);return re=function(){return e},e}var ie=E.default.div(re()),oe=function(){var e=Object(l.b)();Object(a.useEffect)((function(){e((function(e){return d.a.get("".concat(m,"/tv/airing_today?api_key=").concat(p,"&language=en-US")).then((function(t){e({type:"FETCH_AIRING_TODAY",data:t.data})})).catch((function(e){throw e}))})),e((function(e){return d.a.get("".concat(m,"/tv/popular?api_key=").concat(p,"&language=en-US")).then((function(t){e({type:"FETCH_TV_POPULAR",data:t.data})})).catch((function(e){throw e}))})),e((function(e){return d.a.get("".concat(m,"/tv/top_rated?api_key=").concat(p,"&language=en-US")).then((function(t){e({type:"FETCH_TOP_RATED",data:t.data})})).catch((function(e){throw e}))}))}),[]);var t=Object(l.c)((function(e){return e.AiringToday.movies}),[])||[],n=Object(l.c)((function(e){return e.TvPopular.movies}),[])||[],i=Object(l.c)((function(e){return e.topRated.movies}),[])||[];return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,null,r.a.createElement("title",null,"Movies | Dongflix")),r.a.createElement(ie,null,r.a.createElement(ee,null),r.a.createElement(P,{title:"AiringToday"},t.results&&t.results.map((function(e){return r.a.createElement(V,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.name,rating:e.vote_average})}))),r.a.createElement(P,{title:"TvPopular"},n.results&&n.results.map((function(e){return r.a.createElement(V,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.name,rating:e.vote_average})}))),r.a.createElement(P,{title:"TopRated"},i.results&&i.results.map((function(e){return r.a.createElement(V,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.name,rating:e.vote_average})})))))},ce=n(17),ue=n.n(ce),le=n(22),se=n(28);function fe(){var e=Object(b.a)(["\n  all: unset;\n  font-size: 28px;\n  width: 100%;\n"]);return fe=function(){return e},e}function de(){var e=Object(b.a)(["\n  margin-bottom: 50px;\n  width: 100%;\n"]);return de=function(){return e},e}function pe(){var e=Object(b.a)(["\n  padding: 20px;\n"]);return pe=function(){return e},e}var me=E.default.div(pe()),ge=E.default.form(de()),ve=E.default.input(fe()),he=function(){var e=Object(a.useState)(""),t=Object(se.a)(e,2),n=t[0],i=t[1],o=Object(a.useState)([]),c=Object(se.a)(o,2),u=c[0],l=c[1],s="https://api.themoviedb.org/3/search/movie?api_key=".concat("07b6a7d0f89d83629f77364a2c6521ef","&query=").concat(n,"&language=en-US"),f=[],p=function(){var e=Object(le.a)(ue.a.mark((function e(){var t;return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get(s);case 2:t=e.sent,f=t.data.results||[],l(f);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(me,null,r.a.createElement(x.a,null,r.a.createElement("title",null,"Search | Dongfilx")),r.a.createElement(ge,{onSubmit:function(e){e.preventDefault(),""!==n&&p(l())}},r.a.createElement(ve,{placeholder:"Search Moives or TV Shows...",value:n,onChange:function(e){i(e.target.value)}})),r.a.createElement(r.a.Fragment,null,r.a.createElement(P,{title:"Movie Results"},u&&u.map((function(e){return r.a.createElement(V,{key:e.id,id:e.id,title:e.title,imageUrl:e.poster_path,rating:e.vote_average,isMovie:!0})})))))},be=n(48),Ee=n(49),xe=n(51),Oe=n(52);function je(){var e=Object(b.a)(["\n  position: absolute;\n  width: 600px;\n  height: 400px;\n"]);return je=function(){return e},e}function ye(){var e=Object(b.a)(["\n  width: 600px;\n  height: 400px;\n  overflow-x: hidden;\n  background-image: url(",");\n  background-size: cover;\n  background-position: center center;\n"]);return ye=function(){return e},e}function _e(){var e=Object(b.a)(["\n  width: 600px;\n  height: 400px;\n  background-image: url(",");\n  background-size: cover;\n  background-position: center center;\n  padding: 10px;\n"]);return _e=function(){return e},e}function we(){var e=Object(b.a)(["\n  margin-top: 10px;\n  width: 100%;\n  height: auto;\n"]);return we=function(){return e},e}var ke=E.default.div(we()),Te=E.default.div(_e(),n(96)),Ue=E.default.div(ye(),n(97)),Se=E.default.iframe(je()),Pe=function(e){var t=e.result.videos.results;return r.a.createElement(ke,null,0===t.length?r.a.createElement(Te,null,"No videos find"):r.a.createElement(r.a.Fragment,null,r.a.createElement(Ue,null,t.map((function(e){return r.a.createElement(Se,{key:e.key,src:"https://www.youtube.com/embed/".concat(e.key)})})))))};function Fe(){var e=Object(b.a)(["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  font-size: 23px;\n  margin-top: 20px;\n"]);return Fe=function(){return e},e}var Me=E.default.div(Fe()),Ce=function(){return r.a.createElement(Me,null,r.a.createElement("span",{role:"img","aria-label":"Loading"},"\u23f0"))};function Ie(){var e=Object(b.a)(["\n  color: ",";\n"]);return Ie=function(){return e},e}function Ne(){var e=Object(b.a)(["\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n"]);return Ne=function(){return e},e}var ze=E.default.div(Ne()),Ae=E.default.span(Ie(),(function(e){return e.color})),Re=function(e){var t=e.text,n=e.color;return r.a.createElement(ze,null,r.a.createElement(Ae,{color:n},t))};function De(){var e=Object(b.a)(["\n  font-size: 17px;\n  opacity: 0.8;\n  line-height: 1.5;\n  width: 50%;\n"]);return De=function(){return e},e}function He(){var e=Object(b.a)(["\n  margin: 0 10px;\n"]);return He=function(){return e},e}function Le(){var e=Object(b.a)([""]);return Le=function(){return e},e}function Ge(){var e=Object(b.a)(["\n  margin: 20px 0;\n"]);return Ge=function(){return e},e}function Ve(){var e=Object(b.a)(["\n  font-size: 32px;\n  margin-bottom: 10px;\n"]);return Ve=function(){return e},e}function Ye(){var e=Object(b.a)(["\n  width: 70%;\n  margin-left: 10px;\n"]);return Ye=function(){return e},e}function We(){var e=Object(b.a)(["\n  width: 30%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  height: 100%;\n  border-radius: 5px;\n"]);return We=function(){return e},e}function Be(){var e=Object(b.a)(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  position: relative;\n"]);return Be=function(){return e},e}function Je(){var e=Object(b.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  filter: blur(3px);\n  opacity: 0.5;\n  z-index: 0;\n"]);return Je=function(){return e},e}function Xe(){var e=Object(b.a)(["\n  height: calc(100vh - 50px);\n  width: 100%;\n  position: relative;\n  padding: 50px;\n"]);return Xe=function(){return e},e}var qe=E.default.div(Xe()),Ke=E.default.div(Je(),(function(e){return e.bgImage})),Qe=E.default.div(Be()),Ze=E.default.div(We(),(function(e){return e.bgImage})),$e=E.default.div(Ye()),et=E.default.h3(Ve()),tt=E.default.div(Ge()),nt=E.default.span(Le()),at=E.default.span(He()),rt=E.default.p(De()),it=function(e){var t=e.result,a=e.loading,i=e.error;return a?r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,null,r.a.createElement("title",null,"Loading | Dongflix")),r.a.createElement(Ce,null)):i?r.a.createElement(Re,null):r.a.createElement(qe,null,r.a.createElement(x.a,null,r.a.createElement("title",null,t.original_title?t.original_title:t.original_name," | Dongflix")),r.a.createElement(Ke,{bgImage:"https://image.tmdb.org/t/p/original".concat(t.backdrop_path)}),r.a.createElement(Qe,null,r.a.createElement(Ze,{bgImage:t.poster_path?"https://image.tmdb.org/t/p/original".concat(t.poster_path):n(37)}),r.a.createElement($e,null,r.a.createElement(et,null,t.original_title?t.original_title:t.original_name),r.a.createElement(tt,null,r.a.createElement(nt,null,t.release_date?t.release_date:t.first_air_date),r.a.createElement(at,null,"\u2022"),r.a.createElement(nt,null,t.runtime?t.runtime:t.episode_run_time," min"),r.a.createElement(at,null,"\u2022"),r.a.createElement(nt,null,t.genres&&t.genres.map((function(e,n){return n===t.genres.length-1?e.name:"".concat(e.name," / ")})))),r.a.createElement(rt,null,t.overview),r.a.createElement(Pe,{result:t}))))},ot=d.a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"07b6a7d0f89d83629f77364a2c6521ef",language:"en"}}),ct=function(e){return ot.get("movie/".concat(e),{params:{append_to_response:"videos"}})},ut=function(e){return ot.get("tv/".concat(e),{params:{append_to_response:"videos"}})},lt=function(e){Object(Oe.a)(n,e);var t=Object(xe.a)(n);function n(e){var a;Object(be.a)(this,n),(a=t.call(this,e)).state={};var r=e.location.pathname;return a.state={result:null,error:null,loading:!0,isMovie:r.includes("/movie/")},a}return Object(Ee.a)(n,[{key:"componentDidMount",value:function(){var e=Object(le.a)(ue.a.mark((function e(){var t,n,a,r,i,o,c,u;return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.match.params.id,a=t.history.push,r=this.state.isMovie,i=parseInt(n),!isNaN(i)){e.next=5;break}return e.abrupt("return",a("/"));case 5:if(o=null,e.prev=6,!r){e.next=14;break}return e.next=10,ct(i);case 10:c=e.sent,o=c.data,e.next=18;break;case 14:return e.next=16,ut(i);case 16:u=e.sent,o=u.data;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(6),this.setState({error:"Can't find anything."});case 23:return e.prev=23,this.setState({loading:!1,result:o}),e.finish(23);case 26:case"end":return e.stop()}}),e,this,[[6,20,23,26]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.result,n=e.error,a=e.loading;return console.log(this.state),r.a.createElement(it,{result:t,error:n,loading:a})}}]),n}(r.a.Component);function st(){var e=Object(b.a)(["\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return st=function(){return e},e}function ft(){var e=Object(b.a)(["\n  width: 80px;\n  height: 50px;\n  font-size: 15px;\n  font-weight: 600;\n  text-align: center;\n  border-bottom: 5px solid ",";\n  color: ",";\n  transition: border-bottom 0.5s ease-in-out;\n"]);return ft=function(){return e},e}function dt(){var e=Object(b.a)(["\n  display: flex;\n"]);return dt=function(){return e},e}function pt(){var e=Object(b.a)(["\n  color: white;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  background-color: rgba(20, 20, 20, 0.8);\n  z-index: 10;\n  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);\n"]);return pt=function(){return e},e}var mt=E.default.header(pt()),gt=E.default.ul(dt()),vt=E.default.li(ft(),(function(e){return e.current?"#3498db":"transparent"}),(function(e){return e.current?"orange":"white"})),ht=Object(E.default)(v.b)(st()),bt=Object(h.g)((function(e){var t=e.location.pathname;return r.a.createElement(mt,null,r.a.createElement(gt,null,r.a.createElement(vt,{current:"/"===t},r.a.createElement(ht,{to:"/"},"Moives")),r.a.createElement(vt,{current:"/tv"===t},r.a.createElement(ht,{to:"/tv"},"TV")),r.a.createElement(vt,{current:"/search"===t},r.a.createElement(ht,{to:"/search"},"Search"))))})),Et=function(){return r.a.createElement(v.a,null,r.a.createElement(bt,null),r.a.createElement(h.d,null,r.a.createElement(h.b,{path:"/",exact:!0,component:ae}),r.a.createElement(h.b,{path:"/tv",exact:!0,component:oe}),r.a.createElement(h.b,{path:"/search",component:he}),r.a.createElement(h.b,{path:"/movie/:id",component:lt}),r.a.createElement(h.b,{path:"/show/:id",component:lt}),r.a.createElement(h.a,{from:"*",to:"/"})))},xt=n(50),Ot=n.n(xt);function jt(){var e=Object(b.a)(["\n    ",";\n    a{\n        text-decoration:none;\n        color:inherit;\n    }\n    *{\n        box-sizing:border-box;\n\n    }\n    body{\n        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        font-size:12px;\n        background-color:rgba(20, 20, 20, 1);\n        color:white;\n        padding-top:50px;\n    }\n"]);return jt=function(){return e},e}var yt=Object(E.createGlobalStyle)(jt(),Ot.a);var _t=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Et,null),r.a.createElement(yt,null))},wt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.d,kt=Object(c.e)(g,wt(Object(c.a)(u.a)));o.a.render(r.a.createElement(l.a,{store:kt},r.a.createElement(_t,null)),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.dbbd9ca0.chunk.js.map