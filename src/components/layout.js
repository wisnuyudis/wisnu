import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children, pageTitle, pageDescription }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          author {
            name
          }
        }
      }
    }
  `)

  const siteTitle = data.site.siteMetadata?.title || `Title`
  const siteDescription = data.site.siteMetadata?.description || `Description`

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle}</title>
        <meta name="description" content={pageDescription || siteDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={pageTitle || siteTitle} />
        <meta property="og:description" content={pageDescription || siteDescription} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content={data.site.siteMetadata?.author?.name || ``} />
        <meta name="twitter:title" content={pageTitle || siteTitle} />
        <meta name="twitter:description" content={pageDescription || siteDescription} />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Helmet>
      <div className="site-wrapper">
        <Header siteTitle={siteTitle} />
        <main className="main-content">
          <div className="container">
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageTitle: PropTypes.string,
  pageDescription: PropTypes.string,
}

export default Layout