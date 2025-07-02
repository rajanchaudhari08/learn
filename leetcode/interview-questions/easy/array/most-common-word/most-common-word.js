/**
 * Finds the most frequent word in a paragraph that is not excluded.
 * @param {string} paragraph - The input paragraph.
 * @param {string[]} excludedWords - Words to exclude.
 * @returns {string} - The most common non-excluded word.
 */

const mostCommonWord = (paragraph, excludedWords) => {
  const excludedWordSet = new Set(excludedWords);

  const normalizedWord = paragraph
    .toLowerCase()
    .replace(/[^a-z\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);

  const wordFrequency = new Map();

  for (const word of normalizedWord) {
    if (!excludedWordSet.has(word)) {
      wordFrequency.set(word, (wordFrequency.get(word) || 0) + 1);
    }
  }

  let mostFrequentWord = "";
  let maxCount = 0;

  for (const [word, count] of wordFrequency.entries()) {
    if (count > maxCount) {
      mostFrequentWord = word;
      maxCount = count;
    }
  }

  return mostFrequentWord;
};

const paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.";
const excludedWords = ["hit"];

console.log(mostCommonWord(paragraph, excludedWords));

/**
 * Results: ball
 */
