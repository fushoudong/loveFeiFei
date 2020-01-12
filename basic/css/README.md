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