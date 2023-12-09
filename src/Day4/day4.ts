export const decode = (encoded: string) => {
  if (typeof encoded !== 'string') throw new Error('The input must be a string');

  let encodedCopy = encoded;
  const regex = /\(([^()]*)\)/i;
  let substr = regex.exec(encodedCopy);
  while (substr) {
    encodedCopy = encodedCopy.replace(substr[0], substr[1].split('').reverse().join(''));
    substr = regex.exec(encodedCopy);
  }
  return encodedCopy;
};
