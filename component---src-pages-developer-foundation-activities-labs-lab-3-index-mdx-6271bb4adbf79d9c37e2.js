(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),c=a("NmYn"),b=a.n(c),r=a("Wbzz"),o=a("Xrax"),s=a("k4MR"),l=a("TSYQ"),p=a.n(l),d=a("QH2O"),m=a.n(d),g=a("qKvR"),u=function(e){var t,a=e.title,n=e.theme,i=e.tabs,c=void 0===i?[]:i;return Object(g.b)("div",{className:p()(m.a.pageHeader,(t={},t[m.a.withTabs]=c.length,t[m.a.darkMode]="dark"===n,t))},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12"},Object(g.b)("h1",{id:"page-title",className:m.a.text},a)))))},A=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(r.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,c=i.baseUrl,b=i.subDirectory,o=c+"/edit/"+i.branch+b+"/src/pages"+t;return c?Object(g.b)("div",{className:"bx--row "+A.row},Object(g.b)("div",{className:"bx--col"},Object(g.b)("a",{className:A.link,href:o},"Edit this page on GitHub"))):null},j=a("FCXl"),v=a("9Hrx"),x=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(v.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],c=a.map((function(e){var t,a=b()(e,{lower:!0,strict:!0}),c=a===i,o=new RegExp(i+"/?(#.*)?$"),s=n.replace(o,a);return Object(g.b)("li",{key:e,className:p()((t={},t[x.selectedItem]=c,t),x.listItem)},Object(g.b)(r.Link,{className:x.link,to:""+s},e))}));return Object(g.b)("div",{className:x.tabsContainer},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(g.b)("nav",{"aria-label":t},Object(g.b)("ul",{className:x.list},c))))))},t}(i.a.Component),h=a("MjG9"),f=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,c=t.frontmatter,l=void 0===c?{}:c,p=t.relativePagePath,d=t.titleType,m=l.tabs,A=l.title,v=l.theme,x=l.description,y=l.keywords,w=Object(f.a)().interiorTheme,P=Object(r.useStaticQuery)("2456312558").site.pathPrefix,C=P?n.pathname.replace(P,""):n.pathname,T=m?C.split("/").filter(Boolean).slice(-1)[0]||b()(m[0],{lower:!0}):"",k=v||w;return Object(g.b)(s.a,{tabs:m,homepage:!1,theme:k,pageTitle:A,pageDescription:x,pageKeywords:y,titleType:d},Object(g.b)(u,{title:i?Object(g.b)(i,null):A,label:"label",tabs:m,theme:k}),m&&Object(g.b)(N,{title:A,slug:C,tabs:m,currentTab:T}),Object(g.b)(h.a,{padded:!0},a,Object(g.b)(O,{relativePagePath:p})),Object(g.b)(j.a,{pageContext:t,location:n,slug:C,tabs:m,currentTab:T}),Object(g.b)(o.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},qOcC:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return m}));var n=a("k1TG"),i=a("8o2o"),c=(a("q1tI"),a("7ljp")),b=a("013z"),r=(a("qKvR"),{}),o=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(c.b)("div",t)}},s=o("Accordion"),l=o("AccordionItem"),p={_frontmatter:r},d=b.a;function m(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(c.b)(d,Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("undefined",null,Object(c.b)("div",{style:{borderBottom:"3px solid grey"}},"\n        ",Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"bx--row",style:{paddingLeft:"20px"}}),"\n            ",Object(c.b)("p",Object(n.a)({parentName:"div"},{className:"bx--col",style:{fontWeight:"bold",fontSize:"20px"}}),"HANDS ON LAB:"),Object(c.b)("p",Object(n.a)({parentName:"div"},{className:"bx--col",style:{fontSize:"20px",paddingLeft:"5px"}}),"Manage Multiple Containers"),"\n        "),"\n    "),"\n    ",Object(c.b)("div",{className:"bx--row"},"\n        ",Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"bx--col-sm-2 bx--col-md-2 bx--col-lg-2"}),"\n         ",Object(c.b)("div",Object(n.a)({parentName:"div"},{id:"slideshowNavigator",style:{fontSize:"15px",textAlign:"center",borderRight:"1px solid gray"}}),"\n            ",Object(c.b)("div",Object(n.a)({parentName:"div"},{style:{padding:"10px 0 10px 0px",width:"70px"}}),"\n                ",Object(c.b)("span",Object(n.a)({parentName:"div"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"70px"}}),"\n      ",Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAABwklEQVQ4y73UPUgcQRjG8b3bEyyCYNAgNqJGUGOTCCIo3GmjpDGIFn5gk0IrC9tUwUKEQBo/ChEEg4gognoRREUSOMUIfhSaBAkqJJiUgSSl/geegb1z4+1ZOPBjZ29v3n3nndlxnHtuYbi6htR31Xc817QtpCDpXhY4K9tqMYYtJLCEfuTqeSfabsvWBsvCPC4xghdoRC+2sYMuXOEHiv2C2psIDrHieVaDZjzSfYWC/dOLfDO02c3ivfqt+IlPiCvjQXRjGBMo86upvXmmAKa14C/q8BDlyNfLFvWf11j3C+jq+gaT6n9HTFP6hTUs4CXmMIBsnKMgddo2+qqmU6k6mtW80ErGNO3n6MCmxhzoWVKWtrOhupnt8gEl+IJqPMErzKgMCY3Z1YIlBbRTfqdB2apljgLsYQh/8Fj9KY05RVXqlG1AM9199adVN0f7b1QZP9V2KUQDTtJ9Kd8U2LSPOEYPmvBWK9+u55/15XiTurF1osogqnuzAMtaBJNlnn6Pexbmv8317MHfGPdsCdvMKn/VAkaCnDo2aJG+mjPV6UjlMNe+TE8dbz0eaNvUo9TnmHMyORPdAC+888kdDpLRNbhMVLIxMu8JAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"goal",title:"goal",src:"/ibm-gsi-cloudnative-journey/static/0b74c83c615dc5e3e6b8827061d7bf09/cf791/goal.png",srcSet:["/ibm-gsi-cloudnative-journey/static/0b74c83c615dc5e3e6b8827061d7bf09/cf791/goal.png 70w"],sizes:"(max-width: 70px) 100vw, 70px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),"\n                Problem\n            "),"\n            ",Object(c.b)("div",Object(n.a)({parentName:"div"},{style:{padding:"10px 0 10px 0px",width:"80px"}}),"\n                ",Object(c.b)("span",Object(n.a)({parentName:"div"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"70px"}}),"\n      ",Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"68.57142857142857%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAIAAACgpqunAAAACXBIWXMAAAsSAAALEgHS3X78AAACZklEQVQoz2VTS0uiYRgVhbSUcRUuWrgXMV0NamAyuDJQF6HmQsOgTSCiG/+AG0ECMUjBlbRok+BORTNiMk2dvAQtTFx5v0Rq3mrm+H1NMcxZPJzn9TvP5byvlNe/mEwms9lsOp2+/ocJAZDxeIwPfhMAoeD0/f0dyWKxGA6H0JO/4dNPPp/PSU5Gm812dHQEQsFHFxcXWq1WJpN9J6BUKk9PT1G42Ww6nU6VSvWDwM7OzsPDg91upxA4ODigPD4+crlct9t9e3t7f3+fSqUCgYBQKBQIBHw+f39/PxwO393d5XK5eDxuMBggYzAYiOhHyWazu7u73W73FwHoa7Ua0o2NDYvF8vz8XCqVMpnMy8uLw+GAZmVlBVGv1y93RkkM9vT0BGWJwM3NDTQKheLk5KRSqaA6apnNZmjodDqiTqeDQTBrKdZoNNVqFaRYLBYKBcwP8fb29vHxMcTlcvn8/ByjUqlUKA8PD+EflKPR6EOMzj8JQIm1YTvEHo8HRWHK2dkZFqbRaFgwnU6jLZRweilWq9UwttFoDAaDdruNydFZLpfDRZzgLsRicTAYvLq6SiQSJpMJl/Qlxs7I8QAwDGxARCqVSn0+HwjGvr6+RhXwaDRqNBpBMNpSnM/n0fnzMUD89vYGvrW15ff7yceDSB4mk8l/xOiMVxGJRPb29kQi0ebmJgaJxWJ4FS6Xy+v1YmYejyeRSPBgUI4c+0MMPyHgcDjw8xuB1dXVtbU1pCwWC5zJZLLZbESk6+vrVqv1S4xVYVWr1er3+7jPTqcDt1AxFApdXl7ihDzv9Xog9XodkfyTAH8AxNo1ObfV9/wAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"learn",title:"learn",src:"/ibm-gsi-cloudnative-journey/static/b4716a399947c0aad75104e6765841f6/cf791/learn.png",srcSet:["/ibm-gsi-cloudnative-journey/static/b4716a399947c0aad75104e6765841f6/cf791/learn.png 70w"],sizes:"(max-width: 70px) 100vw, 70px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),"\n               ",Object(c.b)("p",{parentName:"div"}," What you'll learn"),"\n            "),"\n            ",Object(c.b)("div",Object(n.a)({parentName:"div"},{style:{padding:"10px 0 10px 0px",width:"55px"}}),"\n                ",Object(c.b)("span",Object(n.a)({parentName:"div"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"70px"}}),"\n      ",Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACqElEQVQ4y42UO2hUQRSG7727CcRCUAvx0ViIoLB79772vXcf2WyyJIWFiihIiBaC2GlroSKiYqGNDxARRFTEJhY2glioQbQRwSiIhRHtFATXjev/3z2zmQQ35MK358ycOf/MnJkdY3i4bPTBXCbWl+inVgtNQpEwzJv5fMYi5XIh6tPj1WrJLBSyVi6Xtmir1XDRGIoZ9XrFLJVypu+78TAsWIZ8TAoCN07h0dGamcn4MbYN7WOb/Y1GtSs4Pt6IEqOGfI6TXOc49hpdOJsNrIW4vSqVSm6CHdKFqWWk035vIAYdBjNgDnwBT8EeLZ4AD2w7MQv7Dry37eR92C1KNBrIenGg5zkdzNqhJa7b9RG7LILPwTWwA6wHSXAFE/yALRnazGdRPyb+BrSPwBPxWxI7iolN4z8fYgcg+h12LRsbwE/w13VTTLwIdoEGuCp9HSR8gj9IAVVP1hHUxJ8GZ+hMMAkJf2RFn+HPw+4ENzwvElSxFNiKsqzmgWDcN7QvieAka26gc19XMNnm9lBYJp4ER2SrFJtnbWFtcBp8EO5o256A1gs6+7UVqkSe7qz47e7qEi3YbZL8ENyin8kEMelrQuNlVFCpEwXb4t9DcFr8X7Ltx0sPgxcat2BQBBvImeGWJ7UVtkVY0ZIYT98BU2Bjn5Om4Cs6B2UlUTJZuIeR2EfEcpJ0F+2vsDfBKXAbvAWBXPrXHHRIJcO/zn8GuADOgb243EPq8otoHpxHTSl2AhzHJHOAdX/GAcfkSuw2+nxB4MUqlWL0OPTZ7mbwhidvyFXYzkA67cVxVQb46tDyv8mV8TXiE0VRjIlpY+LqUER4pDeL7zsDfOv0t029gcu1x8bqXEis2Rzpbcfqvme1RUkrQY3nDorFnMnSRA+sPvNKxZYKK/sPBOxVGGyVb/cAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"faq",title:"faq",src:"/ibm-gsi-cloudnative-journey/static/2c332c190589a90f97e455e4a3e0ae1e/cf791/faq.png",srcSet:["/ibm-gsi-cloudnative-journey/static/2c332c190589a90f97e455e4a3e0ae1e/cf791/faq.png 70w"],sizes:"(max-width: 70px) 100vw, 70px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),"\n                Solution\n            "),"\n             ",Object(c.b)("div",Object(n.a)({parentName:"div"},{style:{padding:"50px 0 0px 0px",width:"55px"}}),"\n                ",Object(c.b)("span",Object(n.a)({parentName:"div"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"70px"}}),"\n      ",Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAABm0lEQVQ4y42UsUoDQRCGV01lFyxSWQQs7W0sjJAHUMgjJI2vEOuURgJ5g3SpfIIgQkihKc4HiIIpbAQhJCZ3u/4nM/I77AUPPu52b+dnZmf/de7vs0ffh+AKPIAlyMALuAWnBTFRsTLogwUIW5iAOsXvxMROwBsFbUAKvJDJXEZrOkWZ5WJrWfQlAoHEdJzROqVnsyxTZmsjpN+pZKci76AL5jJucpZ9yiyQUBChlMYz0AYlcEHzH6Ci3VxEsgpmrxLQAvuUSCL/lvK+dnI0ApXjjdgYNMCu2fvLSAVPTs5ZoG4GWjDecrxGkbhPR+lyN1WwIcE3YAqqMq5RFd4k8luaFUuozKnMncv4rmCb8vePnXjPdFGLyqyS2HGkIhVcOfFmMA6YUTfZq7nYvdlnT3GvToxuHdA2jahRmVaMqxpowMQ4oERHY0T/vBGz+36mgnUK6ooDns0B30T8ze4a2nPVkR/ziO18gb9VLG/sQexO7JHY0lxd9gpLSezINpAvx6YYPfyDIWUWvblVuCJGfxQ7qSNWktGAG8Bi3wJtBu06HPEIAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"explore",title:"explore",src:"/ibm-gsi-cloudnative-journey/static/8e3c96d1cf748f225b6236978121b65c/cf791/explore.png",srcSet:["/ibm-gsi-cloudnative-journey/static/8e3c96d1cf748f225b6236978121b65c/cf791/explore.png 70w"],sizes:"(max-width: 70px) 100vw, 70px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),"\n                Explore\n            "),"\n        "),"\n        "),"\n        ",Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"bx--col-sm-7 bx--col-md-7 bx--col-lg-7"}),"\n            ",Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"bx--row",style:{padding:"22px 10px"}}),"\n            The legacy app is hard-coded to only serve content on port 8989, but the team wants to be able to access the service using the standard port 80\n            "),"\n            ",Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"bx--row",style:{padding:"10px 0px 0px"}}),"\n            ",Object(c.b)("ul",Object(n.a)({parentName:"div"},{style:{paddingLeft:"10px"}}),"\n            ",Object(c.b)("li",{parentName:"ul"},"\n             To learn the POD, ConfigMap creation and configuration. \n            "),"\n            ",Object(c.b)("li",{parentName:"ul"},"\n             HAProxy configuration.\n            "),"\n            "),"\n           \n            "),"\n            ",Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"bx--row"}),"\n            ",Object(c.b)("ul",Object(n.a)({parentName:"div"},{style:{paddingLeft:"10px"}}),"\n            ",Object(c.b)("li",{parentName:"ul"},"Build a Kubernetes pod that runs this legacy container and uses the ambassador design pattern to expose access to the service on port 80"),"\n            ",Object(c.b)("li",{parentName:"ul"},"Create the POD and ConfigMap definition"),"\n            ",Object(c.b)("li",{parentName:"ul"},"Create the POD with ambassador container thats run on haproxy:1.7"),"\n            ",Object(c.b)("li",{parentName:"ul"},"The HAProxy configuration should be stored in a ConfigMap"),"\n            "),"\n            "),"\n            ",Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"bx--row"}),"\n            ",Object(c.b)("ul",Object(n.a)({parentName:"div"},{style:{paddingLeft:"10px"}}),"\n            ",Object(c.b)("li",{parentName:"ul"},"The Ambassador Container Pattern"),"\n            ",Object(c.b)("li",{parentName:"ul"},"Sidecar Pattern"),"\n            ",Object(c.b)("li",{parentName:"ul"},"Adapter Pattern"),"\n            "),"\n            "),"\n           \n        "),"\n         ",Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"bx--col-sm-2 bx--col-md-2 bx--col-lg-2"}),"\n            ",Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"bx--row",style:{paddingTop:"15px"}}),"\n            Difficulty Level\n            "),"\n             ",Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"bx--row",style:{paddingTop:"6px"}}),"\n            Duration\n            "),"\n        "),"\n         ",Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"bx--col-sm-1 bx--col-md-1 bx--col-lg-1"}),"\n            ",Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"bx--row",style:{fontWeight:"bold",paddingTop:"15px"}}),"\n            Beginner\n            "),"\n            ",Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"bx--row",style:{fontWeight:"bold",paddingTop:"7px"}}),"\n            25 Min\n            "),"\n        "),"\n    ")),Object(c.b)(s,{mdxType:"Accordion"},Object(c.b)(l,{title:"Multiple Containers",mdxType:"AccordionItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: vader-service-ambassador-config\ndata:\n  haproxy.cfg: |-\n    global\n        daemon\n        maxconn 256\n\n    defaults\n        mode http\n        timeout connect 5000ms\n        timeout client 50000ms\n        timeout server 50000ms\n\n    listen http-in\n        bind *:80\n        server server1 127.0.0.1:8989 maxconn 32\n")),Object(c.b)("hr",null),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"apiVersion: v1\nkind: Pod\nmetadata:\n  name: vader-service\nspec:\n  containers:\n    - name: millennium-falcon\n      image: ibmcase/millennium-falcon:1\n    - name: haproxy-ambassador\n      image: haproxy:1.7\n      ports:\n      - containerPort: 80\n      volumeMounts:\n      - name: config-volume\n        mountPath: /usr/local/etc/haproxy\n  volumes:\n  - name: config-volume\n    configMap:\n      name: vader-service-ambassador-config\n      key: vader-config-map\n")),Object(c.b)("hr",null),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"apiVersion: v1\nkind: Pod\nmetadata:\n  name: busybox\nspec:\n  containers:\n    - name: myapp-container\n      image: radial/busyboxplus:curl\n      command: ['sh', '-c', 'while true; do sleep 3600; done']\n")))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Create the ConfigMap."),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0})," oc apply -f vader-service-ambassador-config.yaml -n {DEV_NAMESPACE}\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Create the service container pod."),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0})," oc apply -f vader-service.yaml -n {DEV_NAMESPACE}\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Create the application container pod."),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0})," oc apply -f busybox.yml -n {DEV_NAMESPACE}\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Use this command to access ",Object(c.b)("inlineCode",{parentName:"p"},"vader-service")," using port 80 from within the busybox pod."),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{})," oc exec busybox -- curl $(kubectl get pod vader-service -o=custom-columns=IP:.status.podIP --no-headers):80\n")))),Object(c.b)("p",null,"If the service is working, you should get a message that the hyper drive of the millennium falcon needs repair."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Relevant Documentation:")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/cluster-administration/logging/#using-a-sidecar-container-with-the-logging-agent"}),"Kubernetes Sidecar Logging Agent")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://kubernetes.io/docs/tasks/access-application-cluster/communicate-containers-same-pod-shared-volume/"}),"Shared Volumes")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://kubernetes.io/blog/2015/06/the-distributed-system-toolkit-patterns/"}),"Distributed System Toolkit Patterns"))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-developer-foundation-activities-labs-lab-3-index-mdx-6271bb4adbf79d9c37e2.js.map