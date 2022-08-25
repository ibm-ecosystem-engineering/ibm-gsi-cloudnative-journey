---
title: Agenda
---
<!--- cSpell:ignore onedrive ICPA resid ithint openshiftconsole Theia userid toolset cpptx authkey crwexposeservice gradlew bluemix ocinstall Mico crwopenlink crwopenapp swaggerui gitpat gituser  buildconfig yourproject wireframe devenvsetup viewapp crwopenlink  atemplatized rtifactoryurlsetup Kata Koda configmap Katacoda checksetup cndp katacoda checksetup Linespace igccli regcred REPLACEME Tavis pipelinerun openshiftcluster invokecloudshell cloudnative sampleapp bwoolf hotspots multicloud pipelinerun Sricharan taskrun Vadapalli Rossel REPLACEME cloudnativesampleapp artifactoryuntar untar Hotspot devtoolsservices Piyum Zonooz Farr Kamal Arora Laszewski  Roadmap roadmap Istio Packt buildpacks automatable ksonnet jsonnet targetport podsiks SIGTERM SIGKILL minikube apiserver multitenant kubelet multizone Burstable checksetup handson  stockbffnode codepatterns devenvsetup newwindow preconfigured cloudantcredentials apikey Indexyaml classname  errorcondition tektonpipeline gradlew gitsecret viewapp cloudantgitpodscreen crwopenlink cdply crwopenapp -->

!!! note

    Before you proceed, make sure you have an **Cloud-Native Learning Journey** invite.
    It enables you to access OpenShift on AWS, Azure or IBM Cloud account with the [Predefined DevSecOps Tools](content-overview) already installed and ready for you to use. (The environment is locked down to prevent the creation of any new services outside of the scope of the learning journey)

This set of learning tasks focuses on how to use Red Hat OpenShift Developer
 Experience to develop and deploy a set of basic cloud-native applications
 . It covers the use of common tools designed to help the developer
  monitor, log and debug their applications.

This learning tasks assumes that you have:
 - You have completed the tasks before the workshop
 - You have received an Learning-Journey invite email
 - Have watched the 30 min Introduction Video showing the end to end experience

### Learning Tasks

The learning tasks help you understand the Developer Experience with IBM RedHat OpenShift managed cluster. These are the getting started and initial setup tasks that help you start a project.

!!! note 
    Support is provided in the `#<discord-channel-provided>` you were provided
    with in your Learning-Journey invite. This channel will also be used to share any common issues found. It can be used to provide feedback on the content you have just completed

