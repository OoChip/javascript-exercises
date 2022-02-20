const removeFromArray = function(a,b, ...c) {
    let pos = a.indexOf(b)
    if (pos >= 0) {a.splice(pos, 1)}
    c.forEach((currentValue, index) => {
        let pos = a.indexOf(currentValue)
        if (pos >= 0) {a.splice(pos, 1)}
    })
    return a
}

// Do not edit below this line
module.exports = removeFromArray;
