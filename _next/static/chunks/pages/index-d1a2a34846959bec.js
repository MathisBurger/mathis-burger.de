(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(4395)}])},4356:function(e,n,t){"use strict";var o=t(5893);t(7294);var r=t(5110),i=t.n(r),a=t(1664),c=t.n(a);n.Z=()=>(0,o.jsxs)("footer",{className:i().footerContainer,children:[(0,o.jsx)("p",{children:"\xa92024 Mathis Burger"}),(0,o.jsx)("div",{className:i().extraLinks,children:(0,o.jsx)(c(),{href:"/impressum",style:{textDecoration:"none"},children:(0,o.jsx)("p",{children:"Impressum"})})})]})},9603:function(e,n,t){"use strict";var o=t(5893),r=t(7294),i=t(8888),a=t.n(i),c=t(2814),s=t(1436),l=t(1163),d=t(9259);n.Z=e=>{let{active:n}=e,t=(0,l.useRouter)(),[i,u]=(0,r.useState)({display:"block"});(0,r.useEffect)(()=>{let e=localStorage.getItem("header-dropdown");null!==e&&""!==e&&u(JSON.parse(e))},[]);let m=(e,n)=>{document.body.clientWidth<680&&("block"===n.display?(e({display:"none"}),localStorage.setItem("header-dropdown",JSON.stringify({display:"none"}))):(e({display:"block"}),localStorage.setItem("header-dropdown",JSON.stringify({display:"block"}))))};return(0,o.jsxs)("div",{className:a().container,children:[(0,o.jsx)("div",{className:a().imgBox,children:(0,o.jsx)(d.Z,{src:"/me4.jpeg",width:60,height:60})}),(0,o.jsx)(c.G,{className:a().dropdown,onClick:()=>m(u,i),icon:s.xiG}),(0,o.jsx)("div",{className:"".concat(a().linkBox," ").concat("block"===i.display?a().openDropdown:""),children:[{name:"home",label:"Home",link:"/"},{name:"projects",label:"Projects",link:"/projects"},{name:"cv",label:"CV",link:"/cv"},{name:"socials",label:"Socials",link:"/socials"},{name:"blog",label:"Blog",link:"/blog"}].map(e=>(0,o.jsx)("div",{className:"".concat(a().navBox," ").concat(n===e.name?a().active:""),style:i,onClick:()=>{m(u,i),t.push(e.link)},children:e.label},e.link))})]})}},9259:function(e,n,t){"use strict";var o=t(5893),r=t(5675),i=t.n(r);n.Z=e=>{let{src:n,className:t,width:r,height:a}=e;return(0,o.jsx)(i(),{src:n,alt:"",width:null!=r?r:0,height:null!=r?r:0,className:t})}},5812:function(e,n,t){"use strict";var o=t(5893),r=t(9259);n.Z=()=>(0,o.jsx)(r.Z,{src:"/tail-spin.svg"})},6484:function(e,n,t){"use strict";var o=t(5893);t(7294);var r=t(7356),i=t.n(r);n.Z=e=>{let{children:n}=e;return(0,o.jsx)("div",{className:i().wrapper,children:n})}},4395:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return b}});var o=t(5893),r=t(9603),i=t(7266),a=t.n(i),c=t(7294),s=t(5812),l=t(6484),d=t(4356);let u=e=>encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),m=e=>encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent),p=decodeURIComponent,_=e=>('"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent));function x(e,n,t){let o;let r=/(?:^|; )([^=]*)=([^;]*)/g,i={};for(;null!=(o=r.exec(document.cookie));)try{let r=t(o[1]);if(i[r]=n(o[2],r),e===r)break}catch(e){}return null!=e?i[e]:i}let f=Object.freeze({decodeName:p,decodeValue:_,encodeName:u,encodeValue:m}),h=Object.freeze({path:"/"});function j(e,n,t=h,{encodeValue:o=m,encodeName:r=u}={}){var i;return document.cookie=`${r(e)}=${o(n,e)}${"number"==typeof(i=Object.assign({},i=t)).expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),null!=i.expires&&(i.expires=i.expires.toUTCString()),Object.entries(i).filter(([e,n])=>null!=n&&!1!==n).map(([e,n])=>!0===n?`; ${e}`:`; ${e}=${n.split(";")[0]}`).join("")}`}function g(e,{decodeValue:n=_,decodeName:t=p}={}){return x(e,n,t)}!function e(n,t){return Object.create({set:function(e,n,t){return j(e,n,Object.assign({},this.attributes,t),{encodeValue:this.converter.write})},get:function(e){return 0==arguments.length?function({decodeValue:e=_,decodeName:n=p}={}){return x(void 0,e,n)}(this.converter.read):null!=e?g(e,this.converter.read):void 0},remove:function(e,n){!function(e,n=h){j(e,"",Object.assign({},n,{expires:-1}))}(e,Object.assign({},this.attributes,n))},withAttributes:function(n){return e(this.converter,Object.assign({},this.attributes,n))},withConverter:function(n){return e(Object.assign({},this.converter,n),this.attributes)}},{attributes:{value:Object.freeze(t)},converter:{value:Object.freeze(n)}})}({read:f.decodeValue,write:f.encodeValue},h);var v=t(9259),b=()=>{let[e,n]=(0,c.useState)(""),[t,i]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{i("true"===g("animate-index"))},[]),(0,c.useEffect)(()=>{fetch("/mainText.txt").then(e=>e.text()).then(e=>n(e))},[]),(0,c.useEffect)(()=>()=>{j("animate-index",!0,{expires:new Date(new Date().getTime()+1e4)})},[]),(0,o.jsxs)(l.Z,{children:[(0,o.jsx)(r.Z,{active:"home"}),(0,o.jsx)("div",{className:a().bg}),(0,o.jsxs)("div",{className:"".concat(a().container," ").concat(t?a().noAnimation:""),children:[(0,o.jsxs)("div",{className:a().imageRow,children:[(0,o.jsx)(v.Z,{src:"/me.jpg"}),(0,o.jsx)(v.Z,{src:"/me2.JPG"}),(0,o.jsx)(v.Z,{src:"/me3.jpg"}),(0,o.jsx)(v.Z,{src:"/me4.jpeg"}),(0,o.jsx)(v.Z,{src:"/me5.jpg"}),(0,o.jsx)(v.Z,{src:"/me6.JPG"}),(0,o.jsx)(v.Z,{src:"/me7.jpg"})]}),(0,o.jsx)("h1",{children:"Mathis Burger"}),(0,o.jsx)("p",{children:""===e?(0,o.jsx)(s.Z,{}):e})]}),(0,o.jsx)(d.Z,{})]})}},5110:function(e){e.exports={footerContainer:"Footer_footerContainer__GApQA",extraLinks:"Footer_extraLinks__aYkL9"}},8888:function(e){e.exports={container:"Header_container__dGdkP",imgBox:"Header_imgBox__TROub",navBox:"Header_navBox__lnN3f",active:"Header_active__jUUlL",dropdown:"Header_dropdown__ATh9A",linkBox:"Header_linkBox__Cm2j2",openDropdown:"Header_openDropdown__retVH",dropdownAnimation:"Header_dropdownAnimation__pD4KU",closeDropdown:"Header_closeDropdown__UQRKt",animateNavBoxHover:"Header_animateNavBoxHover__ZlUcU"}},7266:function(e){e.exports={bg:"Home_bg__iD3nR",container:"Home_container__B1VFq",imageRow:"Home_imageRow__X9nuE",imageAnimation:"Home_imageAnimation__izWeZ",noAnimation:"Home_noAnimation__zUAzq",textAnimation:"Home_textAnimation__LISbU"}},7356:function(e){e.exports={wrapper:"Wrapper_wrapper__HNvOP"}}},function(e){e.O(0,[523,698,664,888,774,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);