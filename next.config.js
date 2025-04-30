/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configure only what's needed, remove any deprecated options
  experimental: {
    // Set to true for better client component detection
    serverActions: true,
  }
};

module.exports = nextConfig; 