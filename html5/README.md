## HTML+CSS深入

### 1. HTML 与 XHTML区别 ？
```
    DOCTYPE文档及编码
    元素大小写      //HTML可大写，XHTML不可
    属性布尔值      //HTML可以直接些属性(默认true),XHTML不可以
    属性引号        //HTML可以不加引号
    图片的alt属性   //XHTML必须写alt属性
    单标签写法      HTML:<img src=''>   XHTML:<img src='' alt='' />
    双标签闭合      HTML可以不闭合，但是不推荐
```
### 2. strong与b、em与i？(内联元素)
```
    表现形态都是 (strong|b)文本加粗  和  (em|i)文本斜体

    区别：是否具备语义化(b与i不具备意义)
    使用时如果一行存在多个文字样式，如果一直用单个span需要写较多的class，此时可以使用多个，配合嵌套与TAG选择器，
```
### 3. 引用标签？
```
    blockquote  :  引用大段的段落解释(大行距，换行)
    q  :  引用小段的短语解释        (双引号)
    abbr  :  缩写或首字母缩略词     (点下划线)
    address  :  引用文档地址信息(斜体)
    cite  :  引用著作的标题
```    
### 4. iframe标签？
```
    可以引入其他的html到当前html中显示。
    主要是利用iframe的属性进行样式的调节。
    常见属性：
        1. frameborder：是否显示边框
        2. width/height：宽高
        3. scrolling：是否有滚动条
        4. src：需要导入显示的内容
        5. srcdoc：在iframe显示的页面内容(可以写html代码)
    应用场景：
        1. 数据传输
        2. 共享代码
        3. 局部刷新
        4. 第三方介入
```
### 5. br 与 wbr ?
```
    br 就是换行、  wbr 就是软换行（在指定时机进行换行,长单词换行）
```
### 6. pre 与 code ?
```
    针对网页中的程序代码的显示效果。
    <pre>
        <code>
            中间书写代码。很多需要转义比如&lt;(小于号)、&gt;（大于号）
        </code>
    </pre>
```
### 7. map 与 area ?
```
    给特殊图形添加链接，area能添加的热区的形状：矩形、圆形、多边形。
    <img src='' title='loveFeiFei' useMap='#lFF'>
    <map name ='lFF'/>
        <area shape='rectangle' coords='0,0,100,100' href=''/>
        <area shape='circle' coords='100,100,100' href=''/>
    </map>

    img:设置图片以及设置map名字
    map:绑定热区名字
    area：形状
     -shap： circle、rectangle、poly(多边形)
     coords：坐标
```
### 8. embed 与  object ?
```
    给flash和一些插件进行渲染操作的标签。
    embed:
        type: 
        src: 目标源文件
    object:
        type: 
        data: 数据文件
    <object>
        <param name="pic" value="../img/flash.swf">
    </object>
```

### 9. audio 与 video ？
```
    引入音频与视频的标签。属于H5的功能。
    <audio src='' loop controls autoplay>
    <video src='' loop controls autoplay>
        src: 目标文件
        loop：循环
        controls：显示
        autoplay：自动播放
    source: 设置资源(多个方案，看浏览器支持情况)
    <audio>
        <source src=''></source>
        <source src=''></source>
        <source src=''></source>
    </audio>
```

### 10. 文字注解？
```
    ruby  、 rt 这样一个组合
    ruby：包含需要添加拼音的中文字符
    rt：需要添加的拼音
    文字反向：
      HTML实现：
        bdo：<bdo direction='ltr|rtl'>
      CSS实现：
        Tag {
            direction: ltr|rtl;
            unicode-bdi: bdi-override;
        }
```

### 11. link扩展学习？
```
    添加网址标题栏前的小图标：
    <link rel="icon" type="/image/x-icon" href="http://www.mobiletrain.org/favicon.ico">
        rel: 设置icon
        type: /image/x-icon
    DNS预解析：
    <link rel="dns-prefetch" href="//static.360buyimg.com">
```

