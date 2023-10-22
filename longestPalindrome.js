/**
 * Given a string s which consists of lowercase letters,
 * return the length of the longest substring which is a palindrome.
 */

function longestPalindrome(s) {
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    let str = "";
    for (let j = 0; j < s.length; j++) {
      str += s[j];
      if (str === str.split("").reverse().join("") && str.length > max) {
        max = str.length;
      }
    }
  }

  console.log(max);
}
longestPalindrome("racecar"); //Expected Output: 7
longestPalindrome("a"); //Expected output: 1
