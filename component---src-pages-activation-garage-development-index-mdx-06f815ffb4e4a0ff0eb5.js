(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("NmYn"),i=a.n(r),l=a("Wbzz"),c=a("Xrax"),s=a("k4MR"),b=a("TSYQ"),d=a.n(b),u=a("QH2O"),m=a.n(u),p=a("qKvR"),x=function(e){var t,a=e.title,n=e.theme,o=e.tabs,r=void 0===o?[]:o;return Object(p.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=r.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},g=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,r=o.baseUrl,i=o.subDirectory,c=r+"/edit/"+o.branch+i+"/src/pages"+t;return r?Object(p.b)("div",{className:"bx--row "+g.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:g.link,href:c},"Edit this page on GitHub"))):null},j=a("FCXl"),O=a("dI71"),f=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),r=a===o,c=new RegExp(o+"/?(#.*)?$"),s=n.replace(c,a);return Object(p.b)("li",{key:e,className:d()((t={},t[f.selectedItem]=r,t),f.listItem)},Object(p.b)(l.Link,{className:f.link,to:""+s},e))}));return Object(p.b)("div",{className:f.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:f.list},r))))))},t}(o.a.Component),w=a("MjG9"),T=a("CzIb"),y=a("Asxa"),k=a("OIbQ"),P=a.n(k),N=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(y.c,{className:P.a.row},Object(p.b)(y.a,null,Object(p.b)("div",{className:P.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,r=t.frontmatter,b=void 0===r?{}:r,d=t.relativePagePath,u=t.titleType,m=b.tabs,g=b.title,O=b.theme,f=b.description,y=b.keywords,k=b.date,P=Object(T.a)().interiorTheme,I=Object(l.useStaticQuery)("2456312558").site.pathPrefix,M=I?n.pathname.replace(I,""):n.pathname,B=m?M.split("/").filter(Boolean).slice(-1)[0]||i()(m[0],{lower:!0}):"",C=O||P;return Object(p.b)(s.a,{tabs:m,homepage:!1,theme:C,pageTitle:g,pageDescription:f,pageKeywords:y,titleType:u},Object(p.b)(x,{title:o?Object(p.b)(o,null):g,label:"label",tabs:m,theme:C}),m&&Object(p.b)(v,{title:g,slug:M,tabs:m,currentTab:B}),Object(p.b)(w.a,{padded:!0},a,Object(p.b)(h,{relativePagePath:d}),Object(p.b)(N,{date:k})),Object(p.b)(j.a,{pageContext:t,location:n,slug:M,tabs:m,currentTab:B}),Object(p.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},ntUn:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a("wx14"),o=a("zLVn"),r=(a("q1tI"),a("7ljp")),i=a("013z"),l=a("PXik"),c=(a("qKvR"),{}),s={_frontmatter:c},b=i.a;function d(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)(b,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",null,"IBM Garage Method for Cloud"),Object(r.b)("h3",null,"(",Object(r.b)("a",{parentName:"h3",href:"https://www.ibm.com/garage/method/cloud"},"https://www.ibm.com/garage/method/cloud"),")"),Object(r.b)("p",null,"The IBM Garage Method for Cloud is IBM’s approach to enable business, development, and operations to continuously design, deliver, and validate new solutions leveraging cloud technologies. The practices and workflows provide prescriptive guidance for cloud adoption and transformation, and you can adapt them to your company’s specific cloud journey and culture."),Object(r.b)("p",null,"The Method is industry-recognized and represents a unique, holistic IBM point-of-view and describes the complete cloud adoption and transformation lifecycle with enhancements that support the enterprise at scale. The result is a method that is proven, aligned with industry best practices, and scalable to any size engagement."),Object(r.b)("p",null,"Use the following links to help you deep dive in IBM Cloud Garage development best practices"),Object(r.b)("br",null),Object(r.b)(l.a,{content:"gmd",mdxType:"ActivationPage"}))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-activation-garage-development-index-mdx-06f815ffb4e4a0ff0eb5.js.map