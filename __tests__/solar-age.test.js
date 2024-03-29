import { Age } from './../src/solar-age.js';

describe('Age', () => {
//tests to ensure age is a number and positive value
    test('should correctly create an age object that takes a number', () => {
      const age = new Age(25);
      expect(age.earthAge).toEqual(25);
    });

    test('should correctly determine whether Age is negative', () => {
      const negativeAge = new Age(-20);
      expect(negativeAge.negativeCheck()).toEqual("age is negative")
    });
//tests to convert earth age to solar age of each respective planet
    test('should convert age to Mercury age', () => {
      const age = new Age(25)
      const mercuryAge = age.toMercury();
      expect(mercuryAge).toEqual(25 / 0.24);
    });

    test('should convert age to Venus age', () => {
      const age = new Age(25)
      const venusAge = age.toVenus();
      expect(venusAge).toEqual(25 / 0.62);
    });

    test('should convert age to Mars age', () => {
      const age = new Age(25)
      const marsAge = age.toMars();
      expect(marsAge).toEqual(25 / 1.88);
    });

    test('should convert age to Jupiter age', () => {
      const age = new Age(25)
      const jupiterAge = age.toJupiter();
      expect(jupiterAge).toEqual(25 / 11.86);
    });
//test to determine years left to live in that planets solar year
    test('should determine years left on Earth based on life expectancy', () => {
      const age = new Age(25)
      const earthYearsLeft = age.earthExpect();
      expect(earthYearsLeft).toEqual(75 - 25);
    });

    test('should determine years left on Mercury based on life expectancy', () => {
      const age = new Age(25)
      const mercuryYearsLeft = age.mercuryExpect();
      expect(mercuryYearsLeft).toEqual((75 * 0.24) - (25 / 0.24));
    });

    test('should determine years left on Venus based on life expectancy', () => {
      const age = new Age(25)
      const venusYearsLeft = age.venusExpect();
      expect(venusYearsLeft).toEqual((75 * 0.62) - (25 / 0.62));
    });

    test('should determine years left on Mars based on life expectancy', () => {
      const age = new Age(25)
      const marsYearsLeft = age.marsExpect();
      expect(marsYearsLeft).toEqual((75 * 1.88) - (25 / 1.88));
    });

    test('should determine years left on Jupiter based on life expectancy', () => {
      const age = new Age(25)
      const jupiterYearsLeft = age.jupiterExpect();
      expect(jupiterYearsLeft).toEqual((75 * 11.86) - (25 / 11.86));
    });

//tests to determine years past life expectancy on earth
    test('should determine years past life expectancy on Earth', () => {
      const age = new Age(85)
      const earthYearsPast = age.earthBeyondAge();
      expect(earthYearsPast).toEqual(85 - 75);
    });

    test('should determine years past life expectancy on Mercury', () => {
      const age = new Age(85)
      const mercuryYearsPast = age.mercuryBeyondAge();
      expect(mercuryYearsPast).toEqual((85 * 0.24) - (75 / 0.24));
    });

    test('should determine years past life expectancy on Venus', () => {
      const age = new Age(85)
      const venusYearsPast = age.venusBeyondAge();
      expect(venusYearsPast).toEqual((85 * 0.62) - (75 / 0.62));
    });

    test('should determine years past life expectancy on Mars', () => {
      const age = new Age(85)
      const marsYearsPast = age.marsBeyondAge();
      expect(marsYearsPast).toEqual((85 * 1.88) - (75 / 1.88));
    });

    test('should determine years past life expectancy on Jupiter', () => {
      const age = new Age(85)
      const jupiterYearsPast = age.jupiterBeyondAge();
      expect(jupiterYearsPast).toEqual((85 * 11.86) - (75 / 11.86));
    });
});
