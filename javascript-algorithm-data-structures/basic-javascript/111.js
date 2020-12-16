function rangeOfNumbers(startNum, endNum) {
  if(startNum < endNum){
    console.log([startNum, ...rangeOfNumbers(startNum+1, endNum)])
    return [startNum, ...rangeOfNumbers(startNum+1, endNum)]
  }
  
  return [endNum];
};