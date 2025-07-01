/**
 * Removes every instance of the target value from the array in-place.
 * @param {number[]} numbers - The array of numbers.
 * @param {number} targetValue - The value to remove.
 * @returns {number} - The count of elements not equal to targetValue.
 */

const removeElement = (numbers, targetValue) => {
  let nextWrite = 0;

  numbers.forEach((n) => {
    if (n !== targetValue) {
      numbers[nextWrite] = n;
      nextWrite++;
    }
  });

  return nextWrite;
};

const numbers = [0, 1, 2, 2, 3, 0, 4, 2];
const targetValue = 2;

const validCount = removeElement(numbers, targetValue);

console.log(`validCount: ${validCount}`);
console.log(numbers.slice(0, validCount));

/**
 * Results -
 * validCount: 5
 * Filtered Array: [ 0, 1, 3, 0, 4 ]
 */
