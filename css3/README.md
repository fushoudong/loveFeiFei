****
> 此处显示的是html+css动画部分内容
CSS3附加
****

### 1. 浏览器前缀？
```
    CSS3去兼容不同的浏览器，针对旧的浏览器做兼容，新浏览器基本不需要添加前缀。
```

<table width='390' border='1' align='center'>
    <caption>浏览器前缀(面试可能用)</caption>
    <thead>
        <tr>
            <th>
                浏览器
            </th>
            <th>
                内核
            </th>
            <th>
                前缀
            </th>
        </tr>
    </thead>
        <tr>
            <td>IE</td>
            <td>Trident</td>
            <td>-ms-</td>
        </tr>
        <tr>
            <td>Firefox</td>
            <td>Gecko</td>
            <td>-moz-</td>
        </tr>
        <tr>
            <td>Opera</td>
            <td>Presto</td>
            <td>-o-</td>
        </tr>
        <tr>
            <td>Chrome|safari</td>
            <td>Webkit</td>
            <td>-webkit-</td>
        </tr>
        <tr>
            <td>Opera、Chrome</td>
            <td>Blink</td>
            <td></td>
        </tr>
    <tobody>
    </tobody>
    <tfoot>
    </tfoot>
</table>


###　2. transition 过渡？
```
    transition-property  :  规定设置过渡效果的CSS属性的名称。
    transition-duration  :  规定完成过渡效果需要多少秒或毫秒。
    transition-delay  :  定义过渡效果何时开始。  ( 延迟(数值为正数)，也可以提前(数值为负数) )
    transition-timing-function  :  规定速度效果的速度曲线。
    transition-timing-function的取值:
      1.linear：线性(匀速)
      2.ease(默认值)：逐渐减速
      3.ease-in：逐渐加速
      4.ease-out：逐渐减速(减速较慢)
      5.ease-in-out：先加速后减速
    注：不要加到hover上。
```

### 3. transform变形？
```
    translate : 位移(x,y)
        translateX
        translateY
        translateZ   ( 3d )
    
    scale : 缩放 （值是一个比例值，正常大小就是1，会已当前元素中心点进行缩放）(x,y)
        scaleX
        scaleY
        scaleZ   (3d)

    rotate : 旋转 （ 旋转的值，单位是角度 deg ）
        rotateX  (3d)
        rotateY  (3d)
        rotateZ  ( 和rotate是等级关系，那正值按顺时针旋转，负值按逆时针旋转 )

    skew : 斜切
        skewX : 单位也是角度，正值向右倾斜，负值向左倾斜。
        skewY

    transform的注意事项：
        1. 变形操作不会影响到其他元素。
        2. 变形操作只能添加给块元素，但是不能添加给内联元素。
        3. 复合写法，可以同时添加多个变形操作。
            执行是有顺序的，先执行后面的操作，再执行前面的操作。
            translate会受到 rotate、scale、skew的影响
        4. transform-origin : 基点的位置(写在要变化的div)
            x y z(3d)
```

### 4. animation 动画？
```
    animation-name : 设置动画的名字 (自定义的)
    animation-duration : 动画的持续时间
    animation-delay : 动画的延迟时间
    animation-iteration-count :  动画的重复次数 ，默认值就是1 ，infinite无限次数
    animation-timing-function : 动画的运动形式

    注：
        1. 运动结束后，默认情况下会停留在起始位置。
        2. @keyframes :  from -> 0%   ,  to ->  100%

    animation-fill-mode : 规定动画播放之前或之后，其动画效果是否可见。
     	none (默认值) : 在运动结束之后回到初始位置，在延迟的情况下，让0%在延迟后生效
 		backwards  :  在延迟的情况下，让0%在延迟前生效
	 	forwards  :  在运动结束的之后，停到结束位置
	 	both  :  backwards和forwards同时生效

    animation-direction  :  属性定义是否应该轮流反向播放动画。
	 	alternate  :  一次正向(0%~100%)，一次反向(100%~0%)
	 	reverse : 永远都是反向 , 从100%~0%
	 	normal (默认值) : 永远都是正向 , 从0%~100%
```

