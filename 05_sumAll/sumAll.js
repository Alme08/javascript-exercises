const sumAll = function(num1, num2) {
    if(num1 < 0 || num2 < 0 || typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'ERROR';
    }

    let suma = 0;
    if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
            suma += i;
        }
        
    } else {
        for (let i = num1; i >= num2; i--) {
            suma += i;
        }
    }
    return suma;
};

// Do not edit below this line
module.exports = sumAll;
