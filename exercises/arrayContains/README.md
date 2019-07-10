# Exercise: Any Positive

Write a function `arrayContains` that takes an array and a value as input and returns `true` if the value is contained in the array and `false` otherwise.

The input array can contain any kind of values (numbers, string, etc.).

In functions that search a larger object for a specific value, it's common to refer to the thing-being-searched as `haystack` and the thing-being-searched-for as `needle`. As in: looking for a needle in a haystack.  We'll do the same here.

## Examples

```javascript
arrayContains([10, 20, 30], 20); // returns true since 20 is in the array

arrayContains([10, 20, 30], 99); // returns false since 99 is NOT in the array

arrayContains(["hello", "friend"], "hello"); // returns true

arrayContains([], "waffles"); // returns false

arrayContains([1], 1); // returns true
```
