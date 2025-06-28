/**
 * Reverses the digits of a 32-bit signed integer.
 * @param {number} x - The integer to reverse.
 * @returns {number} - The reversed integer, or 0 if it exceeds 32-bit integer limits.
 */

const reverseInteger = (x) => {
  const INT_MIN = -(2 ** 31);
  const INT_MAX = 2 ** 31 - 1;

  let signedInteger = Math.abs(x);
  let reversedInteger = 0;

  while (signedInteger !== 0) {
    const digit = signedInteger % 10;
    reversedInteger = reversedInteger * 10 + digit;
    signedInteger = Math.floor(signedInteger / 10);
  }

  if (reversedInteger > INT_MAX) return 0;

  return x < 0 ? -reversedInteger : reversedInteger;
};

console.log(reverseInteger(123));

/**
 * Results: 321
 * Time Complexity: O(log₁₀ N)
 * Space Complexity: O(1)
 */
