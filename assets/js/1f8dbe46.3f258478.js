(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(94)),c={sidebar_position:1,id:"1"},i={unversionedId:"components/1",id:"components/1",isDocsHomePage:!1,title:"Create a Page",description:"Add Markdown or React files to src/pages to create a standalone page:",source:"@site/docs/components/create-a-page.md",sourceDirName:"components",slug:"/components/1",permalink:"/stoned-docs/docs/components/1",editUrl:"https://github.com/whoadarshpandya/stoned-docs/tree/main/docs/components/create-a-page.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"1"},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/stoned-docs/docs/intro"},next:{title:"Create a Document",permalink:"/stoned-docs/docs/components/create-a-document"}},p=[{value:"Create your first React Page",id:"create-your-first-react-page",children:[]},{value:"Create your first Markdown Page",id:"create-your-first-markdown-page",children:[]}],s={toc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Add ",Object(o.b)("strong",{parentName:"p"},"Markdown or React")," files to ",Object(o.b)("inlineCode",{parentName:"p"},"src/pages")," to create a ",Object(o.b)("strong",{parentName:"p"},"standalone page"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"src/pages/index.js")," -> ",Object(o.b)("inlineCode",{parentName:"li"},"localhost:3000/")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"src/pages/foo.md")," -> ",Object(o.b)("inlineCode",{parentName:"li"},"localhost:3000/foo")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"src/pages/foo/bar.js")," -> ",Object(o.b)("inlineCode",{parentName:"li"},"localhost:3000/foo/bar"))),Object(o.b)("h2",{id:"create-your-first-react-page"},"Create your first React Page"),Object(o.b)("p",null,"Create a file at ",Object(o.b)("inlineCode",{parentName:"p"},"src/pages/my-react-page.js"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/pages/my-react-page.js"',title:'"src/pages/my-react-page.js"'},'import React from "react";\nimport Layout from "@theme/Layout";\n\nexport default function MyReactPage() {\n  return (\n    <Layout>\n      <h1>My React page</h1>\n      <p>This is a React page</p>\n    </Layout>\n  );\n}\n')),Object(o.b)("p",null,"A new page is now available at ",Object(o.b)("inlineCode",{parentName:"p"},"http://localhost:3000/my-react-page"),"."),Object(o.b)("h2",{id:"create-your-first-markdown-page"},"Create your first Markdown Page"),Object(o.b)("p",null,"Create a file at ",Object(o.b)("inlineCode",{parentName:"p"},"src/pages/my-markdown-page.md"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-mdx",metastring:'title="src/pages/my-markdown-page.md"',title:'"src/pages/my-markdown-page.md"'},"# My Markdown page\n\nThis is a Markdown page\n")),Object(o.b)("p",null,"A new page is now available at ",Object(o.b)("inlineCode",{parentName:"p"},"http://localhost:3000/my-markdown-page"),"."))}l.isMDXComponent=!0},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,m=u["".concat(c,".").concat(b)]||u[b]||d[b]||o;return n?a.a.createElement(m,i(i({ref:t},s),{},{components:n})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);