const sendMessageForm = document.querySelector(".sendMessage");
const modalWrapper = document.querySelector(".modalWrapper");
const modalForm = document.querySelector(".modal > form");
const modalNameInput = document.querySelector(".modal > form > input");
const messageInput = document.querySelector(".textAreaWrapper > textarea");
const messageList = document.querySelector(".messageList");
const userList = document.querySelector(".online > ul");

const socket = io("http://localhost:8080");

const colors = ["#8BE9FD", "#50FA7B", "#FFB86C", "#FF5555"];
const color = colors[Math.floor(Math.random() * colors.length)]

function renderMessage(message) {
    messageList.innerHTML += `<li>
        <label style="color: ${message.color}">${message.name}</label>: 
        ${message.message}
        <hr>
    </li>`
}

function renderUserList(users) {
    userList.innerHTML = users.map(user => {
        return (`<li style="color: ${user.color}">${user.user}</Li>`)
    }).join("")
}

socket.on("disconnectedUser", users => {
    renderUserList(users)
})

socket.on("previousMessage", messages => {
    messages.forEach(message => {
        renderMessage(message);
    })
})

socket.on("previousUser", users => {
    renderUserList(users);
    userArr = users;
})

socket.on("receivedMessage", message => {
    renderMessage(message)
})

socket.on("receivedUser", users => {
    renderUserList(users)
})


modalForm.addEventListener("submit", (e)=> {
    e.preventDefault();

    const IsNotEmpty = modalNameInput.value.length;

    if(!IsNotEmpty) {
        alert("Nome de usuário incorreto.")
    } else {
        modalWrapper.style.display = "none"

        const userObject = {
            user: modalNameInput.value,
            color: color
        }

        socket.emit("sendUser", userObject)
    }
})

function sendMessage(e) {
    e.preventDefault();
    
    const name = modalNameInput.value;
    const message = messageInput.value;
    if(!message.length) return;

    const messageObject = {
        name: name,
        message: message,
        color: color
    }

    renderMessage(messageObject)

    socket.emit("sendMessage", messageObject)

    messageInput.value = "";
    textAreaSize() // In index.js
}

sendMessageForm.addEventListener("submit", sendMessage)

messageInput.addEventListener('keydown', (e)=> {
    if(e.key === "Enter") {
        sendMessage(e);
    }
})
