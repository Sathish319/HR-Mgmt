(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[8],{151:function(e){e.exports=JSON.parse('{"english":"English","hindi":"\u0939\u093f\u0902\u0926\u0940","bengali":"\u09ac\u09be\u0982\u09b2\u09be","gujarati":"\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0","kannada":"\u0c95\u0ca8\u0ccd\u0ca8\u0ca1","malayalam":"\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02","marathi":"\u092e\u0930\u093e\u0920\u0940","odiya":"\u0b13\u0b21\u0b3f\u0b06","punjabi":"\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40","tamil":"\u0ba4\u0bae\u0bbf\u0bb4\u0bcd","telugu":"\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41"}')},178:function(e,a,t){},305:function(e,a,t){"use strict";t.r(a);var n=t(90),i=(t(178),t(151)),l=t(7),r=t.n(l),c=t(261),o=t(262),s=t(263),u=t(308),d=t(103),m=t(101),p=t(260),h=t(301),v={position:"absolute",transform:"translate3d(-20rem, 0, 0)",height:"100vh",zIndex:-1},b={position:"absolute",transform:"translate3d(10rem, 0, 0)"},g={opacity:1,position:"absolute",height:"100vh",top:64,zIndex:999},f={opacity:1,position:"absolute",height:"100vh",top:64,zIndex:999};function w(e){var a=e.pages,t=e.setExpand,n=e.darkMode,i=e.windowSize,c=Object(l.useRef)(null),o=Object(u.a)().t;return r.a.createElement("div",{className:"expand",ref:c,onMouseLeave:function(){i.width>768&&t(!1)}},a.map((function(e,a){return!0===e.showInNavbar?r.a.createElement(d.b,{to:e.pageLink,key:a,onClick:function(){t(!1)}},r.a.createElement("span",k(e.pageLink,e.animationDelayForNavbar),o(e.displayName))):null})),i.width<768&&r.a.createElement(O,{darkMode:n}))}var E=function(e){var a,t=e.pages,o=e.darkMode,s=(e.showLanguageSwitcher,e.setShowLanguageSwitcher),E=Object(u.a)(),k=E.i18n,j=E.t,N=Object.keys(i).includes(null===k||void 0===k?void 0:k.language)?null===k||void 0===k?void 0:k.language:null===k||void 0===k||null===(a=k.options)||void 0===a?void 0:a.fallbackLng[0],S=Object(l.useState)(!1),L=Object(n.a)(S,2),M=L[0],z=L[1];Object(p.a)(M);var I=Object(h.a)(),C=Object(m.c)((function(){return{opacity:0}})),x=Object(n.a)(C,3),J=x[0],P=x[1],D=x[2];P({opacity:1}),D();var F=Object(m.f)(M,null,{from:I.width<769?g:v,enter:I.width<769?f:b,leave:I.width<769?g:v,config:{mass:1,tension:210,friction:26}});return r.a.createElement(m.a.div,{className:"Navbar",style:J},r.a.createElement("div",{className:"navbar-left",onClick:function(){s((function(e){return!e}))}},i[N]),r.a.createElement("div",{className:"navbar-middle"},r.a.createElement("a",{href:"https://indiacovid.seva.ml"},"Blog ",r.a.createElement("span",null,"Home"))),r.a.createElement("div",{className:"navbar-right",onClick:function(){z(!M)},onMouseEnter:function(){I.width>769&&z(!0)}},I.width<769&&r.a.createElement("span",null,j(M?"Close":"Menu")),I.width>769&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,r.a.createElement(d.b,{to:"/"},r.a.createElement(c.a,y("/")))),r.a.createElement("span",null,I.width>768&&r.a.createElement(O,{darkMode:o})))),F.map((function(e){var a=e.item,n=e.key,i=e.props;return a?r.a.createElement(m.a.div,{key:n,style:i},r.a.createElement(w,{pages:t,setExpand:z,darkMode:o,windowSize:I})):r.a.createElement(m.a.div,{key:n,style:i})})))},k=function(e,a){return{className:"".concat(window.location.pathname===e?"focused":"")}},y=function(e){return{style:{stroke:window.location.pathname===e?"#4c75f2":""}}},O=function(e){var a=e.darkMode;return r.a.createElement("div",{className:"SunMoon",onClick:function(){a.toggle()}},r.a.createElement("div",null,a.value?r.a.createElement(o.a,{color:"#ffc107"}):r.a.createElement(s.a,null)))},j=t(93);function N(){var e=Object(j.h)().pathname;return Object(l.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var S=t(110),L=t(195),M=Object(l.lazy)((function(){return Promise.all([t.e(5),t.e(3),t.e(12)]).then(t.bind(null,299))})),z=Object(l.lazy)((function(){return t.e(6).then(t.bind(null,264))})),I=Object(l.lazy)((function(){return Promise.all([t.e(2),t.e(30),t.e(9)]).then(t.bind(null,297))})),C=Object(l.lazy)((function(){return Promise.all([t.e(0),t.e(5),t.e(19)]).then(t.bind(null,292))})),x=Object(l.lazy)((function(){return Promise.all([t.e(29),t.e(10)]).then(t.bind(null,307))})),J=Object(l.lazy)((function(){return t.e(13).then(t.bind(null,311))})),P={"@context":"http://schema.org/","@type":"NGO",name:"Coronavirus Outbreak in India: Latest Map and Case Count",alternateName:"COVID-19 Tracker",url:"https://www.covid19india.org/",image:"https://www.covid19india.org/thumbnail.png"};a.default=function(){var e=Object(L.a)(!1),a=Object(l.useState)(!1),t=Object(n.a)(a,2),i=t[0],c=t[1],o=[{pageLink:"/",view:M,displayName:"Home",showInNavbar:!0},{pageLink:"/demographics",view:I,displayName:"Demographics",showInNavbar:!1},{pageLink:"/essentials",view:x,displayName:"Essentials",showInNavbar:!1},{pageLink:"/about",view:z,displayName:"About",showInNavbar:!1},{pageLink:"/state/:stateCode",view:C,displayName:"State",showInNavbar:!1}];return r.a.createElement("div",{className:"App"},r.a.createElement(S.a,null,r.a.createElement("script",{type:"application/ld+json"},JSON.stringify(P))),r.a.createElement(l.Suspense,{fallback:r.a.createElement("div",null)},r.a.createElement(J,{showLanguageSwitcher:i,setShowLanguageSwitcher:c})),r.a.createElement(l.Suspense,{fallback:r.a.createElement("div",null)},r.a.createElement(d.a,{basename:"/covid19india-react"},r.a.createElement(N,null),r.a.createElement(E,Object.assign({pages:o},{darkMode:e},{showLanguageSwitcher:i,setShowLanguageSwitcher:c})),r.a.createElement(j.b,{render:function(e){var a=e.location;return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.d,{location:a},o.map((function(e,a){return r.a.createElement(j.b,{exact:!0,path:e.pageLink,render:function(a){a.match;return r.a.createElement(e.view,null)},key:a})})),r.a.createElement(j.a,{to:"/"})))}}))))}}}]);
//# sourceMappingURL=App.748934e7.chunk.js.map