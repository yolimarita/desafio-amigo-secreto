// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const listaAmigos = [];
const listaHTML = document.getElementById("listaAmigos");
const resultadoHTML = document.getElementById("resultado");

function agregarAmigo() {
    const input = document.getElementById("nombreamigo");
    const nombre = input.value.trim();

    if (!nombre) {
        alert("Por favor, inserte un nombre.");
        return;
    }

    listaAmigos.push(nombre);

    const nuevoItem = document.createElement("li");
    nuevoItem.textContent = nombre;
    listaHTML.appendChild(nuevoItem);

    input.value = "";
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Agrega al menos un amigo antes de sortear.");
        return;
    }

    const indice = Math.floor(Math.random() * listaAmigos.length);
    const seleccionado = listaAmigos[indice];

    resultadoHTML.innerHTML = ""; // Limpia resultados anteriores
    const item = document.createElement("li");
    item.textContent = `🎉 El amigo seleccionado es: ${seleccionado}`;
    resultadoHTML.appendChild(item);
}
