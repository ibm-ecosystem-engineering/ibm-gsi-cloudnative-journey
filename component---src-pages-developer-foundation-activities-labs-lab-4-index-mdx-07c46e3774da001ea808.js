(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{WXDO:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return p}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),r=n("013z");n("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s={},o={_frontmatter:s},l=r.a;function p(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(l,i({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",null,"Container Health Issues"),Object(a.b)("p",null,"The first issue is caused by application instances entering an unhealthy state and responding to user requests with error messages. Unfortunately, this state does not cause the container to stop, so the Kubernetes cluster is not able to detect this state and restart the container. Luckily, the application has an internal endpoint that can be used to detect whether or not it is healthy. This endpoint is ",Object(a.b)("inlineCode",{parentName:"p"},"/healthz")," on port ",Object(a.b)("inlineCode",{parentName:"p"},"8080"),"."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Your first task will be to ",Object(a.b)("em",{parentName:"li"},"create a probe")," to check this endpoint periodically.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"If the endpoint returns an ",Object(a.b)("strong",{parentName:"li"},"error")," or ",Object(a.b)("strong",{parentName:"li"},"fails")," to respond, the probe will detect this and the cluster will restart the container.")))),Object(a.b)("h3",null,"Container Startup Issues"),Object(a.b)("p",null,"Another issue is caused by new pods when they are starting up. The application takes a few seconds after startup before it is ready to service requests. As a result, some users are getting error message during this brief time."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"To fix this, you will need to ",Object(a.b)("em",{parentName:"p"},"create another probe"),". To detect whether the application is ",Object(a.b)("inlineCode",{parentName:"p"},"ready"),", the probe should simply make a request to the root endpoint, ",Object(a.b)("em",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"em"},"/ready"),", on port ",Object(a.b)("inlineCode",{parentName:"em"},"8080")),". If this request succeeds, then the application is ready.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Also set a ",Object(a.b)("inlineCode",{parentName:"p"},"initial delay")," of ",Object(a.b)("inlineCode",{parentName:"p"},"5 seconds")," for the probes."))),Object(a.b)("p",null,"Here is the Pod yaml file,  ",Object(a.b)("strong",{parentName:"p"},"add")," the probes, then ",Object(a.b)("strong",{parentName:"p"},"create")," the pod in the cluster to test it."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: Pod\nmetadata:\n  name: energy-shield-service\nspec:\n  containers:\n  - name: energy-shield\n    image: ibmcase/energy-shield:1\n")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-developer-foundation-activities-labs-lab-4-index-mdx-07c46e3774da001ea808.js.map