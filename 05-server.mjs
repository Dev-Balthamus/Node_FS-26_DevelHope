import { createServer } from "node:http";

const server = createServer((request, response) => {
    console.log("Request received");

    response.statusCode = 200;
    
    response.setHeader("Content-Type", "text/html");

    response.end(`<html>
        <body>
        <h1>My first HTML response on a server request with Node</h1>
        <p>I am so excited to start working on Server and Database matters in Full Stack Developing!</p>
        </body>
        </html>`);
});

server.listen(3000, () => {
    console.log(`Server running at: http://localhost:3000/`);
});

