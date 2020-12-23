function convertHTML(str) {
  const strArr = str.split('');
  strArr.forEach((letter, index) => {
    switch(letter){
      case '&':
        strArr[index] = '&amp;';
        break;
      case '<':
        strArr[index] = '&lt;';
        break;
      case '>':
      strArr[index] = '&gt;';
      break;
      case '"':
      strArr[index] = '&quot;';
      break;
      case "'":
      strArr[index] = '&apos;';
      break;
    }
  })
  return strArr.join('');
}

convertHTML("Dolce & Gabbana");