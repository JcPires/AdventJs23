import { decode } from './day4';

const testSuite = [
  {
    description: 'Day#3 - Test#2 - Should output "hola mundo"',
    original: 'hola (odnum)',
    expected: 'hola mundo',
  },
  {
    description: 'Day#3 - Test#3 - Should output "hello world!"',
    original: '(olleh) (dlrow)!',
    expected: 'hello world!',
  },
  {
    description: 'Day#3 - Test#4 - Should output "santaclaus"',
    original: 'sa(u(cla)atn)s',
    expected: 'santaclaus',
  },
  {
    description: 'Day#3 - Test#5 - Should output "santa"',
    original: '((nta)(sa))',
    expected: 'santa',
  },
];

describe('Day#3', () => {
  test('Day#3 - Should output typeof string', () => {
    expect(typeof decode('abcd')).toBe('string');
  });

  testSuite.forEach((suite) => {
    test(suite.description, () => {
      expect(decode(suite.original)).toBe(suite.expected);
    });
  });
});
