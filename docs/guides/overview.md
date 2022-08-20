---
title: Tools Guides Overview
---
<!--- cSpell:ignore ICPA openshiftconsole Theia userid toolset crwexposeservice gradlew bluemix ocinstall Mico crwopenlink crwopenapp swaggerui gitpat gituser  buildconfig yourproject wireframe devenvsetup viewapp crwopenlink  atemplatized rtifactoryurlsetup Kata Koda configmap Katacoda checksetup cndp katacoda checksetup Linespace igccli regcred REPLACEME Tavis pipelinerun openshiftcluster invokecloudshell cloudnative sampleapp bwoolf hotspots multicloud pipelinerun Sricharan taskrun Vadapalli Rossel REPLACEME cloudnativesampleapp artifactoryuntar untar Hotspot devtoolsservices Piyum Zonooz Farr Kamal Arora Laszewski  Roadmap roadmap Istio Packt buildpacks automatable ksonnet jsonnet targetport podsiks SIGTERM SIGKILL minikube apiserver multitenant kubelet multizone Burstable checksetup handson  stockbffnode codepatterns devenvsetup newwindow preconfigured cloudantcredentials apikey Indexyaml classname  errorcondition tektonpipeline gradlew gitsecret viewapp cloudantgitpodscreen crwopenlink cdply crwopenapp -->

## Overview

The <Globals name="env" /> contains a number of popular and proven open source tools for developing cloud-native applications and deploying them to Kubernetes and Red Hat OpenShift. This section will help you understand what each tool does and how it helps you prepare you application code for production delivery.

## Tools Configurations

The tools have been installed and configured in the cluster that is the foundation of your <Globals name="env" />. This is a popular approach that Red Hat and other vendors are following. There are some advantages and disadvantages. The upside is that you can get started quickly and you are only incurring the cost of the managed cluster. The downside is that you need to monitor them and manage them. The cool thing is that IBM Cloud has an amazing [monitoring solution](../../developer-intermediate/monitoring) that can be configure to alert you of issues. More about that in the Guides.

Note: As the industry moves to full lifecycle operators this will be the case.

The tools are installed into a **tools** namespace and have a number of _ConfigMaps_ and _Secrets_ defined to make it easy for the tools to access and communicate with the underlying **IBM Cloud** services.

![Provisioned environment](images/catalyst-provisioned-environment.png)

### Guides

The Guides explain how to create and deploy applications using CI pipeline ([Jenkins](../continuous-integration), [Tekton](../continuous-integration-tekton), etc.). They help explain how to:
- Integrate code analysis into your applications with [SonarQube](../../developer-intermediate/code-analysis)
- Move applications into test, staging, and production using continuous deployment techniques with [Artifactory](../../developer-intermediate/artifact-management) and [ArgoCD](../continuous-delivery)
- And much more
