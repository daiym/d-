/*
geiIn的手写，try和catch进行容错处理，如果没有这个值是undefined，就进入catch里面。
*/
const safeGet = (data, arr) => {
  return arr.split('.').reduce((data, k) => {
    return data ? data[k] : undefined;
  }, data);
};
const obj = { a: { b: { c: 34 } } };
const val = safeGet(obj, "a.b");
console.log(val);