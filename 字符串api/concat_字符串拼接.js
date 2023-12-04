/*
concat: 将多个字符串拼接成新字符串，返回新拼接的字符串，不会改变原本字符串
*/
var str = "dream-";
var str1 = "starts";
var str2 = "-with-lighting-matches";
var newStr1 = str.concat();//没有参数功能等同复制字符串
var newStr2 = str.concat(str1);//将str与str1拼接返回
var newStr3 = str.concat(str1,str2); //将str与str1、str2拼接返回

console.log(newStr1)//dream-
console.log(newStr2);//dream-starts
console.log(newStr3);//dream-starts-with-lighting-matches