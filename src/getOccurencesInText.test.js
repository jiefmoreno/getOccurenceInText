import { countOccurences, getOccurencesInText, getWords, lowerWords } from './getOccurencesInText';

describe('getWords', () => {
  it('should return an empty object', () => {
    expect(getWords('')).toEqual([]);
  });
  
  it('should handle special caracters', () => {
    const text = 'Salùt Jéan-François $rer@ êtràè ïcëcä';
    const expected = [
      'Salùt',
      'Jéan-François',
      'rer',
      'êtràè',
      'ïcëcä'
    ];
    
    expect(getWords(text)).toEqual(expected);
  });
  
  it('should ignore words smaller than 3 caracters', () => {
    const text = 'H He Hey';
    const expected = ['Hey'];
    
    expect(getWords(text)).toEqual(expected);
  });
});

describe('lowerWords', () => {
  it('should set words to lower case', () => {
    const text = ['Hello', 'hello', 'HeLLo'];
    const expected = ['hello', 'hello', 'hello'];
  
    expect(lowerWords(text)).toEqual(expected);
  });
});

describe('countOccurences', () => {
  it('should count occurences', () => {
    const text = ['Salut', 'Salut', 'Salut', 'hello', 'hello'];
    const expected = {
      'Salut': 3,
      'hello': 2
    };
    
    expect(countOccurences(text)).toEqual(expected);
  });
});

describe('getOccurencesInText', () => {
  it('should be case sensitive ', () => {
    const text = 'Hello hello HeLLo';
    const expected = {
      'Hello': 1,
      'hello': 1,
      'HeLLo': 1
    };
    
    expect(getOccurencesInText(text)).toEqual(expected);
  });
  
  it('should be case insensitive ', () => {
    const text = 'Hello hello HeLLo';
    const expected = {
      'hello': 3,
    };
    
    expect(getOccurencesInText(text, false)).toEqual(expected);
  });
});
