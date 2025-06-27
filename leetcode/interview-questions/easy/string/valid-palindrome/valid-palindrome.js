/**
 * Determines whether the input string is a palindrome.
 * @param {string} inputText - The original input string.
 * @returns {boolean} - True if the text is a palindrome, false otherwise.
 */

const isPalindrome = (inputText) => {
  const filteredText = inputText.replace(/[^a-z0-9]/gi, "").toLowerCase();

  let leftPointer = 0;
  let rightPointer = filteredText.length - 1;

  while (leftPointer < rightPointer) {
    if (filteredText[leftPointer] !== filteredText[rightPointer]) {
      return false;
    }
    leftPointer++;
    rightPointer--;
  }

  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));

/**
 * Results: true
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
