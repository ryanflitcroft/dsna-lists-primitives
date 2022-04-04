const reverseMe = 'alchemy rocks gold';

// INPUT: should take in a string of words
// OUTPUT: should return words in reverse order
// 'ymehcla skcor dlog'
function reverseWords(words) {
  return words
    .split(' ')
    .map((word) => {
      return word.split('').reverse().join('');
    })
    .join(' ');
}

console.log(reverseWords(reverseMe));
