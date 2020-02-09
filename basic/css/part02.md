### photoShop使用？
```
    组成：
        菜单项
        工具栏
        辅助面板

    下载：
        https://pan.baidu.com/s/1LVa5R_btSjczLBwskCZidQ 提取码: sc3v      

    快捷键：
        ctrl + r : 显示隐藏标尺
        在标尺上可以拖拽参考线
        可以通过移动工具拖拽回去，也可以在视图菜单中选择清除所有的参考线
        图层中的小眼睛可以对当前图层进行显示隐藏
        alt + 滚轮：可以对图片进行放大缩小

    png等图片的切图流程：
        1. 通过矩形选框工具，选择指定的区域
            微调：alt 减少区域  shift 增加区域   上下左右键进行微调
            利用参考线记录量取的位置，以便以后测量其他的值
        2. ctrl + c : 复制图层
        3. ctrl + n : 新建图层
        4. ctrl + v : 粘贴图层
        5. 存储为web格式        

    psd图片的切图流程：
        1. 启动生成器
	    2. 图像资源
        3. 重命名图层，自动获取切图
        4. 可上传到线上，方便数据获取
```
### float浮动
```
    脱离文档流，延迟父容器靠左或靠右进行排列。

        left、right、none

    float注意点	
        只会影响后面的元素。
        内容默认提升半层。
        默认宽根据内容决定。
        换行排列。
        主要给块元素添加，但也可以给内联元素添加。

    如何清除浮动？
        上下排列：clear属性，表示清除浮动的，left、right、both
        嵌套排列：
            固定宽高   :  不推荐 , 不能把高度固定死，不适合做自适应的效果。
            父元素浮动 : 不推荐 , 因为父容器浮动也会影响到后面的元素。
            overflow : hidden (BFC规范) , 如果有子元素想溢出，那么会受到影响。
            display : inline-block (BFC规范)，不推荐，父容器会影响到后面的元素。
            设置空标签 : 不推荐 , 会多添加一个标签。
            after伪类 : 推荐，是空标签的加强版，目前各大公司的做法。
                ( clear属性只会操作块标签，对内联标签不起作用 )
            eg:
                父类使用
                #div:after {
                    content: '';
                    clear: both;
                    display: block;
                }
            background:url(背景图1),url(背景图2);//可设置多背景，靠前的图片靠上
 ``` 
### CSS 定位
```
    position : 
        static（默认）
        relative
        absolute
        fixed
        sticky

    relative：
        如果没有定位偏移量，对元素本身没有任何影响
 	    不使元素脱离文档流
	    不影响其他元素布局
	    left、top、right、bottom是相对于当前元素自身进行偏移的

    absolute：
        使元素完全脱离文档流
 	    使内联元素支持宽高 （让内联具备块特性）
	    使块元素默认宽根据内容决定（让块具备内联的特性）
	    如果父元素存在定位啧绝对定位为相对父元素的绝对定位，没有的话就是相对于整个文档的绝对定位（绝对、相对、固定），此时如果子块没有定义偏移，默认在父块右上角
        

    fixed：
        使元素完全脱离文档流
        使内联元素支持宽高 （让内联具备块特性）
        使块元素默认宽根据内容决定（让块具备内联的特性）
        相对于整个浏览器窗口进行偏移，不受浏览器滚动条的影响

    sticky黏性定位：
	    在指定的位置，进行黏性操作。

    z-index定位层级。
```

### 添加省略号
```
    文字多时添加省略号
        width: 固定的宽;
        white-space: nowrap;
        overflow:hidden;
        text-overflow:ellipsis;    
```
### CSS圆角
```
    border-radius:圆角半径;
    border-radius: 左上(右下) 左下(右上)
    border-radius:左上 右上 右下 左下;
    border-radius:20px/40px(椭圆相切);
    border-radius:150px 150px 0 0;//半圆(width:300px height:150px)
```
### PC端的布局
    通栏 : 自适应浏览器的宽度。
    版心 : 固定一个宽度，并且让容器居中。   

### 附加
```
    li{$}*4：回车后默认生成1到4的列表项
```