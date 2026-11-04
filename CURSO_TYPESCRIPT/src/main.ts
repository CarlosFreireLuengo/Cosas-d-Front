import promptSync from "prompt-sync";

const prompt = promptSync();

// ---------- Decoradores de validación ----------
function IsPositive(target: any, propertyKey: string) {
    // Llave oculta para guardar el valor real
    const key = Symbol(propertyKey);

    Object.defineProperty(target, propertyKey, {
        get() {
            return this[key];
        },
        set(value: number) {
            if (Number.isNaN(value) || value <= 0) {
                throw new Error(`El valor de ${propertyKey} debe ser positivo`);
            }
            this[key] = value;
        },
        enumerable: true,
        configurable: true
    });
}

function IsString(target: any, propertyKey: string) {
    const key = Symbol(propertyKey);

    Object.defineProperty(target, propertyKey, {
        get() {
            return this[key];
        },
        set(value: string) {
            if (typeof value !== "string" || value.trim() === "") {
                throw new Error(`El valor de ${propertyKey} debe ser un string no vacío`);
            }
            this[key] = value;
        },
        enumerable: true,
        configurable: true
    });
}

// ---------- Modelo ----------
class Producto {
    @IsPositive
    id: number;

    @IsString
    nombre: string;

    @IsPositive
    precio: number;

    constructor(id: number, nombre: string, precio: number) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

// ---------- Servicio ----------
class ProductoService {
    private productos: Producto[] = [];

    agregarProducto(producto: Producto) {
        this.productos.push(producto);
    }

    updateProducto(id: number, data: Partial<Producto>): boolean {
        const producto = this.productos.find(p => p.id === id);
        if (!producto) return false;

        if (data.nombre !== undefined) producto.nombre = data.nombre;
        if (data.precio !== undefined) producto.precio = data.precio;

        return true;
    }

    deleteProducto(id: number): boolean {
        const index = this.productos.findIndex(p => p.id === id);
        if (index === -1) return false;

        this.productos.splice(index, 1);
        return true;
    }
}

const service = new ProductoService();

// ---------- Funciones del menú ----------
function listarProductos() {
    const productos = service["productos"];
    if (productos.length === 0) {
        console.log("No hay productos disponibles.");
    } else {
        productos.forEach((producto: Producto) => {
            console.log(`ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: ${producto.precio}`);
        });
    }
}

function agregarProducto() {
    try {
        const id = Number(prompt("Ingrese el ID del producto: "));
        const nombre = prompt("Ingrese el nombre del producto: ");
        const precio = Number(prompt("Ingrese el precio del producto: "));

        const producto = new Producto(id, nombre, precio);
        service.agregarProducto(producto);
        console.log("Producto agregado correctamente.");
    } catch (error) {
        console.error(`Error: ${(error as Error).message}`);

    }
}
function actualizarProducto() {
    try {
        const id = Number(prompt("Ingrese el ID del producto a actualizar: "));
        const producto = service["productos"].find((p: Producto) => p.id === id);

        if (!producto) {
            console.log("Producto no encontrado.");
            return;
        }

        const nombre = prompt(`Nombre (${producto.nombre}): `)?.trim() || producto.nombre;
        const precioTexto = prompt(`Precio (${producto.precio}): `)?.trim();
        const precio = precioTexto ? Number(precioTexto) : producto.precio;

        const ok = service.updateProducto(id, { nombre, precio });
        console.log(ok ? "Producto actualizado correctamente." : "Error al actualizar el producto.");
    } catch (error) {
        console.error(`Error: ${(error as Error).message}`);
    }
}

function eliminarProducto() {
    const id = Number(prompt("Ingrese el ID del producto a eliminar: "));
    const ok = service.deleteProducto(id);
    console.log(ok ? "Producto eliminado correctamente." : "Producto no encontrado.");
}


function iniciarMenu() {
    while (true) {
        console.log("\n--- Menú de Productos ---");
        console.log("1. Listar productos");
        console.log("2. Agregar producto");
        console.log("3. Actualizar producto");
        console.log("4. Eliminar producto");
        console.log("5. Salir");

        const opcion = prompt("Seleccione una opción: ")?.trim();

        switch (opcion) {
            case "1":
                listarProductos();
                break;
            case "2":
                agregarProducto();
                break;
            case "3":
                actualizarProducto();
                break;
            case "4":
                eliminarProducto();
                break;
            case "5":
                console.log("Saliendo del programa...");
                return;
            default:
                console.log("Opción no válida. Intente nuevamente.");
        }
    }
}


// ---------- Inicio del programa ----------
service.agregarProducto(new Producto(1, "Ratón", 100));
service.agregarProducto(new Producto(2, "Teclado", 200));
iniciarMenu();