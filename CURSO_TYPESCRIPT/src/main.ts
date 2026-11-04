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

        const nombre = prompt(`Nombre: (${producto.nombre}):` || producto.nombre );
        const precioTexto = prompt(`Precio: (${producto.precio}):`);
        const ok  = service.updateProducto(id, {
            nombre: nombre || producto.nombre,
            precio: precioTexto ? Number(precioTexto) : producto.precio
        });



    } catch (error) {
    }
}