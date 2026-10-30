const booleano: boolean = true;

let isDone:boolean = false;

const entero: number = 10;
const decimal: number = 10.5;

const bigInt: bigint = 9007199254740991n;
const str : string = "Hola Mundo";
let color: string = "blue";

color = "red";



let fullName:string = "John Doe";
let age: number = 30;
let sentence: string = `Hello, my name is ${fullName}. I'll be ${age + 1} years old next month.`;

type CustomType = string | number;
let customValue: CustomType = "Hello, TypeScript!";
customValue = 42;


const numberArray: number[] = [1, 2, 3, 4, 5];

//console.log(color);


// Never

function lanzarError(message: string): never {
    throw new Error(message);
}

function saludar(): void {
    console.log("Hola, mundo!");
}

saludar();

function procesar(callback: () => void): void{
    callback();
}

procesar(() => {
    console.log("Callback ejecutado");
});

const pepe:null = null;
const juan:undefined = undefined;

let obj1: object = {clave: "valor"};
console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));

