(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[79],{6242:function(e,t,r){"use strict";r.d(t,{Z:function(){return g}});var o=r(7462),a=r(3366),i=r(7294),n=r(6010),l=r(4780),s=r(948),u=r(1657),c=r(629),d=r(1588),f=r(4867);function h(e){return(0,f.Z)("MuiCard",e)}(0,d.Z)("MuiCard",["root"]);var p=r(5893);let m=["className","raised"],x=e=>{let{classes:t}=e;return(0,l.Z)({root:["root"]},h,t)},Z=(0,s.ZP)(c.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),v=i.forwardRef(function(e,t){let r=(0,u.Z)({props:e,name:"MuiCard"}),{className:i,raised:l=!1}=r,s=(0,a.Z)(r,m),c=(0,o.Z)({},r,{raised:l}),d=x(c);return(0,p.jsx)(Z,(0,o.Z)({className:(0,n.Z)(d.root,i),elevation:l?8:void 0,ref:t,ownerState:c},s))});var g=v},9974:function(e,t,r){"use strict";r.d(t,{Z:function(){return y}});var o=r(7462),a=r(3366),i=r(7294),n=r(6010),l=r(4780),s=r(1657),u=r(948),c=r(1588),d=r(4867);function f(e){return(0,d.Z)("MuiCardActionArea",e)}let h=(0,c.Z)("MuiCardActionArea",["root","focusVisible","focusHighlight"]);var p=r(4206),m=r(5893);let x=["children","className","focusVisibleClassName"],Z=e=>{let{classes:t}=e;return(0,l.Z)({root:["root"],focusHighlight:["focusHighlight"]},f,t)},v=(0,u.ZP)(p.Z,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({display:"block",textAlign:"inherit",width:"100%",[`&:hover .${h.focusHighlight}`]:{opacity:(e.vars||e).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${h.focusVisible} .${h.focusHighlight}`]:{opacity:(e.vars||e).palette.action.focusOpacity}})),g=(0,u.ZP)("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(e,t)=>t.focusHighlight})(({theme:e})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})})),C=i.forwardRef(function(e,t){let r=(0,s.Z)({props:e,name:"MuiCardActionArea"}),{children:i,className:l,focusVisibleClassName:u}=r,c=(0,a.Z)(r,x),d=Z(r);return(0,m.jsxs)(v,(0,o.Z)({className:(0,n.Z)(d.root,l),focusVisibleClassName:(0,n.Z)(u,d.focusVisible),ref:t,ownerState:r},c,{children:[i,(0,m.jsx)(g,{className:d.focusHighlight,ownerState:r})]}))});var y=C},4267:function(e,t,r){"use strict";r.d(t,{Z:function(){return v}});var o=r(7462),a=r(3366),i=r(7294),n=r(6010),l=r(4780),s=r(948),u=r(1657),c=r(1588),d=r(4867);function f(e){return(0,d.Z)("MuiCardContent",e)}(0,c.Z)("MuiCardContent",["root"]);var h=r(5893);let p=["className","component"],m=e=>{let{classes:t}=e;return(0,l.Z)({root:["root"]},f,t)},x=(0,s.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),Z=i.forwardRef(function(e,t){let r=(0,u.Z)({props:e,name:"MuiCardContent"}),{className:i,component:l="div"}=r,s=(0,a.Z)(r,p),c=(0,o.Z)({},r,{component:l}),d=m(c);return(0,h.jsx)(x,(0,o.Z)({as:l,className:(0,n.Z)(d.root,i),ownerState:c,ref:t},s))});var v=Z},4549:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/player/report",function(){return r(9252)}])},9252:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var o=r(5893),a=r(7294),i=r(9226),n=r(8098),l=r(3156),s=r(9584),u=r(5861),c=r(3321),d=r(3571),f=r(9828),h=r(1259),p=r(6242),m=r(4267),x=r(9974),Z=r(1163);function v(){let e=(0,h.v0)(),[t,r]=(0,a.useState)("グランド"),[v,g]=(0,a.useState)(!1),[C,y]=(0,a.useState)("晴れ"),[b,j]=(0,a.useState)(!1),[w,S]=(0,a.useState)(""),[R,N]=(0,a.useState)(!1),[k,A]=(0,a.useState)(!1),[M,_]=(0,a.useState)(""),[I,E]=(0,a.useState)(0),[H,T]=(0,a.useState)(""),P=(0,Z.useRouter)(),[V,W]=(0,a.useState)(""),F=async()=>{let t=e.currentUser;console.log(t),t&&W(null==t?void 0:t.uid)};(0,a.useEffect)(()=>{F(),console.log(V)},[e]);let O=async()=>{if(""===t){alert("場所は必須入力です");return}if(""===C){alert("天気は必須入力です");return}if(""===w){alert("目標は必須入力です");return}if(""===M){alert("良かった所・悪かった所。質問は必須入力です");return}if(0===I){alert("調子は必須項目です");return}let e=(0,f.JU)((0,f.hJ)(d.RZ,"players"),V),r=await (0,f.QT)(e),o=r.data(),a=(0,f.JU)((0,f.hJ)(d.RZ,"reports")),i={name:o.name,place:t,weather:C,goal:w,condition:I,text:M,comment:"",playerId:V,managerId:o.managerId,date:new Date().getTime(),id:a.id};await (0,f.pl)(a,i),alert("送信が完了しました。"),await P.push("/player/calendar")};return(0,o.jsxs)(l.Z,{maxWidth:"md",sx:{p:4},children:[(0,o.jsx)(i.Z,{sx:{textAlign:"center",borderBottom:"solid 0.01px red ",mb:4,fontSize:30},children:(0,o.jsx)("h1",{children:"REPORT"})}),(0,o.jsxs)(i.Z,{sx:{display:"flex",width:800,mb:2},children:[(0,o.jsx)(n.Z,{id:"outlined-multiline-static",label:"場所",fullWidth:!0,type:"text",value:t,onChange:e=>{g(""===e.target.value),r(e.target.value)},error:v,helperText:v?"必須入力です。":"",sx:{mx:1}}),(0,o.jsx)(n.Z,{id:"outlined-multiline-static",label:"天気",fullWidth:!0,sx:{mx:1},value:C,onChange:e=>{j(""===e.target.value),y(e.target.value)},error:b,helperText:b?"必須入力です。":""})]}),(0,o.jsx)(i.Z,{sx:{display:"flex",width:800},children:(0,o.jsx)(n.Z,{id:"outlined-multiline-static",label:"今日の目標",fullWidth:!0,sx:{mx:1},type:"text",value:w,onChange:e=>{N(""===e.target.value),S(e.target.value)},error:R,helperText:R?"必須入力です。":""})}),(0,o.jsxs)(i.Z,{sx:{"& > legend":{mt:2}},children:[(0,o.jsx)(u.Z,{component:"legend",children:"今日の調子"}),(0,o.jsx)(s.Z,{name:"simple-controlled",value:I,onChange:(e,t)=>{E(t)}})]}),(0,o.jsx)("br",{}),(0,o.jsxs)(i.Z,{component:"form",noValidate:!0,autoComplete:"off",sx:{width:800,mb:2},children:[(0,o.jsx)(n.Z,{id:"outlined-multiline-static",label:"良かった所・悪かった所・質問",multiline:!0,rows:6,fullWidth:!0,sx:{mb:3},type:"text",value:M,onChange:e=>{A(""===e.target.value),_(e.target.value)},error:k,helperText:k?"必須入力です。":""}),(0,o.jsx)(p.Z,{sx:{maxWidth:800,color:"blue",mb:9},children:(0,o.jsx)(x.Z,{children:(0,o.jsxs)(m.Z,{children:[(0,o.jsx)(u.Z,{gutterBottom:!0,variant:"h5",component:"div",children:"監督・コーチからのメッセージ"}),(0,o.jsx)(u.Z,{variant:"body2",color:"text.secondary",children:"監督・コーチからコメントがあれば表示されます。"})]})})})]}),(0,o.jsxs)(i.Z,{sx:{display:"flex",justifyContent:"center",width:800},children:[(0,o.jsx)(c.Z,{variant:"outlined",size:"small",sx:{mx:2},children:"下書き保存"}),(0,o.jsx)(c.Z,{variant:"contained",sx:{mx:2},href:"#outlined-buttons",onClick:e=>O(),children:"送信"})]})]})}},3571:function(e,t,r){"use strict";r.d(t,{I8:function(){return u},RZ:function(){return s},wk:function(){return c}});var o=r(3977),a=r(9828),i=r(1259),n=r(7004);let l=(0,o.ZF)({apiKey:"AIzaSyDHsZm1UopCoEIIFty7yPudFXVD0mFV-lk",authDomain:"portfolio-akiyama.firebaseapp.com",projectId:"portfolio-akiyama",storageBucket:"portfolio-akiyama.appspot.com",messagingSenderId:"928009438266",appId:"1:928009438266:web:4fb54aa9ca993020a86103"}),s=(0,a.ad)(l),u=(0,i.v0)(l),c=(0,n.$C)(l)},1163:function(e,t,r){e.exports=r(6885)}},function(e){e.O(0,[16,18,756,573,334,875,774,888,179],function(){return e(e.s=4549)}),_N_E=e.O()}]);