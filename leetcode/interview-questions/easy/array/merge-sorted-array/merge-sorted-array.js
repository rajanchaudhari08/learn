/**
 * Merges two sorted arrays in-place.
 * @param {number[]} primaryArray - The main array with length primaryCount + secondaryCount.
 * @param {number} primaryCount - Number of valid elements in primaryArray.
 * @param {number[]} secondaryArray - The array to merge into primaryArray.
 * @param {number} secondaryCount - Number of elements in secondaryArray.
 * @returns {void}
 */

const mergeSortedArrays = (
  primaryArray,
  primaryCount,
  secondaryArray,
  secondaryCount
) => {
  let i = primaryCount - 1;
  let j = secondaryCount - 1;
  let k = primaryCount + secondaryCount - 1;

  while (i >= 0 && j >= 0) {
    if (primaryArray[i] > secondaryArray[j]) {
      primaryArray[k] = primaryArray[i];
      i--;
    } else {
      primaryArray[k] = secondaryArray[j];
      j--;
    }
    k--;
  }

  while (j >= 0) {
    primaryArray[k] = secondaryArray[j];
    j--;
    k--;
  }
};

const primaryArray = [1, 2, 3, 0, 0, 0];
const secondaryArray = [4, 5, 6];
const primaryCount = 3;
const secondaryCount = 3;

mergeSortedArrays(primaryArray, primaryCount, secondaryArray, secondaryCount);
console.log(primaryArray);

/**
 * Results: [ 1, 2, 3, 4, 5, 6 ]
 */
