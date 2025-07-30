// Recursive function to calculate power using Exponentiation by Squaring
function calculatePowerByHalf(base, exponent) {
    // Base case: anything raised to the power 0 is 1
    if (exponent === 0) return 1;
  
    // Recursive step: halve the exponent (floor to ensure integer)
    let half = calculatePowerByHalf(base, Math.floor(exponent / 2));
  
    // Square the result of the half power
    let finalValue = half * half;
  
    // If exponent is odd, multiply by base once more
    if (exponent % 2 === 1) {
      finalValue *= base;
    }
  
    // Debug print to observe calculation at each step
    console.log(`base: ${base}, exponent: ${exponent}, value: ${finalValue}`);
    return finalValue;
  }
  
  // Call the function with base 2 and exponent 10 → Expected output: 1024
  console.log(calculatePowerByHalf(2, 10));
  