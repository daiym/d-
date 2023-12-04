/*
indexOf: 从头开始往后查找指定值,返回指定值出现的第一个索引，找不到返回-1
第一个参数是查找的元素，第二个参数是开始查找的位置
*/
var str = "Good good good study, day day day up";
var  index1 = str.indexOf('good');
console.log(index1);//5
var  index2 = str.indexOf('good',6);
console.log(index2);//10
var  index3 = str.indexOf('No');
console.log(index3);//-1