    export class Producto {
        constructor(codigo, nombre, cantidad, costo) {
            this.codigo = codigo;
            this.nombre = nombre;
            this.cantidad = cantidad;
            this.costo = costo;
            this.siguiente = null;
        }
        info() {
            return `Codigo: ${this.codigo}, Nombre: ${this.nombre}, Cantidad: ${this.cantidad}, Costo: ${this.costo}.`;
        }
        infoHtml() {
            return `<p>Codigo: ${this.codigo}, Nombre: ${this.nombre}, Cantidad: ${this.cantidad}, Costo: ${this.costo}.</p>`;
        }
    }