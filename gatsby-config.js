module.exports = {
  siteMetadata: {
    title: 'IBM Cloud Sandbox',
    description: 'Cloud-Native Learning Journey',
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
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Defaults used for gatsbyImageData and StaticImage
        defaults: {},
        // Set to false to allow builds to continue on image errors
        failOnError: false,
        // deprecated options and their defaults:
        base64Width: 20,
        forceBase64Format: `png`, // valid formats: png,jpg,webp
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 50,
      },
    },
  ]
};
