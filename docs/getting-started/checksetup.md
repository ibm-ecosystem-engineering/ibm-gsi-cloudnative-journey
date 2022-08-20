---
title: Validate Environment
---
<!--- cSpell:ignore ICPA openshiftconsole Theia userid toolset crwexposeservice gradlew bluemix ocinstall Mico crwopenlink crwopenapp swaggerui gitpat gituser  buildconfig yourproject wireframe devenvsetup viewapp crwopenlink  atemplatized rtifactoryurlsetup Kata Koda configmap Katacoda checksetup cndp katacoda checksetup Linespace igccli regcred REPLACEME Tavis pipelinerun openshiftcluster invokecloudshell cloudnative sampleapp bwoolf hotspots multicloud pipelinerun Sricharan taskrun Vadapalli Rossel REPLACEME cloudnativesampleapp artifactoryuntar untar Hotspot devtoolsservices Piyum Zonooz Farr Kamal Arora Laszewski  Roadmap roadmap Istio Packt buildpacks automatable ksonnet jsonnet targetport podsiks SIGTERM SIGKILL minikube apiserver multitenant kubelet multizone Burstable checksetup handson  stockbffnode codepatterns devenvsetup newwindow preconfigured cloudantcredentials apikey Indexyaml classname  errorcondition tektonpipeline gradlew gitsecret viewapp cloudantgitpodscreen crwopenlink cdply crwopenapp -->

Congratulations on becoming part of the IBM Cloud-Native Learning Journey! You should have received a welcome email that provides details of the IBM Cloud Sandbox you've been assigned to and points to this welcome page. By participating in this Cloud-Native Learning Journey, you get access to:

- The Crafted Education Journey Agenda.
- A RedHat OpenShift managed service cluster with the IBM Garage Cloud-Native Toolkit and IBM Cloud Pak for Applications pre-installed.
- The development environment pre-configured in a pay-as-you-go IBM Cloud account which you will use to perform your learning tasks.



## Notification

The welcome email gives you information on how to access the development environment for your team.

**OpenShift Development Environment Details**

- **Platform**: AWS, Azure or IBM Cloud
- **Account**: this is the IBM Cloud account with a configured sandbox development environment that will enable you to complete the learning agenda.
- **Workshop Team**: this is the name of your development team.
- **GitHub Organization**: this is the GitHub organization that will be used for storing your code during your learning activities.
- **Resource Group**: For IBM Cloud users this will be the resource group where the development cluster and cloud resources have been provisioned.

Example of the key information in your email:

```
  Registration Details
  Cloud Platform: AWS  
  Openshift Cluster URL :  https://console-openshift-console---------.openshiftapps.com/
  Workshop Team : <number>
  GitHub Organization : https://github.com/cnw-team-<number>
```

You must associate your email address with your public GitHub account or make sure you have a public account that is using an email address that matches the one you linked to your sandbox environment.

To set your IBM ID in GitHub:

- Go to [Github](https://github.com) (public, not Enterprise).
- Log in to your account or create a new one.
- Navigate to your account settings.
- In Email settings make sure that the email you used as your IBMid is the primary ID for the account.
- If it is not, then add your IBMid email and verify it.
- If you are correctly verified and associated, you will receive a second email inviting you to your team's GitHub organization.


!!! warning

    **Warning:** If you don't associate your business email with your public GitHub account, you will not receive a Git Organization invitation and you will have issues completing the learning activities. IBM is not mixing personal email addresses with the business email that has been associated with your **OpenShift Environment**.

## Environment

The OpenShift Environment is designed to make it easy for you to develop and deploy cloud-native applications. It includes an OpenShift cluster with open-source developer tools installed to provide a end to end Software Delivery Life Cycle (SDLC). This combination supports the development of cloud-native microservices architecture applications and CI/CD continuous deployment of these.

The OpenShift Environment has been configured for a multi-tenant development team on the AWS, Azure or IBM Cloud platforms. Each development team can contain up to **200+** developers. 

You will be given access to your team's GitHub organization, and you will be expected to create all of your application source code into this organization. This is how real-world development projects work by enabling you to collaborate with your fellow team members while preventing you from creating duplicate project names.

## Validating your IBM Cloud access

!!! note

    **Note**: If you have any issue with the following steps, please raise an issue on the **#gsi-labs-external** [Slack Channel](https://gsicsi.slack.com/archives/CSRDJD5HA). All issues should be reported there.


Follow the following steps to check you can access your team's development cluster environment.

Log in and view the resources:

### AWS and Azure
- For AWS and Azure open the Cluster link in your registration email and authenticate with GitHub credentials, you will get direct access to the cluster.

### IBM Cloud
- For IBM Cloud Log in to the [IBM Cloud](https://cloud.ibm.com) console.
- The registration welcome email will include your account information, team, GitHub organization, and resource group.
- In the IBM Cloud console, switch to the account specified in the email.
- Navigate to the *Resource List*.
- In the Group filter, select your team's resource group.
- Click on **Expand All** (top right) to show all its resources.
- Under Cluster, you should see the cluster named `workshopX-cluster`  is the name of your team. Some clusters may have a different number if there is more than one of that type.

### Web Terminal

To be able to run CLI commands to drive common operations on the cluster you will first need to validate you can access your web terminal. 
To validate your terminal click on the `>_` icon in the header of the OpenShift Console. You should see a terminal open at the bottom of the console screen. 
 - Validate that you can run `oc` commands, run the following command
  ```bash
  oc sync --version
  ```
 - You should see the version number printed

!!! success

    You have completed this task if you have:
    - Viewed your team's Red Hat OpenShift cluster.
    - Accessed the cluster terminal view

## Etiquette

Please remember that you are sharing a development cluster with other colleagues, so be considerate of the following rules:

- Make sure you use your own namespace/project for your applications:
    - Name your personal namespace/project using the convention `dev-{your initials}`, i.e. `dev-mjp`.
    - Any namespaces/projects not following this approach will be deleted by the [master builders](https://www.youtube.com/watch?v=Um-PlX6oPBQ).
- Name your applications using the convention `{app name}-{your initials}`, i.e. `inventory-bff-mjp`.
    - Using the team's GitHub organization will help avoid creating apps with the same name
- Use Slack to talk to your fellow team members and to help debug issues.
- Use the [GitHub team discussion](https://help.github.com/en/github/building-a-strong-community/about-team-discussions) feature to share knowledge.
- Do not delete anything in the cluster that is not yours.
    - Especially secrets and configMaps--deleting these will mess up how the environment works for you and your colleagues, and more importantly, will cause unnecessary repair work for the [master builders](https://www.youtube.com/watch?v=Um-PlX6oPBQ).
    - Do not delete other people's pipelines or deployed apps.
- Do not create anything that can cause unnecessary stress to or load on your team's cluster

Remember:
- Part of what you will learn is how to be team members working on multiple microservices in the same development cluster with other developers
- "[My app runs on my computer](https://donthitsave.com/comic/2016/07/15/it-works-on-my-computer)" is necessary but not sufficient, it needs to run in the OpenShift clusters as well.
- OpenShift is like one big Lego set of software and services.
    - After this course, you will be on the way to become a master builder. It's a lot of fun!
