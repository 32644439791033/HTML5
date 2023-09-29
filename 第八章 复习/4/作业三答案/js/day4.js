function countDown(time){
    var nowTime = +new Date()//获取了系统当前时间的时间戳
    var inputTime = +new Date(time);//获取用户输入的时间 的 时间戳
    var times = (inputTime - nowTime)/1000;  //获取到了 2个时间的 时间差 (单位 ： 由毫秒的变成了秒)
    var d = parseInt(times/60/60/24); // 计算天数
        d = d < 10 ? '0'+d : d ;
    var h = parseInt(times/60/60%24); //计算小时
        h = h < 10 ? '0'+h : h ;
    var m = parseInt(times/60%60); // 计算分数
        m = m < 10 ? '0'+m : m ;
    var s = parseInt(times%60);//计算当前秒数
        s = s < 10 ? '0'+s : s ;
    document.myform.times.value = '距离'+time+'还有：'+d+'天'+h+'小时'+m+'分钟'+s+'秒';
    setTimeout("countDown('"+ time +"')",1000);
}
