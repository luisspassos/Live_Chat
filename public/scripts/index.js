const emojiList = document.querySelector(".emojiList");
const emojis = document.querySelectorAll(".emojiList > li");
const openEmojiListBtn = document.querySelector(".messageInput > img");
const messageInput = document.querySelector(".messageInput > div");

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
    messageInput.textContent += emoji;
}


