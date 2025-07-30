/**
 * 🔢 Fibonacci Series
 * -------------------
 * The Fibonacci sequence is a series of numbers where:
 * 
 * F(0) = 0
 * F(1) = 1
 * F(n) = F(n - 1) + F(n - 2)  ← for n ≥ 2
 * 
 * The series becomes:
 * 0, 1, 1, 2, 3, 5, 8, 13, ...
 * 
 * Below we implement two versions:
 * 1. A basic recursive version
 * 2. An optimized memoized version
 */

///////////////////////////////////////////////
// ❌ 1. Basic Recursive Fibonacci (Inefficient)
///////////////////////////////////////////////

function fibonacciSeries(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
  
    // Repeated work: fibonacciSeries(n-1) and fibonacciSeries(n-2)
    return fibonacciSeries(n - 1) + fibonacciSeries(n - 2);
  }
  
  console.log("Recursive:", fibonacciSeries(10)); // 55
  
  /**
   * ⚠️ Why this is inefficient:
   * ---------------------------
   * This version has exponential time complexity: O(2^n)
   * For each n, it calls two smaller functions,
   * which each call two more, and so on...
   * 
   * For example, fibonacciSeries(5) calls:
   *   → fibonacciSeries(4) and fibonacciSeries(3)
   *   → fibonacciSeries(3), fibonacciSeries(2), etc...
   * 
   * This causes **recomputation of the same subproblems** multiple times.
   */
  
  ///////////////////////////////////////////////////
  // ✅ 2. Optimized Recursive Fibonacci with Memoization
  ///////////////////////////////////////////////////
  
  function fibonacciMemo(n, memo = {}) {
    if (n === 0) return 0;
    if (n === 1) return 1;
  
    // ✅ Use cached result if it exists
    if (memo[n]) return memo[n];
  
    // 🔁 Save the result of recursive calls in the cache
    memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
    return memo[n];
  }
  
  console.log("Memoized:", fibonacciMemo(10)); // 55
  console.log("Memoized (large):", fibonacciMemo(50)); // 12586269025
  
  /**
   * ✅ Why Memoization is Better:
   * -----------------------------
   * - Memoization stores results of expensive function calls.
   * - It avoids re-calculating the same subproblem multiple times.
   * - Time Complexity improves from O(2^n) to O(n).
   * 
   * 📦 The memo object works like a cache:
   *   memo[10] stores fibonacci(10)
   *   memo[9] stores fibonacci(9)
   *   and so on...
   * 
   * ✨ This is especially useful for large inputs like fibonacci(50)
   * which would take years in the basic recursive version.
   */
  
  ////////////////////////////////////////////////////////
  // 📌 Summary
  ////////////////////////////////////////////////////////
  
  /**
   * Method        | Time Complexity | Space Complexity | Notes
   * ------------- | --------------- | ---------------- | ----------------------------------
   * Recursive     | O(2^n)          | O(n)             | Simple but very slow for big `n`
   * Memoized      | O(n)            | O(n)             | Fast and efficient
   * Iterative     | O(n)            | O(1)             | Fastest with constant space
   */
  
  // You can test and compare both:
  console.log("Recursive (slow):", fibonacciSeries(10));    // 55
  console.log("Memoized (fast):", fibonacciMemo(50));       // 12586269025
  