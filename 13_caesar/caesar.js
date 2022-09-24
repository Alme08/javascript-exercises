const caesar = function(string, shift) {
    let code = [];

    for (let i = 0; i < string.length; i++) {
        if (/[a-zA-Z]/.test(string[i]) ) {
            code.push(string.charCodeAt(i));
        }
        else{
            code.push(string[i])
        }
    }

    const cipherCaesar = (item) =>{
        if(shift > 0){
            for (let i = 0; i < shift; i++) {
                if((item > 64 && item < 91) || (item > 96 && item < 123)){
                    item++
                }else if(item == 91 || item == 123){
                    item = item - 25;
                }else{
                    return item; 
                }   
            }
        }else{
            for (let i = 0; i > shift; i--) {
                if((item > 64 && item < 91) || (item > 96 && item < 123)){
                    item--
                }else if(item == 64 || item == 96){
                    item = item + 25;
                }else{
                    return item;
                }
                
            }
        }
        
        return (item == 91 || item == 123)? String.fromCharCode(item-26) : String.fromCharCode(item);
    }

    let cipher = code.map(cipherCaesar);
    return cipher.join('');
};

// Do not edit below this line
module.exports = caesar;
