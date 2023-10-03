"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[2816],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>g});var r=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var m=r.createContext({}),u=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=u(e.components);return r.createElement(m.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},o=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,m=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(a),o=l,g=c["".concat(m,".").concat(o)]||c[o]||d[o]||n;return a?r.createElement(g,i(i({ref:t},s),{},{components:a})):r.createElement(g,i({ref:t},s))}));function g(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,i=new Array(n);i[0]=o;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p[c]="string"==typeof e?e:l,i[1]=p;for(var u=2;u<n;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}o.displayName="MDXCreateElement"},7994:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>p,toc:()=>u});var r=a(7462),l=(a(7294),a(3905));const n={},i="Grid",p={unversionedId:"frontend/CSS/Grid",id:"frontend/CSS/Grid",title:"Grid",description:"- \ub450 \ubc29\ud5a5 (x, y\ucd95) 2\ucc28\uc6d0 \ub808\uc774\uc544\uc6c3 \uc2dc\uc2a4\ud15c\uc774\ub2e4.",source:"@site/docs/frontend/2-CSS/9-Grid.md",sourceDirName:"frontend/2-CSS",slug:"/frontend/CSS/Grid",permalink:"/TIL/docs/frontend/CSS/Grid",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/frontend/2-CSS/9-Grid.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{},sidebar:"frontend",previous:{title:"Flex",permalink:"/TIL/docs/frontend/CSS/Flex"},next:{title:"SVG",permalink:"/TIL/docs/frontend/CSS/SVG"}},m={},u=[{value:"\uae30\ubcf8 \uc18d\uc131 display: grid",id:"\uae30\ubcf8-\uc18d\uc131-display-grid",level:2},{value:"inline-grid",id:"inline-grid",level:3},{value:"grid-template-columns",id:"grid-template-columns",level:2},{value:"px \ub2e8\uc704",id:"px-\ub2e8\uc704",level:3},{value:"fr \ub2e8\uc704",id:"fr-\ub2e8\uc704",level:3},{value:"px fr \ud63c\ud569",id:"px-fr-\ud63c\ud569",level:3},{value:"repeat",id:"repeat",level:3},{value:"grid-template-rows",id:"grid-template-rows",level:2},{value:"px \ub2e8\uc704",id:"px-\ub2e8\uc704-1",level:3},{value:"fr \ub2e8\uc704",id:"fr-\ub2e8\uc704-1",level:3},{value:"repeat",id:"repeat-1",level:3},{value:"\ucd5c\uc19f\uac12 \ucd5c\ub313\uac12 \uc124\uc815 minmax",id:"\ucd5c\uc19f\uac12-\ucd5c\ub313\uac12-\uc124\uc815-minmax",level:2},{value:"\uc790\ub3d9\uc73c\ub85c \ucc44\uc6b0\uae30 auto-fill / fit",id:"\uc790\ub3d9\uc73c\ub85c-\ucc44\uc6b0\uae30-auto-fill--fit",level:2},{value:"auto-fill",id:"auto-fill",level:3},{value:"auto-fit",id:"auto-fit",level:3},{value:"\uac04\uaca9 \ub9cc\ub4e4\uae30 gap",id:"\uac04\uaca9-\ub9cc\ub4e4\uae30-gap",level:2},{value:"gap",id:"gap",level:3},{value:"row-gap",id:"row-gap",level:3},{value:"\uadf8\ub9ac\ub4dc \uc790\ub3d9 \uc815\uc758 grid-auto-columns / rows",id:"\uadf8\ub9ac\ub4dc-\uc790\ub3d9-\uc815\uc758-grid-auto-columns--rows",level:2},{value:"\uc140\uc758 \uc601\uc5ed \uc9c0\uc815 grid - column / row - start / end",id:"\uc140\uc758-\uc601\uc5ed-\uc9c0\uc815-grid---column--row---start--end",level:2},{value:"column / row - start / end",id:"column--row---start--end",level:3},{value:"\uc601\uc5ed \uc774\ub984 \uc815\uc758 grid-template-areas",id:"\uc601\uc5ed-\uc774\ub984-\uc815\uc758-grid-template-areas",level:2}],s={toc:u},c="wrapper";function d(e){let{components:t,...a}=e;return(0,l.kt)(c,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"grid"},"Grid"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ub450 \ubc29\ud5a5 (x, y\ucd95) 2\ucc28\uc6d0 \ub808\uc774\uc544\uc6c3 \uc2dc\uc2a4\ud15c\uc774\ub2e4.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Grid \ub808\uc774\uc544\uc6c3 \uae30\ubcf8 HTML \uad6c\uc870")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<div class="container">\n  <div class="item">A</div>\n  <div class="item">B</div>\n  <div class="item">C</div>\n  <div class="item">D</div>\n  <div class="item">E</div>\n  <div class="item">F</div>\n  <div class="item">G</div>\n  <div class="item">H</div>\n  <div class="item">I</div>\n</div>\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc0c1\uc704 \ud0dc\uadf8\uc778 div.container\ub97c \uadf8\ub9ac\ub4dc \ucee8\ud14c\uc774\ub108\ub77c\uace0 \ubd80\ub978\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ud558\uc704 \ud0dc\uadf8\uc778 div.item\uc744 \uadf8\ub9ac\ub4dc \uc544\uc774\ud15c\uc774\ub77c\uace0 \ubd80\ub978\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ucee8\ud14c\uc774\ub108\uac00 Grid\uc758 \uc601\ud5a5\uc744 \ubc1b\ub294 \uc804\uccb4 \uacf5\uac04\uc774\uba70 \uc18d\uc131\uc5d0 \ub530\ub77c \uc544\uc774\ud15c\ub4e4\uc774 \ubc30\uce58\ub41c\ub2e4.")),(0,l.kt)("h2",{id:"\uae30\ubcf8-\uc18d\uc131-display-grid"},"\uae30\ubcf8 \uc18d\uc131 display: grid"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".container {\n  display: grid;\n}\n")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/merrybmc/TIL/assets/65064563/90f9a554-3a31-4fc7-ba52-47ba865226ae",alt:"image"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uae30\ubcf8 \uc18d\uc131\uc740 flex\uc640 \ud615\ud0dc\uc640 \uac19\uc774 \uc544\uc774\ud15c\ub4e4\uc774 block \uc18d\uc131\uc774 \ub41c\ub2e4.")),(0,l.kt)("h3",{id:"inline-grid"},"inline-grid"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".container {\n  display: inline-grid;\n}\n")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/merrybmc/TIL/assets/65064563/cc8c0a2f-f9b8-4a3e-a8a0-1c2073be0e43",alt:"image"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"inline-grid\ub294 inline-block\uacfc \ub611\uac19\uc774 \ub3d9\uc791\ud55c\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc544\uc774\ud15c\uc758 \ubc30\uce58\ubcf4\ub2e4\ub294 \uc8fc\ubcc0 \uc694\uc18c\ub4e4\uc774 \uc5b4\ub5bb\uac8c \uc5b4\uc6b0\ub7ec\uc9c8\uc9c0\ub97c \uacb0\uc815\ud55c\ub2e4.")),(0,l.kt)("h2",{id:"grid-template-columns"},"grid-template-columns"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ucee8\ud14c\uc774\ub108\uc5d0 Grid \ud2b8\ub799\uc758 \ud06c\uae30\ub97c \uc9c0\uc815\ud574\uc8fc\ub294 \uc18d\uc131\uc774\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"grid \ucee8\ud14c\uc774\ub108\uc758 \uc5f4\uc758 \ud06c\uae30 \ubc0f \ubc30\uce58\ub97c \uacb0\uc815\ud55c\ub2e4.")),(0,l.kt)("h3",{id:"px-\ub2e8\uc704"},"px \ub2e8\uc704"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".container {\n  grid-template-columns: 100px 300px 200px;\n}\n")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/merrybmc/TIL/assets/65064563/a7a4e413-3591-4261-96e1-97ec993978c4",alt:"image"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc544\uc774\ud15c\uc774 3\uc5f4\ub85c \ubc30\uce58\ub41c\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uac01 \uc5f4\ub9c8\ub2e4 \uc21c\uc11c\ub300\ub85c 100px 300px 200px\uc758 \ub108\ube44\ub97c \uac00\uc9c4\ub2e4.")),(0,l.kt)("h3",{id:"fr-\ub2e8\uc704"},"fr \ub2e8\uc704"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".container {\n  grid-template-columns: 1fr 2fr;\n}\n")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/merrybmc/TIL/assets/65064563/c90690d1-cece-45ee-96e6-497369ef523a",alt:"image"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"fraction (\ube44\uc728) \uc758 \ucd95\uc57d\uc5b4\uc774\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"fr\uc744 \uc785\ub825\ud55c \uac1c\uc218\ub9cc\ud07c \uc5f4\uc774 \ub098\ub204\uc5b4\uc9c4\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"fr\uc5d0 \ubd99\ub294 \uc22b\uc790\ub294 \ud2b8\ub799\uc758 \ube44\uc728\uc744 \uc758\ubbf8\ud55c\ub2e4. (1:2)")),(0,l.kt)("h3",{id:"px-fr-\ud63c\ud569"},"px fr \ud63c\ud569"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".container {\n  grid-template-columns: 1fr 500px 1fr;\n}\n")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/merrybmc/TIL/assets/65064563/4924aa5e-aa08-42e2-9905-1be8c576367a",alt:"image"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"grid\uc758 \ud2b8\ub799\uc774 \ucd1d 3\uac1c\uc758 \uc5f4\ub85c \ub098\ub204\uc5b4\uc9c4\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ube44\uc728\uc740 1 : 500px : 1 \uc744 \uc758\ubbf8\ud55c\ub2e4.")),(0,l.kt)("h3",{id:"repeat"},"repeat"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".container {\n  grid-template-columns: repeat(3, 1fr 2fr 1fr);\n}\n")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/merrybmc/TIL/assets/65064563/140daff9-277f-493c-92a0-95ba3d610704",alt:"image"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc5f4\uc744 \uccab\ubc88\uc9f8 \ud30c\ub77c\ubbf8\ud130\uc5d0 \uc785\ub825\ud55c \uc22b\uc790\ub9cc\ud07c \ubc18\ubcf5\ud558\uc5ec \ub098\ub204\uc5b4\uac00\uc9c4\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"repeat(3, 1fr 2fr 1fr) \uc740 \uc989 (1fr, 2fr, 1fr, 1fr, 2fr, 1fr, 1fr, 2fr, 1fr)\uc744 \uc758\ubbf8\ud55c\ub2e4.")),(0,l.kt)("h2",{id:"grid-template-rows"},"grid-template-rows"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"grid \ucee8\ud14c\uc774\ub108\uc758 \ud589\uc758 \ud06c\uae30 \ubc0f \ubc30\uce58\ub97c \uacb0\uc815\ud55c\ub2e4.")),(0,l.kt)("h3",{id:"px-\ub2e8\uc704-1"},"px \ub2e8\uc704"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".container {\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 100px 200px 300px;\n}\n")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/merrybmc/TIL/assets/65064563/c3a48f6f-bdea-4b7d-8c5b-2d0d4dd4f1c4",alt:"image"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uac01 \ud589\ub9c8\ub2e4 \uc21c\uc11c\ub300\ub85c 100px 200px 300px\uc758 \ub192\uc774\ub97c \uac00\uc9c4\ub2e4.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\uc124\uc815\ub41c \ud589\uc774 2\uac1c\uc77c \uacbd\uc6b0")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".container {\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 100px 200px;\n}\n")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/merrybmc/TIL/assets/65064563/c34d4c8e-f1c9-41fb-9da2-59d46d34faac",alt:"image"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud589\uc758 \ud06c\uae30\uac00 \uc124\uc815\ub418\uc9c0 \uc54a\uc744 \uacbd\uc6b0 \uc6d0\ub798 \uc124\uc815\ub41c \ucee8\ud150\uce20\uc758 \ud06c\uae30\ub9cc\ud07c\ub9cc \ub192\uc774\ub97c \uac00\uc9c4\ub2e4.")),(0,l.kt)("h3",{id:"fr-\ub2e8\uc704-1"},"fr \ub2e8\uc704"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".container {\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr 2fr 1fr;\n}\n")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/merrybmc/TIL/assets/65064563/3eedbd62-634d-4ff3-9f80-820d3dcb0004",alt:"image"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"fr\uc744 \uc785\ub825\ud55c \uac1c\uc218\ub9cc\ud07c \ud589\uc774 \ub098\ub204\uc5b4\uc9c4\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ud589\uc758 \ube44\uc728\uc774 1:3:1\ub85c \uc801\uc6a9\ub41c\ub2e4.")),(0,l.kt)("h3",{id:"repeat-1"},"repeat"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".container {\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: repeat(2, 1fr 2fr 1fr);\n}\n")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/merrybmc/TIL/assets/65064563/535c19c8-46c9-46cb-8665-ea2933638af2",alt:"image"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud589\uc744 \uccab\ubc88\uc9f8 \ud30c\ub77c\ubbf8\ud130\uc5d0 \uc785\ub825\ud55c \uc22b\uc790\ub9cc\ud07c \ubc18\ubcf5\ud558\uc5ec \ub098\ub204\uc5b4\uac00\uc9c4\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"repeat(2, 1fr 2fr 1fr) \uc740 \uc989 (1fr, 2fr, 1fr, 1fr, 2fr, 1fr)\uc744 \uc758\ubbf8\ud55c\ub2e4.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"repeat\uc5d0\uc11c fraction\uc744 1\uac1c\ub9cc \uc0ac\uc6a9\ud560 \uacbd\uc6b0")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".container {\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: repeat(2, 1fr);\n  height: 40vh;\n}\n")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/merrybmc/TIL/assets/65064563/e01460ae-8f68-4537-940f-56767cb29fc3",alt:"image"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"row\uc758 repeat\uc5d0\uc11c fr\uc744 1\uac1c\ub9cc \uc0ac\uc6a9\ud560 \uacbd\uc6b0 \ucee8\ud14c\uc774\ub108\uc758 \ub192\uc774\ub97c \ubcc4\ub3c4\ub85c \uc815\ud574\uc8fc\uc5b4\uc57c\ud55c\ub2e4.")),(0,l.kt)("h2",{id:"\ucd5c\uc19f\uac12-\ucd5c\ub313\uac12-\uc124\uc815-minmax"},"\ucd5c\uc19f\uac12 \ucd5c\ub313\uac12 \uc124\uc815 minmax"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uccab \ubc88\uc9f8 \ud30c\ub77c\ubbf8\ud130\uc5d0 \uc544\uc774\ud15c\uc758 \ucd5c\uc19f\uac12\uc744 \ud655\ubcf4\ud574\uc900\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ub450 \ubc88\uc9f8 \ud30c\ub77c\ubbf8\ud130\uc5d0 \uc544\uc774\ud15c\uc758 \ucd5c\ub313\uac12\uc744 \uc124\uc815\ud574\uc900\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"auto\ub85c \uc124\uc815\ud560 \uacbd\uc6b0 \ucee8\ud150\uce20\uc758 \ud06c\uae30\ub9cc\ud07c \ud06c\uae30\uac00 \uc9c0\uc815\ub41c\ub2e4.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".container {\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(3, minmax(100px, auto));\n}\n")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/merrybmc/TIL/assets/65064563/e39598eb-9a8e-47de-8061-bdb409a31788",alt:"image"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"grid \ud589\ub4e4\uc758 \ub192\uc774\uac00 \ucd5c\uc18c\ud55c 100px\uc744 \ud655\ubcf4\ud55c\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ucee8\ud150\uce20\uc758 \uc591\uc774 \ubc29\ub300\ud560 \uacbd\uc6b0 auto\ub85c \uc778\ud574\uc11c \ucee8\ud150\uce20\uc758 \ud06c\uae30\ub9cc\ud07c \ub192\uc774\uac00 \ub298\uc5b4\ub09c\ub2e4.")),(0,l.kt)("h2",{id:"\uc790\ub3d9\uc73c\ub85c-\ucc44\uc6b0\uae30-auto-fill--fit"},"\uc790\ub3d9\uc73c\ub85c \ucc44\uc6b0\uae30 auto-fill / fit"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud589\uacfc \uc5f4\uc758 \uac1c\uc218\ub97c \uc815\ud558\uc9c0 \uc54a\uace0 \uc124\uc815\ub41c \ub108\ube44\uc640 \ub192\uc774\ub9cc\ud07c \ud5c8\uc6a9\ud558\ub294 \ud55c \ucd5c\ub300\ud55c \uc140\uc744 \ucc44\uc6b4\ub2e4.")),(0,l.kt)("h3",{id:"auto-fill"},"auto-fill"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".container {\n  grid-template-columns: repeat(auto-fill, minmax(20%, auto));\n}\n")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/merrybmc/TIL/assets/65064563/ba54ce91-1d48-4db9-b9eb-0320c1f7319d",alt:"image"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uac01 \uc140\uc774 \ucd5c\uc18c\ud55c 20% \ube44\uc728\ub9cc\ud07c \ucd5c\uc19f\uac12\uc744 \ud655\ubcf4\ud55c\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc5f4\uc758 \uac1c\uc218\ub97c \ub530\ub85c \uc815\ud574\uc8fc\uc9c0 \uc54a\uace0 auto-fill\ub85c \uc778\ud574 \uc790\ub3d9\uc73c\ub85c \ucd5c\ub300\ud55c \uc5f4\uc744 \ucc44\uc6b4\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"media query\ub97c \uc4f0\uc9c0 \uc54a\uace0\ub3c4 \ubc18\uc751\ud615 \ub808\uc774\uc544\uc6c3\uc744 \uad6c\ud604\ud560 \uc218 \uc788\ub2e4.")),(0,l.kt)("h3",{id:"auto-fit"},"auto-fit"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".container {\n  grid-template-columns: repeat(auto-fit, minmax(20%, auto));\n}\n")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/merrybmc/TIL/assets/65064563/731e747a-dcf5-4a2f-808c-a05b768efa80",alt:"image"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc140\ub85c \ucee8\ud14c\uc774\ub108\ub97c \ucc44\uc6b0\uace0\ub3c4 \uc5ec\ubc31\uc774 \ub0a8\uc744 \uacbd\uc6b0 \uc544\uc774\ud15c\uc758 \ube44\uc728\uc744 \ub298\ub824 \uaf49\ucc44\uc6b4\ub2e4.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"auto-fill\uc744 \uc37c\uc744 \uacbd\uc6b0")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/merrybmc/TIL/assets/65064563/df622bd3-44e9-464e-87b8-a6b27e9a89aa",alt:"image"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"20%\uc758 \ube44\uc728\uc744 \uac00\uc9c4 3\uac1c\uc758 \uc140\uc774 \uc5f4\uc744 \ucc44\uc6b0\uace0\ub3c4 \ucee8\ud14c\uc774\ub108\uc5d0 \uc5ec\ubc31\uc774 \ub0a8\ub294\ub2e4.")),(0,l.kt)("h2",{id:"\uac04\uaca9-\ub9cc\ub4e4\uae30-gap"},"\uac04\uaca9 \ub9cc\ub4e4\uae30 gap"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uadf8\ub9ac\ub4dc \uc140 \uc0ac\uc774\uc758 \uac04\uaca9\uc744 \uc124\uc815\ud55c\ub2e4.")),(0,l.kt)("h3",{id:"gap"},"gap"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".container {\n  gap: 10px;\n}\n")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/merrybmc/TIL/assets/65064563/58701931-1f44-4686-8f72-bb79cd533d5d",alt:"image"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"row-gap, column-gap\uc758 \ucd95\uc57d \uc18d\uc131\uc774\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc140 \uac04\uc758 \ud589 \uc5f4 \uac04\uaca9\uc774 10px\ub9cc\ud07c \ubc8c\uc5b4\uc9c4\ub2e4.")),(0,l.kt)("h3",{id:"row-gap"},"row-gap"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".container {\n  row-gap: 10px;\n}\n")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/merrybmc/TIL/assets/65064563/1cbbaa2f-f586-4ece-83a6-3264b80b40ee",alt:"image"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc140 \uac04\uc758 \ud589\uc5d0\ub9cc \uac04\uaca9\uc774 \ubc8c\uc5b4\uc9c4\ub2e4.")),(0,l.kt)("p",null,"column-gap"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".container {\n  column-gap: 10px;\n}\n")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/merrybmc/TIL/assets/65064563/b9f8612e-efd4-428c-bbe4-b4936f1b9bcc",alt:"image"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc140 \uac04\uc758 \uc5f4\uc5d0\ub9cc \uac04\uaca9\uc774 \ubc8c\uc5b4\uc9c4\ub2e4.")),(0,l.kt)("h2",{id:"\uadf8\ub9ac\ub4dc-\uc790\ub3d9-\uc815\uc758-grid-auto-columns--rows"},"\uadf8\ub9ac\ub4dc \uc790\ub3d9 \uc815\uc758 grid-auto-columns / rows"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"grid-template\uc758 \ud1b5\uc81c\ub97c \ubc97\uc5b4\ub09c \uc704\uce58\uc5d0 \uc788\ub294 \ud2b8\ub799\uc744 \ud06c\uae30\ub97c \uc9c0\uc815\ud558\ub294 \uc18d\uc131\uc774\ub2e4.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".container {\n  grid-auto-rows: minmax(100px, auto);\n}\n")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/merrybmc/TIL/assets/65064563/898218a9-de58-4261-99f5-abcec2c292c1",alt:"image"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ubcc4\ub3c4\ub85c \ud589 \uc5f4\uc758 \uac1c\uc218\ub97c \uc124\uc815\ud574\uc8fc\uc9c0 \uc54a\uc544\ub3c4 \ubaa8\ub4e0 \ud2b8\ub799\uc5d0 \ud06c\uae30\uac00 \uc9c0\uc815\ub41c\ub2e4.")),(0,l.kt)("h2",{id:"\uc140\uc758-\uc601\uc5ed-\uc9c0\uc815-grid---column--row---start--end"},"\uc140\uc758 \uc601\uc5ed \uc9c0\uc815 grid - column / row - start / end"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"grid \uc544\uc774\ud15c\uc5d0 \uc801\uc6a9\ud558\ub294 \uc18d\uc131\uc774\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uac01 \uc140\uc758 \uc601\uc5ed\uc744 \uc9c0\uc815\ud55c\ub2e4.")),(0,l.kt)("h3",{id:"column--row---start--end"},"column / row - start / end"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".item {\n  grid-column-start: 1;\n  grid-column-end: 3;\n  /* \ub2e8\ucd95\uc18d\uc131 grid-column: 1/3; */\n\n  grid-row-start: 1;\n  grid-row-end: 3;\n  /* \ub2e8\ucd95\uc18d\uc131 grid-row: 1/3 */\n}\n")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/merrybmc/TIL/assets/65064563/a18bbb4f-62de-4554-b037-a01236438323",alt:"image"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"end\uc5d0\uc11c\ub294 \uc6d0\ud558\ub294 \uac12+1\uc744 \ud574\uc8fc\uba74 \ud574\ub2f9 \uc601\uc5ed\ub9cc\ud07c \ud06c\uae30\ub97c \ucc28\uc9c0\ud55c\ub2e4.")),(0,l.kt)("h2",{id:"\uc601\uc5ed-\uc774\ub984-\uc815\uc758-grid-template-areas"},"\uc601\uc5ed \uc774\ub984 \uc815\uc758 grid-template-areas"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uac01 \uc601\uc5ed\uc5d0 \uc774\ub984\uc744 \uc815\uc758\ud558\uace0 \ubc30\uce58\ud558\ub294 \ubc29\ubc95\uc774\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uadf8\ub9ac\ub4dc\uc758 \ubc30\uce58 \ubc29\ubc95\uc911\uc5d0\uc11c \uac00\uc7a5 \uc9c1\uad00\uc801\uc774\ub2e4.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<style>\n  .container {\n    grid-template-areas:\n      \'. header header\'\n      \'a main b\'\n      \'footer footer none\';\n  }\n\n  .header {\n    grid-area: header;\n  }\n  .sidebar-a {\n    grid-area: a;\n  }\n  .sidebar-b {\n    grid-area: b;\n  }\n  .main {\n    grid-area: main;\n  }\n  .footer {\n    grid-area: footer;\n  }\n</style>\n\n<body>\n  <div class="grid-container">\n    <div class="header grid-item">Header</div>\n    <div class="sidebar-a grid-item">Sidebar A</div>\n    <div class="sidebar-b grid-item">Sidebar B</div>\n    <div class="main grid-item">Main</div>\n    <div class="footer grid-item">Footer</div>\n  </div>\n</body>\n')),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/merrybmc/TIL/assets/65064563/8ff37ab0-7bcd-4818-b042-b23b8f26bf68",alt:"image"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'\uacf5\ubc31\uc744 \ub9cc\ub4e4 \ub54c\ub294 " . " \uc774\ub098 none\uc744 \uc368\uc8fc\uba74 \ub41c\ub2e4.')))}d.isMDXComponent=!0}}]);