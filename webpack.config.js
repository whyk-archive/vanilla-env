const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const output = {
  filename: 'main.js',
  path: path.join(__dirname, 'dist/assets')
}

const rules = [
  {
    test: /\.scss/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader
      },
      {
        loader: 'css-loader',
        options: {
          url: false
        }
      },
      {
        loader: 'sass-loader',
        options: {
          implementation: require('sass'),
          sassOptions: {
            sourceMap: true,
            outputStyle: 'compressed',
            fiber: require('fibers')
          }
        }
      }
    ]
  }
]

const devServer = {
  open: true,
  openPage: 'dist/index.html',
  contentBase: 'dist',
  watchContentBase: true,
  port: 3000
}

// TODO: 現状だとHTMLがファイルごとに宣言が必要なので、HTML読み込んで自動的に宣言を生成するようにする
const plugins = [
  new MiniCssExtractPlugin({
    filename: 'main.css'
  }),
  new HtmlWebpackPlugin({
    filename: '../index.html',
    template: './src/index.html'
  }),
  new HtmlWebpackPlugin({
    filename: '../about/index.html',
    template: './src/about/index.html'
  }),
]

const config = {
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  watch: process.env.NODE_ENV === 'development' ? true : false,
  entry: './src/assets/js/index.js',
  output,
  module: {
    rules
  },
  devServer,
  plugins
};

module.exports = config