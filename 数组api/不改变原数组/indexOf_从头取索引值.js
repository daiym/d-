/*
indexOf: 从索引为0开始，检查数组中是否包含有value，有则返回匹配到的第一个索引，没有则返回-1(不改变原数组)
第一个参数是查找的元素，第二个参数是开始查找的位置
*/
let a = [1, 2, 3, 4, 5]
let result = a.indexOf(2)
console.log(result)  // 1
console.log(a)  // [1, 2, 3, 4, 5]

result = a.indexOf(6)
console.log(result)  // -1
console.log(a)  // [1, 2, 3, 4, 5]