function mergeTwoSortedList(arr1, arr2) {
  let i = 0;
  let j = 0;
  let k = 0;

  let res = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      res[k++] = arr1[i++];
    } else {
      res[k++] = arr2[j++];
    }
  }

  while (i < arr1.length) {
    res[k++] = arr1[i++];
  }
  while (j < arr2.length) {
    res[k++] = arr2[j++];
  }

  return res;
}

console.log(mergeTwoSortedList([1, 2, 5], [1, 3, 4]));
console.log(mergeTwoSortedList([1, 3, 8], [0]));
