// Seleciona elementos
const loginButton = document.querySelector('header .login a');
const modal = document.getElementById('loginModal');
const closeButton = document.querySelector('.modal .close');

// Função para abrir o modal
loginButton.onclick = function(event) {
    event.preventDefault(); // Impede o redirecionamento do link
    modal.style.display = "flex";
}

// Função para fechar o modal
closeButton.onclick = function() {
    modal.style.display = "none";
}

// Fecha o modal ao clicar fora dele
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
