import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const ContactPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout 
      location={location} 
      title={siteTitle}
      pageTitle="Contact"
      pageDescription="Get in touch with me"
    >
      <div className="fade-in">
        <div className="glass-card" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1>Contact</h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)' }}>
            Let's connect and start a conversation!
          </p>
        </div>
        
        <div className="glass-card">
          <h2>Get In Touch</h2>
          <p>
            I'd love to hear from you! Whether you have a question about my blog posts, 
            want to collaborate on a project, or just want to say hello, feel free to reach out.
          </p>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '2rem',
            marginTop: '2rem'
          }}>
            <div>
              <h3>Social Media</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <a 
                  href="https://twitter.com/wisnu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn"
                  style={{ textAlign: 'center' }}
                >
                  Twitter
                </a>
                <a 
                  href="https://github.com/wisnu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn"
                  style={{ textAlign: 'center' }}
                >
                  GitHub
                </a>
                <a 
                  href="https://linkedin.com/in/wisnu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn"
                  style={{ textAlign: 'center' }}
                >
                  LinkedIn
                </a>
              </div>
            </div>
            
            <div>
              <h3>Send a Message</h3>
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true"
                style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
              >
                <input type="hidden" name="form-name" value="contact" />
                <div>
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: '10px',
                      background: 'rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      color: 'rgba(255,255,255,0.9)',
                      fontSize: '1rem'
                    }}
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: '10px',
                      background: 'rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      color: 'rgba(255,255,255,0.9)',
                      fontSize: '1rem'
                    }}
                  />
                </div>
                <div>
                  <textarea 
                    name="message" 
                    placeholder="Your Message" 
                    rows="5" 
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: '10px',
                      background: 'rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      color: 'rgba(255,255,255,0.9)',
                      fontSize: '1rem',
                      resize: 'vertical'
                    }}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`