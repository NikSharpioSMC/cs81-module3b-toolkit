//simple basic function like double(n)

function double(n) { // Check if n is a number, if not, default to 0
  if (typeof n !== 'number') {
    n = 0; // Default value if n is not provided or is not a number
  }
  // Ensure n is a number before performing the operation
  if (isNaN(n)) {
    n = 0; // If n is NaN, default to 0
  }
  // Return the double of n
  // If n is provided, it will return n * 2
  // If n is not provided, it defaults to 0 and returns 0 * 2
  return n * 2; // If n is not provided, it defaults to 0
}

console.log("double: ", double(5));
console.log("double: ", double(10));
console.log("double: ", double("hello")); // Should return 0 since "hello" is not a number
console.log("double: ", double()); // Should return 0 since no argument is provided
console.log("double: ", double(0)); // Should return 0 since 0 * 2 = 0


// Example of a simple function to square a number
function square(n) {
  if (typeof n !== 'number') {
    n = 0; // Default value if n is not provided or is not a number
  }
  if (isNaN(n)) {
    n = 0; // If n is NaN, default to 0
  }
  return n * n; // Return the square of n
}

// Example usage of the square function
console.log("square ", square(4)); // Should return 16
console.log("square ", square(3.5)); // Should return 12.25
console.log("square ", square("hello")); // Should return 0 since "hello" is not a number
console.log("square ", square()); // Should return 0 since no argument is provided
console.log("square ", square(0)); // Should return 0 since 0 * 0 = 0
// Example of a function to check if a number is even
function isEven(n) {
  if (typeof n !== 'number') {
    n = 0; // Default value if n is not provided or is not a number
  }
  if (isNaN(n)) {
    n = 0; // If n is NaN, default to 0
  }
  return n % 2 === 0; // Return true if n is even, false otherwise
}

// Example usage of the isEven function
console.log("isEven ", isEven(4)); // Should return true
console.log("isEven ", isEven(5)); // Should return false
console.log("isEven ", isEven("hello")); // Should return false since "hello" is not a number
console.log("isEven ", isEven()); // Should return true since no argument is provided (defaults to 0)
console.log("isEven ", isEven(0)); // Should return true since 0 is even
// Example of a function to check if a number is odd
function isOdd(n) {
  if (typeof n !== 'number') {
    n = 0; // Default value if n is not provided or is not a number
  }
  if (isNaN(n)) {
    n = 0; // If n is NaN, default to 0
  }
  return n % 2 !== 0; // Return true if n is odd, false otherwise
}

// Example usage of the isOdd function
console.log("isOdd", isOdd(3)); // Should return true
console.log("isOdd", isOdd(6)); // Should return false
console.log("isOdd", isOdd("hello")); // Should return false since "hello" is not a number
console.log("isOdd", isOdd()); // Should return false since no argument is provided (defaults to 0)
console.log("isOdd", isOdd(0)); // Should return false since 0 is not odd
// Example of a function to multiply two numbers
function multiply(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    a = 0; // Default value if a or b is not provided or is not a number
    b = 0; // Default value if a or b is not provided or is not a number
  }
  if (isNaN(a) || isNaN(b)) {
    a = 0; // If a is NaN, default to 0
    b = 0; // If b is NaN, default to 0
  }
  return a * b; // Return the product of a and b
}
// Example usage of the multiply function
console.log("multiply", multiply(3, 4)); // Should return 12
console.log("multiply", multiply(2.5, 4)); // Should return 10
console.log("multiply", multiply("hello", 4)); // Should return 0 since "hello" is not a number
console.log("multiply", multiply()); // Should return 0 since no arguments are provided
console.log("multiply", multiply(0, 5)); // Should return 0 since 0 * 5 = 0
