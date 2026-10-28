import { celsiusAFahrenheit, fahrenheitACelsius } from "./conversor.js";

const salida = document.querySelector("#salida");

// Muestra el texto en la consola y también en la página
function imprimir(texto) {
    console.log(texto);
    const p = document.createElement("p");
    p.textContent = texto;
    salida.appendChild(p);
}

// Conversiones de prueba
const pruebasCelsius = [0, 25, 100, -40];
const pruebasFahrenheit = [32, 77, 212, -40];

for (const c of pruebasCelsius) {
    imprimir(`${c} °C = ${celsiusAFahrenheit(c).toFixed(2)} °F`);
}

for (const f of pruebasFahrenheit) {
    imprimir(`${f} °F = ${fahrenheitACelsius(f).toFixed(2)} °C`);
}