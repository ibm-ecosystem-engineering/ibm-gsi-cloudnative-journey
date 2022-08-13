---
title: GitOps & ArgoCD Overview
description: GitOps & ArgoCD Overview
---
<!--- cSpell:ignore ICPA openshiftconsole Theia userid toolset crwexposeservice gradlew bluemix ocinstall Mico crwopenlink crwopenapp swaggerui gitpat gituser  buildconfig yourproject wireframe devenvsetup viewapp crwopenlink  atemplatized rtifactoryurlsetup Kata Koda configmap Katacoda checksetup cndp katacoda checksetup Linespace igccli regcred REPLACEME Tavis pipelinerun openshiftcluster invokecloudshell cloudnative sampleapp bwoolf hotspots multicloud pipelinerun Sricharan taskrun Vadapalli Rossel REPLACEME cloudnativesampleapp artifactoryuntar untar Hotspot devtoolsservices Piyum Zonooz Farr Kamal Arora Laszewski  Roadmap roadmap Istio Packt buildpacks automatable ksonnet jsonnet targetport podsiks SIGTERM SIGKILL minikube apiserver multitenant kubelet multizone Burstable checksetup handson  stockbffnode codepatterns devenvsetup newwindow preconfigured cloudantcredentials apikey Indexyaml classname  errorcondition tektonpipeline gradlew gitsecret viewapp cloudantgitpodscreen crwopenlink cdply crwopenapp -->


### What is GitOps?
GitOps in short is a set of practices to use Git pull requests to manage infrastructure and application configurations. Git repository in GitOps is considered the only source of truth and contains the entire state of the system so that the trail of changes to the system state are visible and auditable.

- Traceability of changes in GitOps is no novelty in itself as this approach is almost universally employed for the application source code. However GitOps advocates applying the same principles (reviews, pull requests, tagging, etc) to infrastructure and application
configuration so that teams can benefit from the same assurance as they do for the application source code.
- Although there is no precise definition or agreed upon set of rules, the following principles are an approximation of what constitutes a GitOps practice:
  - Declarative description of the system is stored in Git (configs, monitoring, etc)
  - Changes to the state are made via pull requests
  - Git push reconciled with the state of the running system with the state in the Git repository


### CI/CD integration

For the full end-to-end build and delivery process, both the CI and CD pipelines are required. For this to work, a Git repo is used to convey the configuration values. Within the <Globals name="env" />, we have used certain naming conventions to streamline and simplify the integration between the various components.

![Argo CD config](images/CI_CD-pipelines.png)

The naming components are:
- `app repo` - The name of the Git repository for the application
- `git org` - The name of the GitHub organization for the application's repo
- `tag` - The build version
- `chart version` - The version of the Helm chart
- `region` - The geographic location in IBM Cloud

The derived names are:
- GitHub application path: `github.com/{git org}/{app repo}`
- CI Pipeline name: `{git org}.{app repo}`
- Docker image's path: `{region}.icr.io/{git org}/{app repo}:{tag}` in the [Image Registry](/guides/image-registry)
- Helm chart's path: `generic-local/{git org}/{app repo}-{tag}-{chart version}.tgz` in the [Helm Repository](/guides/artifact-management)
- Dependencies filename: `{app repo}/requirements.yaml` in the GitOps repo
- CD Pipeline name: `{app repo}`

## Resources

- Presentation: [Understanding GitOps](/slides/05-Understanding-GitOps.pdf)

## What is Argo CD

[Argo CD](https://argoproj.github.io/argo-cd/) is a declarative, GitOps continuous delivery tool for Kubernetes. The deployment environment is a Kubernetes cluster or namespace, which also works for an OpenShift cluster or project. Argo CD models a collection of applications as a project and uses a Git repository to store the project's desired state. Each application is stored as a folder in the repository, and each deployment environment is stored as a branch in the repository.

Argo CD supports defining Kubernetes manifests in a number of ways:
- helm charts
- kustomize
- ksonnet
- jsonnet
- plain directory of yaml/json manifests

Argo CD synchronizes the application state with the desired state defined in Git and automates the deployment of Kubernetes resources to ensure they match.

<iframe width="640" height="480" src="https://www.youtube.com/embed/KJzgwJrY-mE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Activities

These activities give you a chance to walk-through building CD pipelines using ArgoCD.

These tasks assume that you have:
 - Reviewed the Continuous Deployment concept page.

| Task                            | Description         | Link        | Time    |
| --------------------------------| ------------------  |:----------- |---------|
| *** Walk-through ***                         |         |         |     |
| GitOps | Introduction to GitOps with OpenShift | [Learn OpenShift](https://learn.openshift.com/introduction/gitops-introduction/) | 20 min |
| GitOps Multi-cluster | Multi-cluster GitOps with OpenShift | [Learn OpenShift](https://learn.openshift.com/introduction/gitops-multicluster/) | 20 min |
| *** Try It Yourself ***                         |         |         |     |
| ArgoCD Lab | Learn how to setup ArgoCD and Deploy Application | [ArgoCD](../../concepts/continuous-delivery/activities/) | 30 min |



Once you have completed these tasks, you will have created an ArgoCD deployment and have an understanding of Continuous Deployment.

