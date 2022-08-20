---
title: Kubernetes Lab 1 - Pod Creation
---

   <div style="border-bottom: 3px solid grey;">
        <div class="bx--row" style="padding-left:20px">
            <p class="bx--col" style="font-weight: bold;font-size: 20px;">HANDS ON LAB:</p><p class="bx--col" style="font-size: 20px;padding-left:5px;">Pod Creation</p>
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
                Solution
            </div>
          
        </div>
        </div>
        <div class="bx--col-sm-7 bx--col-md-7 bx--col-lg-7">
            <div class="bx--row" style="margin: 25px 10px;">Create the POD and verify the POD is working or not.</div>
            <div class="bx--row" style="padding-top: 60px; padding-left: 10px;">
             To learn the POD creation with nginx container image.  
            </div>
            <div class="bx--row" style="padding-top: 25px;">
            <ul style="padding-left: 10px; !important">
            <li>Create the POD definition YAML file</li>
            <li>Execute the command with specific namespace for creating the POD in Openshift Cluster.</li>
            <li>Execute the command to verify whether the POD is created or not.</li>
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
            10 Min
            </div>
        </div>
    </div>


<Accordion>
<AccordionItem title="Pod Creation">

    apiVersion: v1
    kind: Pod
    metadata:
      name: nginx
      namespace: {DEV_NAMESPACE}
    spec:
      containers:
        - name: nginx
          image: nginx
          command: ["nginx"]
          args: ["-g", "daemon off;", "-q"]
          ports:
          - containerPort: 80
    
</AccordionItem>
</Accordion>

- Create Yaml file using above POD definition.
- Execute the below command.

 ```shell script
  oc apply -f Downloads/podcreation.yaml -n {DEV_NAMESPACE}
  ```

## Verification

When you have completed this lab, use the following commands to validate your solution. The 'get pods' command will 

 ```shell script
    kubectl get pods -n {DEV_NAMESPACE}
    kubectl describe pod nginx -n {DEV_NAMESPACE}
  ```


