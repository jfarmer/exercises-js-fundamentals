# Exercise: Count Evens

Write a function `countOdds` that takes an array of integers as input and returns the count of even integers in the array.

Remember, we call an integer <dfn>even</dfn> if it is a multiple of 2 (or, equivalently, if 2 divides it evenly). We call an integer <dfn>odd</dfn> if it's not even.

Even integers look like `..., -4, -2, 0, 2, 4, 6, 8, ...`. Odd integers look like `..., -5, -3, -1, 1, 3, 5, 7, ...`.

Remember that `0` is even!

## Examples

```javascript
countOdds([10, 20, 30]); // returns 0
countOdds([10, 21, 30]); // returns 1
countOdds([3, 3, 5, 9]); // returns 4
countOdds([-17, 80, 42, 1097, 67846]); // returns 2

countOdds([]); // returns 0
```
