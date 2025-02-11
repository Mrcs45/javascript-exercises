const removeFromArray = function(arr, ...args) {
    return arr.filter(index => !args.includes(index))
};

    
// Do not edit below this line
module.exports = removeFromArray;
