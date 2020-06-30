const title = process.env.TITLE || 'Cloud-Native Toolkit';
const trackingId = process.env.ANALYTICS_ID || "";

const gitRepo = process.env.GITHUB_REPOSITORY || 'ibm-garage-cloud/ibm-cloudnative-journey';
const pathPrefix = '/' + gitRepo.split('/')[1].toLowerCase();

module.exports = {
  siteMetadata: {
    title,
    description: 'Cloud-Native Learning Journey',
    keywords: 'IBM,cloud-native,learning,activation',
  },
  pathPrefix,
  plugins: [
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        isSearchEnabled: true,
        repository: {
          baseUrl:
              `https://github.com/${gitRepo}`,
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
        trackingId,
        head:true
      },
    },
  ]
};
