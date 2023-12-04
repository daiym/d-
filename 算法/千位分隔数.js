//考点：while循环，和字符串slice这个API的熟悉度
/*
slice
第一个参数：从N位“之后”开始截取，如果是0则是从头开始，如果是负数则是默认从后开始负N位截取（-3就是后三位）
第二个参数：到N位结束。
原数组不变，返回截取后的结果。
*/
const addComma = (num) => {
  let str = num.toString(); //转化字符串
  let result = "";
  while (str.length > 3) { //while循环，当条件为true一直循环
    result = "," + str.slice(-3) + result; //往result里面加逗号和后三位值 silce截取后三位
    str = str.slice(0, str.length - 3); //从字符串里面裁掉后三位
  }
  if (str) {
    result = str + result; //如果有不满足三位的剩余，就一直吧剩余的加在result前面
  };
  return result;
}

//考点：取余%和如何实现从尾部开始递减循环
/*
取余%：第一个数 除以第二个数 返回剩余的余数。如果无余数则返回“数字0”。 3%3=0 6%3=0 4%3=1
递减for循环：i等于xx.length-1，因为循环是从0开始的所以-1，i>=0, i--自减
*/

const addComma = (num) => {
  let str = num.toString(); //转化字符串
  let count = 0;
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) { //从尾部开始循环， -1因为循环下角标从0开始的，每次递减
    count++;
    if (count % 3) { //当不为3倍数  当前值+以前的值
      result = str[i] + result; //
    } else { //当为3倍数 加个逗号+当前值+以前的值
      result = "," + str[i] + result; //
    }
  };
  return result;
}


let num = 12345678;
const newNum = addComma(num);
console.log(newNum);