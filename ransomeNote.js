/**
 * Given two strings ransomNote and magazine ,
 * return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
 * Each letter in magazine can only be used once in ransomNote
 */

function ranSomeNoteContruction(ransomNote, magazine) {
  let charCount = {};

  for (let i = 0; i < magazine.length; i++) {
    let char = magazine[i];
    if (charCount[char] === undefined) {
      charCount[char] = 1;
    } else {
      charCount[char]++;
    }
  }

  for (let i = 0; i < ransomNote.length; i++) {
    if (!charCount[ransomNote[i]]) {
      return false;
    } else {
      charCount[ransomNote[i]]--;
    }
  }

  return true;
}
console.log(ranSomeNoteContruction("a", "b")); // Should return false
console.log(ranSomeNoteContruction("aa", "ab")); // Should return false
console.log(ranSomeNoteContruction("aa", "aab")); // Should return true
