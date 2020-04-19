const ipAddr = "http://127.0.0.1:9000";
//const ipAddr = "http://116.62.102.68:9000";
$(function () {
    $.get("header.html",function (data) {
        $("#header").html(data);
    });
    $.get("footer.html",function (data) {
        $("#footer").html(data);
    });
    $.get("menu.html",function (data) {
        $("#menu").html(data)
    })
});
var user;
$.ajax({
    url:ipAddr+"/user/identity",
    dataType:"json",
    xhrFields: {
        withCredentials: true //允许跨域带Cookie
    },
    type:"post",
});
$.ajax({
    url:ipAddr+"/user/verify",
    data:{

    },
    dataType:"json",
    xhrFields: {
        withCredentials: true //允许跨域带Cookie
    },
    async: false,
    type:"post",
    success:function (data) {
        if(data.msg!=null){
            user=null;
        }else {
            user=data
        }
    }
});
Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};
var mill2date = function (string) {
    return new Date(string).Format("yyyy-MM-dd hh:mm:ss")
};