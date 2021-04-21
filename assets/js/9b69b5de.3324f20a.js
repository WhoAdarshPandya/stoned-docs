(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return d}));var o=n(3),a=(n(0),n(102)),c=n(104);n(56);const r={sidebar_position:10},s={unversionedId:"components/Badges",id:"components/Badges",isDocsHomePage:!1,title:"Badges",description:"Badge With Avatar",source:"@site/docs/components/Badges.mdx",sourceDirName:"components",slug:"/components/Badges",permalink:"/stoned-docs/docs/components/Badges",editUrl:"https://github.com/whoadarshpandya/stoned-docs/tree/main/docs/components/Badges.mdx",version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Typography",permalink:"/stoned-docs/docs/components/Typography"},next:{title:"Slider",permalink:"/stoned-docs/docs/components/Slider"}},p=[{value:"Badge With Avatar",id:"badge-with-avatar",children:[]},{value:"Badge With Icon",id:"badge-with-icon",children:[]},{value:"Badge Counter With Avatar",id:"badge-counter-with-avatar",children:[]},{value:"Badge Counter With Icon",id:"badge-counter-with-icon",children:[]},{value:"Badge With Activity Status",id:"badge-with-activity-status",children:[]}],i={toc:p};function d({components:e,...t}){return Object(a.b)("wrapper",Object(o.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("br",null),Object(a.b)("h2",{id:"badge-with-avatar"},"Badge With Avatar"),Object(a.b)(c.d,{onClick:e=>console.log(e),mdxType:"Badge"},Object(a.b)(c.c,{size:"small",src:"https://pbs.twimg.com/profile_images/1238749114348662784/p9hc5fuP_400x400.jpg",mdxType:"Avatar"})),Object(a.b)(c.d,{mdxType:"Badge"},Object(a.b)(c.c,{src:"https://pbs.twimg.com/profile_images/1238749114348662784/p9hc5fuP_400x400.jpg",onClick:e=>console.log(e),mdxType:"Avatar"})),Object(a.b)(c.d,{color:"secondary",mdxType:"Badge"},Object(a.b)(c.c,{size:"large",src:"https://pbs.twimg.com/profile_images/1238749114348662784/p9hc5fuP_400x400.jpg",onClick:e=>console.log(e),mdxType:"Avatar"})),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/App.js"',title:'"src/App.js"'},'import { Badge, Avatar } from "stoned";\nimport "stoned/dist/index.css";\n\nconst App = () => {\n  return (\n    <React.Fragment>\n      <Badge onClick={(e) => console.log(e)}>\n        <Avatar\n          size="small"\n          src="https://pbs.twimg.com/profile_images/1238749114348662784/p9hc5fuP_400x400.jpg"\n        />\n      </Badge>\n      <Badge>\n        <Avatar\n          src="https://pbs.twimg.com/profile_images/1238749114348662784/p9hc5fuP_400x400.jpg"\n          onClick={(e) => console.log(e)}\n        />\n      </Badge>\n      <Badge color="secondary">\n        <Avatar\n          size="large"\n          src="https://pbs.twimg.com/profile_images/1238749114348662784/p9hc5fuP_400x400.jpg"\n          onClick={(e) => console.log(e)}\n        />\n      </Badge>\n    </React.Fragment>\n  );\n};\n\nexport default App;\n')),Object(a.b)("h2",{id:"badge-with-icon"},"Badge With Icon"),Object(a.b)(c.d,{color:"secondary",mdxType:"Badge"},Object(a.b)(c.o,{mdxType:"IconButton"},"email")),Object(a.b)(c.d,{color:"primary",anchor:"top-right",onClick:e=>console.log(e),mdxType:"Badge"},Object(a.b)(c.o,{mdxType:"IconButton"},"email")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/App.js"',title:'"src/App.js"'},'import { Badge, IconButton } from "stoned";\nimport "stoned/dist/index.css";\n\nconst App = () => {\n  return (\n    <React.Fragment>\n      <Badge color="secondary">\n        <IconButton>email</IconButton>\n      </Badge>\n      <Badge color="primary" anchor="top-right" onClick={(e) => console.log(e)}>\n        <IconButton>email</IconButton>\n      </Badge>\n    </React.Fragment>\n  );\n};\n\nexport default App;\n')),Object(a.b)("h2",{id:"badge-counter-with-avatar"},"Badge Counter With Avatar"),Object(a.b)(c.d,{color:"primary",anchor:"top-right",variant:"counter",count:7,mdxType:"Badge"},Object(a.b)(c.c,{src:"https://pbs.twimg.com/profile_images/1238749114348662784/p9hc5fuP_400x400.jpg",onClick:e=>console.log(e),mdxType:"Avatar"})),Object(a.b)(c.d,{color:"primary",anchor:"top-left",variant:"counter",count:7,mdxType:"Badge"},Object(a.b)(c.c,{src:"https://pbs.twimg.com/profile_images/1238749114348662784/p9hc5fuP_400x400.jpg",onClick:e=>console.log(e),mdxType:"Avatar"})),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/App.js"',title:'"src/App.js"'},'import { Badge, Avatar } from "stoned";\nimport "stoned/dist/index.css";\n\nconst App = () => {\n  return (\n    <React.Fragment>\n      <Badge color="primary" anchor="top-right" variant="counter" count={7}>\n        <Avatar\n          src="https://pbs.twimg.com/profile_images/1238749114348662784/p9hc5fuP_400x400.jpg"\n          onClick={(e) => console.log(e)}\n        />\n      </Badge>\n      <Badge color="primary" anchor="top-left" variant="counter" count={7}>\n        <Avatar\n          src="https://pbs.twimg.com/profile_images/1238749114348662784/p9hc5fuP_400x400.jpg"\n          onClick={(e) => console.log(e)}\n        />\n      </Badge>\n    </React.Fragment>\n  );\n};\n\nexport default App;\n')),Object(a.b)("h2",{id:"badge-counter-with-icon"},"Badge Counter With Icon"),Object(a.b)(c.d,{color:"secondary",variant:"counter",count:0,mdxType:"Badge"},Object(a.b)(c.o,{mdxType:"IconButton"},"email")),Object(a.b)(c.d,{color:"primary",anchor:"top-right",variant:"counter",count:7,mdxType:"Badge"},Object(a.b)(c.o,{mdxType:"IconButton"},"email")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/App.js"',title:'"src/App.js"'},'import { Badge, IconButton } from "stoned";\nimport "stoned/dist/index.css";\n\nconst App = () => {\n  return (\n    <React.Fragment>\n      <Badge color="secondary" variant="counter" count={0}>\n        <IconButton>email</IconButton>\n      </Badge>\n      <Badge color="primary" anchor="top-right" variant="counter" count={7}>\n        <IconButton>email</IconButton>\n      </Badge>\n    </React.Fragment>\n  );\n};\n\nexport default App;\n')),Object(a.b)("h2",{id:"badge-with-activity-status"},"Badge With Activity Status"),Object(a.b)(c.d,{status_badge:!0,mdxType:"Badge"},Object(a.b)(c.c,{src:"https://pbs.twimg.com/profile_images/1238749114348662784/p9hc5fuP_400x400.jpg",onClick:e=>console.log(e),mdxType:"Avatar"})),Object(a.b)(c.d,{status_badge:!0,anchor:"bottom-left",mdxType:"Badge"},Object(a.b)(c.c,{src:"https://pbs.twimg.com/profile_images/1238749114348662784/p9hc5fuP_400x400.jpg",onClick:e=>console.log(e),mdxType:"Avatar"})),Object(a.b)(c.d,{status_badge:!0,anchor:"top-left",mdxType:"Badge"},Object(a.b)(c.c,{src:"https://pbs.twimg.com/profile_images/1238749114348662784/p9hc5fuP_400x400.jpg",onClick:e=>console.log(e),mdxType:"Avatar"})),Object(a.b)(c.d,{status_badge:!0,anchor:"bottom-right",mdxType:"Badge"},Object(a.b)(c.c,{src:"https://pbs.twimg.com/profile_images/1238749114348662784/p9hc5fuP_400x400.jpg",onClick:e=>console.log(e),mdxType:"Avatar"})),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/App.js"',title:'"src/App.js"'},'import { Badge, Avatar } from "stoned";\nimport "stoned/dist/index.css";\n\nconst App = () => {\n  return (\n    <React.Fragment>\n      <Badge status_badge>\n        <Avatar\n          src="https://pbs.twimg.com/profile_images/1238749114348662784/p9hc5fuP_400x400.jpg"\n          onClick={(e) => console.log(e)}\n        />\n      </Badge>\n      <Badge status_badge anchor="bottom-left">\n        <Avatar\n          src="https://pbs.twimg.com/profile_images/1238749114348662784/p9hc5fuP_400x400.jpg"\n          onClick={(e) => console.log(e)}\n        />\n      </Badge>\n      <Badge status_badge anchor="top-left">\n        <Avatar\n          src="https://pbs.twimg.com/profile_images/1238749114348662784/p9hc5fuP_400x400.jpg"\n          onClick={(e) => console.log(e)}\n        />\n      </Badge>\n      <Badge status_badge anchor="bottom-right">\n        <Avatar\n          src="https://pbs.twimg.com/profile_images/1238749114348662784/p9hc5fuP_400x400.jpg"\n          onClick={(e) => console.log(e)}\n        />\n      </Badge>\n    </React.Fragment>\n  );\n};\n\nexport default App;\n')))}d.isMDXComponent=!0}}]);