var express = require('express')
var app = express()
const port = 8080;

(function(){
  var webpack = require('webpack')
  var webpackConfig = require('./webpack.config')
  var compiler = webpack(webpackConfig)

  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath
  }))

  app.use(require('webpack-hot-middleware')(compiler, {
    path: '/__webpack_hmr'
  }))
})();

app.use(express.static('dist'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
