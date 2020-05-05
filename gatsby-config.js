module.exports = {
  siteMetadata: {
    title: 'IBM GSI Sandbox',
    description: 'Cloud Native Learning Journey',
    keywords: 'gatsby,theme,carbon',
  },
  pathPrefix: "/ibm-gsi-cloudnative-journey",
  plugins: [
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        isSearchEnabled: true,
        repository: {
          baseUrl:
              'https://github.com/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey',
          subDirectory: '/',
        },
      },
    },
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'data',
        path: './src/data'
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-155887541-1",
        head:true
      },
    },
  ]
};
