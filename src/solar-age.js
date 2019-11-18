export function Age(earthAge, mercuryAge) {
  this.earthAge = earthAge;
  this.mercuryAge = mercuryAge;
};

Age.prototype.negativeCheck = function() {
  if (this.earthAge < 0) {
    return "age is negative";
  }
};

Age.prototype.toSolar = function() {
  this.mercuryAge = (this.earthAge / 0.24);
};
