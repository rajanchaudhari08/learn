/**
 * Calculates the maximum sum of min(ai, bi) for all pairs.
 * @param {number[]} numbers - The array of 2n integers.
 * @returns {number} - The maximized sum.
 */

const arrayPairSum = (numbers) => {
  numbers.sort((a, b) => a - b);
  let maxSum = 0;

  for (let i = 0; i < numbers.length; i += 2) {
    maxSum += numbers[i];
  }

  return maxSum;
};

console.log(arrayPairSum([1, 4, 3, 2]));

/**
 * Results: 4
 * Time Complexity: O(n log n)
 */
