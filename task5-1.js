let arraysArray = [
    [2, 4],
    [8, 15, 16],
    [23, 42],
];
function ReduceArraysArray(array) {
    return array.reduce((arrayUniq, element) => arrayUniq.concat(element));
}
arrayUniq = ReduceArraysArray(arraysArray);
console.log(arrayUniq);
