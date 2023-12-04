function create(Con, ...args) {
  // 基于Con的原型创建一个新的对象
  const newObj = Object.create(Con.prototype);
  // 绑定 this 并执行构造函数(为对象设置属性)
  let result = Con.apply(newObj, args)
  // 如果执行结果有返回值并且是一个对象, 返回执行的结果, 否则, 返回新创建的对象
  return result instanceof Object ?  result : newObj;
}
// 构造函数
function Test(name, age) {
  this.name = name
  this.age = age
}
// Test.prototype.sayName = function () {
//   console.log(this.name)
// }

// 实现一个 new 操作符
const a = create(Test,'小鹿','23')
console.log(a)
