// Recursive function to calculate base^exponent (i.e., base raised to the power exponent)
function calulateThePower(base, exponent) {
    // Base case: anything raised to the power 0 is 1
    if (exponent === 0) return 1;

    // Recursive step: calculate base^(exponent - 1)
    const recursive = calulateThePower(base, exponent - 1);

    // Print current intermediate result from the recursive call
    console.log(`Calculating ${base} raised to power ${exponent - 1}: ${recursive}`);

    // Multiply current base with result of recursive call to get base^exponent
    const value = base * recursive;

    // Return the final computed value
    return value;
}

// Final call to compute 2^10 = 1024
console.log(calulateThePower(2, 10));

/**
 * 📚 STACK EXECUTION TRACE (2^3 Example for simplicity):
 *
 * Forward Phase (Recursive calls):
 * calulateThePower(2, 3)
 * └── calulateThePower(2, 2)
 *     └── calulateThePower(2, 1)
 *         └── calulateThePower(2, 0) → returns 1 (base case)
 * 
 * Backward Phase (Stack unwinds and multiplies):
 * calulateThePower(2, 1) = 2 * 1 = 2
 * calulateThePower(2, 2) = 2 * 2 = 4
 * calulateThePower(2, 3) = 2 * 4 = 8
 *
 * For input (2, 10):
 * Stack depth = 11 calls (from exponent 10 to 0)
 * Final result = 1024
 * 
 * -----------------------------------------
 * ⏱ Time Complexity: O(n)
 *    - `n` recursive calls where n = exponent
 *
 * 🧠 Space Complexity: O(n)
 *    - Each recursive call adds a frame to the call stack until exponent reaches 0
 *    - Stack depth = exponent + 1
 */
