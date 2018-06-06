"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.getWords = getWords;
exports.countOccurences = countOccurences;
exports.lowerWords = lowerWords;
exports.getOccurencesInText = getOccurencesInText;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * getWords: get the words longer than 2 caracters in a text
 * @param {string} text 
 * @returns {array} array of words longer than 2
 */
function getWords(text, minChars) {
  return text.split(/[^A-zÀ-ú-]/).filter(function (word) {
    return word.length >= minChars;
  });
};

/**
 * countOccurences: count the number of occurences of a word in an array
 * @param {string} words 
 * @returns {object} object with the count of occurences
 */
function countOccurences(words) {
  return words.reduce(function (acc, word) {
    return acc[word] ? _extends({}, acc, _defineProperty({}, word, acc[word] + 1)) : _extends({}, acc, _defineProperty({}, word, 1));
  }, {});
};

/**
 * lowerWords: apply toLowerCase to an array of words
 * @param {array} words 
 * @returns {array} array of words in lowercase
 */
function lowerWords(words) {
  return words.map(function (word) {
    return word.toLowerCase();
  });
}

/**
 * getOccurencesInText: count the words occurence in a text
 * @param {string} text text to process
 * @param {boolean} caseSensitive 
 * @returns {object} object containing the occurences count
 */
function getOccurencesInText(text) {
  var caseSensitive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var minChars = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;

  return caseSensitive ? countOccurences(getWords(text, minChars)) : countOccurences(lowerWords(getWords(text, minChars)));
};
