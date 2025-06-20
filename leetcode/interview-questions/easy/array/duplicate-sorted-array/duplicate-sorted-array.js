/**
 * Removes duplicates from a sorted array and returns the count of unique elements.
 * @param {number[]} numbers - A sorted array of integers (non-decreasing order).
 * @returns {number} - The number of unique elements (k), with the first k elements in-place.
 */

const removeDuplicates = (numbers) => {
  if (numbers.length === 0) return 0;

  let uniqueIndex = 1;

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] !== numbers[uniqueIndex - 1]) {
      numbers[uniqueIndex] = numbers[i];
      uniqueIndex++;
    }
  }

  return uniqueIndex;
};

const sortedArray = [1, 1, 2, 3, 3, 4];
const k = removeDuplicates(sortedArray);

console.log("Unique Elements Count:", k);
console.log("Modified Array:", sortedArray.slice(0, k));

/**
 * Results -
 * Unique Elements Count: 4
 * Modified Array: [1, 2, 3, 4]
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
