export const deepEqual = (x, y) => {
  // 指向同一内存时
  if (x === y) {
    return true;
  } else if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) {
    //length是否相同
    if (Object.keys(x).length !== Object.keys(y).length) {
      return false;
    }
    for (var prop in x) {
      //y里面是否有x的key，如果有进行递归对比是否相同
      if (y.hasOwnProperty(prop)) {  
        if (!deepEqual(x[prop], y[prop])) {
          return false;
        }
      } else {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}
