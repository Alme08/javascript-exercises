const removeFromArray = function(array, ...theArguments) {
    let filteredArray;
    
    const filtered = (item)=>{
        for (const arg of theArguments) {
            if( arg === item){
                return false
            }
        }
        return item;
    }
    
    filteredArray = array.filter(filtered);
    console.log(filteredArray);
    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
