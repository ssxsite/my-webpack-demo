本项目代码基于最新的webpack4搭建的，每一个demo都有对应的README文件，说明此demo需要安装的依赖。
如何使用？
为了让你熟悉整个webpack每一个插件的安装及使用，建议clone代码下来本地，然后自行搭建项目，并运行各个demo

# 一.clone代码

$ git clone https://github.com/ssxdjq/my-webpack-demo.git

# 二.在本地自行搭建项目，具体自行下列命令：

1.npm init -y

2.npm i -D webpack

3.npm i -D webpack-cli (webpack3.0之前不用安装这个，4.0之后需要安装这个)

4.npx webpack (npx就是执行nodemodules bin webpack)

5.复制clone下来的代码demo01~demo12到你自己创建的文件夹里。

6.依此运行每一个demo.运行每一个demo之前，请认真看demo里面的readme文件，会告诉你需要安装的依赖。

# 三。参考文档

关于什么是webpack请自行搜索。本项目配置是基于官方文档的。
文档：https://www.webpackjs.com/concepts/modules/

# 四。demo介绍

## demo01

webpack 默认配置文件是webpack.config.js，entry：打包入口文件，output：打包出口文件。
按照demo01新建main.js:

```
document.write('<h1>Hello World</h1>');

```
index.html

```
<html>
  <body>
    <script type="text/javascript" src="./dist/bundle.js"></script>
  </body>
</html>

```
执行命令
cd demo01
npx webpack

编译打包完成后，用浏览器打开index.html,就可看到效果。

## demo02
运行方法与demo01一致。此demo添加了style-loader,css-loader帮助打包css文件，具体按照看readme
webpack.config.js增加了rules配置：

```
 module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
```
项目新增了index.css文件，main.js引入了css文件。此时打包出来的css文件是被style-loader以style的形式注入到html里面，所以我们看不到有css文件。

## demo03
此demo在demo02的基础上演示了sass-loader的配置，引入了test.scss文件。注意webpack.config.js的rules配置：

```
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
            loader: 'sass-loader', // 将 Sass 编译成 CSS
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
```
先是写style-loader,再写css-loader,最后才写sass-loader,因为webpack的解析顺序是逆序的，先执行sass-loader,再执行css-loader,以此类推。
sourceMap:true设置，帮助问快速找到css样式所在文件位置，方便调试。

## demo04
此demo演示了post-loader的配置，post-loader是一个框架，它实际没有什么作用，但是可以在此基础上，安装很多插件，比如autoprefixer，可以帮我们自动添加css浏览器前缀。
webpack.config.js的rules配置：

```
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
```



## demo05
此demo演示了mini-css-extract-pluginr的配置,这个插件的作用是在生产环境打包的时候，让js和css文件分别打包，从而可以让js和css文件同时解析，提高运行速度。用了这个就不要用style-loader了。
webpack.config.js的rules配置：

```
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module: {
    rules: [
      {
        test: /\.(sc|c|sa)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              sourceMap: true
            }
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
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
```

## demo06
此demo演示了optimize-css-assets-webpack-plugin和uglifyjs-webpack-plugin的配置,这两个插件的作用是在生产环境打包的时候，让对js和css文件进行压缩。
webpack.config.js的rules配置：

```
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

 plugins: [
    new OptimizeCssAssetsPlugin({})// 压缩css插件
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin()]// js压缩
  }
```

## demo07
此demo演示了html-webpack-plugin和clean-webpack-plugin的配置,html-webpack-plugin的作用是把打包的后的bundle.js自动注入到html模板中，clean-webpack-plugin是每次重新打包的时候，删除掉之前打包的文件。
webpack.config.js的rules配置：

```
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
 plugins: [
 	 new HtmlWebpackPlugin({ // Also generate a test.html
      filename: 'index.html',
      template: path.resolve(__dirname, 'index.html')
    }),
    new CleanWebpackPlugin('dist')
 ]
```

## demo08
此demo演示了file-loader,url-loader和image-webpack-loader的配置,file-loader,url-loader的作用是打包图片资源，image-webpack-loader是对图片进行压缩。其中url-loader还有一个作用，就是把图片转换成base64，所以一般图片打包，我们就用url-loader和image-webpack-loader就可以了。
webpack.config.js的rules配置：

```
module：{
rules: [
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
}
```



## demo09
此demo演示了webpack-merge这个loader的作用。实际开发中，开发环境和生成环境的webpack配置文件是不一样的，但是又有很多共同的配置，所以可以抽取共同配置为webpack.common.js，而开发环境的可以编辑为webpack.dev.js，生产环境的可以编辑为webpack.prod.js。webpack-merge就是合并两个webpack配置文件的作用。
webpack.dev.js的rules配置：

```
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, devConfig);

```

## demo10
此demo演示了webpack其他一些常用配置

```
devtool: 'inline-source-map', // 在开发阶段开启source-map，编译js调试

resolve: {
    alias: { // 配置别名
      '@': path.resolve(__dirname, 'src/'),
      'common': path.resolve(__dirname, 'src/common'),
      'assets': path.resolve(__dirname, 'src/assets')
    },
    extensions: ['.js', '.vue', '.json'] // 默认值: [".js",".json"]  模块名字可以省略的后缀名
  },

  externals: { // 把一个模块做成外部依赖，不会打包到 js文件中。
    jquery: 'jQuery',
    lodash: '_'
  },
```

另外，webpack-bundle-analyzer这个插件可以形象帮助分析webpack打包的文件组成，方便进行webpack配置优化

```
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

plugins: [
    new BundleAnalyzerPlugin()
  ]

```

## demo11
此demo展示webpack-dev-server的配置，启动一个web服务器，同时开启服务器代理，解决跨域问题。实时调试代码。这个插件也是在开发阶段才使用。
webpack.dev.js配置：

```
const webpack = require('webpack');

 devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 8000, // 本地服务器端口号
    hot: true, // 热重载
    overlay: true, // 如果代码出错，会在浏览器页面弹出“浮动层”。类似于 vue-cli 等脚手架
    proxy: {
      // 跨域代理转发
      '/comments': {
        target: 'https://m.weibo.cn',
        changeOrigin: true,
        logLevel: 'debug',
        headers: {
          Cookie: ''
        }
      }
    },
    historyApiFallback: {
      // HTML5 history模式
      rewrites: [{ from: /.*/, to: '/index.html' }]
    }
  },
 plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
```

## demo12
此demo演示了babel-loader和eslint配置。babel-loader是编译ES6为浏览器可以运行的js；eslint是规范代码编写。

新建eslintc.js编辑lint规则，eslintignore忽略lint的文件
eslintc.js：

```
// .eslintrc.js
// https://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true
  },
  extends: [
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  globals: {
    NODE_ENV: false
  },
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 添加，分号必须
    semi: ['error', 'always'],
    'no-unexpected-multiline': 'off',
    'space-before-function-paren': ['error', 'never'],
    // 'quotes': ["error", "double", { "avoidEscape": true }]
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true
      }
    ]
  }
};
```
.eslintignore.js

```
/dist/
/node_modules/
/*.js
```
webpack.common.js

```
{
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        include: [resolve('src')],
        options: {
          fix: true
        }
      },
```







