const repeatString = function(string, iteration) {
    if (iteration < 0) return 'ERROR';
    
    let stringRepeated = '';
    for (let i = 0; i < iteration; i++) {
        stringRepeated += string;
    }
    return stringRepeated;
};

// Do not edit below this line
module.exports = repeatString;
