        var xy = document.querySelector('.xieyi_btn')
        xy.addEventListener('click',function(){
            this.parentNode.style.display = 'none' 
        })
        var hm = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
        var sj =document.myform.tel
        var sjd = document.getElementById('tel_notice')
        sj.addEventListener('focus',function(){
            sjd.innerText = '请输入11位手机号码'
            sjd.style.color = '#333'
        })
         var v1 = sj.onblur = function(){
            if(hm.test(sj.value)){
                sjd.innerText = '格式正确'
                sjd.style.color = 'green'
				localStorage.sjd=sj.value
                return true ;
            }else{
                sjd.innerText = '手机号格式不正确'
                sjd.style.color = 'red'
                return false
            }
        }
        var msg = document.myform.msg
        var msg_notice = document.getElementById('msg_notice')
        msg.addEventListener('focus',function(){
            msg_notice.innerText = '请输入6位验证码'
            msg_notice.style.color = '#333'
        })
        var v2 = msg.onblur = function(){
            if(msg.value.length == 6 ){
                msg_notice.innerText = '格式正确'
                msg_notice.style.color = 'green'
                return true ;
            }else{
                msg_notice.innerText = '验证码格式不正确'
                msg_notice.style.color = 'red'
                return false ;
            }
        }
        var psw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,10}$/ ;
        var pwd = document.myform.pwd
        var pwd_notice = document.getElementById('pwd_notice')
        pwd.addEventListener('focus',function(){
            pwd_notice.innerText = '密码必须包含大小写字母和数字的组合不能使用特殊的符号长度在8-10位'
            pwd_notice.style.color = '#333'
        })
        var v3 = pwd.onblur = function(){
            if(psw.test(pwd.value)){
                pwd_notice.innerText = '格式正确'
                pwd_notice.style.color = 'green'
				localStorage.psd=psd.value
				
                return true ;
            }else{
                pwd_notice.innerText = '密码格式不正确'
                pwd_notice.style.color = 'red'
                return false ;
            }
        }
        var mc =/^[\u4e00-\u9fa5a-zA-Z0-9]{5,20}$/
        var cpname = document.myform.cpname
        var cpname_notice = document.getElementById('cpname_notice')
        cpname.addEventListener('focus',function(){
            cpname_notice.innerText = '中文字符,字母和数字5-20位'
            cpname_notice.style.color = '#333'
        })
        var v4=cpname.onblur = function() {
           
            if(mc.test(cpname.value)){
                cpname_notice.innerText = '格式正确'
                cpname_notice.style.color = 'green'
				localStorage.mc=mc.value
                 return true ;
                 
            }else{
                cpname_notice.innerText = '公司名称格式不正确'
                cpname_notice.style.color = 'red'
                return false
            }
          
        }
        
var v5 = document.myform.xieyi
var ss = document.querySelector('.submit')
var lop=document.getElementById("lop")
ss.onclick = function(e){
	localStorage.lop=lop.value
    console.log(v5.checked&&v4()&&v3()&&v2()&&v1())
     if(!(v5.checked&&v4()&&v3()&&v2()&&v1())){
        e.preventDefault()
        // sjd.innerText = '手机号格式不正确'
        // sjd.style.color = 'red'
        // msg_notice.innerText = '验证码格式不正确'
        // msg_notice.style.color = 'red'
        // pwd_notice.innerText = '密码格式不正确'
        // pwd_notice.style.color = 'red'
        // cpname_notice.innerText = '公司名称格式不正确'
        // cpname_notice.style.color = 'red'
        // document.getElementById('xieyi_notice').innerText ='请点击同意服务条款'
        // document.getElementById('xieyi_notice').style.color = 'red'
        if(!v5.checked){
            document.getElementById('xieyi_notice').innerText ='请点击同意服务条款'
            document.getElementById('xieyi_notice').style.color = 'red'
          }else{
            document.getElementById('xieyi_notice').innerText =''
          }
        if(sj.value == ''){
            sjd.innerText = '手机号格式不正确'
            sjd.style.color = 'red'
        }
        if(msg.value == ''){
            msg_notice.innerText = '验证码格式不正确'
            msg_notice.style.color = 'red'
        }
        if(pwd.value == ''){
            pwd_notice.innerText = '密码格式不正确'
            pwd_notice.style.color = 'red'
        }
        if(cpname.value == ''){
            cpname_notice.innerText = '公司名称格式不正确'
            cpname_notice.style.color = 'red'
        }
     }
}
var yzm = document.querySelector('.send-msg')
    yzm.onclick = function(e){
    e.preventDefault()
    if(v1()){
        var timer = 60
        var set1 = setInterval(function(){
            if(timer == 0){
                yzm.disabled = false
                yzm.innerText = '获取短信验证码'
                clearInterval(set1)
                // timer = 60
            }else{
                timer--
                yzm.innerText = timer + '秒后重新发送' 
                yzm.disabled = true
            }
        },1000)
    }else{
        sjd.innerText = '手机号格式不正确'
        sjd.style.color = 'red'
    }
    
      
  }





 // var sbt= document.querySelector('.submit')
 //        sbt.addEventListener('click',function(){
 //            this.parentNode.style.a=harf("request.html");
 //        })
 //    function myFunction() {
 //        window.location.href='request.html';
 //    }
























// function logSubmit(event) {
// 			var name = document.querySelector('li.field-name .ginput_container input[type="text"]').value;
// 			localStorage.setItem('name', name);

// 			var email = document.querySelector('li.field-email .ginput_container input[type="text"]').value;
// 			localStorage.setItem('email', email);
// 		}

// 		window.onload = function() {
// 			document.querySelector('.form-survey').addEventListener('submit', logSubmit);
// 			if (localStorage.getItem("name") !== null) {
// 				document.querySelector('li.field-name .ginput_container input[type="text"]').value = localStorage.getItem("name");
// 			}

// 			if (localStorage.getItem("email") !== null) {
// 				document.querySelector('li.field-email .ginput_container input[type="text"]').value = localStorage.getItem("email");
// 			}
// 		}
