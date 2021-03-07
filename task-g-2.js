var getUrl = function (params) {
    var url = params.url, _a = params["extends"], retries = _a.retries, timeout = _a.timeout;
    if ((retries && !timeout) || (!retries && timeout)) {
        return;
    }
    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.send();
    request.onload = function () {
        console.log(request.responseText);
        return request.responseText;
    };
    request.onerror = function () {
        //do request again
    };
};
var requestParams = {
    url: "https://nozet.ru/?count=1",
    "extends": {
        retries: 3,
        timeout: 2000
    }
};
var body = getUrl(requestParams);
