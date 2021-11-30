const emojiList = document.querySelector(".emojiList");
const emojis = document.querySelectorAll(".emojiList > li");
const openEmojiListBtn = document.querySelector(".messageInput > img");
const messageTextAreaWrapper = document.querySelector(".textAreaWrapper");
const messageTextArea = document.querySelector(".textAreaWrapper > textarea");
const modal = document.querySelector(".modal");
const usersBtn = document.querySelector("header > img");
const onlineUsers = document.querySelector(".online");

// header

usersBtn.addEventListener("click", () => {
    const onlineUsersStyle = window.getComputedStyle(onlineUsers);
    if(onlineUsersStyle.display === "flex") {
        onlineUsers.style.display = "none"
    } else {
        onlineUsers.style.display = "flex"
    }
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
messageTextArea.addEventListener("input", OnInput, false);

function OnInput() {
    if (this.scrollHeight <= 136) {
        this.style.height = "auto";
        this.style.height = (this.scrollHeight) + "px";
        this.style.overflowY = "hidden";
    } else {
        this.style.overflowY = "scroll";
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

