function check(){
    var username = document.myform.username.value;
    var ureg = /^[a-z]{6,12}$/;
    if(!ureg.test(username)){
        alert('您输入的用户名格式不正确！');
        return false;
    }
    var qq = document.myform.qq.value;
    var qreg = /^[1-9]\d{3,14}$/;
    if(!qreg.test(qq)){
        alert('您输入的QQ格式不正确！');
        return false;
    }
    alert('验证成功');
    return true;
   
}