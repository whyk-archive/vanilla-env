import * as webpack from 'webpack';
import * as path from 'path';
import * as webpackDevServer from 'webpack-dev-server';

const rules: webpack.RuleSetRule[] = [
  {
    test: /\.ts$/,
    use: 'ts-loader'
  }
];

const module: webpack.Module = {
  rules
};

const devServer: webpackDevServer.Configuration = {
  open: true,
  openPage: 'dist/index.html',
  watchContentBase: true,
  port: 3000
}

const config: webpack.Configuration = {
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  watch: process.env.NODE_ENV === 'development' ? true : false,
  entry: 'src/assets/ts/index.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(process.cwd(), '/dist/')
  },
  module,
  devServer
};

export default config;