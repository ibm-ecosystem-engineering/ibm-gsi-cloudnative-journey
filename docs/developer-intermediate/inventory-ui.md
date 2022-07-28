**Develop and deploy the UI component of the inventory application**

## Setup

### [Optionnal]: Access cloud shell 

If you don't plan to use your workstation to run this lab, you can use IBM Cloud Shell:

- Open the IBM Cloud console (cloud.ibm.com) in your browser and log in if needed.

- Invoke Cloud Shell by clicking on the button at the top, right-hand corner of the browser window.

   ![Invoke Cloud Shell](../images/common/invokecloudshell.png)

### Setup your shell environment

We have provided a simplified installer that will install tools and configure the shell environment. The
installer will first check if the required tool is available in the path. If not, the missing tool(s) will be
installed into the `bin/` folder of the current user's home directory and the `PATH` variable will be updated in the
`.bashrc` or `.zshrc` file to include that directory.

The following tools are included in the shell installer:

- IBM Cloud cli (ibmcloud)
- ArgoCD cli (argocd)
- Tekton cli (tkn)
- IBM Cloud fast switching (icc)
- kube-ps1 prompt
- OpenShift cli (oc)
- Kubernetes cli (kubectl)
- JSON cli (jq)
- IBM Garage Cloud CLI (igc)

1. Set up the shell environment by running:
    ```shell
    curl -sL shell.cloudnativetoolkit.dev | sh -
    ```
    - **Note**: If successful, you should see something like the following:
    ```shell
    Downloading scripts: https://github.com/cloud-native-toolkit/cloud-shell-commands/releases/download/0.6.1/assets.tar.gz
    ** Installing argocd cli
    ** Installing tkn cli
    ** Installing kube-ps1
    ** Installing icc
    ** Installing Cloud-Native Toolkit cli
    ```
2. The installer updates PATH in the `.zshrc` or `.bashrc` file. You will need to source the file to apply the update to the current shell environment:
    ```shell
    if [[ "${SHELL}" =~ zsh ]]; then
        source ~/.zshrc
    else
        source ~/.bashrc
    fi
    ```
3. You can check the shell was installed correctly by checking the `oc` version:
    ```shell
    oc sync --version
    ```

### Log in to OpenShift Cluster

- Log in to OpenShift Cluster from the cloud console. Go to Resource listStockItems and click on the cluster:

    ![OpenShift](../images/common/openshiftcluster.png)

- Access the OpenShift console from within that console by clicking on the button.

    ![OpenShift Console](../images/common/openshiftconsole.png)

- In OpenShift Console, click on email address top right, Click on Copy Login Command and get the OpenShift login command, which includes a token.

    ![OpenShift Login](../images/common/LoginCommand.png)

- click on **_Display Token_**, copy the Login with the token. `oc login` command  will log you in. Run the login command in the cloud shell terminal:
    ```bash
    $ oc login --token=qvARHflZDlOYfjJZRJUEs53Yfy4F8aa6_L3ezoagQFM --server=https://c103-e.us-south.containers.cloud.ibm.com:30979
    Logged into "https://c103-e.us-south.containers.cloud.ibm.com:30979" as "IAM#email@company" using the token provided.

    You have access to 71 projects, the list has been suppressed. You can list all projects with 'oc projects'

    Using project "dev-ab".
    ```

### Setup code base

Get the initial project created and register the pipeline for automated builds. Detailed instructions for each of these steps can be found in the [Deploying an App](/developer-intermediate/deploy-app) guide.

