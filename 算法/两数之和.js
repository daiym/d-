/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//  var twoSum = function(nums, target) {
//    for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//         if (target - nums[i] === nums[j]) {
//             return [i, j];
//         }
//     }
//   }
// };

var twoSum = function (nums, target) {
  var map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let result = target - nums[i];
    if (map.has(result)) {
      return [map.get(result), i];
    }
    map.set(nums[i], i);
  }
}


let nums = [ 4, 3, 7, 2];
let arr = twoSum(nums, 9);
console.log(arr);