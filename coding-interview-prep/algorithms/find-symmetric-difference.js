function sym(args) {
  const argsArray = Array.prototype.slice.call(arguments);
  const result = argsArray.reduce((acc, curr) => diff(acc, curr), []);
  return result;
}

function diff(arr1, arr2){
  let newArr = [];
  arr1.forEach(element => {
    if(arr2 && !arr2.find(element2 => element2 === element) && !newArr.find(element3 => element3 === element)){
      newArr.push(element);
    }
  })

  arr2.forEach(element => {
    if(arr1 && !arr1.find(element2 => element2 === element)&& !newArr.find(element3 => element3 === element)){
      newArr.push(element);
    }
  })
  return newArr;
}

sym([1, 2, 3], [5, 2, 1, 4]);
