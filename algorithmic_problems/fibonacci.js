// fibonacci
//just a simple fibonacci calculator, with memoization
//by using two recursive calls, we define the fibonacci(n)-th number
//fibonacci(n) = fibonacci(n - 1) + fibonacci(n - 1);
//think of the solution this way
//every recursive call does two recursive calls for its own
//then if we get to the base case, that is, if n<=2, we simply return number 1
//from there on, it continues to build back the unanswered function calls
//and as the recursion call remembers the exact inputs of the particular function call,
//we get the exact value we required during the execution, and in the end, we get the desired value!

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
