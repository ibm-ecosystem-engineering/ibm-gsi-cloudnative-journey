(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{"013z":function(e,t,a){"use strict";var i=a("q1tI"),n=a.n(i),c=a("NmYn"),b=a.n(c),l=a("Wbzz"),o=a("Xrax"),r=a("k4MR"),s=a("TSYQ"),d=a.n(s),u=a("QH2O"),m=a.n(u),p=a("qKvR"),g=function(e){var t,a=e.title,i=e.theme,n=e.tabs,c=void 0===n?[]:n;return Object(p.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=c.length,t[m.a.darkMode]="dark"===i,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},j=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,i=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||i,c=n.baseUrl,b=n.subDirectory,o=c+"/edit/"+n.branch+b+"/src/pages"+t;return c?Object(p.b)("div",{className:"bx--row "+j.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:j.link,href:o},"Edit this page on GitHub"))):null},x=a("FCXl"),O=a("9Hrx"),f=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,i=e.slug,n=i.split("/").filter(Boolean).slice(-1)[0],c=a.map((function(e){var t,a=b()(e,{lower:!0,strict:!0}),c=a===n,o=new RegExp(n+"/?(#.*)?$"),r=i.replace(o,a);return Object(p.b)("li",{key:e,className:d()((t={},t[f.selectedItem]=c,t),f.listItem)},Object(p.b)(l.Link,{className:f.link,to:""+r},e))}));return Object(p.b)("div",{className:f.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:f.list},c))))))},t}(n.a.Component),k=a("MjG9"),w=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,n=e.Title,c=t.frontmatter,s=void 0===c?{}:c,d=t.relativePagePath,u=t.titleType,m=s.tabs,j=s.title,O=s.theme,f=s.description,A=s.keywords,T=Object(w.a)().interiorTheme,y=Object(l.useStaticQuery)("2456312558").site.pathPrefix,N=y?i.pathname.replace(y,""):i.pathname,I=m?N.split("/").filter(Boolean).slice(-1)[0]||b()(m[0],{lower:!0}):"",P=O||T;return Object(p.b)(r.a,{tabs:m,homepage:!1,theme:P,pageTitle:j,pageDescription:f,pageKeywords:A,titleType:u},Object(p.b)(g,{title:n?Object(p.b)(n,null):j,label:"label",tabs:m,theme:P}),m&&Object(p.b)(v,{title:j,slug:N,tabs:m,currentTab:I}),Object(p.b)(k.a,{padded:!0},a,Object(p.b)(h,{relativePagePath:d})),Object(p.b)(x.a,{pageContext:t,location:i,slug:N,tabs:m,currentTab:I}),Object(p.b)(o.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},JqW2:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return s}));var i=a("k1TG"),n=a("8o2o"),c=(a("q1tI"),a("7ljp")),b=a("013z"),l=(a("qKvR"),{}),o={_frontmatter:l},r=b.a;function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)(r,Object(i.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",null,"1. Not able to access openshift cluster"),Object(c.b)("p",null,"Openshift URL’s might not be accessible from within SI corporate network if it is not whitelisted. Please log out of the corporate VPN and retry."),Object(c.b)("h3",null,"2. Getting access to slack channel and joining it."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Create a slack account using the enterprise email ID "),Object(c.b)("li",{parentName:"ul"},"You would get a mail with the subject “XXX has invited you to join a Slack workspace”. It would contain a link/button to join the IBM-Cognitive-Applications workspace managed by IBM.")),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"63.19444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAABYlAAAWJQFJUiTwAAABiUlEQVQ4y41T207CQBDt5/gVfox/4KM/4DeQGCIvxCcefPPJB4NgYlSM5VZKS2kLWLcItFJK2z3uLhe5CpPOTjOZnJ09Z0aqVJt4yL+g+PSOQvEVpVIJmqah0WjAsixQSsFtEQ+ZNHAe4WhZEOMGbvcehLhwCYHjOHBdF0mcCLAkSY4Cl0B7rEIBEuboHOxgFXTXBRL/XTo7En6wTx8N4Xh96E0Nvc8e2u32sstNXwWVZslk7lSg8qCW3iCX80ilrpDJXCOXy+186iaotPUcOotfto2mqkJvtaDOBVIUBSrL8W65cIZhbFEh7ePHdT10bALb6sA0TdjsAg60ANN1XcTRaLTW6V7ACjHw3K3jZxpsEb9ax3ldAxRJIcZfYcz4vFULSMt3IOPBwVFZU3klfdTI/KfyskOzT2F/s87iGFEUiTiNppiEE+HBeCxyx2yMFEYUp5fAyQWFXG2gLH+gVqtDlmUhBmFbwzcmDMPjAc+zwFmaKTvw4bGB9jwPw+EQvu8jCIKdXO2zX22p65M+4+F5AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Slack Invite Mail",title:"Slack Invite Mail",src:"/ibm-gsi-cloudnative-journey/static/c4cbd2f09b1d8fb96d9b87dc0936b69d/3cbba/SlackInviteMail.png",srcSet:["/ibm-gsi-cloudnative-journey/static/c4cbd2f09b1d8fb96d9b87dc0936b69d/7fc1e/SlackInviteMail.png 288w","/ibm-gsi-cloudnative-journey/static/c4cbd2f09b1d8fb96d9b87dc0936b69d/a5df1/SlackInviteMail.png 576w","/ibm-gsi-cloudnative-journey/static/c4cbd2f09b1d8fb96d9b87dc0936b69d/3cbba/SlackInviteMail.png 1152w","/ibm-gsi-cloudnative-journey/static/c4cbd2f09b1d8fb96d9b87dc0936b69d/0b124/SlackInviteMail.png 1728w","/ibm-gsi-cloudnative-journey/static/c4cbd2f09b1d8fb96d9b87dc0936b69d/4ea69/SlackInviteMail.png 2304w","/ibm-gsi-cloudnative-journey/static/c4cbd2f09b1d8fb96d9b87dc0936b69d/a989c/SlackInviteMail.png 2530w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Once you click on this link, it will redirect to the login page where you need to login with your guest-id."),Object(c.b)("li",{parentName:"ul"},"Search for your slack channel name (the name would be shared prior) and join it.")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"NOTE"),": If you did not get the invite, reply back to the invite email and inform us."))}s.isMDXComponent=!0},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-resources-faqs-index-mdx-e117f4c88678b20a19eb.js.map