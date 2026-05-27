import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'ik.imagekit.io' },
      { protocol: 'https', hostname: 'cdn.jsdelivr.net' },
      { protocol: 'https', hostname: 'images.higgs.ai' },
      { protocol: 'https', hostname: 'd8j0ntlcm91z4.cloudfront.net' },
    ],
  },
  async redirects() {
    return [
      // Canonical: redirect bare domain → www (308 = permanent redirect)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'vecminds.com' }],
        destination: 'https://www.vecminds.com/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