- Create a new repository from the [Carbon React template](https://github.com/IBM/template-carbon-react/generate) into your Git org.

    !!! warning
        If you are developing on a shared education cluster, place the repository in the **Git Organization** listed in your notification email and remember to add your initials as a suffix to the app name.
        - In order to prevent naming collisions, name the repository `inventory-management-bff-{your initials}` replacing `{your initials}` with your actual initials.

- Clone the new repository to your machine.

- Run the following commands to install the project dependencies:
    ```shell
    npm install -g yarn
    yarn install
    ```

  - Run the application locally:
    ```shell
    yarn start:dev
    ```

- Go into the repository directory cloned and execute the following:

    ```
    oc sync dev-{your initials} --tekton
    ```

- Register the pipeline:
    ```
    oc pipeline --tekton
    ```
    - replacing `{your initials}` with your actual initials
    - Give git credentials if prompted, and master as the git branch to use. When prompted for the pipeline, select `igc-nodejs-<VERSION>`.

- Open the pipeline to see it running, using the link provided in the command output.

### Create the initial components

Based on the requirements of this first use case, we will create a `StockItemList` component to list stock items.

- Open a terminal and start the application in development mode to see the initial UI and the changes as we make them:

    ```shell
    yarn start:dev
    ```

- Access the running service. This service runs by default on port `3000`.

- Create the `StockItemList` React component that uses a `StructuredList` from the [Carbon React Components](https://react.carbondesignsystem.com) portfolio:
    ```javascript title="src/content/StockItemList.jsx"
    import React from "react";
    import {
        StructuredListWrapper, StructuredListHead, StructuredListRow,
        StructuredListCell, StructuredListBody
    } from '@carbon/react';

    const DEFAULT_ITEMS = [
        {
            name: 'Item 1',
            stock: 10,
            unitPrice: 51.2,
            manufacturer: 'Sony'
        },
        {
            name: 'Item 2',
            stock: 50,
            unitPrice: 10,
            manufacturer: 'LG'
        },
    ]

    export default function StockItemList() {
        const items = DEFAULT_ITEMS;

        return (
            <div className="stock-items-list">
                <h2>Stock Items</h2>
                <StructuredListWrapper>
                    <StructuredListHead>
                        <StructuredListRow head>
                            <StructuredListCell head>Name</StructuredListCell>
                            <StructuredListCell head>Stock</StructuredListCell>
                            <StructuredListCell head>Unit Price</StructuredListCell>
                            <StructuredListCell head>Manufacturer</StructuredListCell>
                        </StructuredListRow>
                    </StructuredListHead>
                    <StructuredListBody>
                        {items.map(item => (
                            <StructuredListRow>
                                <StructuredListCell noWrap>{item.name}</StructuredListCell>
                                <StructuredListCell noWrap>{item.stock}</StructuredListCell>
                                <StructuredListCell noWrap>{item.unitPrice}</StructuredListCell>
                                <StructuredListCell noWrap>{item.manufacturer}</StructuredListCell>
                            </StructuredListRow>
                        ))}
                    </StructuredListBody>
                </StructuredListWrapper>
            </div>
        );
    }
    ```

- Now that we have our component to list stock items, let's add it to out app by editing the `src/content/UIShell/UIShell.jsx` file:
    -  Add our new component to the bottom of the imports setion:
      ```javascript title="src/content/UIShell/UIShell.jsx"
      ...
      import StockItemList from "../StockItemList";
      ...
      ```
    -  Add a menu to our left navigation panel to link to a new `/inventory/items` route that we'll use to list stock items:
      ```javascript title="src/content/UIShell/UIShell.jsx"
      ...
      <SideNav aria-label="Side navigation" expanded={isSideNavExpanded}>
          <SideNavItems>
              <SideNavMenuItem element={Link} to='/'
                  isActive={this.state.activeItem === '/'}
                  onClick={() => { this.setState({ activeItem: '/' }) }}>
                  Overview
              </SideNavMenuItem>
              <SideNavMenu renderIcon={Fade} title="Inventory" defaultExpanded>
                  <SideNavMenuItem element={Link} to='/inventory/items'
                      isActive={this.state.activeItem === '/inventory/items'}
                      onClick={() => { this.setState({ activeItem: '/inventory/items' }) }}>
                      Items
                  </SideNavMenuItem>
              </SideNavMenu>
              <SideNavMenu renderIcon={Fade} title="Management">
                  <SideNavMenuItem href="#">
                      Link
                  </SideNavMenuItem>
                  <SideNavMenuItem href="#">
                      Link
                  </SideNavMenuItem>
                  <SideNavMenuItem href="#">
                      Link
                  </SideNavMenuItem>
              </SideNavMenu>
              <SideNavMenu
                  renderIcon={Fade}
                  title="Docs">
                  <SideNavMenuItem href="#">
                      Link
                  </SideNavMenuItem>
                  <SideNavMenuItem href="#">
                      Link
                  </SideNavMenuItem>
              </SideNavMenu>
          </SideNavItems>
      </SideNav>
      ...
      ```
      - Add a new route for the `/inventory/items` route:
      ```javascript title="src/content/UIShell/UIShell.jsx"
      ...
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/inventory/items" element={<StockItemList />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
      ...
      ```

- Open the application to check that you can now navigate to the ***Stock Items*** view:
    ![Stock Items view](../images/inventory-ui/ui-init-components.png)

- With the application running in the first terminal, open a second terminal in the repository directory and push the changes we've just made:
    ```bash
    git add .
    git commit -m "Initial shell components"
    git push
    ```

- On the openshift console, open the [pipeline to see it running](/developer-intermediate/deploy-app/#6-view-your-application-pipeline).

### Add a service component to get mock Stock Items

Now that we've created the initial components, we can start to customize the `StockItemList` to match the data for our application. So far, we've built a UI that displays a hard-coded set of data in a table. Eventually, we want to display dynamic data provided from a database in the table. As a first step towards that goal, we need to separate the UI logic from the logic that retrieves the data. We will do that with a service component. For this first pass the service component will just return mock data.

- Create a `src/services`:
    ```sh
    mkdir src/services
    ```

- Create a file named `stock-item-mock.service.js` in the service directory, implementing the service by copying the data array from `StockItemList` and returning it in the function. You can add a `setTimeout()` 1s timeout to simulate loading:
    ```javascript title="src/services/stock-item-mock.service.js"
    export class StockItemMockService {
        async listStockItems() {
            return new Promise(resolve => {
                // Wait 1 second before returning data
                setTimeout(() => {
                    resolve([
                        {
                            id: 1,
                            name: 'Item 1',
                            stock: 10,
                            unitPrice: 51.2,
                            manufacturer: 'Sony'
                        },
                        {
                            id: 2,
                            name: 'Item 2',
                            stock: 50,
                            unitPrice: 10,
                            manufacturer: 'LG'
                        },
                    ]);
                }, 1000)
            });
        }
    }
    ```

- Update the components to pass the service in the properties:

    ```javascript title="src/App.test.jsx"
    import { render, screen } from '@testing-library/react';
    import App from './App';
    import {StockItemMockService} from "./services/stock-item-mock.service";

    describe('App', () => {
      test('canary verifies test infrastructure', () => {
        expect(true).toEqual(true);
      });

      test('renders text', () => {
        Object.defineProperty(window, "matchMedia", {
          writable: true,
          value: jest.fn().mockImplementation(query => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: jest.fn(), // Deprecated
            removeListener: jest.fn(), // Deprecated
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
          }))
        });
        render(<App stockService={new StockItemMockService()}/>);
        const linkElement = screen.getByText(/Design & build with Carbon/i);
        expect(linkElement).toBeInTheDocument();
      });

    });
    ```

    ```javascript title="src/App.jsx"
    import React, { Component } from 'react';
    import UIShell from './content/UIShell/UIShell';
    import './App.scss';
    import { StockItemMockService } from "./services/stock-item-mock.service";

    class App extends Component {
      constructor(props) {
        super(props);

        this.stockService = props.stockService || new StockItemMockService();
      }

      render() {
        return (
          <div className="app">
            <UIShell stockService={this.stockService} />
          </div>
        );
      }
    }

    export default App;
    ```

    ```javascript title="src/content/UIShell/UIShell.jsx"
    ...
    <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/inventory/items" element={<StockItemList stockService={this.props.stockService} />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
    ...
    ```

- Update `StockItemList.jsx` to use the provided service:

    ```javascript title="src/content/StockItemList.jsx"
    import React from 'react';
    import { useQuery } from '@tanstack/react-query';
    import {
        StructuredListWrapper, StructuredListHead, StructuredListRow,
        StructuredListCell, StructuredListBody, StructuredListSkeleton
    } from '@carbon/react';

    export default function StockItemList(props) {
        const { isLoading, error, data } = useQuery(['stock-items'], props.stockService.listStockItems);

        return (
            <div className='stock-items-list'>
                <h2>Stock Items</h2>
                {isLoading ?
                    <StructuredListSkeleton />
                    : error ?
                        'Error retrieving stock items'
                    :
                    <StructuredListWrapper>
                    <StructuredListHead>
                        <StructuredListRow head>
                            <StructuredListCell head>Name</StructuredListCell>
                            <StructuredListCell head>Stock</StructuredListCell>
                            <StructuredListCell head>Unit Price</StructuredListCell>
                            <StructuredListCell head>Manufacturer</StructuredListCell>
                        </StructuredListRow>
                    </StructuredListHead>
                    <StructuredListBody>
                        {data.map(item => (
                            <StructuredListRow key={item.id}>
                                <StructuredListCell noWrap>{item.name}</StructuredListCell>
                                <StructuredListCell noWrap>{item.stock}</StructuredListCell>
                                <StructuredListCell noWrap>{item.unitPrice}</StructuredListCell>
                                <StructuredListCell noWrap>{item.manufacturer}</StructuredListCell>
                            </StructuredListRow>
                        ))}
                    </StructuredListBody>
                </StructuredListWrapper>}
            </div>
        );
    }
    ```

- Open the app in your browser, if the app isn't started run:

    ```shell
    yarn start:dev
    ```

- Push the changes we've made to the repository:

    ```bash
    git add .
    git commit -m "Adds a mock service"
    git push
    ```

- On the openshift console, open the [pipeline to see it running](/developer-intermediate/deploy-app/#6-view-your-application-pipeline).

### Add a service that calls the BFF

Now that we have a mock service that injects data, we can build an implementation of the service that calls our BFF. For the service, we will use `axios` to make GraphQL calls to the BFF through an HTTP proxy exposed by the server, using `http-proxy-middleware`.

- Install `axios` and `http-proxy-middleware`:
    ```bash
    yarn add http-proxy-middleware axios
    ```

- Update the server to proxy BFF requests (configured in `API_HOST` environment variable) to `/api` endpoint:
    ```javascript title="server/server.js"
    const express = require('express');
    const path = require('path');
    const { createProxyMiddleware } = require('http-proxy-middleware');

    const app = express();

    app.use(express.static(path.join(__dirname, '../build')));

    app.use(
    '/api',
    createProxyMiddleware({
        target: process.env.API_HOST,
        changeOrigin: true,
        pathRewrite: {
        '^/api': '/'
        },
    })
    );

    app.get('/health', function (req, res) {
    res.json({ status: 'UP' });
    });

    app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
    });

    const port = process.env.PORT ?? 3000;
    app.listen(port, function () {
    console.info(`Server listening on http://localhost:${port}`);
    });
    ```

- Add a `src/setupProxy.js` file to setup the proxy for local development:
    ```javascript title="src/setupProxy.js"
    const { createProxyMiddleware } = require('http-proxy-middleware');

    module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
        target: process.env.API_HOST,
        changeOrigin: true,
        pathRewrite: {
            '^/api': '/'
        },
        })
    );
    };
    ```

- Create a service implementation in the `services` directory called `stock-item.service.js` implementing `listStockItems()` that calls the BFF through the `/api` proxy:
    ```javascript title="src/services/stock-item.service.js"
    import axios from "axios";

    export class StockItemService {
        constructor(baseUrl) {
            this.baseUrl = baseUrl || '/api';
        }

        async listStockItems() {
            return axios({
                url: '/api/graphql',
                method: "POST",
                data: {
                    query: `
                    {
                        stockItems {
                            id
                            manufacturer
                            name
                            picture
                            stock
                            unitPrice
                        }
                    }
                    `
                }
            }).then(response => response.data.data.stockItems);
        }
    }
    ```

- Update `App.jsx` to use the new service instead of the mock service:
    ```javascript title="src/App.jsx"
    import React, { Component } from 'react';
    import UIShell from './content/UIShell/UIShell';
    import './App.scss';
    import { StockItemService } from "./services/stock-item.service";

    class App extends Component {
    constructor(props) {
        super(props);

        this.stockService = props.stockService || new StockItemService();
    }

    render() {
        return (
        <div className="app">
            <UIShell stockService={this.stockService} />
        </div>
        );
    }
    }

    export default App;
    ```

- Open the application to check that your app is now retrieving data from BFF GraphQL endpoint:
    ![GraphQL data view](../images/inventory-ui/ui-graphql-data.png)

- Modify `connectsTo` property to the `values.yaml` file of the Helm chart. The value of the property should match the Kubernetes service of the microservice. (For template projects, the service name is the same as the name of the application which is that same as the name of the repository):
    ```yaml title="chart/base/values.yaml"
    ...
    connectsTo: inventory-management-bff-{your initials}
    ...
    ```

- Add a new environment variable named `API_HOST` to the list of existing environment variables in deployment.yaml. The value of this environment variable should come from the `connectsTo` value we defined. You can add `| quote` to wrap the value in quotes in case the value is not formatted correctly:
    ```yaml title="chart/base/templates/deployment.yaml"
    ...
    env:
        - name: INGRESS_HOST
        value: ""
        - name: PROTOCOLS
        value: ""
        - name: LOG_LEVEL
        value: {{ .Values.logLevel | quote }}
        - name: API_HOST
        value: {{ printf "%s:80" .Values.connectsTo | quote }
    ...
    ```

- Push the changes we've made to the repository:
    ```bash
    git add .
    git commit -m "Updates the StockItemsList view"
    git push
    ```

- On the openshift console, open the [pipeline to see it running](/developer-intermediate/deploy-app/#6-view-your-application-pipeline).

## Summary

Congrats! You have now completed the Micro App Guide demonstrating the Inventory solution.
