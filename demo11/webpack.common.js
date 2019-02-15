const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        include: [path.resolve(__dirname, 'src/')],
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
  externals: { // 把一个模块做成外部依赖，不会打包到 js文件中。
    jquery: 'jQuery'
  },
  plugins: [
    new HtmlWebpackPlugin({ // Also generate a test.html
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/index.html'),
      minify: {
        collapseWhitespace: true,
        removeComments: true, // 是否移除注释
        removeAttributeQuotes: true // 移除属性的引号
      }
    }),
    new CleanWebpackPlugin('dist')
  ],
  optimization: {

  }
};
