/** @type {import('next').NextConfig} */
module.exports = {
  eslint: {
    dirs: ['pages', 'components', 'utils', 'styles'],
  },

  reactStrictMode: true,
  swcMinify: true,
  // Uncoment to add domain whitelist
  // images: {
  //   domains: [
  //     'res.cloudinary.com',
  //   ],
  // },

  // SVGR
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });

    return config;
  },
};
