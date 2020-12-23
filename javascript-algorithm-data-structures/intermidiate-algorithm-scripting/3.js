function destroyer(arr) {
  const arg = Array.prototype.slice.call(arguments).slice(1);
  arg.forEach(number => {arr = arr.filter(element => element !== number)});
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);