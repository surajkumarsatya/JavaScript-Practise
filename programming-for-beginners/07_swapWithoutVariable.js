function swapWithoutVariables(num1, num2){
    if(typeof num1 != 'number' || typeof num2 != 'number') return `The input must be a number`
    console.log(`Before swapping --> Num 1: ${num1} and Num2: ${num2}`)

    num2 = num1 + num2 // 19
    num1 = num2 - num1 // 8
    num2 = num2 - num1 // 11

    console.log(`After swapping --> Num 1: ${num1} and Num2: ${num2}`)    
}

swapWithoutVariables(-43, -79)