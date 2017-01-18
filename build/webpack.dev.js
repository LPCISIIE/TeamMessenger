let webpack = require('webpack')
let webpackConfig = require('./webpack.base')
let config = require('./config')
let FriendlyErrors = require('friendly-errors-webpack-plugin')

webpackConfig.plugins = webpackConfig.plugins.concat([
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new FriendlyErrors({
    compilationSuccessInfo: {
      messages: ['Listening at http://localhost:' + config.port]
    }
  })
])

module.exports = webpackConfig
