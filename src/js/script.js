document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const menuLista = document.querySelector('.menu-lista');
    const closeMenuButton = document.getElementById('close-menu');

    // Alternar menu
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        menuLista.classList.toggle('active');
    });

    // Fechar menu ao clicar em uma opção
    document.querySelectorAll('.menu-lista a[data-close="true"]').forEach(item => {
        item.addEventListener('click', function() {
            hamburger.classList.remove('active');
            menuLista.classList.remove('active');
        });
    });

    // Botão para fechar o menu
    closeMenuButton.addEventListener('click', function() {
        hamburger.classList.remove('active');
        menuLista.classList.remove('active');
    });

    // Fechar menu ao clicar fora dele
    document.addEventListener('click', function(event) {
        if (!menuLista.contains(event.target) && !hamburger.contains(event.target)) {
            hamburger.classList.remove('active');
            menuLista.classList.remove('active');
        }
    });
});
