const sendMessageForm = document.querySelector(".sendMessage");
const modalWrapper = document.querySelector(".modalWrapper");
const modalForm = document.querySelector(".modal > form");
const modalNameInput = document.querySelector(".modal > form > input");
const messageInput = document.querySelector(".textAreaWrapper > textarea");

const socket = io("http://localhost:8080");

modalForm.addEventListener("submit", (e)=> {
    e.preventDefault();

    if(modalNameInput.value.length) {
        modalWrapper.style.display = "none"
    } else {
        alert("Nome de usuário incorreto.")
    }
})

sendMessageForm.addEventListener("submit", (e)=> {
    e.preventDefault();
    
    const name = modalNameInput.value;
    const message = messageInput.value;
    if(!message.length) return;

    const messageObject = {
        name: name,
        message: message
    }

    socket.emit("sendMessage", messageObject)
    
})

messageInput.addEventListener('keydown', (e)=> {
    if(e.key === "Enter") {
        e.preventDefault()
        
    }
})
