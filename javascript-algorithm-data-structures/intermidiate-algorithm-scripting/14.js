function smallestCommons(arr) {
  const numArr = [];
  arr.sort((a,b) => a - b);
  for(let i = arr[0]; i <= arr[1]; i++){
    numArr.push(i);
  };
  let index = arr[1];
  while(true){
    if(numArr.every(num => index % num === 0)){
      return index;
    } else {
      index += arr[1];
    }
  }
}


smallestCommons([1,5]);