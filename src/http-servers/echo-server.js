import http from 'http';

const port = 3003;

const requestHandler = (request, response) => {
    console.log(request.url);    
    request.pipe(response);
}

const server = http.createServer(requestHandler);

server.listen(port, (error) => {
    if (error) {
        return console.log('Something bad happened', error);
    }
    console.log(`Server is listening on ${port}`);
})
