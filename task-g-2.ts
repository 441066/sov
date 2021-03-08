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

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getUrl(params: requestParams) {
    let {
        url,
        extends: { retries, timeout },
    } = params;

    if ((retries && !timeout) || (!retries && timeout)) {
        return;
    }

    try {
        return await fetch(url).then((response) => {
            if (response.ok) {
                return response.text();
            }
        });
    } catch (err) {
        if (retries > 0) {
            delay(timeout);
            retries -= 1;
            getUrl({ url, extends: { retries, timeout } });
        } else {
            console.error("Request failed and no tries left :(", err);
        }
    }
}

const params = {
    url: "https://nozet.ru/?count=1",
    extends: {
        retries: 3,
        timeout: 2000,
    },
};

let body = getUrl(params);
console.log("body promise >", body);
