# Exercise: Add Arrays

Write a function `addArrays` that takes two arrays containing numbers as input and returns a new array containing element-wise sum of the two input arrays.

## Examples

"Element-wise" means the first element in the returned array is the sum of the first elements in the input arrays, the second element in the returned array is the sum of the second elements in the input array, and so on.

For example, the "array sum" of `[1, 2, 3]` and `[10, 20, 30]` is `[11, 22, 33]` since `1 + 10` is `11`, `2 + 20` is `22`, and `3 + 33` is `33`.

More examples:

```javascript
addArrays([1, 2, 3], [10, 20, 30]); // returns [11, 22, 33]
addArrays([100, 200, 300], [-100, -200, -300]); // returns [0, 0, 0]

addArrays([123, 0], [0, 987]); // returns [123, 987]
```

## Error Cases

What should `addArrays` do if you pass it arrays of different lengths?  For example:

```javascript
addArrays([1, 2, 3], [10, 20]); // what should happen here?
```

There's no "correct" answer here. You get to decide what behavior makes the most sense and justify it.

Here are three reasonable approaches:

1. Throw an error indicating that the arrays must be the same size
1. Return an array as long as the shortest of the two input arrays.
1. Return an array as long as the longest of the two input arrays, using a default value like `0` when you're past the end of the shorter input array.

For example, if we had code like this:

```javascript
const longArray = [1, 2, 3, 4, 5];
const shortArray = [10, 20, 30];

addArrays(longArray, shortArray);
```

Then the three choices correspond to

1. Throwing an error
1. Returning `[11, 22, 33]` and ignoring the extra elements in `longArray`
1. Returning `[11, 22, 33, 4, 5]` and acting as if `shortArray` had extra `0` values
