const path = require('path')

const output = {
  filename: 'main.js',
  path: path.join(__dirname, '/dist')
}

const resolve = {
  extensions: ['.js', '.ts']
}

const rules = [
  {
    test: /\.ts$/,
    use: 'ts-loader'
  }
];

const module = {
  rules
};

const devServer = {
  open: true,
  openPage: 'dist/index.html',
  watchContentBase: true,
  port: 3000
}

const config = {
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  watch: process.env.NODE_ENV === 'development' ? true : false,
  entry: 'src/assets/ts/index.ts',
  output,
  resolve,
  module,
  devServer
};

module.exports = config