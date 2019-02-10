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
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
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