### 5. animate.css？
```
    一款强大的预设css3动画库。
      	官网地址：https://daneden.github.io/animate.css/
     		
    基本使用：
	    animated : 基类(基础的样式，每个动画效果都需要加)
	    infinite : 动画的无限次数
```

### 6. 3D操作？
```
    transform:
       rotateX() : 正值向上翻转
       rotateY() : 正值向右翻转
       translateZ() : 正值向前，负值向后
       scaleZ() : 立体元素的厚度

    3d写法
	    scale3d() : 三个值 x y z
	    translate3d() : 三个值 x y z
	    rotate3d() : 四个值 0|1(x轴是否添加旋转角度)  0|1(y轴是否添加旋转角度)  0|1(z轴是否添加旋转角度)  deg


    perspective（景深）: 离屏幕多远的距离去观察元素，值越大幅度越小。

    perspective-origin : 景深-基点位置，观察元素的角度。

    transform-origin: center center -50px;   （Z轴只能写数值，不能写单词）

    transform-style : 3D空间
	    flat  (默认值2d)、preserve-3d   (3d，产生一个三维空间)

    backface-visibility : 背面隐藏//设置在隐藏的布局中
	    hidden、visible (默认值)
```

### 7. CSS3提供了扩展背景样式？
```
    background-size : 背景图的尺寸大小
	    cover : 覆盖（填满）
	    contain : 包含 (完全显示，取决于长的一部分，可能会存在未填充部分)
    background-origin : 背景图的填充位置
	    padding-box (默认)
	    border-box
	    content-box
    background-clip : 背景图的裁切方式
	    padding-box 
	    border-box (默认) 
	    content-box 

    注：复合样式的时候，第一个是位置，第二个是裁切
    background: url() no-repeat content-box(位置) content-box(裁切);
```

### 8. CSS3渐变？
```
    1. 线性渐变 -> linear-gradient是值，需要添加到background-image属性上

    注：渐变的0度是在页面在下边，正值会按照顺时针旋转，负值按逆时针旋转。

    2. 径向渐变 -> radial-gradient 
```

### 9. 字体图标？

```
    font-face是CSS3中的一个模块，他主要是把自己定义的Web字体嵌入到你的网页中。
 
      好处：
      	1.可以非常方便的改变大小和颜色
                font-size    color
      	2.放大后不会失真
      	3.减少请求次数和提高加载速度
      	4.简化网页布局
        5.减少设计师和前端工程师的工作量
	    6.可使用计算机没有提供的字体

    使用：
        @font-face语法

            像.woff等文件都是做兼容平台处理的, mac、linux等。
        阿里巴巴矢量图标库:
            https://www.iconfont.cn/
        1.使用黑色图标
          1) 下载文件
          2) 在head里面添加链接引入css
            <link ref='stylesheet' href=''>
          3) 使用样式
            <span class='iconfont icon-XX></span>
        2.使用彩色图标
          1) 下载文件
          2) 在head里面添加链接引入css
            <link ref='stylesheet' href=''/>
            <script src=''/>
          3) 在style中设置样式
            icon {
                width: 1em;
                height: 1em;
                vertical-align: -0.15em;
                fill: currentColor;
                overflow: hidden;
            }
          4) 使用图标
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xxx(修改为指定图标)"></use>
            </svg>
```

### 10. text-shadow:
```
    文字的阴影
    x y blur(模糊值) color 

    注：阴影的默认颜色是跟文字样色相同
    注：通过逗号的方式进行分割，可以设置多阴影
      eg:
        text-shadow: 2px -2px 5px orange ,4px -4px 10px yellow;
```

### 11. box-shadow：
```
	x
	y
	blur
	spread(阴影扩散)
	color
	inset(内阴影)
	多阴影

    注：盒子阴影的默认样色是黑色。
    注：默认就是外阴影，如果设置outset不起作用，可选的值只有inset表示内阴影。
      eg:
        box-shadow: 
```

