// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
// Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0.
// You may assume that you have an infinite number of each kind of coin.
// The answer is guaranteed to fit into a signed 32-bit integer.

function coinChange (amount, coins) {
    let ways = new Array(amount+1).fill(0);

    // base case: if $0, only 1 way to make change - use NO COINS!
    ways[0] = 1;

    for (let coin of coins) {
      for (let i = 0; i < ways.length; i++) {
        
        // if the coin is less than the current way
        if (i >= coin) {
          
          // then the # of ways for current amount is current ways + the # of ways for current ways - coin
          ways[i] += ways[i-coin];
        }
      };
    };

    return ways[amount];
  }

// O(m*n) time; O(n) space

module.exports = coinChange;