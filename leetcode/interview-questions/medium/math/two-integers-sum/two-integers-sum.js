/**
 * Computes the sum of two integers using bitwise operations.
 * @param {number} firstOperand - First integer operand.
 * @param {number} secondOperand - Second integer operand.
 * @returns {number} - The sum of firstOperand and secondOperand.
 */

const bitwiseAdd = (firstOperand, secondOperand) => {
  while (secondOperand !== 0) {
    const carryBits = firstOperand & secondOperand;
    firstOperand = firstOperand ^ secondOperand;
    secondOperand = carryBits << 1;
  }
  return firstOperand;
};

console.log(bitwiseAdd(-10, -20));

/**
 * Results: -30
 * Time Complexity: O(1) [32 Bits Iterations]
 * Space Complexity: O(1)
 */
