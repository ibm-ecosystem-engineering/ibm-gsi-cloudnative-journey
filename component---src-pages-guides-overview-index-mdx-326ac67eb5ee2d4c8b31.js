(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),o=a("NmYn"),r=a.n(o),l=a("Wbzz"),s=a("Xrax"),c=a("k4MR"),b=a("TSYQ"),d=a.n(b),u=a("QH2O"),p=a.n(u),m=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,i=e.tabs,o=void 0===i?[]:i;return Object(m.b)("div",{className:d()(p.a.pageHeader,(t={},t[p.a.withTabs]=o.length,t[p.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.a.text},a)))))},h=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,o=i.baseUrl,r=i.subDirectory,s=o+"/edit/"+i.branch+r+"/src/pages"+t;return o?Object(m.b)("div",{className:"bx--row "+h.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:h.link,href:s},"Edit this page on GitHub"))):null},v=a("FCXl"),j=a("dI71"),x=a("I8xM"),O=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),o=a===i,s=new RegExp(i+"/?(#.*)?$"),c=n.replace(s,a);return Object(m.b)("li",{key:e,className:d()((t={},t[x.selectedItem]=o,t),x.listItem)},Object(m.b)(l.Link,{className:x.link,to:""+c},e))}));return Object(m.b)("div",{className:x.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:x.list},o))))))},t}(i.a.Component),y=a("MjG9"),T=a("CzIb"),w=a("Asxa"),A=a("OIbQ"),N=a.n(A),P=function(e){var t=e.date,a=new Date(t);return t?Object(m.b)(w.c,{className:N.a.row},Object(m.b)(w.a,null,Object(m.b)("div",{className:N.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,o=t.frontmatter,b=void 0===o?{}:o,d=t.relativePagePath,u=t.titleType,p=b.tabs,h=b.title,j=b.theme,x=b.description,w=b.keywords,A=b.date,N=Object(T.a)().interiorTheme,M=Object(l.useStaticQuery)("2456312558").site.pathPrefix,k=M?n.pathname.replace(M,""):n.pathname,E=p?k.split("/").filter(Boolean).slice(-1)[0]||r()(p[0],{lower:!0}):"",C=j||N;return Object(m.b)(c.a,{tabs:p,homepage:!1,theme:C,pageTitle:h,pageDescription:x,pageKeywords:w,titleType:u},Object(m.b)(g,{title:i?Object(m.b)(i,null):h,label:"label",tabs:p,theme:C}),p&&Object(m.b)(O,{title:h,slug:k,tabs:p,currentTab:E}),Object(m.b)(y.a,{padded:!0},a,Object(m.b)(f,{relativePagePath:d}),Object(m.b)(P,{date:A})),Object(m.b)(v.a,{pageContext:t,location:n,slug:k,tabs:p,currentTab:E}),Object(m.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},WMRA:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a("wx14"),i=a("zLVn"),o=(a("q1tI"),a("7ljp")),r=a("013z"),l=a("T0C+"),s=(a("qKvR"),{}),c={_frontmatter:s},b=r.a;function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)(b,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",null,"Overview"),Object(o.b)("p",null,"The ",Object(o.b)(l.a,{name:"env",mdxType:"Globals"})," contains a number of popular and proven open source tools for developing cloud-native applications and deploying them to Kubernetes and Red Hat OpenShift. This section will help you understand what each tool does and how it helps you prepare you application code for production delivery."),Object(o.b)("h2",null,"Tools Configurations"),Object(o.b)("p",null,"The tools have been installed and configured in the cluster that is the foundation of your ",Object(o.b)(l.a,{name:"env",mdxType:"Globals"}),". This is a popular approach that Red Hat and other vendors are following. There are some andvantages and disadvantages. The upside is that you can get started quickly and you are only incurring the cost of the managed cluster. The downside is that you need to monitor them and manage them. The cool thing is that IBM Cloud has an amazing ",Object(o.b)("a",{parentName:"p",href:"/ibm-gsi-cloudnative-journey/developer-intermediate/monitoring"},"monitoring solution")," that can be configure to alert you of issues. More about that in the Guides."),Object(o.b)("p",null,"Note: As the industry moves to full lifecycle operators this will be the case."),Object(o.b)("p",null,"The tools are installed into a ",Object(o.b)("strong",{parentName:"p"},"tools")," namespace and have a number of ",Object(o.b)("em",{parentName:"p"},"ConfigMaps")," and ",Object(o.b)("em",{parentName:"p"},"Secrets")," defined to make it easy for the tools to access and communicate with the underlying ",Object(o.b)("strong",{parentName:"p"},"IBM Cloud")," services."),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"61.11111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsTAAALEwEAmpwYAAADA0lEQVQozx2SWW/bVhSE+bMLF/ZT0T50BYrWRVGkTVI4aWy0sKPGjWRZjjZKpLWYWqldIsNFW+VS95KXy5lCnpczT4PvDEaiUGC8Y5BdD4gCLEtvgThAUdth4XDEUUCb7RaMB4vr0y8+1VJnaGqtpNfuUznzju4vX1K+XCFLPqea/IGkQAhY+wDjfYgoDOHNuuDMw8xiWG72EMGeDJfDbS+My19PT1pKGb2+noxHE5ILH1DJXkNRVZitApRyARLrVhG1yyB/D7Y0wcMEnHN4bA/GGYQQRETww9j48/vPT/S7FIa9XjI1liTfpqmXu6KJYZGz2lCt3iDJnldgrzRE5ghO9hVWvsBBy9IVmDlCRKA4ChElyeKP578cN0p36GpaMp2bVMhloeT+Qbvbg2ksoCgKJMubwzYKoL0Hn4CgrwMExJuP8HdrBGFIIAIPI+Pv069ODPUWM9tMesMJKbk0jNwlHMvGdrvFw0MTUpgA+44Krt0htqeY/n6OmPNDJuKE4Ps+RVEEJMnis5cvjl8X89Aa9aTb7tDb2ywuqhUM+zpG4zFKpRKkwOf4LwqxW3Th9RWwMAATPrxQ4JEzcMYoThIgjBYnZ8+P/+q3MDONRPg+FdQazqvX0PT34Eyg1WpBikNAd4oYrO4RH14tvMHdpIuvB228mvYPdR5gEYLmV19+c/RwlcJDt5MM+zqlbm5wdvsezboKXR8gn89DEoHAo/cv1ts1PMbhWlOYronZ0oAzmz8ROnsPCTC/+O6Ho0G5is3jKpk2OaXlKi4qZex6c0xsG5rWgsQYw8p1oc8s1HtjbPkc5q6DyVYFchWMhzr9NO4eIOepZ98eVd+9QbXWSJRqhbKZGyreZEmWZapWZEqn0yQdNnaQCENw34fvMwQigC98CM4RCkHbx91TYObFj0fDZg0ffVBHacDdcViFAvaWjfXSwEDvQxqNRrBtG67rwnUduI4Lx3HgHK775Ml1HKzXq8XPz377JFcootFo+Op9Pag3mqJSLolarSZU9V5kMhnxP4E6VbF+f2i/AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Provisioned environment",title:"Provisioned environment",src:"/ibm-gsi-cloudnative-journey/static/e5aec92abf9e0fe5a3af33f60f343880/3cbba/catalyst-provisioned-environment.png",srcSet:["/ibm-gsi-cloudnative-journey/static/e5aec92abf9e0fe5a3af33f60f343880/7fc1e/catalyst-provisioned-environment.png 288w","/ibm-gsi-cloudnative-journey/static/e5aec92abf9e0fe5a3af33f60f343880/a5df1/catalyst-provisioned-environment.png 576w","/ibm-gsi-cloudnative-journey/static/e5aec92abf9e0fe5a3af33f60f343880/3cbba/catalyst-provisioned-environment.png 1152w","/ibm-gsi-cloudnative-journey/static/e5aec92abf9e0fe5a3af33f60f343880/90155/catalyst-provisioned-environment.png 1375w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(o.b)("h3",null,"Guides"),Object(o.b)("p",null,"The Guides explain how to create and deploy applications using CI pipeline (",Object(o.b)("a",{parentName:"p",href:"/ibm-gsi-cloudnative-journey/guides/continuous-integration"},"Jenkins"),", ",Object(o.b)("a",{parentName:"p",href:"/ibm-gsi-cloudnative-journey/guides/continuous-integration-tekton"},"Tekton"),", etc.). They help explain how to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Integrate code analysis into your applications with ",Object(o.b)("a",{parentName:"li",href:"/ibm-gsi-cloudnative-journey/developer-intermediate/code-analysis"},"SonarQube")),Object(o.b)("li",{parentName:"ul"},"Move applications into test, staging, and production using continuous deployment techniques with ",Object(o.b)("a",{parentName:"li",href:"/ibm-gsi-cloudnative-journey/developer-intermediate/artifact-management"},"Artifactory")," and ",Object(o.b)("a",{parentName:"li",href:"/ibm-gsi-cloudnative-journey/guides/continuous-delivery"},"ArgoCD")),Object(o.b)("li",{parentName:"ul"},"And much more")))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-overview-index-mdx-326ac67eb5ee2d4c8b31.js.map