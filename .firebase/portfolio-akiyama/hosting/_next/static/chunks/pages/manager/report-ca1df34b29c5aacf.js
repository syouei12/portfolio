(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[170],{1140:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/manager/report",function(){return n(7529)}])},5182:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.clientHookInServerComponentError=function(e){},(0,n(2648).Z)(n(7294)),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1414:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useSearchParams=function(){u.clientHookInServerComponentError("useSearchParams");let e=r.useContext(l.SearchParamsContext),t=r.useMemo(()=>e?new f(e):null,[e]);return t},t.usePathname=function(){return u.clientHookInServerComponentError("usePathname"),r.useContext(l.PathnameContext)},Object.defineProperty(t,"ServerInsertedHTMLContext",{enumerable:!0,get:function(){return i.ServerInsertedHTMLContext}}),Object.defineProperty(t,"useServerInsertedHTML",{enumerable:!0,get:function(){return i.useServerInsertedHTML}}),t.useRouter=function(){u.clientHookInServerComponentError("useRouter");let e=r.useContext(o.AppRouterContext);if(null===e)throw Error("invariant expected app router to be mounted");return e},t.useSelectedLayoutSegments=h,t.useSelectedLayoutSegment=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"children";u.clientHookInServerComponentError("useSelectedLayoutSegment");let t=h(e);return 0===t.length?null:t[0]},Object.defineProperty(t,"redirect",{enumerable:!0,get:function(){return a.redirect}}),Object.defineProperty(t,"notFound",{enumerable:!0,get:function(){return s.notFound}});var r=n(7294),o=n(4224),l=n(8463),u=n(5182),i=n(3014),a=n(8781),s=n(8147);let d=Symbol("internal for urlsearchparams readonly");function c(){return Error("ReadonlyURLSearchParams cannot be modified")}class f{[Symbol.iterator](){return this[d][Symbol.iterator]()}append(){throw c()}delete(){throw c()}set(){throw c()}sort(){throw c()}constructor(e){this[d]=e,this.entries=e.entries.bind(e),this.forEach=e.forEach.bind(e),this.get=e.get.bind(e),this.getAll=e.getAll.bind(e),this.has=e.has.bind(e),this.keys=e.keys.bind(e),this.values=e.values.bind(e),this.toString=e.toString.bind(e)}}function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"children";u.clientHookInServerComponentError("useSelectedLayoutSegments");let{tree:t}=r.useContext(o.LayoutRouterContext);return function e(t,n){let r,o=!(arguments.length>2)||void 0===arguments[2]||arguments[2],l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];if(o)r=t[1][n];else{var u;let e=t[1];r=null!=(u=e.children)?u:Object.values(e)[0]}if(!r)return l;let i=r[0],a=Array.isArray(i)?i[1]:i;return a?(l.push(a),e(r,n,!1,l)):l}(t,e)}t.ReadonlyURLSearchParams=f,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8147:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.notFound=function(){let e=Error(n);throw e.digest=n,e},t.isNotFoundError=function(e){return(null==e?void 0:e.digest)===n};let n="NEXT_NOT_FOUND";("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8781:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.redirect=function(e){let t=Error(n);throw t.digest="".concat(n,";").concat(e),t},t.isRedirectError=r,t.getURLFromRedirectError=function(e){return r(e)?e.digest.slice(n.length+1):null};let n="NEXT_REDIRECT";function r(e){return"string"==typeof(null==e?void 0:e.digest)&&e.digest.startsWith(n+";")&&e.digest.length>n.length+1}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3014:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useServerInsertedHTML=function(e){let t=r.useContext(o);t&&t(e)},t.ServerInsertedHTMLContext=void 0;var r=(0,n(1598).Z)(n(7294));let o=r.default.createContext(null);t.ServerInsertedHTMLContext=o},7529:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(5893),o=n(7294),l=n(9226),u=n(8098),i=n(3156),a=n(9584),s=n(5861),d=n(3321),c=n(9332),f=n(3571),h=n(9828);function p(){let[e,t]=o.useState(0),n=(0,c.useSearchParams)(),p=n.get("id");console.log(p);let[m,x]=(0,o.useState)({}),b=async e=>{if(!e)return;let t=(0,h.JU)(f.RZ,"reports",e),n=await (0,h.QT)(t),r=n.data()||{};x(r)},[y,v]=(0,o.useState)("");(0,o.useEffect)(()=>{v(m.place)},[m]);let[g,S]=(0,o.useState)("");(0,o.useEffect)(()=>{S(m.weather)},[m]);let[j,_]=(0,o.useState)("");(0,o.useEffect)(()=>{_(m.goal)},[m]);let[E,C]=(0,o.useState)(0);(0,o.useEffect)(()=>{C(m.condition)},[m]);let[P,w]=(0,o.useState)("");(0,o.useEffect)(()=>{w(m.text)},[m]);let[O,Z]=(0,o.useState)("");(0,o.useEffect)(()=>{Z(m.comment)},[m]),(0,o.useEffect)(()=>{b(p)},[p]);let I=async()=>{let e=(0,h.JU)(f.RZ,"reports",p);await (0,h.r7)(e,{comment:O}),alert("送信しました"),location.reload()};return(0,r.jsxs)(i.Z,{maxWidth:"md",sx:{p:4},children:[(0,r.jsx)(l.Z,{sx:{textAlign:"center",borderBottom:"solid 0.01px red ",mb:4,fontSize:30},children:(0,r.jsx)("h1",{children:"REPORT"})}),(0,r.jsxs)(l.Z,{sx:{display:"flex",width:800,mb:2},children:[(0,r.jsx)(u.Z,{id:"outlined-multiline-static",label:"場所",fullWidth:!0,value:y,sx:{mx:1},"aria-readonly":!0}),(0,r.jsx)(u.Z,{id:"outlined-multiline-static",label:"天気",fullWidth:!0,value:g,sx:{mx:1},"aria-readonly":!0})]}),(0,r.jsx)(l.Z,{sx:{display:"flex",width:800},children:(0,r.jsx)(u.Z,{id:"outlined-multiline-static",label:"今日の目標",fullWidth:!0,value:j,sx:{mx:1},"aria-readonly":!0})}),(0,r.jsxs)(l.Z,{sx:{"& > legend":{mt:2}},children:[(0,r.jsx)(s.Z,{component:"legend",children:"今日の調子"}),(0,r.jsx)(a.Z,{name:"simple-controlled",value:E,onChange:(e,n)=>{t(n),a.Z},readOnly:!0})]}),(0,r.jsx)("br",{}),(0,r.jsxs)(l.Z,{component:"form",noValidate:!0,autoComplete:"off",sx:{width:800,mb:2},children:[(0,r.jsx)(u.Z,{id:"outlined-multiline-static",label:"良かった所・悪かった所・質問",multiline:!0,rows:6,fullWidth:!0,value:P,sx:{mb:3},"aria-readonly":!0}),(0,r.jsx)(u.Z,{id:"outlined-multiline-static",label:"監督・コーチからメッセージ",multiline:!0,rows:4,fullWidth:!0,value:O,onChange:e=>{Z(e.target.value)}})]}),(0,r.jsx)(l.Z,{sx:{display:"flex",justifyContent:"center",width:800},children:(0,r.jsx)(d.Z,{variant:"contained",sx:{mx:3},href:"#outlined-buttons",onClick:I,children:"送信"})})]})}},3571:function(e,t,n){"use strict";n.d(t,{I8:function(){return s},RZ:function(){return a},wk:function(){return d}});var r=n(3977),o=n(9828),l=n(1259),u=n(7004);let i=(0,r.ZF)({apiKey:"AIzaSyDHsZm1UopCoEIIFty7yPudFXVD0mFV-lk",authDomain:"portfolio-akiyama.firebaseapp.com",projectId:"portfolio-akiyama",storageBucket:"portfolio-akiyama.appspot.com",messagingSenderId:"928009438266",appId:"1:928009438266:web:4fb54aa9ca993020a86103"}),a=(0,o.ad)(i),s=(0,l.v0)(i),d=(0,u.$C)(i)},9332:function(e,t,n){e.exports=n(1414)}},function(e){e.O(0,[16,18,756,573,334,875,774,888,179],function(){return e(e.s=1140)}),_N_E=e.O()}]);