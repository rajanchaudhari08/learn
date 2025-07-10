/**
 * Returns words that can be typed using letters from only one keyboard row.
 * @param {string[]} wordList - Array of words to check.
 * @returns {string[]} - Words that can be typed using a single keyboard row.
 */

const findWords = (wordList) => {
  const rows = [
    new Set("qwertyuiop"),
    new Set("asdfghjkl"),
    new Set("zxcvbnm"),
  ];

  const matchingWords = [];

  for (const word of wordList) {
    const lowerWord = word.toLowerCase();
    const targetRow = rows.find((row) => row.has(lowerWord[0]));

    const fitsOneRow = [...lowerWord].every((char) => targetRow.has(char));

    if (fitsOneRow) {
      matchingWords.push(word);
    }
  }

  return matchingWords;
};

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));

/**
 * Results: ["Alaska","Dad"]
 */
