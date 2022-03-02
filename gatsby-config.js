module.exports = {
  siteMetadata: {
    title: 'The Oxford Street Property Company',
    author: 'Alun Jones',
    description: 'The Oxford Street Property Company',
    siteUrl: `https://theospc.co.uk`
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/Sqaure-logo.jpg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
