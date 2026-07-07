import React from 'react'

function Home() {
  const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    borderRadius: '16px',
    padding: '24px',
    color: '#f8f8ff',
    minHeight: '160px',
    boxShadow: '0 16px 40px rgba(0, 0, 0, 0.18)',
  }

  return (
    <main
      style={{
        padding: '40px 20px',
        minHeight: 'calc(100vh - 220px)',
        background: 'linear-gradient(180deg, #120c3a 0%, #21185f 100%)',
        color: '#eef2ff',
      }}
    >
      <section style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <p style={{ margin: 0, color: '#9ca3af', letterSpacing: '0.18em' }}>WELCOME</p>
          <h1 style={{ fontSize: '3rem', lineHeight: 1.05, margin: '16px 0' }}>
            Home for your React internship project
          </h1>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '720px', margin: '0 auto', color: '#d6d6ff' }}>
            This is the home page of your app. Use it to introduce visitors to your work,
            explain what you build, and show the best parts of your project.
          </p>
        </div>

        <div style={{ display: 'grid', gap: '24px', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
          <div style={cardStyle}>
            <h2 style={{ marginTop: 0, color: '#fff' }}>Modern UI</h2>
            <p style={{ margin: '12px 0 0', color: '#d1d5db' }}>
              A clean page design with sections that scale nicely on mobile and desktop.
            </p>
          </div>

          <div style={cardStyle}>
            <h2 style={{ marginTop: 0, color: '#fff' }}>React Router Ready</h2>
            <p style={{ margin: '12px 0 0', color: '#d1d5db' }}>
              Your app already has `react-router-dom` set up, so Home and About routes work.
            </p>
          </div>

          <div style={cardStyle}>
            <h2 style={{ marginTop: 0, color: '#fff' }}>Reusable Components</h2>
            <p style={{ margin: '12px 0 0', color: '#d1d5db' }}>
              Add more sections, cards, or features in the `src/components` folder.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home