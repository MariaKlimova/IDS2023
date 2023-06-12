//HTTP-сервер
import { createServer } from 'node:http'
const port = 3000;

//Обработчик входящего запроса
const requestHandler = (request, response) => {
    console.log(request.url);
    response.end('Hello Node.js Server');
}

const server = createServer(requestHandler);


server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }

    console.log(`server is listening on ${port}`);
})