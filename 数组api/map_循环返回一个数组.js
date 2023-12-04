/*
map: 对数组中的每一项运行给定函数，返回每次函数调用的结果组成的"新数组"
*/
var arr = [1, 2, 3, 4, 5]
var arr1 = arr.map(function (item, index, a) {
  return item * item
})
console.log(arr1)  // [1, 4, 9, 16, 25]
