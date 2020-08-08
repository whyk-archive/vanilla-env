const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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

const plugins = [
  new MiniCssExtractPlugin({
    filename: 'main.css'
  })
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