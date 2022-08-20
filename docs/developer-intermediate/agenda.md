---
title: Agenda
---
<!--- cSpell:ignore ICPA openshiftconsole Theia userid toolset crwexposeservice gradlew bluemix ocinstall Mico crwopenlink crwopenapp swaggerui gitpat gituser  buildconfig yourproject wireframe devenvsetup viewapp crwopenlink  atemplatized rtifactoryurlsetup Kata Koda configmap Katacoda checksetup cndp katacoda checksetup Linespace igccli regcred REPLACEME Tavis pipelinerun openshiftcluster invokecloudshell cloudnative sampleapp bwoolf hotspots multicloud pipelinerun Sricharan taskrun Vadapalli Rossel REPLACEME cloudnativesampleapp artifactoryuntar untar Hotspot devtoolsservices Piyum Zonooz Farr Kamal Arora Laszewski  Roadmap roadmap Istio Packt buildpacks automatable ksonnet jsonnet targetport podsiks SIGTERM SIGKILL minikube apiserver multitenant kubelet multizone Burstable checksetup handson  stockbffnode codepatterns devenvsetup newwindow preconfigured cloudantcredentials apikey Indexyaml classname  errorcondition tektonpipeline gradlew gitsecret viewapp cloudantgitpodscreen crwopenlink cdply crwopenapp -->

!!! note

    Before you proceed, make sure you have an **Cloud-Native Learning Journey** invite.
    It enables you to access OpenShift on AWS, Azure or IBM Cloud account with the [Predefined DevSecOps Tools](/developer-intermediate/content-overview) already installed and ready for you to use. (The environment is locked down to prevent the creation of any new services outside of the scope of the learning journey)

This set of learning tasks focuses on how to use Red Hat OpenShift Developer
 Experience to develop and deploy a set of basic cloud-native applications
 . If covers the use of common tools designed to help the developer
  monitor, log and debug their applications.

This learning tasks assumes that you have:
 - You have completed the tasks before the workshop
 - You have received an Learning-Journey invite email
 - Have watched the 30 min Introduction Video showing the end to end experience

### Learning Tasks

The learning tasks help you understand the Developer Experience with IBM RedHat OpenShift managed cluster. These are the getting started and initial setup tasks that help you start a project.

!!! note 
    Support is provided in the `#<discord-channel-procided>` you were provided
    with in your Learning-Journey invite. This channel will also be used to share any common issues found. It can be used to provide feedback on the content you have just completed

