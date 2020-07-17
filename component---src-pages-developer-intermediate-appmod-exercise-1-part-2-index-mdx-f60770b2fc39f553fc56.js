(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{czJo:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return o})),t.d(a,"default",(function(){return d}));t("91GP"),t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("q1tI");var A=t("7ljp"),i=t("013z");t("T0C+"),t("qKvR");function n(){return(n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var A in t)Object.prototype.hasOwnProperty.call(t,A)&&(e[A]=t[A])}return e}).apply(this,arguments)}var o={},r=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(A.b)("div",a)}},l=r("PageDescription"),s=r("Tabs"),c=r("Tab"),p={_frontmatter:o},b=i.a;function d(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,A,i={},n=Object.keys(e);for(A=0;A<n.length;A++)t=n[A],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,["components"]);return Object(A.b)(b,n({},p,t,{components:a,mdxType:"MDXLayout"}),Object(A.b)(l,{mdxType:"PageDescription"},Object(A.b)("h2",null,Object(A.b)("strong",{parentName:"h2"},"Analyze the scan result of the Exising Application"))),Object(A.b)("p",null,Object(A.b)("strong",{parentName:"p"},"Recap : ")," "),Object(A.b)("p",null,"As part of the Transformation Advisor : Part I - Scan Existing Application Session, we covered"),Object(A.b)("ol",null,Object(A.b)("li",{parentName:"ol"},"Accessing the Existing Websphere Application, as a data center app, deployed in a local environment."),Object(A.b)("li",{parentName:"ol"},"Created a workspace in the Transformation Advisor environment and then downloaded the datacollector based on the local operating and Application runtime environment. In this Websphere Application runtime."),Object(A.b)("li",{parentName:"ol"},"Configured the Data collector to the existing application environment and then executed the datacollector to scan the existing application"),Object(A.b)("li",{parentName:"ol"},"datacollector created the scan results and published it a zip file, which will be used in this session for analyzing the results.")),Object(A.b)("h3",null,"Analyze the scan results"),Object(A.b)(s,{mdxType:"Tabs"},Object(A.b)(c,{label:"Cloud Shell",open:"true",mdxType:"Tab"},Object(A.b)("ul",null,Object(A.b)("li",{parentName:"ul"},Object(A.b)("p",{parentName:"li"},"Download the Scan results, reference application binaries and libaries from the below repository. "),Object(A.b)("pre",{parentName:"li"},Object(A.b)("code",n({parentName:"pre"},{}),"git clone https://github.com/ibm-gsi-ecosystem/appmod-plants-app.git\n"))),Object(A.b)("li",{parentName:"ul"},Object(A.b)("p",{parentName:"li"},"Repository contains following artifacts. Scan results are included in the repository for convinience. If you are able to execute the previous steps on your Laptop/Desktop, you already have the scan results. Alternatively, you can use the below reports for analyzing"),Object(A.b)("ul",{parentName:"li"},Object(A.b)("li",{parentName:"ul"},Object(A.b)("p",{parentName:"li"},"scan-results (folder):  contains the “AppSrv01.zip” that will be used to analyze the Application using Transformation Advisor")),Object(A.b)("li",{parentName:"ul"},Object(A.b)("p",{parentName:"li"},"application-binaries (folder): Application Binary that will used for Migration/Transformation")),Object(A.b)("li",{parentName:"ul"},Object(A.b)("p",{parentName:"li"},"db2-binaries (folder): It has db2jcc.jar and db2jcc_license_cu.jar.",Object(A.b)("br",{parentName:"p"}),"\n","a) db2jcc.jar along with Application binaries will be used along with target files generated by Transformation Advisor as part of migration.\nb) db2jcc_license_cu.jar has to be separately uploaded to the repo that is created for migration in the coming below steps. This would be in newly created repo to the folder represented(src/main/liberty/lib/)"),Object(A.b)("p",{parentName:"li"},Object(A.b)("strong",{parentName:"p"},"Note : "),"  Inorder to enable the CI pipeline, the below set of files is required during the deployment of the application in the openshift cluster.")),Object(A.b)("li",{parentName:"ul"},Object(A.b)("p",{parentName:"li"},"pom.xml (file): The original pom.xml generated by TA will be replaced by this file. This file uses the websphere liberty container as runtime environment, since this application would need JPA2.0 supported environment for database access.")),Object(A.b)("li",{parentName:"ul"},Object(A.b)("p",{parentName:"li"},"Jenkinsfile (file): Contains the definition to the pipeline using the javalibertyapp image")),Object(A.b)("li",{parentName:"ul"},Object(A.b)("p",{parentName:"li"},"assets (folder): Contains the Binaries of both the application and Db2 related, in a structured manner, that shall be used by the pom.xml during the maven based pipeline validation stage as a local build. These files are same as the libararies and binaries available in application-binaries & db2-binaries folder, but are available in the structured manner for the maven. However, the ones in application-binaries & db2-binaries folder are necessary for the Docker which will be used for deployment in the pipeline as part of the build and deploy stage.")),Object(A.b)("li",{parentName:"ul"},Object(A.b)("p",{parentName:"li"},"charts (folder): Contains the files related to pipeline deployment configuration")))))),Object(A.b)(c,{label:"Desktop/Laptop",open:"true",mdxType:"Tab"},Object(A.b)("ul",null,Object(A.b)("li",{parentName:"ul"},Object(A.b)("p",{parentName:"li"},"You now have the Scan Results of the application for analyzing")),Object(A.b)("li",{parentName:"ul"},Object(A.b)("p",{parentName:"li"},"The Application Binary (plantsbywebsphere8.ear) is present in the below location. You will need this uploading to the transformation advisor"),Object(A.b)("pre",{parentName:"li"},Object(A.b)("code",n({parentName:"pre"},{className:"language-binaries"}),"cd icp-dev-workshop/lab4/binary/application\n"))),Object(A.b)("li",{parentName:"ul"},Object(A.b)("p",{parentName:"li"},"The DB2 libararies are present in the below location. You will upload the “db2jcc.jar” in the Transformation advisor and later push the “db2jcc_license_cu.jar” to your git repository (one you will be creating during this phase for the migration bundle)"),Object(A.b)("pre",{parentName:"li"},Object(A.b)("code",n({parentName:"pre"},{className:"language-binaries"}),"cd icp-dev-workshop/lab4/binary/lib\n"))),Object(A.b)("li",{parentName:"ul"},Object(A.b)("p",{parentName:"li"},"Also, download the application related files from the below repository, which shall be used for the deployment of the application during the course of the Lab exercise. "),Object(A.b)("pre",{parentName:"li"},Object(A.b)("code",n({parentName:"pre"},{}),"git clone https://github.com/ibm-gsi-ecosystem/appmod-plants-app.git\n")))))),Object(A.b)("p",null,"In this section, you will upload the results from the data collector to the Transformation Advisor UI and analyze the findings."),Object(A.b)("ul",null,Object(A.b)("li",{parentName:"ul"},"Access the Open Shift Cluster Dashboard to open the Transformation Advisor dashboard which as part of the Cloud Native Toolkit menu.")),Object(A.b)("ul",null,Object(A.b)("li",{parentName:"ul"},Object(A.b)("p",{parentName:"li"},"Now that namespace and collection are created, access the Workspace (AppMod_{initials}) and the Collection.")),Object(A.b)("li",{parentName:"ul"},Object(A.b)("p",{parentName:"li"},"The Data collector / Upload data screen appears as shown"),Object(A.b)("p",{parentName:"li"},"  ",Object(A.b)("span",n({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(A.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"85.41666666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAABYlAAAWJQFJUiTwAAACJElEQVQ4y4VTu44TQRD0V5GQIx4/QEDgzJEly3JmCckZHCHiA8ggREIgUkRGADpAwHHg8/m1j9md967N+lT0zGrltc9rglLPTPeUqmt6WlprOCildmK1FkIhSSWtNYzROFbv0KpvqqQj4cLA2gyfvsV4/mqKdx8CRLH0NU1kO4T1IpaQqsRAqgwfTxlevF3g5esLfCZybSwEV5ByW18nPkiYUouZUfg1ZqRujjfvI1KaYLbUpDqHNRmkkP8j3BJba7AIDc4vOL78TDFdGhi7plyOmDkCsyOgurvnYZkwFFeZxnwp8eeSk1JJZ6SGWhRcgpN6p87auocNLRuKzr9lpBAxjZCwCBVmgcI8kAgiWe6XCmFciWhQ6A6tcZc1zibG48e4xNfzMv6eGnyneHpGdlxuu2ogLGVLyemFIzAWkV8xjUrkEUahjy7H05hmUtbuHXllQf6wJKWLDDyeIXWIplDJHILNy1zK98bmyGC75DqntmcGtx8XuHtS4N6TAjdHGzx49hd1i7YvfYRQVoRTi1uPNrhzckWkG9x4eIX7Twv//cwe4dGfIqUkv2LyMIbiIWQaeBgRQAvnY0zesua/XE16vcBd4O4n0K9gqQCXGgnNYJavyL/UY3ewt2jtHzisVitMJhP0+30MBgMfO50ORqNRrWV1EK19D9xhnucYj8fodrvo9Xo+ttttDIfDa55d85BzjkNwXq7Xa6/WxaIo/LqpvsI/NOj0IkCC7WMAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(A.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"apps",title:"apps",src:"/ibm-gsi-cloudnative-journey/static/62a488a067848692186e2bae17282aa3/3cbba/ta-dc.png",srcSet:["/ibm-gsi-cloudnative-journey/static/62a488a067848692186e2bae17282aa3/7fc1e/ta-dc.png 288w","/ibm-gsi-cloudnative-journey/static/62a488a067848692186e2bae17282aa3/a5df1/ta-dc.png 576w","/ibm-gsi-cloudnative-journey/static/62a488a067848692186e2bae17282aa3/3cbba/ta-dc.png 1152w","/ibm-gsi-cloudnative-journey/static/62a488a067848692186e2bae17282aa3/166d3/ta-dc.png 1378w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),"  "))),Object(A.b)("ul",null,Object(A.b)("li",{parentName:"ul"},Object(A.b)("p",{parentName:"li"},"Click ",Object(A.b)("inlineCode",{parentName:"p"},"Upload data")," and specify the ",Object(A.b)("inlineCode",{parentName:"p"},"AppSrv01.zip")," file you created from scanning the app"),Object(A.b)("p",{parentName:"li"},"  After a few moments, the UI will display the Results page."),Object(A.b)("p",{parentName:"li"},"  ",Object(A.b)("span",n({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(A.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"48.611111111111114%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAABTklEQVQoz42S227CMAyG+/7vtQeYdjsuKFT0QNLS5tSk6b/YKQWkMc3SJ9vYcc2fFFJcsSwBZOu6Mil6ymMmRsQE1e495JXLhGWFTxQ35WFmYA55yBJXjCbwSD5gAwY1wzqPEPz+UR66PgbFdC6mvOhvGtpSI7atAB/itkXO41b7jxVl1aLpehhjoLVmXuLN/43ZzxVSCPR9Huicg7WE5Xie593f49zzWjc8zEIpheJ8PqFtGzRNnWjQdQ3EtcXlcsHxeOTfyJdlyfHpRP0tqqrC4XDgvKnr1F9jGIak4WghRwdxcwje4evb4OPTwBqNaVK8Af+dtJUlKaYJo56gnuS5b84bGg+E+BBVDgFdv+zPhiw/l4e9uyOSouhVAGFdeipxwVVoCKnhfdYnhMBakfeE99AubTXn2jN8KUL2IGSCLkcIyVD8Dtn/Xh/HET/1ZghAM6vWkwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(A.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"apps",title:"apps",src:"/ibm-gsi-cloudnative-journey/static/0264d86b2119ddceb742106dfc10cfa9/3cbba/ta-upload-results.png",srcSet:["/ibm-gsi-cloudnative-journey/static/0264d86b2119ddceb742106dfc10cfa9/7fc1e/ta-upload-results.png 288w","/ibm-gsi-cloudnative-journey/static/0264d86b2119ddceb742106dfc10cfa9/a5df1/ta-upload-results.png 576w","/ibm-gsi-cloudnative-journey/static/0264d86b2119ddceb742106dfc10cfa9/3cbba/ta-upload-results.png 1152w","/ibm-gsi-cloudnative-journey/static/0264d86b2119ddceb742106dfc10cfa9/0b124/ta-upload-results.png 1728w","/ibm-gsi-cloudnative-journey/static/0264d86b2119ddceb742106dfc10cfa9/698ec/ta-upload-results.png 2126w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))),Object(A.b)("h4",null,"Review the results"),Object(A.b)("p",null,"Take a moment to review the results. Transformation Advisor has determined this application is “simple” to move to Liberty on Private Cloud."),Object(A.b)("ul",null,Object(A.b)("li",{parentName:"ul"},Object(A.b)("p",{parentName:"li"},"What happens if you change the Preferred migration target to Liberty on Public Cloud? Why did the ",Object(A.b)("em",{parentName:"p"},"complexity")," change?")),Object(A.b)("li",{parentName:"ul"},Object(A.b)("p",{parentName:"li"},"Hold your mouse over the “Complex” box. Why does Transformation Advisor think you need a VPN?")),Object(A.b)("li",{parentName:"ul"},Object(A.b)("p",{parentName:"li"},"Click on the the ",Object(A.b)("inlineCode",{parentName:"p"},"PlantsByWebSphere8.ear")," and read the Public Cloud to Private Cloud Network Connection result."))),Object(A.b)("p",null,"Scroll down and note the External Dependencies that have been detected to be required by this application. Remember the DB2 database? Transformation Advisor detected that the application uses the database. It is telling you that either you will need to move the database to the public cloud or the application in the pubic cloud will need a network connection—probably a VPN—to the database in the private data center."),Object(A.b)("ul",null,Object(A.b)("li",{parentName:"ul"},"Click the ",Object(A.b)("inlineCode",{parentName:"li"},"<-- Recommendations")," link at the top of the page to return to the Recommendations page, then set the Preferred migration target to Liberty on Private Cloud once again")),Object(A.b)("h4",null,"Review the reports"),Object(A.b)("p",null,"Take a moment to review the reports. Make sure the Transformation Advisor UI is displaying the Results page and that the Preferred migration target is set to Liberty on Private Cloud."),Object(A.b)("ul",null,Object(A.b)("li",{parentName:"ul"},Object(A.b)("p",{parentName:"li"},"Click on the the ",Object(A.b)("inlineCode",{parentName:"p"},"PlantsByWebSphere8.ear")," again and review the Technology Issues section")),Object(A.b)("li",{parentName:"ul"},Object(A.b)("p",{parentName:"li"},"Scroll to the bottom of the page and review the Technology Report, Inventory Report, and Analysis Report"))),Object(A.b)("p",null,"Note that at the top of each report, the command line parameters are shown. This helps to validate that your settings in ",Object(A.b)("inlineCode",{parentName:"p"},"customCmd.properties")," have been detected."),Object(A.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1114px"}},"\n      ",Object(A.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"9.375%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAACABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB2QUH/8QAFBABAAAAAAAAAAAAAAAAAAAAEP/aAAgBAQABBQJ//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAEP/aAAgBAQAGPwJ//8QAFBABAAAAAAAAAAAAAAAAAAAAEP/aAAgBAQABPyF//9oADAMBAAIAAwAAABBzz//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABgQAAIDAAAAAAAAAAAAAAAAAAABEBEx/9oACAEBAAE/EFiij//Z')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(A.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"pbw",title:"pbw",src:"/ibm-gsi-cloudnative-journey/static/a9feb25fab36e28253a2eb99318e37be/ced67/ta-params.jpg",srcSet:["/ibm-gsi-cloudnative-journey/static/a9feb25fab36e28253a2eb99318e37be/69549/ta-params.jpg 288w","/ibm-gsi-cloudnative-journey/static/a9feb25fab36e28253a2eb99318e37be/473e3/ta-params.jpg 576w","/ibm-gsi-cloudnative-journey/static/a9feb25fab36e28253a2eb99318e37be/ced67/ta-params.jpg 1114w"],sizes:"(max-width: 1114px) 100vw, 1114px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(A.b)("p",null,"Review each of the reports:"),Object(A.b)("ul",null,Object(A.b)("li",{parentName:"ul"},Object(A.b)("p",{parentName:"li"},Object(A.b)("strong",{parentName:"p"},"Technology Report")),Object(A.b)("ul",{parentName:"li"},Object(A.b)("li",{parentName:"ul"},Object(A.b)("p",{parentName:"li"},"Lists the Java EE features used by the application")),Object(A.b)("li",{parentName:"ul"},Object(A.b)("p",{parentName:"li"},"Maps these features to the capabilities of the various WebSphere editions"),Object(A.b)("p",{parentName:"li"},"This is a useful first step to determining whether this application will run on Liberty."),Object(A.b)("span",n({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1126px"}}),"\n      ",Object(A.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"76.38888888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAIF/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/9oADAMBAAIQAxAAAAHYXNyB/8QAFRABAQAAAAAAAAAAAAAAAAAAESD/2gAIAQEAAQUCK//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAEDAQE/Aar/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAgEBPwFH/8QAFRABAQAAAAAAAAAAAAAAAAAAIDH/2gAIAQEABj8Ci//EABoQAAIDAQEAAAAAAAAAAAAAAAABESFBEGH/2gAIAQEAAT8hpgmMJ8Y1Xf/aAAwDAQACAAMAAAAQV+//xAAWEQADAAAAAAAAAAAAAAAAAAAAARH/2gAIAQMBAT8QcMo//8QAFhEBAQEAAAAAAAAAAAAAAAAAARAR/9oACAECAQE/EA2P/8QAHBABAAIBBQAAAAAAAAAAAAAAAQARMRAhUWFx/9oACAEBAAE/EMF0eQWwddaQQtZeZRKJ/9k=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(A.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"pbw",title:"pbw",src:"/ibm-gsi-cloudnative-journey/static/7e16815baf13c465b774c1c41201c6c2/54809/ta-tech.jpg",srcSet:["/ibm-gsi-cloudnative-journey/static/7e16815baf13c465b774c1c41201c6c2/69549/ta-tech.jpg 288w","/ibm-gsi-cloudnative-journey/static/7e16815baf13c465b774c1c41201c6c2/473e3/ta-tech.jpg 576w","/ibm-gsi-cloudnative-journey/static/7e16815baf13c465b774c1c41201c6c2/54809/ta-tech.jpg 1126w"],sizes:"(max-width: 1126px) 100vw, 1126px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))),Object(A.b)("li",{parentName:"ul"},Object(A.b)("p",{parentName:"li"},Object(A.b)("strong",{parentName:"p"},"Inventory Report")),Object(A.b)("ul",{parentName:"li"},Object(A.b)("li",{parentName:"ul"},Object(A.b)("p",{parentName:"li"},"Lists the Java EE components in the application"),Object(A.b)("p",{parentName:"li"},"This helps give an idea of the size of the monolith and identify the number of EJBs and web services."),Object(A.b)("span",n({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"482px"}}),"\n      ",Object(A.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"89.93055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAASABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAIBBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAe5UWY0RQYD/xAAWEAEBAQAAAAAAAAAAAAAAAAAQAUH/2gAIAQEAAQUCjpH/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAUEAEAAAAAAAAAAAAAAAAAAAAw/9oACAEBAAY/Ah//xAAYEAACAwAAAAAAAAAAAAAAAAABEBEhMf/aAAgBAQABPyGFsNov/9oADAMBAAIAAwAAABAzADz/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/EB//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/EB//xAAeEAACAAYDAAAAAAAAAAAAAAAAAREhMUFhkRBRcf/aAAgBAQABPxBIqI+kF0hJJUWx2rqk86J51yLH/9k=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(A.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"pbw",title:"pbw",src:"/ibm-gsi-cloudnative-journey/static/488d0e7bdb5f6ab2ef97e7bde9612cc8/fe141/ta-inventory.jpg",srcSet:["/ibm-gsi-cloudnative-journey/static/488d0e7bdb5f6ab2ef97e7bde9612cc8/69549/ta-inventory.jpg 288w","/ibm-gsi-cloudnative-journey/static/488d0e7bdb5f6ab2ef97e7bde9612cc8/fe141/ta-inventory.jpg 482w"],sizes:"(max-width: 482px) 100vw, 482px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(A.b)("li",{parentName:"ul"},Object(A.b)("p",{parentName:"li"},"Shows the application structure"),Object(A.b)("p",{parentName:"li"},"This shows which JARs are included in the application, which helps identify technical debt such as old versions of Struts, Spring, and Hibernate, and whether the application packages IBM or JEE JARs that can cause classloading issues later."),Object(A.b)("span",n({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(A.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.06944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAACD0lEQVQoz6VSSYvUUBDOL9ST2zA4I3gXUZz2KoyC00OriKB4U2S8DHZ7E/SmKHh1mTnEttPZXvZ09u7ks+olafrgRXzhoypv+aq+qlJUQ8e36S/8nM9g+h6SxQKLf0QcxxCOB920oThCYDadgi3qBv+7lCAIiN1BTJGyLFujLEvkeY40TaVfFIX8r6pKWr7DPi/bDfDi+D1evvkAZZEksCwTrusiSVLoug7TNMnnfQvaTOt8G5qmycBzuqOqKslNJOFyuYLwQgg3hBIRkUnahbDhORZZB7Yl4NouhCFg2AbtCXi+jyiKZM3YhmHrp50iNHUr2XAELM9FyZKyVF7K8wJVWUmpVFjCZm3rv1SukfJXqxWUMAyRpAmlvURJm1yruq7RNC3J8PkEW9dGuDp4giuDB9i+OSI8xO4txiNs3xjh6dG7NhS9UXySwuAIfSM4Uk965+gezt49j0uHO7hwcBkXhzsEsuRvHe7izP45jMaPW0J6Iwm5CZxZ38GesKYx+q69xscf+/hyMsTnk4MN3CcM5dmpPm6FUx2lZIfGpifclMzfp2c+jq+beHvbwmTPwnjPlJgMLLnHZ19fhR0hNcUOfGg+dToKENHMFZQhk7J8RugkcPQIrhETIsxVG8bUgfnbhTXzyHo0Df76jRJQhjwSeZchD/LmgGcF/ecJIZV+UeUolwWKkmzn50W2fvcHEFlyTXFqfwIAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(A.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"pbw",title:"pbw",src:"/ibm-gsi-cloudnative-journey/static/1ad65d77e759d6b01fa1ddf64d9c3279/3cbba/ta-inventory-tree.png",srcSet:["/ibm-gsi-cloudnative-journey/static/1ad65d77e759d6b01fa1ddf64d9c3279/7fc1e/ta-inventory-tree.png 288w","/ibm-gsi-cloudnative-journey/static/1ad65d77e759d6b01fa1ddf64d9c3279/a5df1/ta-inventory-tree.png 576w","/ibm-gsi-cloudnative-journey/static/1ad65d77e759d6b01fa1ddf64d9c3279/3cbba/ta-inventory-tree.png 1152w","/ibm-gsi-cloudnative-journey/static/1ad65d77e759d6b01fa1ddf64d9c3279/0b124/ta-inventory-tree.png 1728w","/ibm-gsi-cloudnative-journey/static/1ad65d77e759d6b01fa1ddf64d9c3279/4ea69/ta-inventory-tree.png 2304w","/ibm-gsi-cloudnative-journey/static/1ad65d77e759d6b01fa1ddf64d9c3279/8118b/ta-inventory-tree.png 2464w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(A.b)("li",{parentName:"ul"},Object(A.b)("p",{parentName:"li"},"Lists the Utility JAR files"),Object(A.b)("p",{parentName:"li"},"This shows which packages are in each JAR, which is especially useful if the client doesn’t know which Java packages to scan. If you find this part of the report lists client code in packages that the scanner ignored such as ",Object(A.b)("inlineCode",{parentName:"p"},"org")," and ",Object(A.b)("inlineCode",{parentName:"p"},"net"),", you will need to update the ",Object(A.b)("inlineCode",{parentName:"p"},"customCmd.properties")," file to include these packages and re-run the scan."),Object(A.b)("span",n({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1043px"}}),"\n      ",Object(A.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"17.013888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAADABQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAG6AD//xAAUEAEAAAAAAAAAAAAAAAAAAAAQ/9oACAEBAAEFAn//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAUEAEAAAAAAAAAAAAAAAAAAAAQ/9oACAEBAAY/An//xAAYEAADAQEAAAAAAAAAAAAAAAAAARFBUf/aAAgBAQABPyFJQ0i4f//aAAwDAQACAAMAAAAQAA//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAYEAEBAQEBAAAAAAAAAAAAAAABABEhQf/aAAgBAQABPxAAwJDHLbxf/9k=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(A.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"pbw",title:"pbw",src:"/ibm-gsi-cloudnative-journey/static/ab696f3a2e86978ada86e95e48dc1736/16881/ta-inventory3.jpg",srcSet:["/ibm-gsi-cloudnative-journey/static/ab696f3a2e86978ada86e95e48dc1736/69549/ta-inventory3.jpg 288w","/ibm-gsi-cloudnative-journey/static/ab696f3a2e86978ada86e95e48dc1736/473e3/ta-inventory3.jpg 576w","/ibm-gsi-cloudnative-journey/static/ab696f3a2e86978ada86e95e48dc1736/16881/ta-inventory3.jpg 1043w"],sizes:"(max-width: 1043px) 100vw, 1043px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))),Object(A.b)("li",{parentName:"ul"},Object(A.b)("p",{parentName:"li"},Object(A.b)("strong",{parentName:"p"},"Analysis Report")),Object(A.b)("ul",{parentName:"li"},Object(A.b)("li",{parentName:"ul"},Object(A.b)("p",{parentName:"li"},"Lists the issues found during the scan of the application"),Object(A.b)("p",{parentName:"li"},"Review the Severe and Warning results using the ",Object(A.b)("inlineCode",{parentName:"p"},"show rule help")," and ",Object(A.b)("inlineCode",{parentName:"p"},"show results")," links. Note that there are no severe result for this application and every item shown as warning. If there are Resuls related to severe (shown are red indicator), there would need some appropriate action to be performed prior deployment."),Object(A.b)("span",n({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(A.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"45.48611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAABPUlEQVQoz42S21KDMBRF+f/P8s3R2lqglumoHSulLZTcSMJNtyehOPVSx4c1YQis7H0giNMXxLsNksMWGS9htIaU8gtKqYu4/UNeoDiWniArS1yFS4SrNZ7WW6S7HHVdf8Fae5G6tmia4bm+6xCUJAzjBabRCrf3DyR9hTUVuBDgnEPQqim1MeYHVVVRQuURYmgSMFYiimckW2Ayi3EzjXA9mWO/3yPLMr9eEioSMu4OloTwBwRFccTdPMRkniBaPiNK1kgeN6c6QxX38rl0vFaq8slGvNDaCrU+QFC9vmuB9x5vffc5u+/zPMcYSyk1ibSXe6HWZGcpckqa57k/eXyhaZpfGfc0PSvc/OQwy5OQbrAMrrqbpxP+9VUdLplbXbJB6DhVNpRQ8dT/S5wxtG37bwxJJVWVaqjsZvsBFK6wM+xGhmYAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(A.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"pbw",title:"pbw",src:"/ibm-gsi-cloudnative-journey/static/54cc35025aec65f6ff15c1f8ba231931/3cbba/ta-migration-analysis.png",srcSet:["/ibm-gsi-cloudnative-journey/static/54cc35025aec65f6ff15c1f8ba231931/7fc1e/ta-migration-analysis.png 288w","/ibm-gsi-cloudnative-journey/static/54cc35025aec65f6ff15c1f8ba231931/a5df1/ta-migration-analysis.png 576w","/ibm-gsi-cloudnative-journey/static/54cc35025aec65f6ff15c1f8ba231931/3cbba/ta-migration-analysis.png 1152w","/ibm-gsi-cloudnative-journey/static/54cc35025aec65f6ff15c1f8ba231931/0b124/ta-migration-analysis.png 1728w","/ibm-gsi-cloudnative-journey/static/54cc35025aec65f6ff15c1f8ba231931/4ea69/ta-migration-analysis.png 2304w","/ibm-gsi-cloudnative-journey/static/54cc35025aec65f6ff15c1f8ba231931/a7081/ta-migration-analysis.png 2462w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))),Object(A.b)("li",{parentName:"ul"},Object(A.b)("p",{parentName:"li"},"Close the open report tabs and return to the Recommendations page"))),Object(A.b)("p",null,"Let’s go ahead and move this application to Liberty in the next session."),Object(A.b)("h2",null,"Summary"),Object(A.b)("p",null,"You have now completed the Anlaysis the various reports Technology Report, Inventory Reports, Analysis report from  the scan results of the existing application using Transformation Advisor. Now that we have analysed, we will move the application to liberty and deploy in the openshift cluster provisioned in the IBM Cloud"))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-developer-intermediate-appmod-exercise-1-part-2-index-mdx-f60770b2fc39f553fc56.js.map