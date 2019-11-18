import { Age } from './../src/solar-age.js';

describe('Age', () => {

    test('should correctly create an age object that takes a number', () => {
      var age = new Age(25);
      expect(age.earthAge).toEqual(25);
    });

    test('should correctly determine whether Age is negative', () => {
      var negativeAge = new Age(-20);
      expect(negativeAge.negativeCheck()).toEqual("age is negative")
    });

    test('should convert age to solar age', () => {
      var age = new Age(25)
      var mercuryAge = age.toSolar();
      expect(mercuryAge).toEqual(25 / 0.24);
    });
});
