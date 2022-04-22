const removeFromArray = function(array, ...args) {
    array = array.filter((element)=>{
        return !(args.includes(element));
    })
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
