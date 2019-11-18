import { age } from './../src/solar-age.js';

describe('Age', () => {

    test('should correctly create an age object that takes a positive number', () => {
      var age = new Age(25);
      expect(age.earthAge).toEqual(25);
    });
});
