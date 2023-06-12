//Чуть более сложный сервер - с возвратом HTML

import { createServer } from 'node:http'
const port = 3000;

//Обработчик входящего запроса
const requestHandler = (request, response) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");
    response.write('<h1>Hello Node.js Server</h1>');
    response.end();
}

const server = createServer(requestHandler);


server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }

    console.log(`server is listening on ${port}`);
})
