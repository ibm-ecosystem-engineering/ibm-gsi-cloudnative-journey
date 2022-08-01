---
title: What is Cloud-Native?
---

## Introduction

Cloud is everywhere. Today, many companies want to migrate their
applications to the cloud. For this to be done, the
applications must be re-architected to fully use the cloud advantages.

<iframe width="560" height="315" src="https://www.youtube.com/embed/fp9_ubiKqFU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## What is Cloud-Native?

Cloud-native is about how we build and run applications taking full
advantage of cloud computing rather than worrying about where we deploy
it:

-   A cloud-native application consists of discrete and reusable components
    known as microservices that are designed to integrate into any cloud
    environment.

-   These microservices act as building blocks and are often packaged in
    containers.

-   Microservices work together as a whole to comprise an application,
    yet each can be independently scaled, continuously improved, and
    quickly iterated through automation and orchestration processes.

-   The flexibility of each microservice adds to the agility and
    continuous improvement of cloud-native applications.

!!! info "CNCF Cloud-Native Definition"

    Cloud-native technologies empower organizations to build and run
    scalable applications in modern, dynamic environments such as public,
    private, and hybrid clouds. Containers, service meshes, microservices,
    immutable infrastructure, and declarative APIs exemplify this approach.

    These techniques enable loosely coupled systems that are resilient,
    manageable, and observable. Combined with robust automation, they allow
    engineers to make high-impact changes frequently and predictably with
    minimal toil.

    The Cloud-Native Computing Foundation seeks to drive adoption of this
    paradigm by fostering and sustaining an ecosystem of open source,
    vendor-neutral projects. We democratize state-of-the-art patterns to
    make these innovations accessible for everyone.

## Why Cloud-Native?

Cloud-native applications are different from the traditional
applications that run in your data centers. Traditional applications
are not built with cloud
compatibility in mind. They may have strong ties with the internal
systems and they cannot take advantage of all the benefits of the
cloud.

We need a new architecture for our applications to utilize the
benefits of the cloud. The applications' design needs to keep
the cloud in mind and take advantage of cloud services like storage,
queuing, caching, etc.

-   Speed, safety, and scalability come with cloud-native applications.

-   Helps to quickly deliver the advancements.

-   Allows loose ties into the corporate IT where it can
    destabilize legacy architectures.

-   Allows continuous deployment of applications with zero downtime.

-   Infrastructure is less predictable.

-   Service instances are all disposable.

-   Deployments are immutable.

-   To meet the expectations of today’s world customers, these
    systems are architected for elastic scalability.

## Cloud-native concepts

Some of the important characteristics of cloud-native applications are
as follows.

-   Disposable infrastructure.

-   Isolation.

-   Scalability.

-   Disposable architecture.

-   Value-added cloud services.

-   Polyglot cloud.

-   Self-sufficient, full-stack teams.

-   Cultural Change.

### Disposable Infrastructure

While creating applications on the cloud, you need several cloud resources
as part of it. We often hear how easy it is to create all these
resources. But did you ever think about how easy is to dispose of them? It's
not easy and that's why you don’t hear much about it.

In traditional or legacy applications, we have all these resources
residing on machines. If these go down, we need to redo them again and
most of this is handled by the operations team manually. So, when we are
creating applications on the cloud, we bring those resources like load
balancers, databases, and gateways as well along with
machine images and containers.

While creating these applications, you should always keep in mind that
if you are creating a resource on demand, you should also be able to
destroy it when not required. Without this, we cannot achieve the
factors speed, safety, and scalability. If you want this to happen, we
need automation.

Automation allows you to:

-   Deliver new features at any time.

-   Deliver patches faster.

-   Improve system quality.

-   Facilitate team scale and efficiency.

Now you should know what we are talking about. Disposable infrastructure is
nothing but `Infrastructure as Code`.

### Infrastructure as Code

Here, you develop the code for automation exactly as same as you do
for the rest of the application using agile methodologies.

-   Automation code is driven by a story.

