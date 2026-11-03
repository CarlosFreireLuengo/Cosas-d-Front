// ===== Estado =====
let tareas = [];          // { id, titulo, completada }
let siguienteId = 1;
let idEnEdicion = null;

// ===== Referencias al DOM =====
const formTarea = document.querySelector("#formTarea");
const inputTarea = document.querySelector("#inputTarea");
const errorTarea = document.querySelector("#errorTarea");
const listaTareas = document.querySelector("#listaTareas");
const contTotal = document.querySelector("#contTotal");
const contCompletadas = document.querySelector("#contCompletadas");
const inputEditar = document.querySelector("#inputEditar");
const errorEditar = document.querySelector("#errorEditar");
const btnGuardarEdicion = document.querySelector("#btnGuardarEdicion");
const modalEditar = new bootstrap.Modal(document.querySelector("#modalEditar"));

// ===== Utilidades =====
// Evita que el texto del usuario se interprete como HTML
function escaparHTML(texto) {
    const div = document.createElement("div");
    div.textContent = texto;
    return div.innerHTML;
}

// ===== Render =====
function renderizarTareas() {
    listaTareas.innerHTML = tareas.map(({ id, titulo, completada }) => `
        <li class="list-group-item d-flex justify-content-between align-items-center ${completada ? "list-group-item-secondary" : ""}">
            <span class="${completada ? "text-decoration-line-through text-muted" : ""}">${escaparHTML(titulo)}</span>
            <div class="btn-group btn-group-sm" role="group">
                <button class="btn ${completada ? "btn-outline-secondary" : "btn-outline-success"}" data-accion="completar" data-id="${id}">
                    ${completada ? "Desmarcar" : "Completar"}
                </button>
                <button class="btn btn-outline-primary" data-accion="editar" data-id="${id}">Editar</button>
                <button class="btn btn-outline-danger" data-accion="eliminar" data-id="${id}">Eliminar</button>
            </div>
        </li>`).join("");

    actualizarContadores();
}

function actualizarContadores() {
    contTotal.textContent = tareas.length;
    contCompletadas.textContent = tareas.filter(t => t.completada).length;
}

// ===== Funcionalidades =====
function agregarTarea(titulo) {
    tareas.push({ id: siguienteId++, titulo, completada: false }); // al final de la lista
    renderizarTareas();
}

function eliminarTarea(id) {
    tareas = tareas.filter(t => t.id !== id);
    renderizarTareas();
}

function alternarCompletada(id) {
    const tarea = tareas.find(t => t.id === id);
    if (tarea) {
        tarea.completada = !tarea.completada;
        renderizarTareas();
    }
}

function abrirEdicion(id) {
    const tarea = tareas.find(t => t.id === id);
    if (!tarea) return;
    idEnEdicion = id;
    inputEditar.value = tarea.titulo;
    errorEditar.classList.add("d-none");
    modalEditar.show();
}

function guardarEdicion() {
    const nuevoTitulo = inputEditar.value.trim();
    if (nuevoTitulo === "") {
        errorEditar.classList.remove("d-none");
        return;
    }
    const tarea = tareas.find(t => t.id === idEnEdicion);
    if (tarea) tarea.titulo = nuevoTitulo;
    modalEditar.hide();
    renderizarTareas();
}

// ===== Eventos =====
formTarea.addEventListener("submit", (e) => {
    e.preventDefault();
    const titulo = inputTarea.value.trim();

    if (titulo === "") {
        errorTarea.classList.remove("d-none");
        inputTarea.classList.add("is-invalid");
        return;
    }

    errorTarea.classList.add("d-none");
    inputTarea.classList.remove("is-invalid");
    agregarTarea(titulo);
    inputTarea.value = "";
    inputTarea.focus();
});

// Delegación de eventos: un único listener para todos los botones de la lista
listaTareas.addEventListener("click", (e) => {
    const boton = e.target.closest("button[data-accion]");
    if (!boton) return;

    const id = Number(boton.dataset.id);
    switch (boton.dataset.accion) {
        case "completar": alternarCompletada(id); break;
        case "editar": abrirEdicion(id); break;
        case "eliminar": eliminarTarea(id); break;
    }
});

btnGuardarEdicion.addEventListener("click", guardarEdicion);
inputEditar.addEventListener("keydown", (e) => {
    if (e.key === "Enter") guardarEdicion();
});

// Primer render (muestra contadores a 0)
renderizarTareas();