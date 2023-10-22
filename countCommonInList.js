// We have given two Sorted Array 'arr1', 'arr2' of same length.
// We need to find the common elements in both array using most optimal approach.

function countCommonInSortedArr(arr1, arr2) {
  let n = arr1.length;

  let i = 0;
  let j = 0;

  let count = 0;
  while (i < n && j >= 0) {
    if (arr1[i] === arr2[j]) {
      count++;
      i++;
      j++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else {
      j++;
    }
  }

  console.log(count);
}
countCommonInSortedArr([1, 2, 4, 6, 8], [1, 3, 4, 6, 9]);
