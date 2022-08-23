### Prebuilt Solution

<!--- cSpell:ignore ICPA openshiftconsole Theia userid toolset crwexposeservice gradlew bluemix ocinstall Mico crwopenlink crwopenapp swaggerui gitpat gituser  buildconfig yourproject wireframe devenvsetup viewapp crwopenlink  atemplatized rtifactoryurlsetup Kata Koda configmap Katacoda checksetup cndp katacoda checksetup Linespace igccli regcred REPLACEME Tavis pipelinerun openshiftcluster invokecloudshell cloudnative sampleapp bwoolf hotspots multicloud pipelinerun Sricharan taskrun Vadapalli Rossel REPLACEME cloudnativesampleapp artifactoryuntar untar Hotspot devtoolsservices Piyum Zonooz Farr Kamal Arora Laszewski  Roadmap roadmap Istio Packt buildpacks automatable ksonnet jsonnet targetport podsiks SIGTERM SIGKILL minikube apiserver multitenant kubelet multizone Burstable checksetup handson  stockbffnode codepatterns devenvsetup newwindow preconfigured cloudantcredentials apikey Indexyaml classname  errorcondition tektonpipeline gradlew gitsecret viewapp cloudantgitpodscreen crwopenlink cdply crwopenapp -->


!!! Info
    If you want to skip the step by step guide to how you build out each microservice you can go strait to the completed solution and get it running, see [Deploy the Inventory App solution](#deploy-the-inventory-app-solution). I would advise coming back and working through the steps, you will learn more about how these types of solutions are created and delivered.

## Deploy the Inventory App solution

In some cases with self pace hands on labs you may not get everything working. Cloud-Native development is a sort of skill and takes time to hone the craft. If you were unable to get everything working, you can deploy the Inventory App solution using the steps detailed below. 

### Inventory Service

- Create a new project from the [Inventory Management Service solution template](https://github.com/ibm-ecosystem-lab/inventory-management-svc-intermediate/generate)
named `inv-man-svc-sol-{initials}`
    - Replacing `{initials}` with your actual initials

- Clone the repository to your local machine

- Go into the cloned repository directory and execute the following command : 

    ```
    oc sync dev-{your initials} 
    ```

- Register the pipeline : [register the pipeline](/developer-intermediate/deploy-app#5.-register-the-application-in-a-devops-pipeline)

    ```
    oc pipeline <git repo url> --tekton
    ```

- Execution of the above command. Give git credentials if prompted, and **master** as the git branch to use. When prompted for the pipeline, select `ibm-java-gradle`.

- Open the [pipeline to see it running](/developer-intermediate/deploy-app/#6-view-your-application-pipeline)

### Inventory BFF

- Create a new project from the [Inventory Management BFF solution template](https://github.com/ibm-ecosystem-lab/inventory-bff-prebuild/generate)
named `inventory-management-bff-solution-{initials}`
    - Replacing `{initials}` with your actual initials

- Go into the cloned repository directory and execute the following, if you have not executed it previously:

    ```
    oc sync dev-{your initials} 
    ```

- Register the pipeline : [register the pipeline](/developer-intermediate/deploy-app#5.-register-the-application-in-a-devops-pipeline)

    ```
    oc pipeline --tekton
    ```

- Execution of the above command. Give git credentials if prompted, and **master** as the git branch to use. When prompted for the pipeline, select `igc-nodejs-v1-2-0`.

- Open the [pipeline to see it running](/developer-intermediate/deploy-app/#6-view-your-application-pipeline)

- Get the backend service name this value by executing the command `oc get svc -n dev-{initials}.
    ```
    $ oc get svc -n dev-ar   
    NAME               TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)   AGE
    inventory-bff-ar   ClusterIP   172.21.180.68   <none>        80/TCP    14m
    inventory-svc-ar   ClusterIP   172.21.4.95     <none>        80/TCP    20m
    ```

- Update the `connectsTo` value in `charts/base/values.yaml` to point to the kubernetes
service of the microservice: `connectsTo: inventory-svc-ar`


- Commit and push the changes
    ```bash
    git add .
    git commit -m "Update the connectsTo"
    git push
    ```

### Inventory UI

- Create a new project from the [Inventory Management UI solution template](https://github.com/ibm-ecosystem-lab/inventory-ui-prebuild/generate)
named `inventory-management-ui-solution-{initials}`
    - Replacing `{initials}` with your actual initials

- Clone the repository to your local machine

- Go into the cloned repository directory and execute the following, if you have not executed it previously:

    ```
    oc sync dev-{your initials} 
    ```

- Register the pipeline : [register the pipeline](/developer-intermediate/deploy-app#5.-register-the-application-in-a-devops-pipeline)
    ```
    oc pipeline --tekton
    ```

- Execution of the above command. Give git credentials if prompted, and **master** as the git branch to use. When prompted for the pipeline, select `igc-nodejs-v1-2-0`.

- Open the [pipeline to see it running](/developer-intermediate/deploy-app/#6-view-your-application-pipeline).

- Get the bff service name this value by executing the command `oc get svc -n dev-{initials}`.
    ```
    $ oc get svc -n dev-ar    
    NAME               TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)   AGE
    inventory-bff-ar   ClusterIP   172.21.180.68   <none>        80/TCP    14m
    inventory-svc-ar   ClusterIP   172.21.4.95     <none>        80/TCP    20m
    ```

- Update the `connectsTo` value in `charts/base/values.yaml` to point to the kubernetes
service of the microservice: `connectsTo: inventory-bff-ar`

- Commit and push the changes
    ```bash
    git add .
    git commit -m "Update the connectTo"
    git push
    ```

- Verify that the application is running
