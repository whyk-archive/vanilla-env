import * as webpack from 'webpack';
import * as path from 'path';

const rules: webpack.RuleSetRule[] = [
  {
    test: /\.ts$/,
    use: 'ts-loader'
  }
];

const module: webpack.Module = {
  rules
};

const config: webpack.Configuration = {
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  entry: 'src/assets/ts/index.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(`${process.cwd()}/dist/`)
  },
  module
};

export default config;