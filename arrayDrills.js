'use strict';

const Array = require('./array.js');

function main() {
  Array.SIZE_RATIO = 3;
  //create an instance of the array class
  let arr = new Array();
  //add an item to the array
  arr.push(3); //cap = 3
  arr.push(5); //cap = 3
  arr.push(15); //length === cap, length+1 (4) * 3 cap = 12
  arr.push(19); // cap 12 length = 4
  arr.push(45); //cap 12 length = 5
  arr.push(10); //cap 12 length = 6
  arr.pop(); //length = 5 (pop has length--)
  arr.pop(); //length = 4
  arr.pop(); //length = 3
  console.log(arr);
}

//arr.push(3)
//What is the length, capacity, and memory address of your array?
//Length: 1 (There is only one item
//Capacity: 3 (Capacity was increased due to (length + 1) * SizeRatio
//Memory Address: 0 


//arr.push(many)
//What is the length, capacity, and memory address of your new array?
//Length: 6
//Capacity: 12
//Memory Address: 3 (_resize sets pointer equal to value (value was 3 when we resized))

//arr.pop
//What is the length, capacity, and memory address of your new array?
//Length: 3 (each pop shortens length by 1 [will "exist" until overwritten])
//Capacity: 12 (capacity does not change when reducing)
//Memory Address: 3 (pop does not alter pointer)
main();
