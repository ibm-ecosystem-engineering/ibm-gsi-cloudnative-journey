(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{"013z":function(e,t,a){"use strict";var b=a("q1tI"),n=a.n(b),r=a("NmYn"),c=a.n(r),l=a("Wbzz"),i=a("Xrax"),o=a("k4MR"),s=a("TSYQ"),j=a.n(s),O=a("QH2O"),d=a.n(O),p=a("qKvR"),m=function(e){var t,a=e.title,b=e.theme,n=e.tabs,r=void 0===n?[]:n;return Object(p.b)("div",{className:j()(d.a.pageHeader,(t={},t[d.a.withTabs]=r.length,t[d.a.darkMode]="dark"===b,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:d.a.text},a)))))},u=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,b=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||b,r=n.baseUrl,c=n.subDirectory,i=r+"/edit/"+n.branch+c+"/src/pages"+t;return r?Object(p.b)("div",{className:"bx--row "+u.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:u.link,href:i},"Edit this page on GitHub"))):null},N=a("FCXl"),h=a("9Hrx"),f=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,b=e.slug,n=b.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=c()(e,{lower:!0,strict:!0}),r=a===n,i=new RegExp(n+"/?(#.*)?$"),o=b.replace(i,a);return Object(p.b)("li",{key:e,className:j()((t={},t[f.selectedItem]=r,t),f.listItem)},Object(p.b)(l.Link,{className:f.link,to:""+o},e))}));return Object(p.b)("div",{className:f.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:f.list},r))))))},t}(n.a.Component),x=a("MjG9"),C=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,b=e.location,n=e.Title,r=t.frontmatter,s=void 0===r?{}:r,j=t.relativePagePath,O=t.titleType,d=s.tabs,u=s.title,h=s.theme,f=s.description,y=s.keywords,P=Object(C.a)().interiorTheme,T=Object(l.useStaticQuery)("2456312558").site.pathPrefix,k=T?b.pathname.replace(T,""):b.pathname,w=d?k.split("/").filter(Boolean).slice(-1)[0]||c()(d[0],{lower:!0}):"",S=h||P;return Object(p.b)(o.a,{tabs:d,homepage:!1,theme:S,pageTitle:u,pageDescription:f,pageKeywords:y,titleType:O},Object(p.b)(m,{title:n?Object(p.b)(n,null):u,label:"label",tabs:d,theme:S}),d&&Object(p.b)(v,{title:u,slug:k,tabs:d,currentTab:w}),Object(p.b)(x.a,{padded:!0},a,Object(p.b)(g,{relativePagePath:j})),Object(p.b)(N.a,{pageContext:t,location:b,slug:k,tabs:d,currentTab:w}),Object(p.b)(i.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},Vlpn:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return s}));var b=a("k1TG"),n=a("8o2o"),r=(a("q1tI"),a("7ljp")),c=a("013z"),l=(a("qKvR"),{}),i={_frontmatter:l},o=c.a;function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)(o,Object(b.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",null,"Resources"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Presentation: ",Object(r.b)("a",Object(b.a)({parentName:"li"},{href:"/ibm-gsi-cloudnative-journey/slides/03-Kubernetes-Basics.pdf"}),"Kubernetes Basics"))),Object(r.b)("h1",null,"Topics Covered"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Topics"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Link"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Core Concepts"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Covers Kubernetes Objects and Namespaces."),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"./core-concepts/"}),"Core Concepts"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Configuration"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Coveres ConfigMaps, Resource Quotas, Secrets, and Service Accounts."),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"./configuration/"}),"Configuration"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Multi-Container Pods"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Use Cases for multi container pods."),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"./multi-container-pods/"}),"Multi-Container Pods"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Observability"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Covers probes and logging for containers."),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"./observability/"}),"Observability"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Pod Design"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Covers Labels, Selectors, Deployments, and Jobs."),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"./pod-design/"}),"Pod Design"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Services and Networking"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Covers Services and Ingresses."),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"./services-networking/"}),"Services and Networking"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Troubleshooting"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Ways to troubleshoot your kubernetes."),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"./troubleshooting/"}),"Troubleshooting"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"State Persistence"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Covering Volumes and Persistence Volumes."),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"./state-persistence/"}),"State Persistence"))))),Object(r.b)("h1",null,"Activities"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Topics"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Link"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Pod Creation"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Covers the topics in the ",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"./core-concepts/"}),"Core Concepts")," page."),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"./activities/labs/lab1"}),"Pod Creation"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Pod Configuration"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Covers the topics in the ",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"./configuration/"}),"Configuration")," page."),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"./activities/labs/lab2"}),"Pod Configuration"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Multiple Containers"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Covers the topics in the ",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"./multi-container-pods/"}),"Multi-Container Pods")," page."),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"./activities/labs/lab3"}),"Multiple Containers"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Probes"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Covers the topics in the ",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"./observability/"}),"Observability")," page."),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"./activities/labs/lab4"}),"Probes"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Rolling Updates Lab"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Covers the topics in the ",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"./pod-design/"}),"Pod Design")," page."),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"./activities/labs/lab6"}),"Rolling Updates"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Cron Jobs Lab"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Covers the topics in the ",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"./pod-design#jobs-and-cronjobs"}),"Pod Design Jobs")," section."),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"./activities/labs/lab7"}),"Crons Jobs"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Creating Services"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Covers the topics in the ",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"./services-networking/"}),"Services")," page."),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"./activities/labs/lab8"}),"Setting up Services"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Debugging"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Covers the topics in the ",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"./troubleshooting/"})," Troubleshooting")," page."),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"./activities/labs/lab5"}),"Debugging"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Setting up Persistent Volumes"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Covers the topics in the ",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"./state-persistence/"}),"State Persistence")," page."),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"./activities/labs/lab10"}),"Setting up Persistent Volumes"))))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-developer-foundation-k-8-s-overview-index-mdx-15cbba02aafa3b8f99db.js.map