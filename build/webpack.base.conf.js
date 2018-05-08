/**
 * webpack开发环境和生成环境通用的配置
 */

'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const webpack = require('webpack')

//获取对应文件路径的函数
//因为该文件是在项目的二级文件build下，所以要加上../这样才能找到像src这样的目录
function resolve (dir) {
  //join方法用于将多个字符串结合成一个路径字符串
  //path在node中会经常用到可以仔细了解一下path的各种方法
  //__dirname：获取当前文件所在目录的完整绝对路径
  return path.join(__dirname, '..', dir)
}

//eslint用来检查我们写的js代码是否满足指定的规则
/*const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
})*/

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    //入口文件是src下的main.js
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    //自动解析确定的扩展,在引入模块时不带扩展名
    //例如：import somejs from "@/some"
    extensions: ['.js', '.vue', '.json'],
    alias: {
      // 后面的$符号指精确匹配
      // 也就是说只能使用 import vuejs from "vue" 这样的方式导入vue.esm.js文件
      'vue$': 'vue/dist/vue.esm.js',
      // resolve('src') 其实在这里就是项目根目录中的src目录
      // 例如引用src目录下的some.js方法:import somejs from "@/some.js"
      // 用@来代替../src
      '@': resolve('src'),
      'bootstrap':resolve('static/bootstrap'),
    }
  },
  plugins: [
	  new webpack.ProvidePlugin({
	    $: "jquery",
	    jQuery: "jquery",
	  })
	],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
