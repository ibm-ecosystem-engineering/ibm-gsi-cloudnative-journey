(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{QPcP:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return l}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var i=a("7ljp"),n=a("013z");a("T0C+"),a("qKvR");function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}var c,s={},r=(c="PageDescription",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),b={_frontmatter:s},o=n.a;function l(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,i,n={},p=Object.keys(e);for(i=0;i<p.length;i++)a=p[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["components"]);return Object(i.b)(o,p({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(r,{mdxType:"PageDescription"},Object(i.b)("p",null,"Securing Inventory App with App ID")),Object(i.b)("p",null,"To secure the application we are using the capabilities available within the IBMCloud platform to enable integration with AppId.With Openshift 3.11,\na simple annotation was used on the ingress to enable Appid.In Openshift 4.x,Red Hat OpenShift on IBM Cloud annotations (ingress.bluemix.net/","[annotation]",")\nand NGINX annotations (nginx.ingress.kubernetes.io/","[annotation_name]",") are not supported for the router or the Ingress resource. With Openshift 4.x,AppId\nintegration is enabled with SDKs."),Object(i.b)("h2",null,"Prerequisites"),Object(i.b)("p",null,"The following prerequisites are required for AppId integration:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"An instance of the App ID service:\nIn IBM Cloud Dashboard, go to “Services” and select the AppId instance."),Object(i.b)("span",p({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(i.b)("span",p({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"10.069444444444445%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAYAAABYBvyLAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAZUlEQVQI1y2MCwoFIQwD9/5nVXR1bet3HpYXCGQIyVM/IeWMqjLn5JzjNjNElL238+3GGJ5776y1OPsw1sS6/XebR5oSQySEQBPhgJelFGKMfnRl1p3vUanVc0qZt1Xer9wVVRc/gP6b+rRhPsIAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",p({parentName:"span"},{className:"gatsby-resp-image-image",alt:"AppId Service",title:"AppId Service",src:"/ibm-gsi-cloudnative-journey/static/5af330e9801801753cf937c10ffdfb30/3cbba/AppIdIntegration01.png",srcSet:["/ibm-gsi-cloudnative-journey/static/5af330e9801801753cf937c10ffdfb30/7fc1e/AppIdIntegration01.png 288w","/ibm-gsi-cloudnative-journey/static/5af330e9801801753cf937c10ffdfb30/a5df1/AppIdIntegration01.png 576w","/ibm-gsi-cloudnative-journey/static/5af330e9801801753cf937c10ffdfb30/3cbba/AppIdIntegration01.png 1152w","/ibm-gsi-cloudnative-journey/static/5af330e9801801753cf937c10ffdfb30/0b124/AppIdIntegration01.png 1728w","/ibm-gsi-cloudnative-journey/static/5af330e9801801753cf937c10ffdfb30/4ea69/AppIdIntegration01.png 2304w","/ibm-gsi-cloudnative-journey/static/5af330e9801801753cf937c10ffdfb30/86470/AppIdIntegration01.png 2988w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"A set of service credentials:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"In AppId instance, go to “Application”. ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Click on “Add application”.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Enter your application name ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Select the type as Regular web application.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Click on Save to create the service credentials for your application."),Object(i.b)("span",p({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(i.b)("span",p({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.81944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAABrUlEQVQoz6WSy07CQBSGeQB1ow+iG7ksfAuXGhOfwaUCAcSFmmCqBDXxAVSMCTuNhSZc3kIx3KsGS6eU6ZTfmcEaanDlpF/O6cw5/5w/bUBVVahPT9C0EqrVCqf6Q6VS8eHtaZqGYrGIcrmMWq2GUqmETCaDdDqNALGGMMkQ9ojiPyuXyyGVSiHQ6BE0On103kz0TSZ5HzD0ejq63a5E13VYlgXXdcEY8zEej+VZNpudCDKuPrAoyJDBdgCbDyoipQ5s25aMRiPZLJYQ8KKXixpFURCPxxEwBwYcSvnt/EbH4Y0THJkz31TTYtPRJygsNZtNtFotNDntTkfm7XZbRi+v1+vS2vR0MwWFHcMwQAiRDQLPqsDiH42yMZ5fXtHTP6SAw989XK5JrClBUSBsCSi3Lqz6l8sfU8whZvuF+10zxNmpgpgQLBQKyOfzM7hD/vYaN/cPuNKAC3U2l0Xg/JEifaggmeCCkUgEoVAIwWDwF2GEV5exsraOxW2Chc1PzEuMH8Te3MYAS1s6dmInONjngtFoVHqfTYzbSGA3cYy9xNEfTM6SyX3+HybxBdXH7KuZ0tLBAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",p({parentName:"span"},{className:"gatsby-resp-image-image",alt:"AppId Credentials Creation",title:"AppId Credentials Creation",src:"/ibm-gsi-cloudnative-journey/static/ea5d0425e0e2110d86708bfdb7b6ace3/3cbba/AppIdInt02a.png",srcSet:["/ibm-gsi-cloudnative-journey/static/ea5d0425e0e2110d86708bfdb7b6ace3/7fc1e/AppIdInt02a.png 288w","/ibm-gsi-cloudnative-journey/static/ea5d0425e0e2110d86708bfdb7b6ace3/a5df1/AppIdInt02a.png 576w","/ibm-gsi-cloudnative-journey/static/ea5d0425e0e2110d86708bfdb7b6ace3/3cbba/AppIdInt02a.png 1152w","/ibm-gsi-cloudnative-journey/static/ea5d0425e0e2110d86708bfdb7b6ace3/0b124/AppIdInt02a.png 1728w","/ibm-gsi-cloudnative-journey/static/ea5d0425e0e2110d86708bfdb7b6ace3/369ed/AppIdInt02a.png 1916w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"After saving, your application credentials will get created.Click on the down Arrow at\nthe left end of your application name and get the credentials."),Object(i.b)("span",p({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(i.b)("span",p({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"19.791666666666668%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAeElEQVQY032QCQrAIAwE/f9HBW9FK55bUrBIWxpYNlGSCWGldhxHQq0Vc06MMS6nIN9VSkHO+fW+eshZjBHGGAghoLWGUgrW2hvwhOyxD101896Dcw4pJZxzl0IIIFBK6RbVBCHRpq21z6GMPnrvv/R906XnWVZ+ArmuOoyN2AdXAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",p({parentName:"span"},{className:"gatsby-resp-image-image",alt:"AppId Credentials Creation",title:"AppId Credentials Creation",src:"/ibm-gsi-cloudnative-journey/static/e430526af492be1525e2476e417988c4/3cbba/AppidInt03.png",srcSet:["/ibm-gsi-cloudnative-journey/static/e430526af492be1525e2476e417988c4/7fc1e/AppidInt03.png 288w","/ibm-gsi-cloudnative-journey/static/e430526af492be1525e2476e417988c4/a5df1/AppidInt03.png 576w","/ibm-gsi-cloudnative-journey/static/e430526af492be1525e2476e417988c4/3cbba/AppidInt03.png 1152w","/ibm-gsi-cloudnative-journey/static/e430526af492be1525e2476e417988c4/0b124/AppidInt03.png 1728w","/ibm-gsi-cloudnative-journey/static/e430526af492be1525e2476e417988c4/4ea69/AppidInt03.png 2304w","/ibm-gsi-cloudnative-journey/static/e430526af492be1525e2476e417988c4/c474b/AppidInt03.png 2862w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"NPM version 4 or higher.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Node version 6 or higher.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Set your redirect URI in the App ID service dashboard:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"In the AppID instance, go to Manage Authentication and select the Authentication Settings tab.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Under “Add web redirect URLs”, type the URL which you want to be redirected.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Click on the Circle Plus symbol in the end to add your URL. "),Object(i.b)("p",{parentName:"li"},Object(i.b)("span",p({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(i.b)("span",p({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"31.944444444444443%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAABYlAAAWJQFJUiTwAAABEklEQVQY04WQWU7DMBCGfXjuAhJCPPHAFTgAUhIpUVJKNrzF8Za2/Izd0DeEpU8ztmf7hzVNg6Io0LYtpmlC3/coyxJVVaGuazRNjZL+53mCtRbGGKzr+icsFUnFhmGAlBJaayilsCwLVuvQHScciI9+zsX+g6UiaSrO+W0CrRWE4LlBiBtCiGQjYgiIMVxt8PS+469EimHjOKLrupz8K0cISRI5ONnkS6UzQiqKo2bSgOsA6wKcD/A+4nQ6Ix2WJktyk9R1NVnmyC2Og8TnqCjRQ1Ayz/id5EfIhTAbtHF4e//C3cMIJoS47S5NaJ3DxDWaw0B743DhjLB9w8cL/HYhf4fu6Y9c2vGAx+cX3D+94gdOXcbX755IGAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",p({parentName:"span"},{className:"gatsby-resp-image-image",alt:"AppId Redirect URI",title:"AppId Redirect URI",src:"/ibm-gsi-cloudnative-journey/static/3ce5f8c17ee9842fa8970c3b43987b45/3cbba/AppidInt04.png",srcSet:["/ibm-gsi-cloudnative-journey/static/3ce5f8c17ee9842fa8970c3b43987b45/7fc1e/AppidInt04.png 288w","/ibm-gsi-cloudnative-journey/static/3ce5f8c17ee9842fa8970c3b43987b45/a5df1/AppidInt04.png 576w","/ibm-gsi-cloudnative-journey/static/3ce5f8c17ee9842fa8970c3b43987b45/3cbba/AppidInt04.png 1152w","/ibm-gsi-cloudnative-journey/static/3ce5f8c17ee9842fa8970c3b43987b45/0b124/AppidInt04.png 1728w","/ibm-gsi-cloudnative-journey/static/3ce5f8c17ee9842fa8970c3b43987b45/4ea69/AppidInt04.png 2304w","/ibm-gsi-cloudnative-journey/static/3ce5f8c17ee9842fa8970c3b43987b45/d4e2e/AppidInt04.png 2306w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),"    "))))),Object(i.b)("h2",null,"Nodejs SDK"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Installation: "),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"By using the command line, change to the directory that contains your Node.js app."),Object(i.b)("li",{parentName:"ul"},"Install the AppID service.",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",p({parentName:"pre"},{className:"language-bash"}),"npm install --save ibmcloud-appid\n"))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Add the following ",Object(i.b)("i",null,"require")," definitions to your ",Object(i.b)("i",null,"server.js"),":"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",p({parentName:"pre"},{className:"language-bash"}),"const express = require('express');\nconst session = require('express-session')\nconst passport = require('passport');\nconst WebAppStrategy = require(\"ibmcloud-appid\").WebAppStrategy;\nconst CALLBACK_URL = \"/ibm/cloud/appid/callback\";\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Set up your express app to use express-session middleware."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",p({parentName:"pre"},{className:"language-bash"}),'const app = express();\napp.use(session({\n        secret: "123456",\n        resave: true,\n        saveUninitialized: true\n    }));\napp.use(passport.initialize());\napp.use(passport.session());\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Obtain your credentials by navigating to the ",Object(i.b)("b",null,"Applications")," tab of the AppId dashboard as mentioned in ",Object(i.b)("a",p({parentName:"p"},{href:"#prerequisites"}),"Prerequisites"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Initialize the SDK using the information obtained in the previous steps."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",p({parentName:"pre"},{className:"language-bash"}),' passport.use(new WebAppStrategy({\n tenantId: "{tenant-id}",\n clientId: "{client-id}",\n secret: "{secret}",\n oauthServerUrl: "{oauth-server-url}",\n redirectUri: "{app-url}" + CALLBACK_URL\n }));\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Configure passport with serialization and deserialization. This configuration step is required for authenticated session persistence across HTTP requests. For more information, see the ",Object(i.b)("a",p({parentName:"p"},{href:"http://www.passportjs.org/docs/"}),"passport docs")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",p({parentName:"pre"},{className:"language-bash"}),"passport.serializeUser(function(user, cb) {\ncb(null, user);\n});\npassport.deserializeUser(function(obj, cb) {\ncb(null, obj);\n});\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Add the following code to your ",Object(i.b)("i",null,"server.js")," to issue the service redirects."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",p({parentName:"pre"},{className:"language-bash"}),"app.get(CALLBACK_URL, passport.authenticate(WebAppStrategy.STRATEGY_NAME));\napp.use(passport.authenticate(WebAppStrategy.STRATEGY_NAME ));\n")))),Object(i.b)("h2",null,"AppId redirect url config"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Get the ingress for the UI component by running ",Object(i.b)("inlineCode",{parentName:"p"},"igc ingress -n dev-{initials}"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Open the IBM Cloud resource list - ",Object(i.b)("inlineCode",{parentName:"p"},"https://cloud.ibm.com/resources"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Open the AppId instance to the ",Object(i.b)("inlineCode",{parentName:"p"},"Manage Authentication")," -> ",Object(i.b)("inlineCode",{parentName:"p"},"Authentication Settings")," view"),Object(i.b)("p",{parentName:"li"},"  ",Object(i.b)("span",p({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(i.b)("span",p({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"32.63888888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABYlAAAWJQFJUiTwAAAA6UlEQVQoz42SYW7DIAyFuf/pdoBJmzZl3dqkEGJsIIE3lyTbmj8r0qdnkHkYg4l5Qa0VNiT01iOEAD8RRKStl1KaPopxE6NUgGNSo4DAosSmHDMkLZvxYxgiwqKB84zLMOJy9RjchEGrJU4IMit50/8xgbkZ9pbw9nHGefB4PTm8dBZuii2JeE2mjX0zHVXzDOvV5qViClGrJHiSZrSaJfDGMV7n+U5jUsNaixoWjNrL9+6E7vML1o24Oq8HBE3WXkr8o3ss+nC/6xIjekcw0JHn0vpE+hi3Sn/g/fR7+BDfep31tzw99/gG+e4gxo2xhqIAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",p({parentName:"span"},{className:"gatsby-resp-image-image",alt:"AppId authentication settings",title:"AppId authentication settings",src:"/ibm-gsi-cloudnative-journey/static/ae4bd4e1a182887c1a8672620c4ff566/3cbba/appid-authentication-settings.png",srcSet:["/ibm-gsi-cloudnative-journey/static/ae4bd4e1a182887c1a8672620c4ff566/7fc1e/appid-authentication-settings.png 288w","/ibm-gsi-cloudnative-journey/static/ae4bd4e1a182887c1a8672620c4ff566/a5df1/appid-authentication-settings.png 576w","/ibm-gsi-cloudnative-journey/static/ae4bd4e1a182887c1a8672620c4ff566/3cbba/appid-authentication-settings.png 1152w","/ibm-gsi-cloudnative-journey/static/ae4bd4e1a182887c1a8672620c4ff566/0b124/appid-authentication-settings.png 1728w","/ibm-gsi-cloudnative-journey/static/ae4bd4e1a182887c1a8672620c4ff566/4ea69/appid-authentication-settings.png 2304w","/ibm-gsi-cloudnative-journey/static/ae4bd4e1a182887c1a8672620c4ff566/4640e/appid-authentication-settings.png 3072w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Add the redirect url for the application to the web redirect URLs. The redirect url will have\nthe following form:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",p({parentName:"pre"},{}),"`{ingress url}/ibm/cloud/appid/callback`\n\ne.g. `https://inventory-manangement-ui-dev.sms-test-oc-cluster.us-east.containers.appdomain.cloud/ibm/cloud/appid/callback`\n")))),Object(i.b)("h2",null,"Add users to AppId"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Open the AppId instance to ",Object(i.b)("inlineCode",{parentName:"p"},"Cloud Directory")," -> ",Object(i.b)("inlineCode",{parentName:"p"},"Users")),Object(i.b)("p",{parentName:"li"},"  ",Object(i.b)("span",p({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(i.b)("span",p({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"40.97222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAABLUlEQVQoz41RWU7DUAzM/W/CJeAGnACEEIUWlTRv35Nh7AjUDyrxMfFzxh5v02IsQkzYtg2zz1isR0wJPkSMMTDWDSTBz78wOe+RS8HKpJAKXEiIubBIVj/kjj5Wim9/QrhrTCFGCFpf8XXxOJ4XnM4GZ75DauQqHOFvQGNSRyqdjXVMi3Eq2Fnt/XPG8+sHXt6OOJxmWK7AuLRD37tvdTVR8SN6sQVnkzFZn6hckWsnUSF+pK1tReK42h0TfNwhybtftcBCuJBx/3jA3cOTdGiZmHVkIRyPMS9W9yc7MS6g1AbnoyKXxtUYCmZ05hQ2YnjI2oY2Nc2L0aOIoI9FA0XE8zgS1PpQTt7qq+W+WES4lKseUP4JP1lH9VrVkXEix4x5qN0Xfgv9117HfgPDfmzKObgiOQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",p({parentName:"span"},{className:"gatsby-resp-image-image",alt:"AppId cloud directory users",title:"AppId cloud directory users",src:"/ibm-gsi-cloudnative-journey/static/19d8a02b9ace5eb0cb8a36df89ccc7ad/3cbba/appid-cloud-directory-users.png",srcSet:["/ibm-gsi-cloudnative-journey/static/19d8a02b9ace5eb0cb8a36df89ccc7ad/7fc1e/appid-cloud-directory-users.png 288w","/ibm-gsi-cloudnative-journey/static/19d8a02b9ace5eb0cb8a36df89ccc7ad/a5df1/appid-cloud-directory-users.png 576w","/ibm-gsi-cloudnative-journey/static/19d8a02b9ace5eb0cb8a36df89ccc7ad/3cbba/appid-cloud-directory-users.png 1152w","/ibm-gsi-cloudnative-journey/static/19d8a02b9ace5eb0cb8a36df89ccc7ad/0b124/appid-cloud-directory-users.png 1728w","/ibm-gsi-cloudnative-journey/static/19d8a02b9ace5eb0cb8a36df89ccc7ad/4ea69/appid-cloud-directory-users.png 2304w","/ibm-gsi-cloudnative-journey/static/19d8a02b9ace5eb0cb8a36df89ccc7ad/ed928/appid-cloud-directory-users.png 3094w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Add yourself as a user with an email address, name, and password"))),Object(i.b)("h2",null,"Access the UI"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Open a browser to the UI Application URL")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You should be met with the AppId login screen. (This screen can be customized from the AppId service console but for now we are showing the default screen.)"),Object(i.b)("p",{parentName:"li"},"   ",Object(i.b)("span",p({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(i.b)("span",p({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"104.51388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAAACXBIWXMAABYlAAAWJQFJUiTwAAACaElEQVQ4y51UzWsTURDfP8VWrYeAlZQmbZLGkFoRPFi8efBW/C+8CQUPevBcFKS0CoqobfP9VQWPtggeFD8xaZL9SGxS3d333s/Z3WzcxCQNPvgxb2bn/WbezLyVQuEoQqEozvln4fcHMDMzi6kzPkxMnrZxYuKUsz851WNz7ZMdmwspHI0juBDH0oWLCMeWEIxfRoSCBIIhhCNRzFOw4FwYAQoYWYhhbj6CcHSRvp237TOBKO1jODvth883DWknk8dOtoikJTMFbOdeIZUtIEnI5EtI50q2nkrnkcpZfgVki6/JXiQ76dldspeQSOcIeUgCgAXekd49HwAxRHfPSpxzjAb718bYUH9JCIFBsBYjB8Nk+K0bPTBtQsen/9xIQiuiSYRGH0xG2YghhBiyXNKONhCOi+g5N5DQvc7+FxU3N97hTrKCu4R76QOsbpVx6/kPVJuG4yvGIaQaWetDZhdrkWUkrqxge3kFias38GLxGl5euo7mp29O7pwfT+g6GV8/o7X+AOLpJviTTYhnj8EfroGv34fQ1AGlGUboeIJ1ZsxaOsHsq6jlI/rOSqMa0jo8RFPTIKgEzDDACZZkut69xXgZuoTtNmRZsXVr9kzPQAvP2IxN2D76hbr2E7rJPN84GBH/FyHrjM+b9zWsbrzF7Ud7KMvt7rj0kw0l7I0sUKk3sf+xij1Co6V7XsiYGTqvQHQlM2mIBfVYWHX829mBGY78OZhHqMoaKjUVqtaEojVINuzack+Xj33LwvMEy1UZ38s1HNTqqFPHawRZ0bqEY2foQqeZU1WFoEJRFGg0l5bNHZ1+/AGny/lnxt5b4AAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",p({parentName:"span"},{className:"gatsby-resp-image-image",alt:"AppId Login Page",title:"AppId Login Page",src:"/ibm-gsi-cloudnative-journey/static/edf7371d6cd4b5b56ae514013d4dd490/3cbba/AppidLogin.png",srcSet:["/ibm-gsi-cloudnative-journey/static/edf7371d6cd4b5b56ae514013d4dd490/7fc1e/AppidLogin.png 288w","/ibm-gsi-cloudnative-journey/static/edf7371d6cd4b5b56ae514013d4dd490/a5df1/AppidLogin.png 576w","/ibm-gsi-cloudnative-journey/static/edf7371d6cd4b5b56ae514013d4dd490/3cbba/AppidLogin.png 1152w","/ibm-gsi-cloudnative-journey/static/edf7371d6cd4b5b56ae514013d4dd490/0b124/AppidLogin.png 1728w","/ibm-gsi-cloudnative-journey/static/edf7371d6cd4b5b56ae514013d4dd490/c58c0/AppidLogin.png 1958w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Provide the email address and password you configured in the previous steps. You should be granted access to the UI."))))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-developer-advanced-1-inventory-appid-index-mdx-a3d01042ee7eb3df3a3c.js.map