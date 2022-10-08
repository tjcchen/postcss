const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index/index.js',
    about: './src/about/about.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      exclude: /node_modules/,
      use: [{
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
          }
        },
        {
          loader: 'postcss-loader'
        }
      ]
    }]
  }
};