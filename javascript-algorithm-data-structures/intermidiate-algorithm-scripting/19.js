function addTogether() {
  const argArray = Array.prototype.slice.call(arguments);
  if(argArray.every(arg => typeof arg === 'number')){
  return argArray.length === 1? function(num){
    
    return typeof num === 'number' ? num + argArray[0]: undefined
  } : argArray[0] + argArray[1];
} else {
  return undefined;
}
}

addTogether(2,3);