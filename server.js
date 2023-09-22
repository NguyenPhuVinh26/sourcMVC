const http = require('http');

const hostname = 'localhost'; // localhost địa chỉ ip - localhost
const port = 8080; // tham số port

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n nguyen phu vinh ');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});