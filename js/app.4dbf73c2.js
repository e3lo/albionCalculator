(function(){"use strict";var n={3089:function(n,e,t){var r=t(9963),o=t(6252),i=t(3577),u=t(2201);const a={id:"nav"};var c={__name:"App",setup(n){const e=(0,u.yj)();function t(n){return{active:e.path===n}}return(n,e)=>{const r=(0,o.up)("router-link"),u=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",a,[(0,o.Wm)(r,{to:"/",class:(0,i.C_)(["nav__button",t("/")])},{default:(0,o.w5)((()=>[(0,o.Uk)(" Home ")])),_:1},8,["class"]),(0,o.Wm)(r,{to:"/cooking",class:(0,i.C_)(["nav__button",t("/cooking")])},{default:(0,o.w5)((()=>[(0,o.Uk)(" Cooking ")])),_:1},8,["class"]),(0,o.Wm)(r,{to:"/refining",class:(0,i.C_)(["nav__button",t("/refining")])},{default:(0,o.w5)((()=>[(0,o.Uk)(" Refining ")])),_:1},8,["class"]),(0,o.Wm)(r,{to:"/brewing",class:(0,i.C_)(["nav__button",t("/brewing")])},{default:(0,o.w5)((()=>[(0,o.Uk)(" Brewing ")])),_:1},8,["class"])]),(0,o.Wm)(u)],64)}}};const f=c;var s=f;const l=(0,o._)("h1",null,"Only cooking section is in demo",-1),d=[l];function p(n,e){return(0,o.wg)(),(0,o.iD)("div",null,d)}var v=t(3744);const g={},m=(0,v.Z)(g,[["render",p]]);var h=m;const b=[{path:"/",name:"HomePage",component:h},{path:"/cooking",name:"CookingPage",component:()=>t.e(26).then(t.bind(t,5026))},{path:"/refining",name:"RefiningPage",component:()=>t.e(215).then(t.bind(t,8215))},{path:"/brewing",name:"BrewingPage",component:()=>t.e(315).then(t.bind(t,5315))}],y=(0,u.p7)({history:(0,u.PO)({NODE_ENV:"production",BASE_URL:"/"}.Basu_URL),routes:b});var _=y;const w=(0,r.ri)(s);w.use(_),w.mount("#app")}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return n[r].call(i.exports,i,i.exports,t),i.exports}t.m=n,function(){var n=[];t.O=function(e,r,o,i){if(!r){var u=1/0;for(s=0;s<n.length;s++){r=n[s][0],o=n[s][1],i=n[s][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||u>=i)&&Object.keys(t.O).every((function(n){return t.O[n](r[c])}))?r.splice(c--,1):(a=!1,i<u&&(u=i));if(a){n.splice(s--,1);var f=o();void 0!==f&&(e=f)}}return e}i=i||0;for(var s=n.length;s>0&&n[s-1][2]>i;s--)n[s]=n[s-1];n[s]=[r,o,i]}}(),function(){t.d=function(n,e){for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})}}(),function(){t.f={},t.e=function(n){return Promise.all(Object.keys(t.f).reduce((function(e,r){return t.f[r](n,e),e}),[]))}}(),function(){t.u=function(n){return"js/"+n+"."+{26:"11091529",215:"0d6817de",315:"cefd21a6"}[n]+".js"}}(),function(){t.miniCssF=function(n){return"css/"+n+".ef7842c0.css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={},e="albion-tools:";t.l=function(r,o,i,u){if(n[r])n[r].push(o);else{var a,c;if(void 0!==i)for(var f=document.getElementsByTagName("script"),s=0;s<f.length;s++){var l=f[s];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==e+i){a=l;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,t.nc&&a.setAttribute("nonce",t.nc),a.setAttribute("data-webpack",e+i),a.src=r),n[r]=[o];var d=function(e,t){a.onerror=a.onload=null,clearTimeout(p);var o=n[r];if(delete n[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(n){return n(t)})),e)return e(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){t.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){if("undefined"!==typeof document){var n=function(n,e,t,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var u=function(t){if(i.onerror=i.onload=null,"load"===t.type)r();else{var u=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.href||e,c=new Error("Loading CSS chunk "+n+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=u,c.request=a,i.parentNode&&i.parentNode.removeChild(i),o(c)}};return i.onerror=i.onload=u,i.href=e,t?t.parentNode.insertBefore(i,t.nextSibling):document.head.appendChild(i),i},e=function(n,e){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===n||i===e))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],i=o.getAttribute("data-href");if(i===n||i===e)return o}},r=function(r){return new Promise((function(o,i){var u=t.miniCssF(r),a=t.p+u;if(e(u,a))return o();n(r,a,null,o,i)}))},o={143:0};t.f.miniCss=function(n,e){var t={26:1};o[n]?e.push(o[n]):0!==o[n]&&t[n]&&e.push(o[n]=r(n).then((function(){o[n]=0}),(function(e){throw delete o[n],e})))}}}(),function(){var n={143:0};t.f.j=function(e,r){var o=t.o(n,e)?n[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=n[e]=[t,r]}));r.push(o[2]=i);var u=t.p+t.u(e),a=new Error,c=function(r){if(t.o(n,e)&&(o=n[e],0!==o&&(n[e]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+e+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};t.l(u,c,"chunk-"+e,e)}},t.O.j=function(e){return 0===n[e]};var e=function(e,r){var o,i,u=r[0],a=r[1],c=r[2],f=0;if(u.some((function(e){return 0!==n[e]}))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(c)var s=c(t)}for(e&&e(r);f<u.length;f++)i=u[f],t.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return t.O(s)},r=self["webpackChunkalbion_tools"]=self["webpackChunkalbion_tools"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(3089)}));r=t.O(r)})();
//# sourceMappingURL=app.4dbf73c2.js.map