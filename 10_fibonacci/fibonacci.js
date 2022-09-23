const fibonacci = function(index) {
if(index < 0) return 'OOPS'; 

/* let a = 0;
let b = 1;
let c = 0;

let arrayFibonacci =[0]
for (let i = 0; i < index/2; i++) {
    
    arrayFibonacci.push(a = b + c);
    arrayFibonacci.push(b = a + c);
    arrayFibonacci.push(c = a + b);//
    console.log(arrayFibonacci);
}
return arrayFibonacci[index]; */

if( index <= 1){
    return Number(index);
}else{
    return fibonacci(index-1) + fibonacci (index-2)//
}
};

// Do not edit below this line
module.exports = fibonacci;
