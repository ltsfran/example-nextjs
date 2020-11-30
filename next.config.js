module.exports = {
  assetPrefix: process.env.PATH_ROOT,
  webpack: (config, { dev }) => {
    if (dev) {
      config.module.rules.push({
        test: /\.tsx?$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader'
      });
    }

    return config;
  }
};
