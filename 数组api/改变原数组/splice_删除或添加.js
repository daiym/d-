/*
splice(start,deleteCount,val1.val2...):  改变原数组，如果添加则返回空数组，如果删除，则返回一个数组里面是删除项
start是必填： 修改的开始位置（从0计数)
deleteCount：从修改的开始位置，删除的位数，如果是0就没有可删除项
val1.val2...： 从修改的开始位置，可添加的参数列表
*/
let a = [1, 2, 3, 4, 5]
let result = a.splice(1, 2) //下角标1删除两个，返回删除数组
console.log(result) //[2, 3]
console.log(a) //[1, 4, 5]

let result = a.splice(1, 0, "a", "b");//下角标1增加"a", "b"，返回个空数组
console.log(result) //[]
console.log(a) // [1, "a", "b", 4, 5]

console.log(a.splice(-2))  // [4, 5]  当参数为单个且小于0时，将截取从倒数|start|位到数组的末尾
console.log(a) //[1, "a", "b"]

console.log(a.splice(1)) // ["a", "b"] 当参数为单个且不小于0时，将截取从start位到数组的末尾
console.log(a) //[1]