//Простейший сервер, но через синтаксис модулей
//Запускается командой 'node server.js'
//Постучаться можно командо 'curl localhost:3000 -v'

import {createServer } from 'node:http'
createServer( function(request, response){
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('Hello, World!');
}).listen(3001);