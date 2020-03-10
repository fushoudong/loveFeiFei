****
    尚硅谷视频1-10
****
## 第一章 JavaScript简介
### 1.1 JavaScript简史
&emsp;JavaScript诞生于1995年，最初是为了处理互联网端的一些表单验证，目前已经不局限于表单验证，具备了与浏览器窗口交互的全部能力。

### 1.2 JavaScript实现
&emsp;一个完整的JavaScript实现应由以下三部分组成。
- ECMAScript（核心，标准）
- BOM（浏览器对象模型）
- DOM（文档对象模型）

#### 1.2.1 ECMAScript
&emsp;ECMA-262定义的ECMAScript与Web浏览器没有任何关系，Web浏览器只是ECMAScript实现的宿主环境之一。宿主环境不仅提供基本的ECMAScript实现，同时也会提供该语言的扩展，以便语言与环境之间对接交互。<br/>
**ECMA-262定义的内容：**
- 语句
- 语法
- 类型
- 关键字
- 保留字
- 操作符
- 对象

&emsp;&emsp;ECMAScript就是对实现该标准的内容语言描述，JavaScript实现了ECMAScript。

#### 1.2.2 文档对象模型（DOM）
&emsp;文档对象模型(DOM)是针对XML但经过扩展用HTML的应用程序编程接口(API)。DOM把整个页面映射为一个多层节点结构。HTML或XML页面中的每个组成部分都是某种类型的节点，这些节点又包含着不同类型的数据。
##### 1 DOM级别
&emsp;**DOM1**<br>
&emsp;&emsp;DOM1级别主要包含两个模块：DOM核心和DOM HTML。<br>
- DOM核心：规定如何映射基于XML的文档结构，以便简化对文档任意部分的访问和操作。
- DOM HTML模块：在DOM核心上加以拓展，添加了针对HTML的对象和方法。

&emsp;**DOM2**<br>
&emsp;&emsp;DOM2在DOM1的基础上扩充了鼠标和用户界面事件、范围、遍历等细分模块。DOM2引入下面的新模块和众多的新类型与新接口。<br>
- DOM视图：定义跟踪不同文档视图的接口。
- DOM事件：定义了事件与事件处理接口。
- DOM样式：定义了基于CSS元素应用样式的接口。
- DOM遍历和范围：定义了遍历和操作文档树的接口。

#### 1.2.3 浏览器对象模型（BOM）
&emsp;&emsp;开发人员使用BOM可以控制浏览器显示的页面 以外的部分。而BOM真正与众不同的地方（也是经常会导致问题的地方），还是它作为JavaScript实现的一部分但却没有相关的标准。
&emsp;&emsp;从根本来讲，BOM只处理了浏览器窗口和框架，下面就是一些这样的拓展：
- 弹出新浏览器窗口的功能；
- 移动、缩放和关闭浏览器窗口的功能；
- 提供浏览器详细信息的navigator对象；
- 提供浏览器所加载页面的详细信息的location对象；
- 提供用户显示器分辨率详细信息的screen对象；
- 对cookies的支持；
- 像XMLHTTPRequest和IE的ActiveXObject这样的自定义对象。

### 1.3 本章小结
&emsp;JavaScript是一种专为网页交互而设计的脚本语言，由下列三个不同的部分组成：
- ECMAScript，由ECMA-262定义，提供核心语言功能；
- 文档对象模型（DOM），提供访问和操作网页内容的方法和接口；
- 浏览器对象模型（BOM），提供与浏览器交互的方法和接口。

&emsp;&emsp;JavaScript的这三个组成部分，在当前五个主要浏览器（IE、Firefox、Chrome、Safari和 Opera）中 都得到了不同程度的支持。
*****

