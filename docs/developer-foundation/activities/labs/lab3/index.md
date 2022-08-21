---
title: Kubernetes Lab 3 - Manage Multiple Containers
---


<div style="border-bottom: 3px solid grey;">
        <div class="bx--row" style="padding-left:20px">
            <p class="bx--col" style="font-weight: bold;font-size: 20px;">HANDS ON LAB:</p><p class="bx--col" style="font-size: 20px;padding-left:5px;">Manage Multiple Containers</p>
        </div>
    </div>
    <div class="bx--row">
        <div class="bx--col-sm-2 bx--col-md-2 bx--col-lg-2">
         <div id="slideshowNavigator" style="font-size:15px; text-align: center; border-right: 1px solid gray;">
            <div style="padding: 10px 0 10px 0px; width:70px">
                <img src="../images/activities/goal.png"/>
                Problem
            </div>
            <div style="padding: 10px 0 10px 0px;  width:80px; ">
                <img src="../images/activities/learn.png"/>
               <p> What you'll learn</p>
            </div>
            <div style="padding: 10px 0 10px 0px;  width:55px">
                <img src="../images/activities/faq.png"/>
                Solution
            </div>
             <div style="padding: 50px 0 0px 0px; width:55px">
                <img src="../images/activities/explore.png"/>
                Explore
            </div>
        </div>
        </div>
        <div class="bx--col-sm-7 bx--col-md-7 bx--col-lg-7">
            <div  class="bx--row" style="padding: 22px 10px;">
            The legacy app is hard-coded to only serve content on port 8989, but the team wants to be able to access the service using the standard port 80
            </div>
            <div class="bx--row" style="padding: 10px 0px 0px;">
            <ul style="padding-left: 10px; !important">
            <li>
             To learn the POD, ConfigMap creation and configuration. 
            </li>
            <li>
             HAProxy configuration.
            </li>
            </ul>
           
            </div>
            <div class="bx--row">
            <ul style="padding-left: 10px; !important">
            <li>Build a Kubernetes pod that runs this legacy container and uses the ambassador design pattern to expose access to the service on port 80</li>
            <li>Create the POD and ConfigMap definition</li>
            <li>Create the POD with ambassador container thats run on haproxy:1.7</li>
            <li>The HAProxy configuration should be stored in a ConfigMap</li>
            </ul>
            </div>
            <div class="bx--row">
            <ul style="padding-left: 10px; !important">
            <li>The Ambassador Container Pattern</li>
            <li>Sidecar Pattern</li>
            <li>Adapter Pattern</li>
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
            25 Min
            </div>
        </div>
    </div>




<Accordion>
<AccordionItem title="Multiple Containers">

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
            server server1 127.0.0.1:8989 maxconn 32
    
------------------------

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
          key: vader-config-map
    
------------------------
    
    apiVersion: v1
    kind: Pod
    metadata:
      name: busybox
    spec:
      containers:
        - name: myapp-container
          image: radial/busyboxplus:curl
          command: ['sh', '-c', 'while true; do sleep 3600; done']
    
</AccordionItem>

</Accordion>

- Create the ConfigMap.

 ```shell script
  oc apply -f vader-service-ambassador-config.yaml -n {DEV_NAMESPACE}
  ```
- Create the service container pod.

 ```shell script
  oc apply -f vader-service.yaml -n {DEV_NAMESPACE}
  ```
- Create the application container pod.

 ```shell script
  oc apply -f busybox.yml -n {DEV_NAMESPACE}
  ```

- Use this command to access `vader-service` using port 80 from within the busybox pod.
  
 ```
  oc exec busybox -- curl $(kubectl get pod vader-service -o=custom-columns=IP:.status.podIP --no-headers):80
  ```



If the service is working, you should get a message that the hyper drive of the millennium falcon needs repair.

*Relevant Documentation:*
- [Kubernetes Sidecar Logging Agent](https://kubernetes.io/docs/concepts/cluster-administration/logging/#using-a-sidecar-container-with-the-logging-agent)
- [Shared Volumes](https://kubernetes.io/docs/tasks/access-application-cluster/communicate-containers-same-pod-shared-volume/)
- [Distributed System Toolkit Patterns](https://kubernetes.io/blog/2015/06/the-distributed-system-toolkit-patterns/)
