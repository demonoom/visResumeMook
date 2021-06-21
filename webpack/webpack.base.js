const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // 意味着当遇到 import A from './A' 时，会先寻找A.js、找不到就去找A.jsx
    alias: {
      // 别名,避免写 import A from '../../../../A'这种路径
      '@src': path.join(__dirname, '../', 'app/renderer'),
      '@assets': path.join(__dirname, '../', 'assets'),
      '@common': path.join(__dirname, '../', 'app/renderer/common'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(jpg|png|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: '[name]_[hash].[ext]', outputPath: 'images/' },
          },
        ],
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
};
