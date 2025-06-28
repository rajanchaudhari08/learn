/**
 * Mutates the input character array by reversing its elements.
 * @param {character[]} characters - The array of characters to reverse.
 * @returns {void} Do not return anything, modify characters in-place instead.
 */

const reverseString = (characters) => {
  let leftIndex = 0;
  let rightIndex = characters.length - 1;

  while (leftIndex < rightIndex) {
    [characters[leftIndex], characters[rightIndex]] = [
      characters[rightIndex],
      characters[leftIndex],
    ];
    leftIndex++;
    rightIndex--;
  }
};

const input = ["h", "e", "l", "l", "o"];
reverseString(input);
console.log(input);

/**
 * Results: ["o", "l", "l", "e", "h"]
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
