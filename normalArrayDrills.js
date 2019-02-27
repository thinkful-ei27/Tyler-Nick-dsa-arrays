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

const mergeArray = (arr1, arr2) => {
  let resultsArr = [];
  
  for(let i =0; i < arr1.length; i++){
    for(let j =0; j < arr2.length; j++){
      if(arr1[i] <= arr2[j]){
        resultsArr.push(arr1[i]);
      }
      if(arr1[i] > arr2[j]){
        resultsArr.push(arr2[j]);
      }
    }
  }
  return resultsArr;
};
let array1 = [1, 3, 6, 8, 11] ;
let array2 = [2, 3, 5, 8, 9, 10];

console.log(mergeArray(array1, array2));