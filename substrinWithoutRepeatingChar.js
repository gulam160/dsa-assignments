function substrinWithoutRepeatingChar(s) {
  let obj = {};

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (obj[char] === undefined) {
      obj[char] = 1;
    }
  }

  let res = "";
  for (let key in obj) {
    res += key;
  }

  return res.length;
}
console.log(substrinWithoutRepeatingChar("abcabcbb")); // Should return 3
console.log(substrinWithoutRepeatingChar("bbbbb")); // Should return 1
console.log(substrinWithoutRepeatingChar("pwwkew")); // Should return 3
