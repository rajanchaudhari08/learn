/**
 * Returns the single number that appears only once in an array where every other number appears twice.
 * @param {number[]} numbers - The array of integers.
 * @returns {number} - The unique number.
 */

const findUniqueNumber = (numbers) => {
  let uniqueValue = 0;
  for (const number of numbers) {
    uniqueValue ^= number;
  }
  return uniqueValue;
};

console.log(findUniqueNumber([2, 2, 1]));

/**
 * Results: 1
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
