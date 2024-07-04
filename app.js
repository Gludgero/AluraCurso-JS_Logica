let nAleartorio = gerarNumeroAleartorio();

function mostrarTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

mostrarTextoNaTela('h1', 'Jogo do número secreto');
mostrarTextoNaTela('p', 'Escolha o número de um a 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == nAleartorio);
}

function gerarNumeroAleartorio() {
    return parseInt(Math.random() * 10 + 1);
}

console.log(nAleartorio);