// Check if the number is positive or negative

checkNumberPositive = (num) => {
    if(num === 0) return `Number is zero`
    if(num > 0) return `${num} is is positive`
    if(num < 0) return `${num} is is negative`
    else return `Please enter a valid number`
}

console.log(checkNumberPositive(-5))
console.log(checkNumberPositive(5))
console.log(checkNumberPositive(0))
console.log(checkNumberPositive("5"))
console.log(checkNumberPositive(undefined))
console.log(checkNumberPositive(null))