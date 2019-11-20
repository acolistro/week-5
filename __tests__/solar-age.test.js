import { Age } from './../src/solar-age.js';

describe('Age', () => {

    test('should correctly create an age object that takes a number', () => {
      const age = new Age(25);
      expect(age.earthAge).toEqual(25);
    });

    test('should correctly determine whether Age is negative', () => {
      const negativeAge = new Age(-20);
      expect(negativeAge.negativeCheck()).toEqual("age is negative")
    });

    test('should convert age to mercury age', () => {
      const age = new Age(25)
      const mercuryAge = age.toMercury();
      expect(mercuryAge).toEqual(25 / 0.24);
    });

    test('should convert age to venus age', () => {
      const age = new Age(25)
      const venusAge = age.toVenus();
      expect(venusAge).toEqual(25 / 0.62);
    });

    test('should convert age to mars age', () => {
      const age = new Age(25)
      const marsAge = age.toMars();
      expect(marsAge).toEqual(25 / 1.88);
    });

    test('should convert age to jupiter age', () => {
      const age = new Age(25)
      const jupiterAge = age.toJupiter();
      expect(jupiterAge).toEqual(25 / 11.86);
    });

    test('should determine years left on earth based on life expectancy', () => {
      const age = new Age(25)
      const earthYearsLeft = age.earthExpect();
      expect(earthYearsLeft).toEqual(75 - 25);
    });

    test('should determine years left on mercury based on life expectancy', () => {
      const age = new Age(25)
      const mercuryYearsLeft = age.mercuryExpect();
      expect(mercuryYearsLeft).toEqual((75 * 0.24) - (25 / 0.24));
    });
});
