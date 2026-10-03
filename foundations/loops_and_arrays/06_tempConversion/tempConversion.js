const convertToCelsius = function(far) {
  let cel = (far - 32) / 1.8;
  let rounded = Math.round(cel * 10) / 10;
  return rounded;
};

const convertToFahrenheit = function(cel) {
  let far = (cel * 1.8) + 32;
  let rounded = Math.round(far * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
