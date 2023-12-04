const runningSum = (arr) => {
  for (var i = 1; i < arr.length; i++) {
    arr[i] += arr[i-1]
  }
  return arr;
}
const nums = [1, 2, 3, 4]
const newNum = runningSum(nums);
console.log(newNum)