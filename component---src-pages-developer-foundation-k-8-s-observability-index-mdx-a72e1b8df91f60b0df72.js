(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{"013z":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("NmYn"),c=n.n(o),b=n("Wbzz"),i=n("Xrax"),s=n("k4MR"),l=n("TSYQ"),p=n.n(l),m=n("QH2O"),u=n.n(m),d=n("qKvR"),g=function(e){var t,n=e.title,a=e.theme,r=e.tabs,o=void 0===r?[]:r;return Object(d.b)("div",{className:p()(u.a.pageHeader,(t={},t[u.a.withTabs]=o.length,t[u.a.darkMode]="dark"===a,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:u.a.text},n)))))},O=n("BAC9"),j=function(e){var t=e.relativePagePath,n=e.repository,a=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,r=n||a,o=r.baseUrl,c=r.subDirectory,i=o+"/edit/"+r.branch+c+"/src/pages"+t;return o?Object(d.b)("div",{className:"bx--row "+O.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:O.link,href:i},"Edit this page on GitHub"))):null},h=n("FCXl"),f=n("dI71"),N=n("I8xM"),x=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.tabs,a=e.slug,r=a.split("/").filter(Boolean).slice(-1)[0],o=n.map((function(e){var t,n=c()(e,{lower:!0,strict:!0}),o=n===r,i=new RegExp(r+"/?(#.*)?$"),s=a.replace(i,n);return Object(d.b)("li",{key:e,className:p()((t={},t[N.selectedItem]=o,t),N.listItem)},Object(d.b)(b.Link,{className:N.link,to:""+s},e))}));return Object(d.b)("div",{className:N.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",{"aria-label":t},Object(d.b)("ul",{className:N.list},o))))))},t}(r.a.Component),v=n("MjG9"),y=n("CzIb"),T=n("Asxa"),k=n("OIbQ"),P=n.n(k),w=function(e){var t=e.date,n=new Date(t);return t?Object(d.b)(T.c,{className:P.a.row},Object(d.b)(T.a,null,Object(d.b)("div",{className:P.a.text},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,n=e.children,a=e.location,r=e.Title,o=t.frontmatter,l=void 0===o?{}:o,p=t.relativePagePath,m=t.titleType,u=l.tabs,O=l.title,f=l.theme,N=l.description,T=l.keywords,k=l.date,P=Object(y.a)().interiorTheme,C=Object(b.useStaticQuery)("2456312558").site.pathPrefix,L=C?a.pathname.replace(C,""):a.pathname,I=u?L.split("/").filter(Boolean).slice(-1)[0]||c()(u[0],{lower:!0}):"",A=f||P;return Object(d.b)(s.a,{tabs:u,homepage:!1,theme:A,pageTitle:O,pageDescription:N,pageKeywords:T,titleType:m},Object(d.b)(g,{title:r?Object(d.b)(r,null):O,label:"label",tabs:u,theme:A}),u&&Object(d.b)(x,{title:O,slug:L,tabs:u,currentTab:I}),Object(d.b)(v.a,{padded:!0},n,Object(d.b)(j,{relativePagePath:p}),Object(d.b)(w,{date:k})),Object(d.b)(h.a,{pageContext:t,location:a,slug:L,tabs:u,currentTab:I}),Object(d.b)(i.a,null))}},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,n){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},jZDx:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return b})),n.d(t,"default",(function(){return g}));var a=n("wx14"),r=n("zLVn"),o=(n("q1tI"),n("7ljp")),c=n("013z"),b=(n("qKvR"),{}),i=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},s=i("AnchorLinks"),l=i("AnchorLink"),p=i("Tabs"),m=i("Tab"),u={_frontmatter:b},d=c.a;function g(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)(d,Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(s,{mdxType:"AnchorLinks"},Object(o.b)(l,{mdxType:"AnchorLink"},"Liveness and Readiness Probes"),Object(o.b)(l,{mdxType:"AnchorLink"},"Container Logging"),Object(o.b)(l,{mdxType:"AnchorLink"},"Monitoring Applications"),Object(o.b)(l,{mdxType:"AnchorLink"},"Activities")),Object(o.b)("h1",null,"Liveness and Readiness Probes"),Object(o.b)("p",null,"A Probe is a diagnostic performed periodically by the kubelet on a Container. To perform a diagnostic, the kubelet calls a Handler implemented by the Container. There are three types of handlers:"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"ExecAction")),": Executes a specified command inside the Container. The diagnostic is considered successful if the command exits with a status code of 0."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"TCPSocketAction")),": Performs a TCP check against the Container’s IP address on a specified port. The diagnostic is considered successful if the port is open."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"HTTPGetAction")),": Performs an HTTP Get request against the Container’s IP address on a specified port and path. The diagnostic is considered successful if the response has a status code greater than or equal to 200 and less than 400."),Object(o.b)("p",null,"The kubelet can optionally perform and react to three kinds of probes on running Containers:"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"livenessProbe")),": Indicates whether the Container is running."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"readinessProbe")),": Indicates whether the Container is ready to service requests."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"startupProbe")),": Indicates whether the application within the Container is started."),Object(o.b)("h2",null,"Resources"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"OpenShift")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://docs.openshift.com/container-platform/4.3/applications/application-health.html"},"Application Health")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://docs.openshift.com/container-platform/4.3/cnv/cnv_logging_events_monitoring/cnv-monitoring-vm-health.html"},"Virtual Machine Health"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"IKS")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#container-probes"},"Container Probes")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-probes/"},"Configure Probes"))),Object(o.b)("h2",null,"References"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: my-pod\nspec:\n  containers:\n  - name: app\n    image: busybox\n    command: ['sh', '-c', \"echo Hello, Kubernetes! && sleep 3600\"]\n    livenessProbe:\n      exec:\n        command: ['echo','alive']\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: my-pod\nspec:\n  shareProcessNamespace: true\n  containers:\n  - name: app\n    image: bitnami/nginx\n    ports:\n    - containerPort: 8080\n    livenessProbe:\n      tcpSocket:\n        port: 8080\n      initialDelaySeconds: 10\n    readinessProbe:\n      httpGet:\n        path: /\n        port: 8080\n      periodSeconds: 10\n")),Object(o.b)("h1",null,"Container Logging"),Object(o.b)("p",null,"Application and systems logs can help you understand what is happening inside your cluster. The logs are particularly useful for debugging problems and monitoring cluster activity."),Object(o.b)("p",null,"Kubernetes provides no native storage solution for log data, but you can integrate many existing logging solutions into your Kubernetes cluster."),Object(o.b)("h2",null,"Resources"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"OpenShift")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://docs.openshift.com/container-platform/4.3/cli_reference/openshift_cli/developer-cli-commands.html#logs"},"Logs Command")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://docs.openshift.com/container-platform/4.3/logging/cluster-logging.html"},"Cluster Logging")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://docs.openshift.com/container-platform/4.3/logging/config/cluster-logging-collector.html"},"Logging Collector"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"IKS")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/cluster-administration/logging/"},"Logging"))),Object(o.b)("h2",null,"References"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: counter\nspec:\n  containers:\n  - name: count\n    image: busybox\n    command: ['sh','-c','i=0; while true; do echo \"$i: $(date)\"; i=$((i+1)); sleep 5; done']\n")),Object(o.b)(p,{mdxType:"Tabs"},Object(o.b)(m,{label:"OpenShift",mdxType:"Tab"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," Get Logs ")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"oc logs\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," Use Stern to View Logs ")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"brew install stern\nstern . -n default\n"))),Object(o.b)(m,{label:"IKS",mdxType:"Tab"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," Get Logs ")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"kubectl logs\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," Use Stern to View Logs ")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"brew install stern\nstern . -n default\n")))),Object(o.b)("h1",null,"Monitoring Applications"),Object(o.b)("p",null,"To scale an application and provide a reliable service, you need to understand how the application behaves when it is deployed. You can examine application performance in a Kubernetes cluster by examining the containers, pods, services, and the characteristics of the overall cluster. Kubernetes provides detailed information about an application’s resource usage at each of these levels. This information allows you to evaluate your application’s performance and where bottlenecks can be removed to improve overall performance."),Object(o.b)("p",null,"Prometheus, a CNCF project, can natively monitor Kubernetes, nodes, and Prometheus itself."),Object(o.b)("h2",null,"Resources"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"OpenShift")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://docs.openshift.com/container-platform/4.3/applications/application-health.html"},"Monitoring Application Health")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://docs.openshift.com/container-platform/4.3/monitoring/monitoring-your-own-services.html"},"Monitoring Services")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://docs.openshift.com/container-platform/4.3/monitoring/exposing-custom-application-metrics-for-autoscaling.html"},"Custom Application Metrics"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"IKS")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/debug-application-cluster/resource-usage-monitoring/"},"Monitoring Resource Usage")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/debug-application-cluster/resource-metrics-pipeline/"},"Resource Metrics"))),Object(o.b)("h2",null,"References"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: 500m\nspec:\n  containers:\n  - name: app\n    image: gcr.io/kubernetes-e2e-test-images/resource-consumer:1.4\n    resources:\n      requests:\n        cpu: 700m\n        memory: 128Mi\n  - name: busybox-sidecar\n    image: radial/busyboxplus:curl\n    command: [/bin/sh, -c, 'until curl localhost:8080/ConsumeCPU -d \"millicores=500&durationSec=3600\"; do sleep 5; done && sleep 3700']\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: 200m\nspec:\n  containers:\n  - name: app\n    image: gcr.io/kubernetes-e2e-test-images/resource-consumer:1.4\n    resources:\n      requests:\n        cpu: 300m\n        memory: 64Mi\n  - name: busybox-sidecar\n    image: radial/busyboxplus:curl\n    command: [/bin/sh, -c, 'until curl localhost:8080/ConsumeCPU -d \"millicores=200&durationSec=3600\"; do sleep 5; done && sleep 3700']\n")),Object(o.b)(p,{mdxType:"Tabs"},Object(o.b)(m,{label:"OpenShift",mdxType:"Tab"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"  oc get projects\n  oc api-resources -o wide\n  oc api-resources -o name\n\n  oc get nodes,ns,po,deploy,svc\n\n  oc describe node --all\n"))),Object(o.b)(m,{label:"IKS",mdxType:"Tab"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," Verify Metrics is enabled")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"kubectl get --raw /apis/metrics.k8s.io/\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," Get Node Description ")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"kubectl describe node\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," Check Resource Useage ")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"kubectl top pods\nkubectl top nodes\n")))),Object(o.b)("h2",null,"Activities"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Task"),Object(o.b)("th",{parentName:"tr",align:null},"Description"),Object(o.b)("th",{parentName:"tr",align:"left"},"Link"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},Object(o.b)("em",{parentName:"strong"}," Try It Yourself "))),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:"left"})),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Probes"),Object(o.b)("td",{parentName:"tr",align:null},"Create some Health & Startup Probes to find what’s causing an issue."),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"../activities/labs/lab4"},"Probes"))))))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-developer-foundation-k-8-s-observability-index-mdx-a72e1b8df91f60b0df72.js.map