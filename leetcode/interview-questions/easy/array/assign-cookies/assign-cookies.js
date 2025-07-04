/**
 * Finds the maximum number of children that can be content.
 * @param {number[]} greedFactors - Array of children's greed factors.
 * @param {number[]} cookieSizes - Array of available cookie sizes.
 * @return {number} - Maximum number of content children.
 */

const findContentChildren = (greedFactors, cookieSizes) => {
  greedFactors.sort((a, b) => a - b);
  cookieSizes.sort((a, b) => a - b);

  let contentChildren = 0;
  let greedIndex = 0;
  let cookieIndex = 0;

  while (greedIndex < greedFactors.length && cookieIndex < cookieSizes.length) {
    if (cookieSizes[cookieIndex] >= greedFactors[greedIndex]) {
      contentChildren++;
      greedIndex++;
    }
    cookieIndex++;
  }

  return contentChildren;
};

console.log(findContentChildren([1, 2, 3], [1, 1]));

/**
 * Results: 1
 */
