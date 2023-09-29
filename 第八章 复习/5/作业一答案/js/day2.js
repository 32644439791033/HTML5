var arr = new Array();
for (var i = 0; i < 10; i++) {
var num = parseInt(prompt('请输第' + (i + 1) + '数字'));
     while (isNaN(num)){
         alert('你输入的不是数字请重新填写！')
         var num = parseInt(prompt('请输第' + (i + 1) + '数字'));
     };

 arr[i] = num;
}
arr.sort(function(a,b){
    return a-b;
})
for(var i in arr){
    document.write('第'+(parseInt(i)+1)+'个数是' + arr[i]+'<br>')    
}
