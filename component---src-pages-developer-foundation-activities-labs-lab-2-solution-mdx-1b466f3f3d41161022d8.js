(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NmYn"),c=a.n(o),i=a("Wbzz"),s=a("Xrax"),l=a("k4MR"),b=a("TSYQ"),d=a.n(b),m=a("QH2O"),u=a.n(m),p=a("qKvR"),x=function(e){var t,a=e.title,n=e.theme,r=e.tabs,o=void 0===r?[]:r;return Object(p.b)("div",{className:d()(u.a.pageHeader,(t={},t[u.a.withTabs]=o.length,t[u.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:u.a.text},a)))))},g=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,o=r.baseUrl,c=r.subDirectory,s=o+"/edit/"+r.branch+c+"/src/pages"+t;return o?Object(p.b)("div",{className:"bx--row "+g.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:g.link,href:s},"Edit this page on GitHub"))):null},v=a("FCXl"),j=a("dI71"),f=a("I8xM"),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=c()(e,{lower:!0,strict:!0}),o=a===r,s=new RegExp(r+"/?(#.*)?$"),l=n.replace(s,a);return Object(p.b)("li",{key:e,className:d()((t={},t[f.selectedItem]=o,t),f.listItem)},Object(p.b)(i.Link,{className:f.link,to:""+l},e))}));return Object(p.b)("div",{className:f.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:f.list},o))))))},t}(r.a.Component),T=a("MjG9"),h=a("CzIb"),w=a("Asxa"),N=a("OIbQ"),k=a.n(N),P=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(w.c,{className:k.a.row},Object(p.b)(w.a,null,Object(p.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,o=t.frontmatter,b=void 0===o?{}:o,d=t.relativePagePath,m=t.titleType,u=b.tabs,g=b.title,j=b.theme,f=b.description,w=b.keywords,N=b.date,k=Object(h.a)().interiorTheme,I=Object(i.useStaticQuery)("2456312558").site.pathPrefix,M=I?n.pathname.replace(I,""):n.pathname,E=u?M.split("/").filter(Boolean).slice(-1)[0]||c()(u[0],{lower:!0}):"",C=j||k;return Object(p.b)(l.a,{tabs:u,homepage:!1,theme:C,pageTitle:g,pageDescription:f,pageKeywords:w,titleType:m},Object(p.b)(x,{title:r?Object(p.b)(r,null):g,label:"label",tabs:u,theme:C}),u&&Object(p.b)(y,{title:g,slug:M,tabs:u,currentTab:E}),Object(p.b)(T.a,{padded:!0},a,Object(p.b)(O,{relativePagePath:d}),Object(p.b)(P,{date:N})),Object(p.b)(v.a,{pageContext:t,location:n,slug:M,tabs:u,currentTab:E}),Object(p.b)(s.a,null))}},"6XTS":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return b}));var n=a("wx14"),r=a("zLVn"),o=(a("q1tI"),a("7ljp")),c=a("013z"),i=(a("qKvR"),{}),s={_frontmatter:i},l=c.a;function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)(l,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",null,"Solution"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: yoda-service-config\ndata:\n  yoda.cfg: |-\n    yoda.baby.power=100000000\n    yoda.strength=10\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: yoda-svc\n\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: yoda-db-password\nstringData:\n  password: 0penSh1ftRul3s!\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: yoda-service\nspec:\n  serviceAccountName: yoda-svc\n  containers:\n  - name: yoda-service\n    image: bitnami/nginx\n    volumeMounts:\n      - name: config-volume\n        mountPath: /etc/yoda-service\n    env:\n    - name: DB_PASSWORD\n      valueFrom:\n        secretKeyRef:\n          name: yoda-db-password\n          key: password\n    resources:\n      requests:\n        memory: "64Mi"\n        cpu: "250m"\n      limits:\n        memory: "128Mi"\n        cpu: "500m"\n  volumes:\n  - name: config-volume\n    configMap:\n      name: yoda-service-config\n')))}b.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-developer-foundation-activities-labs-lab-2-solution-mdx-1b466f3f3d41161022d8.js.map