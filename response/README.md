*****
    响应式布局
*****
### 1. 响应式布局
1. 概念
```
    利用媒体查询，即media queries，可以对不同的媒体类型定义不同的样式，从而实现相应式布局。
    @media all and (条件) {
        样式
    }
```
2. 媒体类型
```
    all：用于所有设备
    print：用于打印机与打印预览
    screen：电脑屏幕、平板电脑、智能手机
    speech：屏幕阅读器等发声设备
```
3. 常见选项
```
    媒体类型
    and not
    min-width、max-width
    orientation:portrait、orientation:landscape
    <link>
    eg：
        <link rel="stylesheet" href='css.css' media='all and (min-width:1500px)'/>
```
4. 常见修改样式
```
    display
    float
    width
    注：响应式代码写到要适配的css后面
```

### 2.bootstrap框架(总结时补充)
1. bootstrap4-containers：
```
    1. class="container"：设置居中样式
    2. class="container-fluid"：占据全部视口的容器
    3. class="jumbotron"：设置屏幕
```