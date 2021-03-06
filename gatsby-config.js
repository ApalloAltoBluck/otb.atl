module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Outside the Box",
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-react-helmet", 'gatsby-plugin-postcss', `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,  {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
  ],
};
