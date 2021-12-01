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
let users = [];

io.on('connection', socket => {
    console.log(`Socket conectado: ${socket.id}`)

    socket.on('disconnect', () => {
        const userIndex = users.findIndex(user => user.id === socket.id)

        users.splice(userIndex, 1)

        socket.broadcast.emit("disconnectedUser", users)

    })

    socket.emit("previousUser", users)
    socket.emit("previousMessage", messages)

    socket.on("sendMessage", data => {
        messages.push(data)
        socket.broadcast.emit("receivedMessage", data);
    })

    socket.on("sendUser", data => {
        data[data.length - 1].id = socket.id;
        users = data;
        socket.broadcast.emit("receivedUser", users);
    })
})

server.listen(8080);
console.log("Running 🚀")