## 第二章 在HTML中使用JavaScript
### 2.1 <script>元素
&emsp;HTML4.0为`<script>`定义了下面6个属性：
- async：可选。表示立即下载脚本，但是不妨碍其他操作(下载资源、加载脚本)。只对外部脚本有效。
- defer：可选。可以让脚本延迟到文档完全解析和显示再执行。只对外部脚本有效。
- charset：可选、表示通过src属性指定的代码的字符集。
- language：已弃用。
- src：可选。包含要访问的外部文件。
- type：可选。可以看成language的替代，常常定义为"text/javascript"。

使用`<script>`元素有两种方式：直接嵌入和包含外部文件。<br>
&emsp;**直接嵌入：**<br>
&emsp;&emsp;直接嵌入只需要指定type属性，具体语法如下：
    
    <script type="text/javascript">
        JavaScript语法
    </script>
&emsp;&emsp;包含在`<script>`中的代码从上到下依次执行。如果要使用alert弹出`</script>`，需要指定如下：

    <script type="text/javascript">
        function sayScript(){
            alert("<\/script>");
        }
    </script>
&emsp;**包含外部文件：**<br>
&emsp;&emsp;包含外部文件需要指定type属性以及链接文件src，外部链接不应该填写内容，存在也不执行，具体语法如下：
    
    <script type="text/javascript" src="../../js/example.js"></script>
&emsp;附：
- src也可以制定互联网上的js资源。

#### 2.1.1 标签的位置
&emsp;&emsp;按照传统的做法，所有的`<sript>`元素都应该放在页面的`<head>`属性中，例如：
    
    <!DOCTYPE>
    <html>
        <head>
            <title>标题</title>
            <script type="text/javascript" src="exam.js"></script>
            <script type="text/javascript">
            </script>
        </head>
        <body>
            Content
        </body>
    </html>
&emsp;&emsp;为了避免需要先下载js文件导致页面加载缓慢的问题，后来一般把外部导入js放在body标签最后面，例如：

    <!DOCTYPE>
    <html>
        <head>
            <title>标题</title>
            <script type="text/javascript">
            </script>
        </head>
        <body>
            Content
            ......
             <script type="text/javascript" src="exam.js"></script>
        </body>
    </html>

#### 2.1.2 延时脚本<defer>
&emsp;&emsp;HTML 4.01 为`<script>`标签定义了defer属性。这个属性的用途是表明脚本在执行时不会影响页面的构造。也就是说，脚本会被延迟到整个页面都解析完毕后再运行。因此，在`<script>`元素中设置defer属性，相当于告诉浏览器立即下载，但延迟执行。若是存在多个脚本，会按照顺序执行....

#### 2.1.3 异步脚本async
&emsp;&emsp;与defer类似，都是为了改变脚本处理顺序，而且都是只适用于外部脚本。但是与defer不同的是，async不会保证按照顺序执行。

### 2.2 嵌入代码与外部代码
相比嵌入代码，外部代码的有以下几个优点：
- 可维护性好：遍及不同 HTML页面的 JavaScript 会造成维护问题。但把所有 JavaScript文件都放在 一个文件夹中，维护起来就轻松多了；
- 可缓存：浏览器能够根据具体的设置缓存链接的所有外部 JavaScript文件；
- 适应未来：通过外部文件来包含 JavaScript 无须使用前面提到 XHTML 或注释 hack。

### 2.3 文档模式
最初的两种文档模式为：混杂模式和标准模式。如果在文档开始处没有发现文档类型声明，则所有浏览器都会默认开启混杂模式。<br>
对于标准模式，可以通过严格类型strict开启,主要有下面几类。<br>

    <!-- HTML 4.01 严格型 --> 
    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"> 
    
    <!-- XHTML 1.0 严格型 --> 
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> 
    
    <!-- HTML 5 --> 
    <!DOCTYPE html> 

对于准标准模式，可以通过过渡型(Transitional)和框架集型(Frameset)文档类型来触发。如下所示：
    
    <!-- HTML 4.01 过渡型 --> 
    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> 
 
    <!-- HTML 4.01 框架集型 --> 
    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd"> 
 
    <!-- XHTML 1.0 过渡型 --> 
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> 
 
    <!-- XHTML 1.0 框架集型 --> 
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd"> 

