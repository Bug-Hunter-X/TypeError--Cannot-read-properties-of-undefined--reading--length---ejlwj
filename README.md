# JavaScript Bug: TypeError: Cannot read properties of undefined (reading 'length')

This repository demonstrates a common JavaScript error: `TypeError: Cannot read properties of undefined (reading 'length')`.  The bug arises when attempting to access the `length` property of a variable that is undefined.

## Bug Description

The provided JavaScript function `foo` aims to return the length of an input `x`. However, it fails to handle the case where `x` is undefined.  Accessing `x.length` when `x` is undefined results in the `TypeError`.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js`.
3. Run the function `foo` with an undefined argument: `foo(undefined);`
4. Observe the `TypeError` in your console.

## Solution

The solution involves adding a check to handle the case when `x` is undefined.  This can be done using optional chaining or a simple `if` statement.

## Solution Code (`bugSolution.js`)

The corrected code checks for undefined and returns 0 in this case, preventing the error.
