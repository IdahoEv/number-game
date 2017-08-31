const path = require('path');

const config = {
  devtool: 'eval-source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      // { test: /\.txt$/, use: 'raw-loader' },
      { test: /\.js$/, use: 'babel-loader' },
      { test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      }]
  }
};

module.exports = config;
