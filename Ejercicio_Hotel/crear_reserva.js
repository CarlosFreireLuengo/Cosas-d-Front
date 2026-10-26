// Objeto reserva
const reserva = {
    hotel: {
        nombre: "Hotel Mar Azul",
        direccion: "Calle del Sol, 25, Málaga",
        telefono: "952 123 456"
    },

    cliente: {
        nombre: "Carlos",
        apellidos: "García López",
        telefono: "600 111 222"
    },

    habitacion: {
        tipo: "Doble",
        precioPorNoche: 80,
        noches: 3
    },

    extras: [
        { descripcion: "Desayuno buffet", precio: 15 },
        { descripcion: "Parking", precio: 10 },
        { descripcion: "Acceso al spa", precio: 25 }
    ],

    total: 0,

    // Calcula el precio total de la reserva
    calcularTotal: function () {
        // Precio de la habitación = precio por noche x número de noches
        let suma = this.habitacion.precioPorNoche * this.habitacion.noches;

        // Sumamos el precio de cada extra
        for (let i = 0; i < this.extras.length; i++) {
            suma = suma + this.extras[i].precio;
        }

        // Guardamos el resultado en la propiedad total
        this.total = suma;
    },

    // Muestra los datos de la reserva dentro del div
    mostrarReserva: function () {
        // Primero creamos la lista de extras
        let listaExtras = "";
        for (let i = 0; i < this.extras.length; i++) {
            listaExtras += "<li>" + this.extras[i].descripcion + ": " + this.extras[i].precio + " €</li>";
        }

        // Ahora montamos todo el contenido
        let contenido = "";

        contenido += "<h2>Hotel</h2>";
        contenido += "<p>Nombre: " + this.hotel.nombre + "</p>";
        contenido += "<p>Dirección: " + this.hotel.direccion + "</p>";
        contenido += "<p>Teléfono: " + this.hotel.telefono + "</p>";

        contenido += "<h2>Cliente</h2>";
        contenido += "<p>Nombre: " + this.cliente.nombre + " " + this.cliente.apellidos + "</p>";
        contenido += "<p>Teléfono: " + this.cliente.telefono + "</p>";

        contenido += "<h2>Habitación</h2>";
        contenido += "<p>Tipo: " + this.habitacion.tipo + "</p>";
        contenido += "<p>Precio por noche: " + this.habitacion.precioPorNoche + " €</p>";
        contenido += "<p>Número de noches: " + this.habitacion.noches + "</p>";

        contenido += "<h2>Extras</h2>";
        contenido += "<ul>" + listaExtras + "</ul>";

        contenido += "<h2>Total: " + this.total + " €</h2>";

        // Lo escribimos en el div
        document.getElementById("contenedor").innerHTML = contenido;
    }
};

// Calculamos el total y después mostramos la reserva
reserva.calcularTotal();
reserva.mostrarReserva();