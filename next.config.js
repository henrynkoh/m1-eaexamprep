/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configure to handle static files with special characters
  distDir: '_next',
  // Allow static files to be requested with spaces and special characters in filenames  
  async headers() {
    return [
      {
        source: '/pdfs/:path*',
        headers: [
          {
            key: 'Content-Disposition',
            value: 'inline',
          },
        ],
      },
    ];
  }
};

module.exports = nextConfig; 