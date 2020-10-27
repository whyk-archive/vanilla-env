/* globals require, __dirname, process, module */
import { join, resolve } from 'path'
import { readdirSync, statSync } from 'fs'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import ImageminWebpackPlugin from 'imagemin-webpack-plugin'
import ImageminMozjpeg from 'imagemin-mozjpeg'
import type { Output, RuleSetRule, Module, Plugin, Configuration } from 'webpack'
import type { Configuration as devServer } from 'webpack-dev-server'

const output: Output = {
  filename: 'main.js',
  path: join(__dirname, 'dist/assets'),
}

const rules: RuleSetRule[] = [
  {
    test: /\.js/,
    use: [
      {
        loader: 'babel-loader',
      },
    ],
  },
  {
    test: /\.scss/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
      },
      {
        loader: 'css-loader',
        options: {
          url: false,
          sourceMap: true,
          importLoaders: 2,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
          plugins: [require('autoprefixer')({})],
        },
      },
      {
        loader: 'sass-loader',
        options: {
          implementation: require('sass'),
          sassOptions: {
            sourceMap: true,
            outputStyle: 'compressed',
            fiber: require('fibers'),
          },
        },
      },
    ],
  },
]

const module: Module = {
  rules
}

const devServer: devServer = {
  open: true,
  contentBase: resolve(__dirname, 'dist'),
  watchContentBase: true,
  port: 3000,
}

const readdirRecursively = (dir: string, files = []) => {
  const paths = readdirSync(dir)
  const dirs: string[] = []
  for (const path of paths) {
    const stats = statSync(`${dir}/${path}`)
    if (stats.isDirectory()) {
      dirs.push(`${dir}/${path}`)
    } else {
      files.push(`${dir}/${path}`)
    }
  }
  for (const d of dirs) {
    files = readdirRecursively(d, files)
  }
  return files
}

const sourceFilesList = readdirRecursively('./src')
let htmlWebpackPluginList: HtmlWebpackPlugin[] = []
sourceFilesList.forEach((file) => {
  if (!file.includes('.html')) return

  htmlWebpackPluginList.push(
    new HtmlWebpackPlugin({
      filename: `../${file.replace('./src/', '')}`,
      template: file,
    })
  )
})

const plugins: Plugin[] = [
  new MiniCssExtractPlugin({
    filename: 'main.css',
  }),
  new CopyWebpackPlugin({
    patterns: [
      {
        from: 'src/assets/images',
        to: 'images',
      },
    ],
  }),
  new ImageminWebpackPlugin({
    test: /\.(jpe?g|png|gif|svg)$/i,
    pngquant: {
      quality: '65-80',
    },
    gifsicle: {
      interlaced: false,
      optimizationLevel: 1,
      colors: 256,
    },
    svgo: {},
    plugins: [
      // @ts-ignore
      ImageminMozjpeg({
        quality: 85,
        progressive: true,
      }),
    ],
  }),
  ...htmlWebpackPluginList,
]

const config: Configuration = {
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  watch: process.env.NODE_ENV === 'development' ? true : false,
  entry: './src/assets/js/index.js',
  output,
  module,
  devServer,
  plugins,
}

export default config
