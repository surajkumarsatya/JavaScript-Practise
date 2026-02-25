// Check if a Number is Odd or Even

checkOddEvenNumber = (num) => {
    if(num % 2 === 0) return `${num} is even`
    else return `${num} is odd` 
}

console.log(checkOddEvenNumber(5))
console.log(checkOddEvenNumber(15))
console.log(checkOddEvenNumber(50))
console.log(checkOddEvenNumber(546))
console.log(checkOddEvenNumber(1))
console.log(checkOddEvenNumber(-90))