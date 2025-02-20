//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
// Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeAmigos = [];

function adicionarAmigo() {
    let amigo = document.querySelector('input').value;
    if (amigo == "") {
        alert('Por favor, insira um nome válido.');
    } else {
        listaDeAmigos.push(amigo);
        limparCampo();
        exibirAmigosNaTela();
    }
}

function sortearAmigo() {
    let resultado = document.getElementById('resultado');

    if (listaDeAmigos.length == 0) {
        alert('Nenhum amigo foi adicionado ainda.');
    } else if (listaDeAmigos.length == 1) {
        alert('Por favor, adicione mais amigos.');
    } else {
        let numeroAleatorio = parseInt(Math.random() * listaDeAmigos.length);
        let amigoSorteado = listaDeAmigos[numeroAleatorio];
        resultado.innerHTML = `O amigo secreto sorteado é: ${amigoSorteado}`;
    }
}

function exibirAmigosNaTela() {
    let campo = document.getElementById('listaAmigos');
    
    campo.innerHTML = '';

    for (let i = 0; i < listaDeAmigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = listaDeAmigos[i];
        campo.appendChild(li);
    }
}

function limparCampo() {
    let campo = document.querySelector('input');
    campo.value = '';
}