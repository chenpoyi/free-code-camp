function fearNotLetter(str) {
  const strArr = str.split('');
  const start = strArr[0].charCodeAt(0);
  //console.log(start);
  let answer;
  strArr.every((element, index) => {
    if(element != String.fromCharCode(start+index)){
      answer = String.fromCharCode(start+index);
      return false;
    }
    return true;
  })
  return answer;
}

fearNotLetter("abce");