# Cloud-Native Learning Journey

This developer enablement will enable technical teams to understand how to use the tools to manage the full
lifecycle of Cloud-Native development with IBM Kubernetes Service or managed Red Hat OpenShift on IBM Cloud.

The rendered Learning Journey can be viewed here - [Cloud-Native Enablement](https://ibm-gsi-ecosystem.github.io/ibm-gsi-cloudnative-journey/)

To update and manage the Learning Journey follow these steps.

## Development guide

### Page titles

Page titles and other metadata are provided via meta blocks at the top of the page.

### Info boxes (Admonitions)

Information boxes are implemented as [admonitions](https://squidfunk.github.io/mkdocs-material/reference/admonitions/#usage). For example:

```
!!! note "Phasellus posuere in sem ut cursus"

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.
```

### Content tabs

[Content tabs](https://squidfunk.github.io/mkdocs-material/reference/content-tabs/#usage) are defined using `====` with indented content on the following lines. For example:

```
=== "Unordered list"

    * Sed sagittis eleifend rutrum
    * Donec vitae suscipit est
    * Nulla tempor lobortis orci

=== "Ordered list"

    1. Sed sagittis eleifend rutrum
    2. Donec vitae suscipit est
    3. Nulla tempor lobortis orci
```

## Development

### Clone the repository

```
git clone
```

### Install dependencies

```
npm install
```

This will install all the dependencies necessary to run the environment in development mode
and to build and publish the content.

### Write content

The content of the Learning Journey is authored through a hybrid of Markdown and
 React. The content
itself is primarily provided using Markdown. React components are sprinkled into the Markdown to
provide for a richer and more interactive set of components in the published guide.

To render the content within your local development environment, run the following:

```
npm run dev:build
npm run dev
```

### Publish Content

Currently, the content is published to the GitHub pages site through the `gh-pages` branch
using the `gh-pages` npm module. All of the details for handling the publishing are covered within
the deploy script. The deploy can be run using the following:

```
npm run build
npm run deploy
```

The result of the `deploy` can be viewed here - https://ibm-gsi-ecosystem.github.io/ibm-gsi-cloudnative-journey/

**Note:** There is a time delay between when the deploy process completes and when the
content is available on the published site.

## Resources

- [Getting Started](https://www.mkdocs.org/getting-started/)
- [Theme Reference](https://squidfunk.github.io/mkdocs-material/reference/)
