function longestCommonPrefix(arr) {
  const charList = [];

  const [shortestWord, ...wordList] =
    // sort shallow copy by item `length` first.
    [...arr].sort((a, b) => a.length - b.length);

  shortestWord
    .split('')
    .every((char, idx) => {
      const isValidChar = wordList.every(word =>
        word.charAt(idx) === char
      );
      if (isValidChar) {
        charList.push(char);
      }
      return isValidChar;
    });

  return charList.join('');
}

console.log(
  longestCommonPrefix(["flower","flow","flight"])
);

console.log(
  longestCommonPrefix(["dog","racecar","car"])
);
