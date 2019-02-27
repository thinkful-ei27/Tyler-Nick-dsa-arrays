'use strict';


const urlify = (string) => {
  let answer='';
  for(let i = 0; i < string.length; i++){
    if(string[i] === ' '){
      answer += '%20';
    }else{
      answer += string[i];
    }
  }
  console.log(answer);
};

// O(n)

const filter = (arr) => {
  let answer = [];
  for(let i =0; i < arr.length; i++){
    if(arr[i] >= 5){
      answer.push(arr[i]);
    }
  }
  console.log(answer);
};

let testArr = [4,6,-3,5,-2,1];



//  O(n)

const maxSum = (arr) => {
  let total = 0;
  let max = 0;

  for(let i =0; i < arr.length; i++){
    total += arr[i];
    if(total > max){
      max = total;
    }
  }
  return max;
};

// const mergeArray = (arr1, arr2) => {
//   let resultsArr = [];
  
//   for(let i =0; i < arr1.length; i++){
//     for(let j =0; j < arr2.length; j++){
//       if(arr1[i] <= arr2[j]){
//         resultsArr.push(arr1[i]);
//       }
//       if(arr1[i] > arr2[j]){
//         resultsArr.push(arr2[j]);
//       }
//     }
//   }
//   return resultsArr;
// };
// let array1 = [1, 3, 6, 8, 11] ;
// let array2 = [2, 3, 5, 8, 9, 10];

// console.log(mergeArray(array1, array2));

let input1 = [1, 3, 6, 8, 11, 11, 11];
let input2 = [2, 3, 5, 8, 9, 10, 10, 12, 12, 12];


const mergeArrays = (arr1, arr2) => {

  const answer = [];

  if(arr1.length === 0){
    for(let i = 0; i < arr2.length; i++){
      answer.push(arr2[i]);
    }
    return answer;
  }
  if(arr2.length === 0){
    for(let i = 0; i < arr1.length; i++){
      answer.push(arr1[i]);
    }
    return answer;
  }
  if(arr1[0] > arr2[0]){
    answer.push(arr2[0]);
    return answer.concat(mergeArrays(arr1, arr2.slice(1)));
  } else {
    answer.push(arr1[0]);
    return answer.concat(mergeArrays(arr1.slice(1), arr2));
  }
};

// console.log(mergeArrays(input1, input2));

let sampleDelete = 'abcdfghjklmnpqrstvwxyz';
let sentence = 'hello friend';
const removeChar = (string, del) => {
  let answerString = string;
  for(let j = 0; j < del.length; j++){
    for(let k =0; k < string.length; k++){
      if(del[j] === string[k]){
        answerString = answerString.replace(string[k], '');
      }
    }
  }
  return answerString;
};

// O(n^2);

const products = (arr) => {
  const answer = [];
  function getProduct(total, num) {
    return total * num;
  }
  for(let i = 0; i < arr.length; i++){
    let copyArr = arr.slice(0);
    copyArr.splice(i, 1);
    answer.push(copyArr.reduce(getProduct));
  }
  return answer;
};

// O(n^2);

//2D Array


let inputArray = 
[
[1,0,1,1,0],
[0,1,1,1,0],
[1,1,1,1,1],
[1,0,1,1,1],
[1,1,1,1,1]
];

const twoDZero = (arr) => {
  //separate answer array to not mess with source of truth
  let outputArray = inputArray.map(line => line.slice(0));
 
  //for loop checking each sub array (level 1) (index y)
  for(let y = 0; y < arr.length; y++){
  //next loop interacts with elements within array (index x)
    for(let x = 0; x < arr[0].length; x++){
      //if array[y][x] === 0 (SoT),
      if(arr[y][x] === 0){
        for(let z = 0; z < arr[0].length; z++){
          outputArray[y][z] = 0;
        }
        for(let z = 0; z < arr.length; z++){
          outputArray[z][x] = 0;
        }
      }
    }  
  }
  return outputArray;
  // return outputArray;
  //horizontal: find 0, for(let z = 0, z< array[y].length; z++) array[y][z] = 0; 
  //vertical: find 0, for(let z = 0, z < array[z].length;  z++) array[z][x] = 0;
  //return answer
}

// console.log(inputArray);
// console.log(twoDZero(inputArray));

