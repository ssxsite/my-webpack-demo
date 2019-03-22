//运行项目
参考：
https://github.com/NMFR/optimize-css-assets-webpack-plugin
https://github.com/webpack-contrib/uglifyjs-webpack-plugin

1.npm install --save-dev optimize-css-assets-webpack-plugin
2. npm install uglifyjs-webpack-plugin --save-dev
3.cd demo06
4.npx webpack --config webpack.prod.js （指定webpack的运行文件，npx webpack -h可以查看所有命令）


//optimize-css-assets-webpack-plugin 的作用是CSS文件的压缩，uglifyjs-webpack-plugin是js文件的压缩，都是用于生产环境配置