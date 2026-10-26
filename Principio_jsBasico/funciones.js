function mostrar(){
    const lista = document.querySelector('[name="lista1"]');
    const seleccion = lista.value;
    const salida = seleccion || "Nada seleccionado";
}


function crearNuevo(){
    const lista = document.querySelector('[name="lista1"]');
    const nuevoTexto = "Cinco";
    const opcion = new Option(nuevoTexto,nuevoTexto);
    lista.add(opcion);
}

function borrarSeleccionado(){
    const lista = document.querySelector('[name="lista1"]');
    if(lista.selectedIndex > 0){
        lista.remove(lista.selectedIndex);
    } else{
        alert("TIENES QUE SELECCIONAR UN VALOR VALIDO PARA BORRAR, GILIPOLLAS")
    }

}




const boton = document.querySelector('#btn-marcar');
boton.addEventListener('click',() =>{
    const productos = document.querySelectorAll('.producto')
    productos.forEach(producto => {
        producto.classList.add('completado');
    })
})