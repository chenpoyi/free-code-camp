function frankenSplice(arr1, arr2, n) {

  let first = arr2.slice(0, n);
  let last = arr2.slice(n, arr2.length);
  let result = first.concat(arr1).concat(last);
  return result;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);