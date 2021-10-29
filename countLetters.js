//TEST FUNCTION 
const assertEqual = function(actual, expected ){
  if (actual === expected){
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`❌❌❌ Assertion failed: ${actual} !== ${expected}`)
  }
  };

  // Actual Function 

  const countLetters = function(stringInput){
    let output = {}
    for (const item of stringInput) {
      console.log(item);
      // output = {item}
      console.log (output)
      if (output[item]) {
        output[item] += 1;
      } else {
        output[item] = 1;
      }
    }

    const punctuationList = [' ', "?", '!', ".",";"]
    for (const items of punctuationList){
      delete output[items]
    }
    console.log("Final output",output)
    // return results;
    
  }

  //Test Code 
countLetters('Nominally this program does what it says it should. Does it?')