import { manufacture } from './day2';

const testSuite = [
  {
    description: 'Day#2 - Test#2 - Should output ["tren", "oso"]',
    gifts: ['tren', 'oso', 'pelota'],
    material: 'tronesa',
    expected: ['tren', 'oso'],
  },
  {
    description: 'Day#2 - Test#3 - Should output []',
    gifts: ['coche', 'muñeca', 'balon'],
    material: 'ocmuñalb',
    expected: [],
  },
  {
    description: 'Day#2 - Test#4 - Should output []',
    gifts: ['patineta', 'robot', 'libro'],
    material: 'nopor',
    expected: [],
  },
  {
    description: 'Day#2 - Test#5 - Should output []',
    gifts: [],
    material: 'letras',
    expected: [],
  },
  {
    description: 'Day#2 - Test custom - Should output ["tren"]',
    gifts: ['tren', 'osoj', 'pelota'],
    material: 'tronesa',
    expected: ['tren'],
  },
];

describe('Day#2', () => {
  test('Day#2 - Should output typeof array', () => {
    expect(Array.isArray(manufacture(['tren', 'oso'], 'tronesa'))).toBe(true);
  });

  testSuite.forEach((suite) => {
    test(suite.description, () => {
      expect(manufacture(suite.gifts, suite.material)).toEqual(suite.expected);
    });
  });
});
