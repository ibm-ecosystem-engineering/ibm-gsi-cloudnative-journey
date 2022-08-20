---
title: Kubernetes Lab 3 - Manage Multiple Containers
---

## Solution

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: vader-service-ambassador-config
data:
  haproxy.cfg: |-
    global
        daemon
        maxconn 256

    defaults
        mode http
        timeout connect 5000ms
        timeout client 50000ms
        timeout server 50000ms

    listen http-in
        bind *:80
        server server1 127.0.0.1:8775 maxconn 32
```

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: vader-service
spec:
  containers:
  - name: millennium-falcon
    image: ibmcase/millennium-falcon:1
  - name: haproxy-ambassador
    image: haproxy:1.7
    ports:
    - containerPort: 80
    volumeMounts:
    - name: config-volume
      mountPath: /usr/local/etc/haproxy
  volumes:
  - name: config-volume
    configMap:
      name: vader-service-ambassador-config
``` 

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: busybox
spec:
  containers:
  - name: myapp-container
    image: radial/busyboxplus:curl
    command: ['sh', '-c', 'while true; do sleep 3600; done']
```

```bash
kubectl exec busybox -- curl $(kubectl get pod vader-service -o=jsonpath='{.status.podIP}'):80
```
