# Exercise: All Positive

Write a function `allPositive` that takes an array of numbers as input and returns `true` if *all* of the numbers in the array are positive and `false` otherwise.

## Examples

```javascript
allPositive([10, 20, 30, 40, 50]); // returns true
allPositive([10, 20, 30, -40, 50]); // returns false

allPositive([1]); // returns true

allPositive([10, 20, 30, -40, 50]); // returns false

allPositive([0, 0, 0]); // returns false since 0 is not positive
```

## Error Cases

What should happen if we call `allPositive([])`, i.e., if we pass it an empty array?

There are three reasonable choices:

1. Throw an error indicating that the array can't be empty
1. Return `true`
1. Return `false`

What are the pros/cons of returning `true` vs. returning `false`? Can you think of a way to justify one over the other?
