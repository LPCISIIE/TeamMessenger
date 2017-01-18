var webpack = require('webpack')
var webpackConfig = require('./webpack.dev')
var config = require('./config')
var chokidar = require('chokidar')
var opn = require('opn')
var WebpackDevServer = require('webpack-dev-server')

webpackConfig.entry.app.unshift('./build/dev-client.js')

var compiler = webpack(webpackConfig)
var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})

chokidar.watch('./*.html').on('all', function (path) {
  console.log('File ' + path + ' has changed. Reloading the page...')
  hotMiddleware.publish({ action: 'reload' })
})

var server = new WebpackDevServer(compiler, {
  hot: true,
  contentBase: './',
  quiet: true,
  noInfo: false,
  publicPath: webpackConfig.output.publicPath,
  stats: { colors: true }
})

server.use(hotMiddleware)

server.listen(config.port, function (err) {
  if (err)
    console.log(err)

  opn('http://localhost:' + config.port)
})
