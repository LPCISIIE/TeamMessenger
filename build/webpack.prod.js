let webpack = require('webpack')
let config = require('./webpack.base')
let ExtractTextPlugin = require('extract-text-webpack-plugin')
let extractCSS = new ExtractTextPlugin('bundle.css')

config.plugins = config.plugins.concat([
  extractCSS,
  new webpack.optimize.UglifyJsPlugin({
    comments: false
  })
])

let cssLoaders = config.module.loaders[0].loaders
config.module.loaders[0].loaders = null
config.module.loaders[0].loader = extractCSS.extract(cssLoaders.slice(1, 10))

module.exports = config
