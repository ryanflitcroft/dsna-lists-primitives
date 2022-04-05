// INPUT: should take in a string of words
// 'alchemy rocks gold';
// OUTPUT: should return words in reverse order
// 'ymehcla skcor dlog'

export default function reverseWords(sentence) {
  return sentence
    .split(' ')
    .map((word) => {
      return word.split('').reverse().join('');
    })
    .join(' ');
}

// console.log(reverseWords('alchemy rocks gold'));
