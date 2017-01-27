let express = require('express')
let webpack = require('webpack')
let webpackConfig = require('./webpack.dev')
let config = require('./config')
let chokidar = require('chokidar')
let opn = require('opn')

webpackConfig.entry.app.unshift('./build/dev-client.js')

let app = express()
let compiler = webpack(webpackConfig)

let devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

let hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})

app.use(devMiddleware)
app.use(hotMiddleware)
app.use(express.static('./'))

app.listen(config.port, function (err) {
  if (err) {
    console.log(err)
    return
  }

  chokidar.watch(['index.html', 'partials']).on('change', function (path) {
    hotMiddleware.publish({ action: 'reload' })
  })

  opn('http://localhost:' + config.port)
})
