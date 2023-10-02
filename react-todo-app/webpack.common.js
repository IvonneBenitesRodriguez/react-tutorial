const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css(js|jsx|png|svg|jpg|gif)/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', { loader: 'babel-loader' }],
        type: 'asset/resource',
        exclude: /node_modules/,
      },
    ],
  },
};
