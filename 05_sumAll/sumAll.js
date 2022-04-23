const sumAll = function(start,end) {
    let sum = 0;
    //orders correctly
    if (start > end){
        let temp = start;
        start = end;
        end = temp;
    }

    //if negative or not interger return error
    if (start < 0 || end < 0 || !Number.isInteger(start) || !Number.isInteger(end)){
        return "ERROR";
    }

    for (let i = start; i <= end; i ++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
