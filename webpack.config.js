module.exports = {
  entry: "./js/index.js",
  output: {
    path: "./js",
    filename: "bundle.js",
    publicPath: "/js/"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      {
        test: /\.scss$/,
        loaders: [
          "style-loader", 
          "css-loader", 
          "sass-loader"
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules|d3\.js|rune\.js/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      }
    ]
  }
};
