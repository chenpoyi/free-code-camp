function confirmEnding(str, target) {
  console.log('target: ', target)
  return str.substr(str.length - target.length, str.length) === target;
}

confirmEnding("Bastian", "n");