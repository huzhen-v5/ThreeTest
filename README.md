three.js的demo学习之路<br>
学习demo的网站链接：http://www.webgl3d.cn/threejs/docs/index.html

# 环境
首先，你需要本机先安装node和cnpm <br>

步骤一：安装依赖<br>
```
cnpm i
```
步骤二：全局安装webpack
```
cnpm i webpack -g
cnpm i webpack-cli -g
```
步骤三：启动服务<br>
```
node app.js
```

# 起步

## 创建第一个场景
demo文件夹：firstScene <br>
demo访问链接：http://localhost:3002/firstScene/index.html<br>
学习链接：http://www.webgl3d.cn/threejs/docs/index.html#manual/zh/introduction/Creating-a-scene

## 通过模块来引入
先运行下面命令打包：<br>
```
cd modalImport
webpack --config webpack.config.js
```
demo文件夹：modalImport<br>
demo访问链接：http://localhost:3002/modalImport/index.html<br>
学习链接：http://www.webgl3d.cn/threejs/docs/index.html#manual/zh/introduction/Import-via-modules