const path = require('path');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'production',
  target: 'node',
  entry: './src/index.js',
  output: {
    filename: 'colony.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: Object.assign(
      {},
      {
        '~utils': path.resolve(__dirname, 'src/utils'),
        '~const': path.resolve(__dirname, 'src/constants'),
      },
    ),
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new cleanWebpackPlugin(['dist']),
  ],
  externals: [nodeExternals()],
};
