(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),o=a("NmYn"),c=a.n(o),r=a("Wbzz"),l=a("Xrax"),s=a("k4MR"),b=a("TSYQ"),p=a.n(b),d=a("QH2O"),u=a.n(d),m=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,i=e.tabs,o=void 0===i?[]:i;return Object(m.b)("div",{className:p()(u.a.pageHeader,(t={},t[u.a.withTabs]=o.length,t[u.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:u.a.text},a)))))},j=a("BAC9"),A=function(e){var t=e.relativePagePath,a=e.repository,n=Object(r.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,o=i.baseUrl,c=i.subDirectory,l=o+"/edit/"+i.branch+c+"/src/pages"+t;return o?Object(m.b)("div",{className:"bx--row "+j.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:j.link,href:l},"Edit this page on GitHub"))):null},O=a("FCXl"),x=a("9Hrx"),f=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(x.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=c()(e,{lower:!0,strict:!0}),o=a===i,l=new RegExp(i+"/?(#.*)?$"),s=n.replace(l,a);return Object(m.b)("li",{key:e,className:p()((t={},t[f.selectedItem]=o,t),f.listItem)},Object(m.b)(r.Link,{className:f.link,to:""+s},e))}));return Object(m.b)("div",{className:f.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:f.list},o))))))},t}(i.a.Component),w=a("MjG9"),h=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,o=t.frontmatter,b=void 0===o?{}:o,p=t.relativePagePath,d=t.titleType,u=b.tabs,j=b.title,x=b.theme,f=b.description,N=b.keywords,y=Object(h.a)().interiorTheme,k=Object(r.useStaticQuery)("2456312558").site.pathPrefix,T=k?n.pathname.replace(k,""):n.pathname,z=u?T.split("/").filter(Boolean).slice(-1)[0]||c()(u[0],{lower:!0}):"",P=x||y;return Object(m.b)(s.a,{tabs:u,homepage:!1,theme:P,pageTitle:j,pageDescription:f,pageKeywords:N,titleType:d},Object(m.b)(g,{title:i?Object(m.b)(i,null):j,label:"label",tabs:u,theme:P}),u&&Object(m.b)(v,{title:j,slug:T,tabs:u,currentTab:z}),Object(m.b)(w.a,{padded:!0},a,Object(m.b)(A,{relativePagePath:p})),Object(m.b)(O.a,{pageContext:t,location:n,slug:T,tabs:u,currentTab:z}),Object(m.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},Fon1:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return d}));var n,i=a("k1TG"),o=a("8o2o"),c=(a("q1tI"),a("7ljp")),r=a("013z"),l=(a("T0C+"),a("qKvR"),{}),s=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(c.b)("div",e)}),b={_frontmatter:l},p=r.a;function d(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(c.b)(p,Object(i.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)(s,{mdxType:"PageDescription"},Object(c.b)("p",null,"Application Modernization")),Object(c.b)("p",null,"Modernization allows for faster innovation while enhancing compliance and security. Common challenges:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Unique workloads and data"),Object(c.b)("li",{parentName:"ul"},"Multiple clouds and vendors"),Object(c.b)("li",{parentName:"ul"},"Connecting across clouds and data centers"),Object(c.b)("li",{parentName:"ul"},"Technology generation gap at the application level")),Object(c.b)("p",null,"Key Drivers for Customers:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Develop and deploy faster through DevOps transformation"),Object(c.b)("li",{parentName:"ul"},"Migrate existing applications with speed and quality"),Object(c.b)("li",{parentName:"ul"},"Integrate with security and governance"),Object(c.b)("li",{parentName:"ul"},"Master the multi-cloud world with visibility, “right-sized” control, and automation"),Object(c.b)("li",{parentName:"ul"},"Leverage integrated systems to be up and running in hours")),Object(c.b)("p",null,"The Process of Application Modernization:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Application Assessment\n",Object(c.b)("span",Object(i.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"846px"}}),"\n      ",Object(c.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"45.48611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAAB8ElEQVQoz3WSzWvTcBjHkyxNm7ZJmzRp3lq6wuzWwtoVmS/Yw2TSTWWbdVQQPUzYQNA6VBTZyX/Eg3oWj5715sGXm8guU+Zl/8THX5NuILjDhzx8n+f3/X3zJJIkSRRcGycoY5VL2L4T12OC6Qp+JaRarcbUajV838d1XaIoirUwDGOtXq+TTqeRQr1Mzz/HebdLL1rkoneWS+J5we3QUWeoKC6SIqMoCvHlhQJBEJwYWZY16clxX5qe26Q/fE/v2iuW1t9weeO14C1LN9+xsPqBsDVKBicHxilM08AwTAyzQBQGIm2FqZSezGlem9ndXzR2DwW/aT75Q7i9T7Z9D7UxRPEWJ4b/Q0bN57FLNmoqk2iyonFm5weN0RGzDw+ZeXBE+e5PcWMuHtCmxqkycbJjMgJZVkjrBnknwHYcgZcYKuLg/P1vdB8f0B7tM//oAO/OdxTdjQdSWgpN02KODce1SCJ6OiW7JPZYxCjYiaGasWhufaS5/YXG1mdaO1+p3f5E1pkTCSxk1fjnNWVZPqlVLYPneRSLwtCcGOaqXerrL4n6z6msvKB+fY+w/wzvylP81T301trp+xOGrutQEjssWE6iZ8X/U701JBpsEA5uUN0ckF3pk1peJn11ldRC59SPoqhp9JxJLl8km7di7S+xHvhuqgjlZAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"App",title:"App",src:"/ibm-gsi-cloudnative-journey/static/38c991757c627cbc5cf82ac8f1dfc595/bdc0b/mod-process1.png",srcSet:["/ibm-gsi-cloudnative-journey/static/38c991757c627cbc5cf82ac8f1dfc595/7fc1e/mod-process1.png 288w","/ibm-gsi-cloudnative-journey/static/38c991757c627cbc5cf82ac8f1dfc595/a5df1/mod-process1.png 576w","/ibm-gsi-cloudnative-journey/static/38c991757c627cbc5cf82ac8f1dfc595/bdc0b/mod-process1.png 846w"],sizes:"(max-width: 846px) 100vw, 846px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"IBM Accelerators for Modernization\n",Object(c.b)("span",Object(i.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"959px"}}),"\n      ",Object(c.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"48.26388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAACp0lEQVQoz0WRyU9TURSHHx1ERdQWOrzSIkpQ+lqKlA72dbBEAUFAiVJRqWiwOCFqjAN1RqPuEIwDgjYO0aDG6AKVmKCJYuIfwM4VS2Ni4sLoxs8LLFx8Ocnv5H655xxJr9ej0WgwGo04HA6sVis2mw1ZljGZzBQU2EUmY7fbsVisWE0G7JZFmI05yKaF2Ey5zMsWDq0WnU6HpMmSkCRJCKx4PB6cTidutxtFcbGi1InL5capKCjTVfSKgwlK4l0UR3dTEuukON5NrrkEjXDodHokg6WIxeYluD1eItEoqhpBDc8SVlcRDvkEftRQADVQTv6W9yxLQ/Tyb4K9v5BPwnxXclaoz0aq2rifsthWKoMx4upKoiEvUdXH6mApSkMvBckJHNvGKGp7R0XnGCuPTeFK/6Lg0E/krh9YjkKOsu2/cIW3miJFRQm34K3roqJ2HxXruvCuSWJv/4JB/EA+Aa5LUDbNBfAIlvXAooN/yRO9BWU7/wun9zeNsbwNW/MI5rpBzPVDWBszFG/KEEjeoXL7ID6BPzmM3PSA/PoM5vUZ8tYNY2l+Tk5hhKwZ4Rwkf6SOpc4g6Z6TfB5/xeDN6zzMDPHhzVMeP3tJ371RTl3N0HvtCbcfjXK4/yOtFz/Rkn5N4vRbOgcmxXSb0WqyZq+8ccdxqhraOXBllLsTkB6a5Nz9r9we/8PZV9A9Ajv6pui49Z2jL+DIMzgssjaR7brxjfRbiLX04FJKMRiMSHLhcvLyZZxrOwil7uBuPkNFy0UiqVtU7RWkruFPnKUycY5YaoD4nusi6yfUep6goLr7LnbnKrRi5OzsuUjlgSpcHhWDz4c25mduPISjqZbCxhrs66txNNSIva5FFxOPwn7mRALYRL5kQz2yqLk1q9FZTDNH0YqR/wHlwHhOElFzawAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"App2",title:"App2",src:"/ibm-gsi-cloudnative-journey/static/eab6569ad961424b2f2edc7e9ef47589/8558f/mod-process2.png",srcSet:["/ibm-gsi-cloudnative-journey/static/eab6569ad961424b2f2edc7e9ef47589/7fc1e/mod-process2.png 288w","/ibm-gsi-cloudnative-journey/static/eab6569ad961424b2f2edc7e9ef47589/a5df1/mod-process2.png 576w","/ibm-gsi-cloudnative-journey/static/eab6569ad961424b2f2edc7e9ef47589/8558f/mod-process2.png 959w"],sizes:"(max-width: 959px) 100vw, 959px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))),Object(c.b)("p",null," Step by Step Modernization process"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Source Env: Existing Application running on tradition WebSphere Application Server"),Object(c.b)("li",{parentName:"ul"},"Assessment: Transformation Advisor (Running Data Collector and Looking at Reports)"),Object(c.b)("li",{parentName:"ul"},"Mandatory Changes: Changes in the applications"),Object(c.b)("li",{parentName:"ul"},"Deploy to Container: Deploy updated Application to Openshift"),Object(c.b)("li",{parentName:"ul"},"CI-CD: Integrate with Tekton")))}d.isMDXComponent=!0},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-developer-advanced-2-appmod-overview-index-mdx-0cfd7e55f78a8c8023fd.js.map