const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/scripts/index.js',
  output: {
    path: `${__dirname}/dist`,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: `${__dirname}/src/public/`,
          to: `${__dirname}/dist/`,
        },
      ],
    }),
    new HtmlWebpackPlugin({
      title: 'Restaurant Catalogue',
      template: `${__dirname}/src/index.html`,
    }),
  ],
};
