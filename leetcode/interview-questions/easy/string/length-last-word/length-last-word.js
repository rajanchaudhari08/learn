/**
 * Returns the length of the last word in a given string.
 * @param {string} inputString - Input string consisting of words and spaces
 * @return {number} - Length of the last word
 */

const lengthOfLastWord = (inputString) =>
  inputString.trim().split(/\s+/).at(-1).length;

console.log(lengthOfLastWord("Learn Javascript"));

/**
 * Results: 10
 */
