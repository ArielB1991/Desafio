let listaDeAmigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Elimina espacios en blanco

    if (nombre === "") {
        alert("Por favor, inserte un nombre valido.");
        return;
    }

    if (listaDeAmigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    listaDeAmigos.push(nombre);
    actualizarLista();
    input.value = ""; // Limpiar campo de entrada
}

function actualizarLista() {
    let listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = ""; // Limpia la lista antes de actualizarla

    listaDeAmigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaHTML.appendChild(li);
    });
}

