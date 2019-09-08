let http = require('http');

function parseCookies(cookie) {
    let rx = /([^;=\s]*)=([^;]*)/g;
    let obj = {};
    for (let m; m = rx.exec(cookie);)
        obj[m[1]] = decodeURIComponent(m[2]);
    return obj;
}

function stringifyCookies(cookies) {
    let list = [];
    for ([key, value] of Object.entries(cookies))
        list.push(key + '=' + encodeURIComponent(value));
    return list.join('; ');
}

http.createServer(function (request, response) {
    let cookies = parseCookies(request.headers.cookie);
    console.log('Input cookies: ', cookies);
    cookies.search = 'google';
    if (cookies.counter)
        cookies.counter++;
    else
        cookies.counter = 1;
    console.log('Output cookies: ', cookies);
    response.writeHead(200, {
        'Set-Cookie': stringifyCookies(cookies),
        'Content-Type': 'text/plain'
    });
    response.end('Hello World\n');
}).listen(1234);