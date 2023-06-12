import express from "express";

const app = express();
const port = 8000;


app.get('/', (request, response) => {
    throw new Error('oops')
})

app.use((err, request, response, next) =>{
    //Логирование ошибки
    console.log(err);
    response.status(500).send('Something broke')
})

app.listen(port);