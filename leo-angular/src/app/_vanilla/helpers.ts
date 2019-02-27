/**
 * extracts the first letters out of a given array and puts them into a new sorted array with unique letters
 */
export function aggregateFirstLetters(inputArray: any[], key?: string): string[] {
  return inputArray
    .reduce((letters, item) => {
      const startingLetter = (key ? item[key] : item).charAt(0).toLowerCase();
      if (!letters.includes(startingLetter)) {
        letters.push(startingLetter);
      }
      return letters;
    }, [])
    .sort()
}
