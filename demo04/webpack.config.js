const path = require('path');
module.exports = {
  mode: 'development',
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(sc|c|sa)ss$/,
        use: [
          'style-loader',
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
      }
    ]
  }
};
