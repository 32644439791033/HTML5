function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
}
var num = getRandom(0, 5);
var inputNum = parseInt(prompt('请输入数字'));

var i = 1;

while(inputNum != num) {
    
    if (isNaN(inputNum)) {
        alert('您输入的信息格式不正确');
        var inputNum = parseInt(prompt('请输入数字'))
    }
    i++;
    if (inputNum > num) {
        alert('您输入的数字太大了！');
    } else {

        alert('您输入的数字太小了！');
    }
    var inputNum = parseInt(prompt('请输入数字'));
    
}
alert('恭喜你猜对了！ 一起猜了' + i + '次');
