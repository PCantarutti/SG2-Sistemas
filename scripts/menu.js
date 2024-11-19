function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('ativo');
    
    const linha = document.querySelectorAll('.hamburguer span');
    linha.forEach(elemento => {
        elemento.classList.toggle('ativo');
    });
}