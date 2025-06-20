/**
 * Finds the minimum element in a rotated sorted array using binary search.
 * @param {number[]} numbers - A rotated sorted array of unique integers.
 * @returns {number} The minimum element in the array.
 */

const findMinimum = (numbers) => {
  let leftIndex = 0;
  let rightIndex = numbers.length - 1;

  while (leftIndex < rightIndex) {
    const midIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (numbers[midIndex] > numbers[rightIndex]) {
      leftIndex = midIndex + 1;
    } else {
      rightIndex = midIndex;
    }
  }

  return numbers[leftIndex];
};

console.log(findMinimum([3, 4, 5, 1, 2]));

/**
 * Results: 1
 * Time Complexity: O(log n) [Binary Search]
 * Space Complexity: O(1)
 */
