function palindrome(str) {
  const filtered = str.toLowerCase().split('').filter(letter => letter.match(/[a-z0-9]/))
  for(let i = 0; i < Math.floor(filtered.length / 2); i++){
    if(filtered[i] !== filtered[filtered.length - 1 - i]){
      return false;
    }
  }
  return true;
}
palindrome("eye");