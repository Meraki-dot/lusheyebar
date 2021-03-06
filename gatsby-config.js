module.exports = {
  siteMetadata: {
    title: `Lush Eye Bar`,
    description: `Lush Eye Bar is a local business located in the San Francisco, bay area that provides eyelash extension and eyebrow permanent makeup services.`,
    url: "https://www.lusheyebar.com",
    image: `./src/images/Logo_Final.svg`,
    author: `Joshua han`,
    keywords: ``,
    name: `google-site-verification`,
    content: `OtCrtsV5Zd-MVJr0nOHOjkcyOgyXyaR3GQa9WN9r6Kc`,
    siteUrl: `https://lusheyebar.com/`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-react-svg`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.01, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations

        // Advanced Options
        selector: "[data-sal]", // Selector of the elements to be animated
        animateClassName: "sal-animate", // Class name which triggers animation
        disabledClassName: "sal-disabled", // Class name which defines the disabled state
        rootMargin: "0% 50%", // Corresponds to root's bounding box margin
        enterEventName: "sal:in", // Enter event name
        exitEventName: "sal:out", // Exit event name
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, This path is relative to the root of the site.
      },
    },
  ],
}
