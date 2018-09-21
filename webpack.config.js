const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const config = {
  context: path.join(__dirname, 'src/client'),
  entry: {
    app: ['babel-polyfill', './index.js']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }, {
        test: /\.svg/,
        use: 'url-loader',
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css'],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    // new CleanWebpackPlugin(['dist/js'], {
    //   verbose: true
    // }),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      inject: 'body',
      chunkSortMode: 'dependency',
    })
  ]
}

if (process.env.NODE_ENV === 'development') {
  // config.entry.app.unshift(
  //   'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
  //   'react-hot-loader/patch'
  // )

  // config.plugins.push(
  //   new webpack.HotModuleReplacementPlugin()
  // )
}

module.exports = config
