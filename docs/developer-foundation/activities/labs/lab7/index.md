---
title: Kubernetes Lab 7 - Cron Jobs
---

## Problem

Your commander has a simple data process that is run periodically to check status. They would like to stop doing this manually in order to save time, so you have been asked to implement a cron job in the Kubernetes cluster to run this process. 
 - Create a cron job called xwing-cronjob using the `ibmcase/xwing-status:1.0` image. 
 - Have the job run every second minute with the following cron expression: `*/2 * * * *`.
 - Pass the argument `/usr/sbin/xwing-status.sh` to the container.


## Solution

 - Create the cronjob executing the below command and use the below yaml defination.

 ```shell script
  oc apply -f Downloads/FoundationHandsOn/cronjob.yaml -n {DEV_NAMESPACE}
  ```

 ```yaml
   apiVersion: batch/v1beta1
   kind: CronJob
   metadata:
   name: xwing-cronjob
   spec:
   schedule: "*/2 * * * *"
   jobTemplate:
      spec:
         template:
         spec:
            containers:
            - name: xwing-status
               image: ibmcase/xwing-status:1.0
               args:
               - /usr/sbin/xwing-status.sh
            restartPolicy: OnFailure
  ```

 - To view th Cronjob.

 ```shell script
  oc get cronjob xwing-cronjob -n -n {DEV_NAMESPACE}
  ```

## Verification

- Run `kubectl get cronjobs.batch` and `LAST-SCHEDULE` to see last time it ran
- From a bash shell, run the following to see the logs for all jobs:

```
jobs=( $(kubectl get jobs --no-headers -o custom-columns=":metadata.name") )
echo -e "Job \t\t\t\t Pod \t\t\t\t\tLog"
for job in "${jobs[@]}"
do
   pod=$(kubectl get pods -l job-name=$job --no-headers -o custom-columns=":metadata.name")
   echo -en "$job \t $pod \t"
   kubectl logs $pod
done
```
