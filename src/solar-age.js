export function Age(earthAge) {
  this.earthAge = earthAge;
};

Age.prototype.negativeCheck = function() {
  if (this.earthAge < 0) {
    return "age is negative";
  }
};
