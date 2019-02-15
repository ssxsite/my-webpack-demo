//运行项目
参考：
https://cn.eslint.org/docs/user-guide/getting-started
https://github.com/webpack-contrib/eslint-loader
https://github.com/babel/babel-eslint

https://github.com/babel/babel-loader

1.npm install eslint --save-dev
2.npm install eslint-loader --save-dev
3.npm i -D babel-eslint standard
4.npm install -D babel-loader @babel/core @babel/preset-env
5.npm i -D babel-plugin-transform-runtime
6.npm i  babel-runtime --save
7.cd demo12
8.npx webpack --config webpack.dev.js --watch （实际开发中，让webpack自动编译，只需要加--watch,只要代码有变化刷新页面就可以看到最新结果）

