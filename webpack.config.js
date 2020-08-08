const path = require('path')

const output = {
  filename: 'main.js',
  path: path.join(__dirname, 'dist/assets')
}

const devServer = {
  open: true,
  openPage: 'dist/index.html',
  contentBase: 'dist',
  watchContentBase: true,
  port: 3000
}

const config = {
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  watch: process.env.NODE_ENV === 'development' ? true : false,
  entry: './src/assets/js/index.js',
  output,
  devServer
};

module.exports = config