(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{"013z":function(e,t,a){"use strict";var i=a("q1tI"),o=a.n(i),n=a("NmYn"),s=a.n(n),r=a("Wbzz"),l=a("Xrax"),c=a("k4MR"),b=a("TSYQ"),d=a.n(b),u=a("QH2O"),p=a.n(u),h=a("qKvR"),m=function(e){var t,a=e.title,i=e.theme,o=e.tabs,n=void 0===o?[]:o;return Object(h.b)("div",{className:d()(p.a.pageHeader,(t={},t[p.a.withTabs]=n.length,t[p.a.darkMode]="dark"===i,t))},Object(h.b)("div",{className:"bx--grid"},Object(h.b)("div",{className:"bx--row"},Object(h.b)("div",{className:"bx--col-lg-12"},Object(h.b)("h1",{id:"page-title",className:p.a.text},a)))))},g=a("BAC9"),y=function(e){var t=e.relativePagePath,a=e.repository,i=Object(r.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||i,n=o.baseUrl,s=o.subDirectory,l=n+"/edit/"+o.branch+s+"/src/pages"+t;return n?Object(h.b)("div",{className:"bx--row "+g.row},Object(h.b)("div",{className:"bx--col"},Object(h.b)("a",{className:g.link,href:l},"Edit this page on GitHub"))):null},f=a("FCXl"),v=a("dI71"),w=a("I8xM"),j=function(e){function t(){return e.apply(this,arguments)||this}return Object(v.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,i=e.slug,o=i.split("/").filter(Boolean).slice(-1)[0],n=a.map((function(e){var t,a=s()(e,{lower:!0,strict:!0}),n=a===o,l=new RegExp(o+"/?(#.*)?$"),c=i.replace(l,a);return Object(h.b)("li",{key:e,className:d()((t={},t[w.selectedItem]=n,t),w.listItem)},Object(h.b)(r.Link,{className:w.link,to:""+c},e))}));return Object(h.b)("div",{className:w.tabsContainer},Object(h.b)("div",{className:"bx--grid"},Object(h.b)("div",{className:"bx--row"},Object(h.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(h.b)("nav",{"aria-label":t},Object(h.b)("ul",{className:w.list},n))))))},t}(o.a.Component),A=a("MjG9"),O=a("CzIb"),k=a("Asxa"),x=a("OIbQ"),I=a.n(x),C=function(e){var t=e.date,a=new Date(t);return t?Object(h.b)(k.c,{className:I.a.row},Object(h.b)(k.a,null,Object(h.b)("div",{className:I.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,o=e.Title,n=t.frontmatter,b=void 0===n?{}:n,d=t.relativePagePath,u=t.titleType,p=b.tabs,g=b.title,v=b.theme,w=b.description,k=b.keywords,x=b.date,I=Object(O.a)().interiorTheme,N=Object(r.useStaticQuery)("2456312558").site.pathPrefix,T=N?i.pathname.replace(N,""):i.pathname,S=p?T.split("/").filter(Boolean).slice(-1)[0]||s()(p[0],{lower:!0}):"",E=v||I;return Object(h.b)(c.a,{tabs:p,homepage:!1,theme:E,pageTitle:g,pageDescription:w,pageKeywords:k,titleType:u},Object(h.b)(m,{title:o?Object(h.b)(o,null):g,label:"label",tabs:p,theme:E}),p&&Object(h.b)(j,{title:g,slug:T,tabs:p,currentTab:S}),Object(h.b)(A.a,{padded:!0},a,Object(h.b)(y,{relativePagePath:d}),Object(h.b)(C,{date:x})),Object(h.b)(f.a,{pageContext:t,location:i,slug:T,tabs:p,currentTab:S}),Object(h.b)(l.a,null))}},"4itA":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return p}));var i=a("wx14"),o=a("zLVn"),n=(a("q1tI"),a("7ljp")),s=a("013z"),r=(a("qKvR"),{}),l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},c=l("AnchorLinks"),b=l("AnchorLink"),d={_frontmatter:r},u=s.a;function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(n.b)(u,Object(i.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(c,{mdxType:"AnchorLinks"},Object(n.b)(b,{mdxType:"AnchorLink"},"Introduction"),Object(n.b)(b,{mdxType:"AnchorLink"},"What is continuous integration ?"),Object(n.b)(b,{mdxType:"AnchorLink"},"Continuous Integration"),Object(n.b)(b,{mdxType:"AnchorLink"},"References"),Object(n.b)(b,{to:"/developer-intermediate/continuous-integration-handson",mdxType:"AnchorLink"},"Activities")),Object(n.b)("h2",null,"Introduction"),Object(n.b)("p",null,"Continuous Integration, Delivery, and Deployment are important devOps practices and we often hear a lot about them. These processes are valuable and ensures that the software is up to date timely."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Continuous Integration")," is an automation process which allows developers to integrate their work into a repository. When a developer pushes his work into the source code repository, it ensures that the software continues to work properly. It helps to enable collaborative development across the teams and also helps to identify the integration bugs sooner."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Continuous Delivery")," comes after Continuous Integration. It prepares the code for release. It automates the steps that are needed to deploy a build."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Continuous Deployment")," is the final step which succeeds Continuous Delivery. It automatically deploys the code whenever a code change is done. Entire process of deployment is automated.")),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1000px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"32.29166666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAIAAABM9SnKAAAACXBIWXMAAC4jAAAuIwF4pT92AAABNUlEQVQY00WNO0sDQRSF978JprGxsxJRNOAjf0AjpNBWJBFtRKJoRCLIYiGIKCmECD7wASIqgoXErDs7d3dm57Fzr6xKvHxcDgcOn3fyKJq3xn/Q/r2ZOteFUz3Y0oVj1VeLBqpRf5UNLcF6TW+uqfoqVsrX48WNmVJjorjVat15l+/25JVab3j2nFVuspG2nb5yYxc4vKsmG+noTlqq6+Y2He6jv0cryy9z8wcLi0ezZb/dfvKEMIRktOGMK4g1Y1ZKyg8JMf+/+R/CvCcA8L6YkSlJhVJRIl0ngE4AH588AhNLMhkam2MtugyzDK111maIFEXc42CUJqVRaUyVS5UDUCFLWCQYSzgopTEWKGSuxR85ovszdwKTSEok9ojABKEMQtkNBOO618cCIcFuiM7lY87hG+esPSLAO43pAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"cicd",title:"cicd",src:"/ibm-gsi-cloudnative-journey/static/a7477b825701fe5ad2bfcc80b24cbd2b/ea415/cicd.png",srcSet:["/ibm-gsi-cloudnative-journey/static/a7477b825701fe5ad2bfcc80b24cbd2b/7fc1e/cicd.png 288w","/ibm-gsi-cloudnative-journey/static/a7477b825701fe5ad2bfcc80b24cbd2b/a5df1/cicd.png 576w","/ibm-gsi-cloudnative-journey/static/a7477b825701fe5ad2bfcc80b24cbd2b/ea415/cicd.png 1000w"],sizes:"(max-width: 1000px) 100vw, 1000px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(n.b)("h2",null,"What is continuous integration ?"),Object(n.b)("p",null,"Continuous integration is a software development technique where software is built regularly by a team in an automated fashion.\nThis quote helps explain it:"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Continuous Integration is a software development practice where members of a team integrate their work frequently,\nusually each person integrates at least daily - leading to multiple integrations per day.\nEach integration is verified by an automated build (including test) to\ndetect integration errors as quickly as possible. Many teams find that this approach leads to significantly\nreduced integration problems and allows a team to develop cohesive software more rapidly"),Object(n.b)("cite",null,"– Martin Fowler")),Object(n.b)("div",{className:"gatsby-resp-iframe-wrapper",style:{paddingBottom:"75%",position:"relative",height:"0",overflow:"hidden"}}," ",Object(n.b)("iframe",{parentName:"div",src:"https://www.youtube.com/embed/1er2cjUq1UI",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}})," "),Object(n.b)("h2",null,"Continuous Integration"),Object(n.b)("p",null,"Continuous Integration is the first step to deliver high quality and efficient software. It is all about making sure that the software is working all the time and it is deployable at all times."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"695px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.861111111111114%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAAByElEQVQoz4WS6W7TQBSF/Ydn4ZH4yTPwDn0AfoNUUAQVBaQCSivRSixCTWkIESSURiWbTYiTeIvjLV7GH7KT4AQCjHRmvffMuXNGAkjT9DeAyDrg6GJEY2Axms15XB/ghQnbclZ7Ev9pNWVKtAjnrGcyj5OtcStSaf9Fhbulg3yRqRgaM8qvP6BqFpoXc/nD4G3ljIOne3ztKvgxDCyPIIFJ8xj1fB8RBYXCT40W9x8+IZiHBHGK5fiU331GM6eEKUztKbu7d9h7VMLU1DzRDkIiAXq/yahVIQrXCGf2lMl4hOu6K/HYloEQRWmO46Drej4XQizGJEEd68gDFdf1CsKsSxLx63EzM4QoHntFsE62uDYjEKTZ3po5klgjEel2YxIhSJaHuhsyC6LlBZsCclM2UwWmNsY29Rz6WMV37I2IV1cTFNP/q9NS/btFpWvwvm9y2tE4qrcp1644/PiN5+eXHDf6VHoG1b7B4YXKtVvPuHGvSnNoc9rVc3wZ2uy8bHF95wTJDWOceYG5gJgFssIyp7MvEgowvJCbD2qUqnKuxg6ivPw4EVRlk9tv2n9+bN9z6XU7dDttRuqQgaIg93sosry04t/tJyjCRH332djCAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"ci",title:"ci",src:"/ibm-gsi-cloudnative-journey/static/91bea3ab893c56cc609904f21a0e9c26/03efe/ci.png",srcSet:["/ibm-gsi-cloudnative-journey/static/91bea3ab893c56cc609904f21a0e9c26/7fc1e/ci.png 288w","/ibm-gsi-cloudnative-journey/static/91bea3ab893c56cc609904f21a0e9c26/a5df1/ci.png 576w","/ibm-gsi-cloudnative-journey/static/91bea3ab893c56cc609904f21a0e9c26/03efe/ci.png 695w"],sizes:"(max-width: 695px) 100vw, 695px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(n.b)("p",null,"It initially begins with the ",Object(n.b)("strong",{parentName:"p"},"development"),". Developers implement the new features or changes to the existing ones in small, tested batches and commit this code to a ",Object(n.b)("strong",{parentName:"p"},"Source Code Management (SCM)")," system such as Github, SVN, bitbucket etc. The next step will be the ",Object(n.b)("strong",{parentName:"p"},"build"),". This is done by the CI server like Tekton, Jenkins, Travis CI, Circle CI etc. The CI server is linked up with the GitHub repository to trigger the build either using web hook or by polling the repository for changes. When it gets the access to the latest code changes in the SCM system, it executes the build script generating new deployment artifacts. In case of build failures, it generates feedback and send the information to the corresponding members. Once this is completed, developers ",Object(n.b)("strong",{parentName:"p"},"package")," the build using Docker, Cloud Foundry etc. The builds along with their runtimes are packaged as immutable images. These images are later used for deployment in the further stages."),Object(n.b)("p",null,"Let us go through these steps in detail."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"811px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"65.625%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAACFklEQVQ4y21T2W7bMBDU3/cr+gdGnoO2yEsFJw58wUf94vjSYVmWZInUZUn2FLOGXDftAgNyyeXs7pA08jxH0zSo6/q/4N71ev0Ll8sFVVWhbhoox0a0s3F9e8Lr1y8wtNYoigJZlt3BJGVZCiH94/GIIAhkJKIowvl8lv2yKJAqDagj3l6eYZAsTVNYlgXP8+C6LuI4vldxOp3Q7/cxHA4xGAwwmUwwm82EmKSX6xVlEID2PhjCOBwOcohZScQ5wTmhlJIqeZiJuZYkicRwJMIwlAJM8+eNsD38SEaiOElASVpCrjNxS9TGLpdLkck0TRhs83GzzRwej4jDEIHv3ztoE7ZVMQklS+IYTV2j2+3+uRRCpymU1jJGjgN3OkVoWeIzLs2yW4xS4vNS2GpZ16LhaDSCwXZodVUhXK+RK4VzVSEvCgET8XIyrZHYtozc5zlKEnoetqaJbLu9Vbjb7eC4LvauC2e1gmNZN3+/R5HnoMa+70MrBWu5hE4SaZ8t85L4bPyPD1Rao9frwdhut7BtWwg834fjOFiv1+A6taLGQpim2B8OQkIyojyfpaP9YoFKKbyRMC9LaZn62I4jolMX/hC2xXZJvNlsJMlqtZLLa58RdZxPp7jU9a3C3ItwSQvURYGmquRrfbbHb9f6j8aktPF4DOP16Rn9by94//Ed414PvxYL+QmPmM/n/+BzDN9ip9PBb0I600Q7ECqKAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"ci process",title:"ci process",src:"/ibm-gsi-cloudnative-journey/static/469b948dabf282d6037df2dc01f0cbd0/fde9b/ci_process.png",srcSet:["/ibm-gsi-cloudnative-journey/static/469b948dabf282d6037df2dc01f0cbd0/7fc1e/ci_process.png 288w","/ibm-gsi-cloudnative-journey/static/469b948dabf282d6037df2dc01f0cbd0/a5df1/ci_process.png 576w","/ibm-gsi-cloudnative-journey/static/469b948dabf282d6037df2dc01f0cbd0/fde9b/ci_process.png 811w"],sizes:"(max-width: 811px) 100vw, 811px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Development")),Object(n.b)("p",null,"During the development, developers initially work in their local environments. They define code for new features or make changes to the existing feature. They make all this changes or additions in their local workspaces which are integrated with an Integrated Development Environment runtime. They may use build tools installed physically in their own workstation or they may use the ones existing on cloud (Web IDEs) based on their convenience. Once the code is defined, they do unit testing. Along with it they also do performance checks, data validations etc. They also test the software locally and validate the code changes using tests. If everything is fine, they push the changes to the source code management. Then a code review will be performed and if everything seems correct, then these changes will be merged into the main stream of the SCM system."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Source Control")),Object(n.b)("p",null,"Continuous Integration starts with source control system. Source Control systems helps us to store all the code in a single place. This source code can be accessed by multiple developers. It is easy to pull the changes, change them and push them back into the source control system. These can be viewed by other developers too."),Object(n.b)("p",null,"If you consider Git, in this source control system, you can have multiple branches of the same software and you can work on different things without conflicting with other parts of the software. For instance, let us say you have three different branches for dev, test and prod. Initially when the code is defined, it goes into dev branch. When the testing is completed, it is moved to test branch. And finally when we get the approval, it goes into prod branch. Or you may have a single main branch and create new branches for every release. These are few examples just for your understanding."),Object(n.b)("p",null,"This gives developers the capability to work on same project. They can work on different things. Even though if they work on the same thing, they need not worry about the overwriting."),Object(n.b)("p",null,"Source Control system is the place where you can store pretty much everything related to the software. Not only code, it is good to store all other things that are required to run your software like build scripts, test scripts, configurations etc in it."),Object(n.b)("p",null,"Whenever a code push is made by the developer to the source control system, it should be validated by the automated build server. It is always a good practice to keep the check-ins small. If you do large check-ins, it is hard to identify any error or bugs if they occur."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"CI Server")),Object(n.b)("p",null,"CI Server is used to automate the builds. There are many CI server software available today like Jenkins, Tavis CI, Bamboo etc."),Object(n.b)("p",null,"The source control repository is monitored by the CI server. The CI server is integrated to the repository and it starts the build whenever a change is pushed into the repository. The build has several steps like compiling the code, running unit tests, checking the code coverage, code linting, validating style guidelines, code minification etc. If the build is passed, it creates the build artifact. Otherwise, it will notify the failure. For instance, if the developer made a syntactical error like may be missing a semi colon and pushed in the code, then the unit tests fail. CI server will report this failure to the team by sending an email or however you configured it to send the information. Also, defining the failure conditions is up to the developer. If it is a compilation error, it obviously fails. You can also add conditions like there must be a code coverage of 80 % for your code etc."),Object(n.b)("p",null,"CI server builds the software. They also inform about the failures and successes. They build artifacts which will be later used to deploy the application."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Testing")),Object(n.b)("p",null,"Whenever a build is done on the CI server, it undergoes many tests to make sure the quality of the software is high. Various tests are performed as part of this process. Some of the important ones are as follows."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Unit tests - Unit tests are defined to test small isolated parts of code. It is simple piece of code which calls a method to be tested. It passes the required input and verifies if the output obtained is correct."),Object(n.b)("li",{parentName:"ul"},"Integration tests - Integration tests tests the system as a whole. It validates if the entire system is working as expected. For example, if you want to know if your application properly interacts with the backend or to validate if the frontend properly interacts with the backend these tests will help to resolve them."),Object(n.b)("li",{parentName:"ul"},"Acceptance tests - An acceptance test tests whether a specific functionality works as described in the specification. These tests are written in the perspective of the user and it validates if the created feature is same as the requested one."),Object(n.b)("li",{parentName:"ul"},"Smoke tests - Smoke tests test if your software is working in a production environment. It tests the basic functionality and makes sure the most important parts of your software work properly.")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Automation")),Object(n.b)("p",null,"Automation is a very important. When doing CI, the build process is all automated. It also uses automated tests to make sure that software is properly working after new code changes."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Teamwork")),Object(n.b)("p",null,"All the code changes are compiled. To reduce the bugs, we use automation testing as part of CI. Also, if the executable is tested on an environment which resembles your production environment, it makes your life easier."),Object(n.b)("p",null,"All this process cannot be just done by a single person. For suppose, if you develop a code and define unit tests to make sure everything works and other person from your team pushes large pieces of code without any unit tests, then it will be of no use. So, every member of the team should make efforts to successfully define the Continuous Integration for your software."),Object(n.b)("h2",null,"References"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://learning.oreilly.com/library/view/devops-continuous-delivery/9781789132991/"},"Sricharan Vadapalli (2018). DevOps: Continuous Delivery, Integration, and Deployment with DevOps. Publisher: Packt Publishing")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://learning.oreilly.com/library/view/continuous-integration-delivery/9781787286610/"},"Sander Rossel (2017). Continuous Integration, Delivery, and Deployment. Publisher: Packt Publishing"))))}p.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-developer-intermediate-continuous-integration-index-mdx-4e45829a7f429d5805aa.js.map