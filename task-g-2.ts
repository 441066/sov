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

type requestParams = {
    url: string;
    extends: { retries: number; timeout: number };
};

let getUrl = (params: requestParams) => {
    const {
        url,
        extends: { retries, timeout },
    } = params;

    if ((retries && !timeout) || (!retries && timeout)) {
        return;
    }

    fetch(url)
        .then((response) => {
            return response.text();
        })
        .then((data) => {
            console.log(data);
        });
};
const requestParams = {
    url: "https://nozet.ru/?count=1",
    extends: {
        retries: 3,
        timeout: 2000,
    },
};
const body = getUrl(requestParams);
