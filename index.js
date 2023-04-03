"use strict"

let unreadPost = document.querySelectorAll(".unread-post")
let unreadCount = document.getElementById("unreadCount");
const nodeList = document.querySelectorAll(".container");

//Adding event listeners to unread messages
for (let i = 0; i < unreadPost.length; i++) {
    unreadPost[i].addEventListener("click", function() {
        this.classList.remove("unread-post")
        unreadCount.innerHTML -= 1;
    })
}

//Displaying total number of unread messages
function UnreadMsgCount() {
    let count = 0;
    for (let i = 0; i < nodeList.length; i++) {
        if (unreadPost) {
            count += 1;
        }
    }
}

//Reads all messages
function MarkAllRead() {
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].classList.remove("unread-post");
        nodeList[i].style.backgroundColor = "white";
    }
    unreadCount.innerHTML = 0;
}

