(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{RL7Z:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return c})),t.d(n,"default",(function(){return l}));t("91GP"),t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("q1tI");var r=t("7ljp"),o=t("013z");t("qKvR");function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var c={},i={_frontmatter:c},s=o.a;function l(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return Object(r.b)(s,a({},i,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",null,"Container Logging"),Object(r.b)("p",null,"Application and systems logs can help you understand what is happening inside your cluster. The logs are particularly useful for debugging problems and monitoring cluster activity."),Object(r.b)("p",null,"Kubernetes provides no native storage solution for log data, but you can integrate many existing logging solutions into your Kubernetes cluster."),Object(r.b)("h2",null,"Resources"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",a({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/cluster-administration/logging/"}),"https://kubernetes.io/docs/concepts/cluster-administration/logging/"))),Object(r.b)("h2",null,"References"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: Pod\nmetadata:\n  name: counter\nspec:\n  containers:\n  - name: count\n    image: busybox\n    command: ['sh','-c','i=0; while true; do echo \"$i: $(date)\"; i=$((i+1)); sleep 5; done']\n")),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{}),"kubectl logs\n")),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{}),"brew install stern\nstern . -n default\n")))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-developer-foundation-k-8-s-observability-logs-index-mdx-eed8507d1b24d1ba39a4.js.map