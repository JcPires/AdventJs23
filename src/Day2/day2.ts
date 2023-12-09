export const manufacture = (gifts: string[], materials: string) => {
  // Explode the string of materials into an array of letters
  const listOfMaterials = materials.split('');

  // Initialize the list of buildable gifts
  const buildableGifts: string[] = [];

  gifts.forEach((gift) => {
    // Explode the string of the current gift into an array of letters
    const giftLetters = gift.split('');

    // Initialize the flag to check if the current gift is buildable
    let isBuildable = true;

    // Check if each letter of the current gift is in the list of materials
    giftLetters.forEach((letter) => {
      if (!listOfMaterials.includes(letter)) isBuildable = false;
    });

    // If the current gift is buildable, add it to the list of buildable gifts
    if (isBuildable) buildableGifts.push(gift);
  });
  return buildableGifts;
};
