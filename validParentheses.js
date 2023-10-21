/**
 * Given a string "s" containing just the characters '(' , ')' , '{' , '}' , '[' & ']' , determine if the input string is valid.
 *
 * An input string is valid if:
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type.
 */

const validParenthesis = (s) => {
  let stack = [];

  const braceDiary = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let char of s) {
    if (braceDiary[char]) {
      stack.push(char);
    } else {
      const lastOpenBracket = stack.pop();
      if (braceDiary[lastOpenBracket] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
console.log(validParenthesis("()")); // Should return true
console.log(validParenthesis("()[]{}")); // Should return true
console.log(validParenthesis("(]")); // Should return false
