/** @type {import('next').NextConfig} */
const nextConfig = {
        runtime: 'nodejs',
        webpack(config, options) {
          config.module.rules.push({
            test: /\.(mp4|webm|ogg|swf|ogv)$/,
            use: {
              loader: 'file-loader',
              options: {
                publicPath: '/_next/static/videos',
                outputPath: 'static/videos',
                name: '[name].[hash].[ext]',
              },
            },
          });
      
          return config;
        },

        images: {
          domains: ['images.pexels.com', 'res.cloudinary.com'],
        },
};

export default nextConfig;