### 12. mask 遮罩
```
    url
	repeat
	x
	y
	w
	h
	多遮罩

    注：mask目前还没有标准化，所以需要添加浏览器前缀。
    chrome需要使用-webkit-mask设置

    注：默认是x、y都平铺。
```

### 13. box-reflect
```
	above   上
	below   下
	left    左
	right   右
	距离
	遮罩 | 渐变 

    渐变：只是针对透明度的渐变，不能支持颜色的渐变。
      附：
        此处的透明度要使用rgba显示方式:{-webkit-box-reflect: below 1px linear-gradient(rgba(255,0,0,0.1),rgba(255,255,255,1))}
```

### 14.   blur模糊
```
    使用：filter: blur (10px)
      设置为像素值，值越大，模糊越明显
```

### 15. calc计算
```
    四则运算
        主要实现百分比与像素之间的运算
        width: clac(100% - 100px)
        注意书写时百分比后面与像素值前面的空格
```
### 16. 分栏布局
```
      column-count : 分栏的个数
      column-width : 分栏的宽度 
      column-gap : 分栏的间距   
      column-rule : 分栏的边线
      column-span : 合并分栏

    注：column-width和column-count不要一起去设置。
```

### 17. 伪元素：
```
    伪元素本质上是创建了一个有内容的虚拟容器。这个容器不包含任何DOM元素，但是可以包含内容。另外，开发者还可以为伪元素定制样式。
    :: selection：设定在虚拟容器上，指定选中文本的样式
    :: first-line   /    first-letter
    :: before     /     after 
    …	
    关键：弥补dom元素的不足以及创建虚拟元素
```

### 18. CSS  Hack分类
```
	1. CSS属性前缀法
        .elem{ _background:red; }
        示例：
          .elem {
              background: red;
              _background: blue;
          }

	2. 选择器前缀法

        *html .elem{ }

	3. IE条件注释法

        IE10以上已经不支持注释法
```
1. 浏览器前缀
<table border='yes'>
    <caption>IE浏览器前缀</caption>
    <tr>
        <th width='100'>前缀标识</th>
        <th width='200'>兼容浏览器</th>
    </tr>
    <tr>
        <td align='center'>_</td>
        <td align='center'>IE6</td>
    </tr>
    <tr>
        <td align='center'>+ | *</td>
        <td align='center'>IE6、IE7</td>
    </tr>
    <tr>
        <td align='center'>\9</td>
        <td align='center'>IE6、IE7、IE8、IE9</td>
    </tr>
    <tr>
        <td align='center'>\0</td>
        <td align='center'>IE8、IE9、IE10、IE11</td>
    </tr>
</table>

2. 选择器前缀
<table border='yes'>
    <caption>IE选择器前缀</caption>
    <tr>
        <th width='100'>前缀标识</th>
        <th width='200'>兼容浏览器</th>
    </tr>
    <tr>
        <td align='center'>*html</td>
        <td align='center'>IE6</td>
    </tr>
    <tr>
        <td align='center'>*+html</td>
        <td align='center'>IE7</td>
    </tr>
    <tr>
        <td align='center'>:root</td>
        <td align='center'>IE9及以上</td>
    </tr>
</table>

### 19. IE低版本常见BUG
```
    1. 透明度(filter:alpha(opacity=50))
	2. 双边距(解决：_display:inline)(出现原因：float加边距)
	3. 最小高度
	4. 图片边框
```
- 渐进增强：针对低版本浏览器进行页面构建，保证最基本的功能后再针对高版本进行效果交互等改进与追加功能以达到更好的用户体验。
- 优雅降级：一开始就构建完整的功能，然后再针对低版本浏览器进行兼容性问题
### 20. 布局扩展
```
    1. 等高布局
        利用margin-bottom负值与padding-bottom配合实现。

    2. 三列布局，左右固定，中间自适应

        1. BFC方式 
        2. 定位
        3. 浮动 ( 双飞翼布局、圣杯布局 )
            margin负值

        4. flex弹性
```

