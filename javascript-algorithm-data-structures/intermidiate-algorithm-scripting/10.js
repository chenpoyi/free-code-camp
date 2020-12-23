function uniteUnique(arr) {
  let argumentsArray = Array.from(arguments)
  const newArr = [];
  argumentsArray.forEach((subArr) => {
    subArr.forEach(element => {
      if(!newArr.includes(element)){
        newArr.push(element);
      }
    })
  })
  return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);