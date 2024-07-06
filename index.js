const http = require('http');
const requestIp = require('request-ip');

const server = http.createServer((req, res) => {
    // Get user agent
    const userAgent = req.headers['user-agent'];

    // Get IP address
    const clientIp = requestIp.getClientIp(req);

    // Log user agent and IP address
    console.log('User Agent:', userAgent);
    console.log('IP Address:', clientIp);
    
    // Respond to the client
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('hloo this is the polar-ip-chk from co3min3r \n');
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
