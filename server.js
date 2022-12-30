require('dotenv').config();
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const dev = process.env.NODE_ENV != "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.SERVER_PORT || 3000;

app.prepare().then(() => {
    createServer((req, res) => {
        const parsedUrl = parse(req.url, true);
        const { pathname, query } = parsedUrl;
        handle(req, res, parsedUrl);
    }).listen(port, (err) => {
        if (err) throw err;
        // Console localhost URL and port.
        console.log(`❯❯ Ready on http://localhost:${port}`);
        // Console Network URL ad port.
        const os = require("os");
        const networkInterfaces = os.networkInterfaces();
        const addresses = [];
        for (const k in networkInterfaces) {
            for (const k2 in networkInterfaces[k]) {
                const address = networkInterfaces[k][k2];
                if (address.family === "IPv4" && !address.internal) {
                    addresses.push(address.address);
                }
            }
        }
        console.log(`❯❯ Ready on http://${addresses[0]}:${port}`);
    });
});
