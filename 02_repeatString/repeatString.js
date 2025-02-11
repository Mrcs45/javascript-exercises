const repeatString = function(value, n) {
    let result = '';

    if (n < 0) {
        return 'ERROR'
    }

    for (let i = 0; i < n; i++) {
        result += value;
        
    }
    
    
    return result;
};

// Do not edit below this line
module.exports = repeatString;
