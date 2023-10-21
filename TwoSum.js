/**
 * Given an sorted array of integers "arr" and an integer "k", return indices of the two numbers such that they add up to k.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.
 */

function twoSum(arr, k) {
  const length = arr.length;

  let i = 0;
  let j = length - 1;

  while (i < j) {
    let sum = arr[i] + arr[j];
    if (sum === k) {
      return [i, j];
    } else if (sum < k) {
      i++;
    } else {
      j--;
    }
  }
  return -1;
}
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 3, 4], 6));

// If the the array is not sorted
function twoSumFromUnsortedArr(arr, k) {
  let n = arr.length;
  let obj = {};
  for (let i = 0; i < n; i++) {
    /* Assuming our first element is arr[i]  */
    let secElemToFind = k - arr[i];
    if (obj[secElemToFind] !== undefined) {
      return [obj[secElemToFind], i];
    }
    obj[arr[i]] = i;
  }
  return -1;
}
console.log(twoSumFromUnsortedArr([3, 2, 4], 6));
