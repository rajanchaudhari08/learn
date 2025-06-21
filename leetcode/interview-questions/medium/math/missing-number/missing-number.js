/**
 * Finds the missing number using XOR bit manipulation.
 * @param {number[]} numbers - Array of n distinct numbers in the range [0, n].
 * @returns {number} - The missing number.
 */

const findMissingNumber = (numbers) => {
  let missingNumber = 0;
  const n = numbers.length;

  for (let i = 0; i < n; i++) {
    missingNumber ^= i ^ numbers[i];
  }

  missingNumber ^= n;

  return missingNumber;
};

console.log(findMissingNumber([3, 0, 1]));

/**
 * Results: 2
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
