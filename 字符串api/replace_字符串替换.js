/*
replace: 将字符串中匹配的内容替换为新内容，返回替换后的字符串
*/
var str = "Good good good study, day day day up";
var newStr1 = str.replace('good','hard');//普通替换只替换第一个匹配的位置
var newStr2 = str.replace(/good/g,'hard');//利用正则全局查找替换，区分大小写
var newStr3 = str.replace(/good/ig,'hard');//利用正则全局查找替换，不区分大小写
var newStr4 = str.replace(/\s+/g,'');//去除空格

console.log(newStr1)//Good hard good study, day day day up
console.log(newStr2);//Good hard hard study, day day day up
console.log(newStr3);//hard hard hard study, day day day up
console.log(newStr4);//Goodgoodgoodstudy,daydaydayup