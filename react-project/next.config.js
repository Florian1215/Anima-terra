/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // allow loading images from local websites folder during development
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'i0.wp.com' }
    ]
  }
}

module.exports = nextConfig;
