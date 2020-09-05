---
title: Kubernetes Lab 5 - Debugging
---

## Problem

The Hyper Drive isn't working and we need to find out why. Let's debug the `hyper-drive` deployment so that we can reach light speed again.

Here are some tips to help you solve the Hyper Drive:

- Check the description of the `deployment`.
- Get and save the logs of one of the broken `pods`.
- Are the correct `ports` assigned.
- Make sure your `labels` and `selectors` are correct.
- Check to see if the `Probes` are correctly working.
- To fix the deployment, save then modify the yaml file for redeployment.

## Solution

### Setup environment

- Execute the command to create the Deployement, Namespace, Service below definition.

 ```shell script
  oc apply -f https://raw.githubusercontent.com/ibm-cloud-architecture/learning-cloudnative-101/master/lab-setup/lab-5-debug-k8s-setup.yaml
  ```
- Check the status of the POD.

 ```
  oc get pods -n {DEV_NAMESPACE}
  ```
- Check the description of the deployment.

 ```
  oc describe deployment hyper-drive -n {DEV_NAMESPACE}
  ```
- Save logs for broken pod.

 ```
  oc logs <pod name> -n {DEV_NAMESPACE} > /home/cloud_user/debug/broken-pod-logs.log
  ```
In the description you will see the following is wrong:
  - Selector and Label names do not match.
  - The Probe is TCP instead of HTTP Get.
  - The Service Port is 80 instead of 8080.

- To fix problem, can't do oc edit on deployement, need to delete and recreate the deployment. So export deployement and do the necessary  changes and recreate it.

 ```
  oc get deployment <deployment name> -n {DEV_NAMESPACE} -o yaml --export > hyper-drive.yml
  ```
- Delete the existing deployement.

 ```
  oc delete deployment <deployment name> -n {DEV_NAMESPACE}
  ```

- Edit the exported YAML file and apply.

 ```
  oc apply -f hyper-drive.yml -n {DEV_NAMESPACE}
  ```
- Verify the deployement.

 ```
  oc get deployment <deployment name> -n {DEV_NAMESPACE}
  ```

## Validate

 Once you get the Hyper Drive working again. Verify it by checking the endpoints.

 ```
  kubectl get ep hyper-drive
  ```