/**
 * Returns the maximum subarray SUM using Divide and Conquer approach.
 * @param {number[]} numbers - Array of integers
 * @returns {number} - Maximum subarray sum
 */

const maxSubArray = (numbers) => {
  const findMaxSum = (start, end) => {
    if (start === end) return numbers[start];

    const midIndex = Math.floor((start + end) / 2);

    const leftMax = findMaxSum(start, midIndex);
    const rightMax = findMaxSum(midIndex + 1, end);
    const maxCrossSum = calculateCrossSum(start, midIndex, end);

    return Math.max(leftMax, rightMax, maxCrossSum);
  };

  const calculateCrossSum = (start, midIndex, end) => {
    let leftSum = -Infinity;
    let sum = 0;
    for (let i = midIndex; i >= start; i--) {
      sum += numbers[i];
      leftSum = Math.max(leftSum, sum);
    }

    let rightSum = -Infinity;
    sum = 0;
    for (let i = midIndex + 1; i <= end; i++) {
      sum += numbers[i];
      rightSum = Math.max(rightSum, sum);
    }

    return leftSum + rightSum;
  };

  return findMaxSum(0, numbers.length - 1);
};

console.log(maxSubArray([5, 4, -1, 7, 8]));

/**
 * Results: 23
 * Time Complexity: O(n log n) [Divide and Conquer Approach]
 * Space Complexity: O(n log n) [Divide and Conquer Approach]
 */
