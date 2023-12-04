/*
concat: 将数组和(或)值连接成新数组，返回新数组(不改变原数组)
*/

let a = [1, 2], b = [3, 4], c = 5
let result = a.concat(b, c)
console.log(result)  // [1, 2, 3, 4, 5]
console.log(a)  // [1, 2]