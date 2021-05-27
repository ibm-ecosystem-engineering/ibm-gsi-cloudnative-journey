(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("NmYn"),l=a.n(r),o=a("Wbzz"),b=a("Xrax"),s=a("k4MR"),c=a("TSYQ"),p=a.n(c),u=a("QH2O"),d=a.n(u),m=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,i=e.tabs,r=void 0===i?[]:i;return Object(m.b)("div",{className:p()(d.a.pageHeader,(t={},t[d.a.withTabs]=r.length,t[d.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:d.a.text},a)))))},h=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,r=i.baseUrl,l=i.subDirectory,b=r+"/edit/"+i.branch+l+"/src/pages"+t;return r?Object(m.b)("div",{className:"bx--row "+h.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:h.link,href:b},"Edit this page on GitHub"))):null},j=a("FCXl"),f=a("dI71"),N=a("I8xM"),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),r=a===i,b=new RegExp(i+"/?(#.*)?$"),s=n.replace(b,a);return Object(m.b)("li",{key:e,className:p()((t={},t[N.selectedItem]=r,t),N.listItem)},Object(m.b)(o.Link,{className:N.link,to:""+s},e))}));return Object(m.b)("div",{className:N.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:N.list},r))))))},t}(i.a.Component),v=a("MjG9"),x=a("CzIb"),w=a("Asxa"),C=a("OIbQ"),A=a.n(C),T=function(e){var t=e.date,a=new Date(t);return t?Object(m.b)(w.c,{className:A.a.row},Object(m.b)(w.a,null,Object(m.b)("div",{className:A.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,r=t.frontmatter,c=void 0===r?{}:r,p=t.relativePagePath,u=t.titleType,d=c.tabs,h=c.title,f=c.theme,N=c.description,w=c.keywords,C=c.date,A=Object(x.a)().interiorTheme,k=Object(o.useStaticQuery)("2456312558").site.pathPrefix,D=k?n.pathname.replace(k,""):n.pathname,G=d?D.split("/").filter(Boolean).slice(-1)[0]||l()(d[0],{lower:!0}):"",I=f||A;return Object(m.b)(s.a,{tabs:d,homepage:!1,theme:I,pageTitle:h,pageDescription:N,pageKeywords:w,titleType:u},Object(m.b)(g,{title:i?Object(m.b)(i,null):h,label:"label",tabs:d,theme:I}),d&&Object(m.b)(y,{title:h,slug:D,tabs:d,currentTab:G}),Object(m.b)(v.a,{padded:!0},a,Object(m.b)(O,{relativePagePath:p}),Object(m.b)(T,{date:C})),Object(m.b)(j.a,{pageContext:t,location:n,slug:D,tabs:d,currentTab:G}),Object(m.b)(b.a,null))}},"7gCa":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return u}));var n,i=a("wx14"),r=a("zLVn"),l=(a("q1tI"),a("7ljp")),o=a("013z"),b=(a("qKvR"),{}),s=(n="Globals",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",e)}),c={_frontmatter:b},p=o.a;function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)(p,Object(i.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"What is GitOps?"),Object(l.b)("p",null,"GitOps in short is a set of practices to use Git pull requests to manage infrastructure and application configurations. Git repository in GitOps is considered the only source of truth and contains the entire state of the system so that the trail of changes to the system state are visible and auditable."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Traceability of changes in GitOps is no novelty in itself as this approach is almost universally employed for the application source code. However GitOps advocates applying the same principles (reviews, pull requests, tagging, etc) to infrastructure and application\nconfiguration so that teams can benefit from the same assurance as they do for the application source code."),Object(l.b)("li",{parentName:"ul"},"Although there is no precise definition or agreed upon set of rules, the following principles are an approximation of what constitutes a GitOps practice:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Declarative description of the system is stored in Git (configs, monitoring, etc)"),Object(l.b)("li",{parentName:"ul"},"Changes to the state are made via pull requests"),Object(l.b)("li",{parentName:"ul"},"Git push reconciled with the state of the running system with the state in the Git repository")))),Object(l.b)("h3",null,"CI/CD integration"),Object(l.b)("p",null,"For the full end-to-end build and delivery process, both the CI and CD pipelines are required. For this to work, a Git repo is used to convey the configuration values. Within the ",Object(l.b)(s,{name:"env",mdxType:"Globals"}),", we have used certain naming conventions to streamline and simplify the untegration between the various components."),Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"878px"}},"\n      ",Object(l.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"37.5%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsTAAALEwEAmpwYAAACJklEQVQoz22QX2jTUBjFT2oq/gNB9NEyYXtx6mAoUxB1iKAPglXEB50PvohQYStTGIpIGVJb0oHFwTaQvjTr30lAwaqbo9iBIJKHdl2xbVw0S7I2Scma1125Y5M9+MGPy4V7znfuASEElMsDg3j+7AmCwZcYGRlhOI5zJRIJ8DzfOTU1xcXj8dF8Ph9OJZMXtjQU//CwKxaLMZFIxBWNRhlEnz4+9Tn7HsBB0Dl+ogdut3vjsSRJaLfbFxcXF0mhUCCiKJLlZblYWsjfrHz7em4ysYDA6CjS6TTGx8fBcRzwo7lWJR2XXAB2bbITwB4Ae+kCr9fbEQqFrgiCcDqRfXvm+7uZsx9kw5lV7C+7j04eeDjk7w4Gg51+v7/b5/N14c2Skul6sHSsUPw9bTZ1uV6XllZWVlYrlUqSmns8nn0AWJq43VxFjRCkfhmDY6J1+1W2fN+2W0TXdaJpGlFVleAkcIgKDMMYchznk2VZWcdxPqqq+oImpEYAGHo2G40Bw7QGFEJgEILsTOqIbduPqLbVag1pmubH1Y3merC96C3C4fB+RVFu5XK5w/Req9XqiqL8JM0/mC3X3MlMGmu2DV3X0Wg0oGkacO3GdQZsHzVgtlhfX2fn5+dRLBb7ZFkmkiTdo4aCINzhef7uZtcIjb1mLNOkv2NN02QVRWFRLpdRKpUgiiKq1Soymcy/hIFAoHNubm56YmLi/Pbkvb29O/r7+/G/+QvxI1wlHi5T8AAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(l.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Argo CD config",title:"Argo CD config",src:"/ibm-gsi-cloudnative-journey/static/0789e6678ead40eb9998920e51e542a6/33b5e/CI_CD-pipelines.png",srcSet:["/ibm-gsi-cloudnative-journey/static/0789e6678ead40eb9998920e51e542a6/7fc1e/CI_CD-pipelines.png 288w","/ibm-gsi-cloudnative-journey/static/0789e6678ead40eb9998920e51e542a6/a5df1/CI_CD-pipelines.png 576w","/ibm-gsi-cloudnative-journey/static/0789e6678ead40eb9998920e51e542a6/33b5e/CI_CD-pipelines.png 878w"],sizes:"(max-width: 878px) 100vw, 878px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(l.b)("p",null,"The naming components are:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"app repo")," - The name of the Git repository for the application"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"git org")," - The name of the GitHub organization for the application’s repo"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"tag")," - The build version"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"chart version")," - The version of the Helm chart"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"region")," - The geographic location in IBM Cloud")),Object(l.b)("p",null,"The derived names are:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"GitHub application path: ",Object(l.b)("inlineCode",{parentName:"li"},"github.com/{git org}/{app repo}")),Object(l.b)("li",{parentName:"ul"},"CI Pipeline name: ",Object(l.b)("inlineCode",{parentName:"li"},"{git org}.{app repo}")),Object(l.b)("li",{parentName:"ul"},"Docker image’s path: ",Object(l.b)("inlineCode",{parentName:"li"},"{region}.icr.io/{git org}/{app repo}:{tag}")," in the ",Object(l.b)("a",{parentName:"li",href:"/ibm-gsi-cloudnative-journey/guides/image-registry"},"Image Registry")),Object(l.b)("li",{parentName:"ul"},"Helm chart’s path: ",Object(l.b)("inlineCode",{parentName:"li"},"generic-local/{git org}/{app repo}-{tag}-{chart version}.tgz")," in the ",Object(l.b)("a",{parentName:"li",href:"/ibm-gsi-cloudnative-journey/guides/artifact-management"},"Helm Repository")),Object(l.b)("li",{parentName:"ul"},"Dependencies filename: ",Object(l.b)("inlineCode",{parentName:"li"},"{app repo}/requirements.yaml")," in the GitOps repo"),Object(l.b)("li",{parentName:"ul"},"CD Pipeline name: ",Object(l.b)("inlineCode",{parentName:"li"},"{app repo}"))),Object(l.b)("h2",null,"Resources"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Presentation: ",Object(l.b)("a",{parentName:"li",href:"/ibm-gsi-cloudnative-journey/slides/05-Understanding-GitOps.pdf"},"Understanding GitOps"))),Object(l.b)("h2",null,"What is Argo CD"),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://argoproj.github.io/argo-cd/"},"Argo CD")," is a declarative, GitOps continuous delivery tool for Kubernetes. The deployment environment is a Kubernetes cluster or namespace, which also works for an OpenShift cluster or project. Argo CD models a collection of applications as a project and uses a Git repository to store the project’s desired state. Each application is stored as a folder in the repository, and each deployment environment is stored as a branch in the repository."),Object(l.b)("p",null,"Argo CD supports defining Kubernetes manifests in a number of ways:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"helm charts"),Object(l.b)("li",{parentName:"ul"},"kustomize"),Object(l.b)("li",{parentName:"ul"},"ksonnet"),Object(l.b)("li",{parentName:"ul"},"jsonnet"),Object(l.b)("li",{parentName:"ul"},"plain directory of yaml/json manifests")),Object(l.b)("p",null,"Argo CD synchronizes the application state with the desired state defined in Git and automates the deployment of Kubernetes resources to ensure they match."),Object(l.b)("div",{className:"gatsby-resp-iframe-wrapper",style:{paddingBottom:"75%",position:"relative",height:"0",overflow:"hidden"}}," ",Object(l.b)("iframe",{parentName:"div",src:"https://www.youtube.com/embed/KJzgwJrY-mE",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}})," "),Object(l.b)("h2",null,"Activities"),Object(l.b)("p",null,"These activites give you a chance to walkthrough building CD pipelines using ArgoCD."),Object(l.b)("p",null,"These tasks assume that you have:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Reviewed the Continuous Deployment concept page.")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Task"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:"left"},"Link"),Object(l.b)("th",{parentName:"tr",align:null},"Time"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"td"},Object(l.b)("em",{parentName:"strong"}," Walkthroughs "))),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"GitOps"),Object(l.b)("td",{parentName:"tr",align:null},"Introduction to GitOps with OpenShift"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://learn.openshift.com/introduction/gitops-introduction/"},"Learn OpenShift")),Object(l.b)("td",{parentName:"tr",align:null},"20 min")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"GitOps Multi-cluster"),Object(l.b)("td",{parentName:"tr",align:null},"Multi-cluster GitOps with OpenShift"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"https://learn.openshift.com/introduction/gitops-multicluster/"},"Learn OpenShift")),Object(l.b)("td",{parentName:"tr",align:null},"20 min")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"td"},Object(l.b)("em",{parentName:"strong"}," Try It Yourself "))),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ArgoCD Lab"),Object(l.b)("td",{parentName:"tr",align:null},"Learn how to setup ArgoCD and Deploy Application"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("a",{parentName:"td",href:"../../concepts/continuous-delivery/activities/"},"ArgoCD")),Object(l.b)("td",{parentName:"tr",align:null},"30 min")))),Object(l.b)("p",null,"Once you have completed these tasks, you will have created an ArgoCD deployment and have an understanding of Continuous Deployment."))}u.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-developer-foundation-gitops-index-mdx-2ea40bf42e963767110c.js.map