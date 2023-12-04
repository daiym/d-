const getSort = (str) => {
  const arrs = str.split('').reduce((pre, item) => {
    pre[item] = pre[item] ? pre[item] + 1 : 1;
    return pre;
  }, {});
  return Object.keys(arrs).sort((a,b) => arrs[b] - arrs[a])
}
let str = "1231237879876064243";
let result = getSort(str)
console.log(result);