import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout 
      location={location} 
      title={siteTitle}
      pageTitle="About"
      pageDescription="Learn more about this blog and its creator"
    >
      <div className="fade-in">
        <div className="glass-card" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1>About</h1>
        </div>
        
        <div className="glass-card">
          <h2>Welcome to Gatsby Glass Blog</h2>
          <p>
            This is a minimal and beautiful Gatsby personal blog starter with a stunning glassmorphism UI design. 
            The blog features a modern, translucent design that creates depth and visual interest while maintaining 
            excellent readability.
          </p>
          
          <h3>Features</h3>
          <ul style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.8' }}>
            <li>✨ Beautiful glassmorphism design</li>
            <li>📱 Fully responsive layout</li>
            <li>🔍 SEO optimized</li>
            <li>📝 Markdown support for blog posts</li>
            <li>🏷️ Tag system for categorizing posts</li>
            <li>⚡ Fast loading with Gatsby</li>
            <li>🎨 Smooth animations and transitions</li>
            <li>📊 Built-in analytics ready</li>
          </ul>
          
          <h3>Technology Stack</h3>
          <p>
            This blog is built with modern web technologies:
          </p>
          <ul style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.8' }}>
            <li><strong>Gatsby:</strong> Static site generator for React</li>
            <li><strong>React:</strong> Component-based UI library</li>
            <li><strong>SCSS:</strong> Enhanced CSS with variables and mixins</li>
            <li><strong>GraphQL:</strong> Query language for APIs</li>
            <li><strong>Markdown:</strong> Easy content creation</li>
            <li><strong>Netlify:</strong> Hosting and deployment</li>
          </ul>
          
          <h3>Design Philosophy</h3>
          <p>
            The glassmorphism design trend brings a fresh, modern aesthetic that combines transparency, 
            blur effects, and subtle shadows to create interfaces that feel both ethereal and grounded. 
            This design approach ensures that content remains the focus while providing a visually 
            appealing backdrop.
          </p>
          
          <p>
            Every element is carefully crafted to provide an exceptional reading experience, with 
            attention to typography, spacing, and color contrast to ensure accessibility and readability.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`