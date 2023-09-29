var date = parseInt(prompt('请输入年份'));
if (date % 4 == 0 && date % 100 != 0 || date % 400 == 0) { //闰年能被4整除且不能被100整除，或能被400整除。
    alert("这个年份为闰年");
} else {
    alert("这个年份是平年");
}
