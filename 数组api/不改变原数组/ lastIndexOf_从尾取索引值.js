/*
lastIndexOf: 从最后的索引开始，检查数组找那个是否包含value，有则返回匹配到的第一个索引，没有返回-1(不改变原数组)
第一个参数是查找的元素，第二个参数是开始查找的位置
*/
let a = [1, 2, 3, 2, 5]
let result = a.lastIndexOf(2)
console.log(result)  // 3
console.log(a)  // [1, 2, 3, 4, 5]

result = a.lastIndexOf(6)
console.log(result)  // -1
console.log(a)  // [1, 2, 3, 4, 5]