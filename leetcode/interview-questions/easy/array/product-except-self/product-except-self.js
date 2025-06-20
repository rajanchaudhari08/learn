/**
 * Returns an array where each element is the PRODUCT of all elements except the one at that index.
 *
 * @param {number[]} numbers - The INPUT Array of Integers.
 * @returns {number[]} - PRODUCT Array.
 */

const productExceptSelf = (numbers) => {
  const n = numbers.length;
  const output = new Array(n).fill(1);

  let productToLeft = 1;
  for (let i = 0; i < n; i++) {
    output[i] = productToLeft;
    productToLeft *= numbers[i];
  }

  let productToRight = 1;
  for (let i = n - 1; i >= 0; i--) {
    output[i] *= productToRight;
    productToRight *= numbers[i];
  }

  return output;
};

console.log(productExceptSelf([1, 2, 3, 4]));

/**
 * Results: [ 24, 12, 8, 6 ]
 * Time Complexity: O(n) [Operation "fill" has Constant Time]
 * Space Complexity: O(1) [Excluding the Product Array]
 */
