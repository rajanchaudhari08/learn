/**
 * Returns the index of the target in a sorted array, or where it should be inserted.
 * @param {number[]} sortedArray - A sorted array of distinct integers.
 * @param {number} targetValue - The target value to search for.
 * @returns {number} - Index of target if found, or the correct insertion index.
 */

const searchInsertPosition = (sortedArray, targetValue) => {
  let leftIndex = 0;
  let rightIndex = sortedArray.length - 1;

  while (leftIndex <= rightIndex) {
    const pivotIndex = Math.trunc((leftIndex + rightIndex) / 2);

    if (sortedArray[pivotIndex] === targetValue) {
      return pivotIndex;
    }

    if (sortedArray[pivotIndex] < targetValue) {
      leftIndex = pivotIndex + 1;
    } else {
      rightIndex = pivotIndex - 1;
    }
  }
  return leftIndex;
};

console.log(searchInsertPosition([1, 3, 5, 6], 5));

/**
 * Results: 2
 */
