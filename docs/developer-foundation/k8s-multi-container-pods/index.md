---
title: Multi-Container Pods
---
<!--- cSpell:ignore ICPA openshiftconsole Theia userid toolset crwexposeservice gradlew bluemix ocinstall Mico crwopenlink crwopenapp swaggerui gitpat gituser  buildconfig yourproject wireframe devenvsetup viewapp crwopenlink  atemplatized rtifactoryurlsetup Kata Koda configmap Katacoda checksetup cndp katacoda checksetup Linespace igccli regcred REPLACEME Tavis pipelinerun openshiftcluster invokecloudshell cloudnative sampleapp bwoolf hotspots multicloud pipelinerun Sricharan taskrun Vadapalli Rossel REPLACEME cloudnativesampleapp artifactoryuntar untar Hotspot devtoolsservices Piyum Zonooz Farr Kamal Arora Laszewski  Roadmap roadmap Istio Packt buildpacks automatable ksonnet jsonnet targetport podsiks SIGTERM SIGKILL minikube apiserver multitenant kubelet multizone Burstable checksetup handson  stockbffnode codepatterns devenvsetup newwindow preconfigured cloudantcredentials apikey Indexyaml classname  errorcondition tektonpipeline gradlew gitsecret viewapp cloudantgitpodscreen crwopenlink cdply crwopenapp -->

## Multi-Containers Pod

Container images solve many real-world problems with existing packaging and deployment tools, but in addition to these significant benefits, containers offer us an opportunity to fundamentally re-think the way we build distributed applications. Just as service oriented architectures (SOA) encouraged the decomposition of applications into modular, focused services, containers should encourage the further decomposition of these services into closely cooperating modular containers.  By virtue of establishing a boundary, containers enable users to build their services using modular, reusable components, and this in turn leads to services that are more reliable, more scalable and faster to build than applications built from monolithic containers.

## Resources

**OpenShift**

**IKS**
- [Sidecar Logging](https://kubernetes.io/docs/concepts/cluster-administration/logging/#using-a-sidecar-container-with-the-logging-agent)
- [Shared Volume Communication](https://kubernetes.io/docs/tasks/access-application-cluster/communicate-containers-same-pod-shared-volume/)
- [Toolkit Patterns](https://kubernetes.io/blog/2015/06/the-distributed-system-toolkit-patterns/)
- [Brendan Burns Paper](https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/45406.pdf)

## References

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-pod
spec:
  volumes:
  - name: shared-data
    emptyDir: {}
  containers:
  - name: app
    image: bitnami/nginx
    volumeMounts:
      - name: shared-data
        mountPath: /app
    ports:
    - containerPort: 8080
  - name: sidecard
    image: busybox
    volumeMounts:
    - name: shared-data
      mountPath: /pod-data
    command: ['sh', '-c', 'echo Hello from the side container > /pod-data/index.html && sleep 3600']
```

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-pod
spec:
  shareProcessNamespace: true
  containers:
  - name: app
    image: bitnami/nginx
    ports:
    - containerPort: 8080
  - name: sidecard
    image: busybox
    securityContext:
      capabilities:
        add:
        - SYS_PTRACE
    stdin: true
    tty: true
```

=== "Openshift"

    ** Attach Pods Together **  
    ```
    oc attach -it my-pod -c sidecard
    ```
    ```
    ps ax
    ```
    ```
    kill -HUP 7
    ```
    ```
    ps ax
    ```

=== "IKS"

    ** Attach Pods Together **
    ```
    kubectl attach -it my-pod -c sidecard
    ```
    ```
    ps ax
    ```
    ```
    kill -HUP 7
    ```
    ```
    ps ax
    ```


## Activities

| Task                            | Description         | Link        |
| --------------------------------| ------------------  |:----------- |
| *** Try It Yourself ***                         |         |         |   
| Multiple Containers | Build a container using legacy container image.| [Multiple Containers](../activities/labs/lab3) |
