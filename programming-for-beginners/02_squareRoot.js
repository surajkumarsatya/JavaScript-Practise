// Find square root of a number

function squareRoot(num) {
  if (num < 0 ) return `No real square root`;
  if (num === 0 ) return 0;
  if (num === 1 ) return 1;
  if(typeof num != 'number' || Number.isNaN(num)) 
    return`Input cannot be a non-numeric value`

  for (let i = 1; i <= num/2; i++) {
    if (i * i === num) {
      return i
    } 
  }
  return `Cannot find square root of ${num}`;
}

console.log(`The square root is: ${squareRoot(1)}`)
console.log(`The square root is: ${squareRoot(225)}`)
console.log(`The square root is: ${squareRoot(0)}`)
console.log(`The square root is: ${squareRoot()}`)
console.log(`The square root is: ${squareRoot(-30)}`)
console.log(`The square root is: ${squareRoot(null)}`)
console.log(`The square root is: ${squareRoot("qwert")}`)

