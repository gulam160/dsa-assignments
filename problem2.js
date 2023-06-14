function findDuplicate(arr) {
  let asc = arr.sort((a, b) => a - b);

  let diary = {};
  for (let i = 0; i < asc.length; i++) {
    let key = asc[i];
    if (diary[key] === undefined) {
      diary[key] = 1;
    } else {
      diary[key]++;
    }
  }

  let result = [];
  for (let key in diary) {
    if (diary[key] === 2) {
      result.push(+key);
    }
  }

  console.log(result);
}
let input = [4, 3, 2, 7, 8, 2, 3, 1];
findDuplicate(input);
