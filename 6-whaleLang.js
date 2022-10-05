/// create program which converts input to whale language - Turpentine and Turtles should be: U,U,E,E,I,E,E,A,U,U,E,E

const input = 'turpentine and turtles'
const vowels = ['a', 'e', 'i', 'o', 'u']
const resultArray = []
for(let i = 0; i<input.length; i++) {
   
  if (input[i] === 'e') {
    resultArray.push(input[i])
  }
  if (input[i] === 'u') {
    resultArray.push(input[i])

  }
  for (let j = 0; j<vowels.length; j++)
    if (input[i] === vowels[j]) {
      resultArray.push(input[i])
    }
  }
  const resultString = resultArray.join().toUpperCase()
  console.log(resultString);

/// tested outputs: U,U,E,E,I,E,E,A,U,U,E,E
