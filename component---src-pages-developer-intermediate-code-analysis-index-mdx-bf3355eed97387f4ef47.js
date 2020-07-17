(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{jKtW:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return u}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),i=a("013z"),o=a("T0C+");a("qKvR");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var r,b={},l=(r="PageDescription",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)}),c={_frontmatter:b},p=i.a;function u(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(n.b)(p,s({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(l,{mdxType:"PageDescription"},Object(n.b)("p",null,"Use SonarQube to analyze your code’s quality")),Object(n.b)("p",null,"In IBM Garage Method, one of the Develop practices is to ",Object(n.b)("a",s({parentName:"p"},{href:"https://www.ibm.com/garage/method/practices/code/practice_automated_testing/"}),"automate tests for continuous delivery"),", in part by using ",Object(n.b)("a",s({parentName:"p"},{href:"https://www.ibm.com/garage/method/practices/code/practice_automated_testing/tool_lint"}),"static source code analysis tools"),". ",Object(n.b)("a",s({parentName:"p"},{href:"https://www.sonarqube.org/"}),"SonarQube")," automates performing static code analysis and enables it to be added to a continuous integration pipeline. The ",Object(n.b)(o.a,{name:"env",mdxType:"Globals"}),"’s CI pipeline (",Object(n.b)("a",s({parentName:"p"},{href:"/ibm-gsi-cloudnative-journey/guides/continuous-integration"}),"Jenkins"),", ",Object(n.b)("a",s({parentName:"p"},{href:"/ibm-gsi-cloudnative-journey/guides/continuous-integration-tekton"}),"Tekton"),", etc.) includes a SonarQube stage. Simply by building your app using the pipeline, your code gets analyzed, and the SonarQube UI displays the findings."),Object(n.b)("h2",null,"What is code analysis"),Object(n.b)("p",null,"Static code analysis (a.k.a. code analysis) is a method of debugging by performing automated evaluation of code\nwithout executing the program. The analysis is structured as a set of coding rules that evaluate the code’s quality.\nAnalysis can be performed on source code or compiled code. The analyzer must support the programming language\nthe code is written in so that it can parse the code like a compiler or simulate its execution."),Object(n.b)("p",null,"Static code analysis differs from dynamic analysis, which observes and evaluates a running program. Dynamic analysis\nrequires test inputs and can measure user functionality as well as runtime qualities like execution time and resource consumption.\nA code review is static code analysis performed by a human."),Object(n.b)("p",null,"Static code analysis can evaluate several different aspects of code quality, such as:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Reliability"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Bug"),": Programming error that breaks functionality"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Security"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Vulnerability"),": A point in a program that can be attacked"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Hotspot"),": Code that uses a security-sensitive API"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Maintainability"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Coding standards"),": Practices that increase the human readability and understandability of code"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Code smell"),": Code that is confusing and difficult to maintain"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Technical debt"),": Estimated time required to fix all maintainability issues"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Complexity"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Code complexity"),": Code’s control flow and number of paths through the code"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Duplications"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Duplicated code"),": The same code sequence appearing more than once in the same program"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Manageability"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Testability"),": How easily tests can be developed and used to show the program meets requirements"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Portability"),": How easily the program can be reused in different environments"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Reusability"),": The program’s modularity, loose coupling, and limited interdependencies")))),Object(n.b)("p",null,"Static code analysis collects several metrics that measure code quality:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Issues"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Type"),": Bug, Venerability, Code Smell"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Severity"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Blocker"),": Bug with a high probability to impact the behavior of the application in production"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Critical"),": Bug with a low probability to impact the behavior of the application in production, or a security vulnerability"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Major"),": Code smell with high impact to developer productivity"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Minor"),": Code smell with slight impact to developer productivity"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Info"),": Neither a bug nor a code smell, just a finding"))))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Size"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Classes"),": Number of class definitions (concrete, abstract, nested, interfaces, enums, annotations)"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Lines of code"),": Linespace separated text that is not whitespace or comments"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Comment lines"),": Linespace separated text containing significant commentary or commented-out code"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Coverage"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Test coverage"),": Code that was executed by a test suite")))),Object(n.b)("p",null,"A ",Object(n.b)("strong",{parentName:"p"},"Quality gate")," defines a policy that assesses pass/fail whether or not the number of issues and their severity is acceptable."),Object(n.b)("h2",null,"What is SonarQube"),Object(n.b)("p",null,"SonarQube performs static code analysis to evaluate code quality, using analysis rules that focus on three areas:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Code Reliability"),": Detect bugs that will impact end-user functionality"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Application Security"),": Detect vulnerabilities and hotspots that can be exploited to compromise the program"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Technical Debt"),": Keep your codebase maintainable to increase developer velocity")),Object(n.b)("p",null,"SonarQube ",Object(n.b)("a",s({parentName:"p"},{href:"https://docs.sonarqube.org/latest/architecture/architecture-integration/#header-2"}),"plugs into the application lifecycle management (ALM)")," process to make continuous inspection part of continuous integration.\nAdding code analysis to ALM provides regular, timely feedback on the quality of the code being produced.\nThe goal is to detect problems as soon as possible so that they can be resolved before they can impact production end users."),Object(n.b)("p",null,"The continuous integration (CI) server integrates SonarQube into the ALM.\nThe SonarQube solution consists of several components: The central component is the SonarQube Server,\nwhich runs the SonarScanner, processes the resulting analysis reports, stores the reports in SonarQube Database,\nand displays the reports in the SonarQube UI.\nA CI server uses a stage/goal/task in its build automation to trigger the language-specific SonarScanner to scan the code being built.\nDevelopers can view the resulting analysis report in the SonarQube UI."),Object(n.b)("h2",null,"Code Analysis in the Pipeline"),Object(n.b)("p",null,"In the CI pipeline, the ",Object(n.b)("em",{parentName:"p"},"Sonar scan")," stage triggers the SonarScanner in SonarQube.\nFollow these directions to see code analysis in action:"),Object(n.b)("p",null,"Deploy the ",Object(n.b)(o.a,{name:"template",mdxType:"Globals"})," named Spring Boot Microservice."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Follow the directions in ",Object(n.b)("a",s({parentName:"li"},{href:"/ibm-gsi-cloudnative-journey/developer-intermediate/deploy-app"}),"Deploying an App"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Deploy the Spring Boot Microservice template"),Object(n.b)("li",{parentName:"ul"},"Name the new repo something like ",Object(n.b)("inlineCode",{parentName:"li"},"sonar-java")),Object(n.b)("li",{parentName:"ul"},"Be sure to run the CI pipeline (using the version igc-java-gradle-v1-x-0) for your project, and confirm that it runs the Sonar scan stage")))),Object(n.b)("p",null,"Examine SonarQube’s analysis report for your app"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Go to the OpenShift console. On the top, you will find an icon of a square made of 9 small squares.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Clicking on that icon will give you all the tools shortcut. Select SonarQube to open the SonarQube dashboard.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Use ",Object(n.b)("inlineCode",{parentName:"p"},"oc credentials")," to get the user name and password if you a prompted to log in")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Go to the Projects page"),Object(n.b)("p",{parentName:"li"},"  You should see your project in the list, such as ",Object(n.b)("inlineCode",{parentName:"p"},"bwoolf1.sonar-java"),"."),Object(n.b)("p",{parentName:"li"},"  ",Object(n.b)("span",s({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"740px"}}),"\n      ",Object(n.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"19.444444444444443%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAAsSAAALEgHS3X78AAAA1UlEQVQY002PzU7DMBCE+/7PgXgKOFJ64UecKlVqSCpEkiaO43ptQ+J82G2FOtJqZ6Wdmd3VoRv5VoZaCV/myP3+jnXzRMYcJ2KMLMtCzHXlGbnf8gzvPSv3OyM/E9ZPyBR412+UUnKLs+AqyqbmZM5i5xySKneXZhFhNbYf+P75kmCFx88HQjJmgtfDC5tmk1zA7AvKsmROBxRjwbbY0nc9OcaOA+tdTXUck6HuEauZ54jWmqqtsGIJPlB3Ne3QkFUupatBXYKDRylFCOH/A0n75mT5A3rSMwILg+U5AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Sonar Project",title:"Sonar Project",src:"/ibm-gsi-cloudnative-journey/static/2cc0afeb1b27249c0a8deea73d1de166/3bb9b/sonar-project.png",srcSet:["/ibm-gsi-cloudnative-journey/static/2cc0afeb1b27249c0a8deea73d1de166/7fc1e/sonar-project.png 288w","/ibm-gsi-cloudnative-journey/static/2cc0afeb1b27249c0a8deea73d1de166/a5df1/sonar-project.png 576w","/ibm-gsi-cloudnative-journey/static/2cc0afeb1b27249c0a8deea73d1de166/3bb9b/sonar-project.png 740w"],sizes:"(max-width: 740px) 100vw, 740px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(n.b)("p",{parentName:"li"},"  The project summary shows several characteristics measured in the app:"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"The quality gate passed"),Object(n.b)("li",{parentName:"ul"},"Several issues were found, categorized by type",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"2 bugs for a C rating"),Object(n.b)("li",{parentName:"ul"},"0 vulnerabilities for an A rating"),Object(n.b)("li",{parentName:"ul"},"17 code smells but an A rating"),Object(n.b)("li",{parentName:"ul"},"None of the code was tested"),Object(n.b)("li",{parentName:"ul"},"None of it is duplicate code"))),Object(n.b)("li",{parentName:"ul"},"It scanned 1.5k lines of code written in Java, a small program (XS, S, M, L, XL)"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"In the Projects list, click on the project name (such as ",Object(n.b)("inlineCode",{parentName:"p"},"bwoolf1.sonar-java"),") to open your project"),Object(n.b)("p",{parentName:"li"},"  The project overview shows more detail about how many issues were found in the app"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Reliability: 2 bugs for a C rating"),Object(n.b)("li",{parentName:"ul"},"Security: 1 security hotspot but an A rating"),Object(n.b)("li",{parentName:"ul"},"Maintainability: 17 code smells, 2 hrs of technical debt but an A rating"),Object(n.b)("li",{parentName:"ul"},"Coverage: 7 unit tests"),Object(n.b)("li",{parentName:"ul"},"Duplications: 0 duplicated blocks")))),Object(n.b)("h3",null,"Examine the issues"),Object(n.b)("p",null,"Use the SonarQube dashboard to explore the issues that it found in your project."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"In the Reliability pane of the project’s Overview page, click on the “2” to open the Issues page"),Object(n.b)("p",{parentName:"li"},"  The Issues page, filtered for bugs, shows two issues. Both concern “synchronized” methods."),Object(n.b)("p",{parentName:"li"},"  ",Object(n.b)("span",s({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"40.27777777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAABY0lEQVQoz42QX2/aMBRH8233Mg2JPwP2spfuYf1efShUW7eJAYFCSkKaEJLYiQ2Tiji9CW3VaWq1Kx3J8rXP/dlOq9Wi3/9Eu92h3fkodOj1enS7XdnvU/WbzWZNtW4LH96/48vZZy4vLxgMBgyHV3w9P6fRaOAgZa1F6wKjFDtjuT8cOAiv1fHe8mevyFVKURTE24zC7uqek2UZt35AkmuSICT115SlIc/zZ6ozKlcYY0RQyvASa3aCrc9qretA+/0eRynNeOHjRRmrbUGUam5GEybD70y+/WB8dc3s+heLn7+5HU3x3SV3c4/tclWznnksRy7RKjwlLMuSZBOziSPSZCNTDfFiSTieEroz1pMp8fyG1PNIZH/r+Wh5iQnvsEK+CojmC1QUn4TVH6RJgpLYuTo969W/Ox5r3uo7hYjCIECJrJC0lfDp4r/IpWcxf/cepXVC13UJRFq+EL5M9L9U9QDsTEt3hmQY4wAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Sonar Bugs",title:"Sonar Bugs",src:"/ibm-gsi-cloudnative-journey/static/c7d0fe3b8d0f4792323ce3295b1f1b16/3cbba/SonarQube-bugs.png",srcSet:["/ibm-gsi-cloudnative-journey/static/c7d0fe3b8d0f4792323ce3295b1f1b16/7fc1e/SonarQube-bugs.png 288w","/ibm-gsi-cloudnative-journey/static/c7d0fe3b8d0f4792323ce3295b1f1b16/a5df1/SonarQube-bugs.png 576w","/ibm-gsi-cloudnative-journey/static/c7d0fe3b8d0f4792323ce3295b1f1b16/3cbba/SonarQube-bugs.png 1152w","/ibm-gsi-cloudnative-journey/static/c7d0fe3b8d0f4792323ce3295b1f1b16/0b124/SonarQube-bugs.png 1728w","/ibm-gsi-cloudnative-journey/static/c7d0fe3b8d0f4792323ce3295b1f1b16/4ea69/SonarQube-bugs.png 2304w","/ibm-gsi-cloudnative-journey/static/c7d0fe3b8d0f4792323ce3295b1f1b16/8dc0b/SonarQube-bugs.png 2880w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"In the Issues list, click on either issue to see where the issues appeared in the code"),Object(n.b)("p",{parentName:"li"},"  The Issues detail shows the source code file for the Java class.\nThe issue descriptions are embedded after the ",Object(n.b)("inlineCode",{parentName:"p"},"mark")," and ",Object(n.b)("inlineCode",{parentName:"p"},"reset")," method signatures."),Object(n.b)("p",{parentName:"li"},"  ",Object(n.b)("span",s({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"76.38888888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB80lEQVQ4y51TiXLaMBT0//9XeqXTBExICJjDUGx86vaFvX0SIW2HmYREnh09aaT1vvdWXlmW4JxjoE9qhqat0fcDjsOA7tij6zpa97BjoD2Lt4ZXlgwlK+xx5KrGgWlktJcxAaYMjDFo2/YDhEUJxkpHKLQA1xp1VUGbCqaqncIzyXtklwolqRMagkpQComcVBqjL1J+C56tIePMLXJB5FISSQVRtahIadM0VxH9R1iwxClo2gaKUrZEddtdVbOLlIuiQJqmjiiMI8QUpxl1nlLWtKeUgpQWkmLtamtRUX1dnV18ysTCE4JjtQ4xuvkO/+YW4x93GH2h+NtP+F9v8fxrhMW9jznNK/8R6+ncIZoFmN1PMb/zETwFEC8/9RjjpGoPKQQUNSFPc2RJCl4waGqSIetULzBWoTxDQQmLk3LrBgtnG07NsMO0BnXXwPb0iM8Nz9aJE+nuaYbn8QSLCaXlTxA8zBCMxginj4gXAaL5HOl6g2y7J/yGimIkmx2S1QY8PrzaiggNijxBslyiWK4RL1fusl1nmxBiH7nLMqKZLqo4gTok0IcDiu0ORbiFpEa+EtqUS5adbHPsUJF12u6I/oN2OdvL+dC9lKFHTHGYcWT0kzRNYC1V17U9/a6h/yosT2/ZPi+7b2Hjf3HNszuf+QPIk4gNlTP2DgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Sonar Bugs in Code",title:"Sonar Bugs in Code",src:"/ibm-gsi-cloudnative-journey/static/9d520af58ed09a91f323ba84e10504e3/3cbba/SonarQube-bugs-code.png",srcSet:["/ibm-gsi-cloudnative-journey/static/9d520af58ed09a91f323ba84e10504e3/7fc1e/SonarQube-bugs-code.png 288w","/ibm-gsi-cloudnative-journey/static/9d520af58ed09a91f323ba84e10504e3/a5df1/SonarQube-bugs-code.png 576w","/ibm-gsi-cloudnative-journey/static/9d520af58ed09a91f323ba84e10504e3/3cbba/SonarQube-bugs-code.png 1152w","/ibm-gsi-cloudnative-journey/static/9d520af58ed09a91f323ba84e10504e3/0b124/SonarQube-bugs-code.png 1728w","/ibm-gsi-cloudnative-journey/static/9d520af58ed09a91f323ba84e10504e3/b0fc1/SonarQube-bugs-code.png 2008w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"In either issue, press the ",Object(n.b)("strong",{parentName:"p"},"Why is this an issue?")," button."),Object(n.b)("p",{parentName:"li"},"  SonarQube displays the details of its “Overrides should match their parent class methods in synchronization” rule."),Object(n.b)("p",{parentName:"li"},"  Now you need to investigate to figure out why the code violates this rule."),Object(n.b)("p",{parentName:"li"},"  Want to see if you can track down the problem before seeing the solution?\nWhat to fix is pretty obvious—the Rule explains what to do—but tracking down why takes some effort."),Object(n.b)("hr",{parentName:"li"}),Object(n.b)("p",{parentName:"li"},"  Here’s the solution:"),Object(n.b)("p",{parentName:"li"},"  The error is not in the file’s parent class, ",Object(n.b)("inlineCode",{parentName:"p"},"ResettableHttpServletRequest"),", but in its embedded class, ",Object(n.b)("inlineCode",{parentName:"p"},"SimpleServletInputStream"),",\nwhich extends ",Object(n.b)("inlineCode",{parentName:"p"},"javax.servlet.ServletInputStream"),". The Javadocs for ",Object(n.b)("inlineCode",{parentName:"p"},"ServletInputStream")," show that it extends\n",Object(n.b)("inlineCode",{parentName:"p"},"java.io.InputStream"),". The ",Object(n.b)("a",s({parentName:"p"},{href:"http://physics.usc.edu/java/api/java.io.InputStream.html"}),"original Java 1.0 Javadocs"),"\nshow that these methods in InputStream are indeed synchronized:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",s({parentName:"pre"},{className:"language-java"}),"public synchronized void mark(int readlimit)\n. . .\npublic synchronized void reset() throws IOException\n")),Object(n.b)("p",{parentName:"li"},"  ",Object(n.b)("a",s({parentName:"p"},{href:"https://docs.oracle.com/javase/7/docs/api/java/io/InputStream.html#mark(int)"}),"More recent Javadocs"),"\nhaven’t shown these signatures for years, but the compiler says the class is still defined that way.\nThere’s some debate about ",Object(n.b)("a",s({parentName:"p"},{href:"https://stackoverflow.com/questions/33525923/synchronized-methods-in-java-io-streams"}),"whether mark and reset really need to be synchronized"),". But SonarQube doesn’t judge, it just reports:\nSince the superclass defined the method signatures as synchronized,\nSonarQube is warning that the subclass is supposed to do so as well."))),Object(n.b)("h3",null,"Examine the other issues"),Object(n.b)("p",null,"Besides the bugs, SonarQube also found issues that are hotspots and code smells."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"In the SonarQube dashboard, go back to the Issues page")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Click on the “1” above Security hotspots"),Object(n.b)("p",{parentName:"li"},"  The issue warns to “Make sure that command line arguments are used safely here.”"),Object(n.b)("p",{parentName:"li"},"  ",Object(n.b)("span",s({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.09722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAABn0lEQVQoz02SiW7bMBBE9f8fVqBB2jROCgQ57Di2TJGSeB8iXXu6lOwkBB52RYmzs0s1UmkMw4BhlBgpt96jlIJpmnA+nXA+n7+Yn4HTMWFyDMFx+KCRc4Z2YaYZxxHGWghl5g3nHLTWCDEi5gkhBHgqUmNKiYhzHil3zqOeHyWZ4QJs36I5MIb2Y4vDeo2hF/AkaKlAJkH1voWj/ETOqgshBJRSc16pXdQimTo6EoX2Gs57Uu5gX9folYWyYREMEfL1bf6oripaRyPleHGaEKloKcv762o+2h4bLqGmf2hlgLATLLlUSkJSlNS+pJYkOaujcYHEyFlMEznMMylNnzQ7JrBnHEJajNbD0AGlFdhhha69g+ge0PEn9PwRnK0o/oVVz3D6hS5mg+LfL2yoqx2aUAdOWGtoXmYeuDWKhvwLu+0PdPsbSHYDK24R1T2KWeHoHhfswzdWKO4JTZ1XxV0uI9DsjJYI8g8Uv4WpsJ/Qlf43orxDNhfhKjJTBe8XwavQNS6/iCe3B1i9RzAtAuW+RuIac+Q4JoHyCScG/Aef9q1O4kQCHQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Sonar Hotspot",title:"Sonar Hotspot",src:"/ibm-gsi-cloudnative-journey/static/d692234d1c0f3c226002a2bb05392805/3cbba/SonarQube-hotspot.png",srcSet:["/ibm-gsi-cloudnative-journey/static/d692234d1c0f3c226002a2bb05392805/7fc1e/SonarQube-hotspot.png 288w","/ibm-gsi-cloudnative-journey/static/d692234d1c0f3c226002a2bb05392805/a5df1/SonarQube-hotspot.png 576w","/ibm-gsi-cloudnative-journey/static/d692234d1c0f3c226002a2bb05392805/3cbba/SonarQube-hotspot.png 1152w","/ibm-gsi-cloudnative-journey/static/d692234d1c0f3c226002a2bb05392805/0b124/SonarQube-hotspot.png 1728w","/ibm-gsi-cloudnative-journey/static/d692234d1c0f3c226002a2bb05392805/4ea69/SonarQube-hotspot.png 2304w","/ibm-gsi-cloudnative-journey/static/d692234d1c0f3c226002a2bb05392805/23440/SonarQube-hotspot.png 2574w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(n.b)("p",{parentName:"li"},"  SonarQube considers any class that has a ",Object(n.b)("inlineCode",{parentName:"p"},"public static void main(String[] args)")," method to be a potential vulnerability.\nAs the rule explains, “Command line arguments can be dangerous just like any other user input. They should never be used without being first validated and sanitized.” This method passes them through unchecked, which is risky.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Back in the Issues page, click on “17” code smells"),Object(n.b)("p",{parentName:"li"},"   SonarQube found issues such as:"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Remove this unused import ‘java.lang.System.lineSeparator’.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Move constants to a class or enum.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"This block of commented-out lines of code should be removed.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Replace this use of System.out or System.err by a logger."),Object(n.b)("p",{parentName:"li"},"None of these break your app’s functionality, but they do make the code more difficult to maintain."))))),Object(n.b)("h2",null,"Give it a try"),Object(n.b)("p",null,"As we saw earlier, SonarQube found two bugs in our Java app. Let’s do something about that."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"740px"}},"\n      ",Object(n.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"19.444444444444443%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAAsSAAALEgHS3X78AAAA1UlEQVQY002PzU7DMBCE+/7PgXgKOFJ64UecKlVqSCpEkiaO43ptQ+J82G2FOtJqZ6Wdmd3VoRv5VoZaCV/myP3+jnXzRMYcJ2KMLMtCzHXlGbnf8gzvPSv3OyM/E9ZPyBR412+UUnKLs+AqyqbmZM5i5xySKneXZhFhNbYf+P75kmCFx88HQjJmgtfDC5tmk1zA7AvKsmROBxRjwbbY0nc9OcaOA+tdTXUck6HuEauZ54jWmqqtsGIJPlB3Ne3QkFUupatBXYKDRylFCOH/A0n75mT5A3rSMwILg+U5AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Sonar Project",title:"Sonar Project",src:"/ibm-gsi-cloudnative-journey/static/2cc0afeb1b27249c0a8deea73d1de166/3bb9b/sonar-project.png",srcSet:["/ibm-gsi-cloudnative-journey/static/2cc0afeb1b27249c0a8deea73d1de166/7fc1e/sonar-project.png 288w","/ibm-gsi-cloudnative-journey/static/2cc0afeb1b27249c0a8deea73d1de166/a5df1/sonar-project.png 576w","/ibm-gsi-cloudnative-journey/static/2cc0afeb1b27249c0a8deea73d1de166/3bb9b/sonar-project.png 740w"],sizes:"(max-width: 740px) 100vw, 740px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("h3",null,"Add a quality gate to SonarQube"),Object(n.b)("p",null,"The first problem is that the quality gate says that the app passed. The default quality gate is OK with those two bugs, but we’re not."),Object(n.b)("p",null,"Let’s create a new quality gate that checks for bugs."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Open the SonarQube dashboard through OpenShift console shortcut as shown below:")),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.5%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAABYlAAAWJQFJUiTwAAACcklEQVQ4y3VTW2sTQRjd32Eamsu6u22Igj5I6Zpa29BaFUTw1wm+VvBBfBFLWoRSbV58EQRpq00M1lzazd7vu8dvvphQpQ4cdmZn9nznnPlWuq2qqNXrmJubQ6VSwbVCAQWCWAsUi0Vel0ol6LpOWMZKcwv62mPIchXlchmapkFbWISsapDqN29BVjSUKtfxcnsbvdNjfDs5QqfTJXQYp4Rer4eL8xFM00KW5xibJu91u138oL3O0Vd8//wJ0kLtBspVlQhlvHnbwnHfx4Wb4KrheA4sy0IURUjT9K+9/OcxwoPXkNSFGkpVhexW8eLVOzxvO9j9YiDLUgRRgjBOECc0D2MMzw0EQcBkSZLw0/d9xHGMJMsRxCkkRauxwuJ8Ba2991xt5IXok8pfdogzJ8Y4SOH6EQa9IVk2kZNloTLLMp4LiAKe604JFcyXZey0WhBGUqrmuDY8z+ePTJtyIzVjw4Bl2xP7jsvqIlI/dkNykfH7PxkqlKFChDukzIMX5hgaA7gBWUkjnAzO0Lci2J7BJGII60JVGEZ8QTFFI4pL2mJ9prC1twuHKrlk0fFsrp5mCQaWiZEdwyCFJn8cE1HIhALTXJlQURdRkVVWKAgtCtb2Ca5FFyIOJTgzxxiYEQLHgU2W2SqRTrMT6xlhc/MhVlbX0bi3jv2DfQwptyDKcW6OyHrClk9HfVKZkGqPFU6shkwgLke0klDNhE+ePsNac5NJD9ttiGgFkWibyS1m8KIYpjdpk8sQCsWZKcRaam5s4e7KfdxZ0vHh4yEHLshmDZvjvyP/Z5MJNx48gt5YxdJyY0Y4+Quovy4dvApXEf8G52VlUpivCjYAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"OpenShiftConsoleToolsShortcut",title:"OpenShiftConsoleToolsShortcut",src:"/ibm-gsi-cloudnative-journey/static/9865ed705b2cf8738f4be2f25ac59ebc/3cbba/ToolsShortCut.png",srcSet:["/ibm-gsi-cloudnative-journey/static/9865ed705b2cf8738f4be2f25ac59ebc/7fc1e/ToolsShortCut.png 288w","/ibm-gsi-cloudnative-journey/static/9865ed705b2cf8738f4be2f25ac59ebc/a5df1/ToolsShortCut.png 576w","/ibm-gsi-cloudnative-journey/static/9865ed705b2cf8738f4be2f25ac59ebc/3cbba/ToolsShortCut.png 1152w","/ibm-gsi-cloudnative-journey/static/9865ed705b2cf8738f4be2f25ac59ebc/0b124/ToolsShortCut.png 1728w","/ibm-gsi-cloudnative-journey/static/9865ed705b2cf8738f4be2f25ac59ebc/4ea69/ToolsShortCut.png 2304w","/ibm-gsi-cloudnative-journey/static/9865ed705b2cf8738f4be2f25ac59ebc/893b8/ToolsShortCut.png 2830w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"To create and install a new quality gate, first log in to SonarQube")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Go to the Quality Gates page")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Make a copy of the default gate named ",Object(n.b)("em",{parentName:"p"},"Sonar way"),", give it a name like ",Object(n.b)("inlineCode",{parentName:"p"},"better gate {your initials}"),", i.e. ",Object(n.b)("inlineCode",{parentName:"p"},"better gate bw"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Add a condition, Bugs\tis greater than\t0")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Add your project to this gate"))),Object(n.b)("p",null,"Run the pipeline again to scan the code again."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Back in the OpenShift console, on the Application Console > Builds > Pipelines page, press Start Pipeline")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"After the Sonar Scan stage completes, go back to the SonarQube dashboard and take a look at your project"))),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"738px"}},"\n      ",Object(n.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"19.444444444444443%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAAsSAAALEgHS3X78AAAA30lEQVQY002P60rDQBCF8/4P4w/FZygiQtE/haIxVHIpuWyy12Sz+7ndIjgwzPWcOVOsq6ObJM0oaSdFPSw5b1Kv7mdqaZHnT/qHJ1zdEIEYAjeLMWb/nxfee5wPmG1Hrx6z7qw+5qjshkvYMM2o4wdhkRnsN88iF6yzGG0w5u7WOYobv7i+Y4dDXrZa8fz1iNoSOJEdf954GV7zbKkqquqbPR0v55JTeWLoh6xazYLDuU2EqZrFgFaCfQ8IIbhcL2ijscbS9i3d2CXypFprxmm6H07qxnHEJVV/L6u0/wssAzLIZ0xEsQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Sonar Project Failed",title:"Sonar Project Failed",src:"/ibm-gsi-cloudnative-journey/static/2c0f49cef438d7e3c4421ec4ca8a772c/83550/sonar-project-failed.png",srcSet:["/ibm-gsi-cloudnative-journey/static/2c0f49cef438d7e3c4421ec4ca8a772c/7fc1e/sonar-project-failed.png 288w","/ibm-gsi-cloudnative-journey/static/2c0f49cef438d7e3c4421ec4ca8a772c/a5df1/sonar-project-failed.png 576w","/ibm-gsi-cloudnative-journey/static/2c0f49cef438d7e3c4421ec4ca8a772c/83550/sonar-project-failed.png 738w"],sizes:"(max-width: 738px) 100vw, 738px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,"Good news, the quality gate is working and SonarQube fails the project now!"),Object(n.b)("h3",null,"Fix the code"),Object(n.b)("p",null," Let’s fix the problems. As discussed before, the bugs are that two methods need to be marked as synchronized. Let’s fix the code."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Edit the class ",Object(n.b)("inlineCode",{parentName:"p"},"com.ibm.cloud_garage.logging.inbound.ResettableHttpServletRequest"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Edit the methods ",Object(n.b)("inlineCode",{parentName:"p"},"mark")," and ",Object(n.b)("inlineCode",{parentName:"p"},"reset")," to make them both ",Object(n.b)("inlineCode",{parentName:"p"},"synchronized")))),Object(n.b)("pre",null,Object(n.b)("code",s({parentName:"pre"},{className:"language-java"}),"public synchronized void mark(int i) {\n. . .\npublic synchronized void reset() throws IOException {\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Push the change to the server repo, which runs the pipeline again, and this time the Quality Gate stage passes")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Check the project in SonarQube and see that it now has 0 bugs and has now passed"))),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"740px"}},"\n      ",Object(n.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"19.444444444444443%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAAsSAAALEgHS3X78AAAA4klEQVQY0zWPiUrDUBBF8/8/If6C4C9oEYugFAoV07Rqs728LG/NdnxJ8MJwZ5gZODfKZMut6kil4lds/U12/IiGUjoO1YH7zzsSlbBomqfV53le679fZK0l8sOM7Se07zF+ZJkX75xnGKD0JbviicbX69Mw9LRdi3UWow3GbGWdQ2tN9JG+85Lv1mOtFI9fD6i+Cyjw9r1nn79uu/jCOTkz9iNxE3OMj4hSsLCppub5lHIpGqKiKhCtYBon6rrmml/RRmONJS1TMpmFSFOg0Ugpt2iBrqoqXKDaIoeE1gVyxR8tUDFzpIBlsgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Sonar Project Passed",title:"Sonar Project Passed",src:"/ibm-gsi-cloudnative-journey/static/5be6ec29ddd18885b6b974c3b0d8107e/3bb9b/sonar-project-passed.png",srcSet:["/ibm-gsi-cloudnative-journey/static/5be6ec29ddd18885b6b974c3b0d8107e/7fc1e/sonar-project-passed.png 288w","/ibm-gsi-cloudnative-journey/static/5be6ec29ddd18885b6b974c3b0d8107e/a5df1/sonar-project-passed.png 576w","/ibm-gsi-cloudnative-journey/static/5be6ec29ddd18885b6b974c3b0d8107e/3bb9b/sonar-project-passed.png 740w"],sizes:"(max-width: 740px) 100vw, 740px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Extra credit"),": The code still has 17 code smells. Go fix those!"),Object(n.b)("h2",null,"Conclusion"),Object(n.b)("p",null,"It’s a good idea to incorporate code analysis as part of your application development lifecycle,\nso you can use its findings to help enforce and improve your code quality.\nHere, the ",Object(n.b)(o.a,{name:"env",mdxType:"Globals"})," uses SonarQube, but you never had to run SonarQube.\nJust run the ",Object(n.b)(o.a,{name:"env",mdxType:"Globals"}),"’s build pipeline on your app and it gets scanned automatically.\nAfter running the pipeline, open the SonarQube UI and browse the findings in your app’s project to figure\nout what code you ought to fix."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-developer-intermediate-code-analysis-index-mdx-bf3355eed97387f4ef47.js.map