# getOccurencesInText
The module getOccurencesInText count the words occurence in a text. It ommit the words with less than two caracters.

You can use it like this: 
```js
getOccurencesInText('Hello hello, and nice to meet you'); // by default the function is case sensitive

/* 
result: {
and: 1,
hello: 1,
Hello: 1,
meet: 1,
nice: 1,
you: 1
}
*/
```
If you want to deactivate the case sensitive option :
```js
getOccurencesInText('Hello hello, and nice to meet you', false);

/* 
result: {
and: 1,
hello: 2,
meet: 1,
nice: 1,
you: 1
}
*/
```