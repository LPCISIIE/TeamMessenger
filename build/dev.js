var webpack = require('webpack')
var config = require('./webpack.dev')
var chokidar = require('chokidar')
var opn = require('opn')
var WebpackDevServer = require('webpack-dev-server')
var port = 8080
var uri = 'http://localhost:' + port

// config.entry.app.unshift('webpack-dev-server/client?http://localhost:' + port + '/', 'webpack/hot/dev-server')
config.entry.app.unshift('./build/dev-client.js')

var compiler = webpack(config)
var hotMiddleware = require('webpack-hot-middleware')(compiler)

chokidar.watch('./*.html').on('all', function (path) {
  console.log('File ' + path + ' has changed. Reloading the page...')
  hotMiddleware.publish({ action: 'reload' })
})

var server = new WebpackDevServer(compiler, {
  hot: true,
  contentBase: './',
  quiet: false,
  noInfo: false,
  publicPath: config.output.publicPath,
  stats: { colors: true }
})

server.use(hotMiddleware)

server.listen(port, function (err) {
  if (err)
    console.log(err)
  else
    console.log('> Listening at ' + uri + '\n')

  opn(uri)
})
