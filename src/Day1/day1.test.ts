import { findFirstRepeated } from './day1';

const testSuite = [
  { description: 'Day#1 - Test#2 - Should output 3', values: [2, 1, 3, 5, 3, 2], expected: 3 },
  { description: 'Day#1 - Test#3 - Should output 2', values: [2, 2], expected: 2 },
  { description: 'Day#1 - Test#4 - Should output -1', values: [2, 4, 3, 5, 1], expected: -1 },
  { description: 'Day#1 - Test#5 - Should output 1', values: [1, 3, 4, 5, 0, 1, 3, 0, 7], expected: 1 },
  { description: 'Day#1 - Test#6 - Should output -1', values: [], expected: -1 },
  { description: 'Day#1 - Test#7 - Should output -1', values: [10, 20, 30], expected: -1 },
  { description: 'Day#1 - Test#8 - Should output 2', values: [5, 1, 2, 3, 2, 5, 1], expected: 2 },
  { description: 'Day#1 - Test#9 - Should output 10', values: [1, 10, 2, 10, 20, 50, 7, 0, 0, 7], expected: 10 },
];

describe('Day#1', () => {
  test('Day#1 - Should output typeof number', () => {
    expect(typeof findFirstRepeated([1, 2, 3, 4])).toBe('number');
  });

  testSuite.forEach((suite) => {
    test(suite.description, () => {
      expect(findFirstRepeated(suite.values)).toBe(suite.expected);
    });
  });
});
