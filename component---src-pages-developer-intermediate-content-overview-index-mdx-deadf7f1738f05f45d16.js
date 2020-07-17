(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{"0HYS":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return m}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),r=a("013z"),o=a("T0C+");a("qKvR");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var i,b={},c=(i="PageDescription",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)}),s={_frontmatter:b},p=r.a;function m(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(p,l({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(c,{mdxType:"PageDescription"},Object(n.b)("p",null,"An Overview of what DevSecOps is, and how it can help you\nspeed up cloud native solution delivery")),Object(n.b)("p",null,"One of the patterns emerging with development teams is the ability to use ",Object(n.b)("a",l({parentName:"p"},{href:"https://landscape.cncf.io/"}),"CNCF Tools")," as part of a more open multicloud CI/CD strategy. This approach is aligning around the Kubernetes platform. The IBM Cloud supports both upstream Kubernetes for advanced cutting edge workloads and Red Hat OpenShift, the proven mutlicloud distribution of Kubernetes that can install on IBM Cloud, Azure, AWS, VMWare and on Premise and many more places. This approach removes cloud vendor lock in around CI/CD tools and enables development teams to be more flexible with the target cloud they focus on deploying and developing in."),Object(n.b)("p",null,"There are two patterns from this approach:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"There are a core set of Development Tools that are installed inside the Kubernetes environment with the use of Operators the management and support of these tools can be controlled with centralized operations teams"),Object(n.b)("li",{parentName:"ul"},"Integration of centralized operations tools like Source Code Management, Artifact Management, Image Management, Logging and Monitoring")),Object(n.b)("p",null,"This model enables agile cloud native development teams to execute quickly while also conforming to the enterprise standards required for CI/CD. This pattern also enable the reduction of costs of managing expensive centralized multi-tenant CI services and enables development teams to use a percentage of their development cluster to support CI activities. This approach with Tekton enables the centralized operations teams to impose specific pipeline tasks that need to be supported by development teams without the complex"),Object(n.b)("h3",null,"Overview"),Object(n.b)("p",null,"This short video introduces the cloud native concepts of CI/CD DevOps with ",Object(n.b)(o.a,{name:"ocp",mdxType:"Globals"}),":"),Object(n.b)("iframe",{width:"80%",height:"500",src:"https://www.youtube.com/embed/GOPWObjFTsI",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),Object(n.b)("p",null),Object(n.b)("p",null,"Each Cluster can have a selection of CNCF DevSecOps tools installed using IasC (Infrastructure As Code) using Terraform. The cluster then turns from a production state cluster into a cluster that is used for multi tenant development teams."),Object(n.b)("p",null,"The following describes the requirements:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Installation"),": Install the CNCF Tools using Terraform this create a new ",Object(n.b)(o.a,{name:"env",mdxType:"Globals"})),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Cluster"),": A ",Object(n.b)(o.a,{name:"kube",mdxType:"Globals"})," or ",Object(n.b)(o.a,{name:"ocp",mdxType:"Globals"})," cluster that both hosts the tools and itself is a deployment target for application builds"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Software Delivery Lifecycle"),": Deployment target environments that support the application development lifecycle: ",Object(n.b)("em",{parentName:"li"},"dev"),", ",Object(n.b)("em",{parentName:"li"},"test"),", and ",Object(n.b)("em",{parentName:"li"},"staging")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Backend services"),": Cloud services commonly required by cloud-native applications for monitoring, security, and persistence"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"CI/CD"),": A prebuilt, ready-to-run continuous delivery pipeline incorporating best-of-breed open source software tools supporting ",Object(n.b)("inlineCode",{parentName:"li"},"Jenkins"),", ",Object(n.b)("inlineCode",{parentName:"li"},"Tekton")," for CI and ",Object(n.b)("inlineCode",{parentName:"li"},"ArgoCD")," for CD"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},Object(n.b)(o.a,{name:"templates",mdxType:"Globals"})),": Prebuilt code templates for common application components and tasks incorporating best practices that developers can add to their codebase as needed"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Dashboard"),": Integration of the tools into the OpenShift dashboard, and a centralized developer dashboard to help developers use the environment’s capabilities")),Object(n.b)("p",null,"A core set of tools are sourced from the ",Object(n.b)("a",l({parentName:"p"},{href:"https://cloud.ibm.com/catalog?search=label%3Ahelm#software"}),"IBM Cloud Catalog")," that can be found in the ",Object(n.b)(o.a,{name:"ic",mdxType:"Globals"}),". This approach helps assemble these reliable open source development tools into an end-to-end developer experience that is fully integrated with ",Object(n.b)(o.a,{name:"ic",mdxType:"Globals"}),"’s managed container orchestration services."),Object(n.b)("p",null,"The tools can also be sourced from the ",Object(n.b)("a",l({parentName:"p"},{href:"https://operatorhub.io/"}),"Operator Hub")," and the ",Object(n.b)("a",l({parentName:"p"},{href:"https://marketplace.redhat.com/en-us"}),"Red Hat Marketplace"),". The Operations team that owns the IasC can decide the best approach to install the tools either using ",Object(n.b)("strong",{parentName:"p"},"Helm3")," or ",Object(n.b)("strong",{parentName:"p"},"Operators"),"."),Object(n.b)("p",null,"Typically a ",Object(n.b)("strong",{parentName:"p"},"Cloud System Admin")," installs and sets up a new ",Object(n.b)(o.a,{name:"env",mdxType:"Globals"}),", providing a place for the developers to start developing the ",Object(n.b)("a",l({parentName:"p"},{href:"https://www.ibm.com/garage/method/practices/think/inception/practice_minimum_viable_product"}),"minimum viable product (MVP)"),". The objective is to reduce the time required for a team to configure and prepare their development environment. The key benefit is to make the end-to-end ",Object(n.b)("a",l({parentName:"p"},{href:"https://www.ibm.com/garage/method/practices/deliver/practice_continuous_delivery/"}),"CI/CD development lifecycle")," consistent across each platform and make the out-of-the-box developer experience as simple as possible."),Object(n.b)("p",null,"The installation is performed using ",Object(n.b)("a",l({parentName:"p"},{href:"https://cloud.ibm.com/docs/terraform"}),"Terraform"),", driven by scripts with a ",Object(n.b)("a",l({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/garage-terraform-modules"}),"modular configuration")," so unneeded tools can be easily disabled or new tools added. The combination of tools selected are proven in the industry to deliver real value for modern cloud-native development."),Object(n.b)("h3",null,"Environment components"),Object(n.b)("p",null,"After installation, the ",Object(n.b)(o.a,{name:"env",mdxType:"Globals"})," consists of a set of CNCF tools installed into your nominated kubernetes cluster."),Object(n.b)("p",null,"This diagram illustrates the ",Object(n.b)(o.a,{name:"env",mdxType:"Globals"}),":"),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",l({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"61.11111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAADA0lEQVQoz0WSa2vjRhiF9Xf7A/qtFMqmTWDphZZ+aBcS6GbLlt10S1ocklhJs74psWPFkm+S7Vi2JduRLVu2JEsjjeZ0okI7cGZgYB7OO+cIjETQFy7aSw9st8W0KoKlFBVlAWcTItwFaeB7cMOocfby073Gn8e4LhSTwsdSKp4cs8Lbn9nZxSVrnB+za/GSCTRl0P0EHS/JgF5bQhSFeOh5sB0fMdmlyw2wbBnKh9evDqzHHsbjMZ2Zc1QrJVSLN2iqCrzuNeTaLQSvfYdk2EIaE4SBjyBOEfgBwoQg2O04PErBl7v2ldNvPzswKpdQGgptdoes8NcJa+U/MFXrs95wzG4+Fphgd/JY2xqIVsPs5gTriDtlKazyGcLVEyhDBowpVX49erU/6jQx1HU6t9es+PcVGlUJw9EYa2eJWq0GYbBWMV3UwcII/nYLYi+e33PXDexWNiISZ0AvJMr5Dy8OntQS2oM+lZsdVsn9juHle/T7A5imiXK5DIEkgF+7AHmsgzzNYB294aGkiDNXKQghGZCSWHl5dLh/121B1zpU62osdyWipHBD4ymsqQWpIkGIwh22YQyvc4dAu8PC2yGlFHwDibhr38+A3KryyfHh/h+DLnr9PnWXDjstlvCLdAqllcdyscbtLQcmhEGzCzCcNqKAANVTiNYjvu+3cG4Zz6gMGCXJw/tvvtsb1mW0ez1qmSOWy4vIlfJQW1VMxiYKxQKEmM88d0ZYbWxekRizrgx9auJ+YqBnmUiT5N9QwB5OPv9qb3ovw7JnVJdW7B2vzG+lMpzWEN3xCLUqD8XzfbirNf/oKZoDA248hemqmK0awJUE1Rik75bWM/Ph7U9f7+lyGYqqUqXRZvmLC1Yplth9tcbu6zITRZEJSZJkRV65Wziui623gus7mcK5jfVmk84DLwOKP37xpaHyCWwvla5vMJk76OVysLm70WMbcr0OweY1CYLgP/n+//J4sfldCgaEYdg4fP3mhW5MMDYtoml9yk+qyTKdjEa0z4OSJIn+AxcHV/ang/OxAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",l({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Provisioned CNCF Tools",title:"Provisioned CNCF Tools",src:"/ibm-gsi-cloudnative-journey/static/e5aec92abf9e0fe5a3af33f60f343880/3cbba/cncf-tools-environment.png",srcSet:["/ibm-gsi-cloudnative-journey/static/e5aec92abf9e0fe5a3af33f60f343880/7fc1e/cncf-tools-environment.png 288w","/ibm-gsi-cloudnative-journey/static/e5aec92abf9e0fe5a3af33f60f343880/a5df1/cncf-tools-environment.png 576w","/ibm-gsi-cloudnative-journey/static/e5aec92abf9e0fe5a3af33f60f343880/3cbba/cncf-tools-environment.png 1152w","/ibm-gsi-cloudnative-journey/static/e5aec92abf9e0fe5a3af33f60f343880/90155/cncf-tools-environment.png 1375w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,"The diagram shows the components in the environment: the cluster, the deployment target environments, the cloud services, and the tools."),Object(n.b)("h4",null,"Development cluster"),Object(n.b)("p",null,"The heart of the ",Object(n.b)(o.a,{key:"env",mdxType:"Globals"})," is a cluster:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"An ",Object(n.b)("a",l({parentName:"li"},{href:"https://www.ibm.com/cloud/container-service"}),Object(n.b)(o.a,{key:"iks",mdxType:"Globals"})),"\nor ",Object(n.b)("a",l({parentName:"li"},{href:"https://www.ibm.com/cloud/openshift"}),Object(n.b)(o.a,{key:"roks",mdxType:"Globals"}))," 3-node cluster"),Object(n.b)("li",{parentName:"ul"},"Cluster namespace that encapsulates the tooling installed in the cluster: ",Object(n.b)("em",{parentName:"li"},"tools")),Object(n.b)("li",{parentName:"ul"},"Cluster namespaces for deployment target environments: ",Object(n.b)("em",{parentName:"li"},"dev"),", ",Object(n.b)("em",{parentName:"li"},"test"),", and ",Object(n.b)("em",{parentName:"li"},"staging"))),Object(n.b)("p",null,"The following IBM Cloud services are created and bound to the cluster:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Capability"),Object(n.b)("th",l({parentName:"tr"},{align:"left"}),"Service"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"Logging"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),Object(n.b)("a",l({parentName:"td"},{href:"https://cloud.ibm.com/docs/services/Log-Analysis-with-LogDNA?topic=LogDNA-getting-started"}),"LogDNA Logging")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Manage app logging LogDNA")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"Monitoring"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),Object(n.b)("a",l({parentName:"td"},{href:"https://cloud.ibm.com/docs/services/Monitoring-with-Sysdig?topic=Sysdig-getting-started"}),"SysDig Monitoring")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Manage monitoring of apps with SysDig")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"AppID"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),Object(n.b)("a",l({parentName:"td"},{href:"https://cloud.ibm.com/docs/services/appid?topic=appid-service-access-management"}),"AppID Application Authentication")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Secure your apps, APIs and Kubernetes Ingress end points")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"Cloudant"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),Object(n.b)("a",l({parentName:"td"},{href:"https://www.ibm.com/cloud/cloudant"}),"Cloudant NoSQL Database")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"NoSQL Database commonly used for data persistence")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"Cloud Object Storage"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),Object(n.b)("a",l({parentName:"td"},{href:"https://cloud.ibm.com/docs/services/cloud-object-storage?topic=cloud-object-storage-getting-started"}),"Cloud Object Storage Storage")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Storage service commonly used for binary content")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"PostreSQL"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),Object(n.b)("a",l({parentName:"td"},{href:"https://www.ibm.com/cloud/learn/postgresql"}),"PostgreSQL")," (used by SonarQube)"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"SQL Database used for structure data persistence")))),Object(n.b)("h4",null,"Continuous delivery tools"),Object(n.b)("p",null,"The following best-of-breed open source software tools are installed in the cluster’s ",Object(n.b)("em",{parentName:"p"},"tools")," namespace:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Capability"),Object(n.b)("th",l({parentName:"tr"},{align:"left"}),"Tool"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Bitnami"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"Continuous Integration"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),Object(n.b)("a",l({parentName:"td"},{href:"https://jenkins.io/"}),"Jenkins CI")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Yes"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Jenkins is a common tool for Continuous Integration")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"Continuous Integration"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),Object(n.b)("a",l({parentName:"td"},{href:"https://tekton.dev/"}),"Tekton CI")),Object(n.b)("td",l({parentName:"tr"},{align:null})),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Tekton is an emerging tool for Continuous Integration with Kubernetes and OpenShift")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"Code Analysis"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),Object(n.b)("a",l({parentName:"td"},{href:"https://www.sonarqube.org/"}),"SonarQube")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Yes"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"SonarQube can scan code and display the results in a dashboard")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"Artifact and Helm Storage"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),Object(n.b)("a",l({parentName:"td"},{href:"https://jfrog.com/open-source/"}),"Artifactory")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Yes"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Artifactory is an artifact storage and Helm chart repository")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"Continuous Deployment"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),Object(n.b)("a",l({parentName:"td"},{href:"https://argoproj.github.io/argo-cd/"}),"ArgoCD")),Object(n.b)("td",l({parentName:"tr"},{align:null})),Object(n.b)("td",l({parentName:"tr"},{align:null}),"ArgoCD support Continuous Delivery with GitOps")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"Contract API Testing"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),Object(n.b)("a",l({parentName:"td"},{href:"https://docs.pact.io/"}),"Pact")),Object(n.b)("td",l({parentName:"tr"},{align:null})),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Pact enables API contract testing")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"Code Ready Workspace"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),Object(n.b)("a",l({parentName:"td"},{href:"https://developers.redhat.com/products/codeready-workspaces/overview"}),"Eclipse CHE")),Object(n.b)("td",l({parentName:"tr"},{align:null})),Object(n.b)("td",l({parentName:"tr"},{align:null}),"IDE for editing and managing code in a web browser")))),Object(n.b)("p",null,"If you want to find out more about IBM assets that help you get these common tools installed"))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-developer-intermediate-content-overview-index-mdx-deadf7f1738f05f45d16.js.map