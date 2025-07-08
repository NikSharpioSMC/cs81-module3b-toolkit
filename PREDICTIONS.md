//Nik Sharpio
//Santa Monica College - Summer 2025 - CS81 Module 3b - Toolkit
//This is a simple toolkit for basic math functions
//https://github.com/NikSharpioSMC/cs81-module3b-toolkit

# Function Prediction: double(n)

## Prediction

The `double(n)` function will:

1. **Check if the input `n` is a number**
   - If `n` is not a number or/and NaN (Not a Number), it's default setting is 0.

2. **Return the double of the input**
   - Valid number(s), returns: `n * 2`
   - No argument, returns: `0 * 2 = 0`

## Expected Behavior

- `double(5)` → returns `10`
- `double()` → returns `0` (no argument provided)
- `double("hello")` → returns `0` (non-number input)
- `double(3.5)` → returns `7` (works with decimals)
- `double(0)` → returns `0`

## Current Test Case

The code calls `double()` with no arguments, so the predicted output is:
```
0
```
The function is designed to be robust and handle edge cases by defaulting to 0 when invalid or missing input is provided.

---

# Function Prediction: square(n)

## Prediction

The `square(n)` function will:

1. **Check if the input `n` is a number**
   - If `n` is not a number or NaN, it defaults to 0

2. **Return the square of the input**
   - Valid number: returns `n * n`
   - Invalid/missing input: returns `0 * 0 = 0`

## Expected Behavior

- `square(4)` → returns `16`
- `square(3.5)` → returns `12.25`
- `square("hello")` → returns `0` (non-number input)
- `square()` → returns `0` (no argument provided)
- `square(0)` → returns `0`

---

# Function Prediction: isEven(n)

## Prediction

The `isEven(n)` function will:

1. **Check if the input `n` is a number**
   - If `n` is not a number or NaN, it defaults to 0

2. **Return true if the number is even, false if odd**
   - Uses modulo operator: `n % 2 === 0`
   - Default value 0 is even, so returns `true` for invalid inputs

## Expected Behavior

- `isEven(4)` → returns `true`
- `isEven(5)` → returns `false`
- `isEven("hello")` → returns `true` (defaults to 0, which is even)
- `isEven()` → returns `true` (defaults to 0, which is even)
- `isEven(0)` → returns `true`

---

# Function Prediction: isOdd(n)

## Prediction

The `isOdd(n)` function will:

1. **Check if the input `n` is a number**
   - If `n` is not a number or NaN, it defaults to 0

2. **Return true if the number is odd, false if even**
   - Uses modulo operator: `n % 2 !== 0`
   - Default value 0 is even, so returns `false` for invalid inputs

## Expected Behavior

- `isOdd(3)` → returns `true`
- `isOdd(6)` → returns `false`
- `isOdd("hello")` → returns `false` (defaults to 0, which is not odd)
- `isOdd()` → returns `false` (defaults to 0, which is not odd)
- `isOdd(0)` → returns `false`

---

# Function Prediction: multiply(a, b)

## Prediction

The `multiply(a, b)` function will:

1. **Check if both inputs `a` and `b` are numbers**
   - If either `a` or `b` is not a number or NaN, both default to 0

2. **Return the product of the two inputs**
   - Valid numbers: returns `a * b`
   - Invalid/missing inputs: returns `0 * 0 = 0`

## Expected Behavior

- `multiply(3, 4)` → returns `12`
- `multiply(2.5, 4)` → returns `10`
- `multiply("hello", 4)` → returns `0` (non-number input)
- `multiply()` → returns `0` (no arguments provided)
- `multiply(0, 5)` → returns `0`

## Summary

All functions follow the same error-handling pattern:
- Type checking with `typeof n !== 'number'`
- NaN checking with `isNaN(n)`
- Default to 0 for invalid inputs
- Perform the intended mathematical operation