export const cyberReindeer = (road: string, time = 0): string[] => {
  // Define const
  const SANTA = 'S';
  const ROAD = '.';
  const CLOSED_BARRIER = '|';
  const OPENED_BARRIER = '*';
  const BARRIER_OPENED_AT = 5;

  // We store the santa's journey in an array of strings like the expected output
  const santaJourney: string[] = [road];

  // We store the previous item
  // Time unit 1: 'S..|...|..'
  // Time unit 2: => Time unit 1: '.S.|...|..'
  // ...
  const lastJourneyItem = santaJourney[santaJourney.length - 1];

  // destructure the previous item
  // Usefull to find next or previous road state . | *
  // Time unit 1: ['S','.','.','|','.','.','.','|','.','.']
  // Time unit 2: =>['.','S','.','|','.','.','.','|','.','.']
  // ...
  const [...travelArray] = lastJourneyItem;

  // By default the previous road state is a Road
  let previousJourneyStep = ROAD;

  // We save a flag if Santa has just passed a barrier to be able
  // to replace the old item with an open barrier
  // Time unit 5:    ..S|...|..
  // Time unit 5:    ...S...|..
  // Time unit 6: => ...*S..|..
  let previousItemIsABarrier = false;

  // Because we have to iteration on the santa path we have to store the currentIteration
  // it will be used to leave the while loop
  let currentIteration = 1;

  // Start the loop
  while (currentIteration < time) {
    // Get the current santa position
    const santaPosition = travelArray.indexOf(SANTA);

    // Get the nextItem. It sould be one of: . | *
    const nextItem = travelArray[santaPosition + 1];
    // Because at the start there is no previous we set to a ROAD element
    previousJourneyStep = santaPosition !== 0 ? nextItem : ROAD;

    // If santa hit a barrier and all barriers are closed
    if (CLOSED_BARRIER === nextItem && currentIteration < BARRIER_OPENED_AT) {
      // Push a new time unit with the same path as the current path
      santaJourney.push(santaJourney[santaPosition]);
    } else {
      // If santa is passing through a barrier
      if ([CLOSED_BARRIER, OPENED_BARRIER].includes(previousJourneyStep)) {
        // Set the current position to a road element
        travelArray[santaPosition] = ROAD;
        // Set a flag for next iteration
        previousItemIsABarrier = true;
      } else {
        // If the barrier flag is true replace it by an OPENED_BARRIER or by a ROAD
        travelArray[santaPosition] = previousItemIsABarrier ? OPENED_BARRIER : ROAD;
        // Remove the flag
        previousItemIsABarrier = false;
      }

      // Move sante to the next position
      travelArray[santaPosition + 1] = SANTA;

      // Create a new path as string
      let newTravel = travelArray.join('');

      // If the unit time is greater than or equal to BARRIER_OPENED_AT,
      // we must replace all CLOSED_BARRIER with the OPENED_BARRIER string
      // but | is a reserved char on regex but I can't use the constant with the escape character
      // I use the pipe directly in the regex then I use the pipe directly in the regex
      if (currentIteration >= BARRIER_OPENED_AT) {
        newTravel = newTravel.replace(new RegExp(/\|/g), OPENED_BARRIER);
      }

      // Push the new path
      santaJourney.push(newTravel);
    }

    // Increment the currentIteration var
    currentIteration = currentIteration + 1;
  }

  return santaJourney;
};
