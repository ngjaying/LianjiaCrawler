var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  target: 'node',
  output: {
    path: path.resolve(__dirname, './lib'),
    filename: "index.js"
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   mangle: true,
    //   compress: {
    //     warnings: false,
    //   }
    // }),
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: JSON.stringify('production')
    //   }
    // })
  ]
}
