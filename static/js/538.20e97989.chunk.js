"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[538],{3025:function(n,e,t){t.d(e,{QA:function(){return u},XT:function(){return s},ci:function(){return p},dx:function(){return c},qP:function(){return d}});var r=t(5861),i=t(4687),o=t.n(i),a=t(1243);a.Z.defaults.params={api_key:"2e42ce2c27880cb4cf3402f1ec0650d2"};var s=function(){var n=(0,r.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("https://api.themoviedb.org/3/trending/movie/day");case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),c=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("https://api.themoviedb.org/3/movie/".concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits"));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews"));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&include_adult=false&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},3538:function(n,e,t){t.r(e),t.d(e,{default:function(){return A}});var r,i,o,a,s,c,u,p,d,l=t(9439),f=t(7689),h=t(2791),v=t(3025),m=t(168),x=t(5706),g=t(1087),Z=x.Z.div(r||(r=(0,m.Z)(["\ndisplay: flex;\n"]))),j=x.Z.div(i||(i=(0,m.Z)(["\ndisplay: flex;\nflex-direction: column;\nmargin-left: 25px;\n"]))),w=x.Z.li(o||(o=(0,m.Z)(["\nlist-style: none;\n"]))),b=(0,x.Z)(g.rU)(a||(a=(0,m.Z)(["\n  display: block;\n  margin-bottom: 10px;\n  text-decoration: none;\n  color: orangered;\n  font-weight: 700;\n  :hover {\n    text-transform: uppercase;\n    text-decoration: dashed;\n  }\n"]))),y=x.Z.p(s||(s=(0,m.Z)(["\nmargin: 0;\nmargin-bottom: 10px;\nopacity: 0.95;\n"]))),k=x.Z.h2(c||(c=(0,m.Z)(["\nmargin-top: 10px;\nmargin-bottom: 10px;\n"]))),_=x.Z.h4(u||(u=(0,m.Z)(["\nmargin-top: 10px;\nmargin-bottom: 10px; \n"]))),S=(x.Z.div(p||(p=(0,m.Z)(["\nwidth: 960px;\nborder-bottom: 2px solid tomato;\nmargin-bottom: 10px;\n"]))),t(184)),U=(0,x.Z)(g.rU)(d||(d=(0,m.Z)(["\nfont-size: 16px;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 0 0 8px 0;\n  color: black;\n  font-weight: 500;\n  text-transform: uppercase;\n  margin-bottom: 10px;\n\n  :hover {\n    color: orangered;\n  }\n"]))),C=function(n){var e=n.to,t=n.children;return(0,S.jsxs)(U,{to:e,children:[(0,S.jsx)("p",{}),t]})},A=function(){var n,e,t,r,i,o,a=(0,f.UO)().id,s=(0,f.TH)(),c=null!==(n=null===(e=s.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies",u=(0,h.useState)(null),p=(0,l.Z)(u,2),d=p[0],m=p[1];if((0,h.useEffect)((function(){(0,v.dx)(a).then((function(n){m(n)})).catch((function(n){console.log(n.message)}))}),[a]),!d)return(0,S.jsx)("div",{children:(0,S.jsx)("h1",{children:"Something went wrong..."})});var x=d.genres.map((function(n){return n.name+" "})).join("");return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(C,{to:c,children:"GO BACK"}),(0,S.jsxs)(Z,{children:[(0,S.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/".concat(d.poster_path),alt:""}),(0,S.jsxs)(j,{children:[(0,S.jsx)(k,{children:d.title}),(0,S.jsxs)(y,{children:["User Score: ",Math.round(d.popularity)," points"]}),(0,S.jsx)(_,{children:"Overview"}),(0,S.jsx)(y,{children:d.overview}),""===d.overview&&(0,S.jsx)("p",{children:"We don`t have any overview for this movie."}),(0,S.jsx)(_,{children:"Genres"}),(0,S.jsx)(y,{children:x})]})]}),(0,S.jsx)("h4",{children:"Additional information"}),(0,S.jsxs)("ul",{children:[(0,S.jsx)(w,{children:(0,S.jsx)(b,{to:"cast",state:{from:null!==(t=null===(r=s.state)||void 0===r?void 0:r.from)&&void 0!==t?t:"/movies"},children:"Cast"})}),(0,S.jsx)(w,{children:(0,S.jsx)(b,{to:"reviews",state:{from:null!==(i=null===(o=s.state)||void 0===o?void 0:o.from)&&void 0!==i?i:"/movies"},children:"Reviews"})})]}),(0,S.jsx)(h.Suspense,{fallback:(0,S.jsx)("div",{children:"Loading..."}),children:(0,S.jsx)(f.j3,{})})]})}}}]);
//# sourceMappingURL=538.20e97989.chunk.js.map