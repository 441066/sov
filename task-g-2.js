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
var getUrl = function (params) {
    var url = params.url, _a = params["extends"], retries = _a.retries, timeout = _a.timeout;
    if ((retries && !timeout) || (!retries && timeout)) {
        return;
    }
    fetch(url)
        .then(function (response) {
        return response.text();
    })
        .then(function (data) {
        console.log(data);
    });
};
var requestParams = {
    url: "https://nozet.ru/?count=1",
    "extends": {
        retries: 3,
        timeout: 2000
    }
};
var body = getUrl(requestParams);
