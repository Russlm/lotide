// TEST/ASSERTION FUNCTIONS
//EQ ARRAY
const eqArrays = function(arrayOne, arrayTwo) {
  //accumulator
  let output = false;
  //twin for loops to compare
  for (let components of arrayOne) {
    for (let files of arrayTwo) {
      if (components === files) {
        output = true;
      } else {
        output = false;
      }
    }
  }
  return output
};

const assertArraysEqual = function(arrayOne, arrayTwo) {
  // computation done by eqArray.
  output = eqArrays(arrayOne,arrayTwo) 
  //output message
  if (output) {
    console.log(`✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`❌❌❌ Assertion failed: ${arrayOne} !== ${arrayTwo}`);
  }
};
  


// ACTUAL FUNCTION
const middle = function(input) {
  //accumulator 
  let output = []
  // 1. Get array index - 1. (array.length has adds 1 to the index becacuse of 0 indexing. )
  let caseCheck = input.length - 1
  console.log('index length is:', caseCheck)  
  // 2. Case Check.
  switch (caseCheck){
    case caseCheck === 0:
      output = []
      console.log('1 element array', caseCheck)
      break;
    case caseCheck === 1:
      output = []
      console.log('2 element array', caseCheck)
      break;
    case caseCheck%2 === 0:
      caseCheck = caseCheck/2
      caseCheck = Math.ceil(caseCheck)
      caseCheck = [caseCheck, caseCheck + 1]
      console.log('even case result:', caseCheck)
      break;
    default:
      caseCheck = caseCheck/2
      caseCheck = Math.ceil(caseCheck)
      console.log('odd case results', caseCheck)
  }
  // Input Case 1: 1 and 2 element arrays 
  // Input Case 2: Even Array Length
  // Input Case 3: Odd Array Length 
  // 2. divide in 2 
  // 3. take middle index array
  return output = [input[caseCheck]]
}

// TEST CODE

let test1 = middle([1, 2, 3]) 
let test2 = middle(["1", "2", "3"]) 
let test3 = middle([1, 2, 3, 4])



console.log(assertArraysEqual(test1, [2]))
console.log(assertArraysEqual(test2, ["2"]))
console.log(assertArraysEqual(test3, [2,3]))

