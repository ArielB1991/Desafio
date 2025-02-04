// Declaramos la lista vacia
const listaDeAmigos = [];

//Declaramos la funcion para agregar nombres a la lista
function agregarAmigo() {
  //Usamos elemento Dom para obtener la referencia del html
  const input = document.getElementById("amigo");
  // Elimina espacios en blanco
  const nombre = input.value.trim();

  //Validador llama a la funcion validadr
  if (!validarNombre(nombre)) return;
  // En caso de ser valido se agrega el nombre a la lista
  listaDeAmigos.push(nombre);
  //Se llama a la funcion para mostrar cambios en pantalla
  actualizarLista();
  //Se llama a la funcio para borrar el campo de entrada despues de una inyeccion
  borrarCampo(input);
}

function validarNombre(nombre) {
  //Validador de campo vacio
  if (!nombre) {
    alert("Por favor, inserte un nombre valido.");
    return false;
  }
  //Validador de nombre ya ingresado anteriormente
  if (listaDeAmigos.includes(nombre)) {
    alert("Este nombre ya está en la lista.");
    return false;
  }

  return true;
}

function actualizarLista() {
  //Obtiene la referencia par usar el dom elegido
  let listaHTML = document.getElementById("listaAmigos");
  listaHTML.innerHTML = ""; // Limpia la lista antes de actualizarla
  //Iteramos con forEach la listaDeAmigos
  listaDeAmigos.forEach((amigo) => {
    //Usamos una funcionalidad del dom para crear un nuevo elemento
    const li = document.createElement("li");
    //Asignamos a la creacion un texto dentro
    li.textContent = amigo;
    //Agregamos la nueva entrada li al final de la lista
    listaHTML.appendChild(li);
  });
}

function borrarCampo(input) {
  //Vacia el campo luego de agregar el nombre
  input.value = "";
}

function sortearAmigo(){
    if(!validarCantidad())

        return
        
        const resultadoHtml = document.getElementById("resultado")
        limpiarElemento(resultadoHtml);

        generarSorteo()
    }

    function generarSorteo(){

        const aleatorio = Math.floor(Math.random()* listaDeAmigos.length)

        const amigoSorteado = listaDeAmigos[aleatorio];

        const resultadoHtml = document.getElementById("resultado");
        const li = document.createElement("li")
        li.textContent = `El amigo sorteado es : ${amigoSorteado}`
        resultadoHtml.appendChild(li)

    }

    function validarCantidad(){
        if(listaDeAmigos.length === 0){
            alert("La lista esta vacia agrega mas amigos al sorteo")
            return false;
        }
        return true
    }

    function limpiarElemento(elemento){
        elemento.innerHTML = "";
    }

