let path = require('path')
let root = path.resolve(__dirname, '../')
let HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: ['./src/main.js']
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js', '.css']
  },
  module: {
    preLoaders: [{
        test: /\.js$/,
        loader: 'eslint',
        exclude: /(node_modules|bower_components)/
      }
    ],
    loaders: [{
        test: /\.s?css$/,
        loaders: ['style', 'css', 'sass']
      }, {
        test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
        include: root
      }, {
        test: /\.(png|jpg|gif|svg|woff2?|eot|ttf)$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name]-[hash:7].[ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],
  eslint: {
    configFile: path.resolve(root, './.eslintrc'),
    formatter: require('eslint-friendly-formatter')
  }
}
