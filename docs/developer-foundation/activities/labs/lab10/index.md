---
title: Kubernetes Lab 10 - Persistent Volumes
---

## Problem

The death star plans can't be lost no matter what happens so we need to make sure we protect them at all costs.


## Solution

In order to do that you will need to do the following:


### Create a `PersistentVolume`:

- The PersistentVolume should be named `postgresql-pv`.

- The volume needs a capacity of `1Gi`.

- Use a storageClassName of `localdisk`.

- Use the accessMode `ReadWriteOnce`.

- Store the data locally on the node using a `hostPath` volume at the location `/mnt/data`.

- Execute the below commands to creating PersistentVolume using yaml definition.

 ```shell script
  oc apply -f pv.yaml -n {DEV_NAMESPACE}
  ```  

 ```yaml
    apiVersion: v1
    kind: PersistentVolume
    metadata:
    name: postgresql-pv
    spec:
    storageClassName: localdisk
    capacity:
        storage: 1Gi
    accessModes:
        - ReadWriteOnce
    hostPath:
        path: "/mnt/data"
  ```


### Create a `PersistentVolumeClaim`:

- The PersistentVolumeClaim should be named `postgresql-pv-claim`.

- Set a resource request on the claim for `500Mi` of storage.

- Use the same storageClassName and accessModes as the PersistentVolume so that this claim can bind to the PersistentVolume.

- Execute the below commands to creating PersistentVolumeClaim using yaml definition.

 ```shell script
  oc apply -f pvc.yaml -n {DEV_NAMESPACE}
  ```  

 ```yaml
    apiVersion: v1
    kind: PersistentVolumeClaim
    metadata:
    name: postgresql-pv-claim
    spec:
    storageClassName: localdisk
    accessModes:
        - ReadWriteOnce
    resources:
        requests:
        storage: 500Mi
  ```

### Create a `Postgresql` Pod configured to use the `PersistentVolumeClaim`:

- The Pod should be named `postgresql-pod`.

- Use the image `bitnami/postgresql`.

- Expose the containerPort `5432`.

- Set an `environment variable` called `MYSQL_ROOT_PASSWORD` with the value `password`.

- Add the `PersistentVolumeClaim` as a volume and mount it to the container at the path `/bitnami/postgresql/`.

- Execute the below commands to creating POD using yaml definition.

 ```shell script
  oc apply -f postgresql-pod.yaml -n {DEV_NAMESPACE}
  ``` 

 ```yaml
    apiVersion: v1
    kind: Pod
    metadata:
    name: postgresql-pod
    spec:
    containers:
    - name: postgresql
        image: bitnami/postgresql
        ports:
        - containerPort: 5432
        env:
        - name: MYSQL_ROOT_PASSWORD
        value: password
        volumeMounts:
        - name: sql-storage
        mountPath: /bitnami/postgresql/
    volumes:
    - name: sql-storage
        persistentVolumeClaim:
        claimName: postgresql-pv-claim
  ```