-   Versioned in the same repository as the rest of the code.

-   Continuously tested as part of the CI/CD pipeline.

-   Test environments are created and destroyed along with test runs.

Thus, disposable infrastructure lays the groundwork for scalability and
elasticity.

### Isolation

In traditional or legacy monolithic applications when you fix a bug or an 
error, the entire application needs to be redeployed.
This can cause side effects that you can never predict. Changes
may break any components in the application as they are all inter
related.

In cloud-native applications, to avoid the above scenario, the system is
decomposed into bounded isolated components. Each service will be
defined as one component independent of others. This way, when there is a
bug or error in the application, you can just fix the specific
component avoiding any side effects as the
components are all unrelated pieces of code.

Thus, cloud-native systems are resilient to human-made errors. To
achieve this we need isolation to avoid a problem in a single
component affecting the entire system. This also helps you to introduce
changes the application quickly and with confidence.

### Scalability

Simply deploying your application to the cloud does not make it
cloud-native. To be cloud-native it needs to use the full benefits
of the cloud. One key feature is scalability.

In today’s world, once your business starts growing, the number of users
keeps increasing and they may be from different locations. Your
application should be able to support a large number of devices while 
maintaining its responsiveness using an efficient and cost-effective way.

To achieve this, a cloud-native application runs in multiple runtimes
spread across multiple hosts. The applications should be designed and
architected so it supports multiple regions and active-active
deployments. This helps you to increase the availability and avoids
single-point failures.

### Disposable architecture

Leveraging the disposable infrastructure and scaling isolated components
is important for cloud-native applications. Disposable architecture is
based on this and it takes disposability and replacement concepts to
the next level.

Most of us think in a monolithic way because we are used to traditional
or legacy applications. This may lead us to make decisions in a
monolithic way rather than in a cloud-native way. With monolithic thinking,
we tend to be safe and don’t do a lot of experimentation. But disposable
architecture is exactly the opposite. In this
approach, we develop small pieces of the component and keep
experimenting with it to find an optimal solution.

When there is a breakthrough in the application, you can’t simply make
decisions based on the available information which may be incomplete or
inaccurate. So, with disposable architecture, you start with small
increments, and invest time to find the optimal solution. Sometimes,
there may be a need to completely replace the component, but that
initial work was just the cost of getting the information that caused
the breakthrough. This helps you to minimize waste allowing you to use
your resources on controlled experiments efficiently and get good value
out of it in the end.

### Value-added cloud services

When you are defining an application, there are many things you need to
care about. Every service will be associated with many things like
databases, storage, redundancy, monitoring, etc. For your application,
along with your components, you also need to scale the data. You can
reduce the operational risk and also get all such things at greater
velocity by leveraging the value-added services that are available on
the cloud. Sometimes, you may need third party services if they are not
available on your cloud. You can externally hook them up with your
application as needed.

By using the value-added services provided by your cloud provider, you
will get to know all the available options on your cloud and you can
also learn about all the new services. This will help you to take good
long-termed decisions. You can use a different service if you find
it more suitable for your component and hook that up with your
application based on the requirements.

### Polyglot cloud

Most of you are familiar with polyglot programming. For your
application, based on the component, you can choose the programming
languages that best suits it. You need not stick to a single programming
language for the entire application. If you consider polyglot
persistence, you can choose the storage mechanism that better suits
in a component by component basis. It allows a better global scale.

Similarly, the next thing will be a polyglot cloud. Like above, here you
choose a cloud provider that better suits your application in a component
by component
basis. For the majority of your components, you may have to go to your cloud
provider. But, this does not stop you from choosing a different one if
it suits well for any of your application components. So, you can run
different components of your cloud-native system on different cloud
providers based on your requirements.

### Self-sufficient, full-stack teams

In a traditional setup, many organizations have teams based on skill sets
like backend, user interface, database, operations, etc. Such a
structure will not allow you to build cloud-native systems.