### 2.4 <noscript>元素
当遇到下列情况才会显示出来：
- 浏览器不支持脚本；
- 浏览器支持脚本，但是脚本被禁用。

示例如下：

    <html>
        <head>     
            <title>Example HTML Page</title>     
            <script type="text/javascript" defer="defer" src="example1.js"></script>     
            <script type="text/javascript" defer="defer" src="example2.js"></script>  
        </head>   
        <body>     
            <noscript>       
                <p>本页面需要浏览器支持（启用）JavaScript</p>   
            </noscript>   
        </body> 
    </html>

### 2.5 本章小结
&emsp;把 JavaScript 插入到 HTML 页面中要使用`<script>`元素。使用这个元素可以把 JavaScript 嵌入到 HTML页面中，让脚本与标记混合在一起；也可以包含外部的 JavaScript文件。而我们需要注意的地方有：
- 在包含外部 JavaScript文件时，必须将src属性设置为指向相应文件的URL。而这个文件既可以是与包含它的页面位于同一个服务器上的文件，也可以是其他任何域中的文件;
- 所有`<script>`元素都会按照它们在页面中出现的先后顺序依次被解析。在不使用defer和async属性的情况下，只有在解析完前面`<script>`元素中的代码之后，才会开始解析后面`<script>`元素中的代码;
- 由于浏览器会先解析完不使用defer属性的<script>元素中的代码，然后再解析后面的内容，所以一般应该把`<script>`元素放在页面后，即主要内容后面,`</body>`标签前面;
- 使用 defer 属性可以让脚本在文档完全呈现之后再执行。延迟脚本总是按照指定它们的顺序执行;
- 使用 async 属性可以表示当前脚本不必等待其他脚本，也不必阻塞文档呈现。不能保证异步脚本按照它们在页面中出现的顺序执行;<br>
另外，使用<noscript>元素可以指定在不支持脚本的浏览器中显示的替代内容。但在启用了脚本的情况下，浏览器不会显示<noscript>元素中的任何内容。
****

## 第三章 基本概念
### 3.1 语法
#### 3.1.1 区分大小写
&emsp;JavaScript中的变量名、函数名、操作符都区分大小写。
#### 3.1.2 标识符
&emsp;标识符就是函数、变量、属性的名字或者函数的参数。按下面要求：
- 首字符必须是字母、下划线(_)或者美元符号($)
- 中间字符可以是字母、数字、下划线(_)或者美元符号($)
- JavaScript中的标识符一般采用驼峰大小写格式，首单词首字母小写，其他首字母大写。如(setParam)
- 不能将关键字和保留字设为标识符名称。

#### 3.1.3 注释
&emsp;&emsp;JavaScript中的注释有两种，包含单行注释和多行注释。
- 单行注释：以两个//开头，如：var a;//声明变量a
- 多行注释：以一个斜杠和一个星号(`/*`)开头，以一个星号(*)和一个斜杠(`*/`)结尾，如下：<br/>
```
    /*
     *  这是一个多行（块级）注释
     *  @author 
     */
```
#### 3.1.4 严格模式
&emsp;&emsp;严格模式是为JavaScript定义了一种不同的解析与执行模型。在严格模式下，ECMAScript3中的一些不确定的行为将得到处理，而且对某些不安全的操作也会抛出错误。要在整个脚本中启用严格模式，可以在顶部添加如下代码：<br/>
&emsp;&emsp;**"use strict";**<br/>
&emsp;&emsp;这行代码看起来像是字符串，而且也没有赋值给任何变量，但其实它是一个编译指示（pragma），用于告诉支持的 JavaScript引擎切换到严格模式。
#### 3.1.5 语句
&emsp;ECMAScript语句一般以`;`结尾，如果省略，就会由解析器确定语句的结尾，但是容易产生问题；
&emsp;可以使用`{}`将多个语句放在一块，形成代码块。
### 3.2 关键字和保留字
ECMA-262描述了一组具有特定用途的关键字，这些关键字可用于表示控制语句的开始或结束，或者用于执行特定操作等。按照规则，关键字也是语言保留的，不能用作标识符。
### 3.3 变量
ECMAScript中变量是松散的，可以用来保存任何数据类型，简单可以理解为一个保存值的占位符。定义变量需要var操作符，当变量值没有定义时，系统默认为undefined，语句如下：

    var message;//未指定值，默认值为undefined
    message = 123;//定义为Number类型
    message = true;//定义为Boolean类型
    message = "hello";//定义为String类型
    message = null;//定义为Null类型
    message = new Object();//定义为Object类型
    var n1,n2,n3;//多变量声明
    var n1=10,v2='hi'
