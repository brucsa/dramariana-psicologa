// Menu Mobile
const botaoHamburguer = document.querySelector('.menu-hamburguer');
const menu = document.querySelector('.menu');

// Adiciona um evento de clique ao botão
botaoHamburguer.addEventListener('click', () => {
    // Alterna a classe 'active' no menu e no botão
    menu.classList.toggle('active');
    botaoHamburguer.classList.toggle('active');
/* Função para fechar o menu quando o usuário clicar fora dele */
    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target) && !botaoHamburguer.contains(event.target)) {
            menu.classList.remove('active');
            botaoHamburguer.classList.remove('active');
        }
    });
});