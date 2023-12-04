/*
forEach: 对数组进行遍历循环,对数组中每一项运行给定参数函数，参数分别为：遍历数组内容、对应的数组索引、数组本身。没有返回值
*/
var arr = [1, 2, 3, 4, 5]
arr.forEach(function (item, index, a) {
  console.log(item + '|' + index + '|' + (a === true))
})
// 输出为：
// 1|0|true
// 2|1|true
// 3|2|true
// 4|3|true
// 5|4|true