=== "Agenda"

    ## Before the Workshop

    Please complete these tasks before attending the first session. This will help you get started quickly with the practical exercises.

    | Task                            | Description         | Link        | Time    | Presentations  |
    | --------------------------------| ------------------  |:----------- |---------|----------------|
    | Welcome Message | Welcome to Cloud-Native Workshop  | [Introduction](../getting-started) | 5 mins |
    | Prerequisites | Install the prerequisite tools  | [Setup Prerequisites](../getting-started/prereqs) | 10 mins |
    | Dev Env Access | Validate access to your Development Cluster |  [Validate](../getting-started/checksetup) | 10 min |
    | Software Delivery Lifecycle | Overview of the Tools you will be using with the OpenShift Environment |  <a href="https://www.youtube.com/watch?v=LcWboN1T7Zk" target="_newwindow">Video</a>| 30 min |

    ## Day 1 (2.5 Hours)
    | Task                            | Description         | Link        | Time    | Presentations  |
    | --------------------------------| ------------------  |:----------- |---------|----------------|
    | Welcome Message | Introductions & Logistics | | 15 mins | |
    | **Introduction to Cloud-Native Development** | | | | |
    | What is Cloud-Native | Introduction to Cloud-Native Development |  [Cloud-Native Development](../developer-foundation/cloud-native-overview) | 15 min | <a href="https://1drv.ms/p/s!Ao2GqbKQMThrggpHefC0Q4tkWgyR?e=ow0ffv" target="_blank" >Link</a> |
    | Cloud-Native Applications | Cloud-Native Application Characteristics |  [Cloud-Native Applications](../developer-foundation/cloud-native-app-dev) | 15 min | <a href="https://1drv.ms/p/s!Ao2GqbKQMThrghpeZexAKaD1D08b?e=KYyu9l" target="_blank" >Link</a> |
    | **Container Concepts** | | | |
    | Containers | Containers Overview |  [Containers](../developer-foundation/containers) | 15 min | <a href="https://1drv.ms/p/s!Ao2GqbKQMThrghgynUJFfxuqI4Bi?e=NZufxb" target="_blank" >Link</a> |
    | **Break** | | | 5 mins |
    | **OpenShift Overview** | | | |
    | OpenShift | OpenShift Overview |  [OpenShift Overview](../developer-foundation/openshift)  | 15 min | <a href="https://1drv.ms/p/s!Ao2GqbKQMThrgghDUQOfj7YeeX3o?e=HTpaRL" target="_blank" >Link</a> |
    | **DevSecOps** | | | |
    | Continuous Integration | Overview of Continuous Integration | [CI](continuous-integration) | 15 min | <a href="https://1drv.ms/p/s!Ao2GqbKQMThrgg0U57nmGHi5fo04?e=WcY0gj" target="_blank" >Link</a> |
    | Continuous Delivery | Overview of Continuous Delivery | [CD](continuous-delivery) | 15 min | |
    |Deploy your first app demo |The very first experience of deploying an app in OpenShift or Kubernetes | [Deploy First App](deploy-app/) | 25 mins | |
    | **Q & A** | | | 10 mins |

    ### Homework

    | Assignment                      |   Description         |             | Time    | |
    | --------------------------------| ------------------  |:----------- |---------|----------------|
    | <a href="https://kubernetes.io/docs/tutorials/kubernetes-basics/deploy-app/deploy-interactive/" target="_newwindow"> Deploy a simple nginx container </a> | Learn how to create a Docker Image for running a static HTML website using Nginx. | | 10 mins | |
    | <a href="https://kubernetes.io/docs/tutorials/kubernetes-basics/explore/explore-intro/" target="_newwindow"> Explore a deployed container </a> | Explore the elements of a deployed application | | 5-10 mins | |
    | <a href="https://kubernetes.io/docs/tutorials/kubernetes-basics/expose/expose-intro/" target="_newwindow"> Expose an application publicly </a> | Learn how to expose an application outside of the cluster | | 10 mins | |
    | <a href="https://kubernetes.io/docs/tutorials/kubernetes-basics/scale/scale-intro/" target="_newwindow"> Scale an application </a> | Learn how to create multiple instances of an application to meet demand | | 10 mins | |
    | <a href="https://kubernetes.io/docs/tutorials/kubernetes-basics/update/update-intro/" target="_newwindow"> Update an application </a> | Learn how to perform a rolling update of an application | | 10 mins | |
    | <a href="https://learn.openshift.com/introduction/getting-started/" target="_newwindow"> OpenShift - Getting Started </a> | Learn how to use the OpenShift Container Platform to build and deploy an application with a data backend and a web frontend. | | 10-15 mins | |
    | <a href="https://developers.redhat.com/learn/openshift/deploy-spring-application-openshift" target="_newwindow"> Deploy a Spring-Boot Application </a> | Learn more about developing applications using Spring Boot using Red Hat Runtimes. | | 15 mins | |
    | [Cloud Native Development](../developer-foundation/cloud-native-app-dev/#activities)| Reading through different concepts in cloud native development | | 90 mins | |
    | [Continuous Integration](continuous-integration-handson/)| Continuous Integration Hands on Exercise| | 60 mins | |
    | [Continuous Delivery](continuous-delivery-handson/)| Continuous Delivery Hands on Exercise| | 60 mins | |

    ## Day 2 (2.5 Hours)
    | Task                            | Description         | Link        | Time    | Presentations  |
    | --------------------------------| ------------------  |:----------- |---------|----------------|
    | Recap | Recap of things learned in Day 1 | | 10 mins | |
    | **Learn how to develop and deploy apps with enterprise DevSecOps** | | | | |
    | DevSecOps | DevSecOps Overview | [DevSecOps](content-overview) | 20 mins | |
    | Preparing for the Hands-On Labs | Setting up the Development  Tools | [Dev. Tools Setup](../getting-started/devenvsetup) | 10 mins | |
    | Deploy your first app | The very first experience of deploying an app in OpenShift or Kubernetes | [Deploy First App](deploy-app/) | 25 mins | |
    | **Break** | | | 5 mins | |
    | Code Analysis | Code Quality with Sonarqube | [Code Analysis](code-analysis/) | 15 mins | <a href="https://onedrive.live.com/view.aspx?resid=6B383190B2A9868D!283&ithint=file%2cpptx&authkey=!AKqKZyBZ98nHgu0" target="_blank" >Link</a> |
    | Image Registry | Container Registry | [Image Registry](image-registry/) | 15 mins | <a href="https://onedrive.live.com/view.aspx?resid=6B383190B2A9868D!284&ithint=file%2cpptx&authkey=!ANxpti7m6WnmZss" target="_blank" >Link</a> |
    | Artifact Management | Artifact Management with Artifactory | [Artifact Management](artifact-management/) | 15 min | <a href="https://onedrive.live.com/view.aspx?resid=6B383190B2A9868D!285&ithint=file%2cpptx&authkey=!AA8oh5YhYoZY6R0" target="_blank" >Link</a> |
    | Monitoring | Monitoring with OpenShift | [Monitoring](monitoring/) | 10 mins | |
    | Logging | Logging with OpenShift | [Logging](log-management/) | 10 mins | |
    | **Q & A** | | | 10 mins | |

    ### Homework

    | Assignment                      |  Description         |             | Time    | |
    | --------------------------------| ------------------  |:----------- |---------|----------------|
    | [Dev. Tools Setup](../getting-started/devenvsetup) | Setting up the Development Tools | | 10 mins | |
    | [Deploy First App](deploy-app) | The very first experience of deploying an application via a Tekton pipeline in OpenShift or Kubernetes | | 25 mins | |
    | [SonarQube](code-analysis#give-it-a-try) | Creating a quality gate for Sonar Scan| | 20mins | |
    | [Image Registry](image-registry#give-it-a-try)| Accessing the image of your first app deployment| | 15 mins | |
    | [Monitoring](monitoring#give-it-a-try)| OpenShift Monitoring Hands on Lab| | 15mins | |
    | [Logging](log-management#give-it-a-try)| OpenShift Logging Hands on Lab | | 15mins | |

    ## Day 3 (2.5 Hours)
    | Task                            | Description         | Link        | Time    | Presentations  |
    | --------------------------------| ------------------  |:----------- |---------|----------------|
    | Recap | Recap of things learned in Day 1 & 2 | | 10 mins | |
    | **Apply all we have learnt so far to develop a set of microservices and deploy them on OpenShift** | | | | |
    | Preparing for the Hands-On Labs | Setting up the Development Tools | [Dev. Tools Setup](../getting-started/devenvsetup/) | 10 mins | |
    | Inventory Application | Objective of the exercise | [Objective](inventory-application/) | 15 mins | |
    | Inventory Backend | Creating the Inventory Service with Java | [Inventory Backend](inventory-service/) | 25 mins |  |
    | **Break** | | | 5 mins | |
    | Inventory BFF | Creating the Inventory BFF with GraphQL | [Inventory BFF](inventory-bff/) | 25 mins |  |
    | Inventory UI | Creating the UI microservice | [Inventory UI](inventory-ui/) | 25 mins | |
    | Inventory CD  | CD with Argocd |[CD](../developer-advanced-1/inventory-cd/) |10 mins | |
    | TechZone Automation  | Automated Provisioning of Environment | |30 mins | |
    | **Q & A** | | | 10 mins | |

    ### Homework

    | Assignment                      | Description         |             | Time    | |
    | --------------------------------| ------------------  |:----------- |---------|----------------|
    | [Dev. Tools Setup](../getting-started/devenvsetup/) | Setting up the Development Tools | | 10 mins | |
    | [Objective](inventory-application/) | Objective of the exercise | |15 mins | |
    | [Inventory Backend](inventory-service/) | Creating the Inventory Service with Java | | 30 mins | |
    | [Inventory BFF](inventory-bff/) | Creating the Inventory BFF with GraphQL | | 25 mins | |
    | [Inventory UI](inventory-ui/) | Creating the UI microservice | | 25 mins | |
    | [Inventory Backend with Cloudant](../developer-advanced-1/database-with-cloudant/)| Cloudant Database integration | | 30 mins | |
    | [Install the toolkit](../guides/toolkit-install/)| Install the Cloud-Native Toolkit in your cluster | | 30 mins | |

!!! success

    You have successfully completed the **Developer Intermediate** material
    - You have become familiar with IBM Cloud and Red Hat OpenShift
    - You have deployed your first application with OpenShift 4.10
    - You have understood how monitor, access logs
    - Understand where your artifacts are being managed

### Review Learning Tasks

Working with colleagues review your learning tasks. The Cloud Ecosystem team is looking for feedback from three perspectives:

- **What went well?**
- **What needs improvement?**
- **Next steps?**

Developers will begin the learning journey with different skill levels and familiarity with this material, but will complete the Cloud-Native enablement with a more detailed understanding of how to build solutions for the IBM Cloud. Each student's **Next Steps** will help identify that person's skill gaps to ensure they cover the topics needed to complete the learning journey successfully.



