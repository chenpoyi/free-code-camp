function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  
  const newArr = arr.map(object => {
    const newObj = {};
    newObj.name = object.name;
    const period = 2 * Math.PI * Math.sqrt(Math.pow(earthRadius + object.avgAlt,3)/GM);
    newObj.orbitalPeriod = Math.round(period);
    return newObj;
  })
  return newArr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);