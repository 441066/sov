/*
fill([1, 2, 3], 'x');             // ['x', 'x', 'x']
fill([2, 4, 6, 8], '*', 1, 3);    // [2, '*', '*', 8]
fill([1, 3, 5, 7], '#', -2, 2);   // ['#', '#', 5, 7]
fill([1, 3, 5, 7], '#', 2, 10);   // [1, 3, '#', '#']
*/

let arrayOfJakob = [4, 8, 15, 16, 23, 42];

let fill = (arrayToFill, symbol, startIndex = 0, endIndex = 0) => {
    if (endIndex == 0) {
        endIndex = arrayToFill.length;
    }
    startIndex = startIndex < 0 ? 0 : startIndex;
    endIndex = endIndex < arrayToFill.length ? endIndex : arrayToFill.length;

    return arrayToFill.fill(symbol, startIndex, endIndex);
};

console.log(fill(arrayOfJakob, "*", 0, 2));

console.log(fill([1, 2, 3, 5, 6, 8], "#", -2, 3));
