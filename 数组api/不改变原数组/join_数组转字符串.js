/*
join: 将数组用value连接为字符串，返回被连接后的字符串(不改变原数组)
*/
let a = [1, 2, 3, 4, 5]
let result = a.join()
console.log(result)   // 1,2,3,4,5
result = a.join('')
console.log(result)   // 12345
result = a.join(',')
console.log(result)   // 1,2,3,4,5
result = a.join('&')
console.log(result)   // 1&2&3&4&5


