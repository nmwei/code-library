# code-library
## Webpack基础配置
### 项目初始化为npm包    
1. 执行命令
   * npm init
   * npm i webpack
   * npm i react
   * npm i webpack-cli
2. npm i module、npm i -g module、npm i --save module、npm i --save-dev module 对比
   1. npm install moduleName 命令
    * 安装模块到项目node_modules目录下。
    * 不会将模块依赖写入devDependencies或dependencies 节点。
    * 运行 npm install 初始化项目时不会下载模块。 
   2. npm install -g moduleName 命令
    * 安装模块到全局，不会在项目node_modules目录中保存模块包。
    * 不会将模块依赖写入devDependencies或dependencies 节点。
    * 运行 npm install 初始化项目时不会下载模块。
   3. npm install -save moduleName 命令
    * 安装模块到项目node_modules目录下。
    * 会将模块依赖写入dependencies 节点。
    * 运行 npm install 初始化项目时，会将模块下载到项目目录下。
    * 运行npm install --production或者注明NODE_ENV变量值为production时，会自动下载模块到node_modules目录中。
   4. npm install -save-dev moduleName 命令
    * 安装模块到项目node_modules目录下。
    * 会将模块依赖写入devDependencies 节点。
    * 运行 npm install 初始化项目时，会将模块下载到项目目录下。
    * 运行npm install --production或者注明NODE_ENV变量值为production时，不会自动下载模块到node_modules目录中。
###  webpack基础配置
1. webpack --config build/webpack.config.js  
   表示webpack打包，并指定webpack.config.js为配置文件
### loader基础配置
1. 执行命令
    * npm i react-dom -S
    * npm i babel-loader -D  
    * npm i babel-core -D
    * npm i babel-preset-es2015 -D
    * npm i babel-preset-es2015-loose -D 
    * npm i babel-preset-react -D
    * npm i html-webpack-plugin -D
2. webpack.config.js中如何配置loader  
    例如:module:{rules:[{test: '/.jsx$/',loader: 'babel-loader'}]}}
3. html-webpack-plugin包的作用  
   生成一个html页面，并且将打包后的js文件注入。
### 服务端渲染基础配置
1. 执行命令
  * npm i rimraf -D
  * npm i express -S
2. 服务端渲染的特点  
  服务端渲染打包配置文件为webpack.config.server.js  
  服务端没有DOM和html

    



