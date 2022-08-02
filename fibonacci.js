const { performance } = require("perf_hooks");

// Valores de controle:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89

const FibonacciDinamicoTopDown = (num, memo) => {
  memo[0] = 0;
  memo[1] = 1;
  if (memo[num] === undefined) {
    memo[num] =
      FibonacciDinamicoTopDown(num - 2, memo) +
      FibonacciDinamicoTopDown(num - 1, memo);
  }
  return memo[num];
};

const FibonacciDinamicoDownTop = (num) => {
  const memo = [];
  memo[0] = 0;
  memo[1] = 1;
  for (let i = 2; i <= num; i++) {
    if (memo[i] === undefined) {
      memo[i] = memo[i - 2] + memo[i - 1];
    }
  }
  return memo[num];
};

const FibonacciLento = (num) => {
  if (num == 0 || num == 1) {
    return num;
  }
  return FibonacciLento(num - 2) + FibonacciLento(num - 1);
};

let startTime = performance.now();
console.log(FibonacciLento(35));
let endTime = performance.now();
console.log(
  `O método de FibonacciLento demorou ${
    endTime - startTime
  } milisegundos para ser executado`
);

startTime = performance.now();
console.log(FibonacciDinamicoTopDown(100, []));
endTime = performance.now();
console.log(
  `O método de FibonacciDinamicoTopDown demorou ${
    endTime - startTime
  } milisegundos para ser executado`
);

startTime = performance.now();
console.log(FibonacciDinamicoDownTop(100));
endTime = performance.now();
console.log(
  `O método de FibonacciDinamicoDownTop demorou ${
    endTime - startTime
  } milisegundos para ser executado`
);
