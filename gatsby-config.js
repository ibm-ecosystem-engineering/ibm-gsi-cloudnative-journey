module.exports = {
  siteMetadata: {
    title: 'IBM Cloud Sandbox',
    description: 'Cloud-Native Learning Journey',
    keywords: 'gatsby,theme,carbon',
  },
  pathPrefix: "/ibm-gsi-cloudnative-journey",
  plugins: [
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {},
        failOnError: true,
        base64Width: 20,
        forceBase64Format: 'png', 
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === 'MOZJPEG',
        stripMetadata: true,
        defaultQuality: 50,
    },
},
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
