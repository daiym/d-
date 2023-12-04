/*
slice(start,end): 截取数组，原数组索引start的值到索引end的值，不包含end，返回截取的数组。(不改变原数组)
*/
let a = [1, 2, 3, 4, 5]
let result = a.slice(2, 4)
console.log(result)  // [3, 4]
console.log(a)       // [1, 2, 3, 4, 5]

a.slice(1) // [2, 3, 4, 5]  只有一个参数且不小于0时，则从此索引开始截取到数组的末尾
a.slice(-1) // [5]  只有一个参数且小于0时，则从倒数|start|位截取到数组的末尾