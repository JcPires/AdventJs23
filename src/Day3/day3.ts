export const findNaughtyStep = (original: string, modified: string) => {
  if (typeof original !== 'string' || typeof modified !== 'string') return '';

  if (original.length === 0) return modified;

  const maxLengthString: string = original.length > modified.length ? original : modified;

  let diff = '';
  for (let i = 0; i < maxLengthString.length; i += 1) {
    if (original.length < i) return maxLengthString[i];
    if (original[i] !== modified[i]) {
      diff = maxLengthString[i];
      break;
    }
  }

  return diff;
};
