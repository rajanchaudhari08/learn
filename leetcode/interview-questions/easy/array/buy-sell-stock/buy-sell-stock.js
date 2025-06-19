/**
 * Calculates the Maximum PROFIT from a Single Buy-Sell Transaction in a Stock Price Array.
 * Computes profit under the constraint that a stock must be purchased before it is sold.
 * @param {number[]} prices - An Array of Stock Prices where prices[i] is the price on day i.
 * @returns {number} - The Maximum PROFIT possible. Returns 0 if no profitable transaction is possible.
 */

const maxProfit = (prices) => {
  if (!Array.isArray(prices) || prices.length < 2) return 0;

  let min = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    maxProfit = Math.max(maxProfit, prices[i] - min);
  }

  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));

/**
 * Results: 5
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
