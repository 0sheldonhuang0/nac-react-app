# NAC用户端应用

## 5.1 Les schémas et procédures d'exploitation

 

## 5.2 Wireframe et maquettage

## 5.3 功能实现过程简述

### NAC React APP 的使用（Pour developpeur）

NAC React APP 使用了 Netlify 在线托管，访问网址为：[Toujours avec votre NAC (nac-app.netlify.app)](https://nac-app.netlify.app/)。作为用户，使用者可以直接登录上述网址，完成注册、下载桌面端，即可使用。作为开发者，本项目的源代码使用 Github 托管，使用者可以前往 [0sheldonhuang0/nac-react-app (github.com)](https://github.com/0sheldonhuang0/nac-react-app) 进行克隆或者下载。本节主要针对开发者应该如何使用本代码。

安装 node.js

它是一个 exe 文件，直接从官网下载下来傻瓜安装即可。安装完成后打开 cmd 安装create-react-app：

npm i -g create-react-app

 

 

### 使用 React.js 制作Web App



![reactjs核心特性](file:///C:/Users/sheld/AppData/Local/Temp/msohtmlclip1/01/clip_image002.jpg)

react是**由** Facebook 推出的一个用来构建用户界面的 JavaScript 库**，**主要用于构建UI**。**React 拥有较高的性能，代码逻辑**较为**简单。React 擅长处理组件化的页面，在页面上搭组件的形式有点像搭积木一样，其最主要的特点如下所示：

 

虚拟 DOM

在 DOM 树的状态需要发生变化时，虚拟 DOM 会将同一地方前后的 DOM 树进行对比，如果两个 DOM 树存在不一样的地方，那么 React 仅仅会针对这些不一样的区域来进行响应的 DOM 修改，从而实现最高效的 DOM 操作和渲染。

React 只针对需要修改的地方来做新的渲染，而非重新渲染整个 DOM 树，效率变得高。

组件

React核心的思想是将页面中的一个区域或者元素看做一个组件 component，组件可以包含html、css、js、image等元素，是它们的集合。它们可封装起来，组成可以复用的 UI 模块。

想用组件的时候直接调出来即可整体使用，避免重复写代码。然后可以把这些组件层层嵌套起来使用，组件间也会存在依赖关系，React 组件由以下一些特征：

（1）可组合（Composable）：一个组件易于和其它组件一起使用，或者嵌套在另一个组件内部，一个复杂的 UI 可以拆分成多个简单的 UI 组件。

（2）可重用（Reusable）：每个组件都是具有独立功能的，它可以被重复使用在多个场景中。

（3）可维护（Maintainable）：每个小的组件仅仅包含自身的逻辑，更容易被理解和维护；

JSX

JSX是JavaScript XML的缩写，它是一个JavaScript语法扩展，它是ReactJS使用的类似XML或HTML的语法，该语法被处理成React框架的JavaScript调用。

### NAC React APP的结构

整个APP的结构如下：

 

整个APP使用到的第三方库如下所示：

 

 

### JavaScript 和 Firebase 的数据传输









参考资料

[React 有什么优势？这里有一份入门指南-InfoQ](https://www.infoq.cn/article/1psaynhrx6ljme9vldta)

 



 