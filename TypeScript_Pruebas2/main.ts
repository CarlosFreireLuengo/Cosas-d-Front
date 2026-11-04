//MODULOS

//import{ type RankingTuple, printRankings } from './myRankingModule';

//const rankings: RankingTuple[] = [
//  [1, 'Alice', true],
//[2, 'Bob', false],
//[3, 'Charlie', true]
//];

//printRankings(rankings);


//En el package.json, activo la opcion de type:module.













//Clases 


class Actor {
    private _name: string;
    constructor(name: string) {
        this._name = name;
    }

    set name(value: string) {
        this._name = value;
    }


    get name() {
        return this._name;
    }
}


let actor = new Actor('Leonardo DiCaprio');
console.log(actor.name); // Output: Leonardo DiCaprio

actor.name = 'James Brown';
console.log(actor.name); // Output: James Brown



class Employee {
    public name: string;
    protected age: number;
    private mobile: string;

    constructor(name: string, age: number, mobile: string) {
        this.name = name;
        this.age = age;
        this.mobile = mobile;
    }



    get Name(): string {
        return this.name;
    }

    set Name(value: string) {
        this.name = value;
    }

    get Age(): number {
        return this.age;
    }

    set Age(value: number) {
        this.age = value;
    }

    get Mobile(): string {
        return this.mobile;
    }

    set Mobile(value: string) {
        this.mobile = value;
    }
}


class Manager extends Employee {
    constructor(name: string, age: number, mobile: string) {
        super(name, age, mobile);
    }

    celebrateBirthday(): void {
        this.age += 1;
    }
}


let manager = new Manager('John Doe', 30, '123-456-7890');
//console.log(manager.Name); // Output: John Doe
//console.log(manager.Age); // Output: 31
//console.log(manager.Mobile); // Output: 123-456-7890


//manager.celebrateBirthday();





abstract class Product {
    productName: string = "Default";
    price: number = 1000;

    abstract changeName(newName: string): void;

    calcPrice() {
        return this.price
    }
}


class Mobile extends Product {
    changeName(newName: string): void {
        this.productName = newName;
    }
}

//INTERFACES

interface Vehiculo {
    marca: string;
    encender(): void;
    apagar(): void;
}


class Coche implements Vehiculo {
    marca: string;

    constructor(marca: string) {
        this.marca = marca;
    }

    encender(): void {
        console.log(`El coche ${this.marca} está encendido.`);
    }

    apagar(): void {
        console.log(`El coche ${this.marca} está apagado.`);
    }
}



let miCoche = new Coche("Toyota");
//miCoche.encender();
//miCoche.apagar();





//Cosas con las clases abstractas

let mobile = new Mobile();
//console.log(mobile);

//mobile.changeName("iPhone 15");
//console.log(mobile);





/*
// Decoradores
// Requiere "experimentalDecorators": true en el tsconfig.json

// ---------- 1. Decorador de clase simple ----------
function Logger(constructor: Function) {
    console.log(`Clase registrada: ${constructor.name}`);
    console.log(constructor);
}

@Logger
class Persona {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

const persona = new Persona("Juan");
console.log(persona);
// Consola: "Clase registrada: Persona"


// ---------- 2. Decorador de clase que extiende el constructor ----------
function log<T extends { new(...args: any[]): {} }>(originalConstructor: T) {
    return class extends originalConstructor {
        constructor(...args: any[]) {
            console.log("Argumentos", args.join(", "));
            super(...args);
        }
    }
}

@log
class Person {
    constructor(name: string, age: number) {
        console.log(`Creando persona: ${name}, ${age}`);
    }
}

const p = new Person("Ana", 30);   // ✅ añadido: sin esto el decorador no se ejecuta
// Argumentos Ana, 30
// Creando persona: Ana, 30


// ---------- 3. Decorador de métodos ----------
function MethodLogger(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`Llamando al método ${methodName} con argumentos: ${JSON.stringify(args)}`);
        return originalMethod.apply(this, args);
    }
}

class Calculator {
    @MethodLogger
    sumar(a: number, b: number, c: string): number {
        console.log(c);
        return a + b;
    }
}

const calculator = new Calculator();
console.log(calculator.sumar(5, 3, "Metodo calculado"));
// Llamando al método sumar con argumentos: [5,3,"Metodo calculado"]
// 8


*/






interface Usuario {
    nombre: string;
    edad: number;
}

function mostrarUsuario(usuario: Usuario): void {
    console.log(`Nombre: ${usuario.nombre}, Edad: ${usuario.edad}`);
}

mostrarUsuario({ nombre: "Juan", edad: 30 }); // Nombre: Juan, Edad: 30