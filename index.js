const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });

    res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>DevOps Cafe</title>

            <style>
                body {
                    font-family: Arial, sans-serif;
                    text-align: center;
                    margin-top: 100px;
                    background-color: #f5f5f5;
                }

                h1 {
                    color: #8B4513;
                }

                p {
                    font-size: 18px;
                }
            </style>
        </head>

        <body>
            <h1>Welcome to DevOps Cafe ☕</h1>
            <p>Your Node.js website is running!</p>
            <p>Version: 1.0</p>
        </body>
        </html>
    `);
});

server.listen(3000, "0.0.0.0", () => {
    console.log("DevOps Cafe running at http://localhost:3000");
});
