const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR';
    }
    let counter = 0;
    let result = "";
    while (counter < num) {
        result += string;
        counter++;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
