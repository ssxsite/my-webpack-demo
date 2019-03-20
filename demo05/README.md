//运行项目
参考：
https://github.com/webpack-contrib/mini-css-extract-plugin
1.npm install --save-dev mini-css-extract-plugin
3.cd demo05
4.npx webpack --config webpack.prod.js （指定webpack的运行文件，npx webpack -h可以查看所有命令）

//mini-css-extract-plugin 作用是抽离样式表成单独的文件，用于生产环境，让js和css文件同时请求并行，减少js文件的大小