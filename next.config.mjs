/** @type {import('next').NextConfig} */
const nextConfig = {
  // Specify the runtime for the app
  runtime: 'nodejs',

  distDir: '.next/build',
  // Image optimization settings
  images: {
    domains: [
      'res.cloudinary.com', // Cloudinary image CDN
      'images.pexels.com',  // Pexels image CDN
    ],
  },
};

export default nextConfig;
