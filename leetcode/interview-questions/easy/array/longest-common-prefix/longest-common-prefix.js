/**
 * Finds the longest common prefix string among an array of strings.
 * @param {string[]} stringList - Array of input strings.
 * @returns {string} - The longest common prefix or an empty string if none exists.
 */

const longestCommonPrefix = (stringList) => {
  if (!stringList.length) return "";

  let prefix = stringList[0];

  for (let i = 1; i < stringList.length; i++) {
    while (stringList[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1);
      if (!prefix) return "";
    }
  }

  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));

/**
 * Results: "fl"
 */
