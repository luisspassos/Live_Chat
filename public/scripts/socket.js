const sendMessageForm = document.querySelector(".sendMessage");
const modalWrapper = document.querySelector(".modalWrapper");
const modalForm = document.querySelector(".modal > form");
const modalNameInput = document.querySelector(".modal > form > input");
const messageInput = document.querySelector(".textAreaWrapper > textarea");
const messageList = document.querySelector(".messageList");

const socket = io("http://localhost:8080");

function renderMessage(message) {
    messageList.innerHTML += `<li><label style="color: ${message.color}">${message.name}</label>: ${message.message}<hr></li>`
}
// ver isso aqui amanha
socket.on("previousMessages", messages => {
    messages.forEach(message => {
        renderMessage(message);
    })
})

socket.on("receivedMessage", message => {
    renderMessage(message)
})

modalForm.addEventListener("submit", (e)=> {
    e.preventDefault();

    if(modalNameInput.value.length) {
        modalWrapper.style.display = "none"
    } else {
        alert("Nome de usuário incorreto.")
    }
})

const colors = ["#8BE9FD", "#50FA7B", "#FFB86C", "#FF5555"];
const color = colors[Math.floor(Math.random() * colors.length)]

sendMessageForm.addEventListener("submit", (e)=> {

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
    
})

messageInput.addEventListener('keydown', (e)=> {
    if(e.key === "Enter") {
        e.preventDefault()
        
    }
})
