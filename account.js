//-- Author: Low Zhi Yi

document.addEventListener('DOMContentLoaded', function(){
    init();
});


function init() {
    document.getElementById("displayName").innerHTML = localStorage.getItem("logInName");
    document.getElementById("displayEmail").innerHTML = localStorage.getItem("logInEmail");
    checkCard();
    document.getElementById("male").onclick = maleStyle;
    document.getElementById("female").onclick = femaleStyle;
    document.getElementById("secret").onclick = secretStyle;
    document.getElementById("logout").onclick = logout;
}

function maleStyle() {
    document.getElementById("profile").classList = "male";
    document.getElementById("profile-img").classList = "img-male";
}

function femaleStyle() {
    document.getElementById("profile").classList = "female";
    document.getElementById("profile-img").classList = "img-female";
}

function secretStyle() {
    document.getElementById("profile").classList = "";
    document.getElementById("profile-img").classList = "img-unknown";
}

function checkCard() {
    let pointLS = localStorage.getItem("point");
    let INTpoint = parseInt(pointLS);

    if(Number.isNaN(INTpoint)){
        document.querySelector(".card").src = "image/white-card2.png";
        document.querySelector(".typemembership").textContent = "White";
        return false;
    }

    if (INTpoint < 900) {
        document.querySelector(".card").src = "image/white-card2.png";
        document.querySelector(".typemembership").textContent = "White";
    }
    else if (INTpoint < 4500) {
        document.querySelector(".card").src = "image/membership_2.png";
        document.querySelector(".typemembership").textContent = "Black";
    }
    else {
        document.querySelector(".card").src = "image/membership_3.png";
        document.querySelector(".typemembership").textContent = "Gold";
    }
}

function logout() {
    localStorage.removeItem("logInName");
    localStorage.removeItem("logInEmail");
    alert("Logged out successfully!");
}