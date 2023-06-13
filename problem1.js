function majorityElement(arr) {
  let n = arr.length;
  let obj = {};

  for (let elements of arr) {
    if (obj[elements] === undefined) {
      obj[elements] = 1;
    } else {
      obj[elements]++;
    }
  }

  let max = Math.round(n / 2);
  for (let key in obj) {
    if (obj[key] > max) {
      console.log(key);
      return;
    }
  }
  console.log(-1);
}
let arr = [2, 4, 5, 5, 5, 5, 5];
majorityElement(arr);
