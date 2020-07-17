(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{fH9b:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return u}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),l=n("013z");n("qKvR");function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var o={},p=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",t)}},c=p("AnchorLinks"),r=p("AnchorLink"),s=p("Tabs"),m=p("Tab"),i={_frontmatter:o},d=l.a;function u(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,l={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,["components"]);return Object(a.b)(d,b({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(c,{mdxType:"AnchorLinks"},Object(a.b)(r,{mdxType:"AnchorLink"},"Labels, Selectors, and Annotations"),Object(a.b)(r,{mdxType:"AnchorLink"},"Deployments"),Object(a.b)(r,{mdxType:"AnchorLink"},"Deployments rolling updates and rollback"),Object(a.b)(r,{mdxType:"AnchorLink"},"Jobs and CronJobs"),Object(a.b)(r,{mdxType:"AnchorLink"},"Activities")),Object(a.b)("h1",null,"Labels, Selectors, and Annotations"),Object(a.b)("p",null,"Labels are key/value pairs that are attached to objects, such as pods. Labels are intended to be used to specify identifying attributes of objects that are meaningful and relevant to users, but do not directly imply semantics to the core system. Labels can be used to organize and to select subsets of objects. Labels can be attached to objects at creation time and subsequently added and modified at any time. Each object can have a set of key/value labels defined. Each Key must be unique for a given object."),Object(a.b)("p",null,"You can use Kubernetes annotations to attach arbitrary non-identifying metadata to objects. Clients such as tools and libraries can retrieve this metadata."),Object(a.b)("p",null,"You can use either labels or annotations to attach metadata to Kubernetes objects. Labels can be used to select objects and to find collections of objects that satisfy certain conditions. In contrast, annotations are not used to identify and select objects. The metadata in an annotation can be small or large, structured or unstructured, and can include characters not permitted by labels."),Object(a.b)("h2",null,"Resources"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"OpenShift")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",b({parentName:"li"},{href:"https://docs.openshift.com/enterprise/3.0/cli_reference/basic_cli_operations.html#application-modification-cli-operations"}),"CLI Label Commands"))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"IKS")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",b({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/"}),"Labels")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",b({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/"}),"Annotations"))),Object(a.b)("h2",null,"References"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-yaml"}),'apiVersion: v1\nkind: Pod\nmetadata:\n  name: my-pod\n  labels:\n    app: foo\n    tier: frontend\n    env: dev\n  annotations:\n    imageregistry: "https://hub.docker.com/"\n    gitrepo: "https://github.com/csantanapr/knative"\nspec:\n  containers:\n  - name: app\n    image: bitnami/nginx\n')),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: Pod\nmetadata:\n  name: my-pod\nspec:\n  restartPolicy: Never\n  containers:\n    - name: app\n      image: busybox\n  nodeSelector:\n    disk: ssd\n")),Object(a.b)(s,{mdxType:"Tabs"},Object(a.b)(m,{label:"OpenShift",mdxType:"Tab"},Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Change Labels on Objects ")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"oc label <objectname>\n")),Object(a.b)("p",null," ",Object(a.b)("strong",{parentName:"p"},"Getting Pods based on their labels.")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"  oc get pods --show-labels\n")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"  oc get pods -L tier,env\n")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"  oc get pods -l app\n")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"  oc get pods -l tier=frontend\n")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"  oc get pods -l 'env=dev,tier=frontend'\n")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"  oc get pods -l 'env in (dev, test)'\n")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"  oc get pods -l 'tier!=backend'\n")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"  oc get pods -l 'env,env notin (prod)'\n"))),Object(a.b)(m,{label:"IKS",mdxType:"Tab"},Object(a.b)("p",null,"  ",Object(a.b)("strong",{parentName:"p"},"Create the Pod")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"kubectl create -f pod.yaml\n")),Object(a.b)("p",null,"  ",Object(a.b)("strong",{parentName:"p"},"Update label in the YAML file and reapply it.")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"kubectl apply -f pod.yaml\n")),Object(a.b)("p",null,"  ",Object(a.b)("strong",{parentName:"p"},"You can edit the labels as well.")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"kubectl edit pod myapp-pod\n")),Object(a.b)("p",null,"  ",Object(a.b)("strong",{parentName:"p"},"Getting Pods based on their labels.")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"kubectl get pods --show-labels\n")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"kubectl get pods -L tier,env\n")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"kubectl get pods -l app\n")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"kubectl get pods -l tier=frontend\n")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"kubectl get pods -l 'env=dev,tier=frontend'\n")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"kubectl get pods -l 'env in (dev, test)'\n")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"kubectl get pods -l 'tier!=backend'\n")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"kubectl get pods -l 'env,env notin (prod)'\n")),Object(a.b)("p",null,"  ",Object(a.b)("strong",{parentName:"p"},"Delete the Pod.")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"kubectl delete pod myapp-pod\n")))),Object(a.b)("h1",null,"Deployments"),Object(a.b)("p",null,"A Deployment provides declarative updates for Pods and ReplicaSets."),Object(a.b)("p",null,"You describe a desired state in a Deployment, and the Deployment Controller changes the actual state to the desired state at a controlled rate. You can define Deployments to create new ReplicaSets, or to remove existing Deployments and adopt all their resources with new Deployments."),Object(a.b)("p",null,"The following are typical use cases for Deployments:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Create a Deployment to rollout a ReplicaSet. The ReplicaSet creates Pods in the background. Check the status of the rollout to see if it succeeds or not."),Object(a.b)("li",{parentName:"ul"},"Declare the new state of the Pods by updating the PodTemplateSpec of the Deployment. A new ReplicaSet is created and the Deployment manages moving the Pods from the old ReplicaSet to the new one at a controlled rate. Each new ReplicaSet updates the revision of the Deployment."),Object(a.b)("li",{parentName:"ul"},"Rollback to an earlier Deployment revision if the current state of the Deployment is not stable. Each rollback updates the revision of the Deployment."),Object(a.b)("li",{parentName:"ul"},"Scale up the Deployment to facilitate more load."),Object(a.b)("li",{parentName:"ul"},"Pause the Deployment to apply multiple fixes to its PodTemplateSpec and then resume it to start a new rollout."),Object(a.b)("li",{parentName:"ul"},"Use the status of the Deployment as an indicator that a rollout has stuck."),Object(a.b)("li",{parentName:"ul"},"Clean up older ReplicaSets that you don’t need anymore.")),Object(a.b)("h2",null,"Resources"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"OpenShift")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",b({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/applications/deployments/what-deployments-are.html"}),"Deployments")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",b({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/applications/deployments/managing-deployment-processes.html"}),"Managing Deployment Processes")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",b({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/applications/deployments/deployment-strategies.html"}),"DeploymentConfig Strategies")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",b({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/applications/deployments/route-based-deployment-strategies.html"}),"Route Based Deployment Strategies"))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"IKS")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",b({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"}),"Deployments")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",b({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#scaling-a-deployment"}),"Scaling Deployments"))),Object(a.b)("h2",null,"References"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-yaml"}),"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: my-deployment\n  labels:\n    app: nginx\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: bitnami/nginx:1.16.0\n        ports:\n        - containerPort: 8080\n")),Object(a.b)(s,{mdxType:"Tabs"},Object(a.b)(m,{label:"OpenShift",mdxType:"Tab"},Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Creates a Deployment ")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"oc apply -f <deploymentYAML>\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Gets Deployments ")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"oc get deploy my-deployment\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Gets the deployments description ")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"oc describe deployment my-deployment\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Edit the deployment ")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"oc edit deployment my-deployment\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Scale the deployment ")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"oc scale deployment/my-deployment --replicas=4\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Delete the deployment ")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"oc delete my-deployment\n"))),Object(a.b)(m,{label:"IKS",mdxType:"Tab"},Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Creates a Deployment ")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"kubectl apply -f <deploymentYAML>\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Get the deployment ")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"kubectl get deployment my-deployment\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Describe the deployment ")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"kubectl describe deployment my-deployment\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Edit the deployment ")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"kubectl edit deployent my-deployment\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Scale the deployment ")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"kubectl scale deployment/my-deployment --replicas=4\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Delete the deployment ")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"kubectl delete my-deployment\n")))),Object(a.b)("h1",null,"Deployments rolling updates and rollback"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Updating a Deployment"),"\nA Deployment’s rollout is triggered if and only if the Deployment’s Pod template (that is, .spec.template) is changed, for example if the labels or container images of the template are updated. Other updates, such as scaling the Deployment, do not trigger a rollout."),Object(a.b)("p",null,"Each time a new Deployment is observed by the Deployment controller, a ReplicaSet is created to bring up the desired Pods. If the Deployment is updated, the existing ReplicaSet that controls Pods whose labels match .spec.selector but whose template does not match .spec.template are scaled down. Eventually, the new ReplicaSet is scaled to .spec.replicas and all old ReplicaSets is scaled to 0."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Label selector updates"),"\nIt is generally discouraged to make label selector updates and it is suggested to plan your selectors up front. In any case, if you need to perform a label selector update, exercise great caution and make sure you have grasped all of the implications."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Rolling Back a Deployment"),"\nSometimes, you may want to rollback a Deployment; for example, when the Deployment is not stable, such as crash looping. By default, all of the Deployment’s rollout history is kept in the system so that you can rollback anytime you want (you can change that by modifying revision history limit)."),Object(a.b)("p",null,"A Deployment’s revision is created when a Deployment’s rollout is triggered. This means that the new revision is created if and only if the Deployment’s Pod template (.spec.template) is changed, for example if you update the labels or container images of the template. Other updates, such as scaling the Deployment, do not create a Deployment revision, so that you can facilitate simultaneous manual- or auto-scaling. This means that when you roll back to an earlier revision, only the Deployment’s Pod template part is rolled back."),Object(a.b)("h2",null,"Resources"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"OpenShift")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",b({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/applications/deployments/what-deployments-are.html#delpoymentconfigs-specific-features_what-deployments-are"}),"Rollouts")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",b({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/applications/deployments/managing-deployment-processes.html#deployments-rolling-back_deployment-operations"}),"Rolling Back"))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"IKS")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",b({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#updating-a-deployment"}),"Updating a Deployment")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",b({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-back-a-deployment"}),"Rolling Back a Deployment"))),Object(a.b)("h2",null,"References"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-yaml"}),"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: my-deployment\n  labels:\n    app: nginx\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: bitnami/nginx:1.16.0\n        ports:\n        - containerPort: 8080\n")),Object(a.b)(s,{mdxType:"Tabs"},Object(a.b)(m,{label:"OpenShift",mdxType:"Tab"},Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Get Deployments ")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"oc get deployments\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Sets new image for Deployment ")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"oc set image deployment/my-deployment nginx=nginx:1.16.1 --record\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Get ReplicaSets ")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"oc get rs\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Get Deployment Description ")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"oc describe deployment my-deployment\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Check the status of the rollout ")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"oc rollout status my-deployment\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Get Rollout History ")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"oc rollout history deployment my-deployment\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Undo Rollout ")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"oc rollback my-deployment\n"))),Object(a.b)(m,{label:"IKS",mdxType:"Tab"},Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Get Deployments ")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"kubectl get deployments\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Sets new image for Deployment ")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"kubectl set image deployment/my-deployment nginx=nginx:1.16.1 --record\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Get ReplicaSets ")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"kubectl get rs\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Get Deployment Description ")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"kubectl describe deployment my-deployment\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Check the status of the rollout ")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"oc rollout status my-deployment\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Get Rollout History ")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"kubectl rollout history deployment my-deployment\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Undo Rollout ")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"kubectl rollout undo deployment my-deployment\n")))),Object(a.b)("h1",null,"Jobs and CronJobs"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Jobs"),"\nA Job creates one or more Pods and ensures that a specified number of them successfully terminate. As pods successfully complete, the Job tracks the successful completions. When a specified number of successful completions is reached, the task (ie, Job) is complete. Deleting a Job will clean up the Pods it created."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"CronJobs"),"\nOne CronJob object is like one line of a crontab (cron table) file. It runs a job periodically on a given schedule, written in Cron format."),Object(a.b)("p",null,"All CronJob schedule: times are based on the timezone of the master where the job is initiated."),Object(a.b)("h2",null,"Resources"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"OpenShift")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",b({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/nodes/jobs/nodes-nodes-jobs.html"}),"Jobs")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",b({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/nodes/jobs/nodes-nodes-jobs.html#nodes-nodes-jobs-creating-cron_nodes-nodes-jobs"}),"CronJobs"))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"IKS")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",b({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/"}),"Jobs to Completion")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",b({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/"}),"Cron Jobs")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",b({parentName:"li"},{href:"https://kubernetes.io/docs/tasks/job/automated-tasks-with-cron-jobs/"}),"Automated Tasks with Cron"))),Object(a.b)("h2",null,"References"),Object(a.b)("p",null,"It computes π to 2000 places and prints it out"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-yaml"}),'apiVersion: batch/v1\nkind: Job\nmetadata:\n  name: pi\nspec:\n  template:\n    spec:\n      containers:\n      - name: pi\n        image: perl\n        command: ["perl",  "-Mbignum=bpi", "-wle", "print bpi(2000)"]\n      restartPolicy: Never\n  backoffLimit: 4\n')),Object(a.b)("p",null,"Running in parallel"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-yaml"}),'apiVersion: batch/v1\nkind: Job\nmetadata:\n  name: pi\nspec:\n  parallelism: 2\n  completions: 3\n  template:\n    spec:\n      containers:\n        - name: pi\n          image: perl\n          command: ["perl", "-Mbignum=bpi", "-wle", "print bpi(2000)"]\n      restartPolicy: Never\n  backoffLimit: 4\n')),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-yaml"}),'apiVersion: batch/v1beta1\nkind: CronJob\nmetadata:\n  name: hello\nspec:\n  schedule: "*/1 * * * *"\n  jobTemplate:\n    spec:\n      template:\n        spec:\n          containers:\n          - name: hello\n            image: busybox\n            args:\n            - /bin/sh\n            - -c\n            - date; echo Hello from the Kubernetes cluster\n          restartPolicy: OnFailure\n')),Object(a.b)(s,{mdxType:"Tabs"},Object(a.b)(m,{label:"OpenShift",mdxType:"Tab"},Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Gets Jobs ")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"oc get jobs\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Gets Job Description ")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"oc describe job pi\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Gets Pods from the Job ")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"oc get pods\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Deletes Job ")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"oc delete job pi\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Gets CronJob ")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"oc get cronjobs\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Describes CronJob ")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"oc describe cronjobs pi\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Gets Pods from CronJob ")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"oc get pods\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Deletes CronJob ")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"oc delete cronjobs pi\n"))),Object(a.b)(m,{label:"IKS",mdxType:"Tab"},Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Gets Jobs ")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"kubectl get jobs\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Gets Job Description ")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"kubectl describe job pi\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Gets Pods from the Job ")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"kubectl get pods\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Deletes Job ")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"kubectl delete job pi\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Gets CronJob ")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"kubectl get cronjobs\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Describes CronJob ")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"kubectl describe cronjobs pi\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Gets Pods from CronJob ")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"kubectl get pods\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Deletes CronJob ")),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"kubectl delete cronjobs pi\n")))),Object(a.b)("h2",null,"Activities"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"Task"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"Description"),Object(a.b)("th",b({parentName:"tr"},{align:"left"}),"Link"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("strong",{parentName:"td"},Object(a.b)("em",{parentName:"strong"}," Try It Yourself "))),Object(a.b)("td",b({parentName:"tr"},{align:null})),Object(a.b)("td",b({parentName:"tr"},{align:"left"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"Rolling Updates Lab"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Create a Rolling Update for your application."),Object(a.b)("td",b({parentName:"tr"},{align:"left"}),Object(a.b)("a",b({parentName:"td"},{href:"../activities/labs/lab6"}),"Rolling Updates"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"Cron Jobs Lab"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Using Tekton to test new versions of applications."),Object(a.b)("td",b({parentName:"tr"},{align:"left"}),Object(a.b)("a",b({parentName:"td"},{href:"../activities/labs/lab7"}),"Crons Jobs"))))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-developer-foundation-k-8-s-pod-design-index-mdx-3ef1bebd1cc8ff04de67.js.map