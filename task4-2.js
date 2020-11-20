let reverseArray = (array) => {
  let reversedArray = [];
  for (number of array) {
    reversedArray.unshift(number);
  }
  return reversedArray;
};
console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

let reverseArrayInPlase = (array) => {
  for (i = 0; i < array.length; i++) {
    let datElement = array.pop(datElement);
    array.unshift(datElement);
  }
  return reversedArray;
};
console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
