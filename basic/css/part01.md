[toc]
****
<font size='5'>CSS学习整理</font>
****

### 1 CSS语法格式
```
    选择器: {
        属性1: value1;
        属性2: value2;
        ...
    }
    单位：{px——>像素、%——>百分比}
    注释：/* 注释内容 */
```

### 2 CSS使用方式
1. 内部样式(行内、行间样式)
```
    在<style>标签内添加的样式，可实现代码复用
    <style>
        选择器1 {
            属性1: value1;
            属性2: value2;
            ...
        }
        选择器1 {
            属性1: value1;
            属性2: value2;
            ...
        }
        ...
    </style>
```
2. 内联样式
```
    在html标签添加style属性实现
    <标记 style='属性1:value1;属性2:value2,...'>
```
3. 外部链接
```
    <link ref='stylesheet' href='css.css' type='text/css'>
    rel：引入外部资源的类型
    href：外部资源的地址
```
4. 外部导入
```
    <style>
        @import url(../css.css)
    </style>
```

### 3 CSS颜色表示
- 单词表示法
- 十六进制表示法
- RGB表示法

### 4 背景属性
- background-color：背景颜色
- background-image：背景图片
```
    background-image:url()//地址可以是绝对地址或者相对地址
```
- background-repeat：背景图片平铺方式
- - repeat-x：水平重复
- - repeat-y：垂直重复
- - no-repeat：不重复
- - repeat：默认
- background-size：背景图片大小
- background-position：背景图片的位置
```
    background-position:x,y//右下[数字|单词]
    x : left、center、right;
    y : top、center、bottom;
```
- background-attachment：背景图片随滚动条移动方式
- - scroll：默认值(背景位置按照当前元素进行偏移)
- - fixed：固定(背景位置按照浏览器进行偏移)

### 5 边框样式
- border-width：边框宽度
- border-color：边框颜色
- border-style：边框样式
- - solid：实线
- - dashed：虚线
- - dotted：点虚线
- - double：双实线
- border-top/border-right/border-bottom/border-left：单独边设置样式 <br>
CSS边框实现三角形
```
    实现原理：使其中三条边框的背景颜色为透明，内部块状元素宽高属性为0
    div{
        width: 0px;
        height: 0px;
        border-top: 30px transparent solid;
        border-left: 30px green solid;
        border-bottom: 30px transparent solid;
        border-right: 30px transparent solid;
    }
```

### 文字样式
- font-family：字体类型(英文、中文)
```
    衬线体：有棱角(宋体)
    非衬线体：字体相对平滑，扁平化设计(微软雅黑)
    注意点：
        1. 多个字体类型的设置目的(针对不同计算机多个选择项，从前往后识别)
        2. 引号的添加的目的(如果字体名称中间存在空格，必须使用引号)
        3. 英文字体类型不能应用于中文，中文字体类型可以在英文产生效果
        
```
- font-size : 字体大小
```
    默认 : 16px
    写法 : number(px) | 单词 ( small large medium ... 不推荐使用)
    推荐字体的大小为偶数(对齐方便)
```
- font-weight : 字体粗细
```
    模式： 正常( normal )   加粗 ( bold )
    写法：单词(normal、bold)   |  number ( 100 200 .....  900 , 100到500都是正常的，600都900都是加粗的 )  (实际上只有两种显示效果)
```
- color：字体颜色
- font-style : 字体样式
```
    模式： 正常 ( normal )   斜体 ( italic )
    写法：单词 (  normal 、 italic )
    注：oblique也是表示斜体，用的比较少，一般了解即可。
    区别：
        1.italic 带有倾斜属性的字体的才可以设置倾斜操作。
        2.oblique 没有倾斜属性的字体也可以设置倾斜操作。
```

### CSS段落样式
- text-decoration：文本装饰
- - 下划线 : underline
- - 删除线 :line-through
- - 上划线 : overline
- - 不添加任何装饰 : none
- - 注：添加多个文本修饰：line-through underline overline
    
- text-transform：文本大小写 （ 针对英文段落 ）
- - 小写：lowercase
- - 大写：uppercase
- - 只针对首字母大写：capitalize(单词内部有大小写无效)
    
- text-indent : 文本缩进
```
    首行缩进
    em单位：相对单位，1em永远都是跟字体大小相同
```

- text-align : 文本对齐方式
- - center：居中对齐
- - left：左对齐
- - right：右对齐
- - justify：两端对齐
- line-height : 定义行高
```
    什么是行高，一行文字的高度，上边距和下边距的等价关系。
    默认行高：不是固定值，而是变化的。根据当前字体的大小再不断的变化。
    取值：1. number( px )   |  scale ( 比例值 , 跟文字大小成比例的 )
```

