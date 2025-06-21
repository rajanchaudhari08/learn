/**
 * Return the number of possible combinations that add up to the target.
 * @param {number[]} numbers - Array of distinct integers.
 * @param {number} target - Target sum.
 * @returns {number} - Number of combinations.
 */

const combinationSum = (numbers, target) => {
  const totalCombinationCounts = new Array(target + 1).fill(0);
  totalCombinationCounts[0] = 1; // Base case: one way to make sum 0 (empty combination)

  for (let accumulatedSum = 1; accumulatedSum <= target; accumulatedSum++) {
    for (const n of numbers) {
      if (n <= accumulatedSum) {
        totalCombinationCounts[accumulatedSum] +=
          totalCombinationCounts[accumulatedSum - n];
      }
    }
  }

  return totalCombinationCounts[target];
};

console.log(combinationSum([1, 2, 3], 4));

/**
 * Results: 7
 * Time Complexity: O(numbers × target) [outer loop runs target times ---> O(t); inner loop iterates through all numbers ---> O(n)]
 * Space Complexity: O(target)
 */
