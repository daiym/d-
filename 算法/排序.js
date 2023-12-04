//冒泡排序
function sort(array) {
  //外层只需要length-1 次就排好了，第length次比较是多余的
  for (let i = 0; i < array.length - 1; i++) {
    let hasChange = false
    //内层length-1-i, 去掉已经排完的。
    for (let j = 0; j < array.length - 1 - i; j++) {
      //比较任意两个相邻的项，如果第一个比第二个大，则交换顺序
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]]
        hasChange = true
      }
    }
    //当某次没有交换数据，说明已经达到有序，不需要在执行后续
    if (!hasChange) {
      console.log("err")
      break
    }
  }
  return array
}

//快排
function sort(array) {
  if (array.length <= 1) {
    return array
  }
  const left = []
  const right = []
  // 取中间数作为基准索引，浮点数向下取整
  const index = Math.floor(array.length / 2)
  // 取得该索引，是个数组，原数组已没有这个索引值
  const center = array.splice(index, 1)
  for (let i = 0; i < array.length; i++) {
    //比索引小的push到左边left，大的push到右边right
    if (array[i] > center) {
      right.push(array[i])
    } else {
      left.push(array[i])
    }
  }
  //不断递归重复
  return sort(left).concat(center, sort(right))
}


const x = sort([3, 1, 2, 4, 5, 4]);
console.log(x)
