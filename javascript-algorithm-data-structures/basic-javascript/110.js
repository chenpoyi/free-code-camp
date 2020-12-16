// Only change code below this line
function countdown(n){
  if(n <= 0){
    return [];
  } else {
    console.log([n,...countdown(n-1)])
    return [n,...countdown(n-1)]
  }
  return;
}
// Only change code above this line