# Incorrect Null Handling in Addition Function

This repository demonstrates a common error in JavaScript: incorrect null handling. The `foo` function is designed to add two numbers, but it returns `null` prematurely when either input is `null`.  The solution corrects this behavior.

## Bug

The original code incorrectly returns `null` if *either* input `a` or `b` is `null`.  It should only return `null` if *both* inputs are `null`.

## Solution

The corrected code ensures that `null` is only returned if both `a` and `b` are `null`. Otherwise, it performs the addition, handling `null` values as 0.