const webpack = require('webpack');
const merge = require('webpack-merge');
const WriteFilePlugin = require('write-file-webpack-plugin');

const PATHS = require('./paths');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: PATHS.public,
    stats: 'errors-only',
    open: true,
    hot: true,
    overlay: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },
  devtool: 'cheap-module-evel-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin({
      multistep: true
    }),
    new WriteFilePlugin()
  ]
});
