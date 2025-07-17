/**
 * Finds the majority element that occurs more than half the time in the array.
 * @param {number[]} numbers - Input array of numbers
 * @return {number} - The majority element
 */

const majorityElement = (inputArray) => {
  const counts = {};
  const majorityCount = Math.floor(inputArray.length / 2);

  for (const number of inputArray) {
    counts[number] = (counts[number] || 0) + 1;
    if (counts[number] > majorityCount) return number;
  }
};

console.log(majorityElement([3, 2, 3]));

/**
 * Results: 3
 */
