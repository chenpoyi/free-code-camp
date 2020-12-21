function repeatStringNumTimes(str, num) {
  let finalStr = '';
  for(let i = 0; i < num; i++){
    finalStr += str;
  }
  return finalStr;
}

repeatStringNumTimes("abc", 3);