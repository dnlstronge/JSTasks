// create a function to determine if a number is even

const isEven = (number) => {
  if (number % 2 == 0) 
    return true
  else
    return false
};

//test

console.log(isEven(2)); // returns: true
console.log(isEven(7)); // returns: false
