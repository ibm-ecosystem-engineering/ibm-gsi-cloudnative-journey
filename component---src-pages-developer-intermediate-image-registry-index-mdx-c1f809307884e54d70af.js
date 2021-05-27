(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{"013z":function(e,t,a){"use strict";var i=a("q1tI"),s=a.n(i),n=a("NmYn"),o=a.n(n),r=a("Wbzz"),c=a("Xrax"),l=a("k4MR"),b=a("TSYQ"),p=a.n(b),m=a("QH2O"),g=a.n(m),u=a("qKvR"),d=function(e){var t,a=e.title,i=e.theme,s=e.tabs,n=void 0===s?[]:s;return Object(u.b)("div",{className:p()(g.a.pageHeader,(t={},t[g.a.withTabs]=n.length,t[g.a.darkMode]="dark"===i,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:g.a.text},a)))))},h=a("BAC9"),y=function(e){var t=e.relativePagePath,a=e.repository,i=Object(r.useStaticQuery)("1364590287").site.siteMetadata.repository,s=a||i,n=s.baseUrl,o=s.subDirectory,c=n+"/edit/"+s.branch+o+"/src/pages"+t;return n?Object(u.b)("div",{className:"bx--row "+h.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:h.link,href:c},"Edit this page on GitHub"))):null},f=a("FCXl"),j=a("dI71"),A=a("I8xM"),O=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,i=e.slug,s=i.split("/").filter(Boolean).slice(-1)[0],n=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),n=a===s,c=new RegExp(s+"/?(#.*)?$"),l=i.replace(c,a);return Object(u.b)("li",{key:e,className:p()((t={},t[A.selectedItem]=n,t),A.listItem)},Object(u.b)(r.Link,{className:A.link,to:""+l},e))}));return Object(u.b)("div",{className:A.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:A.list},n))))))},t}(s.a.Component),v=a("MjG9"),w=a("CzIb"),N=a("Asxa"),I=a("OIbQ"),k=a.n(I),x=function(e){var t=e.date,a=new Date(t);return t?Object(u.b)(N.c,{className:k.a.row},Object(u.b)(N.a,null,Object(u.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,s=e.Title,n=t.frontmatter,b=void 0===n?{}:n,p=t.relativePagePath,m=t.titleType,g=b.tabs,h=b.title,j=b.theme,A=b.description,N=b.keywords,I=b.date,k=Object(w.a)().interiorTheme,C=Object(r.useStaticQuery)("2456312558").site.pathPrefix,B=C?i.pathname.replace(C,""):i.pathname,T=g?B.split("/").filter(Boolean).slice(-1)[0]||o()(g[0],{lower:!0}):"",D=j||k;return Object(u.b)(l.a,{tabs:g,homepage:!1,theme:D,pageTitle:h,pageDescription:A,pageKeywords:N,titleType:m},Object(u.b)(d,{title:s?Object(u.b)(s,null):h,label:"label",tabs:g,theme:D}),g&&Object(u.b)(O,{title:h,slug:B,tabs:g,currentTab:T}),Object(u.b)(v.a,{padded:!0},a,Object(u.b)(y,{relativePagePath:p}),Object(u.b)(x,{date:I})),Object(u.b)(f.a,{pageContext:t,location:i,slug:B,tabs:g,currentTab:T}),Object(u.b)(c.a,null))}},"3ZzI":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return g}));var i,s=a("wx14"),n=a("zLVn"),o=(a("q1tI"),a("7ljp")),r=a("013z"),c=a("T0C+"),l=(a("qKvR"),{}),b=(i="PageDescription",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),p={_frontmatter:l},m=r.a;function g(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)(m,Object(s.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(b,{mdxType:"PageDescription"},Object(o.b)("p",null,"The CI/CD pipeline stores container images in an image registry")),Object(o.b)("p",null,"In IBM Garage Method, one of the Develop practices is to ",Object(o.b)("a",{parentName:"p",href:"https://www.ibm.com/garage/method/practices/deliver/practice_delivery_pipeline/"},"automate continuous delivery through a delivery pipeline"),", in part by using an artifact repository for storing output of the build stage. When hosted in IBM Cloud, the ",Object(o.b)(c.a,{name:"env",mdxType:"Globals"})," uses the IBM Cloud Container Registry for storing container images."),Object(o.b)("h2",null,"What is the IBM Cloud Container Registry"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://www.ibm.com/cloud/container-registry"},"IBM Cloud Container Registry")," is a private, multitenant ",Object(o.b)("a",{parentName:"p",href:"https://docs.docker.com/registry/"},"Docker registry")," built into IBM Cloud for storing ",Object(o.b)("a",{parentName:"p",href:"https://opencontainers.org/about/overview/"},"OCI images"),". Each IBM Cloud region hosts its own highly available registry. When deploying an application to a Kubernetes or OpenShift cluster, the cluster creates containers using the images in the registry. To package an application for deployment, the runtime must be built into an image that is stored in the registry. "),Object(o.b)("p",null,"In this standard Docker diagram, the acme.com domain is effectively an IBM Cloud region and the Docker private registry is the instance of IBM Cloud Container Registry in that region."),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"770px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"52.77777777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADS0lEQVQoz03STWzbdBjH8T8gxJ3rDhy4IS5ISFw4TUicEHBCSIhDUSWSdlu0FiSQQMBWgWCbVo21UNY2bVeyrkvb9CVd0tWkzpuTOIkTJ/FbbMexncRO14atTeIl9YPCaYfP9atH+j1o7v4esnudF/pWGwmS8mlVq83Jinarquo3VU2//pwbVVW/odca1zlemMT2H83jOO5OEMR8NBabi8eJe0ky9x66u4YhAHgRAJBeN36nihI8DGWheXh0aBiNQtM0WdM0mQHDMNhW67hA04XG7KIHQngUCJKCdJoCksxA8BE2jpaeC3Y77d/WdgmYuOU9s7odSdP0mGmaScMwEgPNpplgy0qSJDPlSxNu+8/1cG9obLI/NL3eHVv0AxPDR1Gv13+Jk/SXg+EsCsVz11xX3PD5+JTt20tUuu2TuGmapGEYZLPZTFUUNcOWlSzHlgorXp+18RCzbs8sWXdWfe2lTT+k4gnn4Lr/nTz9FzG8NLGydVCbWtrmQ5FEvlQsZiVZThqmmRgEOUGmqlotlc/Tgnt5Be6vPrAjccIWGaZXpCjwB/cvDGLjYD0bArCRpteuliVFokt8tkDnqEg0ytZVlX/aajEnT1opmhFySYrLFWhavHh1Dv5ax8Hx7RQMT6/3v1rcgVIsfBGtUjxQmmm988E3rwVCyUk8HFHoIpuhGTGjNw6VhKxDXjUhmipKq1sYt+P3l/CDkODd3O2uBQ6sm1ML1ox3u72wuQtknHCi0Z0U7PF646P3Xa9WtdpPjXqdN00zIUoKmWVEbXg7CXfzFbtQFEQskipsbPm5fzCssrDs6Xs89/obPl+vkCG7PJ0D/x42ir4Yvw0fDv/aQgghwzB+GLxHvd6IdU6fRP/2hUTH97Pg+O6OnaEFyuqcRtVak8hksuXLP7thYSsKriuz4Jjx9b9e3AE6ErqA0OufvIvOffz2YBhVq10zDKNerzdKx0eP2UAopfwy7T36cdJzHNgPqxzLSBzHlXmOrW4GcDsYz539Me89Ww7izx5gUciRaRd65Y3PEEJvIoYTESfI52VFHZMV1SnK1dGjx4dOu9f5snvacqTTmUsxIukikqRLVrSRssA7S3R+RK3KIxWOdaiieLlUrr71H5XEnEhoYYgJAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Docker Registry",title:"Docker Registry",src:"/ibm-gsi-cloudnative-journey/static/706cf51080d513375556803907eae85d/e926f/docker-registry.png",srcSet:["/ibm-gsi-cloudnative-journey/static/706cf51080d513375556803907eae85d/7fc1e/docker-registry.png 288w","/ibm-gsi-cloudnative-journey/static/706cf51080d513375556803907eae85d/a5df1/docker-registry.png 576w","/ibm-gsi-cloudnative-journey/static/706cf51080d513375556803907eae85d/e926f/docker-registry.png 770w"],sizes:"(max-width: 770px) 100vw, 770px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(o.b)("p",null,"The diagram shows these components and their relationships:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Developer")," builds the image; ideally it is automated as part of a CI pipeline"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Docker private registry")," stores the image that was built"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"UAT"),", ",Object(o.b)("strong",{parentName:"li"},"Promote"),", and ",Object(o.b)("strong",{parentName:"li"},"Production")," are deployment environments, such as Kubernetes clusters or namespaces, that run the containers based on the image")),Object(o.b)("h3",null,"Accessing the registry"),Object(o.b)("p",null,"There are two ways to work with an ",Object(o.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/services/Registry"},"IBM Cloud registry"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Web UI"),": In the IBM Cloud console, navigate to either ",Object(o.b)("strong",{parentName:"li"},"Kubernetes")," or ",Object(o.b)("strong",{parentName:"li"},"OpenShift")," and then ",Object(o.b)("strong",{parentName:"li"},"Registry")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"CLI"),": Use the ",Object(o.b)("a",{parentName:"li",href:"https://cloud.ibm.com/docs/services/Registry?topic=registry-registry_setup_cli_namespace"},"container-registry CLI plug-in")," in the IBM Cloud CLI")),Object(o.b)("p",null,"Of the two approaches, the CLI is much more powerful. The console is mainly for looking at your registry."),Object(o.b)("p",null,"To use the container-registry plug-in, or even to push an image into the registry using your local Docker install, you must first log into IBM Cloud and then log into the region’s IBM Cloud Container Registry:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ ibmcloud login\n\n$ ibmcloud cr login\n")),Object(o.b)("p",null,"The logins ",Object(o.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/services/Registry?topic=registry-iam"},"determine the namespaces you can access"),". Other accounts for other tenants also have namespaces in the registry, but IBM Cloud doesn’t let you see them and prevents you from accessing their images."),Object(o.b)("h2",null,"Registry organization"),Object(o.b)("p",null,"Like the directories and file names in a file system, a Docker registry is a single collection of images that are cataloged with hierarchical names. A Docker registry such as Docker Hub (or, as we’ll see, a registry in IBM Cloud) stores an image with a hierarchical name: namespace, repository, and tag. This path is specified when tagging and pushing the image:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ docker tag <image> <namespace>/<repo-name>:<tag>\n\n$ docker push <namespace>/<repo-name>:<tag>\n")),Object(o.b)("p",null,"To tag and push an image to any registry other than Docker Hub, you have to specify its domain as part of the path:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ docker push <domain>/<namespace>/<repo-name>:<tag>\n")),Object(o.b)("h3",null,"Registry organization in an IBM Cloud account"),Object(o.b)("p",null,"IBM’s registry organizes images in this same hierarchical structure."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Domain"),": ",Object(o.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/services/Registry?topic=registry-registry_overview#registry_regions_local"},"Each region")," in IBM Cloud (e.g. Dallas, London, Sydney, etc.) has its own multitenant registry instance with its own domain name (such as ",Object(o.b)("inlineCode",{parentName:"p"},"us.icr.io")," for Dallas/us-south). IBM provides its ",Object(o.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/services/Registry?topic=registry-public_images"},"public images")," in a global registry (domain ",Object(o.b)("inlineCode",{parentName:"p"},"icr.io")," (no region))."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Namespace"),": A namespace is associated with an IBM Cloud account and groups the account’s images. Every user in the account can view and work with all images in the namespace, but users outside of the account cannot access images in the account’s namespaces. An account may use multiple namespaces to organize images for groupings such as development vs. production or approved vs. experimental. Each namespace must have a name that is unique within a region for all accounts (not just your account)."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Repository"),": A repo is often thought of as the name of the image, but technically the same image can have different names (but the same image ID). Within a registry, different images with the same name stored in the same namespace will be stored in the same repo as long as they have different tags."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Tag"),": Optional; if a command does not specify it, the default tag is ",Object(o.b)("inlineCode",{parentName:"p"},"latest"),". Two different tags enable a namespace to store two images with different image IDs but the same repository name. The tag typically specifies a different build of an image with a different image ID. Two builds usually package two different versions of an application’s code, but Docker does not enforce that. The two builds could just be the same Dockerfile run twice with the same inputs (and therefore equivalent), or two completely unrelated sets of software. But two builds usually run software that is similar but at least slightly different, such as a new version of an application’s code, but could be simply an alternative implementation of the code (such as for A/B testing)."),Object(o.b)("p",null,"Therefore, when ",Object(o.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/services/Registry?topic=registry-getting-started#gs_registry_images_pushing"},"adding an image to a registry in IBM Cloud"),", the push command specifies the image’s hierarchical path like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"docker push <region>.icr.io/<my_namespace>/<image_repo>:<tag>\n")),Object(o.b)("p",null,"You can see this structure when you show the registry using the CLI:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ ibmcloud cr image-list\nListing images...\n\nRepository                                                Tag        Digest          Namespace           Created        Size      Security status   \nus.icr.io/showcase-dev-iks/template-graphql-typescript    1.0.0      6b3575c122e9    showcase-dev-iks    6 hours ago    303 MB    5 Issues   \nus.icr.io/showcase-dev-iks/template-graphql-typescript    1.0.0-5    6b3575c122e9    showcase-dev-iks    6 hours ago    303 MB    5 Issues   \nus.icr.io/showcase-dev-iks/template-java-spring           1.0.0      24f3cdf69605    showcase-dev-iks    7 hours ago    213 MB    No Issues \nus.icr.io/showcase-dev-iks/template-java-spring           1.0.0-14   24f3cdf69605    showcase-dev-iks    7 hours ago    213 MB    No Issues\n")),Object(o.b)("p",null,"Notice the columns labeled ",Object(o.b)("em",{parentName:"p"},"Repository")," (which is domain/namespace/repo) and ",Object(o.b)("em",{parentName:"p"},"Tag"),"—those comprise the path for finding each image. And ",Object(o.b)("em",{parentName:"p"},"Namespace")," is specified again in its own column, which is useful for filtering searches."),Object(o.b)("p",null,"You can also see that the first two items in the list are not two separate images but really the same image with two tags: the image ID (a.k.a. digest) is the same, so the two tags are two different ways to look up the same image. Likewise, the last two images are really the same image with two tags."),Object(o.b)("p",null,"The registry in the IBM Cloud console shows the same images:"),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1141px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"23.61111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA5klEQVQY032P2WoDMQxF5///sNBAmzSZxfs2tmfpKXby0L5UIC4I3auj4Xpf0DYhdcCGjI8FFwshVeK6/dspb2hX+Bg9n1PAhcLwNS48Jsm4KBZpmYRhlraHpry/jPuf/j2L645yBWlzhxisT9wngXGRXHZCKuR64mMlpCdJeBE1gwu5BzX1qaJcQhrPWg5iC9QmcrsZHrNE24AyHm09Qtl+pNSdsh3U7SDl2vfavEEs0iAegvusybXRNkKzcn1PvF0uKG2YhcT5QM4FqQ2lVp71zXmeCKmYFtHVWMskZ2aTOY6jf/EDtqB/mDjaVmMAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Registry Console",title:"Registry Console",src:"/ibm-gsi-cloudnative-journey/static/1b56b12fa78f4dfd20215937368ece2f/4e1f8/registry-console.png",srcSet:["/ibm-gsi-cloudnative-journey/static/1b56b12fa78f4dfd20215937368ece2f/7fc1e/registry-console.png 288w","/ibm-gsi-cloudnative-journey/static/1b56b12fa78f4dfd20215937368ece2f/a5df1/registry-console.png 576w","/ibm-gsi-cloudnative-journey/static/1b56b12fa78f4dfd20215937368ece2f/4e1f8/registry-console.png 1141w"],sizes:"(max-width: 1141px) 100vw, 1141px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(o.b)("p",null,"It shows more clearly that each image has two tags, rather than being two different images."),Object(o.b)("h2",null,"IBM Cloud Container Registry features"),Object(o.b)("p",null,"IBM Cloud Container Registry is not only a Docker registry hosted in IBM Cloud, it also adds several features to the registry service. The registry in each region is private, multitenant, and highly available—properties that a simple registry doesn’t have. Here are some other features and capabilities."),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/services/va"},Object(o.b)("strong",{parentName:"a"},"Vulnerability Advisor"))," scans images in the registry to search for known security issues and generates reports with advice on how to fix your images and better secure your environment. Lists of the vulnerabilities scanned for are available in ",Object(o.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/services/va?topic=va-va_index#packages"},"Vulnerable packages"),". An administrator can specify exemptions that should not be reported. Keep in mind that ",Object(o.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/services/Registry?topic=registry-registry_release_notes#27jun2019"},"running containers are not scanned"),", only the images in the registry are. In the image lists shown above, the ",Object(o.b)("em",{parentName:"p"},"Security status")," column shows the number of issues found; the report will explain them in greater detail. In the console, click on the number of issues for details."),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/services/Registry?topic=registry-registry_trustedcontent"},Object(o.b)("strong",{parentName:"a"},"Trusted content technology")),": IBM Cloud Container Registry supports images signed using ",Object(o.b)("a",{parentName:"p",href:"https://docs.docker.com/engine/security/trust/content_trust/"},"Docker Content Trust (DCT)"),". The signature confirms who built the image, such as the CI tool. The push and pull commands maintain image signatures."),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/services/Registry?topic=registry-security_enforce#security_enforce"},Object(o.b)("strong",{parentName:"a"},"Container Image Security Enforcement"))," verifies container images before deploying them to a cluster. You can control where images are deployed from, enforce Vulnerability Advisor policies, and ensure that content trust is properly applied to the image. If an image does not meet your policy requirements, the pod is not deployed to your cluster or updated."),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/services/Registry?topic=registry-iam"},Object(o.b)("strong",{parentName:"a"},"User authorization")),": While all users in an account have access to that account’s namespaces in the registry, an account administrator can use IAM to manage the access for different users. For example, a common customer concern is: “How can an administrator control which images can be downloaded from Docker Hub and deployed into production?” With IAM in the registry, an administrator can disable the ability to push, build, or delete images, then create a policy to allow these actions and only assign it to certain trusted users such as the CI pipeline’s service ID. These privileged users should only add approved images into the registry, thereby limiting the containers that the developers can deploy. The administrators can likewise limit what the CD pipeline can possibly deploy to production by creating a namespace that only includes images approved for production and restricting the CD pipeline to deploy from that namespace."),Object(o.b)("h2",null,"Image registry in the Pipeline"),Object(o.b)("p",null,"The CI and CD pipelines currently exchange two types of artifacts: Docker images and Helm charts. The CI pipeline (",Object(o.b)("a",{parentName:"p",href:"/ibm-gsi-cloudnative-journey/guides/continuous-integration"},"Jenkins"),", ",Object(o.b)("a",{parentName:"p",href:"/ibm-gsi-cloudnative-journey/guides/continuous-integration-tekton"},"Tekton"),", etc.) builds these artifacts and ArgoCD deploys them. To store and share the artifacts, the pipeline uses two repositories:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Docker images"),": This Developer Tools Image Registry"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Helm charts"),": A ",Object(o.b)("a",{parentName:"li",href:"/ibm-gsi-cloudnative-journey/developer-intermediate/artifact-management"},"Helm repository in Artifactory"))),Object(o.b)("p",null,"In the CI pipeline, the ",Object(o.b)("em",{parentName:"p"},"Build image")," stage creates the Docker image and stores it in the registry. Then the ",Object(o.b)("em",{parentName:"p"},"Deploy to DEV env")," stage specifies the image’s path in the Helm chart’s values file, which the chart will use to deploy the app. Likewise, the CD pipeline specifies the image’s registry path in the values files for the other deployments. When the Helm chart runs, it and Kubernetes read the image from the registry and start the containers."),Object(o.b)("h2",null,"Give it a try"),Object(o.b)("p",null,"Let’s take a look at using the registry."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"If you haven’t already, ",Object(o.b)("a",{parentName:"p",href:"/ibm-gsi-cloudnative-journey/developer-intermediate/deploy-app"},"deploy your first app")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"For example, deploy the ",Object(o.b)(c.a,{name:"template",mdxType:"Globals"})," named Typescript Microservice"),Object(o.b)("li",{parentName:"ul"},"I deployed my in a project named dev-guide-example-bw"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"In the IBM Cloud console, navigate to either ",Object(o.b)("strong",{parentName:"p"},"Kubernetes")," or ",Object(o.b)("strong",{parentName:"p"},"OpenShift")," and then ",Object(o.b)("strong",{parentName:"p"},"Registry")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"It doesn’t matter whether you navigate via the Kubernetes panel or the OpenShift panel, they both share the same registry"),Object(o.b)("li",{parentName:"ul"},"The registry is the IBM Cloud Container Registry for your region"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"In the registry, search for the image named for your project\n",Object(o.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA0UlEQVQY021PXW/EIAy7//8n93Db6K4tH0mAhHbyRHo6bdIerBiD7XDjariHFVsS7ElQWFFEQaKQNv4FPzF5IsVbIEdixW2KH8uG8NgdyxoRHhFrJMyy1g/UPp7zQtPzDy9iyGxecJsiScf9c8F7WCFV0fRAt283xFLBdfj2VA2ZupcV7kjUvHzy6XkF5iL4ChV7IqRC2GJGyoSuBqkdJBWFBDGTn+ddZkFcI7adoeOE2fUTD2Rp2CP7psTiZrWBcZwOG4fP39osu0oHbFxvZuAPHzGBcZD4tDwAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Registry Console Images",title:"Registry Console Images",src:"/ibm-gsi-cloudnative-journey/static/21c28717686be8acf5cc8d48180c85ea/3cbba/console-image-list.png",srcSet:["/ibm-gsi-cloudnative-journey/static/21c28717686be8acf5cc8d48180c85ea/7fc1e/console-image-list.png 288w","/ibm-gsi-cloudnative-journey/static/21c28717686be8acf5cc8d48180c85ea/a5df1/console-image-list.png 576w","/ibm-gsi-cloudnative-journey/static/21c28717686be8acf5cc8d48180c85ea/3cbba/console-image-list.png 1152w","/ibm-gsi-cloudnative-journey/static/21c28717686be8acf5cc8d48180c85ea/77a69/console-image-list.png 1155w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"In the CLI, run the corresponding command"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ ibmcloud cr image-list | grep dev-guide-example-bw\nus.icr.io/mooc-team-one/dev-guide-example-bw                 1.0.0     a2138c3025ac   mooc-team-one    4 hours ago    286 MB   5 Issues\nus.icr.io/mooc-team-one/dev-guide-example-bw                 1.0.0-1   a2138c3025ac   mooc-team-one    4 hours ago    286 MB   5 Issues\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Back in the console, click on the image to see its details\n",Object(o.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"866px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"63.541666666666664%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAACIElEQVQ4y5WSa08TQRSG9zd4iahoTIyXoIhBCShq4t9W0VDaSisVvugXCRZoabu32Zm9zc5lXzOnLcbEGDnJk7Nn5sw772aOd2vlFe6uvSUu3VvF5fvPiCsPnuPO6hvcXH6JG8svsLiyiYVHG7j99DWuLa1Tvv54A1cfrmHxySYWltYJr9npYae7j0/tPWztdPCx2cW7xi622x1sNdr40Gjh/XYL7W4Pn/f20ekdoP3lK3Z7B1S3uj2i2dkjPFsDh0cR5lHX55/Q2sBai4uEl4gM37/5SLMMEWPwgxBhHCOMYjDOwRJ+vufWHEEUww8j6nVZVhVdbIyBZ2yNMK0wYSWc2zwvwBKBopS4aFhbO4cFjk4mSNISeakx8mP0B2OkeYW8VDgdBWA8RyENeCbRPx1jHDCUlUEYcqqPhz78iFOP55oGoxBBxFFKgzBO8ePngNZEXuF4MCEB1yxmgidDH7k0YJMYh30fwyClvazQU0HXMMc5dLdnhSKckHP+t9qJ5rN6vu7RRlFCVopQStNL/w/G2CnWQsoKeVHBc27c60gpkWU5RJrR63IhwEWKhAuINCXcdyLENHNB5+ahlEJeOkFpoLRGFDMUZUmzp7Wm7A443L5z/htF2NnQ1nVNY1NIPRXUxkwFixKVUjNBTfPlLvlX1DNRaw0KqWaC2tCAul8MwgjD0QRnYx+DszGG4wkiliBO+DSzhIY9jBkZ+dOhwi8YrLXwW3m7XwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Registry Console Image Details",title:"Registry Console Image Details",src:"/ibm-gsi-cloudnative-journey/static/05cc5bf9c179b667b6689cebd71ec8d4/dc769/console-image-details.png",srcSet:["/ibm-gsi-cloudnative-journey/static/05cc5bf9c179b667b6689cebd71ec8d4/7fc1e/console-image-details.png 288w","/ibm-gsi-cloudnative-journey/static/05cc5bf9c179b667b6689cebd71ec8d4/a5df1/console-image-details.png 576w","/ibm-gsi-cloudnative-journey/static/05cc5bf9c179b667b6689cebd71ec8d4/dc769/console-image-details.png 866w"],sizes:"(max-width: 866px) 100vw, 866px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Under ",Object(o.b)("strong",{parentName:"p"},"Security Status"),", click on ",Object(o.b)("strong",{parentName:"p"},"5 issues")," to see the issues that Vulnerability Advisor found in this image"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"What it found were configuration issues\n",Object(o.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"786px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"22.22222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAu0lEQVQY012NUU7DMBBEcxFuyG04AGfgj0/u0C+EQFVT6oRWiQSx147X+1BsgaquNJqdmdVOF0Rw45mUFDNDS6koV9Ar3OrbrCvFkOSZ/YgV2LRZ4/bQapHRZvO2vHrW3D8uZnTb8vz6wP3THbMMzGHAfb+R1LOumWmacOMX/afjY39AJDIMA+fLhf7k2PfH/3zxvj08zDte3h/Jmlg1IusPWnJtzjkTYyIEwQdBVYkxVkiMLIuv7EOot7+gUDSykygEdAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Registry Console Image Issues Overview",title:"Registry Console Image Issues Overview",src:"/ibm-gsi-cloudnative-journey/static/1ff1aee2cbbf3aec4836f7712cbc25da/86c0d/console-image-issues-overview.png",srcSet:["/ibm-gsi-cloudnative-journey/static/1ff1aee2cbbf3aec4836f7712cbc25da/7fc1e/console-image-issues-overview.png 288w","/ibm-gsi-cloudnative-journey/static/1ff1aee2cbbf3aec4836f7712cbc25da/a5df1/console-image-issues-overview.png 576w","/ibm-gsi-cloudnative-journey/static/1ff1aee2cbbf3aec4836f7712cbc25da/86c0d/console-image-issues-overview.png 786w"],sizes:"(max-width: 786px) 100vw, 786px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Scroll down to see the list of configuration issues\n",Object(o.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"35.76388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsTAAALEwEAmpwYAAABOElEQVQoz1WRy27cMAxF/f//1y5SoFmkyYxtSZYo6mHLnlNIgwyQxQEfIi8voOnX219+v73z5/0D44TVCWaLA7vpoOezVZxUUmloPl6kcozeN1NMFdFCHg87opWgldV1UcWFxCaZoDuSfi5/i8f0pOdTF/p3W/j4nFmtRzTTzgfOOO6L4bbY0ddUCDERYsaL4iXhfERzHfN7uyi1MbV2EqMOgkQkRq7HgzNnokRmY/i6z3zeZm73hdu84DY/ZoMIURVNiVIr13UxHUfDbv5FH27nyS5K8GH0VmMxbsNYN6LbApoyj374vDjPc+x0c1Mv+jUv8oxBSLlwaMJvntnYp6B1rNZh3cZiLBJ1uKp1p5T6Ep/6pfuyYr2MBecDqRSqJnLun1VorQ2OHoeTZ173Hes8KWeO9nT4H4T8GmSAZuBgAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Registry Console Image Issues Config",title:"Registry Console Image Issues Config",src:"/ibm-gsi-cloudnative-journey/static/68047791a01185dd643196ef317bd0da/3cbba/console-image-issues-config.png",srcSet:["/ibm-gsi-cloudnative-journey/static/68047791a01185dd643196ef317bd0da/7fc1e/console-image-issues-config.png 288w","/ibm-gsi-cloudnative-journey/static/68047791a01185dd643196ef317bd0da/a5df1/console-image-issues-config.png 576w","/ibm-gsi-cloudnative-journey/static/68047791a01185dd643196ef317bd0da/3cbba/console-image-issues-config.png 1152w","/ibm-gsi-cloudnative-journey/static/68047791a01185dd643196ef317bd0da/6d895/console-image-issues-config.png 1209w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")))))),Object(o.b)("h2",null,"Conclusion"),Object(o.b)("p",null,"We’ve seen that the CI pipeline packages an app as a Docker image and stores it in the registry, and also builds a Helm chart that references the image in the registry so that the chart can deploy containers built from the image."),Object(o.b)("p",null,"In IBM Cloud, the registry is the IBM Cloud Container Registry. The registry displays all of the namespaces in your account but not those in other tenants’ accounts. In addition to basic registry functions, IBM Cloud adds additional features: private, multitenant, highly available, Vulnerability Advisor, Trusted content technology, Container Image Security Enforcement, and User authorization. Using the registry, you can see your list of images, details about the image, and details about any issues that Vulnerability Advisor found."))}g.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-developer-intermediate-image-registry-index-mdx-c1f809307884e54d70af.js.map