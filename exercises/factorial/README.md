# Exercise: Factorial

Given a non-negative integer `n`, the factorial of `n` is defined in two equivalent ways:

1. The number of ways you can arrange `n` distinct objects
1. The value `n * (n - 1) * (n - 2) * ... * 2 * 1`

This is written `factorial(n)` or `n!` (that's `n` with an exclamation point after it).  Since most programming languages don't allow syntax like `n!`, we're going to define a function called `factorial` that implements this function.

For example, `factorial(5)` is `5 * 4 * 3 * 2 * 1`, which is `120`.

For convenience, we define `factorial(0)` as `1`. This seems weird at first, but there are good reasons that we'll explain below.

`factorial` is not defined for negative numbers.

## Factorial Grows Fast

The `factorial` function grows very quickly. JavaScript can't represent arbitrarily large integers, so eventually `factorial(n)` will return nonsense.

We could use a third-party library that supports larger numbers to work around this, but don't worry about that for this exercise.

## Examples

```javacript
factorial(0); // returns 1
factorial(1); // returns 1
factorial(4); // returns 4*3*2*1 == 24
factorial(10); // returns 10*9*...*2*1 == 3628800
```

## Error Cases

What should happen if you pass a negative number to `factorial`? What if you pass a number whose factorial is larger than JavaScript can support?

## The Value Of `factorial(0)`

Why do we want `factorial(0)` to be `1`?  One reason is because the factorial function satisfies the following equation for all values of `n > 0`:

```text
factorial(n + 1) = (n + 1) * factorial(n)
```

So, if `n` is `0` then we want `factorial(1) = 1 * factorial(0)`, which "forces" us to set `factorial(0)` equal to `1`.

In other words, *if* we want `factorial(0)` to make sense and work with all other values then `factorial(0)` *must* equal `1`.
