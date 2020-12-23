function myReplace(str, before, after) {
  if(before[0].match(/[A-Z]/)){
    return str.replace(before, after[0].toUpperCase()+after.slice(1));
  } else {
    return str.replace(before, after[0].toLowerCase()+after.slice(1));
  }
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");