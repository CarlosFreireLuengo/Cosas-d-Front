//Definir y usar funciones

//const myFunc = function(){
//    console.log("Esta sentencia esta dentro de la función");
//}

//console.log("Esta sentencia esta fuera de la función");




//Funciones con parametros

//function myFunc(name, weather){
    //console.log(`Hola, ${name}`);
  //  console.log(`Este es el tiempo de hoy: ${weather}`);
//}
//myFunc("Javier", "LLueve")



//Parametros Rest

//function myFunc(name, weather,  ...extraArgs){
  //  console.log(`Hola, ${name}`);
    //console.log(`Este es el tiempo de hoy: ${weather}`);
    //for (let i = 0; i < extraArgs; i++) {
      //  console.log(`Extra args : ${extraArgs[i]}`);
        
    //}
//}

//myFunc("Hola", "Llueve", "PUTA", "Reputa", "RECONTRAPUTA");



//Callbacks de funciones

//function myFunc(nameFunction){
  //  return(`Hola ${nameFunction()}`);
//}


//function printName(nameFunction,printFunction){
 //   printFunction(myFunc(nameFunction));
//}


//printName(function(){return "Carlos"}, console.log)


//Funciones flecha

//const myFunc = (nameFunction) => (`hola ${nameFunction}`)

//const printName = (nameFunction, printFunction) =>
   // printFunction(myFunc(nameFunction));
    //printName(function(){return "Hola"}, console.log);


function messageFunction(name, weather){
    let mensaje = `Hola ${name}` ;
    if(weather === "sunny"){
        let message = "Bon dia";
        console.log(message);
    } else{
        let message = `Hace ${weather} hoy`
        console.log(message);
    }
    console.log(mensaje);
}

messageFunction("Javier", "Raining")




//Booleanos


let fisrtBool = true;
let secondBool = false;

//String

let string1 = "esto es String";
let string2 = "Y esto";

//Template String

let weather = "sunny";
let mensaje = `es ${weather}`;

//Numbers

let days = 7;
let pi = 3.14;
let hexvalue = 0xFFF;


//OPERADORES
//Igualdad
let val1 = 5;
let val2 = "5";
if(val1 == val2){
    console.log("Son lo mismo");
} else{
    console.log ("NO");
}

//Conversiones
let miDato = (5).toString() + String(5);
console.log(`Resultado: ${miDato}`);

//String to number

let val3 = 5;
let val4 = "5";
let resultado = Number(val4) + val3;

//Metodos
//Number(str)
//parseInt(str)
//parseFloat(str)


//Arrays

let myArray = new Array();
myArray[0] = 100;
myArray[1] = "Javier";
myArray[2] = true;

let miArray =[100,"javi", true];
console.log(`Index 0: ${myArray[1]}`);

//Enumerando el array
for (let i = 0; i < myArray1.lenght; i++) {
    console.log(`Index ${i}: ${myArray1[i]}`);
}

myArray1.forEach((value,index) => console.log(`Index: ${index}:${value}`));

//Spread operator: Operador de propagacion

function printItems(numValue, stringValue,boolValue){
    console.log(`Number: ${numValue}`);
    console.log(`Number: ${stringValue}`);
    console.log(`Number: ${boolValue}`);
}

let myArray2 = [100, "OLA", true];
printItems(...myArray2);


let numeros = [2,4,6,8,10];

let todosPares = numeros.every(num => num % 2 === 0);
console.log("todos son pares?", todosPares);

//filter

let mayoresQDiez = numeros.filter(num => num >= 10);
let pares = numeros.filter(num => num % 2 === 0);
let mayorQ10 = numeros.find(num => num > 10);

let frutas = ["manzana", "pera", "platano", "naranja"];
let frutaLarga = frutas.find(fruta => fruta.lenght > 6);

//findIndex

let indice = numeros.findIndex(num => num = 100);

//Si no lo encuentra, devuelve -1



//Includes
let frutas1 = ["manzana", "pera", "platano", "naranja"];
let tienePera = frutas1.includes("pera");


//Map

let numerosDoble = numeros1.map(num => num*2);

let saludos = nombres.map(nombre => `Hola ${nombre}`);

//reduce
const suma = [10,20,30].reduce(function(a,b){return a+b});

let products = [
{ name: "Hat", price: 24.5, stock: 10 },
{ name: "Kayak", price: 289.99, stock: 1 },
{ name: "Soccer Ball", price: 10, stock: 0 },
{ name: "Running Shoes", price: 116.50, stock: 20 }
];

let totalValue = products.filter(item => item.stock > 0).reduce((prev,item)=> prev + (item.price * item.stock,0));


//MODULOS DE JS: Divide el codigo en varios archivos, cada uno maneja sus variables, funciones o sus clases export.
//El que usa es import


//Objetos

let objeto = new Object();
let cadena = new String();

objeto.id = "10";
cadena.id = "Objeto de prueba";
objeto.muestraId = function() {
    alert(`El id del objeto es: ${this.id}`);
}

objeto.muestarNoombre = function() {
    alert(`El nombre d este subnormal es: ${this.name}`);
}


let Aplicacion = new Object();
Aplicacion.Modulos = new Array();
Aplicacion.Modulos[0] = new Object();
Aplicacion.Modulos[0].titulo = "Lector RSS PUTA";

let inicial = new Object();
inicial.estado = 1;
inicial.publico = 0;
inicial.nombre = "MOdulo SSR";
inicial.datos = new Object();

Aplicacion.Modulos[0].objetoIncial = inicial;