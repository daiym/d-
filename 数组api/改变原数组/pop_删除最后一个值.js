/*
pop: 删除数组中最后一个元素，返回被删除的元素(改变原数组), 无论（）内输入什么参数，都默认删除最后一个元素
*/
let a = [5]
let result = a.pop()
console.log(result)  // 5
console.log(a)       // []

result = a.pop()     // 数组为空数组后，执行pop()方法，返回undefined
console.log(result)  // undefined
console.log(a)       // []