In cloud-native systems, the system is composed of bounded isolated
components that have their own resources. Each one of such components must
be owned by a self-sufficient, full-stack team entirely
responsible for all the resources that belong to that particular
component. In this setup, this team tends to focus on quality upfront as
they are the ones who deploy it and they will be taking care of it if
the component is broken. It is more like you build it and then you run
it. So, the team can continuously deliver advancements to the components
at their own pace. Also, they are completely responsible for delivering
these safely.

### Cultural Change

Cloud-native is a different way of thinking. We need to first make up our
minds, not just the systems, to utilize the full benefits of the cloud.
Compared to the traditional systems, there will be lots of things we do
differently in cloud-native systems.

To make that happen, cultural change is really important. To change the
thinking at a high level, we just to first prove that the low-level
practices can truly deliver and encourage lean thinking. With these
practices, you can conduct experimentation. Based on the feedback from
business, you can quickly and safely deliver your applications that can
scale.

## Cloud-native Roadmap

You can define your cloud-native roadmap in many ways. You can get
there by choosing different paths. Let us see the trail map defined by
CNCF.

CNCF defined the Cloud-Native Trail Map providing an overview for
enterprises starting their cloud-native journey as follows.

This cloud map gives us various steps that an engineering team may use
while considering the cloud-native technologies and exploring them. The
most common ones among them are containerization, CI/CD, and
orchestration. The next crucial pieces will be observability & analysis and
service mesh. And later comes the rest of them like networking,
distributed database, messaging, container runtime, and software
distribution based on your requirements.

![CNCF\_TrailMap\_latest.png](../images/cloud-native-overview/CNCF_TrailMap_latest.png)

-   You cannot build cloud-native applications without containerization.
    This helps your application to run in any computing
    environment. Basically, all your code and dependencies are packaged
    up together  into a single unit here. Among the different container
    platforms available, Docker is the preferred one.

-   It's convenient to set up a CI/CD pipeline to bring all the changes
    in the code to the container automatically. There are many
    tools available for this like Jenkins, Travis, etc.

-   We need container orchestration to manage its lifecycles. 
    Kubernetes is a popular solution.

-   Monitoring and observability play a very important role so it's
    recommended to use techniques like logging, tracing, metrics
    etc.

-   To enable more complex operational requirements, you can use a
    service mesh. It helps you out with several things like service
    discovery, health, routing, A/B testing, etc. Istio is a popular tool.

-   Networking plays a crucial role. You should define flexible
    networking layers based on your requirements. For this, you can use
    Calico, Weave Net, etc.

-   Sometimes, you may need distributed databases. These are required
    if you need more scalability and resiliency.

-   Messaging may be required sometimes too. You can use queues like
    Kafka, RabbitMQ, etc.

-   Container registry helps you to store all your containers. You can
    also enable image scanning and signing if required.

-   As a part of your application, sometimes you may need a secure
    software distribution.

Also, if you want to see the cloud-native landscape, check it out
[here](https://landscape.cncf.io/images/landscape.png).

## Summary

In this section, we covered the fundamentals of cloud-native systems. Now 
you should know what cloud-native is, why we need it, and how important it is.
Cloud-native is not just deploying your application on the cloud, it's
also about taking full advantage of the cloud. Also, with the cloud-native
roadmap, you will get an idea about how to design and architect your
cloud-native system. You can also get an overview of the different tools,
frameworks, platforms, etc. with the cloud-native landscape.

You can check
[Cloud Native Applications](https://www.ibm.com/cloud/learn/cloud-native)
if want to learn more.

## References

-   [Cloud Native Applications](https://www.ibm.com/cloud/learn/cloud-native)

-   [John Gilbert, (2018). Cloud-Native Development Patterns and Best
    Practices. Publisher: Packt
    Publishing](https://learning.oreilly.com/library/view/cloud-native-development/9781788473927/)

-   [CNCF landscape](https://github.com/cncf/landscape)

-   [CNCF Definition](https://github.com/cncf/toc/blob/master/DEFINITION.md)
