const path = require('path');

module.exports = {
  entry: './frontend/index.js',
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    filename: 'prod.[name].bundle.js',
    path: path.resolve(__dirname, 'backend/flaskapp/static'),
    publicPath: ''
  },
  mode: 'development',
  devtool: 'inline-source-map'
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //     cacheGroups: {
  //       reactVendor: {
  //         test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
  //         name: 'react-vendors'
  //       },
  //       reactRouterVendor: {
  //         test: /[\\/]node_modules[\\/](react-router-dom)[\\/]/,
  //         name: 'react-router-vendors'
  //       },
  //       axiosVendor: {
  //         test: /[\\/]node_modules[\\/](axios)[\\/]/,
  //         name: 'axios-vendors'
  //       },
  //       vendors: {
  //         test: /[\\/]node_modules[\\/](!react-router-dom)(!axios)[\\/]/,
  //         name: 'vendors'
  //       }
  //     }
  //   }
  // }
}