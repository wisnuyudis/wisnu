import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

const BlogPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout 
      location={location} 
      title={siteTitle}
      pageTitle="Blog"
      pageDescription="All blog posts"
    >
      <div className="fade-in">
        <div className="glass-card" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1>Blog Posts</h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)' }}>
            Explore all my thoughts, ideas, and stories.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="glass-card" style={{ textAlign: 'center' }}>
            <p>No blog posts found.</p>
          </div>
        ) : (
          <div className="posts-grid">
            {posts.map(post => {
              const title = post.frontmatter.title || post.fields.slug
              const tags = post.frontmatter.tags || []

              return (
                <Link
                  to={post.fields.slug}
                  key={post.fields.slug}
                  className="post-card"
                  style={{ textDecoration: 'none' }}
                >
                  <div>
                    <div style={{ marginBottom: '1rem' }}>
                      {tags.map(tag => (
                        <span key={tag} className="tag" style={{ marginRight: '0.5rem' }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 style={{ color: 'rgba(255,255,255,0.95)' }}>{title}</h3>
                    <p
                      style={{ color: 'rgba(255,255,255,0.7)' }}
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                    />
                    <div className="blog-meta">
                      <span>{post.frontmatter.date}</span>
                      <span>{post.timeToRead} mins</span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tags
        }
        timeToRead
      }
    }
  }
`