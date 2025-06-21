/**
 * Calculates the maximum water a container can store between vertical lines.
 * @param {number[]} heights - Array of non-negative integers representing vertical line heights.
 * @returns {number} - The maximum area of water the container can hold.
 */

const getMaxWaterArea = (heights) => {
  let maximumCapacity = 0;
  let leftIndex = 0;
  let rightIndex = heights.length - 1;

  while (leftIndex < rightIndex) {
    const minHeight = Math.min(heights[leftIndex], heights[rightIndex]);
    const width = rightIndex - leftIndex;
    const containerArea = minHeight * width;

    maximumCapacity = Math.max(maximumCapacity, containerArea);

    if (heights[leftIndex] < heights[rightIndex]) {
      leftIndex++;
    } else {
      rightIndex--;
    }
  }

  return maximumCapacity;
};

const lineHeights = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log("Maximum Water Area:", getMaxWaterArea(lineHeights));

/**
 * Results: 49
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
