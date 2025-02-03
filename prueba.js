let cajaAmigos = [];

function agregarCaja(){
    let input = document.getElementById('amigo')
    let nombre = input.value.trim()
    

    if(nombre === ""){
        alert("Por favor ingrese un nombre valido")
        return
    }

    if(cajaAmigos.includes(nombre)){
        alert("El nombre ya esta ingresado")
        return
    }

    cajaAmigos.push(nombre)
    input.value = ""
    actualizarCaja()
}

function actualizarCaja(){
    let listaHtml = document.getElementById('listaAmigos');
    listaHtml.innerHTML = "";

    cajaAmigos.forEach(amigo =>{

        let lista = document.createElement("li");
        lista.textContent = amigo;
        listaHtml.appendChild(lista)
    }
       
        
    )
}