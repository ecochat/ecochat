"use strict";(self.webpackChunkecochat_doc=self.webpackChunkecochat_doc||[]).push([[249],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(n),f=a,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(d,c(c({ref:t},u),{},{components:n})):r.createElement(d,c({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),c=["components"],i={sidebar_position:1},s="Envoyer un message",l={unversionedId:"chat/say",id:"chat/say",isDocsHomePage:!1,title:"Envoyer un message",description:"Envoyer un message dans le chat est la fonctionnalit\xe9 la plus principale d'Ecochat...",source:"@site/docs/chat/say.md",sourceDirName:"chat",slug:"/chat/say",permalink:"/ecochat/docs/chat/say",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/ecochat/docs/intro"},next:{title:"Liste des message",permalink:"/ecochat/docs/chat/list"}},u=[{value:"POST /api/say?uuid=....&amp;message=....",id:"post",children:[]},{value:"Param\xe8tre",id:"parameter",children:[]}],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"envoyer-un-message"},"Envoyer un message"),(0,o.kt)("p",null,"Envoyer un message dans le chat est la fonctionnalit\xe9 la plus principale d'Ecochat..."),(0,o.kt)("h3",{id:"post"},"POST /api/say?uuid=....&message=...."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"R\xe9sultat :")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "message": "Message envoy\xe9.",\n  "error": false,\n  "shortError": false,\n  "data": {\n    "username": "Quelqu\'un",\n    "tag": 1234,\n    "id": "123456789012345",\n    "avatar": "https://firebasestorage.googleapis.com/v0/b/storage-bf183.appspot.com/o/otherImages%2FdefaultAvatar.png?alt=media",\n    "banned": false,\n    "certified": false\n  }\n}\n')),(0,o.kt)("h3",{id:"parameter"},"Param\xe8tre"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"L'UUID est l'UUID de votre compte Johanstickman")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Le message est le contenu de ce que vous souhaitez envoyer"))))}m.isMDXComponent=!0}}]);