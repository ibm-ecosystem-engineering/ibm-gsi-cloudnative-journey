---
title: Cloud-Native Toolkit installation
---

The Cloud-Native Toolkit is available as a simple installation on top of an OpenShift cluster. 

### 1. Provision the infrastructure

There are several options for getting the infrastructure

#### TechZone infrastructure

IBM TechZone provides infrastructure for education or demonstration purposes. 
Several managed environments are available. For IBM Cloud OpenShift, use this
collection: https://techzone.ibm.com/collection/roks-basics-lab#tab-1

#### Provisioned infrastructure

The Cloud-Native Toolkit provides automation solutions to provision
infrastructure on IBM Cloud, AWS, or Azure. Each option requires a cloud account
with necessary permissions in order to run.  Follow the instructions in the
repository to provision the environment.

 - https://github.com/IBM/automation-ibmcloud-infra-openshift
 - https://github.com/IBM/automation-azure-infra-openshift
 - https://github.com/IBM/automation-aws-infra-openshift

#### Bring your own cluster

If you have an existing cluster that was provisioned manually or through some other means, you can use it to install the Toolkit. Make sure you have the server url and the credentials for a user that has sufficient permissions to create namespaces and RBAC rules in the cluster.

### 2. Install the Toolkit into the cluster

To install the toolkit perform the following steps:

1. In a command or terminal window ensure you are logged onto your cluster (oc login or kubectl login) with an admin account with the ability to create new namespaces/projects on the cluster and setup RBAC security.

2. Run the following command (choose your operating system):

    **For Linux / MacOS**
 
    ```
    curl -sfL get.cloudnativetoolkit.dev | sh -
    ```

    **For Windows**

    ```
    oc create -f https://raw.githubusercontent.com/cloud-native-toolkit/ibm-garage-iteration-zero/master/install/install-ibm-toolkit.yaml
    sleep 5
    oc wait pod -l job-name=ibm-toolkit --for=condition=Ready -n default
    oc logs job/ibm-toolkit -f -n default
    ```

3. Wait for the automation scripts to complete the installation of the toolkit - this can take several minutes
