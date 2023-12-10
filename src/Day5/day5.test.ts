import { cyberReindeer } from './day5';

describe('Day#5', () => {
  test('Day#5 - Should output exactly the same path', () => {
    const road = 'S..|...|..';
    const time = 10; // units of time

    expect(cyberReindeer(road, time)).toStrictEqual([
      'S..|...|..', // initial state
      '.S.|...|..', // sled advances on the road
      '..S|...|..', // sled advances on the road
      '..S|...|..', // sled stops at the barrier
      '..S|...|..', // sled stops at the barrier
      '...S...*..', // barrier opens, sled advances
      '...*S..*..', // sled advances on the road
      '...*.S.*..', // sled advances on the road
      '...*..S*..', // sled advances on the road
      '...*...S..', // passes through the open barrier
    ]);
  });
});
