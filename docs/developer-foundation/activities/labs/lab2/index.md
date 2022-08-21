---
title: Kubernetes Lab 2 - Pod Configuration
---


 <div style="border-bottom: 3px solid grey;">
        <div class="bx--row" style="padding-left:20px">
            <p class="bx--col" style="font-weight: bold;font-size: 20px;">HANDS ON LAB:</p><p class="bx--col" style="font-size: 20px;padding-left:5px;">Pod Configuration</p>
        </div>
    </div>
    <div class="bx--row">
        <div class="bx--col-sm-2 bx--col-md-2 bx--col-lg-2">
         <div id="slideshowNavigator" style="font-size:15px; text-align: center; border-right: 1px solid gray;">
            <div style="padding: 10px 0 10px 0px; width:70px">
                <img src="images/goal.png"/>
                Problem
            </div>
            <div style="padding: 10px 0 10px 0px;  width:80px; ">
                <img src="images/learn.png"/>
               <p> What you'll learn</p>
            </div>
            <div style="padding: 10px 0 10px 0px;  width:55px">
                <img src="images/faq.png"/>
                Exercises
            </div>
        </div>
        </div>
        <div class="bx--col-sm-7 bx--col-md-7 bx--col-lg-7">
            <div class="bx--row" style="padding: 22px 10px;">
            Create definition file like  <span style="padding: 0px 5px 0px 10px;background-color: grey;border-radius: 4px;"> yoda-service-pod.yml </span>, and then using the definition file create a POD, ConfigMap,Secret and Service Account.
            </div>
            <div class="bx--row" style="padding: 20px 0px 0px 10px;">
           To learn the POD, ConfigMap, Secret and Service Account creation and configuration. 
            </div>
            <div class="bx--row" style="padding: 50px 0px 0px 0px;">
            <ul style="padding-left: 10px; !important">
            <li>Create the definition file for POD, ConfigMap, Secret and Service Account</li>
            <li>Execute the command and create the respective resources</li>
            <li>Verify the created resources</li>
            </ul>
            </div>
           
        </div>
         <div class="bx--col-sm-2 bx--col-md-2 bx--col-lg-2">
            <div class="bx--row" style="padding-top: 15px;">
            Difficulty Level
            </div>
             <div class="bx--row" style="padding-top: 6px;">
            Duration
            </div>
        </div>
         <div class="bx--col-sm-1 bx--col-md-1 bx--col-lg-1">
            <div class="bx--row" style="font-weight:bold; padding-top: 15px;">
            Beginner
            </div>
            <div class="bx--row" style="font-weight:bold; padding-top: 7px;">
            15 Min
            </div>
        </div>
    </div>



<Accordion>
<AccordionItem title="Pod Configuration">

    
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: yoda-service-config
    data:
      yoda.cfg: |-
        yoda.baby.power=100000000
        yoda.strength=10
   
------------------------
    
    apiVersion: v1
    kind: Secret
    metadata:
      name: yoda-db-password
    stringData:
      password: 0penSh1ftRul3s!
    
------------------------
    
    apiVersion: v1
    kind: Pod
    metadata:
      name: yoda-service
    spec:
      serviceAccountName: yoda-svc
      containers:
      - name: yoda-service
        image: bitnami/nginx
        volumeMounts:
        - name: config-volume
          mountPath: /etc/yoda-service
        env:
        - name: DB_PASSWORD
          valueFrom:
            secretKeyRef:
              name: yoda-db-password
              key: password
        resources:
          requests:
            memory: "64Mi"
            cpu: "250m"
          limits:
            memory: "128Mi"
            cpu: "500m"
      volumes:
      - name: config-volume
        configMap:
            name: yoda-service-config
            key:service-config
    
</AccordionItem>
</Accordion>


- Create the Service Account executing the following command.

 ```shell script
  oc create sa yoda-svc -n {DEV_NAMESPACE}
  ```

- Once the Service Account created, create the ConfigMap,Secret.

- Create the Yaml file for POD, ConfigMap, Secret using below POD configuration.

- Execute the below command for creating ConfigMap,Secret.

  ```shell script
  oc apply -f Downloads/yoda-service-config.yaml -n {DEV_NAMESPACE}
  oc apply -f Downloads/yoda-db-password.yaml -n {DEV_NAMESPACE}
  ```  
- Execute the below command for creating the POD.

 ```shell script
  oc apply -f Downloads/yoda-service-pod.yml -n {DEV_NAMESPACE}
  ``` 
  
## Verification

To verify your setup is complete, check `/etc/yoda-service` for the `yoda.cfg` file and use the `cat` command to check it's contents.

```
kubectl exec -it yoda-service /bin/bash
cd /etc/yoda-service
cat yoda.cfg
```