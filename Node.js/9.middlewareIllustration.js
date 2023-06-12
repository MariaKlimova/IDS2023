import express from "express";

const app = express();
const port = 8000;

//Регистрируем middleware
app.use((request, response, next) =>{
    console.log(request.headers);
    next(); //Передает управление следующей middleware
})

app.use((request, response, next) =>{
    request.chance = Math.random(); //Дописывакм новое свойство к запросу
    next();
})

app.get('/', (request, response) => {
    response.json({
        chance: request.chance //В обработчике роута доступно это поле
    })
})

app.listen(port);