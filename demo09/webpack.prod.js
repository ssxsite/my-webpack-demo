const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common');

let prodConfig = {
  mode: 'production',
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(sc|c|sa)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: (loader) => [require('autoprefixer')({ browsers: ['> 0.15% in CN'] })]
            }
          },
          {
            loader: 'sass-loader', // 将 Sass 编译成 CSS
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name][hash].css',
      chunkFilename: '[id][hash].css'
    }),
    new OptimizeCssAssetsPlugin({})// 压缩css插件,
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin()]// js压缩
  }
};
module.exports = merge(common, prodConfig);
