export const maxDistance = (movements: string): number => {
  if (typeof movements !== 'string') return 0;

  let movesRight = 0;
  let movesLeft = 0;
  let asterisks = 0;

  [...movements].forEach((move) => {
    if ('<' === move) movesLeft += 1;
    if ('>' === move) movesRight += 1;
    if ('*' === move) asterisks += 1;
  });

  return Math.abs(movesRight - movesLeft) + asterisks;
};
