const palindromes = function (string) {

    const validatePunctuation = (e) =>{
        
        return e!== '!' && e !== ' ' && e !== ',' && e !== '.';
    }

    let str = string.split('');
    let strFilter = str.filter(validatePunctuation);
    let strOriginal = strFilter.join('');
    strFilter = strFilter.reverse();
    strFilter = strFilter.join('');

    console.log(strOriginal);
    console.log(strFilter);

    return (strOriginal.toLowerCase() === strFilter.toLowerCase())? true : false;
};

// Do not edit below this line
module.exports = palindromes;
