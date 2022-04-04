// should take in a number
// returns 'evenish' if number is even
//returns 'oddish' if number is odd

function oddishOrEvenish(num) {
  num
    .toString()
    .split('')
    .reduce((acc, curr) => {
      return Number(acc) + Number(curr);
    }, 0);

  return num % 2 ? 'oddish' : 'evenish';
}

console.log(oddishOrEvenish(153));
console.log(oddishOrEvenish(226));
