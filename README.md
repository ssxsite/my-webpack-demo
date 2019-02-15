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





