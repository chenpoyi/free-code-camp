function updateInventory(arr1, arr2) {
  const newObj = {};
  arr1.forEach((element) => (newObj[element[1]] = element[0]));
  arr2.forEach((element) => {
    if (newObj[element[1]]) {
      newObj[element[1]] += element[0];
    } else {
      newObj[element[1]] = element[0];
    }
  });

  const answer = Object.entries(newObj)
    .map((element) => element.reverse())
    .sort((a, b) => {
      if (a[1] < b[1]) {
        return -1;
      }
      if (a[1] > b[1]) {
        return 1;
      }
      return 0;
    });
  return answer;
} 

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];

// updateInventory(curInv, newInv);
updateInventory(
  [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"],
  ],
  [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"],
  ]
);
