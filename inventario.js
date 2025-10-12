export class Inventario {
    constructor() {
        this.primero = null;
    }

    agregar(producto) {
        if (this.primero === null) { // si la lista está vacía
            this.primero = producto;
            return producto;
        } else {
            return this._agregate(this.primero, producto);
        }
    }
    _agregate(productoX, nuevo) {
        if (productoX.codigo === nuevo.codigo) {
            return null; // No duplicados
        } else if (productoX.siguiente === null) {
            productoX.siguiente = nuevo;
            return nuevo;
        } else {
            return this._agregate(productoX.siguiente, nuevo);
        }
    }

    agregarInicio(producto) {
        if (!this.primero) {
            this.primero = producto
        } else {
            producto.siguiente = this.primero;
            this.primero = producto;
        }
    }

    extraerPrimero() {
        if (!this.primero) {
            return null;
        } else {
            let x = this.primero
            this.primero = this.primero.siguiente;
            return x;
        }
    }

    buscar(codigo) {
        if (!this.primero) {
            return null
        } else {
            let temp = this.primero;
            while (temp) {
                if (temp.codigo === codigo) {
                    return temp;
                }
                temp = temp.siguiente;
            }
            return null;
        }
    }
    eliminar(codigo) {
        if (this.buscar(codigo) === null) {
            return "Producto no encontrado";
        } else {

        }
    }

    _comparar(codigo) {
        let actual = this.primero;
        let anterior = null;
        if (actual.codigo === codigo) {
            return actual;
        } else {
            let producto = null;
            while (actual.siguiente !== null && producto === null) {
                if (actual.codigo === codigo) {
                    anterior.siguiente = actual.siguiente;
                    producto = actual;
                }
                anterior = actual;
                actual = actual.siguiente;
            }
            return producto;
        }
    }

    listar() {
        let resultado = "";
        for (let i = 0; i < this.productos.length; i++) {
            resultado += ` ${this.productos[i].info()} `;
        }
        return resultado;
    }

    extraerPrimero() {
        let producto = this.productos[0];
        for (let i = 0; i < this.productos.length - 1; i++) {
            this.productos[i] = this.productos[i + 1];
        }
        this.productos.pop();
        return producto;
    }
    agregarInicio(producto) {
        this.productos.push(0)
        for (let i = this.productos.length - 1; i > 0; i--) {
            this.productos[i] = this.productos[i - 1]
        }
        this.productos[0] = producto;
        return `Producto agregado al inicio: ${producto.info()}`;
    }
    listarHtml() {
        let resultado = "<h3>Listado de productos:</h3>";
        for (let i = 0; i < this.productos.length; i++) {
            resultado += `<div>${this.productos[i].info()}</div>`;
        }
        return resultado;
    }
}