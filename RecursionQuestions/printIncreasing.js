/**
 * Function: printIncreasingByRecursion
 * ------------------------------------
 * Recursively prints numbers in increasing order from 1 to `n`.
 * 
 * This function first makes recursive calls until `n` is 0 (base case), 
 * and then prints numbers on the way back from the recursion stack.
 *
 * @param {number} n - The number up to which to print.
 *
 * @example
 * printIncreasingByRecursion(5);
 * // Output:
 * // 1
 * // 2
 * // 3
 * // 4
 * // 5
 *
 * @complexity
 * Time Complexity: O(n)
 * - Each number from 1 to n is printed once.
 *
 * Space Complexity: O(n)
 * - Due to n recursive calls on the call stack.
 */
function printIncreasingByRecursion(n) {
    if (n > 0) {
        printIncreasingByRecursion(n - 1); // Go down to 1
        console.log(n); // Print while coming back
    }
}

// Example usage
printIncreasingByRecursion(10);
