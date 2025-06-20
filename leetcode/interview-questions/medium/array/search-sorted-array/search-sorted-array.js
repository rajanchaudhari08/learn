/**
 * Search for a target value in a rotated sorted array.
 * @param {number[]} sortedArray - A rotated sorted array of unique integers.
 * @param {number} target - The value to search for.
 * @returns {number} - The index of the target if found, else -1.
 */

const searchInRotatedSortedArray = (sortedArray, target) => {
  let leftPointer = 0;
  let rightPointer = sortedArray.length - 1;

  while (leftPointer <= rightPointer) {
    const pivotIndex = Math.floor((leftPointer + rightPointer) / 2);

    if (sortedArray[pivotIndex] === target) {
      return pivotIndex;
    }

    if (sortedArray[leftPointer] <= sortedArray[pivotIndex]) {
      if (
        target >= sortedArray[leftPointer] &&
        target < sortedArray[pivotIndex]
      ) {
        rightPointer = pivotIndex - 1;
      } else {
        leftPointer = pivotIndex + 1;
      }
    } else {
      if (
        target > sortedArray[pivotIndex] &&
        target <= sortedArray[rightPointer]
      ) {
        leftPointer = pivotIndex + 1;
      } else {
        rightPointer = pivotIndex - 1;
      }
    }
  }

  return -1;
};

const inputArray = [4, 5, 6, 7, 0, 1, 2];
console.log(searchInRotatedSortedArray(inputArray, 0));

/**
 * Results: 4
 * Time Complexity:	O(log n)
 * Space Complexity: O(1)
 */
