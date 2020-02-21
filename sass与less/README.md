****
    Sass与Less的使用
****
### 1. 概念
Sass和Less都属于CSS预处理器，CSS 预处理器定义了一种新的语言，其基本思想是，用一种专门的编程语言，为 CSS 增加了一些编程的特性，如：变量、语句、函数、继承等概念。将 CSS 作为目标生成文件，然后开发者就只要使用这种语言进行CSS的编码工作。
### 2. 使用
1. Less
```
    官网地址：http://lesscss.org/
    VSCode插件：Easy Less
```
2. sass
```
    官网地址：https://sass-lang.com/
    VSCode插件：Easy Sass
```
### 3. 语法
1. 注释
```
    Less与Sass相同：
    //：单行注释(不会渲染到css文件中)
    /**/：多行注释(会渲染到css文件中)
```
2. 变量与插值
```
    less:
        定义：@paramsName: value;
        作为变量值使用：width: @number;
        作为属性: @{key}: auto;
        eg:
            @number: 3px;
            @key: margin;
            @i :1;
            .div@{i}{
                width: @number;
                @{key}: auto;
            } 
    sass:
        定义：$paramsName: value;
        作为变量值使用：width: $number;
        作为属性: #{$key}: auto;
        eg:
            $number: 3px;
            $key: margin;
            $i :1;
            .div#{$i}{
                width: $number;
                #{$key}: auto;
            }
```
3. 作用域
```
    less：如果在样式里面重新对变量赋值，无论在调用前后，重新赋值均生效
    sass：如果在样式里面重新对变量赋值，在调用前，重新赋值生效；调用后重新赋值不生效
```
4. 选择器嵌套与伪类嵌套
```
    选择器嵌套Sass与Less一样
    eg：
        ul {
            list-style: none;
            li {
                display: block;
                margin: 0px;
                div {
                    width: @number;
                }
            }
    伪类嵌套：(sass与less一致)
    eg：
        ul {
            &:hover{(如果不添加&，ul与:之间会存在空格)
            color: red;
            }
        }
}
```
5. 属性嵌套（用于伪类嵌套）
```
    可在伪类嵌套时添加属性(Less不支持)
    eg：
        &:hover {
            color: red;
            font: {
                weight: bold;
                size: 30px;
                family: '宋体';
            }
        }
```
6. 运算，单位，转义，颜色
```
  less和sass中还支持四则运算
   加减时：
    如果单位一致Less与Sass用法一致
        @param: 20px;

        .box_@{i}{
            width: 100px + @param;
        }
    如果单位不一致,Sass不支持
    对于Less取决于前面的单位
   乘法：
    可用于颜色、像素等，用法一致
   除法：
    Less对于支持/的属性，识别为转义字符，否则视为除法计算
    eg
        .box_@{i}{
            width: 100rem * @i;
            color: #222222 * @i;
            font: 23px / 1.5;       ——> font: 23px / 1.5;
            @{key}: 7px / 2;        ——> margin: 3.5px;
        }
    这种情况下，如果要转为转义，可使用~""，如：
    .box_@{i}{
        width: 100rem * @i;
        color: #222222 * @i;
        font: 23px / 1.5;       ——> font: 23px / 1.5;
        @{key}: ~"7px / 2";     ——> margin: 7px / 2;
    }
    sass统一识别为转义字符：
    .box_#{$i}{
        width: 100px * $i;
        color: #22FF82 * $i;
        font: 23px / 2;         ——> font: 23px / 2;
        margin:  23px / 2;      ——> font: 23px / 2;
    }
    如果转为除法：可以在属性取值添加括号()
        font: (23px / 2);         ——> font: 11.5px;
```
7. 函数(内置与自定义)
```
    Less与Sass还支持函数，二者支持内容有些不同，需考查找文档区分
    less    height: round(9.8)px;
    sass    height: random() px;
    自定义函数
    Less
        .color (@color){
            color: @color;
        }
        .box2 {
            .color(blue);
        }
    Sass：
     结构
      @function sum($a, $b){
          @return $a + $b;
      }
      .box {
          width: sum(12,13)px;  ——>width: 25 px;
      }
```
8. 混入、命名空间、继承
```
    混入:可以使用已经定义好的样式
    less：
        .show {<!--这时会在css中生成show -->
            display: inline;
        }
        .box6 {
            display: block;
            .show;
        }

        .show() {<!--这时不会在css中生成show -->
            display: inline;
        }
        .box6 {
            .show();
        }
    Sass:
    @mixin show {
        display: inline;
    }
    .box11 {
        @include show();
    }
    命名空间（less支持）（新定义一个空间重新命名样式）：
        .show {
            display:block;
        }
        #nm {
            .show{display: inline-block}
        }
        .box7{#nm.show;}
    继承：样式分组
      less：
        .line {display:inline-block}
        .box7 {&:extend(.line);}
        .box8 {&:extend(.line);}
      Sass:
        .line {display: inline;}
        .box7 {@extend .line;}
      生成效果：
        .line, .box7, .box8 {
            display: inline;
        }
```
9. 合并与媒体
```
    对于一个属性存在多个取值时使用，存在逗号或者空格隔开方式。
    Less:
        逗号：.box10 {background+: url(../css3/img/1.png);background+: url(../css3/img/2.png);}
        ——>
        .box10 {
            background: url(../css3/img/1.png), url(../css3/img/2.png);
        }

        空格：
        .box11 {
            transform+_: scale(12);
            transform+_: rotate(30deg);
        }
        ——>
        .box11 {
            transform: scale(12) rotate(30deg);
        }
    Sass:
        逗号：
            $background:(a: url(1),b: url(2));
            .box10 {
                background: map-values($background);
            }
        空格：
            $transform: (a: scale(2),b: rotate(30deg));
            .box11 {
                transform: zip(map-values($transform)...);
            }
    响应式布局：
    Less：
        .box12 {
            width: 100px;
            @media all and(min-width:600px){
                width: 500px;
            }
            @media all and(min-width:1200px){
                width: 1000px;
            }
        }
    Sass：
        同上
```
10. 条件、循环
```
    条件：
        Less：
            @if: 2;
                .get(@cn) when (@cn > 1){
                    width: 100px + @if;
                }
                .box-if {
                    .get(@if)
            }
        Sass：
            $if :3px;
            .box {
                @if($if >3){
                    width: 100px + $if;
                }
                @else {
                    width: 100px - $if;
                }
            }
    循环：
        Less：
            @count : 0;
            .get2(@cn) when (@cn < 5){
                .get2(@cn+1);
                .box-@{cn}{
                    width: 100px + @cn;
                }
            }
.get2(@count);
        Sass:
            @for $if from 0 to 5 {
                .box11_#{$if} {
                    width: 100px+$if;
                }
            }

```
11. 导入
```
    @import '目录'
```