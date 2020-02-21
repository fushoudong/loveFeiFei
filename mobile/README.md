****
    本部分主要是html5与css3在移动端布局上的使用
    1. flex弹性布局
    2. grid网格布局
    3. viewport视图
    4. 移动端流式布局
    5. 响应式布局
****

***
        随着移动互联网的发展，对于网页布局的要求越来越高，传统的布局方案对实现特殊布局不方便，比如垂直居中。
        2009年，w3c提出一种新的解决方案——flex布局，可以简便、完整、相应式地实现各种页面布局。
***

### 1.flex简介(display:flex;)
    display:flex;可以很好地设置垂直水平居中
<table border=1>
    <caption>flex语法</caption>
    <tr>
        <th width='200'>作用在flex容器上</th>
        <th width='200'>作用在flex子项上</th>
    </tr>
    <tr>
        <td align='center'>flex-direction</td>
        <td align='center'>order</td>
    </tr>
    <tr>
        <td align='center'>flex-wrap</td>
        <td align='center'>flex-grow</td>
    </tr>
    <tr>
        <td align='center'>flex-flow</td>
        <td align='center'>flex-shrink</td>
    </tr>
    <tr>
        <td align='center'>justify-content</td>
        <td align='center'>flex-basis</td>
    </tr>
    <tr>
        <td align='center'>align-items</td>
        <td align='center'>flex</td>
    </tr>
    <tr>
        <td align='center'>align-content</td>
        <td align='center'>align-self</td>
    </tr>
</table>

1. flex-direction

    控制子项整体布局方向，是从左往右还是从右往左，是从下向上还是从上向下
```
    row：水平文档流，方向从左往右(默认，起始位置在左上角)
    row-reverse：水平文档流，从右往左(第一个在最右边)
    column：垂直文档流，从上往下
    column-reverse：垂直文档流，从下往上(第一个在右下角)
```
2. flex-wrap

    控制子项整体是单行显示还是多行显示
```
    1. wrap:宽度不足换行(两行之间存在间距)
    2. nowrap:不换行(默认，如果子元素宽度大于父，会进行适配，但是取决于子元素内容，如果内容过多也会溢出)
    3. wrap-reverse：宽度不足换行，但是从下往上面开始，也就是原本换行在下面的子项跑到上面(如果两行，第一行在最下面)
```
3. flex-flow
    
    flex-direction与flex-wrap的组合写法，前面为direction，后面为wrap，中间空格隔开

4. justify-content

    属性决定了主轴方向上子项的对齐和分布方式
```
    flex-start：起始位置对齐
    flex-end：结束位置对齐
    center：居中对齐
    space-between：表现为两端对齐，两边元素紧靠边框，中间等价分割空白域
    space-around：每个flex子项两侧都环绕互不干扰的等宽的空白间距
    space-evenly：也就是视觉上，每个flex子项两侧空白间距完全相等
```
5. align-items

    flex子项们相对于flex容器在侧轴方向上的对齐方式
```
    stretch：默认子项拉伸
    flex-start：容器顶部对齐
    center：容器居中对齐
    flex-end：容器底部对齐
```
6. align-content

    和justify-content是相似且对立的属性，多行有效
```
    flex-start：起始位置对齐
    flex-end：结束位置对齐
    center：居中对齐
    space-between：表现为两端对齐，两边元素紧靠边框，中间等价分割空白域
    space-around：每个flex子项两侧都环绕互不干扰的等宽的空白间距
    space-evenly：也就是视觉上，每个flex子项两侧空白间距完全相等
```
7. 子项属性
```
    order：可以通过设置order改变某一个flex子项的排序位置，所有flex子项的默认order属性值是0；
    flex-grow：扩展的就是flex子项所占据的宽度，扩展所侵占的空间就是除去元素外的剩余的空白间隙。默认值为0，侵占量(剩余量*param)；
    flex-shrink：flex-shrink主要处理当flex容器空间不足时候，单个元素的收缩比例。默认值是1；
    flex-basis：定义了在分配剩余空间之前元素的默认大小。(分配剩余空间)；
    flex：flex-grow，flex-shrink和flex-basis的缩写；
    align-self：单独控制某一个flex子项的垂直对齐方式。
```

