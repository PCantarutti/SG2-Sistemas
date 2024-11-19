const loginButton = document.querySelector('header .login a');
const modal = document.getElementById('loginModal');
const closeButton = document.querySelector('.modal .close');
const chatModal = document.getElementById('chatModal');
const chatBtn = document.getElementById('chat_btn');

loginButton.onclick = function(event) {
    event.preventDefault();
    modal.style.display = "flex";
    chatModal.style.display = "none";
    chatBtn.style.display = "none";
}

closeButton.onclick = function() {
    modal.style.display = "none";
    chatBtn.style.display = "flex";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        chatBtn.style.display = "flex";
    }
}