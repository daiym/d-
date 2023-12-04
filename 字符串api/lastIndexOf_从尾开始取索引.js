/*
lastIndexOf: 方法返回调用String 对象的指定值最后一次出现的索引，在一个字符串中的指定位置 fromIndex处从后向前搜索。如果没找到这个特定值则返回-1 。
第一个参数是查找的元素，第二个参数是开始查找的位置
*/
var str = "Good good good study, day day day up";
var  index1 = str.lastIndexOf('good');
console.log(index1);//10
var  index2 = str.lastIndexOf('good',6);
console.log(index2);//5
var  index3 = str.lastIndexOf('good',3);
console.log(index3);//-1
