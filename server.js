const express = require('express');

const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

app.set("view engine", "ejs")
app.use(express.static(__dirname + '/public'))

app.get("/", (req, res) => {
    res.render("./index.ejs")
})

io.on('connection', socket => {
    console.log(`Socket conectado: ${socket.id}`)

    socket.on("sendMessage", data => {
        console.log(data)
    })
})

server.listen(8080);
console.log("Running 🚀")