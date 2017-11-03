function maxProfit(numbers) {
  var biggestProfit = 0;
  var profit = 0;

  for (var i = numbers.length - 1; i > 0; i--) {
    var sellValue = numbers[i];
    for (var j = i - 1; j >= 0; j--) {
      var buyValue = numbers[j];
      profit = sellValue - buyValue;
      if (profit > biggestProfit) {
        biggestProfit = profit;
      }
    }
  }
  if (biggestProfit === 0) {
    return -1;
  } else {
    return biggestProfit;
  }
}

console.log(maxProfit([45, 24, 35, 31, 40, 38, 11]));
console.log(maxProfit([45, 24, 35, 31, 40, 38, 11].sort()));
console.log(maxProfit([45, 24, 35, 31, 40, 38, 11].sort().reverse()));