### 12. meta扩展学习？
```
    meta添加一些辅助信息。
      <meta name=''>
        描述：description
        关键字：keywords
        内核：renderer
      <meta http-equiv=''>
        自动跳转：refresh
        <meta http-equiv='refresh' content='3' url=''>


    <meta name="description" content="大连美团网精选大连美食餐厅,酒店预订,电影票,旅游景点,外卖订餐,大连团购信息,您可查询商家评价店铺信息。大连生活,下载美团官方APP ,吃喝玩乐1折起。">
    <meta name="keywords" content="大连美食,大连酒店,大连团购">
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta http-equiv="refresh" content="3" url="">
    <meta http-equiv="expires" content="Wed, 20 Jun 2019 22:33:00 GMT">
```

### 13. HTML5新的语义化标签？
```
    header : 页眉
    footer : 页脚
    main : 主体
    hgroup : 标题组合
    nav : 导航

    注：header、footer、main 在一个网页中只能出现一次。

    article : 独立的内容
    aside : 辅助信息的内容
    section : 区域
    figure : 描述图像或视频
    figcaption : 描述图像或视频的标题部分	
        用法：
        <figure> 
            <img src=''>
            <figcaption>将故事写成我们</figcaption>
        </figure>

    datalist : 选项列表
    details / summary : 文档细节 / 文档标题
    progress / meter : 定义进度条 / 定义度量范围
    time : 定义日期或时间
    mark : 带有记号的文本
    datalist：有备选项的输入框
        <inpt type='text' list='data'>
        <datalist id='list'>
            <option value='a'></option>
        </datalist>
    details：显示详细内容(设置open可以默认打开)
        <details>
            <summary>
                HTML
            </summary>
            <p>
                超文本标记语言
            </p>
        </details>
    progress:显示进度
    <progress min='0' max='100' value='60'>
    </progress>
    meter:显示进度(显示效果与progress略有不同，用处也不同)
    <meter min='' max='' value='' low='' high=''></meter>可以根据是否在low和high之间显示不同效果
```

### 14. 表格扩展学习？
```
    添加单线 : border-collapse : collapse(边框单线)
    隐藏空单元 : empty-cells : hide(隐藏空单元格)
    斜线分类 : border / rotate
    列分组 : colgroup  / col(为对应的列设置样式)
    colgroup:col
        <colspan>
            <col span='2'>//可对前两列设置样式
            <col span='3'>//可对后两列设置样式
        </colspan>
```

### 15. 表单扩展学习？
```
    美化表单控件：   1. label + :checked    2. position + opacity

    新的input控件
       email  :  电子邮件地址输入框
	   url  :  网址输入框
	   number  :  数值输入框
	   range  :  滑动条
	   date / month / week  :  日期控件	
	   search  :  搜索框
	   color  :  颜色控件
	   tel  :  电话号码输入框  ( 在移动端会默认调起数字键盘 )
 	   time  :  时间控件
    
    表单属性：
       autocomplete  :  自动完成  默认 on  /  off
	   autofocus  :  获取焦点
	   required  :  不能为空
	   pattern  :  正则验证

       method  :  数据传输方式
	   enctype  :  数据传输类型
	   name / value  :  数据的键值对

    扩展标签 :	
	   fieldset  :  表单内元素分组 
	   legend  :  为fieldset元素定义标题
	   optgroup  :  定义选项组
```

### 16. BFC规范？
```
    触发BFC规范的元素，可以形成一个独立的容器。不受到外界的影响，从而解决一些布局问题。(前面的margin边框问题 )

    触发的样式：
        float、display(inline-block、flex)、position(absolute、fixed)、overflow(hidden/scroll/auto)
    解决边框问题：
      out：设置BFC规范(overflow:hidden)
      div1与div2分别设置上下边框
        <div class="out">
            <div class="div1">

            </div>
        </div>
        <div class="out">
            <div class="div2">

            </div>
        </div>
    margin传递问题:(嵌套div)
        <div class=''>
            <div>
            </div>
        </div>
        内层设置边距，外层设置BFC规范
    解决浮动问题:
      设置左边固定，右边内容自动适应
      .left {
          height: 300px;
          width: 200px;
          float: left;
      }
      .right {
          height: 300px;
          overflow: hidden;
      }
```