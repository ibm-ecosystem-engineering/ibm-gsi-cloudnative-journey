(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("NmYn"),i=a.n(r),s=a("Wbzz"),l=a("Xrax"),c=a("k4MR"),b=a("TSYQ"),d=a.n(b),u=a("QH2O"),p=a.n(u),m=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,o=e.tabs,r=void 0===o?[]:o;return Object(m.b)("div",{className:d()(p.a.pageHeader,(t={},t[p.a.withTabs]=r.length,t[p.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.a.text},a)))))},h=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,r=o.baseUrl,i=o.subDirectory,l=r+"/edit/"+o.branch+i+"/src/pages"+t;return r?Object(m.b)("div",{className:"bx--row "+h.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:h.link,href:l},"Edit this page on GitHub"))):null},f=a("FCXl"),O=a("dI71"),v=a("I8xM"),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),r=a===o,l=new RegExp(o+"/?(#.*)?$"),c=n.replace(l,a);return Object(m.b)("li",{key:e,className:d()((t={},t[v.selectedItem]=r,t),v.listItem)},Object(m.b)(s.Link,{className:v.link,to:""+c},e))}));return Object(m.b)("div",{className:v.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:v.list},r))))))},t}(o.a.Component),x=a("MjG9"),w=a("CzIb"),A=a("Asxa"),N=a("OIbQ"),k=a.n(N),I=function(e){var t=e.date,a=new Date(t);return t?Object(m.b)(A.c,{className:k.a.row},Object(m.b)(A.a,null,Object(m.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,r=t.frontmatter,b=void 0===r?{}:r,d=t.relativePagePath,u=t.titleType,p=b.tabs,h=b.title,O=b.theme,v=b.description,A=b.keywords,N=b.date,k=Object(w.a)().interiorTheme,C=Object(s.useStaticQuery)("2456312558").site.pathPrefix,T=C?n.pathname.replace(C,""):n.pathname,B=p?T.split("/").filter(Boolean).slice(-1)[0]||i()(p[0],{lower:!0}):"",P=O||k;return Object(m.b)(c.a,{tabs:p,homepage:!1,theme:P,pageTitle:h,pageDescription:v,pageKeywords:A,titleType:u},Object(m.b)(g,{title:o?Object(m.b)(o,null):h,label:"label",tabs:p,theme:P}),p&&Object(m.b)(y,{title:h,slug:T,tabs:p,currentTab:B}),Object(m.b)(x.a,{padded:!0},a,Object(m.b)(j,{relativePagePath:d}),Object(m.b)(I,{date:N})),Object(m.b)(f.a,{pageContext:t,location:n,slug:T,tabs:p,currentTab:B}),Object(m.b)(l.a,null))}},"9ZV/":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return m}));var n=a("wx14"),o=a("zLVn"),r=(a("q1tI"),a("7ljp")),i=a("013z"),s=(a("qKvR"),{}),l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},c=l("ArtDirection"),b=l("Row"),d=l("Column"),u={_frontmatter:s},p=i.a;function m(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)(p,Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"To complement the IBM Cloud for Garage Development Tools this project provides\na set of ",Object(r.b)("strong",{parentName:"p"},"Code Patterns"),". These have been designed to give a production ready\nentry point for Cloud-Native development. While the use of the ",Object(r.b)("strong",{parentName:"p"},"Code Patterns\n")," is not required to be able\nto use the development tools, their use is ",Object(r.b)("strong",{parentName:"p"},"highly recommended"),"."),Object(r.b)("p",null,"There are a small number of ",Object(r.b)("strong",{parentName:"p"},"Code Pattern")," git repositories that provide\nsupport for\ndifferent\narchitecture layers of your Cloud-Native\nsolution these includes:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"User Interfaces"),Object(r.b)("li",{parentName:"ul"},"Backend for Frontends"),Object(r.b)("li",{parentName:"ul"},"Microservices")),Object(r.b)("p",null,"You can pick the ",Object(r.b)("strong",{parentName:"p"},"Code Pattern")," that best meets your requirements and it will\nseamlessly integrate\nwith the installed development tools."),Object(r.b)("p",null,"You can work with more ",Object(r.b)("a",{parentName:"p",href:"https://developer.ibm.com/patterns/"},"Code Patterns")," from\n",Object(r.b)("a",{parentName:"p",href:"https://developer.ibm.com/"},"developer.ibm.com"),".\nThese patterns can be “enabled” using the ",Object(r.b)("inlineCode",{parentName:"p"},"Bring your own code")," approach on\n",Object(r.b)("a",{parentName:"p",href:"/ibm-gsi-cloudnative-journey/resources/codepatterns-gitrepos"},"Code Patterns Docs"),".\nEven though they are “enabled” they are not optimised for production usage and do not include a number of key IBM Garage best practices.\nThey are fully open source and they can be enhanced overtime."),Object(r.b)("p",null,"You can also work with the ",Object(r.b)("strong",{parentName:"p"},"Code Patterns")," provided from the IBM Cloud\n",Object(r.b)("a",{parentName:"p",href:"https://cloud.ibm.com/developer/appservice/starter-kits"},"IBM Cloud Code Patterns")," for\nthe server side patterns you can “enabled” these using the ",Object(r.b)("inlineCode",{parentName:"p"},"Bring your own\n   code")," approach on ",Object(r.b)("a",{parentName:"p",href:"/ibm-gsi-cloudnative-journey/resources/codepatterns-gitrepos"},"Code Patterns Docs")),Object(r.b)("p",null,"There is more information below on what is included in the ",Object(r.b)("strong",{parentName:"p"},"Code Patterns"),"."),Object(r.b)(c,{mdxType:"ArtDirection"},Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"600px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAACsUlEQVQoz21SW0jTcRQ+ipWJD2IMocAwg6SkC10fImySr0FZD72oeWkUSATiBXHmLZsllZFzuuWNQWlu++nmnJtsXqZTmbv9LxtOd08fimhQoez3i80KrD74+M45Dx/nBoSQOEIIRPm4pQXUC8aE2zdvQVFBYVJ5RU2CAC2CZGEVJHM0dBp9IDY6QTJLx/KYGlkQzvvgtdYGlm0C8NssitOZx+KzDx/JAIC48oePUqL1NjWV2WWg80QGx9VXejdXaKC5Ir2dKzI4dnSa5nbo3XntKvPxmU9bAJN2c77GsnxnmxB40SVMHdFNtjcJ2jIOACTea5akyyzOkJJeJ4jxEx1DESXjIcgZJIj1E8QGCKI9ZMpJEZl9Lfxcac4CBbVSLbcuNUS7qWtuOjq1vDjV1tGRCQD7eYLeixM2eltLOYmC9mK9w4iRlcIKyoNHGS9GjA/LbS487ZjFKtZDhHqau2vkmnp+LC64kQsnAfaKZpgTvYaV7z3aJTLp/xyRmhj8RjmL+2asWLrowir3BpbTgYhIZ8NDVg8Rzziu7DIs5fH+xGeSIbFpUJ2NnKFviA2ScfdGROZYxzLKhxVsAMspLx5zBjFiPBENa8WI9hKhnsqBStV7qB4fgtrhAeC3NAO/jh8XO1A87GsY1JxSrX4kE+ubRL22SZSunZ2NMt4dsn4ybKaJ3KQmow437tRRl+BvlNwtgWtZh6Ag/3ryvcbu1CHr+hJiA1sKxv8VsYEwYoO/GAiPuULhdytrYZHO/mXARBHpgvn+fw1LS8ugrIyXEn2fyw8ke2r7tWnVbzWcKskEp7JnnFMpVnOqxGpOhUjJaf0wnSb/QZJeSgYbO/uk5f8aFpdAcVFR9LETKhoE8YX1YniGTPBUZgSBfH4XW0fmoN8Sgifd/ZB7/mx6zoVzB38CnjHBBgufWbUAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Starter Kit Architect",title:"Starter Kit Architect",src:"/ibm-gsi-cloudnative-journey/static/2897de459cc19319345ef1f909248b4a/dadad/architecture.png",srcSet:["/ibm-gsi-cloudnative-journey/static/2897de459cc19319345ef1f909248b4a/7fc1e/architecture.png 288w","/ibm-gsi-cloudnative-journey/static/2897de459cc19319345ef1f909248b4a/a5df1/architecture.png 576w","/ibm-gsi-cloudnative-journey/static/2897de459cc19319345ef1f909248b4a/dadad/architecture.png 600w"],sizes:"(max-width: 600px) 100vw, 600px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(r.b)("h2",null,"Why another Code Pattern"),Object(r.b)("p",null,"As teams have built out production solutions using IBM Kubernetes Services and RedHat OpenShift\non the IBM Cloud it has became clear that starting with a ",Object(r.b)("inlineCode",{parentName:"p"},"hello-world\n")," style code pattern slows down an agile team."),Object(r.b)("p",null,"In cases where you are learning the basic principles of Cloud-Native development with a specific language it does help\nto start with the basic principles of ",Object(r.b)("inlineCode",{parentName:"p"},"hello-world")," but when you are building production code to be used by real users\nit takes a lot of effort to industrialize this code ready for production."),Object(r.b)("p",null,"The objective of these ",Object(r.b)("em",{parentName:"p"},"Code Patterns")," is to kick off a project quickly so\nthey can reach maximum development\nvelocity in the least amount of time. To not contain any business logic and to have a set of proven opinionated\nframeworks that are commonly used in the industry this can include ",Object(r.b)("inlineCode",{parentName:"p"},"Express"),", ",Object(r.b)("inlineCode",{parentName:"p"},"React")," and testing frameworks."),Object(r.b)("p",null,"Why Code Patterns ? As the approach to Cloud-Native microservice development has evolved\na number of language frameworks have come into play, runtime configuration technologies and best practices\nto improve quality and robustness. It becomes very time consuming to create, manage and maintain these elements."),Object(r.b)(b,{mdxType:"Row"},Object(r.b)(d,{colMd:2,colLg:5,noGutterMdLeft:!0,mdxType:"Column"},Object(r.b)("p",null,"If we look at a typical Cloud-Native app, they require a number of supporting files, similar to the ones\nfound in the outer ring of this diagram. They take time to create and are only often needed for the initial\nseed of the project. Its also never clear where the documentation is for these elements and how they are work together."),Object(r.b)("p",null,"Some typical examples :"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Dockerfile"),Object(r.b)("li",{parentName:"ul"},"Helm chart"),Object(r.b)("li",{parentName:"ul"},"CI pipeline (",Object(r.b)("a",{parentName:"li",href:"/ibm-gsi-cloudnative-journey/guides/continuous-integration"},"Jenkins"),", ",Object(r.b)("a",{parentName:"li",href:"/ibm-gsi-cloudnative-journey/guides/continuous-integration-tekton"},"Tekton"),", etc.)"),Object(r.b)("li",{parentName:"ul"},"TDD Frameworks"),Object(r.b)("li",{parentName:"ul"},"Code Analysis"),Object(r.b)("li",{parentName:"ul"},"Monitoring / Logging Support"),Object(r.b)("li",{parentName:"ul"},"Cloud Service bindings and credentials"),Object(r.b)("li",{parentName:"ul"},"User Case logic UI, BFF, Microservice")),Object(r.b)("p",null,"The Code Patterns provide a key number of these supporting files and meta data\nand are tested on every code change to make sure they work with IBM\nKubernetes and IBM Red Hat OpenShift managed clusters environments.")),Object(r.b)(d,{colMd:2,colLg:6,noGutterMdLeft:!0,mdxType:"Column"},Object(r.b)(c,{mdxType:"ArtDirection"},Object(r.b)("h2",null,"Code Pattern Template"),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"400px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,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')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Initial JFrog",title:"Initial JFrog",src:"/ibm-gsi-cloudnative-journey/static/bde63977b34a0d0c34e145622ad7d218/a45af/cloudnative.png",srcSet:["/ibm-gsi-cloudnative-journey/static/bde63977b34a0d0c34e145622ad7d218/7fc1e/cloudnative.png 288w","/ibm-gsi-cloudnative-journey/static/bde63977b34a0d0c34e145622ad7d218/a45af/cloudnative.png 400w"],sizes:"(max-width: 400px) 100vw, 400px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")))),Object(r.b)("p",null,"The purpose of the Code Pattern is to provide the scaffold code for the elements outside of your working\nuse case business logic. This will then allow a developer to get started a\nlot quicker and allow you to push code regularly into your CI environment."),Object(r.b)("h2",null,"What constitutes a good code pattern"),Object(r.b)("p",null,"If you want to contribute a ",Object(r.b)("strong",{parentName:"p"},"Code Pattern")," have a look at the examples that are provided. They all have most of the\nfeatures listed below. They must be UBI (",Object(r.b)("a",{parentName:"p",href:"https://www.redhat.com/en/blog/introducing-red-hat-universal-base-image"},"Universal Base Image"),") based\nso they can run in Red Hat OpenShift as well as Kubernetes. They must have a ",Object(r.b)("inlineCode",{parentName:"p"},"Dockerfile")," that uses that UBI.\nTo make them work with continuous integration, you can provide a Jenkins or Tekton pipeline."),Object(r.b)("p",null,"Make sure there is a good use case that is repeatable in your solution architecture. Make sure the code is documented and includes a `README.md’. There is good code coverage for tests and you have integrated SonarQube code scanning on the build process.\nFinally them put in open source so other developers can enhance, improve or consume."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"README"),Object(r.b)("li",{parentName:"ul"},"License"),Object(r.b)("li",{parentName:"ul"},"Package.json"),Object(r.b)("li",{parentName:"ul"},"Use case example source code for example APIs, UIs, Dashboards, Machine learning models"),Object(r.b)("li",{parentName:"ul"},"Unit test framework"),Object(r.b)("li",{parentName:"ul"},"Pact test framework"),Object(r.b)("li",{parentName:"ul"},"Integration testing including User Experience tests"),Object(r.b)("li",{parentName:"ul"},"SonarQube scan integration"),Object(r.b)("li",{parentName:"ul"},"Dockerfile using Universal Base Image"),Object(r.b)("li",{parentName:"ul"},"Helm chart that is production ready"),Object(r.b)("li",{parentName:"ul"},"Jenkinsfile or Tekton pipeline that is production ready"),Object(r.b)("li",{parentName:"ul"},"Make it Open Source")))}m.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-resources-codepatterns-overview-index-mdx-52d9c162d01368471d8a.js.map