- letter-spacing : 字之间的间距
- word-spacing : 词之间的间距  ( 针对英文段落的 )

英文和数字不自动折行的问题：(单词或者数字过长的情况下 )
1. word-break : break-all; (非常强烈的折行)
2. word-wrap : break-word;(不是那么强烈的折行 ，会产生一些空白区域)  

### CSS复合样式
- 单一样式：一个CSS属性控制一种样式
- 复合样式：一个CSS属性控制多种样式

eg:(复合写法通过空格实现)
- background(无需关系顺序)
```
    background: #FF0000 url() no-repeat center center;
```
- border(需要关心顺序)
```
    border: 1px black solid;
    border-right/left/top/bottom: 1px black solid;
```
- font (最小要有两个值[size:family])
```
    font: weight style size family;
    font: style weight size family;
    font: (style weight)/(weight style) size/line-height family;
```
如果混合写，要先写复合再写单一。

### CSS选择器
1. id选择器
```
    css:
        #elem{}
    html:
        # id='elem'
    注意：
        1.一个页面中，id是唯一的
        2.可以包含数字、字母、下划线，不可以以数字开头
        3.命名方式：驼峰式、下滑线式、短线式
        驼峰写法 : searchButton (小驼峰)  SearchButton (大驼峰) 
        短线写法：search-small-button
        下划线写法：search_small_button
```
2. class选择器
```
    css:
        .elem{}
    html:
        class="elem"
    注：
        1. class选择器是可以复用的。
        2. 可以添加多个class样式。(<div class="box content"></div>)
        3. 多个样式的时候，样式的优先级根据CSS决定，而不是class属性中的顺序。
        (如果定义box和content两个css，且box背景为red在前、content背景为green在后，无论class='box content'还是class='content box'，颜色始终为green，按照css定义顺序)
        4. 标签+类的写法(div.box{})
```

3. 标签选择器(TAG选择器)
```
    CSS:
        div{}          
    HTML:
        <div></div>
    使用的场景：
        1. 去掉某些标签的默认样式时
        2. 复杂的选择器中，如 层次选择器
```

4. 群组选择器(分组选择器)
```
    可以通过逗号的方式，给多个不同的选择器添加统一的CSS样式，来达到代码的复用。
    p,div,h1{background:red}
```

5. 通配选择器*(包含所有的标签)
```
    *{  } ->  div,ul,li,p,h1,h2....{}    
    注：尽量避免使用通配选择器，因为会给所有的标签添加样式，慎用。
    使用的场景：
        1. 去掉所有标签的默认样式时           
```
6. 层次选择器
```
    后代  M N { }：所有的都生效
    父子  M > N { }：只是直接后代生效(类选择器或者标签选择器更明显)
    兄弟  M ~ N { }  当前M下面的所有兄弟N标签(下面声明的)
    相邻  M + N { }  当前M下面相邻的N标签
```
7. 属性选择器
```
    M[attr] {}    
    = : 完全匹配(eg:div[class]:适用于所有带class的div标签)
    *= : 部分匹配(eg:div[class*='ha']:适用于所有class包含ha的div标签)
    ^= : 起始匹配(eg:div[class^='ha']:适用于所有class以ha开始的div标签)
    $= : 结束匹配(eg:div[class$='ha']:适用于所有class以ha结束的div标签)
    [][][] : 组合匹配(eg:div[class][id]:适用于包含class和id的div标签)
```
8. 伪类选择器
```
    M:伪类{}
    :link       访问前的样式    ( 只能添加给a标签 )
    :visited    访问后的样式    ( 只能添加给a标签 )
    :hover      鼠标移入时的样式  (可以添加给所有的标签)
    :active     鼠标按下时的样式  (可以添加给所有的标签)
    a标签的顺序：
        a:link->a:visited->a:hover->a:active(LVHA)
     注：
        一般的网站都只设置  
            a{}   ( link visited active )    a:hover{}

    :after、:before    通过伪类的方式给元素添加一段文本内容，使用content属性,可以实现对单独部分内容进行样式设置
    :checked、:disabled 、:focus 都是针对表单元素的   
```
9. 结构性伪类选择器
```
    nth-of-type()   nth-child()
    角标是从1开始的，1表示第一项，2表示第二项 | n值 表示从0到无穷大
    eg：
        nth-of-type(n)：全部设置    li:nth-of-type(n)
        nth-of-type(4)：第四个设置  li:nth-of-type(4)
        nth-of-type(2n)：偶数行设置 li:nth-of-type(2n)
    first-of-type：第一个设置
    last-of-type：最后一个设置
    only-of-type ：只有唯一才有效

    nth-of-type()和nth-child()之间的区别
        type : 类型
        child : 孩子
    eg:
        <ol>
            <li></li>
            <div> love </div>
            <li></li>
            <li></li>
            <div> love </div>
            <li></li>
            <li></li>
        </ol>
        对于上述例子：
            如果定义样式为li:nth-of-type(2n+1)[对li的奇数有效]
            如果定义为li:nth-child(2n+1)[奇数位置的li有效]

```

