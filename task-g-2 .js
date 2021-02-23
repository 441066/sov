/**
 * Функция для выполнения GET запроса - getUrl.
 * @memberof SovGoal
 * @param {String} url - ссылка, на которую нужно отправить GET запрос.
 * @param {Number} retries - число попыток выполнить запрос.
 * @param {Number} timeout - время между попытками (мс).
 * @returns {String} body - итоговое тело ответа.
 * @example
 * getUrl('http://ya.ru', 3,  10* 1000);
 * // -> тело ответа
 */

let getUrl = (url, retries, timeout) => {
    let request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.onload = () => {
        return request.responseText;
    };
};

let Body = getUrl("http://ya.ru");
console.log(Body);
