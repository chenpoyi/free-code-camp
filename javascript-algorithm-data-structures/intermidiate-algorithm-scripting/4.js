function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  arr = collection.filter(object => {
    const keys = Object.keys(source);
    return keys.every((key)=>{
      return object.hasOwnProperty(key) && object[key] === source[key];
    });
  })

  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });