# Exercise: Count Character

Write a function `countCharacter` that takes a search string and a single-character single character as input and returns the number of times the character appears in the string.

For example, the letter `"e"` appears three times in the string `"hello there"`, so we'd want to return the number `3`.

## Examples

```javascript
countCharacter("hello there, friend", "e"); // returns 4
countCharacter("hello there, friend", ","); // returns 1

countCharacter("abcdef 123456 bananas!", "3"); // returns 1
countCharacter("abcdef 123456 bananas!", " "); // returns 2
countCharacter("abcdef 123456 bananas!", "a"); // returns 4
countCharacter("abcdef 123456 bananas!", "!"); // returns 1

countCharacter("", "waffles"); // returns 0
```

## Error Cases

What should happen when someone passes in a character string that is either the empty string `""` or longer than one character?

For example:

```javascript
countCharacter("hello", "");
countCharacter("hello", "xy");
```

Again, the point is to get you to think about edge cases and how to handle them. The best approach here is to throw an error indicating that the string must be exactly one character long.

We could try to make sense of a a longer search string, but the function would no longer be `countCharacter`.
