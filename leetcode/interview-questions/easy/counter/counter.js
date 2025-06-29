/**
 * Creates a counter function that returns initialValue, initialValue+1, initialValue+2, ...
 * @param {number} initialValue - The initial value to start counting from.
 * @return {Function} - The counter function.
 */

const createCounter = (initialValue) => {
  let counterValue = initialValue;

  return function () {
    return counterValue++;
  };
};

const counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());

/**
 * Results: [10,11,12]
 */
