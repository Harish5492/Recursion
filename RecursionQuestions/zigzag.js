/**
 * Zig-Zag Recursion - Binary Tree Style
 * -------------------------------------
 *
 * In this pattern, we use recursion in such a way that it forms a binary tree structure.
 * The zigZag(n) function performs the following for each value of n:
 *
 * 1. Prints "Pre" before the first recursive call
 * 2. Prints "In" between the two recursive calls
 * 3. Prints "Post" after the second recursive call
 *
 * This matches the structure of a binary tree traversal:
 * - Pre = Before left recursion
 * - In  = Between left and right
 * - Post = After right recursion
 *
 * Let's look at the function:
 */

function zigZag(n) {
    if (n === 0) return;

    console.log("Pre:", n);      // Pre-order position
    zigZag(n - 1);               // Left subtree
    console.log("In:", n);       // In-order position
    zigZag(n - 1);               // Right subtree
    console.log("Post:", n);     // Post-order position
}

zigZag(2);

/**
 * 🌳 Binary Tree Structure for zigZag(2)
 * -------------------------------------
 * Each recursive call creates a node in the binary tree. Here's the structure:
 *
 *                      zigZag(2)
 *                     /        \
 *              zigZag(1)      zigZag(1)
 *               /    \         /     \
 *         zigZag(0) zigZag(0) zigZag(0) zigZag(0)
 *
 * Legend:
 * - "Pre" is logged before going to the left
 * - "In" is logged after left and before right
 * - "Post" is logged after the right
 *
 * ✅ Function Call Flow (like traversal)
 * -------------------------------------
 * zigZag(2)
 *   → "Pre: 2"
 *   zigZag(1)
 *     → "Pre: 1"
 *     zigZag(0) → base case (no output)
 *     → "In: 1"
 *     zigZag(0) → base case
 *     → "Post: 1"
 *   → "In: 2"
 *   zigZag(1)
 *     → "Pre: 1"
 *     zigZag(0) → base case
 *     → "In: 1"
 *     zigZag(0) → base case
 *     → "Post: 1"
 *   → "Post: 2"
 *
 * 🔁 Output of zigZag(2):
 * -----------------------
 * Pre: 2
 * Pre: 1
 * In: 1
 * Post: 1
 * In: 2
 * Pre: 1
 * In: 1
 * Post: 1
 * Post: 2
 *
 * 📌 Summary:
 * ----------
 * - The function's recursion pattern creates a binary tree structure.
 * - The "Pre", "In", and "Post" logs act like different tree traversal phases.
 * - Zig-Zag refers to the movement through recursive levels, going left, back, then right.
 */
