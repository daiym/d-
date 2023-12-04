/*
reduce: 接收一个函数作为累加器，将其结果汇总为单个返回值。
reduce((pre,cur,index,arr) => {},init)
pre: 累计的上一次结果值，首次默认取init值，如果没有init值，将取数组的第0位，而cur则从第一位开始。
cur: 当前值
index: 当前索引
arr: 当前数组
init: 首次默认值，如果没有这个参数，pre默认取数组的第0位。
*/
var arr = [1, 2, 3, 4, 5]

//这就是有init，所以默认首次使用init值，
var result1 = arr.reduce((previousValue, currentValue, index, arr) => {
  return previousValue + currentValue
}, 10)

console.log('result1:', result1) // 25

//没有init默认值，默认previousValue是数组第0位，而currentValue从第一位开始
var result2 = arr.reduce((previousValue, currentValue, index, arr) => {
  return previousValue + currentValue
})
console.log('result2:', result2) // 15
