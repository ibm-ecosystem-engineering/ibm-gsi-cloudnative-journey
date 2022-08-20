---
title:  Developer Foundation Sandbox
description: The following steps will guide you on how to get access to the IBM Cloud Enterprise Sandbox
---
<!--- cSpell:ignore ICPA openshiftconsole Theia userid toolset crwexposeservice gradlew bluemix ocinstall Mico crwopenlink crwopenapp swaggerui gitpat gituser  buildconfig yourproject wireframe devenvsetup viewapp crwopenlink  atemplatized rtifactoryurlsetup Kata Koda configmap Katacoda checksetup cndp katacoda checksetup Linespace igccli regcred REPLACEME Tavis pipelinerun openshiftcluster invokecloudshell cloudnative sampleapp bwoolf hotspots multicloud pipelinerun Sricharan taskrun Vadapalli Rossel REPLACEME cloudnativesampleapp artifactoryuntar untar Hotspot devtoolsservices Piyum Zonooz Farr Kamal Arora Laszewski  Roadmap roadmap Istio Packt buildpacks automatable ksonnet jsonnet targetport podsiks SIGTERM SIGKILL minikube apiserver multitenant kubelet multizone Burstable checksetup handson  stockbffnode codepatterns devenvsetup newwindow preconfigured cloudantcredentials apikey Indexyaml classname  errorcondition tektonpipeline gradlew gitsecret viewapp cloudantgitpodscreen crwopenlink cdply crwopenapp -->

Congratulations on becoming part of the IBM Cloud-Native Learning Journey! You should have received a welcome email that provides details of the IBM Cloud Sandbox you've been assigned to and points to this welcome page. By participating in this Cloud-Native Learning Journey, you get access to:

- The Crafted Education Journey Agenda.
- A RedHat OpenShift managed service cluster with the IBM Garage Cloud-Native Toolkit and IBM Cloud Pak for Applications pre-installed.
- The development environment pre-configured in a pay-as-you-go IBM Cloud account which you will use to perform your learning tasks.


!!! warning

    If you haven't received the welcome email, it might be due to you
    not having been given access to the IBM Cloud account yet. Please contact your
    Business Development Executive or your Lab Leader to validate your invite.


## Notification

The welcome email gives you information on how to access the development environment for your team.

**IBM Cloud Sandbox Registration Details**

- **Account**: this is the IBM Cloud account with a configured sandbox development environment that will enable you to complete the learning agenda.
- **Team**: this is the name of your development team.
- **GitHub Organization**: this is the GitHub organization that will be used for storing your code during your learning activities.
- **Resource Group**: this is the IBM Cloud resource group where the development cluster and cloud resources have been provisioned.
- Example of the key information in your email:
    ```
    Cloud               : https://cloud.ibm.com/
    Account             : 1924691 - GSI Labs - IBM
    Location            : London (eu-gb)
    Sandbox Team        : Cloud-Native Squad
    GitHub Organization : https://github.com/gsi-enablement-one
    Resource Group      : gsi-cloudnative-squad
    ```

## Sandbox

It's intended for Developer Foundation Hands-on Labs and gives access to the following **sandbox** environments.

- **IBM Kubernetes Containers**.

- **IBM Openshift Containers**.

- **Katacoda Interactive Shell**.

- **Openshift Interactive Shell**.

##  IBM Cloud Openshift Containers and Kubernetes Containers



**Note**: If you have any issue with the following steps, please raise an issue on the **#gsi-labs-external** [Slack Channel](https://gsicsi.slack.com/archives/CSRDJD5HA). All issues should be reported there.

!!! note

    Follow these steps to check you can access your team's Developer Tools environment.

Log in and view the resources:

- Log in to the [IBM Cloud](https://cloud.ibm.com).
- The IBM Cloud Sandbox registration welcome email will include your account information, team, GitHub organization, and resource group.
- In the IBM Cloud console, switch to the account specified in the email.
- Navigate to the *Resource List*.
- In the Group filter, select your team's resource group.
- Click on **Expand All** (top right) to show all its resources.
- Under Cluster, you should see the cluster named `workshop-ocp46-{team}` where `{team}` is the name of your team. Some clusters may have a different number if there is more than one of that type.

Explore the Red Hat OpenShift resources and set up the CLI:

- In the Tags filter, enter both `ocp` to see just the Red Hat OpenShift cluster and services.
![Resource List](../images/checksetup/devtoolsservices.png)
- Click on each cloud service instance name and check that you can open each one's dashboard.
- Click on the Red Hat OpenShift cluster names to open their dashboards.
- Switch to the **Access** tab.
- Follow the instructions to install the CLI, then access the cluster from the CLI and validate that you are successfully connected.
- Press the *OpenShift web console* button and verify that you can open the Red Hat OpenShift console.

Explore the IKS resources and set up the CLI:

- Return to the **Resource List**.
- Remove the `ocp` tags and add the `iks` tag.
- Repeat the same steps for your team's Kubernetes cluster and services.


!!! success

You have completed this task if you have:
- Managed to access your IBM Cloud account.
- Viewed your team's Red Hat OpenShift cluster.
- Accessed the cluster from the command line.


## Katacoda

- Katacoda is an interactive learning and training platform.

- Katacoda provides browser-based hands-on labs without any downloads or configuration.

- [Learn Kubernetes using interactive browser-based scenarios](https://www.katacoda.com/courses/kubernetes).

- [Learn Openshift using interactive browser-based scenarios](https://www.katacoda.com/openshift).

## OpenShift Interactive Learning Platform

Openshift Interactive Learning Scenarios provides a pre-configured OpenShift instance, accessible from your browser without any downloads or configuration.

- [Learn OpenShift using and interactive browser-based shell](https://learn.openshift.com/).
