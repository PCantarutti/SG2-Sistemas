function ativarMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('ativo');
    menu.classList.toggle('desativado');

    const linha = document.querySelectorAll('.hamburguer span');
    linha.forEach(elemento => {
        elemento.classList.toggle('ativo');
    });
}

//     menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';