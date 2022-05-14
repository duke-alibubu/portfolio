const path = require("path");
const withFonts = require('next-fonts');

module.exports = withFonts({
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["cdn.discordapp.com", "i.scdn.co"],
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
    }
  },
  assetPrefix: './',
  trailingSlash: true,
  enableSvg: true,
  webpack(config, options) {
    return config;
  },
  reactStrictMode: true,
});
