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
            return producto;
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
            return null;
        } else if (this.primero.codigo === codigo) {
            let eliminado = this.primero;
            this.primero = null;
            return eliminado;
        } else {
            return this._eliminar(this.primero, codigo);
        }
    }

    _eliminar(actual, codigo) {
        let anterior = null;
        while (actual) {
            if (actual.codigo === codigo) {
                if (anterior) {
                    anterior.siguiente = actual.siguiente;
                } else {
                    this.primero = actual.siguiente;
                }
                return actual;
            }
            anterior = actual;
            actual = actual.siguiente;
        }
        return null;
    }

    agregarEnposicion(producto, posicion) {
        if (posicion <= 0) { // Si la posición es inválida no lo agrego
            return null;
        }
        if (this.buscar(producto.codigo)) {
            return null; // Si el código ya existe, no agregar
        }

        if (posicion === 1) { // Si la posición es 1, agregar al inicio
            this.agregarInicio(producto);
            return producto;
        }
        if (posicion === 2) { 
            producto.siguiente = this.primero.siguiente;
            this.primero.siguiente = producto;
            return producto;
        }

        let actual = this.primero;
        let contador = 1;

        while (actual && contador < posicion - 1) { // Recorrer hasta la posición anterior
            actual = actual.siguiente;
            contador++;
        }

        if (actual) { // Si se encuentra la posición válida
            producto.siguiente = actual.siguiente;
            actual.siguiente = producto;
            return producto;
        } else { // Si la posición es mayor al tamaño de la lista
            return null;
        }
    }

    listarHtml() {
        let resultado = "<h3>Listado de productos:</h3>";
        let actual = this.primero;
        while (actual) {
            resultado += actual.infoHtml();
            actual = actual.siguiente;
        }
        return resultado;
    }
}