(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[740],{3025:function(e,n,t){"use strict";t.d(n,{QA:function(){return c},XT:function(){return o},ci:function(){return s},dx:function(){return u},qP:function(){return h}});var r=t(5861),A=t(4687),a=t.n(A),i=t(1243);i.Z.defaults.params={api_key:"2e42ce2c27880cb4cf3402f1ec0650d2"};var o=function(){var e=(0,r.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/trending/movie/day");case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(n));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),c=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/credits"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/reviews"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(n,"&include_adult=false&language=en-US&page=1"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},3740:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return F}});var r,A,a,i,o,u=t(9439),c=t(7689),s=t(2791),h=t(3025),f=t(168),g=t(5706),d=g.Z.div(r||(r=(0,f.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 200px);\n  gap: 16px;\n"]))),p=g.Z.li(A||(A=(0,f.Z)(["\ndisplay: block;\ntext-align: center;\nbackground-color: white;\nopacity: 0.95;\n"]))),v=g.Z.img(a||(a=(0,f.Z)(["\nmargin-left: auto;\nmargin-right: auto;\n"]))),m=g.Z.h5(i||(i=(0,f.Z)(["\nmargin-top: 10px;\n  margin-bottom: 0;\n"]))),D=g.Z.p(o||(o=(0,f.Z)(["\n  margin-top: 0;\n  font-size: 16px;\n"]))),w=t(2007),B=t.n(w),l=t(184),b=function(){var e=(0,c.UO)().id,n=(0,s.useState)([]),t=(0,u.Z)(n,2),r=t[0],A=t[1];return(0,s.useEffect)((function(){(0,h.QA)(e).then((function(e){A(e.data.cast)})).catch((function(e){console.log(e.message)}))}),[e]),0===r.length?(0,l.jsx)("div",{children:(0,l.jsx)("p",{children:"We don`t have any cast for this movie."})}):(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(d,{children:r.map((function(e){var n=e.id,t=e.name,r=e.character,A=e.profile_path;return(0,l.jsxs)(p,{children:[(0,l.jsx)(v,{src:A?"https://image.tmdb.org/t/p/w300/".concat(A):"data:image/png;base64,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",alt:"Actor photo",width:"120px",height:"170px"}),(0,l.jsx)(m,{children:t}),(0,l.jsxs)(D,{children:["Character: ",r]})]},n)}))})})},F=b;b.protoType={id:B().number.isRequired,castInfo:B().array.isRequired,loadCastFilm:B().func.isRequired}.isRequired},888:function(e,n,t){"use strict";var r=t(9047);function A(){}function a(){}a.resetWarningCache=A,e.exports=function(){function e(e,n,t,A,a,i){if(i!==r){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:a,resetWarningCache:A};return t.PropTypes=t,t}},2007:function(e,n,t){e.exports=t(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=740.d6935eb0.chunk.js.map