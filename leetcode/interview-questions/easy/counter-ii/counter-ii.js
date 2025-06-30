/**
 * Creates a counter with increment, decrement, and reset functionality.
 * @param {number} initialValue - The initial value of the counter.
 * @returns {Object} - An object with increment, decrement, and reset methods.
 */

const createCounter = (initialValue) => {
  let counterValue = initialValue;

  return {
    increment: () => ++counterValue,
    decrement: () => --counterValue,
    reset: () => {
      counterValue = initialValue;
      return counterValue;
    },
  };
};

const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());

/**
 * Results: [6,5,4]
 */
