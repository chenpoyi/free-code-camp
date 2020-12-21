function findLongestWordLength(str) {
  let array = str.split(" ");
  let max = 0;
  for(let i = 0; i < array.length; i++){
    if(array[i].length > max){
      max = array[i].length;
    }
  }
  return max;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");