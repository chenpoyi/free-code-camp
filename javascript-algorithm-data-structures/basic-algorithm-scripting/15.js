function mutation(arr) {
  let chars = arr[0].toLowerCase().split("");
  let check = arr[1].toLowerCase().split("");
  for(let i = 0; i < arr[1].length; i++){
    if(chars.indexOf(check[i]) === -1){
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);