function sumPrimes(num) {
  const allArr = [];
  for (let i = 1; i <= num; i++) {
    allArr.push(i);
  }
  return allArr.filter((num) => isNum(num)).reduce((sum, num) => sum + num, 0);
}

const isNum = function (num) {
  for (var i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
};
sumPrimes(10);
