module.exports = {
  siteMetadata: {
    title: `Gatsby Tailwind CSS ➕ Emotion Starter`,
    description: `A bare-bones Tailwind CSS + Emotion starter to kickoff your project.`,
    author: `@pauloelias`,
  },
  plugins: [{
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `src`,
      path: `${__dirname}/src/`,
    },
  },
  {
    resolve: "gatsby-plugin-react-svg",
    options: {
      rule: {
        include: /svg/ // See below to configure properly
      }
    }
  },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
  ],
}
