(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"+vZh":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n("wx14"),r=n("zLVn"),o=(n("q1tI"),n("7ljp")),c=n("013z"),s=(n("T0C+"),n("qKvR"),{}),i={_frontmatter:s},l=c.a;function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)(l,Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We have already explained why we need contract-testing and how it works, In this guide, we would implement contract-testing in the Inventory application. In the inventory application, inventory-Service provides stock items and works as a provider, and Inventory BFF works as a consumer. Microservices work in isolation, and it is the consumer’s responsibility to generate contact and the pact-broker responsibility to verify response for the given request. In this guide, we will explain how to generate a contract(Pact)."),Object(o.b)("p",null,"We will use a readymade inventory BFF application, which we have developed in the developer Intermediate guide and implement contract-testing on top of it.        "),Object(o.b)("p",null,"To start with, we have to create a pact by providing parameters like consumer, provider, port, log, dir."),Object(o.b)("p",null,"We can take consumerName from package.json"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"const consumerName = npmPackage.name;\n")),Object(o.b)("p",null,"We can provide a provider name, for inventory application inventory-management-svc is the provider."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"provider: 'inventory-management-svc',\n")),Object(o.b)("p",null,"Next we have to provide log, and pacts directory, contract would be stored in pacts directory. "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'log: resolve(process.cwd(), "logs", "pact.log"),\ndir: resolve(process.cwd(), "pacts"),\n')),Object(o.b)("p",null,"Here is code with pact setup. Delay of 30000 added for local testing, though for cluster deployment it is not required."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'beforeAll(() => {\n    provider = new Pact({\n      consumer: consumerName,\n      provider: \'inventory-management-svc\',      \n      port,\n      log: resolve(process.cwd(), "logs", "pact.log"),\n      dir: resolve(process.cwd(), "pacts"),\n    });\n    console.log("in before all, provider setup");\n    return provider.setup();\n  },30000);\n')),Object(o.b)("p",null,"An instance of the component that will be tested is loaded and configured with the pact server host and port as the base url."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"let classUnderTest: StockItemsApi;\n  beforeEach(() => {    \n    Container.bind(StockItemServiceConfig).factory(() => ({\n        baseUrl: `http://localhost:${port}`\n        \n      }));\n\n    classUnderTest = Container.get(StockItemsApi);\n  });\n")),Object(o.b)("p",null,"Add expected result"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"const expectedResult: BackendStockItem = {\n        id: '1234',\n        manufacturer: 'My manufacturer',\n        name: 'product name',\n        price: 20.0,\n        stock: 1000\n};\n")),Object(o.b)("p",null,"Here is the add interaction, which publishes the interaction to the Pact server so that it can be used to provide a mock response when the request is made."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"beforeEach(() => {        \n        return provider.addInteraction({\n          state: 'base state',\n          uponReceiving: 'a request for stock items',\n          withRequest: {\n            method: 'GET',\n            path: '/stock-items',\n            headers: {\n              'Accept': 'application/json',\n            }\n          },\n          willRespondWith: {\n            status: 200,\n            headers: {\n              'Content-Type': 'application/json'\n            },\n            body: Matchers.eachLike(expectedResult),\n          }\n        });\n      });\n")),Object(o.b)("p",null,"Here is the test, that matched each and every attribute of response with expected result."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"test('should return inventory data', async () => {\n        const result = await classUnderTest.listStockItems();\n\n        expect(result).toEqual([{\n          id: expectedResult.id,\n          name: expectedResult.name,\n          description: expectedResult.name,\n          stock: expectedResult.stock,\n          unitPrice: expectedResult.price,\n          manufacturer: expectedResult.manufacturer,\n          picture: 'https://via.placeholder.com/32.png',\n        }]);\n      });\n")),Object(o.b)("p",null,"Here is the final code for contract testing."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"import {join, resolve} from 'path';\nimport {Container} from 'typescript-ioc';\nimport {Matchers, Pact} from '@pact-foundation/pact';\n\nimport {StockItemsApi} from '../../src/services';\nimport {StockItemServiceConfig} from '../../src/config';\nimport {BackendStockItem} from '../../src/services/stock-items.service';\n\nconst npmPackage = require(join(process.cwd(), 'package.json'));\n\nconst consumerName = npmPackage.name;\n\ndescribe('stock-items.service', () => {\n  test('canary verifies test infrastructure', () => {\n    console.log(\"in test infrastructure\");\n    expect(true).toEqual(true);\n  });\n\n  const port = 1235;\n  let provider: Pact;\n  beforeAll(() => {\n    provider = new Pact({\n      consumer: consumerName,\n      provider: 'inventory-management-svc',\n      //provider: 'inventory-management-svc-solution-yks',      \n      port,\n      log: resolve(process.cwd(), \"logs\", \"pact.log\"),\n      dir: resolve(process.cwd(), \"pacts\"),\n    });\n    console.log(\"in before all, provider setup\");\n    return provider.setup();\n  },30000);\n\n  let classUnderTest: StockItemsApi;\n  beforeEach(() => {\n    console.log(\"in before each---35\");\n    Container.bind(StockItemServiceConfig).factory(() => ({\n        baseUrl: `http://localhost:${port}`\n        \n      }));\n\n    classUnderTest = Container.get(StockItemsApi);\n  });\n\n  afterAll(() => {\n    console.log(\"in afterAll, going to finalize\");    \n    return provider.finalize();\n  });\n\n  \n\n  context('given listStockItems()', () => {\n    context('when called', () => {\n      \n      const expectedResult: BackendStockItem = {\n        id: '1234',\n        manufacturer: 'My manufacturer',\n        name: 'product name',\n        price: 20.0,\n        stock: 1000\n      };\n\n      beforeEach(() => {\n        console.log(\"in before each\"+ provider.server);\n        return provider.addInteraction({\n          state: 'base state',\n          uponReceiving: 'a request for stock items',\n          withRequest: {\n            method: 'GET',\n            path: '/stock-items',\n            headers: {\n              'Accept': 'application/json',\n            }\n          },\n          willRespondWith: {\n            status: 200,\n            headers: {\n              'Content-Type': 'application/json'\n            },\n            body: Matchers.eachLike(expectedResult),\n          }\n        });\n      });\n\n      test('should return inventory data', async () => {\n        const result = await classUnderTest.listStockItems();\n\n        expect(result).toEqual([{\n          id: expectedResult.id,\n          name: expectedResult.name,\n          description: expectedResult.name,\n          stock: expectedResult.stock,\n          unitPrice: expectedResult.price,\n          manufacturer: expectedResult.manufacturer,\n          picture: 'https://via.placeholder.com/32.png',\n        }]);\n      });\n\n      afterEach(() => {\n        return provider.verify();\n      });\n    });\n  });\n});\n")),Object(o.b)("p",null,"Here is the example of contract:"),Object(o.b)("p",null,"##A pact between inventory-management-bff and inventory-management-svc\nRequests from inventory-management-bff to inventory-management-svc"),Object(o.b)("p",null,"A request for stock items given base state"),Object(o.b)("h2",null,"Interactions"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'Given base state, upon receiving a request for stock items from graphql-ts-yks, with\n{\n  "method": "GET",\n  "path": "/stock-items",\n  "headers": {\n    "Accept": "application/json"\n  }\n}\n')),Object(o.b)("p",null,"inventory-management-svc will respond with:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'{\n  "status": 200,\n  "headers": {\n    "Content-Type": "application/json"\n  },\n  "body": [\n    {\n      "id": "1234",\n      "manufacturer": "My manufacturer",\n      "name": "product name",\n      "price": 20,\n      "stock": 1000\n    }\n  ]\n}\n')))}p.isMDXComponent=!0},"013z":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("NmYn"),c=n.n(o),s=n("Wbzz"),i=n("Xrax"),l=n("k4MR"),p=n("TSYQ"),d=n.n(p),b=n("QH2O"),u=n.n(b),m=n("qKvR"),v=function(e){var t,n=e.title,a=e.theme,r=e.tabs,o=void 0===r?[]:r;return Object(m.b)("div",{className:d()(u.a.pageHeader,(t={},t[u.a.withTabs]=o.length,t[u.a.darkMode]="dark"===a,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:u.a.text},n)))))},h=n("BAC9"),g=function(e){var t=e.relativePagePath,n=e.repository,a=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,r=n||a,o=r.baseUrl,c=r.subDirectory,i=o+"/edit/"+r.branch+c+"/src/pages"+t;return o?Object(m.b)("div",{className:"bx--row "+h.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:h.link,href:i},"Edit this page on GitHub"))):null},f=n("FCXl"),x=n("dI71"),j=n("I8xM"),O=function(e){function t(){return e.apply(this,arguments)||this}return Object(x.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.tabs,a=e.slug,r=a.split("/").filter(Boolean).slice(-1)[0],o=n.map((function(e){var t,n=c()(e,{lower:!0,strict:!0}),o=n===r,i=new RegExp(r+"/?(#.*)?$"),l=a.replace(i,n);return Object(m.b)("li",{key:e,className:d()((t={},t[j.selectedItem]=o,t),j.listItem)},Object(m.b)(s.Link,{className:j.link,to:""+l},e))}));return Object(m.b)("div",{className:j.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:j.list},o))))))},t}(r.a.Component),k=n("MjG9"),w=n("CzIb"),y=n("Asxa"),T=n("OIbQ"),I=n.n(T),N=function(e){var t=e.date,n=new Date(t);return t?Object(m.b)(y.c,{className:I.a.row},Object(m.b)(y.a,null,Object(m.b)("div",{className:I.a.text},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,n=e.children,a=e.location,r=e.Title,o=t.frontmatter,p=void 0===o?{}:o,d=t.relativePagePath,b=t.titleType,u=p.tabs,h=p.title,x=p.theme,j=p.description,y=p.keywords,T=p.date,I=Object(w.a)().interiorTheme,P=Object(s.useStaticQuery)("2456312558").site.pathPrefix,R=P?a.pathname.replace(P,""):a.pathname,q=u?R.split("/").filter(Boolean).slice(-1)[0]||c()(u[0],{lower:!0}):"",E=x||I;return Object(m.b)(l.a,{tabs:u,homepage:!1,theme:E,pageTitle:h,pageDescription:j,pageKeywords:y,titleType:b},Object(m.b)(v,{title:r?Object(m.b)(r,null):h,label:"label",tabs:u,theme:E}),u&&Object(m.b)(O,{title:h,slug:R,tabs:u,currentTab:q}),Object(m.b)(k.a,{padded:!0},n,Object(m.b)(g,{relativePagePath:d}),Object(m.b)(N,{date:T})),Object(m.b)(f.a,{pageContext:t,location:a,slug:R,tabs:u,currentTab:q}),Object(m.b)(i.a,null))}},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,n){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-developer-advanced-1-inventory-contract-testing-index-mdx-050faea5a3b5ef854d0e.js.map