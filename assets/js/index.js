
alert ('hello');

//  const a=[5,6,8,9,12];
//  console.log(isEven(a));

// function isEven(a){
//     let count = 0;
//     for (let i = 0; i < a.length; i++) {
     
//         if (typeof a[i]=="number" && a[i] % 2 === 0) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(typeof typeof null)


function Add() {
    console.log(arguments);
    var sum=0;
    for(var i = 0; i < arguments.length; i++){
        sum +=arguments[i];
    }
    return sum;
  }
  
  console.log(Add(5, 6,3,8,9));