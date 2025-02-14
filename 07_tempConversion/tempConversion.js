const convertToCelsius = function(fahrenheit) {

  const celsius = (fahrenheit - 32) * 5/9;
  
  if (!Number.isInteger(celsius)) {
    const fixed = parseFloat(celsius.toFixed(1));
    return fixed;
  }

  return celsius;

};

const convertToFahrenheit = function(celsius) {

  const fahrenheit = (celsius * (9/5)) + 32;

  if (!Number.isInteger(fahrenheit)) {
    const fixed = parseFloat(fahrenheit.toFixed(1));
    return fixed
  }


  return fahrenheit;


};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
