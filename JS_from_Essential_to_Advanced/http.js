import { createServer } from 'http';

createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("I'm http here!");
})
    .listen(4000);

console.log("Server running at http://127.0.0.1:4000/");
