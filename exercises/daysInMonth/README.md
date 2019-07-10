# Exercise: Days in Month

Write a function `daysInMonth` that takes in an integer between `1` and `12` representing then month and returns an integer representing the number of days in that month.

**Note**: Don't worry about leap years (which affects how many days are in February).

While it might feel more natural to represent the month as a string (e.g., `"January"`, `"February"`, etc.), there are more corner cases.  For example, should the function require the name of the month be capitalized or should it be able to handle both `"January"` and `"january"`?  What about `"Jan"`?

Representing the month as an integer lets us understand the core logic and patterns involved without having to deal with these corner cases. Later, we can write a function that re-uses the core logic of `daysInMonth` that works with month name inputs.

## Examples

```javascript
daysInMonth(1); // returns 31
daysInMonth(2); // returns 28, don't worry about leap years
daysInMonth(11); // returns 30
```

## Error Cases

What should `daysInMonth` do if it is given an integer less than `1` or greater than `12`? If someone else wrote this function for you to use, what would you *want* it to do? Why?

## Table Of Days In Each Month

Here's a table to help you:

<table>
  <thead>
    <tr>
      <th>Month Number</th>
      <th>Month Name</th>
      <th>Number of Days</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>January</td>
      <td>31</td>
    </tr>
    <tr>
      <td>2</td>
      <td>February</td>
      <td>28</td>
    </tr>
    <tr>
      <td>3</td>
      <td>March</td>
      <td>31</td>
    </tr>
    <tr>
      <td>4</td>
      <td>April</td>
      <td>30</td>
    </tr>
    <tr>
      <td>5</td>
      <td>May</td>
      <td>31</td>
    </tr>
    <tr>
      <td>6</td>
      <td>June</td>
      <td>30</td>
    </tr>
    <tr>
      <td>7</td>
      <td>July</td>
      <td>31</td>
    </tr>
    <tr>
      <td>8</td>
      <td>August</td>
      <td>31</td>
    </tr>
    <tr>
      <td>9</td>
      <td>September</td>
      <td>30</td>
    </tr>
    <tr>
      <td>10</td>
      <td>October</td>
      <td>31</td>
    </tr>
    <tr>
      <td>11</td>
      <td>November</td>
      <td>30</td>
    </tr>
    <tr>
      <td>12</td>
      <td>December</td>
      <td>31</td>
    </tr>
  </tbody>
</table>
