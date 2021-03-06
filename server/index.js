const http = require('http');
const server = http.createServer();
const { Server } = require("socket.io");
const io = new Server(server);

const PORT = process.env.PORT || 49154;

io.on('connection', (socket) => {
    socket.on("position-change", (data) =>{
        console.log(data);
        io.emit("position-change", data);
    })

    socket.on("disconnected", () => {

    });
});

server.listen(PORT, ()=>{
    console.log("listening on ${PORT}");
});

