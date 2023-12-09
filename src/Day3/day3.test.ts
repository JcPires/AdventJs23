import { findNaughtyStep } from './day3';

const testSuite = [
  {
    description: 'Day#3 - Test#2 - Should output "e"',
    original: 'abcd',
    modified: 'abcde',
    expected: 'e',
  },
  {
    description: 'Day#3 - Test#3 - Should output "e"',
    original: 'abcde',
    modified: 'abcd',
    expected: 'e',
  },
  {
    description: 'Day#3 - Test#4 - Should output "o"',
    original: 'xxxx',
    modified: 'xxoxx',
    expected: 'o',
  },
  {
    description: 'Day#3 - Test#4 - Should output "f"',
    original: 'stepfor',
    modified: 'stepor',
    expected: 'f',
  },
  {
    description: 'Day#3 - Test#4 - Should output ""',
    original: 'iiiii',
    modified: 'iiiii',
    expected: '',
  },
];

describe('Day#3', () => {
  test('Day#3 - Should output typeof string', () => {
    expect(typeof findNaughtyStep('abcd', 'abcde')).toBe('string');
  });

  testSuite.forEach((suite) => {
    test(suite.description, () => {
      expect(findNaughtyStep(suite.original, suite.modified)).toEqual(suite.expected);
    });
  });
});
