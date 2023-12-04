/*
filter: “过滤”功能，数组中的每一项运行给定函数，返回满足过滤条件组成的数组
*/
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var arr1 = arr.filter(function (item, index, a) {
  return index % 3 === 0 || item >= 8
})
console.log(arr1)  // [1, 4, 7, 8, 9, 10]
