const eqArrays = function(arrayOne, arrayTwo ){
  //accumulator 
  let output = false 
  //twin for loops to compare 
  for (let components of arrayOne){
    for (let files of arrayTwo){
      if (components === files){
        output = true 
      } else {
        output = false
      }
    }
  }
  
  //output message 
  if (output){
    console.log(`✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`)
  } else {
    console.log(`❌❌❌ Assertion failed: ${arrayOne} !== ${arrayTwo}`)
  }
  };

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false