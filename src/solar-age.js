export class Age {
  constructor(earthAge, mercuryAge, venusAge, marsAge, jupiterAge, lifeLeft) {
    this.earthAge = earthAge;
    this.mercuryAge = mercuryAge;
    this.venusAge = venusAge;
    this.marsAge = marsAge;
    this.jupiterAge = jupiterAge;
    this.lifeLeft = lifeLeft;
  }

  negativeCheck() {
  if (this.earthAge < 0) {
    return "age is negative";
    }
  }

    toMercury() {
    this.mercuryAge = (this.earthAge / 0.24);
    return this.mercuryAge;
  }

    toVenus() {
    this.venusAge = (this.earthAge / 0.62);
    return this.venusAge;
  }

    toMars() {
    this.marsAge = (this.earthAge / 1.88);
    return this.marsAge;
  }

    toJupiter() {
    this.jupiterAge = (this.earthAge / 11.86);
    return this.jupiterAge;
  }

    lifeExpect() {
    this.lifeLeft = (75 - this.earthAge);
    return this.lifeLeft;
  }
};
