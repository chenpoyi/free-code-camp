var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line
  let newArr = [...arr];
  return newArr.sort();

  // Only change code above this line
}
nonMutatingSort(globalArray);