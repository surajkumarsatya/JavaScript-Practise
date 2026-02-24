function swapNumber(num1, num2){
    console.log(`Before swapping the numbers are ${num1} and ${num2}`);
    // let temp = num1
    // num1 = num2
    // num2 = temp

    [num1, num2] = [num2, num1]

    // return {num1, num2}
    return [num1, num2];
}

let [num1, num2] = swapNumber(5, 6)
console.log(`After swapping the numbers are ${num1} and ${num2}`)

// 2nd Method - Destructuring