### 2.grid简介(display:grid;)
1. grid-template-colums与grid-template-rows
```
    设置网格布局的行与列。
    grid-template-colums: 像素(百分比/auto) ...;
    grid-template-column: repeat(3,1fr)[3个，各占1个单位比例]
```
2. grid-template-areas与grid-area
```
    区域划分：
    grid-tempalte-areas: "a1 a1 a1" "a2 a2 a3" "a2 a2 a3";
    grid-area: a1;
```
3. grid-tempalte
```
    综合写法：
    比如综合1和2
    grid-template:
    "a1 a1 a1" 1fr
    "a2 a2 a3" 1fr
    "a2 a2 a3" 1fr
    /1fr 1fr 1fr;
```
4. grid-column-gap和grid-row-gap
```
    grid-column-gap和grid-row-gap属性用来定义网格中网格间隙的尺寸。
```
5. justify-items与align-items
```
    justify-items指定了网格元素的水平呈现方式，是水平拉伸显示，还是左中右对齐
    align-items指定了网格元素的垂直呈现方式，是垂直拉伸显示，还是上中下对齐
    place-items可以让align-items和justify-items属性写在单个声明中
    取值：
        stretch：水平或垂直填充
        start：左侧或者顶部对齐
        end：右侧或者底部对齐
        center：水平垂直居中对齐
```
6. justify-content与align-content
```
    justify-content指定了网格元素的水平分布方式
    align-content指定了网格元素的垂直分布方式。
    取值：
        stretch：水平或垂直填充
        start：左侧或者顶部对齐
        end：右侧或者底部对齐
        center：垂直水平居中对齐
        space-between：两端对齐
        space-around：享有单独不重叠空白空间
        space-evenly：均分空白空间
```
7. 子项属性
```
    grid-column-start：水平占据起始位置
    grid-column-end：水平占据结束位置
    grid-row-start：垂直占据起始位置
    grid-row-end：垂直占据结束位置
    grid-column：水平占据(中间有个/)
    grid-row：垂直占据(中间有个/)
    grid-area：占据区域(水平开始/水平结束/垂直开始/垂直结束)
    justify-self：单个区域水平对齐方式
    aligin-self：单个区域垂直对齐方式
    place-self：
```

### 3. viewport
1. viewport
```
    viewport是h5移动端布局常用的，设置在meta标签里面,name指定viewport值，content属性进行视口配置
    在viewport中有两种视口，分别表示为； 
    visual viewport（可视视口）：固定大小与屏幕大小相同
    layout viewport（布局视口）：默认为980像素，可以通过document.documentElement.clientWidth
    取值：
        width：设置layout viewport宽度特定值，device-width表示设备宽
        height：设置layout viewport高度值，一般不用设置
        initial-scale：设置页面初始缩放
        minimum-scale：页面最小缩放
        maximum-scale：设置页面最大缩放
        user-scalable：设置页面是否进行缩放
```
2. 移动端适配方案
```
    1.百分比布局，又称流式布局。代表网站：优酷、百度、天猫、腾讯。
    2.等比缩放布局，又称rem布局。代表网站：网易、爱奇艺、淘宝、美团。
    特点：
        1. 流式布局
          1) 文字流式
          2) 控件弹性
          3) 图片等比缩放
        2. rem布局
          1) em是一个相对单位，1em相当于当前元素或者父元素font-size的值。
          2) rem是一个相对单位，1rem等于根元素(body)等于根元素的font-size值。
          3) vw / vh：把屏幕分为一百份，1vw相当于屏幕宽的1%。
        设置方式：
          let fontsize = document.documentElement.clientWidth;
          document.documentElement.style.fontSize = fontsize;
```