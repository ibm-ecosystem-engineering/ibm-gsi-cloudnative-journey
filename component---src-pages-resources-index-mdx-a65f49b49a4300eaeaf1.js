(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var i=a("pOBw"),o=a("q1tI"),n=a.n(o),c=a("NmYn"),s=a.n(c),r=a("OKom"),b=a("k4MR"),l=a("TSYQ"),p=a.n(l),d=a("QH2O"),g=a("qKvR"),m=function(e){var t,a=e.title,i=e.tabs,o=void 0===i?[]:i;return Object(g.b)("div",{className:p()(d.pageHeader,(t={},t[d.withTabs]=o.length,t))},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12"},Object(g.b)("h1",{id:"page-title",className:d.text},a)))))},u=a("pEPl"),A=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,i=u.data.site.siteMetadata.repository,o=a||i,n=o.baseUrl,c=o.subDirectory,s=n+"/edit/"+o.branch+c+"/src/pages"+t;return n?Object(g.b)("div",{className:"bx--row "+A.row},Object(g.b)("div",{className:"bx--col"},Object(g.b)("a",{className:A.link,href:s},"Edit this page on GitHub"))):null},h=a("FCXl"),y=(a("Oyvg"),a("Wbzz")),v=a("I8xM");var f=function(e){var t,a;function i(){return e.apply(this,arguments)||this}return a=e,(t=i).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,i.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,i=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=s()(e,{lower:!0}),n=o===i,c=new RegExp(i+"(?!-)"),r=a.replace(c,o);return Object(g.b)("li",{key:e,className:p()((t={},t[v.selectedItem]=n,t),v.listItem)},Object(g.b)(y.Link,{className:v.link,to:""+r},e))}));return Object(g.b)("div",{className:v.tabsContainer},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(g.b)("nav",null,Object(g.b)("ul",{className:v.list},o))))))},i}(n.a.Component),j=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,o=e.location,n=e.Title,c=t.frontmatter,l=void 0===c?{}:c,p=t.relativePagePath,d=t.titleType,u=l.tabs,A=l.title,y=l.theme,v=l.description,k=l.keywords,w=i.data.site.pathPrefix,C=w?o.pathname.replace(w,""):o.pathname,N=u?C.split("/").filter(Boolean).slice(-1)[0]||s()(u[0],{lower:!0}):"";return Object(g.b)(b.a,{tabs:u,homepage:!1,theme:y,pageTitle:A,pageDescription:v,pageKeywords:k,titleType:d},Object(g.b)(m,{title:n?Object(g.b)(n,null):A,label:"label",tabs:u}),u&&Object(g.b)(f,{slug:C,tabs:u,currentTab:N}),Object(g.b)(j.a,{padded:!0},a,Object(g.b)(O,{relativePagePath:p})),Object(g.b)(h.a,{pageContext:t,location:o,slug:C,tabs:u,currentTab:N}),Object(g.b)(r.a,null))}},FHeL:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return g}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var i=a("7ljp"),o=a("013z");a("qKvR");function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}var c={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},r=s("Row"),b=s("Column"),l=s("ResourceCard"),p={_frontmatter:c},d=o.a;function g(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(i.b)(d,n({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",null,"Course Resource Links"),Object(i.b)(r,{mdxType:"Row"},Object(i.b)(b,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(i.b)(l,{title:"Appsody",subTitle:"Carbon based UI to help with common patterns using React framework",actionIcon:"launch",color:"dark",href:"https://appsody.dev/",mdxType:"ResourceCard"},Object(i.b)("img",{src:"/ibm-gsi-cloudnative-journey/beaffdd2d8ce2747a834f9ba3c89af0a/appsody_logo.svg",alt:"Appsody icon"}))),Object(i.b)(b,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(i.b)(l,{title:"K-Native",subTitle:"Carbon based UI to help with common patterns using Angular framework",actionIcon:"launch",color:"dark",href:"https://github.com/ibm-garage-cloud/template-node-angular",mdxType:"ResourceCard"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"80.83333333333333%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsTAAALEwEAmpwYAAADPUlEQVQ4y1WUW0iUQRTHxx3NLlYUEfkaCj1EoE9BDxE9lA8+9VSYedlv172YQRYlFXQDMcjLlkhEJoWou9+udw2hm7e9hBlmaRHYBkVKZJCZ7n5zOmecz9aBwzezO/Ob/3fO/3yM4bDYdArONV8SUwPX2Rg6RhSjLEnTN5v/FdaO7tI8wTLbneAYRhjnLowd6mCAcc3LEkAHFAi4qwd4STs++4AjmFl9ZzPO9WbYPMFJ94MpKKyLQJEnAqWNU4DAcc0TWse4tc0EHcLo4fYAAnoJALiOYxg4jyU7OoE5umH/lYE/zvoIOOpDsUrvW+NG60S8uG50yXV/kqCXTJidlz4B7uwGi+YTBEix6yLZpgtaq7mRavfHT9aMQkH1iHGzdUIEp+dg6N0sVDS9NgprQwScNYE+7u4j2F++AgGW3ypYkVfC2Cmc57cAXXDs1qAouD0iqvRJaBuaEfrwZ4Fwo6A2DJiKCML8qQj8xEs66DUNU1FOzSBkVvQBwuBg1XPIqR4EZvXC4etPwXU3JFwNYbjQ9FpcRHXuhvCiu3GaFDaRur0YMcoZqWPFXrHRGQAazkdjkHV1QM7L294AO9kC6We6IK96GEruBEVx7SgUe8LguDdBsKjVE9xHwELuxGpqvrgCwiZXABaWYnCt8x2MR39CW+SLhOErS5VbXe0it/IFgWMI+oYxYK0Lppv5q+fufqroMlcHtrjb4ev8IsTihlSXWdEPrKAVMBUK6hNkq3V2/9LOss5s03IIthBwmtvbQdlDIFCkocJfi8vw8sMcRH8sQHMoCiyvRQJpjypc3IKuQLiVYLvLe1JMhR85eow8JxUm5ND68BUcwWLQOEpFyW+RBVPWWpZWs+ma5Gg+vud8nwRmYSxKQ6NKvBE2OANiZu43uB6PATveDM/ez2J8lyCLJlUuqzQ1EwzzL9s3sd1OkKlN25DSNEz8eocfkvACWm873YHq/OTVmGwAmz5OllPn5TcA90o6Vz9W0q3UJaSCEp+krcDoEqo+5Y16G/fOY2Sqc+b5VXWJX5he6hj+35cEAdOj8okNgPty1f7khK/Vmle2qOd2WaSVQ8YqlGCkztlF88sqb1IZt63N3z82CWguEGriFgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"K-Native icon",title:"K-Native icon",src:"/ibm-gsi-cloudnative-journey/static/1015bd6045da1983caef049b43c26578/3cbba/k_native.png",srcSet:["/ibm-gsi-cloudnative-journey/static/1015bd6045da1983caef049b43c26578/7fc1e/k_native.png 288w","/ibm-gsi-cloudnative-journey/static/1015bd6045da1983caef049b43c26578/a5df1/k_native.png 576w","/ibm-gsi-cloudnative-journey/static/1015bd6045da1983caef049b43c26578/3cbba/k_native.png 1152w","/ibm-gsi-cloudnative-journey/static/1015bd6045da1983caef049b43c26578/7dc98/k_native.png 1200w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(i.b)(b,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(i.b)(l,{title:"Apache Kafka",subTitle:"Node.js TypeScript GraphQL Backend for Frontend",actionIcon:"launch",color:"dark",href:"https://kafka.apache.org/documentation/",mdxType:"ResourceCard"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"272px"}},"\n      ",Object(i.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"29.77941176470588%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAIAAABM9SnKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA80lEQVQY032QXYtGYBCG378rf0E5JKGknEmkHDvAsXKmlJQDJR+Rj+Q7Upadd/dt23a3vWtqZnrua2aex33f8zwbhjGOI+TXdd3f9PahH80vPSDKskRR1DRNQABo27bjOIBV1/X9r57mOI4ZhsEwTFEUXdeDIAjDUJIkmqb7vk+SBHC/l3qZ4SnP8ziOw3BBEEiSFEWR4ziCICiKYlnW87zPE/4wV1WFIIimaaqqAsi2bcuyXNf1fd9xHCBGUQTnTNO0rivc0nXdsizAepqhkGW5bVvI932HVaHTNA38BeTDMBRFkec57J9lWZqmUMK88zzfAbmSObocVBnOAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Github icon",title:"Github icon",src:"/ibm-gsi-cloudnative-journey/static/e041d90d4fa5cb0b5bc15a43ea816823/05a03/kafka.png",srcSet:["/ibm-gsi-cloudnative-journey/static/e041d90d4fa5cb0b5bc15a43ea816823/05a03/kafka.png 272w"],sizes:"(max-width: 272px) 100vw, 272px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))),Object(i.b)("br",null),Object(i.b)(r,{mdxType:"Row"},Object(i.b)(b,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(i.b)(l,{title:"Tekton",subTitle:"The Tekton Pipelines project provides Kubernetes-style resources for declaring CI/CD-style pipelines.",actionIcon:"launch",color:"dark",href:"https://github.com/tektoncd/pipeline",mdxType:"ResourceCard"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"200px"}},"\n      ",Object(i.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFdUlEQVQ4y1WUe0yTVxTAKzCWLcZlJlv2MPMPnXGLc1uYogilpRRavr5LH5RSSh/QF6Xv0lba0gfPPnkXq8wh0CFzEJSnoKAMcTXGF5GhTtQxmUI06v7YNF2/D4d6kpt7zrnn/L577vnuhY20zMSFTAOhbn3v9HFtl3m0tHNTJBKBnSv2kcOiasNlnsX8G8+gXOCqd8KissLkYR/Q8tvuULiz89mCPNB3A58Xc0ukh0HSU3YiJWQ43tav7y4b0Hb2jcsDQ1NS//iM2O26JK02Xpc5Aze4uuK7ecUdDxm8mRUGt+MPBr9vPlsoukQu7AQZs9FxOVexCuwz/ozu1XZ7QH1CGTBNyer6zhX7vwTtR4e6Nt4zuViwl/KQzi1aoAmGb3Hk2w/gdO9ME0U9t6LVgDLNVK4GDUdLHFId7gtP3o2dlvq+P6Ns+RT0zxUYRLc5yq5FtnRymcZ1/ZXDTwP91yhCwyxNRBqnlKDGCNIAxEByY84UmGBrclre7I7Chn+VeeiPVMZ35zi6e894hshjliTyNDs/8pxeEHlKL4rMkgVuMH6KLG0exMvGBogl0EcGifIY2OtyXu7fHC6sXLhibNo4z9F23mSrbiwyC6eXKeznSyTWv78TOI+vk/mDYYLwyQWadFc/rtgQHUfB3H6UIOaYzAs7iea9Al4TWtdfFVqDN0scny2wZH/fZwjmVnL4PfdJuc9WqILINRL/wnmKuH8cEEVGAXFdiFqKCQFKHZgbylLEQY1pDL0CzhVZPpzn6n+6UlwVv5grFj2kcubvk9lLN7P5Z69SC2fOE4vCE1mFT4ayJAOnsxWb2/A6cjBTVQvm1iEVcTZuI8QpIUZdkZfQu+zi3qV8WdkLtWbTHbaYdTunqOQKTcwPEwtPnaUr0ANkpf1oriWhj+f4qiVLN1WP0a11n7qnPIYDeFeNJZZoHTgvc8RbHzB443+yCskvalwbrudIWdNUmWacKPOdIKtEI0xd6kWj772mLF2wHquHfrNKqjNekenYsAZG1UIs2D26AOrSMlu4eZ7CG7hIFPjOUGT7J8iyoWgnnT0E1djBLA23IUM9Wo/RQ1dCjzaLNRnWA7JMp5ONdNrkzKZ4CLZIF0LzLJEHOcKkIlmYKpmYpCsrjwOyxm6corUdUHuDREOHN1N/CowxoM0tWrTFL0LZhQJsDYqJrGzCIWocEOgktgj2j8kM+zGBCW33F7LUO05XfQzqY20j8T359vf/L8mWYTIb0GXDOozNIEx3erkoZwMVUXUMXIMnu1QpcA8CChzFS6GST1Hk20YJspELSeRY0G6nGDjNOIPFk6H/BLQ1KHOjGmVu56dXWLlIhxr0YVNr6YgUtychyefaC/dvhY1RSiBo9Kzejurl/QRFYxdJlxAgl21pxZXyajHG/CqcBSUBajaqMXa1MM3uyUur8L9+MVJSffB9yPotq3c5Ww3tbpCiRJ0gKYLtBG3dDzhNW7STdjdgClqBcr0p09IqR1m1QpS9NyetqpoKr4DOi5RojUN8Y1kDf7fXvQ7WTdRAwB6yFgjh1Q1BvD6nBVcKvXOVgLliP96pKMXakADxwIYCVIWRkObiZSTX1IPru3faYsv4AVgqwh+ThKhbt0buphnXdwCqxk6ClhgQeD+qwZqOOkiOHUZsOUuKduRoSTU7GGlVDjbWDfAYgU0p+1zB3Sl+qAF7UnxvPgygHCHpt7RiNaHoedGcaMOwDVOGO6wJfiBJt5cXIOyTEkbjdh7R/3k63HU4Mcmt/DbJ79qV7JdAZSb7Y9+AVX/BhuY6jH6bN12TaE438bVo6yEJyublIuxHmKnObjy8ugEFd7Uk73PbExJde79O9OwCKAffAvOQmOY3eP8B/bZOFCGhxLYAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Github icon",title:"Github icon",src:"/ibm-gsi-cloudnative-journey/static/29b639f145c3220c0a999da78fef8469/59afc/tekton.png",srcSet:["/ibm-gsi-cloudnative-journey/static/29b639f145c3220c0a999da78fef8469/59afc/tekton.png 200w"],sizes:"(max-width: 200px) 100vw, 200px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(i.b)(b,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(i.b)(l,{title:"Jenkins",subTitle:"Spring Boot Java Microservice",actionIcon:"launch",color:"dark",href:"https://jenkins.io/doc/",mdxType:"ResourceCard"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"68.86666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB5ElEQVQ4y2NgwAH0tLQY/r+7CmanxkUxTOusZsxJjADzu2sLGEgCDkBYV10NZifFJzAhy/m4OIDpuBAf4g3M09IE01lBITDDmP19fKThFtpYgmklOXnChsEUJQZDDLN39taeN6nt0uV9S/+vmdm2DKbOztGGIUFdjbCByvIKDE7KKgz///8H80MCAo9e2Lv8/9vLW/5c2rPof0Sorz1IvD43kZloLy8w1AMrnqSoWLghN/H/s6vbft4/te737vmd/xe42B6AqXNSVibCy/LyDP9DPBhB7O362vt2uTj+379+1u/Dy/v/TciM+7/c2PBfrba6Bki+WVebibCXgWF40MsHrHCSof5W34D4/44eob/6vTz+ZQaG/6/T1H4zU05YDiRfrqrMSJSXE3V0wF7OUZb3d/OO+G8Xlfkvu7z+V2p20f8peXmPFPx8uUHy0VFRjERECjCWudgZvLOawK6U0rddMG3Bsv8gUF5d/2LB0qUL8zKzREByjbV1jEQkGwUwzScqCo/p/v6JJS+eP//f2dpaD+IDxRmrK6uIT9h6CopgWk1eAe6CQF8/DXMzCw6QJeEhoWCxKZMmEW+ouo4hmFZR1UDxVnREBIpPSALZGZlgOjYqmqGhro4pMTYOzC8rLsapBwBfzKHF2hy6qQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Github icon",title:"Github icon",src:"/ibm-gsi-cloudnative-journey/static/a5ff6d9555aaab304b82dbbeb097d70e/3cbba/jenkins.png",srcSet:["/ibm-gsi-cloudnative-journey/static/a5ff6d9555aaab304b82dbbeb097d70e/7fc1e/jenkins.png 288w","/ibm-gsi-cloudnative-journey/static/a5ff6d9555aaab304b82dbbeb097d70e/a5df1/jenkins.png 576w","/ibm-gsi-cloudnative-journey/static/a5ff6d9555aaab304b82dbbeb097d70e/3cbba/jenkins.png 1152w","/ibm-gsi-cloudnative-journey/static/a5ff6d9555aaab304b82dbbeb097d70e/5dce9/jenkins.png 1500w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(i.b)(b,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(i.b)(l,{title:"ArgoCD GitOps",subTitle:"Template configuration to help to setup GitOps with ArgoCD",actionIcon:"launch",color:"light",href:"https://github.com/ibm-garage-cloud/template-argocd-test",mdxType:"ResourceCard"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"200px"}},"\n      ",Object(i.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"98%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACPUlEQVQ4y4WUzUsWURTG5/3IRRHpO3PnOhq6CSECoZDMRdCuTUJbBWlh/gEt1NW7dOEfEOgyJCJooUJbyVWIQgVR23YatQjx21ftOXeeM5x3EBz4cWfOnHnmnOeemSh1SaQHzmvm/D6YA1tgD5yBHbACJkHD5FZldS4utCKXxDXevAOWwYVP3YWsFp8W8T9gtixaFnsODuQBxE5wLrRYnXIKjs0LP4HOQlTbpJipJIgK5zaO65atnusXcMN6J23u+/yhn2AMvDNC4uEuOGLONpgBTamaou+t4LIkMvmNiY+AJ6AXpGAAPAMZ7zfkZdIFnx3V3Qye8U0f6Ws9uuJA7j2pUGyg4JoE54JQEh9SsBmSk7gqJpOKoaY7ivUm+B5syb0+ijhn6pXM2S0mV66ors71JTewJaIRPThjyZ8lKYnjivdJZIfeHs4lkalymJbJSAXBlo4C2MwFG0HsMkHPuBF8XBbcLrXcZVu2ot65UF2p5amiZWyQBFblc0LgmKIT3OUOboB+TSokG3PNeLlOu0KXhalhaPP1UHwpbUCbqInPs91TFvNbh/MfeQF+8OYiGAdJ/nCsFgyBafHb52IyLjrDr/VNM90+lcASuA3+9mRefc1Knr1irvqmG7oP+m35a1l3EBnLfFpntYN5q8E33dVB/Tp0QljdZNt/TH5B4BtvzoJH4GEu2GXzHlDwxPxtmvS4Wha9Dj5IS6z2KxNthUNGaE8rY07bOFRN+0/BBnh7ieBd8AssgD6tTCfhP7zh+TRsafseAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Github icon",title:"Github icon",src:"/ibm-gsi-cloudnative-journey/static/6c742b0dc481582b162691c2235e1672/59afc/github-icon.png",srcSet:["/ibm-gsi-cloudnative-journey/static/6c742b0dc481582b162691c2235e1672/59afc/github-icon.png 200w"],sizes:"(max-width: 200px) 100vw, 200px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))))}g.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-gsi-cloudnative-journey"}}}')}}]);
//# sourceMappingURL=component---src-pages-resources-index-mdx-a65f49b49a4300eaeaf1.js.map