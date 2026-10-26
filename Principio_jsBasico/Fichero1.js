function saludar(){
    alert('Hola crack')
}

function decirAdios(){
    alert('Chao pringao')
}




//Arrays, Date,Math,String y Navigator
//POO --> Propiedades, Metodos, Eventos


//window.location = direccion del documento donde se muestra la ventana

let Url = window.location

//Strings

let miCadena = "wenas cruck";
let x = miCadena.length;

//Métodos
let mayuscula = miCadena.toUpperCase();


/*Math
Propiedades Pi*/
//Metodos max() y min()

let y = Math.PI;
let z = Math.max(10,2,9,16);
let mostradoUno = false;


//Eventos

function cargar(){
    alert('Se ha cargado esta wea')
}

function manejarFoco(field){
    if(!mostradoUno){
    alert("Has focalizado esta caja de texto")
    mostradoUno = true;
    field.focus;
    }
}


function manejarSalida(){
    alert("Has salido de aquí")
}


function manejarDato(dato){
    alert('Cambio de el valor original de dato: de 30 a ' + `${dato}`)
}