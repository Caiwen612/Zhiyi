//-- Author: Low Zhi Yi

const boxes = document.querySelectorAll(".chat-header");

boxes.forEach((box) => {
    // every time clicking the chat header
    box.addEventListener("click", function () {
        // toggle a minus icon while opening and closing the chatbox
        box.classList.toggle("minus-icon");
        console.log("Expand");

        // get the container
        var content = box.nextElementSibling;
        console.log(content);

        // if there is a maxHeight, change it to null to close
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        }
        // else if the maxHeight is null, expand the chatbox by assigning maxHeight
        else {
            // scrollHeight returns the entire height of the element, including not viewable parts (overflow)
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    })
})

// get the current time to be displayed
function getTime() {
    var today = new Date();
    hours = today.getHours();
    mins = today.getMinutes();

    // make sure hours and mins are 2 digits
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (mins < 10) {
        mins = '0' + mins;
    }

    // display time in format 00:00
    var time = hours + ':' + mins;
    return time;
}

// bot sends initial messages
function firstMsg () {
    // declare intitial messages
    var msg1 = "Hello! Welcome to Sephora.";
    var msg2 = "Ask me a question and I will find the answer for you.";

    // display messages
    var startMsg = document.getElementById("botStartMsg");
    startMsg.innerHTML = '<p class="botText"><span>' + msg1 + '</span></p>';
    startMsg.innerHTML += '<p class="botText"><span>' + msg2 + '</span></p>';

    // display time
    var time = getTime();
    var displayTime = document.getElementById("chat-time");
    // this method inserts a specified text as HTML, into a specified position in the document.
    displayTime.insertAdjacentHTML("beforeend", time);

    // scrollIntoView(false) sets the bottom of the element aligned to the bottom of the visible area of the scrollable ancestor
    // shows the bottom part
    document.getElementById("userInput").scrollIntoView(false);
}


// Bot replies users messages
function getResponse(userText) {
    var botReply = document.querySelector(".chatbox");
    botReply.innerHTML += '<p class="botText"><span>' + botResponse(userText) + '</span></p>';
    document.getElementById("chatBar-btm").scrollIntoView(true);
}

// Read users messages
function getInputVal() {
    // get user's input message
    let userText = document.querySelector("#textInput").value;

    // reset text in input box after sending messages
    document.querySelector("#textInput").value = "";
    
    var userReply = document.querySelector(".chatbox");
    userReply.innerHTML += '<p class="userText"><span>' + userText + '</span></p>';
    document.getElementById("chatBar-btm").scrollIntoView(true);

    getResponse(userText);
}

// Click send button to read and display user input
function buttonSend(sampleText) {
    document.querySelector("#textInput").value = ""; // reset text
    var userReply = document.querySelector(".chatbox");
    userReply.innerHTML += '<p class="userText"><span>' + sampleText + '</span></p>';
    document.getElementById("chatBar-btm").scrollIntoView(true);
}

function sendBtn(event) {
    // prevent the page to refresh (submit form)
    event.preventDefault();
    getInputVal();
}

// press enter to send a message
const enter = document.querySelector("#textInput");
enter.addEventListener("keypress", function (key) {
    if (key.which == 13)
        getInputVal();
});

firstMsg();