**注：**<br>
- 如果使用var在函数内定义一个变量，当函数执行完成就会被销毁。
- 函数内变量不使用var定义会成为全局变量。

### 3.4 数据类型
&emsp;ECMAScript中有5种简单数据类型（也称为基本数据类型）：Undefined、Null、Boolean、Number和String。还有1种复杂数据类型——Object，Object本质上是由一组无序的名值对组成的。
#### 3.4.1 typeof操作符
&emsp;这个操作符可以用来返回变量的类型。
- "undefined"：变量未定义时
- "number"：变量是数值时
- "string"：变量是字符串时
- "boolean"：变量是布尔值时
- "object"：变量是null或者对象时
- "function"：变量是函数时

#### 3.4.2 Undefined类型
&emsp;undefined只有一个变量值就是undefined，在使用var定义了变量但是未初始化值时，默认为"undefined"。
&emsp;下面两个例子存在明显不同：
    
    var message;
    // var age;
    
    //第二个警告框弹出错误
    alert(messgae);
    alert(age);
    
    //输出均为undefined
    alert(typeof mseeage);
    alert(typeof age);

结果表明，对未初始化和未声明的变量执行typeof操作符都返回了undefined值；这个结果有其逻辑上的合理性。因为虽然这两种变量从技术角度看有本质区别，但实际上无论对哪种变量也不可能 执行真正的操作。 

#### 3.4.3 Null类型
Null也仅只有一个取值null，null是一个空指针对象，如果定义的变量准备存储对象时，如果还没确定要保存值的类型，可以考虑保存成null。<br>
实际上，undefined派生于null，所以下面的输出值为true。

    alert(undefined == null);//true

#### 3.4.4 Boolean类型
该类型只有两个字面值：true和false。这两个值与数字值不是一回事，因此 true 不一定等于 1，而 false 也不一定等于 0。<br>
如果要将一个值转为Boolean类型，可以调用Boolean()函数。各个数据类型的返回类型如下：
<table>
    <caption>返回的Boolean类型</caption>
    <tr>
        <th width="150">数据类型</th>
        <th width="200">转换成true的值</th>
        <th width="200">转换成false的值</th>
    </tr>
    <tr>
        <td>Boolean</td>
        <td>true</td>
        <td>false</td>
    </tr>
    <tr>
        <td>String</td>
        <td>非空字符串</td>
        <td>""</td>
    </tr>
    <tr>
        <td>Number</td>
        <td>非零和NaN的数值</td>
        <td>零和NaN</td>
    </tr>
    <tr>
        <td>Object</td>
        <td>任何对象</td>
        <td>null</td>
    </tr>
    <tr>
        <td>Undefined</td>
        <td>n/a</td>
        <td>undefined</td>
    </tr>
</table>

#### 3.5 Number类型
&emsp;包含整数和浮点数。最基本的是十进制整数，还支持八进制（0开头）和十六进制（0x开头）。注意，八进制在严格模式下是无效的。<br>

**1.浮点数值**<br>
&emsp;所谓浮点数值，就是该数值中必须包含一个小数点，并且小数点后面必须至少有一位数字。<br>
&emsp;由于保存浮点数值需要的内存空间是保存整数值的两倍，因此ECMAScript会不失时机地将浮点数值转换为整数值。显然，如果小数点后面没有跟任何数字，那么这个数值就可以作为整数值来保存。同样地，如果浮点数值本身表示的就是一个整数（如1.0），那么该值也会被转换为整数。
&emsp;浮点数的最高精确度是17位小数。<br>

