/*
every: 判断数组中每一项都是否满足条件，全部满足条件返回true，否则是false
*/
var arr = [1, 2, 3, 4, 5]
var arr1 = arr.every(function (item, index) {
  return item < 10
})
console.log(arr1)  // true
var arr2 = arr.every(function (item, index) {
  return item < 3
})
console.log(arr2)  // false
