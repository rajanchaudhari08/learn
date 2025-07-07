/**
 * Calculates the sum of two non-negative numbers in string format.
 * @param {string} firstNumberString - The first non-negative integer as a string.
 * @param {string} secondNumberString - The second non-negative integer as a string.
 * @returns {string} The sum of the two numbers as a string.
 */

const addStrings = (firstNumberString, secondNumberString) => {
  let result = "";
  let carryOver = 0;
  let firstIndex = firstNumberString.length - 1;
  let secondIndex = secondNumberString.length - 1;

  while (firstIndex >= 0 || secondIndex >= 0 || carryOver > 0) {
    let digitFirst =
      firstIndex >= 0
        ? firstNumberString.charCodeAt(firstIndex) - "0".charCodeAt(0)
        : 0;
    let digitSecond =
      secondIndex >= 0
        ? secondNumberString.charCodeAt(secondIndex) - "0".charCodeAt(0)
        : 0;

    let sum = digitFirst + digitSecond + carryOver;
    carryOver = Math.floor(sum / 10);
    result = (sum % 10).toString() + result;

    firstIndex--;
    secondIndex--;
  }

  return result;
};

console.log(addStrings("11", "123"));

/**
 * Results: 134
 */
