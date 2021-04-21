(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{91:function(a,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return p})),t.d(e,"metadata",(function(){return d})),t.d(e,"toc",(function(){return l})),t.d(e,"SpacedList",(function(){return c})),t.d(e,"StackedList",(function(){return m})),t.d(e,"default",(function(){return h}));var n=t(3),s=t(0),i=t.n(s),r=t(102),o=t(104);t(56);const p={sidebar_position:18},d={unversionedId:"components/List",id:"components/List",isDocsHomePage:!1,title:"List",description:"Spaced List",source:"@site/docs/components/List.mdx",sourceDirName:"components",slug:"/components/List",permalink:"/stoned-docs/docs/components/List",editUrl:"https://github.com/whoadarshpandya/stoned-docs/tree/main/docs/components/List.mdx",version:"current",sidebarPosition:18,frontMatter:{sidebar_position:18},sidebar:"tutorialSidebar",previous:{title:"Card",permalink:"/stoned-docs/docs/components/Card"},next:{title:"About",permalink:"/stoned-docs/docs/about"}},l=[{value:"Spaced List",id:"spaced-list",children:[]},{value:"Stacked List",id:"stacked-list",children:[]}],c=()=>{const[a]=Object(s.useState)([{profle_url:"https://filmspell.com/wp-content/uploads/2019/03/Manoj-Bajpayee-Sardar-Khan-Gangs-of-Wasseypur-I-2012-420x280.jpg",name:"Sardar Khan",dialogue:"hazrat hazrat hazrat"},{profle_url:"https://www.india.com/wp-content/uploads/2014/01/ramadhir-singh.jpg",name:"Ramadhir Singh",dialogue:"saale sanp ko paal rahe the"},{profle_url:"https://images.firstpost.com/wp-content/uploads/2020/06/jaideep-ahlawat-640.jpg?impolicy=website&width=1200&height=800",name:"Shahid Khan",dialogue:"harami man sala mane kaise"}]);return Object(r.b)("div",{className:"centerAlign"},Object(r.b)(o.q,{elevation:6,mdxType:"List"},Object(r.b)(i.a.Fragment,null,Object(r.b)(o.w,{variant:"body1",muted:!0,mdxType:"Typography"},"GOW Fans"),a.map((({dialogue:a,name:e,profle_url:t})=>Object(r.b)(o.r,{key:e,mdxType:"ListItem"},Object(r.b)(i.a.Fragment,null,Object(r.b)("div",{className:"user-datta"},Object(r.b)(o.c,{size:"small",src:t,mdxType:"Avatar"}),Object(r.b)("div",{className:"user-detail"},Object(r.b)(o.w,{variant:"body1",mdxType:"Typography"},e),Object(r.b)(o.w,{variant:"body2",muted:!0,mdxType:"Typography"},a))),Object(r.b)("div",null,Object(r.b)(o.o,{size:"small",mdxType:"IconButton"},"delete")))))))))},m=()=>{const[a]=Object(s.useState)([{profle_url:"https://filmspell.com/wp-content/uploads/2019/03/Manoj-Bajpayee-Sardar-Khan-Gangs-of-Wasseypur-I-2012-420x280.jpg",name:"Sardar Khan",dialogue:"hazrat hazrat hazrat"},{profle_url:"https://www.india.com/wp-content/uploads/2014/01/ramadhir-singh.jpg",name:"Ramadhir Singh",dialogue:"saale sanp ko paal rahe the"},{profle_url:"https://images.firstpost.com/wp-content/uploads/2020/06/jaideep-ahlawat-640.jpg?impolicy=website&width=1200&height=800",name:"Shahid Khan",dialogue:"harami man sala mane kaise"}]);return Object(r.b)("div",{className:"centerAlign"},Object(r.b)(o.q,{elevation:6,mdxType:"List"},Object(r.b)(i.a.Fragment,null,Object(r.b)(o.w,{variant:"body1",muted:!0,mdxType:"Typography"},"GOW Fans"),a.map((({dialogue:a,name:e,profle_url:t})=>Object(r.b)(i.a.Fragment,{key:e},Object(r.b)(o.r,{key:e,mdxType:"ListItem"},Object(r.b)(i.a.Fragment,null,Object(r.b)("div",{className:"user-datta"},Object(r.b)(o.c,{size:"small",src:t,mdxType:"Avatar"}),Object(r.b)("div",{className:"user-detail"},Object(r.b)(o.w,{variant:"body1",mdxType:"Typography"},e),Object(r.b)(o.w,{variant:"body2",muted:!0,mdxType:"Typography"},a))),Object(r.b)("div",null,Object(r.b)(o.o,{size:"small",mdxType:"IconButton"},"share")))),Object(r.b)(o.k,{mdxType:"Divider"})))))))},u={toc:l,SpacedList:c,StackedList:m};function h({components:a,...e}){return Object(r.b)("wrapper",Object(n.a)({},u,e,{components:a,mdxType:"MDXLayout"}),Object(r.b)("br",null),Object(r.b)("h2",{id:"spaced-list"},"Spaced List"),Object(r.b)(c,{mdxType:"SpacedList"}),Object(r.b)("br",null),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/App.js"',title:'"src/App.js"'},'import { useState } from "react";\nimport { List, ListItem, Avatar, IconButton, Typography } from "stoned";\nimport "stoned/dist/index.css";\n\nconst App = () => {\n  const [data] = useState([\n    {\n      profle_url:\n        "https://filmspell.com/wp-content/uploads/2019/03/Manoj-Bajpayee-Sardar-Khan-Gangs-of-Wasseypur-I-2012-420x280.jpg",\n      name: "Sardar Khan",\n      dialogue: "hazrat hazrat hazrat",\n    },\n    {\n      profle_url:\n        "https://www.india.com/wp-content/uploads/2014/01/ramadhir-singh.jpg",\n      name: "Ramadhir Singh",\n      dialogue: "saale sanp ko paal rahe the",\n    },\n    {\n      profle_url:\n        "https://images.firstpost.com/wp-content/uploads/2020/06/jaideep-ahlawat-640.jpg?impolicy=website&width=1200&height=800",\n      name: "Shahid Khan",\n      dialogue: "harami man sala mane kaise",\n    },\n  ]);\n  return (\n    <div className="centerAlign">\n      <List elevation={6}>\n        <>\n          <Typography variant="body1" muted>\n            GOW Fans\n          </Typography>\n          {data.map(({ dialogue, name, profle_url }) => (\n            <ListItem key={name}>\n              <>\n                <div className="user-datta">\n                  <Avatar size="small" src={profle_url} />\n                  <div className="user-detail">\n                    <Typography variant="body1">{name}</Typography>\n                    <Typography variant="body2" muted>\n                      {dialogue}\n                    </Typography>\n                  </div>\n                </div>\n                <div>\n                  <IconButton size="small">delete</IconButton>\n                </div>\n              </>\n            </ListItem>\n          ))}\n        </>\n      </List>\n    </div>\n  );\n};\n\nexport default App;\n')),Object(r.b)("h2",{id:"stacked-list"},"Stacked List"),Object(r.b)(m,{mdxType:"StackedList"}),Object(r.b)("br",null),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/App.js"',title:'"src/App.js"'},'import { useState } from "react";\nimport {\n  List,\n  ListItem,\n  Divider,\n  Avatar,\n  IconButton,\n  Typography,\n} from "stoned";\nimport "stoned/dist/index.css";\n\nconst App = () => {\n  const [data] = useState([\n    {\n      profle_url:\n        "https://filmspell.com/wp-content/uploads/2019/03/Manoj-Bajpayee-Sardar-Khan-Gangs-of-Wasseypur-I-2012-420x280.jpg",\n      name: "Sardar Khan",\n      dialogue: "hazrat hazrat hazrat",\n    },\n    {\n      profle_url:\n        "https://www.india.com/wp-content/uploads/2014/01/ramadhir-singh.jpg",\n      name: "Ramadhir Singh",\n      dialogue: "saale sanp ko paal rahe the",\n    },\n    {\n      profle_url:\n        "https://images.firstpost.com/wp-content/uploads/2020/06/jaideep-ahlawat-640.jpg?impolicy=website&width=1200&height=800",\n      name: "Shahid Khan",\n      dialogue: "harami man sala mane kaise",\n    },\n  ]);\n  return (\n    <div className="centerAlign">\n      <List elevation={6}>\n        <>\n          <Typography variant="body1" muted>\n            GOW Fans\n          </Typography>\n          {data.map(({ dialogue, name, profle_url }) => (\n            <React.Fragment key={name}>\n              <ListItem key={name}>\n                <>\n                  <div className="user-datta">\n                    <Avatar size="small" src={profle_url} />\n                    <div className="user-detail">\n                      <Typography variant="body1">{name}</Typography>\n                      <Typography variant="body2" muted>\n                        {dialogue}\n                      </Typography>\n                    </div>\n                  </div>\n                  <div>\n                    <IconButton size="small">share</IconButton>\n                  </div>\n                </>\n              </ListItem>\n              <Divider />\n            </React.Fragment>\n          ))}\n        </>\n      </List>\n    </div>\n  );\n};\n\nexport default App;\n')))}h.isMDXComponent=!0}}]);