const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'js/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.[hash].js",
    publicPath: '/dist/'
  },
  devServer: {
    contentBase: path.join(__dirname, './'),
    compress: true,
    port: 9000,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './assets/index.html',
      filename: '../index.html'
    })
  ],
  module: {
    rules: [
      { test: /\.css$/, use: [ {loader: "style!css" } ] },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" }, 
          { loader: "css-loader" }, 
          { loader: "sass-loader" }
        ]
      },
      {
        test: /\.(png|jpg|gif|pdf)$/,
        use: [{loader: 'file-loader'}]
      },
      {
        test: /\.m?jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  }
};
