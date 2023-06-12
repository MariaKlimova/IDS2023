//Простой Express-сервер
import express from "express";

const app = express();
const port = 3000;

//Роутер
app.get('/', (request, response) => {
    response.send('Hello from Express');
})

app.get('/exp', (request, response) => {
    response.send('exp url');
})

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened');
    }
    console.log(`server is listening on ${port}`);

})