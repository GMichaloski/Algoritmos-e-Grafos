const knapsackProblem = (knapsackSize, itemCount) => {
  const items = [
    [2, 6],
    [3, 14],
    [2, 7],
    [4, 18],
    [6, 24],
  ];
  const memo = [];
  memo[0] = 0;
  items.unshift([0, 0]);
  if (!knapsackSize || !itemCount) {
    return 0;
  }
  for (let i = 0; i <= itemCount; i++) {
    if (memo[i] === undefined) {
      const currentItemWeight = items[i][0];
      if (knapsackSize - currentItemWeight >= 0) {
        memo[i] = Math.max(
          memo[i - 1],
          items[i][1] + knapsackProblem(knapsackSize - items[i][0], i - 1)
        );
        continue;
      }
      memo[i] = memo[i - 1];
    }
  }
  return memo[itemCount];
};
console.log(knapsackProblem(17, 5));
