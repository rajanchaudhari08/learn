/**
 * Performs binary search to find the target in a sorted array.
 * @param {number[]} sortedArray - An array sorted in ascending order.
 * @param {number} target - The value to search for.
 * @returns {number} - The index of target if found, otherwise -1.
 */

const binarySearch = (sortedArray, target) => {
  let leftIndex = 0;
  let rightIndex = sortedArray.length - 1;

  while (leftIndex <= rightIndex) {
    const pivotIndex = Math.floor(leftIndex + (rightIndex - leftIndex) / 2);

    if (sortedArray[pivotIndex] === target) {
      return pivotIndex;
    } else if (sortedArray[pivotIndex] < target) {
      leftIndex = pivotIndex + 1;
    } else {
      rightIndex = pivotIndex - 1;
    }
  }

  return -1;
};

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 2));

/**
 * Results: -1
 */
