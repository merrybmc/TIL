"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[2180],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(r),k=a,d=u["".concat(o,".").concat(k)]||u[k]||m[k]||l;return r?n.createElement(d,p(p({ref:t},c),{},{components:r})):n.createElement(d,p({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,p=new Array(l);p[0]=k;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[u]="string"==typeof e?e:a,p[1]=i;for(var s=2;s<l;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},7011:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const l={},p="Intro",i={unversionedId:"frontend/Typescript/intro",id:"frontend/Typescript/intro",title:"Intro",description:"\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\ub294 2010\ub144\ub300 \ucd08 \ub9c8\uc774\ud06c\ub85c\uc18c\ud504\ud2b8 \ub0b4\ubd80\uc5d0\uc11c \ub9cc\ub4e4\uc5b4\uc9c4 \ud6c4 2012\ub144\uc5d0 \ucd9c\uc2dc \ubc0f \uc624\ud508\uc18c\uc2a4\ud654\uac00 \ub418\uc5c8\ub2e4.",source:"@site/docs/frontend/4-Typescript/0-intro.md",sourceDirName:"frontend/4-Typescript",slug:"/frontend/Typescript/intro",permalink:"/TIL/docs/frontend/Typescript/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/frontend/4-Typescript/0-intro.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"frontend",previous:{title:"\ud568\uc218",permalink:"/TIL/docs/frontend/Javascript/\ud568\uc218"},next:{title:"Type System",permalink:"/TIL/docs/frontend/Typescript/type system"}},o={},s=[{value:"\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8 \uc124\uce58 \ubc0f \uc0ac\uc6a9",id:"\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8-\uc124\uce58-\ubc0f-\uc0ac\uc6a9",level:2},{value:"React\uc5d0\uc11c typeScript \uc0ac\uc6a9",id:"react\uc5d0\uc11c-typescript-\uc0ac\uc6a9",level:2},{value:"\uc0c8\ub85c\uc6b4 \ud504\ub85c\uc81d\ud2b8\ub97c \ub9cc\ub4e4 \uacbd\uc6b0",id:"\uc0c8\ub85c\uc6b4-\ud504\ub85c\uc81d\ud2b8\ub97c-\ub9cc\ub4e4-\uacbd\uc6b0",level:3},{value:"\uae30\uc874 \ud504\ub85c\uc81d\ud2b8\uc5d0 \uc124\uce58\ud560 \uacbd\uc6b0",id:"\uae30\uc874-\ud504\ub85c\uc81d\ud2b8\uc5d0-\uc124\uce58\ud560-\uacbd\uc6b0",level:3},{value:"\uc138\ubd80 \uc124\uc815",id:"\uc138\ubd80-\uc124\uc815",level:2}],c={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"intro"},"Intro"),(0,a.kt)("p",null,"\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\ub294 2010\ub144\ub300 \ucd08 \ub9c8\uc774\ud06c\ub85c\uc18c\ud504\ud2b8 \ub0b4\ubd80\uc5d0\uc11c \ub9cc\ub4e4\uc5b4\uc9c4 \ud6c4 2012\ub144\uc5d0 \ucd9c\uc2dc \ubc0f \uc624\ud508\uc18c\uc2a4\ud654\uac00 \ub418\uc5c8\ub2e4."),(0,a.kt)("p",null,"\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\ub294 \uc885\uc885 ",(0,a.kt)("strong",{parentName:"p"},"'\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc758 \uc0c1\uc704 \uc9d1\ud569'")," \ud639\uc740 ",(0,a.kt)("strong",{parentName:"p"},"'\ud0c0\uc785\uc774 \uc788\ub294 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8'"),"\ub85c \uc124\uba85\ub41c\ub2e4."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 \ub124 \uac00\uc9c0\ub85c \uc124\uba85\ud560\uc218 \uc788\ub2e4."),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4: \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc758 \ubaa8\ub4e0 \uad6c\ubb38\uacfc \ud0c0\uc785\uc744 \uc815\uc758\ud558\uace0 \uc0ac\uc6a9\ud558\uae30 \uc704\ud574 \uace0\uc720 \uad6c\ubb38\uc774 \ud3ec\ud568\ub41c \uc5b8\uc5b4")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\ud0c0\uc785 \uac80\uc0ac\uae30: \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ubc0f \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\ub85c \uc791\uc131\ub41c \uc77c\ub828\uc758 \ud30c\uc77c\uc5d0\uc11c \uc0dd\uc131\ub41c \ubaa8\ub4e0 \uad6c\uc131\uc694\uc18c\ub97c \uc774\ud574\ud558\uace0 \uc798\ubabb \uad6c\uc131\ub41c \ubd80\ubd84\uc744",(0,a.kt)("br",null),"\uc624\ub958\ub97c \ud1b5\ud574 \uc54c\ub824\uc8fc\ub294 \ud504\ub85c\uadf8\ub7a8")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\ucef4\ud30c\uc77c\ub7ec: \ud0c0\uc785 \uac80\uc0ac\uae30\ub97c \uc2e4\ud589\ud558\uace0 \ubb38\uc81c\ub97c \ubcf4\uace0\ud55c \ud6c4 \uc774\uc5d0 \ub300\uc751\ub418\ub294 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ucf54\ub4dc\ub97c \uc0dd\uc131\ud558\ub294 \ud504\ub85c\uadf8\ub7a8")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\uc5b8\uc5b4 \uc11c\ube44\uc2a4: \ud0c0\uc785 \uac80\uc0ac\uae30\ub97c \uc0ac\uc6a9\ud574 vsc\uc640 \uac19\uc740 \ud3b8\uc9d1\uae30\uc5d0\uc11c \uac1c\ubc1c\uc790\uc5d0\uac8c \uc720\uc6a9\ud55c \uc720\ud2f8\ub9ac\ud2f0 \uc81c\uacf5\ubc95\uc744 \uc54c\ub824\uc8fc\ub294 \ud504\ub85c\uadf8\ub7a8")))),(0,a.kt)("h2",{id:"\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8-\uc124\uce58-\ubc0f-\uc0ac\uc6a9"},"\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8 \uc124\uce58 \ubc0f \uc0ac\uc6a9"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g typescript\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc6f9\ube0c\ub77c\uc6b0\uc800\ub294 ts \ud30c\uc77c\uc744 \uc778\uc2dd\ud560 \uc218 \uc5c6\uae30 \ub54c\ubb38\uc5d0 js \ud30c\uc77c\ub85c \ubcc0\ud658 \uc791\uc5c5\uc744 \ud574\uc57c \ud55c\ub2e4.")),(0,a.kt)("p",null,"ts - js \ud30c\uc77c \ubcc0\ud658 \ubc29\ubc95"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"tsc - w\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc790\ub3d9\uc73c\ub85c ts \ud30c\uc77c\uc744 js \ud30c\uc77c\ub85c \ubcc0\ud658\ud574\uc900\ub2e4.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"HTML \ud30c\uc77c\uc5d0\uc11c\ub294 js\ud30c\uc77c\uc744 \uc0ac\uc6a9\ud560 \uac83")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script src="\ubcc0\ud658\ub41c\ud30c\uc77c.js"><\/script>\n')),(0,a.kt)("h2",{id:"react\uc5d0\uc11c-typescript-\uc0ac\uc6a9"},"React\uc5d0\uc11c typeScript \uc0ac\uc6a9"),(0,a.kt)("h3",{id:"\uc0c8\ub85c\uc6b4-\ud504\ub85c\uc81d\ud2b8\ub97c-\ub9cc\ub4e4-\uacbd\uc6b0"},"\uc0c8\ub85c\uc6b4 \ud504\ub85c\uc81d\ud2b8\ub97c \ub9cc\ub4e4 \uacbd\uc6b0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-react-app my-app --template typescript\nyarn create react-app my-app --template typescript\n")),(0,a.kt)("h3",{id:"\uae30\uc874-\ud504\ub85c\uc81d\ud2b8\uc5d0-\uc124\uce58\ud560-\uacbd\uc6b0"},"\uae30\uc874 \ud504\ub85c\uc81d\ud2b8\uc5d0 \uc124\uce58\ud560 \uacbd\uc6b0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save typescript @types/node @types/react @types/react-dom @types/jest\n")),(0,a.kt)("h2",{id:"\uc138\ubd80-\uc124\uc815"},"\uc138\ubd80 \uc124\uc815"),(0,a.kt)("p",null,"tsconfig.json"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'{\n    "complierOptions": {\n        "target": "es6", // \ud544\uc218\n        "module": "commonjs"// \ud544\uc218\n    }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"target = \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc758 \ubc84\uc804")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"module = \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ud30c\uc77c\uac04\uc758 import \ubb38\ubc95"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"commonjs = require \ubb38\ubc95 ",(0,a.kt)("strong",{parentName:"li"},"(\uad8c\uc7a5)")),(0,a.kt)("li",{parentName:"ul"},"es2015, esnext = import \ubb38\ubc95"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uadf8 \uc678 \uc635\uc158"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'"allowJs" : true = js \ud30c\uc77c\ub4e4 ts\uc5d0\uc11c import\ud574\uc11c \uc4f8 \uc218 \uc788\ub294\uc9c0'),(0,a.kt)("li",{parentName:"ul"},'"checkJs" : true = \uc77c\ubc18 js \ud30c\uc77c\uc5d0\uc11c\ub3c4 \uc5d0\ub7ec\uccb4\ud06c \uc5ec\ubd80'),(0,a.kt)("li",{parentName:"ul"},"\"jsx\": \"preserve\" = tsx \ud30c\uc77c\uc744 jsx\ub85c \uc5b4\ub5bb\uac8c \ucef4\ud30c\uc77c\ud560 \uac83\uc778\uc9c0 'preserve', 'react-native', 'react'"),(0,a.kt)("li",{parentName:"ul"},'"declaration": true = \ucef4\ud30c\uc77c\uc2dc .d.ts \ud30c\uc77c\ub3c4 \uc790\ub3d9\uc73c\ub85c \ud568\uaed8\uc0dd\uc131 (\ud604\uc7ac\uc4f0\ub294 \ubaa8\ub4e0 \ud0c0\uc785\uc774 \uc815\uc758\ub41c \ud30c\uc77c)'),(0,a.kt)("li",{parentName:"ul"},'"outFile": "./" = \ubaa8\ub4e0 ts\ud30c\uc77c\uc744 js\ud30c\uc77c \ud558\ub098\ub85c \ucef4\ud30c\uc77c\ud574\uc90c (module\uc774 none, amd, system\uc77c \ub54c\ub9cc \uac00\ub2a5)'),(0,a.kt)("li",{parentName:"ul"},'"outDir": "./" = js\ud30c\uc77c \uc544\uc6c3\ud48b \uacbd\ub85c\ubc14\uafb8\uae30'),(0,a.kt)("li",{parentName:"ul"},'"rootDir": "./" = \ub8e8\ud2b8\uacbd\ub85c \ubc14\uafb8\uae30 (js \ud30c\uc77c \uc544\uc6c3\ud48b \uacbd\ub85c\uc5d0 \uc601\ud5a5\uc90c)'),(0,a.kt)("li",{parentName:"ul"},'"removeComments": true = \ucef4\ud30c\uc77c\uc2dc \uc8fc\uc11d\uc81c\uac70'),(0,a.kt)("li",{parentName:"ul"},'"strict": true = strict \uad00\ub828, noimplicit \uc5b4\uca4c\uad6c \uad00\ub828 \ubaa8\ub4dc \uc804\ubd80 \ucf1c\uae30'),(0,a.kt)("li",{parentName:"ul"},'"noImplicitAny": true = any\ud0c0\uc785 \uae08\uc9c0 \uc5ec\ubd80'),(0,a.kt)("li",{parentName:"ul"},'"strictNullChecks": true = null, undefined \ud0c0\uc785\uc5d0 \uc774\uc0c1\ud55c \uc9d3 \ud560\uc2dc \uc5d0\ub7ec\ub0b4\uae30'),(0,a.kt)("li",{parentName:"ul"},'"strictFunctionTypes": true = \ud568\uc218\ud30c\ub77c\ubbf8\ud130 \ud0c0\uc785\uccb4\ud06c \uac15\ud558\uac8c'),(0,a.kt)("li",{parentName:"ul"},'"strictPropertyInitialization": true = class constructor \uc791\uc131\uc2dc \ud0c0\uc785\uccb4\ud06c \uac15\ud558\uac8c'),(0,a.kt)("li",{parentName:"ul"},'"noImplicitThis": true = this \ud0a4\uc6cc\ub4dc\uac00 any \ud0c0\uc785\uc77c \uacbd\uc6b0 \uc5d0\ub7ec\ub0b4\uae30'),(0,a.kt)("li",{parentName:"ul"},'"alwaysStrict": true = \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 "use strict" \ubaa8\ub4dc \ucf1c\uae30'),(0,a.kt)("li",{parentName:"ul"},'"noUnusedLocals": true = \uc4f0\uc9c0\uc54a\ub294 \uc9c0\uc5ed\ubcc0\uc218 \uc788\uc73c\uba74 \uc5d0\ub7ec\ub0b4\uae30'),(0,a.kt)("li",{parentName:"ul"},'"noUnusedParameters": true = \uc4f0\uc9c0\uc54a\ub294 \ud30c\ub77c\ubbf8\ud130 \uc788\uc73c\uba74 \uc5d0\ub7ec\ub0b4\uae30'),(0,a.kt)("li",{parentName:"ul"},'"noImplicitReturns": true = \ud568\uc218\uc5d0\uc11c return \ube7c\uba39\uc73c\uba74 \uc5d0\ub7ec\ub0b4\uae30'),(0,a.kt)("li",{parentName:"ul"},'"noFallthroughCasesInSwitch": true = switch\ubb38 \uc774\uc0c1\ud558\uba74 \uc5d0\ub7ec\ub0b4\uae30')))))}m.isMDXComponent=!0}}]);