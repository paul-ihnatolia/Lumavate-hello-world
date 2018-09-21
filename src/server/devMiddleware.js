import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from '../../webpack.config'

const compiler = webpack(config)

module.exports = {
  WDM: webpackDevMiddleware(compiler, {
    filename: config.output.filename,
    publicPath: config.output.publicPath,
    historyApiFallback: true,
    hot: true,
    noInfo: true,
  })
  // ,
  // WHM: webpackHotMiddleware(compiler, {
  //   log: console.log, // eslint-disable-line
  //   path: '/__webpack_hmr',
  //   heartbeat: 10 * 1000,
  // })
}