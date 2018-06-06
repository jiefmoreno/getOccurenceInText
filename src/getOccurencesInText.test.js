import { countOccurences, getOccurencesInText, getWords, lowerWords } from './getOccurencesInText';

describe('getWords', () => {
  it('should return an empty object', () => {
    expect(getWords('', 3)).toEqual([]);
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
    
    expect(getWords(text, 3)).toEqual(expected);
  });
  
  it('should ignore words smaller than 4 caracters', () => {
    const text = 'H He Hey, Heyy';
    const expected = ['Heyy'];
    
    expect(getWords(text, 4)).toEqual(expected);
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

  it('should handle words with minimum 4 caracters ', () => {
    const text = 'He hel hell HeLLo';
    const expected = {
      'hell': 1,
      'HeLLo': 1,
    };
    
    expect(getOccurencesInText(text, true, 4)).toEqual(expected);
  });
});
