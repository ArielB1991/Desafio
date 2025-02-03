const listaDeAmigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // Elimina espacios en blanco

    if(!validarNombre(nombre))
        return;

    listaDeAmigos.push(nombre);

    actualizarLista();

    borrarCampo(input)

}

function validarNombre(nombre){
    if (!nombre) {
        alert("Por favor, inserte un nombre valido.");
        return false;
    }

    if (listaDeAmigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return false;
    }

        return true;
}
    


function actualizarLista() {
    let listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = ""; // Limpia la lista antes de actualizarla

    listaDeAmigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaHTML.appendChild(li);
    });
}

function borrarCampo(input){
    input.value = "";
}
