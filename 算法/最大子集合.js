const maxSumArray = (arr) => {
  let curSum = 0;
  let maxSum = 0;
  arr.forEach(item => {
    if (curSum + item >= item) {
      curSum = curSum + item;
    } else {
      curSum = item;
    };
    if (curSum >= maxSum) {
      maxSum = curSum;
    } else {
      maxSum = maxSum;
    }
  })
  return maxSum;

}
const arr = [1, 2, 3, 1, -3, 2];
const result = maxSumArray(arr);
console.log(result);