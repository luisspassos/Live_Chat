const express = require('express');

const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

app.set("view engine", "ejs")
app.use(express.static(__dirname + '/public'))

app.get("/", (req, res) => {
    res.render("./index.ejs" )
})

const messages = [];

io.on('connection', socket => {
    console.log(`Socket conectado: ${socket.id}`)

    socket.emit("previousMessage", messages)

    socket.on("sendMessage", data => {
        messages.push(data)
        socket.broadcast.emit("receivedMessage", data);
    })
})

server.listen(8080);
console.log("Running 🚀")