document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();
            aba.classList.add('shows__list--is-active');
            atualizaBotaoAtivo(botao.target);
        })
    }
})

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}

function atualizaBotaoAtivo(botaoAtivo) {
    document.querySelectorAll('.shows__tabs__button').forEach(btn => {
        btn.classList.remove('shows__tabs__button--is-active');
    });
    botaoAtivo.classList.add('shows__tabs__button--is-active');
}