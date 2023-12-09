export const findFirstRepeated = (gifts: number[]) => {
  const giftsChecked: {
    gift: number;
    isDuplicated: boolean;
    nextDuplicateIndex: number;
    diffWithCurrentIndex: number;
  }[] = [];

  gifts.forEach((gift, index) => {
    // Check if the current gift is already checked
    if (giftsChecked.find((item) => item.gift === gift)) return;

    // Copy the gifts list to avoid mutation
    const newGiftsList = [...gifts];

    // Remove the current gift from the list and get the list before the current index
    const halfBeforeIndex = newGiftsList.slice(0, index);

    // Remove the current gift from the list and get the list after the current index
    const halfAfterIndex = newGiftsList.slice(index + 1, gifts.length);

    // Merge the two lists
    const giftListwithoutCurrentValue = halfBeforeIndex.concat(halfAfterIndex);

    // Check if the current sanitized list contains the current gift
    const nextDuplicateIndex = giftListwithoutCurrentValue.indexOf(gift);

    // Check if the current gift is duplicated
    const isDuplicated = nextDuplicateIndex !== -1;

    // If the current gift is duplicated, add it to the list of duplicated gifts
    if (isDuplicated) {
      giftsChecked.push({
        gift,
        isDuplicated,
        nextDuplicateIndex: nextDuplicateIndex + 1,
        diffWithCurrentIndex: nextDuplicateIndex + 1 - index,
      });
    }
  });

  // If there is no duplicated gift, return -1
  if (giftsChecked.length === 0) return -1;

  // Sort the list of duplicated gifts by the index of the next duplicated gift
  // to get the closest duplicated gift from the start of the list
  // Exemple: [1, 3, 4, 5, 0, 1, 3, 0, 7] should return 1 (index 5) and not 3 (index 6)
  const closestDuplicate = giftsChecked.sort((a, b) => a.nextDuplicateIndex - b.nextDuplicateIndex);

  // Return the first duplicated gift
  return closestDuplicate[0].gift;
};
