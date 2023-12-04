/*
深拷贝：
深拷贝就是对目标的完全拷贝，两个对象对应两个不同的地址，不像浅拷贝那样只是复制了一层引用，就连值也都复制了。
只要进行了深拷贝，它们老死不相往来，谁也不会影响谁。

方法不多，主要是两种：
1. 利用 JSON 对象中的 parse 和 stringify  （undefined、function、symbol 会在转换过程中被忽略）
2. 利用递归来实现每一层都重新创建对象并赋值




深复制大坑API：
concat（合并数组）：只对第一层数据进行深复制；
slice（剪切数组）：只对第一层数据进行深复制；
...(扩展运算符)：只对第一层数据进行深复制；

浅拷贝：
对于字符串类型，浅拷贝是对值的复制，对于对象来说，浅拷贝是对对象地址的复制, 也就是拷贝的结果是两个对象指向同一个地址。

方法：
Object.assign()
...(扩展运算符)



*/

//手写深复制：
function deepClone(sourse) {
  const newObj = sourse.constructor === Array ? [] : {}; 
  for (let keys in sourse) {
    if (sourse[keys] && sourse[keys].constructor == Object) {
      newObj[keys] = deepClone(sourse[keys]);
    } else {
      newObj[keys] = sourse[keys];
    }
  }
  return newObj;
}

deepClone1 = (sourse) => {
  let clone = sourse instanceof Array ? [] : {};
  Object.keys(sourse).forEach(key => {
    clone[key] = typeof sourse[key] === "object" ? deepClone1(key) : sourse[key];
  })
  return clone;
}

// var arr = [5, 10, [6, 0]];
// var arr1 = deepClone1(arr);
// console.log(arr1, arr === arr1)
// var obj = { a: 1, b: 6, c: () => { console.log(1) } };
// var obj1 = deepClone1(obj);
// console.log(obj1, obj === obj1);