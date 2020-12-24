function convertToRoman(num) {
  const decimalArray = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanArray = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  let roman = "";
  while (num > 0) {
    for (let i = 0; i < decimalArray.length; i++) {
      if (decimalArray[i] <= num) {
        num -= decimalArray[i];
        roman += romanArray[i];
        break;
      }
    }
  }
  return roman;
}

convertToRoman(36);
