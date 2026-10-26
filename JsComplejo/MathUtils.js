export const PI = 3.1416;

export function suma(a,b){
    return a+b;
}

export class Circulo{
    constructor(radio){
        this.radio = radio;
    }


    area(){
        return PI * this.radio * this.radio;
    }
}