const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './main.js',
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
            loader: 'style-loader'
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
              sourceMap: true,
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
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          // {
          //     loader: 'file-loader',
          //     options: {
          //         name: '[path][name].[ext]'
          //     },
          // }
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }

        ]
      }
    ]
  },
  plugins: [

  ],
  optimization: {

  }
};
