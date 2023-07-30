"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[660],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,f=u["".concat(p,".").concat(d)]||u[d]||y[d]||o;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6565:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={},l="Array",i={unversionedId:"frontend/Typescript/array",id:"frontend/Typescript/array",title:"Array",description:"Array",source:"@site/docs/frontend/4-Typescript/3-array.md",sourceDirName:"frontend/4-Typescript",slug:"/frontend/Typescript/array",permalink:"/TIL/docs/frontend/Typescript/array",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/frontend/4-Typescript/3-array.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"frontend",previous:{title:"Function",permalink:"/TIL/docs/frontend/Typescript/function"},next:{title:"Type Alias",permalink:"/TIL/docs/frontend/Typescript/Type alias"}},p={},c=[{value:"Array",id:"array-1",level:2},{value:"Readonly",id:"readonly",level:2},{value:"Tuple",id:"tuple",level:2}],s={toc:c},u="wrapper";function y(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"array"},"Array"),(0,a.kt)("h2",{id:"array-1"},"Array"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// 1\ubc88\uc9f8 \uc120\uc5b8 \ubc29\ubc95\nconst fruits: string[] = ['tomato', 'banana'];\n\n// 2\ubc88\uc9f8 \uc120\uc5b8 \ubc29\ubc95\nconst scores: Array<number> = [1, 2, 3, 4];\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ubcc0\uc218 \uc774\ub984 \ub2e4\uc74c\uc5d0 ",(0,a.kt)("inlineCode",{parentName:"li"},": type[]")," \uc73c\ub85c \ubc30\uc5f4\uc744 \uc120\uc5b8\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ubcc0\uc218 \uc774\ub984 \ub2e4\uc74c\uc5d0 ",(0,a.kt)("inlineCode",{parentName:"li"},": Array<type>")," \uc73c\ub85c \ubc30\uc5f4\uc744 \uc120\uc5b8\ud560 \uc218 \uc788\ub2e4.")),(0,a.kt)("h2",{id:"readonly"},"Readonly"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function printArray(fruits: readonly string[]) {\n  friuts[0] = 'apple'; // \ubcc0\uacbd \ubd88\uac00\ub2a5\n  console.log(fruits);\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"object\uc758 \ub0b4\uc6a9\uc744 \ud568\uc218 \ub0b4\ubd80\uc5d0\uc11c \ubcc0\uacbd\ud560 \uc218 \uc5c6\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"object\uc758 \ubd88\ubcc0\uc131\uc744 \ubcf4\uc7a5\ud574\uc8fc\uc5b4\uc57c \ud558\uae30 \ub54c\ubb38\uc5d0 \uc790\uc8fc \uc4f0\uc778\ub2e4.")),(0,a.kt)("h2",{id:"tuple"},"Tuple"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let students: [string, number];\nstudents = ['hello', 123];\nconsole.log(students[0]);\nconsole.log(students[1]);\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ucd9c\ub825\uc744 \ud560 \ub54c \uc778\ub371\uc2a4 \ubc88\ud638\ub97c \ud1b5\ud574 \ud574\uc8fc\uc5b4\uc57c \ud55c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub9ac\uc561\ud2b8\uc758 useState\uc640 \uc720\uc0ac\ud558\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc0ac\uc6a9\ud558\ub294 \uac83\uc744 \uad8c\uc7a5\ud558\uc9c0 \uc54a\ub294\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub098\uc911\uc5d0 interface, type alias, class\ub85c \ub300\uccb4\ud574\uc11c \uc0ac\uc6a9\ub41c\ub2e4.")))}y.isMDXComponent=!0}}]);