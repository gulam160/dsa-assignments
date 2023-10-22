/**
 * Given an array of integers nums which is sorted in ascending order, and
an integer target , write a function to search target in nums  If target
exists, then return its index Otherwise, return -1 
 */

function linearSearch(nums, target) {
  for (let i = 0; i < nums; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
  return -1;
}

consolelog(linearSearch([-1, 0, 3, 5, 9, 12], 9));
consolelog(linearSearch([-1, 0, 3, 5, 9, 12], 2));
consolelog(linearSearch([8, 5, 4, 2], 1));
