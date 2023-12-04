`
  **他们三个的用处：可以在一个对象上借用另一个对象上的方法和属性
  call、apply、bind第一个参数thisArg都是“指向绑定的this
  call、apply会自动执行对应的函数，bind不会执行对应函数，需要手动触发
`
/*
  call 
  第二个参数：参数列表
  如果该参数的值为 null 或  undefined，则表示不需要传入任何参数
  返回值：调用有指定this值和参数的函数的结果。
*/
func.call(thisArg, arg1, arg2, ...);
/*
  apply
  第二个参数：一个数组或者类数组对象
  如果该参数的值为 null 或  undefined，则表示不需要传入任何参数
  返回值：调用有指定this值和参数的函数的结果。
*/
func.apply(thisArg, [argsArray])
/*
  bind
  第二个参数：参数列表
  返回值：返回绑定this的函数，需要人工手动调用才会触发方法返回结果
*/
func.bind(thisArg, arg1, arg2, ...);

/***********************************************************/
var person = {
  name: "axuebin",
  age: 25
};
function say(job){
  console.log(this.name+":"+this.age+" "+job);
}
say.call(person,"FE"); // "call" axuebin:25FE
say.apply(person, ["FE"]); // "apply" axuebin:25FE
var f = say.bind(person,"FE");
console.log(f()); // "bind" axuebin:25FE

