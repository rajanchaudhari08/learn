/**
 * Returns the maximum PRODUCT of a contiguous subarray using Dynamic Programming.
 * @param {number[]} numbers - Array of integers
 * @returns {number} - Maximum product of any contiguous subarray
 */

const maxProduct = (numbers) => {
  if (numbers.length === 0) return 0;

  let currentMaxProduct = numbers[0];
  let currentMinProduct = numbers[0];
  let maxProductResult = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    const current = numbers[i];

    if (current < 0) {
      [currentMaxProduct, currentMinProduct] = [
        currentMinProduct,
        currentMaxProduct,
      ];
    }

    currentMaxProduct = Math.max(current, currentMaxProduct * current);
    currentMinProduct = Math.min(current, currentMinProduct * current);

    maxProductResult = Math.max(maxProductResult, currentMaxProduct);
  }

  return maxProductResult;
};

console.log(maxProduct([-2, 3, -4]));

/**
 * Results: 24
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
