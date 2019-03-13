import http from 'http';

const port = 3000;

export default function customServer(contentType, content) {
    const requestHandler = (request, response) => {
        console.log(request.url);
        response.writeHead(200, { 'Content-Type': contentType });
        response.write(content);
        response.end();
    }
    
    const server = http.createServer(requestHandler);
    
    server.listen(port, (error) => {
        if (error) {
            return console.log('Something bad happened', error);
        }
        console.log(`Server is listening on ${port}`);
    })
}
