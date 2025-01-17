---
    title: Troubleshoot   
---
<!--- cSpell:ignore ICPA openshiftconsole Theia userid toolset crwexposeservice gradlew bluemix ocinstall Mico crwopenlink crwopenapp swaggerui gitpat gituser  buildconfig yourproject wireframe devenvsetup viewapp crwopenlink  atemplatized rtifactoryurlsetup Kata Koda configmap Katacoda checksetup cndp katacoda checksetup Linespace igccli regcred REPLACEME Tavis pipelinerun openshiftcluster invokecloudshell cloudnative sampleapp bwoolf hotspots multicloud pipelinerun Sricharan taskrun Vadapalli Rossel REPLACEME cloudnativesampleapp artifactoryuntar untar Hotspot devtoolsservices Piyum Zonooz Farr Kamal Arora Laszewski  Roadmap roadmap Istio Packt buildpacks automatable ksonnet jsonnet targetport podsiks SIGTERM SIGKILL minikube apiserver multitenant kubelet multizone Burstable checksetup handson  stockbffnode codepatterns devenvsetup newwindow preconfigured cloudantcredentials apikey Indexyaml classname  errorcondition tektonpipeline gradlew gitsecret viewapp cloudantgitpodscreen crwopenlink cdply crwopenapp -->

# Debugging Applications
Kubernetes provides tools to help troubleshoot and debug problems with applications.

Usually is getting familiar with how primitives objects interact with each other, checking the status of objects, and finally checking logs for any last resource clues.

## Resources
**OpenShift**
- [Debugging Applications](https://docs.openshift.com/container-platform/4.3/cli_reference/openshift_developer_cli/debugging-applications-in-odo.html)
- [Debugging Metrics](https://docs.openshift.com/container-platform/4.3/metering/metering-troubleshooting-debugging.html)

**IKS**
- [Debugging Applications](https://kubernetes.io/docs/tasks/debug-application-cluster/debug-application/)
- [Debugging Services](https://kubernetes.io/docs/tasks/debug-application-cluster/debug-service/)
- [Debugging Replication Controllers](https://kubernetes.io/docs/tasks/debug-application-cluster/debug-pod-replication-controller/)

## References

=== "OpenShift"

    ** Broken setup to debug**
    ```
    curl -sL https://gist.githubusercontent.com/csantanapr/e823b1bfab24186a26ae4f9ec1ff6091/raw/1e2a0cca964c7b54ce3df2fc3fbf33a232511877/debugk8s.64 | base64 -d | oc apply -f -
    ```

    ** Expose the service using port-forward **
    ```
    oc port-forward service/my-service 8080:80 -n debug
    ```
    ** Try to access the service **
    ```
    curl http://localhost:8080
    ```

    ** Try Out these Commands to Debug **
    ```
    oc get pods --all-namespaces
    ```
    ```
    oc get deployments
    ```
    ```
    oc describe pod
    ```
    ```
    oc explain Pod.spec.containers.resources.requests
    ```
    ```
    oc explain Pod.spec.containers.livenessProbe
    ```
    ```
    oc edit deployment
    ```
    ```
    oc logs
    ```
    ```
    oc get service
    ```
    ```
    oc get ep
    ```
    ```
    oc describe service
    ```
    ```
    oc get pods --show-labels
    ```
    ```
    oc get deployment --show-labels
    ```

=== "IKS"

    ** Broken setup to debug**
    ```
     curl -s https://gist.githubusercontent.com/csantanapr/e823b1bfab24186a26ae4f9ec1ff6091/raw/a92550dd499ebefc205fa2cd5c18123409186712/debugk8s.64 | base64 -d | kubectl apply -f -
    ```

    ** Expose the service using port-forward **
    ```
     kubectl port-forward service/my-service 8080:80 -n debug
    ```
    ** Try to access the service **
     ```
      curl http://localhost:8080
     ```

    ** Try Out these Commands to Debug **
    ```
    kubectl get pods --all-namespaces
    ```
    ```
    kubectl get deployments
    ```
    ```
    kubectl describe pod
    ```
     ```
    kubectl explain Pod.spec.containers.resources.requests
    ```
    ```
    kubectl explain Pod.spec.containers.livenessProbe
    ```
    ```
    kubectl edit deployment
    ```
    ```
    kubectl logs
    ```
    ```
    kubectl get service
    ```
    ```
    kubectl get ep
    ```
    ```
    kubectl describe service
    ```
    ```
    kubectl get pods --show-labels
    ```
    ```
    kubectl get deployment --show-labels
    ```

### Solution
- https://gist.github.com/csantanapr/e823b1bfab24186a26ae4f9ec1ff6091#file-debugk8s-yaml

## Activities
The continuous integration activities focus around Tekton the integration platform. These labs will show you how to build pipelines and test your code before deployment.

| Task                            | Description         | Link        |
| --------------------------------| ------------------  |:----------- |
| *** Try It Yourself ***                         |         |         | 
| Debugging | Find which service is breaking in your cluster and find out why.  | [Debugging](../activities/labs/lab5) | 30 min |
