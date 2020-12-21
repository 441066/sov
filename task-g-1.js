/**
 * @namespace SovGoal
 */
/**
 * Заменяет элементы массива переданными символами.
 * @memberof SovGoal
 * @param {number[]} arrayToFill - массив, который будем обрабатывать.
 * @param {String} symbol - символ (или строка) на которую будем заменять элементы массива.
 * @param {Number} startIndex - начальный индекс элемента массива, который будем заменять.
 * @param {Number} endIndex - конечный индекс элемента массива, который будем заменять.
 * @returns {Array} - итоговый массив, в котором заменены элементы.
 * @example
 * fill([1, 2, 3], 'x');
 * // -> ['x', 'x', 'x']
 * fill([2, 4, 6, 8], '*', 1, 3);
 * // -> [2, '*', '*', 8]
 */
let fill = (arrayToFill, symbol, startIndex = 0, endIndex = 0) => {
    if (endIndex == 0) {
        endIndex = arrayToFill.length;
    }
    startIndex = startIndex < 0 ? 0 : startIndex;
    endIndex = endIndex < arrayToFill.length ? endIndex : arrayToFill.length;
    for (i = startIndex; i < endIndex; i++) {
        arrayToFill[i] = symbol;
    }
    return arrayToFill;
};

let arrayOfJakob = [4, 8, 15, 16, 23, 42];

console.log(fill(arrayOfJakob, "*", 2, 4));

console.log(fill([1, 2, 3, 5, 6, 8], "#", -2, 3));
