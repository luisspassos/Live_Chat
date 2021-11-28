const emojiList = document.querySelector(".emojiList");
const emojis = document.querySelectorAll(".emojiList > li");
const openEmojiListBtn = document.querySelector(".messageInput > img");

window.addEventListener("click", (e)=> {
    emojis.forEach(emoji => {
        if(e.target != openEmojiListBtn && e.target != emoji) {
            emojiList.style.display = "none";
        }
    })
    
})

openEmojiListBtn.addEventListener("click", ()=> {
    emojiList.style.display = "flex";
})

