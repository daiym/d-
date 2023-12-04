const flatten = (arr) => {
  return arr.reduce((pre, item) => {
    return Array.isArray(item) ? pre.concat(flatten(item)) : pre.concat(item)
  }, []);
}
const arr = [1, [2, 3, [4, 5]]];
const newArr = flatten(arr);
console.log(newArr);