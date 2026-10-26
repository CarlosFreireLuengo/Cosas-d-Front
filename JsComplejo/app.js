import{PI,suma,Circulo} from './MathUtils';

console.log(`Valor de PInes: ${PI}`);

console.log(`Suma de 2 + 3 es: ${suma(2,3)}`);

const c = new Circulo(5);
console.log(`Area del circulo de radio 5 es: ${c.area()}`);