/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction.
 * If you cannot achieve any profit, return 0
 */

function bestTimeToBuyAndSellStock(prices) {
  let n = prices.length;
  if (n === 0) {
    return 0;
  }

  let minPrice = Infinity;
  let maxProfit = [];

  for (let i = 0; i < n; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else {
      let dayProfit = prices[i] - minPrice;
      maxProfit.push(dayProfit);
    }
  }

  if (maxProfit.length > 0) {
    return Math.max(...maxProfit);
  }
  return 0;
}
console.log(bestTimeToBuyAndSellStock([7, 1, 5, 3, 6, 4])); //Expected output: 5
console.log(bestTimeToBuyAndSellStock([7, 6, 4, 3, 1])); //Expected output: 0
console.log(bestTimeToBuyAndSellStock([3, 1, 4, 2, 1])); // Expected output: 3
