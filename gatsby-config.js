module.exports = {
  siteMetadata: {
    title: 'IBM GSI Sandbox',
    description: 'Cloud Native Learning Journey',
    keywords: 'gatsby,theme,carbon',
  },
  plugins: ['gatsby-theme-carbon',
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
      },
    },
  ],
  pathPrefix: "/gsi-labs/ibm-gsi-cloudnative-journey",
};
