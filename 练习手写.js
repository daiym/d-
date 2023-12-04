/****
 * 
 *  3.29  去重 深拷贝 promise.all 防抖 节流 俩对象是否相等 合并对象 冒泡排序 快排 new 两数之和算法
 * 
*****/
const isObject = (data) => {
  return data && typeof data === "object";
}

//去重


// let arr = [1, 2, 3, 22, 22, 22, 233, 22, 2, 233, 'a', 3, 'b', 'a'];
// let arr1 = unique(arr);
// console.log(arr1);

//深拷贝

// var obj = { a: 1, b: 6, c: () => { console.log(1) } };
// var obj1 = deepClone(obj);
// console.log(obj1, obj === obj1);
// var arr = [5, 10, [6, 0]];
// var arr1 = deepClone(arr);
// console.log(arr1, arr === arr1);


//promise.all


// const promise1 = () => {
//   return Promise.resolve('1')
// };
// const promise2 = () => {
//   return Promise.reject('2')
// };
// PromiseAll([promise1(), promise2()]).then(res => {
//   console.log("then", res)
// }).catch(err => {
//   console.log("catch", err)
// })

//防抖 n秒后执行回调函数，n秒内如果再次触发，则重新计时。


//节流 n秒内只执行一次回调函数，无论n秒内触发多少次，都只执行一次


//俩对象是否相等


// let obj1 = { a: 1, b: 2, c: { d: 4 } };
// let obj2 = { a: 1, b: 2, c: { f: 14 } };
// let bool = deepEqual(obj1, obj2);
// console.log(bool);

//合并对象

// const obj1 = {
//   a: 1,
//   x: {
//     a: 1
//   }
// }

// const obj2 = {
//   a: 2,
//   x: {
//     b: 2
//   },
//   c: [1,2,3]
// }

// const result = mergeObject(obj1, obj2)
// obj2.x.b = 'x'
// console.log(result)
// console.log(obj1)
// console.log(obj2)


//冒泡排序

// const x = sort([2, 1, 3, 4]);
// console.log(x)

//快排


// const x = sort([2, 1, 4, 3, 0]);
// console.log(x)

//new

// function Test(name, age) {
//   this.name = name
//   this.age = age
// }
// const a = _new(Test,'小鹿','23')
// console.log(a)

//两数之和算法


// let nums = [ 3, 4, 9, 7, 5];
// let arr = twoSum(nums, 9);
// console.log(arr);


//千位分割数


// let num = 12345678;
// const newNum = addComma(num);
// console.log(newNum)

//数组合并去重并排序输出偶数

// const arr1 = [1, 3, 2, 3, 8, 4, 3];
// const arr2 = [3, 6, 2, 9, 5, 9, 2, 4];
// const result = newArr(arr1, arr2);
// console.log(result);

//一维数组动态和

// const nums = [1, 2, 3, 4]
// const newNum = runningSum(nums);
// console.log(newNum)

//左旋字符串

// const result = reverseLeftStr("abcdefg", 2);
// console.log(result);

//getIn
// const getIn = (obj, str) => {
//   return str.split('.').reduce((pre, item) => {
//     pre = pre ? pre[item] : undefined;
//     return pre;
//   }, obj);
// }

// const obj = { a: { b: { c: 34 } } };
// const val = getIn(obj, "a.b.d.f");
// console.log(val);
// console.log(1)

// ## 已知一个纯英文大小写输入的字符串 如 'ToDay'
// ## 实现一个将输入字符串反转并根据初始给字符串大小写进行格式化的 函数
// ## 变换规则 'ToDay' -> 'yaDoT' -> 'YaDot'
// const handleStr = (str) => {
//   const result = [];
//   const reserveArr = str.split('').reverse().join('');
//   str.split('').forEach((item, index) => {
//     if ("Z" >= item && item >= "A") {
//       result[index] = reserveArr[index].toUpperCase();
//     } else {
//       result[index] = reserveArr[index].toLowerCase();
//     }
//   });
//   return result.join("");
// };
// const str = "ToDay";
// const result = handleStr(str);
// console.log(result);

