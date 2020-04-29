const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = env => {
  // https://webpack.js.org/api/cli/#environment-options
  console.log('env', env);

  return {
    optimization: {
      usedExports: true
      // moduleIds: 'hashed',
      // runtimeChunk: 'single',
      // splitChunks: {
      //   cacheGroups: {
      //     vendor: {
      //       test: /[\\/]node_modules[\\/]/,
      //       name: 'vendors',
      //       chunks: 'all'
      //     }
      //   }
      // }
    },
  }
};