var $httpRequest = {
    ajax(url, fnSuccess, fnFaild) {
        //1.创建Ajax对象。js中,使用一个没有定义的变量会报错,使用一个没有定义的属性,是undefined。IE6下使用没有定义的XMLHttpRequest会报错,所以当做window的一个属性使用
        if (window.XMLHttpRequest) {
            var oAjax = new XMLHttpRequest(); //非IE6
        } else {
            var oAjax = new ActiveXObject("Microsoft.XMLHTTP"); //IE6
        }
        //2.连接到服务器
        oAjax.open('GET', url, true);
        //3.发送请求
        oAjax.send();
        //4.接收返回值
        oAjax.onreadystatechange = function() {
            //oAjax.readyState--浏览器和服务器之间进行到哪一步了
            if (oAjax.readyState == 4) { //读取完成
                if (oAjax.status == 200) { //读取的结果是成功
                    fnSuccess(oAjax.responseText); //成功时执行的函数
                } else {
                    if (fnFaild) { //判断是否传入失败是的函数,即用户是否关心失败时的结果
                        fnFaild(oAjax.responseText); //对失败的原因做出处理
                    }
                }
            }
        }
    },
    ajaxJson(url, fnSuccess, fnFaild) {
        //1.创建Ajax对象。js中,使用一个没有定义的变量会报错,使用一个没有定义的属性,是undefined。IE6下使用没有定义的XMLHttpRequest会报错,所以当做window的一个属性使用
        if (window.XMLHttpRequest) {
            var oAjax = new XMLHttpRequest(); //非IE6
        } else {
            var oAjax = new ActiveXObject("Microsoft.XMLHTTP"); //IE6
        }
        //2.连接到服务器
        oAjax.open('GET', url, true);
        //3.发送请求
        oAjax.send();
        //4.接收返回值
        oAjax.onreadystatechange = function() {
            //oAjax.readyState--浏览器和服务器之间进行到哪一步了
            if (oAjax.readyState == 4) { //读取完成
                if (oAjax.status == 200) { //读取的结果是成功
                    fnSuccess(JSON.parse(oAjax.responseText)); //成功时执行的函数
                } else {
                    if (fnFaild) { //判断是否传入失败是的函数,即用户是否关心失败时的结果
                        fnFaild(oAjax.responseText); //对失败的原因做出处理
                    }
                }
            }
        }
    }
}