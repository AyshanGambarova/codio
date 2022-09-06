function findCommonPrefix(arr) {
  const charArray = [];
  const [shortestWord, ...wordList] = [...arr].sort(
    (a, b) => a.length - b.length
  );
  shortestWord.split("").every((char, idx) => {
    const isValidChar = wordList.every((word) => word.charAt(idx) === char);
    if (isValidChar) {
      charArray.push(char);
    }
    return isValidChar;
  });
  return charArray.join("");
}

console.log(findCommonPrefix(["alma", "kitab", "alca"]));


