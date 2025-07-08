/**
 * Converts a Roman numeral string to its integer value.
 * @param {string} romanNumeral - A valid Roman numeral string.
 * @returns {number} The integer representation of the Roman numeral.
 */

const romanToInteger = (romanNumeral) => {
  const romanMap = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  let totalValue = 0;

  for (let i = 0; i < romanNumeral.length; i++) {
    const currentValue = romanMap.get(romanNumeral[i]);
    const nextValue = romanMap.get(romanNumeral[i + 1]);

    if (nextValue > currentValue) {
      totalValue += nextValue - currentValue;
      i++;
    } else {
      totalValue += currentValue;
    }
  }

  return totalValue;
};

console.log(romanToInteger("MCMXCIV"));

/**
 * Results: 1994
 */
