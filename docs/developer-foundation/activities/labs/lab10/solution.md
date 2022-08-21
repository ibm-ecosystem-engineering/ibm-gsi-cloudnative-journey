---
title: Kubernetes Lab 10 - Persistent Volumes
---

## Solution

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

verify via `ls /mnt/data` on node
