import { maxDistance } from './day6';

const testSuite = [
  { name: 'Day#6 - Test#2 - >>*< should output 2', movements: '>>*<', expected: 2 },
  { name: 'Day#6 - Test#3 - <<<<< should output 5', movements: '<<<<<', expected: 5 },
  { name: 'Day#6 - Test#4 - >***> should output 5', movements: '>***>', expected: 5 },
  { name: 'Day#6 - Test#5 - ********** should output 10', movements: '**********', expected: 10 },
  { name: 'Day#6 - Test#6 - <<**>> should output 2', movements: '<<**>>', expected: 2 },
  { name: 'Day#6 - Test custom#1 - Empty string parameter should output 0', movements: '', expected: 0 },
  { name: 'Day#6 - Test custom#2 - Number parameter should output 0', movements: 0, expected: 0 },
  { name: 'Day#6 - Test custom#3 - Array parameter should output 0', movements: [], expected: 0 },
  { name: 'Day#6 - Test custom#4 - <<** should output 4', movements: '<<**', expected: 4 },
  { name: 'Day#6 - Test custom#5 - Include an empty string char it should output 4', movements: '<< **', expected: 4 },
  { name: 'Day#6 - Test custom#6 - <><><><><> should output 0', movements: '<><><><><>', expected: 0 },
  { name: 'Day#6 - Test custom#7 - *<*>*< should output 4', movements: '*<*>*<', expected: 4 },
  { name: 'Day#6 - Test custom#8 - *<*>*< should output 4', movements: '*>*<*<', expected: 4 },
];

describe('Day#6', () => {
  test('Day#6 - Test#1 - Should output a number', () => {
    expect(typeof maxDistance('>>*<')).toBe('number');
  });
  testSuite.map((suite) => {
    test(suite.name, () => {
      expect(maxDistance(suite.movements as string)).toEqual(suite.expected);
    });
  });
});
