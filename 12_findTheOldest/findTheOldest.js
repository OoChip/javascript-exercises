const findTheOldest = function(arr) {
    let age= 0
        , oldest = 0
        , oldestName
        , oldestIndex
        , actualYear = new Date().getFullYear()

    arr.forEach((element, index) => {
        
        if (element.yearOfDeath === undefined){ yearOfDeathToUse = actualYear
        }else{ yearOfDeathToUse = element.yearOfDeath }

        age = (yearOfDeathToUse) - (element.yearOfBirth)
               
        if ( age > oldest) {
            oldest = age
            oldestIndex = index
        }
    })
return arr[oldestIndex]
};

// Do not edit below this line
module.exports = findTheOldest;