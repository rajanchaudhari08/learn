/**
 * Returns true if the input string has valid parentheses.
 * @param {string} expression - The input string containing only '()', '{}', '[]'.
 * @returns {boolean} True if the string is valid, false otherwise.
 */

const isValidParentheses = (expression) => {
  const bracketStack = [];
  const bracketPairs = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (const character of expression) {
    if (bracketPairs[character]) {
      bracketStack.push(bracketPairs[character]);
    } else {
      if (bracketStack.pop() !== character) {
        return false;
      }
    }
  }

  return bracketStack.length === 0;
};

console.log(isValidParentheses("()[]{}"));

/**
 * Results: true
 */
