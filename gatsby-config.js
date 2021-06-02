module.exports = {
  siteMetadata: {
    title: `Ever 10`,
    author: `Rael`,
    description: `Ever10 Ltd`,
    siteUrl: `https://www.ever10.com`,
  },
  plugins: [
    {
      resolve: `gatsby-remark-images`,
      options: {
        // It's important to specify the maxWidth (in pixels) of
        // the content container as this plugin uses this as the
        // base for generating different widths of each image.
        showCaptions: true,
        markdownCaptions: true,
        maxWidth: 1000,
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "ever10",
        protocol: "https",
        hostname: "www.ever10.com",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 2000,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-mathjax-ssr`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-158627328-1`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ever-10`,
        short_name: `ever-10`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#021F41`,
        display: `minimal-ui`,
        icons: [],
        include_favicon: false,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Libre Franklin:300,400']
        }
      }
    },
    `gatsby-plugin-scss-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-remark-mathjax-ssr`,
    `gatsby-plugin-dark-mode`,
  ],
}
