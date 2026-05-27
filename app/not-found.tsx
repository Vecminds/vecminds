import Link from 'next/link'

export default function NotFound() {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: 'var(--font-manrope, system-ui, sans-serif)',
          backgroundColor: '#F5F5F5',
          color: '#0B1530',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100dvh',
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        <span
          aria-hidden="true"
          style={{
            fontSize: 'clamp(96px, 20vw, 200px)',
            fontWeight: 500,
            letterSpacing: '-0.06em',
            lineHeight: 1,
            color: 'rgba(11,21,48,0.06)',
            userSelect: 'none',
            display: 'block',
          }}
        >
          404
        </span>
        <h1
          style={{
            fontSize: 'clamp(28px, 5vw, 52px)',
            fontWeight: 500,
            letterSpacing: '-0.04em',
            lineHeight: 1.05,
            margin: '0 0 1rem',
          }}
        >
          Page not found.
        </h1>
        <p
          style={{
            color: 'rgba(11,21,48,0.55)',
            fontSize: '1rem',
            lineHeight: 1.6,
            maxWidth: '28rem',
            marginBottom: '2.5rem',
          }}
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Head back to the homepage and we&apos;ll get you where you need to go.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: '#0B1530',
              color: '#fff',
              borderRadius: '9999px',
              padding: '0.625rem 1.75rem',
              fontSize: '0.9375rem',
              fontWeight: 500,
              textDecoration: 'none',
              letterSpacing: '-0.01em',
            }}
          >
            Go home
          </Link>
          <a
            href="mailto:info@vecminds.com"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'transparent',
              color: '#0B1530',
              border: '1px solid rgba(11,21,48,0.18)',
              borderRadius: '9999px',
              padding: '0.625rem 1.75rem',
              fontSize: '0.9375rem',
              fontWeight: 500,
              textDecoration: 'none',
              letterSpacing: '-0.01em',
            }}
          >
            Contact us
          </a>
        </div>
        <div
          style={{
            marginTop: '4rem',
            padding: '0.5rem 1rem',
            borderRadius: '9999px',
            backgroundColor: 'rgba(11,21,48,0.05)',
            fontSize: '0.8125rem',
            color: 'rgba(11,21,48,0.45)',
          }}
        >
          <a
            href="https://blog.vecminds.com"
            style={{ color: '#2754D9', textDecoration: 'none' }}
          >
            Visit our blog
          </a>{' '}
          · or explore{' '}
          <a href="/#services" style={{ color: '#2754D9', textDecoration: 'none' }}>
            our services
          </a>
        </div>
      </body>
    </html>
  )
}
