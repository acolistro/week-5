export class Age {
  constructor(earthAge, mercuryAge, venusAge, marsAge, jupiterAge, earthYearsLeft, mercuryYearsLeft, venusYearsLeft, marsYearsLeft, jupiterYearsLeft, earthYearsPast) {
    this.earthAge = earthAge;
    this.mercuryAge = mercuryAge;
    this.venusAge = venusAge;
    this.marsAge = marsAge;
    this.jupiterAge = jupiterAge;
    this.earthYearsLeft = earthYearsLeft;
    this.mercuryYearsLeft = mercuryYearsLeft;
    this.venusYearsLeft = venusYearsLeft;
    this.marsYearsLeft = marsYearsLeft;
    this.jupiterYearsLeft = jupiterYearsLeft;
    this.earthYearsPast = earthYearsPast;
  }

//Test to ensure proper type
  negativeCheck() {
  if (this.earthAge < 0) {
    return "age is negative";
    }
  }
//methods to calculate solar age on each planet
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
//methods to determine years left to live on each planet
    earthExpect() {
    this.earthLifeLeft = (75 - this.earthAge);
    return this.earthLifeLeft;
  }

    mercuryExpect() {
    this.mercuryYearsLeft = ((75 * 0.24) - (this.earthAge / 0.24));
    return this.mercuryYearsLeft;
  }

    venusExpect() {
    this.venusYearsLeft = ((75 * 0.62) - (this.earthAge / 0.62));
    return this.venusYearsLeft;
  }

    marsExpect() {
    this.marsYearsLeft = ((75 * 1.88) - (this.earthAge / 1.88));
    return this.marsYearsLeft;
  }

    jupiterExpect() {
    this.jupiterYearsLeft = ((75 * 11.86) - (this.earthAge / 11.86));
    return this.jupiterYearsLeft;
  }

    earthBeyondAge() {
    this.earthYearsPast = (this.earthAge - 75);
    return this.earthYearsPast;
    }
};
