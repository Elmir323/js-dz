// Д/З

// 1

let us = [1,2,3,4,5,6,7,8,9,10];
let even = [];
let odd = [];

for(let i = 1; i <= us;i++) {
    us.push(i)
}

for(let r of us) {
    if (r % 2 === 0) {
        even.push(r);
    }else{
        odd.push(r)
    }
    
}

console.log(even);
console.log(odd);


// 2

/* for(let i = 0; i < Infinity;i++) {
    let myArray = [];
    let userInput = prompt('Введите что-нибудь');
    myArray.push(userInput);
    
    if(userInput == add) {
        userInput.push(myArray);
        console.log(myArray);
    }
    
    if(userInput == del ) {
        myArray.pop(userInput)
        console.log(myArray);
    }
    
    
    if(myArray == 'stop') {
        break
    }
    
} */