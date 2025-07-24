/**
 * Function: printDecreasingByRecursion
 * ------------------------------------
 * Recursively prints numbers in decreasing order from `n` to 1.
 * 
 * This function prints the number first, then makes a recursive call 
 * with n - 1 until it reaches the base case (n === 0).
 *
 * @param {number} n - The starting number to print from.
 *
 * @example
 * printDecreasingByRecursion(5);
 * // Output:
 * // 5
 * // 4
 * // 3
 * // 2
 * // 1
 *
 * @complexity
 * Time Complexity: O(n)
 * - Each number from n to 1 is printed once.
 *
 * Space Complexity: O(n)
 * - Due to n recursive calls on the call stack.
 */
function printDecreasingByRecursion(n) {
    if (n > 0) {
        console.log(n); // Print on the way down
        printDecreasingByRecursion(n - 1);
    }
}

// Example usage
printDecreasingByRecursion(10);
