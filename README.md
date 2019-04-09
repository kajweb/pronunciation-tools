# 发音工具箱

## 使用地址
请进入[GitHub Pages][GitHub Pages]查看并使用

## 开发教程
### 增加类别
增加类别对应`index.html`中的`$(".selector")`，其中`onclick`的参数为`\pronunciation`目录的文件名，后缀默认为`.json`

### 增加单词
首先找到需要增加的类别，可以在`index.html`中的`$(".selector")`找到，下面是已知的类别
|类别|文件名|
|---|---|
|html|html.json|
|css|javascript.json|
|js|css.json|
|php|php.json|

下面是数组参数说明
<table>
	<tbody style="text-align:center;">
	    <tr>
	        <td rowspan="2">默认系列</td>
	        <td>word</td>
	        <td>单词</td>
	        <td>必填</td>
	    </tr>
	    <tr>
	        <td>explain</td>
	        <td>解释</td>
	        <td>选填</td>
	    </tr>
	    <tr>
	        <th rowspan="2">en系列</th>
	        <th>en</th>
	        <th>英式音标</th>
	        <th>选填</th>
	    </tr>
	    <tr>
	        <th>en_video</th>
	        <th>英式音标地址</th>
	        <th>选填</th>
	    </tr>
	    <tr>
	        <th rowspan="2">us系列</th>
	        <th>us</th>
	        <th>英式音标</th>
	        <th>选填</th>
	    </tr>
	    <tr>
	        <th>us_video</th>
	        <th>英式音标地址</th>
	        <th>选填</th>
	    </tr>
	    <tr>
	        <th rowspan="2">mixed系列</th>
	        <th>mixed</th>
	        <th>混合音标</th>
	        <th>选填</th>
	    </tr>
	    <tr>
	        <th>mixed_video</th>
	        <th>混合音标地址</th>
	        <th>选填</th>
	    </tr>
    <tbody>
</table> 

> `mixed系列`与`en系列`、`us系列`不共存。mixed用于在不知悉是英式发音还是美式发音时使用（直接合并为一个单元格）。

[GitHub Pages]:https://kajweb.github.io/pronunciation-tools/