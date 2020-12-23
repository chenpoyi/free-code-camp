function steamrollArray(arr) {
  let newArray = [];
  const flatten = function(subArr){
  if(!Array.isArray(subArr)){
    newArray.push(subArr);
  } else {
    subArr.forEach(element => flatten(element));
  }
  }
  arr.forEach(flatten);
  return newArray;
}



steamrollArray([1, [2], [3, [[4]]]]);