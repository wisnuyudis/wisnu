module.exports = {
  siteMetadata: {
    title: `Wisnu Dev Blog`,
    author: {
      name: `Wisnu`,
      bio: `<p>
              A passionate developer who loves building useful things for the world.
            </p>
            <p>
              You should follow me on <a href="https://github.com/wisnu">Github</a>
            </p>
            `,
      dp: "https://avatars.githubusercontent.com/u/12345?v=4",
      social: {
        github: {
          title: "github",
          username: `wisnu`,
          url: `https://github.com/`,
        },
        linkedin: {
          title: "linkedin",
          username: `wisnu`,
          url: `https://linkedin.com/in/`,
        },
        twitter: {
          title: "twitter",
          username: `wisnu`,
          url: `https://twitter.com/`,
        },
        dev: { title: "dev", username: `wisnu`, url: `https://dev.to/` },
        email: { title: "email", username: `wisnu@example.com`, url: `mailto:` },
      },
    },
    description: `A personal blog for sharing programming knowledge and experiences`,
    siteUrl: `https://wisnu-blog.netlify.app`,
  },
  plugins: [
    `gatsby-plugin-image`,
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
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              classPrefix: "language-",
              showLineNumbers: true,
              noInlineHighlight: false,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Wisnu Dev Blog RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Wisnu Dev Blog`,
        short_name: `Wisnu Blog`,
        start_url: `/`,
        background_color: `#151618`,
        theme_color: `#151618`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
  ],
}