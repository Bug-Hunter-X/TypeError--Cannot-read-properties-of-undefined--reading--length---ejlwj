function foo(x) {
  if (x === undefined || x === null) {
    return 0;
  }
  return x.length;
} 