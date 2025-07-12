/**
 * Checks if the given integer is a palindrome without converting to a string.
 * @param {inputValue} inputValue - The input integer.
 * @returns {boolean} - True if the inputValue is a palindrome, false otherwise.
 */

const isPalindrome = (inputValue) => {
  if (inputValue < 0 || (inputValue % 10 === 0 && inputValue !== 0))
    return false;

  let reversedHalf = 0;
  while (inputValue > reversedHalf) {
    reversedHalf = reversedHalf * 10 + (inputValue % 10);
    inputValue = Math.floor(inputValue / 10);
  }

  return (
    inputValue === reversedHalf || inputValue === Math.floor(reversedHalf / 10)
  );
};

console.log(isPalindrome(121));

/**
 * Results: True
 * Time Complexity: O(n log n)
 */
