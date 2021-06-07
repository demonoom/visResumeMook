const path = require('path');
const webpack = require('webpack');
const baseConfig = require('./webpack.base');
const webpackMerge = require('webpack-merge');

const mainConfig = {
  entry: path.resolve(__dirname, '../app/main/electron.ts'),
  target: 'electron-main', // 由于 JS 的应用场景日益增长，从浏览器到 Node，运行在不同环境下的 JS 代码存在一些差异。target 配置项可以让 Webpack 构建出不同运行环境的代码
  output: {
    filename: 'electron.ts',
    path: path.resolve(__dirname, '../dist'),
  },
  devtool: 'inline-source-map',
  mode: 'development',
  plugins: [
    // 根据启动命令的node_env，指定构建变量
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
    }),
  ],
};

module.exports = webpackMerge.merge(baseConfig, mainConfig);
