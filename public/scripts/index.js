const emojiList = document.querySelector(".emojiList");
const emojis = document.querySelectorAll(".emojiList > li");
const openEmojiListBtn = document.querySelector(".messageInput > img");
const messageTextAreaWrapper = document.querySelector(".textAreaWrapper");
const messageTextArea = document.querySelector(".textAreaWrapper > textarea");
const modal = document.querySelector(".modal");
const usersBtn = document.querySelector("header > svg");
const onlineUsers = document.querySelector(".online");

// header

let onlineUsersHandle = false;

window.innerWidth <= 800 ? onlineUsers.classList.toggle("toggleUsers") : null

window.addEventListener("resize", ()=> {
    if(!onlineUsersHandle) {
        if(window.innerWidth <= 800) {
            onlineUsers.classList.add("toggleUsers")
        } else {
            onlineUsers.classList.remove("toggleUsers")
        }
    }
    
})

usersBtn.addEventListener("click", ()=> {
    onlineUsers.classList.toggle("toggleUsers")
    onlineUsersHandle = true;
})

//Textarea

messageTextAreaWrapper.addEventListener("click", () => {
    messageTextArea.focus();
})

messageTextArea.addEventListener("focus", () => {
    messageTextAreaWrapper.style.outline = "var(--PURPLE-SECONDARY) solid 3px"
})

messageTextArea.addEventListener("blur", () => {
    messageTextAreaWrapper.style.outline = "var(--PURPLE-TERTIARY) solid 3px"
})

messageTextArea.setAttribute("style", "height:" + (messageTextArea.scrollHeight) + "px;overflow-y:hidden;");
messageTextArea.addEventListener("input", textAreaSize, false);

function textAreaSize() {
    if (messageTextArea.scrollHeight <= 136) {
        messageTextArea.style.height = "auto";
        messageTextArea.style.height = (messageTextArea.scrollHeight) + "px";
        messageTextArea.style.overflowY = "hidden";
    } else {
        messageTextArea.style.overflowY = "scroll";
    }
}


// emoji List

window.addEventListener("click", (e) => {
    if (e.target.parentNode !== emojiList && e.target !== openEmojiListBtn) {
        emojiList.style.display = "none"
    }
})

openEmojiListBtn.addEventListener("click", () => {
    if (emojiList.style.display === "none") {
        emojiList.style.display = "flex"
    } else {
        emojiList.style.display = "none"
    }
})

function insertEmoji(emoji) {
    if (messageTextArea.value.length < 290) {
        messageTextArea.value += emoji;
    }
}

// modal

window.addEventListener("load", () => {
    modal.style.opacity = 1;
    modal.style.transform = "translateY(0)"
})

