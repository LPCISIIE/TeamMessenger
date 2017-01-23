let WebpackDevServer = require('webpack-dev-server')
let webpack = require('webpack')
let webpackConfig = require('./webpack.dev')
let compiler = webpack(webpackConfig)
let config = require('./config')
let chokidar = require('chokidar')
let opn = require('opn')

webpackConfig.entry.app.unshift('./build/dev-client.js')

let hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})

let server = new WebpackDevServer(compiler, {
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

  chokidar.watch(['index.html', 'partials']).on('change', function (path) {
    console.log('> ' + path + ' has changed. Reloading the page...')
    hotMiddleware.publish({ action: 'reload' })
  })

  opn('http://localhost:' + config.port)
})
