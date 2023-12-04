const reverseLeftWords = (s, n) => {
  return s.slice(n) + s.slice(0, n);
}
const result = reverseLeftWords("abcdefg", 2);
console.log(result);