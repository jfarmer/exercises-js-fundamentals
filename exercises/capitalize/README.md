# Exercise: Capitalize

Write a function `capitalize` that takes a string as input and returns a copy of the same string with the first letter capitalized.  The `capitalize` function should capitalize only the *first* letter; it shouldn't touch any other letters in the input string.

## Examples

```javascript
capitalize("giraffes are great"); // returns "Giraffes are great"
capitalize("hello"); // returns "Hello"
```

## Error Cases

What happens if we pass the empty string to capitalize, e.g., `capitalize("")`?  There are two reasonable behaviors:

1. Throw an error indicating the input string can't be empty
1. Return the empty string `""`

What are the pros and cons of these two choices? Does one always make more sense or can you imagine both making sense depending on the situation?
