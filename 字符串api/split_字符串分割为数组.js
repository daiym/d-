/*
split: 根据指定的分隔符将字符串分割为数组，返回分割字符串生成的数组
*/
var str1 = "dream-starts-with-lighting-matches";
var newArr1 = str1.split('-');//将字符串根据'-'分割为数组
var newArr2 = str1.split('-', 3);//将字符串根据'-'分割为数组,只取前三个

console.log(newArr1)//["dream", "starts", "with", "lighting", "matches"]
console.log(newArr2);//["dream", "starts", "with"]

//拓展，split通常会和join配套使用
var str1 = "dream-starts-with-lighting-matches";
var newArr3 = str1.split('-');//将字符串根据'-'分割为数组
var str3 = newArr3.join('&')
console.log(newArr1)//["dream", "starts", "with", "lighting", "matches"]
console.log(str3)//dream&starts&with&lighting&matches