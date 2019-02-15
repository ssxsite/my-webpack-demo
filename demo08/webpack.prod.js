const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
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
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: (loader) => [require('autoprefixer')({ browsers: ['> 0.15% in CN'] })]
            }
          },
          {
            loader: 'sass-loader' // 将 Sass 编译成 CSS
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
          // },
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[path][name].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
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
    new OptimizeCssAssetsPlugin({}), // 压缩css插件,
    new HtmlWebpackPlugin({ // Also generate a test.html
      filename: 'index.html',
      template: path.resolve(__dirname, 'index.html')
    }),
    new CleanWebpackPlugin('dist')
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin()]// js压缩
  }
};
