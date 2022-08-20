---
title: Kubernetes Lab 6 - Rolling Updates
---

## Problem

Your company's developers have just finished developing a new version of their jedi-themed mobile game. They are ready to update the backend services that are running in your Kubernetes cluster. There is a deployment in the cluster managing the replicas for this application. The deployment is called `jedi-deployment`. You have been asked to update the image for the container named `jedi-ws` in this deployment template to a new version, `bitnami/nginx:1.18.0`.

After you have updated the image using a rolling update, check on the status of the update to make sure it is working. If it is not working, perform a rollback to the previous state.

## Solution

### Setup environment

- Execute the command to create the deployment using below definition.

 ```shell script
  oc apply -f jedi-deployment.yaml -n {DEV_NAMESPACE}
  ```

 ```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: jedi-deployment
spec:
  replicas: 2
  selector:
    matchLabels:
      app: jedi-deployment
  template:
    metadata:
      labels:
        app: jedi-deployment
    spec:
      containers:
        - image: bitnami/nginx:1.16.1
          name: jedi-ws
 ```
### Rolling Updates 

- Update the deployment to the new version like so:

  ```
   oc set image deployment/jedi-deployment jedi-ws=bitnami/nginx:1.18.0 --record 
   ```
- Check the progress of the rolling update.

  ```
   oc rollout status deployment/jedi-deployment
   ```

-  Get the Pods details in another terminal window.

  ```
   oc get pods -w
   ```

- Get a list of previous deployment revisions.

  ```
   oc rollout history deployment/jedi-deployment
   ```

- Undo the last revision.

  ```
   oc rollout undo deployment/jedi-deployment
   ```

- Check the status of the rollout.

  ```
   oc rollout status deployment/jedi-deployment
   ```
