/*
1、执行上下文就是执行js代码环境的一种概念，每次js代码在运行的过程，都是在执行上下文。
2、js分为三种执行上下文类型。
    全局执行上下文：一个程序中只有一个全局执行上下文。
    函数执行上下文：每个函数在调用时都生成一个函数执行上下文，一个程序中可以有N个函数执行上下文。
    eval执行上下文：在eval函数内有属于他自己的执行上下文，js中不常用。
3、执行栈是一种应有”后进先出“数据结构的栈，被用来存储”所有的执行上下文“。
*/

//后进先出案例
let a = 'Hello World!';

function first() {
  console.log('Inside first function');
  second();
  console.log('Again inside first function');
}

function second() {
  console.log('Inside second function');
}

first();
console.log('Inside Global Execution Context');