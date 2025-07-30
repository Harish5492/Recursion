// Recursive function to calculate factorial and log the process
function printFactorialNumber(n) {
    // Log current function call (shows how the stack builds up)
    console.log('hello from factorial function for number ' + n);

    // Base case: factorial(1) = 1
    if (n === 1) return 1;

    // Recursive call: function calls itself with n-1
    let value = n * printFactorialNumber(n - 1);

    // This line logs the factorial result after the recursive call returns
    // Shows how the stack unwinds (backward phase)
    console.log(value); 

    return value;
}

// Initial function call
printFactorialNumber(5);

/**
 * Stack Execution Flow:
 * 
 * Forward (Recursive Calls):
 * printFactorialNumber(5)
 * └── printFactorialNumber(4)
 *     └── printFactorialNumber(3)
 *         └── printFactorialNumber(2)
 *             └── printFactorialNumber(1) → returns 1
 * 
 * Backward (Stack Unwinds and computes):
 * printFactorialNumber(2) → 2 * 1 = 2
 * printFactorialNumber(3) → 3 * 2 = 6
 * printFactorialNumber(4) → 4 * 6 = 24
 * printFactorialNumber(5) → 5 * 24 = 120
 * 
 * Final Output: 120 (factorial of 5)
 * 
 * -----------------------------------------
 * ⏱ Time Complexity: O(n)
 *    - One call per value from n down to 1
 * 
 * 🧠 Space Complexity: O(n)
 *    - Each recursive call adds a new frame to the call stack
 *    - Stack depth = n
 */
