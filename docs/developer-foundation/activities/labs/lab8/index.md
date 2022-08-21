---
title: Kubernetes Lab 8 - Services
---

## Problem

We have a `jedi-deployment` and `yoda-deployment` that need to communicate with others.  The `jedi` needs to talk to the world(outside the cluster), while `yoda` only needs to talk to jedi council(others in the cluster).

## Solution

- Examine the two deployments, and create two services that meet the following criteria:

**jedi-svc**
 - The service name is `jedi-svc`.
 - The service exposes the pod replicas managed by the deployment named `jedi-deployment`.
 - The service listens on port `80` and its targetPort matches the port exposed by the pods.
 - The service type is `NodePort`.

**yoda-svc**
 - The service name is `yoda-svc`.
 - The service exposes the pod replicas managed by the deployment named `yoda-deployment`.
 - The service listens on port `80` and its targetPort matches the port exposed by the pods.
 - The service type is `ClusterIP`.

### Setup environment:

 - Execute the command to create the deployments  using below definition.

 ```shell script
  kubectl apply -f https://gist.githubusercontent.com/csantanapr/87df4292e94441617707dae5de488cf4/raw/cb515f7bae77a3f0e76fdc7f6aa0f4e89cc5fec7/lab-8-service-setup.yaml
  ```
 - Create two services **jedi-svc** & **yoda-svc** using below yam definition.

    ```yaml
    apiVersion: v1
    kind: Service
    metadata:
    name: jedi-svc
    spec:
    type: NodePort
    selector:
        app: jedi
    ports:
    - protocol: TCP
        port: 80
        targetPort: 8080
    ```

    ```yaml
    apiVersion: v1
    kind: Service
    metadata:
    name: yoda-svc
    spec:
    type: ClusterIP
    selector:
        app: yoda
    ports:
    - protocol: TCP
        port: 80
        targetPort: 8080
    ```
 - Execute the below commands to creating services.

 ```shell script
  oc apply -f jedi-svc.yaml -n {DEV_NAMESPACE}
  oc apply -f oda-svc.yaml -n {DEV_NAMESPACE}
  ```  
