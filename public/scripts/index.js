const emojiList = document.querySelector(".emojiList");
const emojis = document.querySelectorAll(".emojiList > li");
const openEmojiListBtn = document.querySelector(".messageInput > img");
const messageTextAreaWrapper = document.querySelector(".textAreaWrapper");
const messageTextArea = document.querySelector(".textAreaWrapper > textarea");
const modal = document.querySelector(".modal");

//Textarea

messageTextAreaWrapper.addEventListener("click", ()=> {
    messageTextArea.focus();
})

messageTextArea.addEventListener("focus", ()=> {
    messageTextAreaWrapper.style.outline = "var(--PURPLE-SECONDARY) solid 3px"
})

messageTextArea.addEventListener("blur", ()=> {
    messageTextAreaWrapper.style.outline = "var(--PURPLE-TERTIARY) solid 3px"
})

const tx = document.getElementsByTagName("textarea");
for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = "auto";
  this.style.height = (this.scrollHeight) + "px";
}


// emoji List

window.addEventListener("click", (e) => {
    if (e.target.parentNode !== emojiList && e.target !== openEmojiListBtn) {
        emojiList.style.display = "none"
    }
})

openEmojiListBtn.addEventListener("click", () => {
    if(emojiList.style.display === "none") {
        emojiList.style.display = "flex"
    } else {
        emojiList.style.display = "none"
    }
})

function insertEmoji(emoji) {
    messageTextArea.value += emoji;
}

// modal

window.addEventListener("load", ()=> {
    modal.style.opacity = 1;
    modal.style.transform = "translateY(0)"
})

