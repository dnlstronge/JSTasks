// create a function which returns a response based on number of digits
// 0 - 9: one digit 10 - 99: two digits 
// any other value 'The number is'

const numberDigits = (N) => {
  if (N > 0 && N < 10)
    return 'One digit: ' + N
  if (N > 9 && N < 100)
    return 'Two digits: ' + N 
  else
    return 'The number is: ' + N
};

//test

console.log(numberDigits(9)); //returns: One digit: 9
console.log(numberDigits(-132)); //returns: The number is: -132
console.log(numberDigits(75)); //returns: Two digits: 75
console.log(numberDigits(1235)); //returns; The number is: 1235
