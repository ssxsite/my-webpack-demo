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

1.demo01
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