=== "Agenda"

    ## Before the Workshop

    Please complete these tasks before attending the first session. This will help you get started quickly with the practical exercises.

    | Task                            | Description         | Link        | Time    | Presentations  |
    | --------------------------------| ------------------  |:----------- |---------|----------------|
    | Welcome Message | Welcome to Cloud-Native Workshop  | [Introduction](../../getting-started/introduction) | 5 mins |
    | Prerequisites | Install the prerequisite tools  | [Setup Prerequisites](../../getting-started/prereqs) | 10 mins |
    | Dev Env Access | Validate access to your Development Cluster |  [Validate](../../getting-started/checksetup) | 10 min |
    | Software Delivery Lifecycle | Overview of the Tools you will be using with the OpenShift Environment |  <a href="https://www.youtube.com/watch?v=LcWboN1T7Zk" target="_newwindow">Video</a>| 30 min |

    ## Day 1 (2.5 Hours)
    | Task                            | Description         | Link        | Time    | Presentations  |
    | --------------------------------| ------------------  |:----------- |---------|----------------|
    | Welcome Message | Introductions & Logistics | | 15 mins | |
    | **Introduction to Cloud-Native Development** | | | | |
    | What is Cloud-Native | Introduction to Cloud-Native Development |  [Cloud-Native Development](/developer-foundation/cloud-native-overview) | 15 min | <a href="https://1drv.ms/p/s!Ao2GqbKQMThrggpHefC0Q4tkWgyR?e=ow0ffv" target="_blank" >Link</a> |
    | Cloud-Native Applications | Cloud-Native Application Characteristics |  [Cloud-Native Applications](/developer-foundation/cloud-native-app-dev) | 15 min | <a href="https://1drv.ms/p/s!Ao2GqbKQMThrghpeZexAKaD1D08b?e=KYyu9l" target="_blank" >Link</a> |
    | **Container Concepts** | | | |
    | Containers | Containers Overview |  [Containers](../../developer-foundation/containers) | 15 min | <a href="https://1drv.ms/p/s!Ao2GqbKQMThrghgynUJFfxuqI4Bi?e=NZufxb" target="_blank" >Link</a> |
    | **Break** | | | 5 mins |
    | **OpenShift Overview** | | | |
    | OpenShift | OpenShift Overview |  [OpenShift Overview](../../developer-foundation/openshift)  | 15 min | <a href="https://1drv.ms/p/s!Ao2GqbKQMThrgghDUQOfj7YeeX3o?e=HTpaRL" target="_blank" >Link</a> |
    | **DevSecOps** | | | |
    | Continuous Integration | Overview of Continuous Integration | [CI](../../developer-intermediate/continuous-integration) | 15 min | <a href="https://1drv.ms/p/s!Ao2GqbKQMThrgg0U57nmGHi5fo04?e=WcY0gj" target="_blank" >Link</a> |
    | Continuous Delivery | Overview of Continuous Delivery | [CD](../../developer-intermediate/continuous-delivery) | 15 min | |
    |Deploy your first app demo |
    | **Q & A** | | | 10 mins |

    ### Homework

    | Assignment                      |   Description         |             | Time    | |
    | --------------------------------| ------------------  |:----------- |---------|----------------|
    | <a href="https://developers.redhat.com/courses/foundations/deploy-images" target="_newwindow">Deploy a container in OpenShift</a> | Learn how to work with Container images within OpenShift | | 10 mins | |
    | <a href="https://developers.redhat.com/courses/foundations/getting-started" target="_newwindow">Understanding OpenShift </a> | Understanding the OpenShift Web Console and viewing perspectives, Understanding how to login to OpenShift using the oc command line tool, How to build applications from a container image using OpenShift Web Console, How to access public URLs by working with OpenShift Routes | | 5-10 mins | |
    | <a href="https://developers.redhat.com/courses/spring-boot/spring-rest-services" target="_newwindow"> Deploy a Spring-Boot Application </a> | Learn more about developing applications using Spring Boot using Red Hat Runtimes. | | 15 mins | |
    | [Continuous Integration](https://developers.redhat.com/courses/gitops/getting-started-openshift-pipelines)| Continuous Integration Hands on Exercise| | 60 mins | |
    | [Continuous Delivery](https://developers.redhat.com/courses/gitops/getting-started-argocd-and-openshift-gitops-operator)| Continuous Delivery Hands on Exercise| | 60 mins | |


    ## Day 2 (2.5 Hours)
    | Task                            | Description         | Link        | Time    | Presentations  |
    | --------------------------------| ------------------  |:----------- |---------|----------------|
    | Recap | Recap of things learned in Day 1 | | 10 mins | |
    | **Learn how to develop and deploy apps with enterprise DevSecOps** | | | | |
    | DevSecOps | DevSecOps Overview | [DevSecOps](../../developer-intermediate/content-overview) | 20 mins | |
    | Preparing for the Hands-On Labs | Setting up the Development  Tools | [Dev. Tools Setup](../../getting-started/devenvsetup) | 10 mins | |
    | Deploy your first app | The very first experience of deploying an app in OpenShift or Kubernetes | [Deploy First App](../../developer-intermediate/deploy-app) | 25 mins | |
    | **Break** | | | 5 mins | |
    | Code Analysis | Code Quality with Sonarqube | [Code Analysis](../../developer-intermediate/code-analysis) | 15 mins | <a href="http://gist-reveal-gist-reveal.workshop-team-2ab66b053c14936810608de9a1deac9c-0000.eu-gb.containers.appdomain.cloud/9ffe4934f586cf73b92b0f381cacb4a5" target="_blank" >Link</a> |
    | Image Registry | Container Registry | [Image Registry](../../developer-intermediate/image-registry) | 10 mins | <a href="http://gist-reveal-gist-reveal.workshop-team-2ab66b053c14936810608de9a1deac9c-0000.eu-gb.containers.appdomain.cloud/022dd6d9fee2522f3bec6ae3ee75b8b6" target="_blank" >Link</a> |
    | Artifact Management | Artifact Management with Artifactory | [Artifact Management](developer-intermediate/artifact-management) | 10 min | <a href="http://gist-reveal-gist-reveal.workshop-team-2ab66b053c14936810608de9a1deac9c-0000.eu-gb.containers.appdomain.cloud/bd7634595e924254d26c22672f88552a" target="_blank" >Link</a> |
    | Monitoring | Sysdig Monitoring | [Monitoring](../../developer-intermediate/monitoring) | 5 mins | |
    | Logging | Logging with LogDNA | [Logging](../../developer-intermediate/log-management) | 5 mins | |
    | Image Signing | Signing Container Images |  [Signing](https://develop.cloudnativetoolkit.dev/reference/tools/container-image-security-enforcement/) | 25 min | |
    | **Q & A** | | | 10 mins | |

    ### Homework

    | Assignment                      |  Description         |             | Time    | |
    | --------------------------------| ------------------  |:----------- |---------|----------------|
    | [Dev. Tools Setup](../../getting-started/devenvsetup) | Setting up the Development Tools | | 10 mins | |
    | [Deploy First App](../../developer-intermediate/deploy-app) | The very first experience of deploying an application via a Tekton pipeline in OpenShift or Kubernetes | | 25 mins | |
    | [SonarQube](../../developer-intermediate/code-analysis#give-it-a-try) | Creating a quality gate for Sonar Scan| | 20mins | |
    | [Image Registry](../../developer-intermediate/image-registry#give-it-a-try)| Accessing the image of your first app deployment| | 15 mins | |
    | [Monitoring](../../developer-intermediate/monitoring#give-it-a-try)| Sysdig Hands on Lab| | 15mins | |
    | [Logging](../../developer-intermediate/log-management#give-it-a-try)| LogDNA hands on Lab | | 15mins | |

    ## Day 3 (2.5 Hours)
    | Task                            | Description         | Link        | Time    | Presentations  |
    | --------------------------------| ------------------  |:----------- |---------|----------------|
    | Recap | Recap of things learned in Day 1 & 2 | | 10 mins | |
    | **Apply all we have learnt so far to develop a set of microservices and deploy them on OpenShift** | | | | |
    | Preparing for the Hands-On Labs | Setting up the Development Tools | [Dev. Tools Setup](../../getting-started/devenvsetup) | 10 mins | |
    | Inventory Application | Objective of the exercise | [Objective](../../developer-intermediate/inventory-app) | 15 mins | |
    | Inventory Backend | Creating the Inventory Service with Java | [Inventory Backend](/developer-intermediate/inventory-svc) | 30 mins | <a href="http://gist-reveal-gist-reveal.workshop-team-2ab66b053c14936810608de9a1deac9c-0000.eu-gb.containers.appdomain.cloud/4ade29ea1f4d20de1009f29ca3ff65c9" target="_blank" >Link</a> |
    | **Break** | | | 5 mins | |
    | Inventory BFF | Creating the Inventory BFF with GraphQL | [Inventory BFF](../../developer-intermediate/inventory-bff) | 25 mins | <a href="http://gist-reveal-gist-reveal.workshop-team-2ab66b053c14936810608de9a1deac9c-0000.eu-gb.containers.appdomain.cloud/2dbd6e2ae323490c69e57d362245d167" target="_blank" >Link</a> |
    | Inventory UI | Creating the UI microservice | [Inventory UI](../../developer-intermediate/inventory-ui) | 25 mins | |
    | AppID | Authentication with AppID |[AppID](../../developer-advanced-1/inventory-appid) |10 mins | |
    | **Q & A** | | | 10 mins | |
    | **Optional: After the workshop** | Complete Inventory App creation using a Kubernetes cluster | [Inventory Application](../../developer-intermediate/inventory-app) | 60 mins | |

    ### Homework

    | Assignment                      | Description         |             | Time    | |
    | --------------------------------| ------------------  |:----------- |---------|----------------|
    | [Dev. Tools Setup](../../getting-started/devenvsetup) | Setting up the Development Tools | | 10 mins | |
    | [Objective](../../developer-intermediate/inventory-app) | Objective of the exercise | |15 mins | |
    | [Inventory Backend](../../developer-intermediate/inventory-svc) | Creating the Inventory Service with Java | | 30 mins | |
    | [Inventory BFF](../../developer-intermediate/inventory-bff) | Creating the Inventory BFF with GraphQL | | 25 mins | |
    | [Inventory UI](../../developer-intermediate/inventory-ui) | Creating the UI microservice | | 25 mins | |
    | [Inventory Backend with Cloudant](../../developer-advanced-1/inventory-cloudant)| Cloudant Database integration | | 30 mins | |
    | [Inventory UI with Appid](../../developer-advanced-1/inventory-appid) | Protecting Inventory UI with Appid integration | | 30 mins | |


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



