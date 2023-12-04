/* Promise

promise一共有三个状: 初始，成功与失败。
两个参数: resolve,reject.
链式调用有两个: then,catch
1. promiese 构造函数中只有第一次执行是有效的，多次调用没有任何作用，promise状态一旦改变不会在变。
2. .then 或者 .catch 的参数期望是函数，传入非函数则会发生值穿透。




解决的痛点？
1. 回调地狱，代码难以维护， 常常第一个的函数的输出是第二个函数的输入这种现
2. promise可以支持多个并发的请求
3. 可读性提高
4. 解决信任问题，决议值只有一个，一旦决议无法改变

promise.all
提供了并行执行异步操作的能力。
接收一个数组参数，并返回一个数组，里面的值都是返回Promise对象。且返回的数组顺序一样跟数组参数顺序一样。
****只有全部请求成功，才会进入then。只要有一个失败都会进入catch并且直接返回错误信息，promise.all结束。

promise.race
接收一个数组参数，返回一个最快的promise结果，无论这个结果是成功还是失败，其他抛弃。

具体在工作中，使用promise解决过哪些问题？
1. 回调地狱问题
不断地callback，可以用promise，然后不断用then链式调用来解决这个问题。
2. 配合promise.all时使用，把参数数组里面每个的内容都用promise包一下，在使用。





捕获错误的方法 catch()
解析全部方法 all()
竞赛 race()
生成一个成功的promise  resolve()
生成一个失败的promise  reject()


*/


//手写promise.all
Promise.all = (arr) => {
  const len = arr.length;
  const result = [];
  return new Promise((resolve, reject) => {
    arr.forEach(item => {
      item.then(res => {
        result.push(res);
        if (result.length == len) {
          resolve(result);
        }
      }).catch(err => {
        reject(err);
      })
    })
  })
}

function set1(num) {
  return Promise.resolve(num);
}
function set2(num) {
  return Promise.resolve(num);
}
Promise.all([set1(10), set2(14)]).then(res => {
  console.log("res", res);
}).catch(err => {
  console.log("err", err);
})

// function runReject (x){
//   let p = new Promise((res,rej) => res(x))
//    return p;
// }
// function runAsync (x) {
//    let p = new Promise((res,rej) => {res(x)})
//    return p;
// }
// Promise.all([runAsync(0),runReject(1)]).then(res => {
//    console.log("res", res)
// }).catch(err => {
//    console.log("err", err)
// })


