"use strict";(self.webpackChunkecochat_doc=self.webpackChunkecochat_doc||[]).push([[274],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(n),f=o,d=m["".concat(l,".").concat(f)]||m[f]||s[f]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3205:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={slug:"client-terminal-v2-2",title:"V2.2 - Ecochat pour terminal",author:"Johan",author_title:"Cr\xe9ateur d'Ecochat",author_url:"https://johanstickman.com",author_image_url:"https://avatars.githubusercontent.com/u/41506568?v=4"},l=void 0,u={permalink:"/ecochat/client-terminal-v2-2",source:"@site/blog/2022-01-23-client-terminal-v2-2.md",title:"V2.2 - Ecochat pour terminal",description:"Oh, une nouvelle mise \xe0 jour pour le client terminal d'Ecochat.",date:"2022-01-23T00:00:00.000Z",formattedDate:"January 23, 2022",tags:[],truncated:!0,nextItem:{title:"V2.1 de l'API",permalink:"/ecochat/api-v2-1"}},p=[{value:"Installation",id:"installation",children:[]},{value:"Modifications majeurs",id:"modifications-majeurs",children:[]}],s={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Oh, une nouvelle mise \xe0 jour pour le client terminal d'Ecochat."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org"},"Node.js et npm")," sont requis."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$\xa0npm\xa0install --global ecochat-term\n")),(0,a.kt)("h2",{id:"modifications-majeurs"},"Modifications majeurs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Actualisation automatique des messages"),(0,a.kt)("li",{parentName:"ul"},"Connexion automatique (sans entrer l'UUID manuellement, fin si mais que sous Linux donc \xe7a va on va dire)")))}m.isMDXComponent=!0}}]);