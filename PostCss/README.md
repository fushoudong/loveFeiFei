****
    PostCSS、CSS架构、CSS新特性
****
## 1. PostCSS
### 1. 概念
```
    PostCSS 本身是一个功能比较单一的工具。它提供了一种方式用 JavaScript 代码来处理 CSS。利用PostCSS可以实现一些工程化的操作，如：自动添加浏览器前缀，代码合并，代码压缩等。
```
### 2. 安装
1. 安装node环境
2. 安装postCSS：npm install postcss-cli -g（全局安装）
3. -o(输出文件夹) -w(保持监听状态)：postcss src/demo.css -o dist/demo.css -w
4. postcss.config.js
### 3. 使用
```
    postcss使用步骤如下：
      1. 安装对应的插件cnpm i (插件名)
      2. 在postcss.config.js中导入插件
        const autoprefixer = require('autoprefixer');
        module.exports = {
            plugins: [
                autoprefixer:({browsers: ['>5%']})
            ]
        }
```
1. autoprefixer：设置后可以自动添加浏览器后缀
2. postcss-import：合并CSS
3. cssnano：压缩CSS
4. postcss-cssnext：处理CSS高级语法，对CSS进行降级
5. stylelint
6. postcss-sprites：合并雪碧图

## 2. CSS项目结构
首先要对CSS进行模块化处理，一个模块负责一类操作行为。可利用Sass或Less来实现。
```
    base:一些初始通用的CSS，如重置默认样式、动画、工具、打印
    components:用于构建页面的组件，如按钮、表单、表格、弹窗
    layout:布局页面之间不同的部分，如页眉、页脚、弹性布局、网格布局等。
    pages:放置页面之间不同的样式，如首页特殊样式、列表页特殊样式。
    themes:应用不同的主题样式时，如管理员，卖家，买家等。
    abstracts:变量、函数、响应式等辅助开发工具。
    vendors:第三方独立的CSS文件，如bootstrap、iconfont等。
```

## 3. CSS新特性
1. 自定义属性
```
    又称CSS变量，在现有的浏览器下都得到支持。
    定义与使用/计算/默认值/作用域
        :root {
            --r: red;
            --lg: #D3D3D3;
            --size: 20px;
        }
        .div {
            --r: #AA00A0;
            background-color: var(--r);
        }
        .box {
            /* --r: blue; */
            width: 100px;
            height: 100px;
            margin: 30px auto;
            border: 10px var(--lg) solid;
            background: var(--r);
            font-size: var(--size,30px);
            padding: calc(var(--size) / 10);
        }
```
2. shapes（设置文字环绕样式）
```
    shape-outside: 设置文字紧靠部分，默认为none
        none：默认
        margin-box：靠近margin属性
        border-box：靠近边框
        padding-box：靠近内边框
        content-box：靠近内容
    clip-path：设置坐标可以设置不同的形状circle()、polygon()多边形
    shape-margin：距离margin的距离
    .in {
        width: 100px;
        height: 100px;
        border: 10px black solid;
        padding: 10px;
        /* border-radius: 50%; */
        background: gray;
        margin: 10px;
        float: left;
        shape-outside: polygon(0 0,0 100px,100px 100px);
        clip-path: polygon(0 0,0 100px,100px 100px);
        shape-margin: 0px;
    }
```
3. 设置滚动条
```
    设置滚动条的样式。
    ::-webkit-scrollbar：设置滚动条最基本样式比如宽高等。
    ::-webkit-scrollbar-thumb：设置拖拽条样式等。
    ::-webkit-scrollbar-track：设置拖拽条的背景样式。
    .box {
        height: 2000px;
        border: 1px solid black;
    }
    html::-webkit-scrollbar {
        width: 10px;
    }
    html::-webkit-scrollbar-thumb {
        background: yellow;
    }
    html::-webkit-scrollbar-track {
        background: #d3d3d3;
        box-shadow: 0 0 1px inset;
    }
```
4. 设置滚动条拖拽
```
    设置滚动条拖拽的样式。
    scroll-snap-type:x mandatory(强制);//设置拖拽的对齐方式。
    scroll-snap-align: start/center/end;//强制滚动条左对齐/居中对齐/右对齐。
```
### CSS与JS结合：
1. 