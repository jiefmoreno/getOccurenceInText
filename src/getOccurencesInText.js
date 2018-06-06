/**
 * getWords: get the words longer than 2 caracters in a text
 * @param {string} text 
 * @returns {array} array of words longer than 2
 */
export function getWords(text) {
  return text
    .split(/[^A-zÀ-ú-]/)
    .filter(word => word.length > 2);
};

/**
 * countOccurences: count the number of occurences of a word in an array
 * @param {string} words 
 * @returns {object} object with the count of occurences
 */
export function countOccurences(words) {
  return words.reduce(
    (acc, word) =>
      acc[word] 
        ? { ...acc, [word]: acc[word] + 1 } 
        : { ...acc, [word]: 1 },
    {}
  );
};

/**
 * lowerWords: apply toLowerCase to an array of words
 * @param {array} words 
 * @returns {array} array of words in lowercase
 */
export function lowerWords(words) {
    return words.map(word => word.toLowerCase());
}

/**
 * getOccurencesInText: count the words occurence in a text
 * @param {string} text text to process
 * @param {boolean} caseSensitive 
 * @returns {object} object containing the occurences count
 */
export function getOccurencesInText(text, caseSensitive = true) {
  return caseSensitive 
    ? countOccurences(getWords(text))
    : countOccurences(lowerWords(getWords(text)));
};
