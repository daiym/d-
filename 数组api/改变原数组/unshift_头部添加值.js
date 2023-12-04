/*
unshift：添加元素到数组的开头，返回新数组的长度(改变原数组)
*/
let a = [1, 2, 3, 4, 5]
let result = a.unshift(1)
console.log(result)        // 6
console.log(a)             // [1, 1, 2, 3, 4, 5]


result = a.unshift('a', 'b')  // 可一次添加多个值
console.log(result)           // 8
console.log(a)                // ['a', 'b', 1, 1, 2, 3, 4, 5]


// 一个简单的深反转需要使用递归实现
const deepReverse = (array) => {
  let temp = array.reverse()
  temp.forEach(v => {
    if (Object.prototype.toString.call(v) === '[object Array]') {
      deepReverse(v)
    }
  })
  return temp
}
a = [1, [2, 3], [4, 5]]
result = deepReverse(a)
console.log(result)  // [[5, 4], [3, 2], 1]
