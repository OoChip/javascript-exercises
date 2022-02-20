const leapYears = function(year) {

    let isCentury = false
    let isLeap = false
    let isCenturyLeap = false
    if (year % 100 === 0) { isCentury = true}
    if (year % 4 === 0) { isLeap = true}
    if ((year % 100 === 0 && year % 400 === 0)) { isCenturyLeap = true}

    if ((isCentury && isCenturyLeap) || (isLeap && !isCentury)){return true
    }else{return false}
    
};

// Do not edit below this line
module.exports = leapYears;
