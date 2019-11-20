export class Age {
  constructor(earthAge, mercuryAge, venusAge, marsAge, jupiterAge, lifeLeft) {
  this.earthAge = earthAge;
  this.mercuryAge = mercuryAge;
  this.venusAge = venusAge;
  this.marsAge = marsAge;
  this.jupiterAge = jupiterAge;
  this.lifeLeft = lifeLeft;
}

Age.prototype.negativeCheck = function() {
  if (this.earthAge < 0) {
    return "age is negative";
  }
}

Age.prototype.toMercury = function() {
  this.mercuryAge = (this.earthAge / 0.24);
  return this.mercuryAge;
}

Age.prototype.toVenus = function() {
  this.venusAge = (this.earthAge / 0.62);
  return this.venusAge;
}

Age.prototype.toMars = function() {
  this.marsAge = (this.earthAge / 1.88);
  return this.marsAge;
}

Age.prototype.toJupiter = function() {
  this.jupiterAge = (this.earthAge / 11.86);
  return this.jupiterAge;
}

Age.prototype.lifeLeft = function() {
  this.lifeLeft = (75 - this.earthAge);
  return this.lifeLeft;
}
};
