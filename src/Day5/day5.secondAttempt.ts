export const cyberReindeer = (road: string, time = 0): string[] => {
  // Create the paths array with the first road path
  const paths = [road];
  // Create our counter time iteration
  let currentTimeIteration = 0;
  // Create our move counter because santa can not move all time iteration
  let coutMove = 0;
  // The previous item can be . or *
  let previousItem = '.';

  // iterate
  while (currentTimeIteration < time - 1) {
    // Get the current path to work on it
    let currentPath = paths[currentTimeIteration];

    // Open the barriers on the fifth unit of time
    if (currentTimeIteration === 4) {
      const closedBarrierRegex = new RegExp(/\|/g);
      currentPath = currentPath.replace(closedBarrierRegex, '*');
    }

    // Replace S. or S* by .S or *S because when passing through barrier the previous item should be *
    const allowedNextPathRegex = new RegExp(/S[.*]/g);
    const newPath = currentPath.replace(allowedNextPathRegex, `${previousItem}S`);

    // If santa wasn't blocked by a closed barrier
    if (newPath !== currentPath) {
      // Increment move to get the next previous item
      coutMove++;

      // Get the next previous item for next iteration
      previousItem = currentPath[coutMove];
    }

    // Add the new path
    paths.push(newPath);

    // increment the time counter
    currentTimeIteration++;
  }

  // Finally return the paths
  return paths;
};
