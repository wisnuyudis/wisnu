import React from "react"

const Footer = () => (
  <footer className="glass-nav" style={{ marginTop: '4rem' }}>
    <div className="container">
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div>
          <p style={{ margin: 0, color: 'rgba(255,255,255,0.7)' }}>
            Hand-crafted with love by{" "}
            <a 
              href="https://twitter.com/wisnu" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#f093fb' }}
            >
              Wisnu
            </a>
          </p>
        </div>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', fontSize: '0.9rem' }}
          >
            GitHub
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', fontSize: '0.9rem' }}
          >
            Twitter
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', fontSize: '0.9rem' }}
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer