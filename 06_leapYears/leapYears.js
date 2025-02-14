const leapYears = function(year) {
    
    /* How to Know if Certain Year is a Leap Year
The 3 conditions for a given year be a leap year are:

The year is exactly divisible by four (with no remainder);
If the year is divisible by 100 (years ending in two zeros), it is not a leap, except if
It is also divisible by 400 (in this case it will be a leap year). */

    const divisibleByFour = year / 4;
    const divisibleBy100 = year / 100;
    const divisibleBy400 = year / 400;

    const checkLastTwoDigits = String(year).slice(-2);
    
    if (checkLastTwoDigits === '00') {
        if (Number.isInteger(divisibleByFour) && Number.isInteger(divisibleBy100) && Number.isInteger(divisibleBy400)) {
            return true;
        } else {
            return false;
        };
    };
    
    
    if (Number.isInteger(divisibleByFour) && !Number.isInteger(divisibleBy100)) {
        return true;
    };

    if (!Number.isInteger(divisibleByFour)) {
        return false;
    };



};

// Do not edit below this line
module.exports = leapYears;
