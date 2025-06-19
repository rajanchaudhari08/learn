/**
 * Checks if an Array contains any Duplicate Values.
 * @function containsDuplicate
 * @param {number[]} numbers - The Array of Integers to Check.
 * @returns {boolean} TRUE if a duplicate is found; otherwise, FALSE.
 * @throws {TypeError} If the INPUT is not a Valid Array of Numbers.
 */

const containsDuplicate = (numbers) => {
  if (!Array.isArray(numbers)) {
    throw new TypeError("Input must be an Array!");
  }

  if (!numbers.every((n) => typeof n === "number")) {
    throw new TypeError("All Elements in the Array must be Numbers!");
  }

  const visited = new Set();

  for (const n of numbers) {
    if (visited.has(n)) {
      return true;
    }
    visited.add(n);
  }

  return false;
};

console.log(containsDuplicate([1, 1, 2, 2, 3, 3]));

/**
 * Results: True
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