**2.数值范围**<br>
ECMAScript能够保存的最小精度值存储在`Number.MIN_VALUE`里面，最大的值存储在`Numner.MAX_VALUE`里面。<br>
如果一个值超出了JavaScript的数值范围，那么这个值将会被转换成Infinity或者-Infinity(视操作后值的符号判断)。另外可以使用`isFinite()`方法判断一个值是否是无穷取值。<br>

**3.NaN**<br>
非数值(Not a Number)。NaN具有以下两个特点：
- 任何设计到NaN的操作，返回值都是NaN；
- NaN与任何值都不相等，包括NaN本身。
针对这两个特点，我们可以使用isNaN()函数判断是否为非数值，当接收到实参时，先进行数值转换，如果能够转换，返回false，不能返回true，详细如下：
    
    
    alert(isNaN(NaN));      //true
    alert(isNaN(10));       //false
    alert(isNaN("10"));     //false
    alert(isNaN("blue"));   //true
    alert(isNaN(false));    //false

**4.数制转换**<br>
有三个方法可以实现数值转换效果：Number()、parseInt()、parseFloat()，其中Number()可以用于任何数据类型，而parseXXX仅适用于字符串类型。<br>
Number的转换规则如下：
- 如果是Boolean类型，true——>1，false——>0；
- 如果是Number类型，则原样输出；
- 如果是null，输出0；
- 如果是undefined，输出NaN；
- 如果是string，输出规则如下：
- - 如果只包含数字，返回十进制数
- - 如果包含浮点数，返回浮点数值
- - 如果是十六进制，则返回转换成的十进制数
- - 如果是空字符串，返回0；
- - 其他返回NaN。

****

## 第四章 变量、作用域和内存问题
### 4.1 基本数据类型和引用数据类型
- 基本数据类型：简单的数据字段，包含前面提及的（Number、Boolean、String、Undefined、Null），按值访问；
- 引用数据类型：由多个值构成的对象；操作对象时实际上是操作对象的引用而不是实际的对象。

#### 4.1.1 动态的属性
定义基本数据类型和引用数据类型是类似的，创建一个变量并为其赋值。对于引用类型的数据，我们可以为其添加属性和方法，如下：
```
    var person = new Object();
	person.name = "Nicholas";
	console.log(person.name);
```
#### 4.1.2 复制变量值
当变量从一个值复制到另一个值时也存在不同，基本数据类型只是复制值，修改不会对原数据产生影响但是引用输入不同，如下：
```
    //基础
    	var num1 = 20;
    	var num2 = num1;
    	num2 = 30;
    	console.log(num1 + ";" + num2);//20;30 修改num2的值不会影响num1
	//引用
    	var obj1 = new Object();
    	var obj2 = obj1;
    	obj2.name = "Nicholas";
    	console.log(obj1.name + ";" + obj2.name);//复制的实际上是指针，指向的是同一地址，修改obj2的同时也会对obj1产生影响
```

#### 4.1.3 传递参数
ECMAScript 中所有函数的参数都是按值传递的。<br>
在向参数传递基本类型的值时，被传递的值会被复制给一个局部变量（即命名参数，或者用ECMAScript 的概念来说，就是arguments对象中的一个元素）。在向参数传递引用类型的值时，会把这个值在内存中的地址复制给一个局部变量，因此这个局部变量的变化会反映在函数的外部。
```
    function addTen(num){
		return num + 10;
	}
	function setName(obj){
		obj.name = "Nicholas";
	}
	//基础
    	var num1 = 20;
    	var num2 = addTen(num1);
    	console.log(num1 + ";" + num2);//20;30
	//引用
    	var obj1 = new Object();
    	setName(obj1);
    	console.log(obj1.name);//Nicholas
```