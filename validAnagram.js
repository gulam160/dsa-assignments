/**
 * Given two strings s and t , return true if t is an anagram of s , and false otherwise.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word
 * or phrase, typically using all the original letters exactly once
 */

function isAnagram(s, t) {
  let str1 = s.split("").sort().join("");
  let str2 = t.split("").sort().join("");

  return str1 === str2;
}
console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
