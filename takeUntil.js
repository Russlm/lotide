//HELPER FUNCTIONS 
//ACTUAL CODE 

const takeUntil = function(array, callback) {
  let output = [];
  for (let element of array) {
    console.log('insde the forEach array', element )
    if (callback(element)){
        output = array.slice(0,array.indexOf(element))
        // console.log('inside the if then ', output);
        return output
    } 
  };
  return output
}

//TEST CODE 

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// FOR EACH LOOP VN
// const takeUntil = function(array, callback) {
//   let output = [];
//   array.forEach(element => {
//     console.log('insde the forEach array', element )
//     if (callback(element)){
//         output = array.slice(0,array.indexOf(element))
//         // console.log('inside the if then ', output);
//         return output
//     } 
//   });
//   return output
// }