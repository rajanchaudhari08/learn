/**
 * Finds all unique triplets in the array that sum up to zero.
 * @param {number[]} numbers - The input array of integers.
 * @returns {number[][]} - Array of unique triplets whose sum is zero.
 */

const findThreeSum = (numbers) => {
  const triplets = [];

  numbers.sort((a, b) => a - b); // Sort in ascending order for two-pointer approach

  for (let anchor = 0; anchor < numbers.length - 2; anchor++) {
    // Skip duplicate fixed elements to avoid duplicate triplets
    if (anchor > 0 && numbers[anchor] === numbers[anchor - 1]) continue;

    let leftPointer = anchor + 1;
    let rightPointer = numbers.length - 1;

    while (leftPointer < rightPointer) {
      const sumOfTriplets =
        numbers[anchor] + numbers[leftPointer] + numbers[rightPointer];

      if (sumOfTriplets === 0) {
        triplets.push([
          numbers[anchor],
          numbers[leftPointer],
          numbers[rightPointer],
        ]);

        // Skip duplicates for `leftPointer`
        while (
          leftPointer < rightPointer &&
          numbers[leftPointer] === numbers[leftPointer + 1]
        )
          leftPointer++;
        // Skip duplicates for `rightPointer`
        while (
          leftPointer < rightPointer &&
          numbers[rightPointer] === numbers[rightPointer - 1]
        )
          rightPointer--;

        leftPointer++;
        rightPointer--;
      } else if (sumOfTriplets < 0) {
        leftPointer++;
      } else {
        rightPointer--;
      }
    }
  }

  return triplets;
};

console.log(findThreeSum([-1, 0, 1, 2, -1, -4]));

/**
 * Results: [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]
 * Time Complexity: O(n²)
 * Space Complexity: O(1)
 */
