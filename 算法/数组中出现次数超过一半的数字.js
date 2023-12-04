const getNumber = (arr) => {
  const center = arr.length / 2;
  const obj = arr.reduce((pre, item) => {
    pre[item] = pre[item] ? pre[item] + 1 : 1;
    return pre;
  }, {});
  return Object.keys(obj).filter(item => obj[item] > center)[0];
}


const array = [1, 2, 3, 2, 2]
const v = getNumber(array);
console.log(v)