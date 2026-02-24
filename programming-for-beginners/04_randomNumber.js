// Generate random numbers

function getRandomNumber(){
    const random = Math.ceil(Math.random() * 100)
    if(random <= 10){
        getRandomNumber()
    }else{
        console.log(random)
    }
}

for(let i=1; i<=100; i++){
    getRandomNumber()
}