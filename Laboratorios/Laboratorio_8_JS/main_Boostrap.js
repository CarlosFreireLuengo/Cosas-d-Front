import { celsiusAFahrenheit, fahrenheitACelsius } from "./conversor.js";

const salida = document.querySelector("#salida");

// Muestra el texto en la consola y también en la página
function imprimir(texto) {
    console.log(texto);
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = texto;
    salida.appendChild(li);
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