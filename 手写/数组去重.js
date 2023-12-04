/*
  *******************************************************
  最优方案map，其次是set
  *******************************************************
*/


// filter过滤功能，判断item是否有重复，对比index。
Array.prototype.unique = function () {
  return this.filter((item, index) => {
    return this.indexOf(item) === index;
  })
}

//使用sort先排序，对比当前i的值和下一个i+1de值
Array.prototype.unique = function () {
  const newArray = [];
  this.sort();
  for (let i = 0; i < this.length; i++) {
    if (this[i] !== this[i + 1]) {
      newArray.push(this[i]);
    }
  }
  return newArray;
}

//includes 判断当前数组是否有某个值，如果有返回true没有返回false
Array.prototype.unique = function () {
  const newArray = [];
  this.forEach(item => {
    if (!newArray.includes(item)) {
      newArray.push(item);
    }
  });
  return newArray;
}

//通过map方法，map的has和get都可以用来判断key是否存在，set用来插入key和val
Array.prototype.unique = function () {
  const tmp = new Map();
  return this.filter(item => {
    return !tmp.has(item) && tmp.set(item, 1);
  })
}

//通过set方法，set里面的值都是唯一的
Array.prototype.unique = function () {
  return [...new Set(this)];
}



let arr = [1, 2, 3, 22, 22, 22, 233, 22, 2, 233, 'a', 3, 'b', 'a'];
let arr1 = arr.unique();
console.log(arr1);