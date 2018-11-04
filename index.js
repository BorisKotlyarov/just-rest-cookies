const querystring = require('querystring');

module.exports = function (request, response) {
    if (request.headers['cookie']) {
        request.cookies = querystring.parse(request.headers['cookie']);
    }
    return;
}