import React from 'react'

function Footer() {
  const linkStyle = {
    color: 'rgba(255, 255, 255, 0.85)',
    textDecoration: 'none',
  }

  return (
    <footer
      style={{
        backgroundColor: 'rgb(14, 3, 58)',
        color: '#f5f5f5',
        padding: '40px 20px',
        marginTop: 'auto',
      }}
    >
      <div
        style={{
          maxWidth: '1126px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: '24px',
          textAlign: 'left',
        }}
      >
        <div>
          <h3 style={{ margin: '0 0 12px', fontSize: '18px' }}>About</h3>
          <p style={{ margin: 0, opacity: 0.78, lineHeight: 1.8 }}>
            A clean footer section for your project with quick access links,
            contact details, and copyright information.
          </p>
        </div>

        <div>
          <h3 style={{ margin: '0 0 12px', fontSize: '18px' }}>Quick Links</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '10px' }}>
            <li>
              <a href="#home" style={linkStyle}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" style={linkStyle}>
                About
              </a>
            </li>
            <li>
              <a href="#contact" style={linkStyle}>
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 style={{ margin: '0 0 12px', fontSize: '18px' }}>Contact</h3>
          <p style={{ margin: '0 0 8px', opacity: 0.78 }}>
            Email: hello@example.com
          </p>
          <p style={{ margin: 0, opacity: 0.78 }}>
            Phone: +1 (555) 123-4567
          </p>
        </div>
      </div>

      <div
        style={{
          maxWidth: '1126px',
          margin: '32px auto 0',
          paddingTop: '24px',
          borderTop: '1px solid rgba(255, 255, 255, 0.12)',
          textAlign: 'center',
          opacity: 0.72,
        }}
      >
        <p style={{ margin: 0 }}>
          © {new Date().getFullYear()} Internship Fullstack. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer