const findTheOldest = function(array) {
    /* let oldest = {
        name: "",
        yearOfBirth: 0,
        yearOfDeath: 0
    };

    for (let i = 0; i < array.length; i++) {
        if ((oldest.yearOfDeath - oldest.yearOfBirth) < (array[i].yearOfDeath - array[i].yearOfBirth) ) {
            oldest = array[i];
        }
        console.log(oldest);
    }
    return oldest; */

    const thisYear = new Date().getFullYear();
    let oldest = array.reduce((acc, el) =>{
        
        ageEl = (el.yearOfDeath || thisYear) - el.yearOfBirth;
        ageAcc = (acc.yearOfDeath || thisYear) - acc.yearOfBirth;

        return (ageEl > ageAcc)? el : acc;
        
    })

    
    console.log(oldest);
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
