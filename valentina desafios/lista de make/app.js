
function verificarChute() {
    document.getElementById('listaMake').innerHTML = `
        <ul>
            <li>Base Líquida</li>
            <li>Corretivo</li>
            <li>Pó Compacto</li>
            <li>Máscara de Cílios (Rímel)</li>
            <li>Batom Vermelho</li>
            <li>Blush</li>
        </ul>
    `;

    document.querySelector('.texto__paragrafo').textContent =
        'Sua lista de maquiagem:';

    document.getElementById('botaoChutar').style.display = 'none';
    document.getElementById('botaoVoltar').style.display = 'inline-block';

    if (typeof responsiveVoice !== 'undefined') {
        responsiveVoice.speak(
            'Base Líquida, Corretivo, Pó Compacto, Máscara de Cílios, Batom Vermelho e Blush',
            'Brazilian Portuguese Female',
            { rate: 1.2 }
        );
    }
}

function voltar() {
    document.getElementById('listaMake').innerHTML = '';

    document.querySelector('.texto__paragrafo').textContent =
        'Clique no botão para mostrar a lista!';

    document.getElementById('botaoChutar').style.display = 'inline-block';
    document.getElementById('botaoVoltar').style.display = 'none';

    if (typeof responsiveVoice !== 'undefined') {
        responsiveVoice.cancel();
    }
}