//TCP-сервер

import * as net from "net";

const server = net.createServer((socket) => {
    socket.on('data', (data)=> {
        console.log(data);
        socket.write(String(data).toUpperCase());
    })
    socket.on('close', ()=>{
        console.log('connection closed')
    })
});

server.listen(8000)