const repeatString = function(str,nummberOfTimes) {
    let newStr=""
    if (nummberOfTimes < 0) {
        return "ERROR"
    }
    for (let index = 0; index < nummberOfTimes ; index++) {
        newStr +=str
    }
        return newStr
};

// Do not edit below this line
module.exports = repeatString;
