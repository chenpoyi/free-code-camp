function sumFibs(num) {
  const fibArray = [1,1];
  while(fibArray[fibArray.length -1 ] + fibArray[fibArray.length -2] <= num){
    fibArray.push(fibArray[fibArray.length -1 ] + fibArray[fibArray.length -2]);
  }
  return fibArray.filter(num => num % 2 !== 0).reduce((sum, num) => sum + num, 0);
}

sumFibs(4);