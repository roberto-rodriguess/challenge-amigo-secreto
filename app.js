//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
// Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeAmigos = [];

function adicionarAmigo() {
    let amigo = document.querySelector('input').value;
    if (amigo == "") {
        alert('Por favor, insira um nome válido.');
    } else {
        listaDeAmigos.push(amigo);
    }
}