### CSS继承
```
    文字相关的样式可以被继承（文字属性、段落属性）
	布局相关的样式不能被继承 ( 默认是不能继承的，但是可以设置继承属性 inherit 值 )
    eg:
        {
            html:{
                <div>
                    <p>这是一个段落</p>
                </div>
            }
            css:{
                div{
                    width: 300px;
                    height: 300px;
                    border: 1px solid red;
                    color: red;     //可以继承
                    font-size: 30px;//可以继承
                }
                /*如果想继承前面的需要在p里面定义inherit即可*/
                p{
                    border: inherit;
                }
            }
        }
```
### CSS优先级
```
    1. 相同样式优先级
	    当设置相同样式时，后面的优先级较高，但不建议出现重复设置样式的情况。
    2. 内部样式与外部样式
	    内部样式与外部样式优先级相同，如果都设置了相同样式，那么后写的引入方式优先级高。
    3. 单一样式优先级
	    style行间 > id > class > tag > * > 继承

        注：style行间 权重 1000
            id       权重 100
            class    权重 10
            tag      权重 1
    4. !important
	    提升样式优先级，非规范方式，不建议使用。( 不能针对继承的属性进行优先级的提升 )
        #elem{color: red !important}
    5. 标签+类与单类
        标签+类 > 单类 
		
    6. 群组优先级
	    群组选择器与单一选择器的优先级相同，靠后写的优先级高。

    7. 层次优先级
        1. 权重比较
            ul li .box p input{}   1 + 1 + 10 + 1 + 1
            .hello span #elem{}    10 + 1 + 100

        2. 约分比较    
            ul li .box p input{}    li p input{}
            .hello span #elem{}      #elem{}
```
### CSS盒子模型
```
    组成 : content -> padding -> border -> margin
           物品        填充物     包装盒      盒子与盒子之间的间距

           content : 内容区域  width和height组成的

           padding : 内边距(内填充)
                只写一个值： 30px (上下左右)
                写两个值 : 30px 40px ( 上下、左右 )
                写四个值 : 30px 40px 50px 60px（上、右、下、左）

            单一样式只能写一个值：
                padding-left
                padding-right
                padding-top
                padding-bottom

            margin : 外边距(外填充)
                只写一个值： 30px (上下左右)
                写两个值 : 30px 40px ( 上下、左右 )
                写四个值 : 30px 40px 50px 60px（上、右、下、左）

            单一样式只能写一个值：
                margin-left
                margin-right
                margin-top
                margin-bottom
            注：
                1. 背景色填充到margin以内的区域 （不包括margin区域）    
                2. 文字在content区域添加。
                3. padding不能为负数，而margin可以为负数。

    box-sizing:
        盒尺寸，可以改变盒子模型的展示形态。
        默认值： content-box :  width、height -> content
        border-box : width、height -> content padding border
        使用的场景：    
            1. 不用再去计算一些值
            2. 解决一些100%的问题
        eg：
            CSS：
                .div{
                    width: 300px;
                    height: 300px;
                    border: 10px solid blue;
                    background-color: aquamarine;
                    padding: 20px;
                    box-sizing: content-box;
                }
                这时对外宽度为300+20*2+10*2=360px
                如果设置box-sizing:border-box，对外宽度300px;


    盒子模型的一些问题：
        1. margin叠加问题，出现在上下margin同时存在的时候。会取上下中值较大的作为叠加的值。
        解决：
            1. BFC规范；
            2. 只设置单个
        2. margin传递问题，出现在嵌套的结构中，只是针对margin-top的问题。       
        解决：    
            1. BEC规范
            2. 给父元素设置边框
            3. 父元素设置padding-top

    扩展：
        1. margin左右自适应是可以的 ，但是上下自适应是不行的。( 如果想实现上下自适应的话，需要在第二大部分来进行学习 )
        2. width、height不设置的时候，对盒子模型的影响，会自动去计算容器的大小，节省代码。
            示例：
                codes{
                 HTML:
                    <div class="out">
                        <div class="in">
                            嵌套盒子
                        </div>
                    </div>
                 CSS:
                    .out{
                        width: 300px;
                        height: 300px;
                        background-color: yellow;
                    }
                    .in {
                        width: 100%;
                        height: 100px;
                        background-color: aqua;
                        border-left: 10px solid red;
                        padding-left: 30px;
                        box-sizing: border-box;
                        /*
                            1.如果不设置box-sizing:border-box会出现溢出
                            2.如果无box-sizing和width:100%会和设置后出现相同效果，因此可以节省代码
                        */
                    }
                }
```
### 标签分类？
```
    按类型
        block : div、p、ul、li、h1 ...(块级)
            1. 独占一行
            2. 支持所有样式
            3. 不写宽的时候，跟父元素的宽相同
            4. 所占区域是一个矩形

        inline : span 、a、em、strong、img ...(内联)
            1. 挨在一起的
            2. 有些样式不支持，例如：width、height、margin、padding
            3. 不写宽的时候，宽度由内容决定
            4. 所占的区域不一定是矩形
            5. 内联标签之间会有空隙，原因：换行产生的
            6. img支持宽高

        inline-block : input、select ...
            1. 挨在一起，但是支持宽高

        注：布局一般用块标签，修饰文本一般用内联标签

    按内容
        Flow：流内容
        Metadata：元数据
        Sectioning：分区
        Heading：标题
        Phrasing：措辞
        Embedded：嵌入的
        Interactive：互动的
        （详情：https://www.w3.org/TR/html5/dom.html）

    按显示
	    替换元素 :浏览器根据元素的标签和属性，来决定元素的具体显示内容。
            img、input ...
	    非替换元素 : 将内容直接告诉浏览器，将其显示出来。
            div、h1、p ...
```
### 显示框类型
```
    display: block inline inline-block none ...
        1. block：块状
        2. inline：内联
        3. inline-block
        4. none(隐藏，不占空间)


    区别：
    display:none   不占空间的隐藏
    visibility: hidden 占空间的隐藏
```
### 标签嵌套规范
```
    1. 按照规范嵌套的：
        ul、li
        dl、dt、dd
        table、tr、td

    2. 块能够嵌套内联
        <div>
            <span></span>
            <a href="#"></a>
        </div> 
    3. 块嵌套块
        <div>
            <div></div>
        </div>
        特殊：
            错误的写法：
            <p>
                <div></div>
            </p>

    4. 内联是不能嵌套块
        错误的写法：
        <span>
            <div></div>
        </span>

        特殊：
        正确的写法：
        <a href="#">
            <div></div>
        </a>//区域添加链接
```
### 溢出隐藏
```
    overflow : 
        visible : 默认
        hidden
        scroll
        auto
        x轴、y轴
            overflow-x、overflow-y针对两个轴分别设置
```
### 透明度与手势？
```
    opacity : 0(透明) ~ 1(不透明)
        0.5(半透明)
    
        注：占空间、所有的子内容也会透明

    rgba() : 0 ~ 1
        rgba(0,255,255,[0~1])
        注：可以让指定的样式透明，而不影响其他样式


    cursor : 手势
        default : 默认箭头
        要实现自定义手势：
            准备图片： .cur 、 .ico 
            cursor : url(./img/cursor.ico),auto;
```
### 最大、最小宽高？
```
    min-width、min-height
    max-width、max-height

    %单位：换算 -> 已父容器的大小进行换算的

    一个容器怎么适应屏幕的高 : 容器加height:100%;   body:100%;  html:100%;

        html,body{ height:100%;}
        .contrainer{ height:100%;}
```
### CSS默认样式
```
    没有默认样式的： div、span

    有默认样式的：

        body ->  marign : 8px
        h1 ->  margin : 上下 21.440px
               font-weight : bold
        p  ->  margin : 上下 16px
        ul ->  margin : 上下 16px  padding : 左 40px
               默认点：list-style : disc
        a ->   text-decoration: underline;


css reset : 
    *{ margin:0; padding:0;}
        优点：不用考虑哪些标签有默认的margin和padding
        缺点：稍微的影响性能
        body,p,h1,ul{ margin:0; padding:0;}

    ul{ list-style : none;}    

    a{ text-decoration: none; color:#999;}

    img{ dispaly:block}
        问题的现象：图片跟容器底部有一些空隙。
            内联元素的对齐方式是按照文字基线对齐的，而不是文字底线对齐的。
                vertical-align: baseline;  基线对齐方式，默认值
                img{ vertical-align:bottom;} 解决方式是推荐的

    写具体页面的时候或一个布局效果的时候：
        1. 写结构
        2. css重置样式
        3. 写具体样式
 ```               
