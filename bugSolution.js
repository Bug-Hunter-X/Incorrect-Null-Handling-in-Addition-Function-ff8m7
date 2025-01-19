function foo(a, b) {
  const aValue = a === null ? 0 : a;
  const bValue = b === null ? 0 : b;
  return aValue + bValue;
}
console.log(foo(null, 5)); // Output: 5
console.log(foo(5, null)); // Output: 5
console.log(foo(null, null)); // Output: 0
console.log(foo(5, 5)); // Output: 10