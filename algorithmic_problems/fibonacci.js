// fibonacci
//just a simple fibonacci calculator, with memoization

const fib = (n, memo = {}) => {
    // base cases
    if (memo[n]) return memo[n];
    if (n <= 2) return 1;

    const sum = fib(n - 1, memo) + fib(n - 2, memo);
    memo[n] = sum;
    return sum;
}

console.log(fib(6)); // 8
console.log(fib(7)); // 13
console.log(fib(50)); // 12586269025
