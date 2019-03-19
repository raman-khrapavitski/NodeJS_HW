export default function (request, response, next) {
    request.parsedQuery = request.query;
    next();
}
