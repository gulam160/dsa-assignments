function validPalindrom(s) {
  let str = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

  return str === str.split("").reverse().join("");
}

console.log(validPalindrom("A man, a plan, a canal: Panama"));
console.log(validPalindrom("race a car"));
console.log(validPalindrom(" "));
