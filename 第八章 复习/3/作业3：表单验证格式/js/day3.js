function check(){
    var username = document.myform.username.value;
    if(username.length<= 3 || username.length>6){
        alert('您输入的用户名格式不正确');
        return false;
    }
    var len = username.length;
    for(var i=0 ; i<len;i++){   
        var ch = username.substr(i,1);    
        if(ch >= 'a' && ch<='z'){
         //  都是小写
         
        }else{ 
            alert('您输入的用户名格式不正确');
            return false;
        }  
    }

    var password = document.myform.password.value;
    if(password.length<=6 || password.length>12){
        alert('您输入的密码格式不正确');
         return false;
    }
    var  email =document.myform.email.value;
     if(email.length<10 || email.indexOf('@') == -1){
        alert('您输入的email格式不正确');
          return false;
     }
    alert('您输入的信息都正确！');
}