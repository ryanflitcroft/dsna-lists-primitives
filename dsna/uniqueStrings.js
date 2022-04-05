// Takes in an array of strings
// all strings have similar letters except one
// return string that is not similar
// input: ['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a'];
// output: 'BbBb'
export default function uniqueStrings(arr) {
  for (let i = 0; i < arr.length; i++) {
    const a = arr[i].split('').sort().join('').toLowerCase();
    const b = arr[i + 1].split('').sort().join('').toLowerCase();
    // console.log(a);
    // console.log(b);

    if (!a.includes(b) && !b.includes(a)) {
      return arr[i + 1];
    }
  }
}

// console.log(
//   uniqueStrings(['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a'])
// );
