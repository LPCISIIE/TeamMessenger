var webpackConfig = require('./webpack.base')
var config = require('./config')
var webpack = require('webpack')
var FriendlyErrors = require('friendly-errors-webpack-plugin')

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
