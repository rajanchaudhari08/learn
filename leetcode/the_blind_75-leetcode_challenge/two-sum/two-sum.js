/**
 * Finds Two Indices such that the Numbers at those Indices SUM to the TARGET.
 * @param {number[]} numbers - Array of Integers.
 * @param {number} target - Target Sum.
 * @returns {[number, number]} - Indices of the Two Numbers.
 */

const twoSum = (numbers, target) => {
  const numberToIndexMap = new Map(); // Store Numbers from the Array as Keys and their Indices as Values.

  for (let i = 0; i < numbers.length; i++) {
    const complement = target - numbers[i];

    if (numberToIndexMap.has(complement)) {
      return [numberToIndexMap.get(complement), i];
    }

    numberToIndexMap.set(numbers[i], i);
  }

  throw new Error("No Valid Two Sum Solution Exists!");
};

const inputArray = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(inputArray, target));

/**
 * Results: [0,1]
 * Time Complexity: O(n) × O(1) = O(n)
 * Time Complexity of "for" Loop: n × O(n) = O(n) [Number of Iterations: n; Time per Iterations: O(1)]
 * Map Lookup (has,get): O(1) Average per Lookup
 * Map Insertions (set): O(1) Average per Insert
 */
