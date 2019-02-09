const path = require('path');
const cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'ctc.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new cleanWebpackPlugin(['dist']),
  ],
};
