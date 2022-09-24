const findTheOldest = function(array) {
    const thisYear = new Date().getFullYear();
    
    let oldest = array.reduce((acc, el) =>{
        
        ageEl = (el.yearOfDeath || thisYear) - el.yearOfBirth;
        ageAcc = (acc.yearOfDeath || thisYear) - acc.yearOfBirth;

        return (ageEl > ageAcc)? el : acc;
        
    })
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
