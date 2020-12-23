var Person = function (firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly

  this.getFirstName = function () {
    return firstAndLast.split(" ")[0];
  };
  this.getLastName = function () {
    return firstAndLast.split(" ")[1];
  };
  this.getFullName = function () {
    return firstAndLast;
  };
  this.setFirstName = function (first) {
    const last = firstAndLast.split(" ")[1];
    firstAndLast = first + " " + last;
  };
  this.setLastName = function (last) {
    const first = firstAndLast.split(" ")[0];
    firstAndLast = first + " " + last;
  };
  this.setFullName = function (newFull) {
    firstAndLast = newFull;
  };
  return firstAndLast;
};

var bob = new Person("Bob Ross");
bob.getFullName();
