const newArr = (arr1, arr2) => {
  const arrs = [...new Set(arr1.concat(arr2))].sort();
  return arrs.filter(item => !(item % 2));
}

const arr1 = [1, 3, 2, 3, 8, 4, 3];
const arr2 = [3, 6, 2, 9, 5, 9, 2, 4];
const result = newArr(arr1, arr2);
console.log(result);