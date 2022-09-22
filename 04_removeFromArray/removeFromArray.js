const removeFromArray = function(array, removed) {
    for (const iterator of array) {
        if (iterator === removed) {
            array.splice(array.indexOf(removed), array.indexOf(removed)+1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
