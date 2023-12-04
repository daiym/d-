// 问题?  return 一个新的 obj1
function mergeObject(obj1, obj2) {
  const keys = Object.keys(obj2)
  for(let key of keys) {
    if (!isObject(obj2[key])) {  //不是对象的话 直接赋值
      obj1[key] = obj2[key]
    } else {
      if (!obj1[key]) { // 是对象 且obj1没有这个属性，就给赋值一个基础值
        obj1[key] = Array.isArray(obj2[key]) ? [] : {}
      }
      mergeObject(obj1[key], obj2[key])  //进行递归
    }
  }
  return obj1
}

function isObject(v) {
  return v != null && typeof v === 'object'
}

const obj1 = {
  a: 1,
  x: {
    a: 1
  }
}

const obj2 = {
  a: 2,
  x: {
    b: 2
  },
  c: [1,2,3]
}

const result = mergeObject(obj1, obj2)
obj2.x.b = 'x'
console.log(result)
console.log(obj1)
console.log(obj2)