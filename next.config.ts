/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode
  reactStrictMode: true,
  
  // Ensure images from external domains work
  images: {
    domains: ['flagcdn.com', 'upload.wikimedia.org'],
    unoptimized: true // May be needed for static export
  },
  
  // If you're using TypeScript
  typescript: {
    ignoreBuildErrors: false, // Set to true temporarily if you have TypeScript errors
  },
  
  // If you're using ESLint
  eslint: {
    ignoreDuringBuilds: false, // Set to true temporarily if you have ESLint errors
  },
}

module.exports = nextConfig
