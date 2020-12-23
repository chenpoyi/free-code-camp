function pairElement(str) {
  const strArr = str.split("");
  const newArr = [];
  strArr.forEach((element) => {
    switch (element) {
      case "A":
        newArr.push(["A", "T"]);
        break;
      case "T":
        newArr.push(["T", "A"]);
        break;
      case "C":
        newArr.push(["C", "G"]);
        break;
      case "G":
        newArr.push(["G", "C"]);
        break;
    }
  });
  return newArr;
}

pairElement("GCG");
