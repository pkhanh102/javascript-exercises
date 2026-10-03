const sumAll = function(first, second) {
    if (!Number.isInteger(first) || first < 0) return 'ERROR';
    if (!Number.isInteger(second) || second < 0) return 'ERROR';

    let start = 0;
    let end = 0;
    if (first < second) {
        start = first;
        end = second;
    } else {
        start = second;
        end = first;
    }

    let res = 0;
    for (let i = start; i <= end; i++) {
        res += i;
    }
    return res;
};

// Do not edit below this line
module.exports = sumAll;
