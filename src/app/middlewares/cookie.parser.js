export default function (request, response, next) {
    let cookies = {};
    let notParsedCookies = request.headers.cookie;
    
    notParsedCookies && notParsedCookies.split(';').forEach(function( cookie ) {
        let parts = cookie.split('=');
        cookies[parts.shift().trim()] = decodeURI(parts.join('='));
    });

    request.parsedCookies = cookies;
    next();
}
