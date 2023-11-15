const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end(`Welcome to our home page. The server is now running.`)
    }
    if (req.url === "/about") {
        res.end(`We are still trying to develop our skills`);
    }
    if (req.url === "/contact") {
        res.end(`to contact us write to us`);
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to open the page you are looking for.</p>
        <a href="/">back home</a>
    `);
});

server.listen(5000);