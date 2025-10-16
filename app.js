import { Producto } from './producto.js';
import { Inventario } from './inventario.js';

const miInventario = new Inventario();
const btnAgregar = document.getElementById('btnAgregar');
btnAgregar.addEventListener('click', () => {
    let codigo = parseInt(document.getElementById('codigo').value);
    let nombre = document.getElementById('nombre').value;
    let cantidad = parseInt(document.getElementById('cantidad').value);
    let costo = parseFloat(document.getElementById('costo').value);
    let producto = new Producto(codigo, nombre, cantidad, costo);
    producto= miInventario.agregar(producto);
    let msg = document.getElementById('detalles');
    if (producto) {
        msg.innerHTML += `<h5>Producto agregado:</h5>` + producto.infoHtml();
    } else {
        msg.innerHTML += `<h5>Producto no agregado (código duplicado)</h5>`;
    }
});
const btnListar = document.getElementById('btnListar');
btnListar.addEventListener('click', () => {
    let msg = document.getElementById('detalles');
    msg.innerHTML += miInventario.listarHtml();
});
const btnBuscar = document.getElementById('btnBuscar');
btnBuscar.addEventListener('click', () => {
    let codigo = Number(document.getElementById('codigo').value);
    let producto = miInventario.buscar(codigo);
    let msg = document.getElementById('detalles');
    if (producto) {
        msg.innerHTML += "<h5>Producto encontrado:</h5>" + producto.infoHtml();
    } else {
        msg.innerHTML += "<h5>Producto no encontrado</h5>";
    }
});
const btnEliminar = document.getElementById('btnEliminar');
btnEliminar.addEventListener('click', () => {
    let codigo = Number(document.getElementById('codigo').value);
    let msg = document.getElementById('detalles');
    let producto = miInventario.eliminar(codigo);
    if (producto) {
        msg.innerHTML += `<h5>Producto eliminado:</h5>` + producto.infoHtml();
    } else {
        msg.innerHTML += `<h5>Producto no encontrado</h5>`;
    }
});
const btnExtraerPrimero = document.getElementById('btnExtraerPrimero');
btnExtraerPrimero.addEventListener('click', () => {
    let msg = document.getElementById('detalles');
    let producto = miInventario.extraerPrimero();
    if (producto) {
        msg.innerHTML += "<h5>Producto extraído:</h5>" + producto.infoHtml();
    } else {
        msg.innerHTML += "<h5>No hay productos para extraer</h5>";
    }
});
const btnAgregarInicial = document.getElementById('btnAgregarInicial');
btnAgregarInicial.addEventListener('click', () => {
    let codigo = document.getElementById('codigo').value;
    let nombre = document.getElementById('nombre').value;
    let cantidad = parseInt(document.getElementById('cantidad').value);
    let costo = parseFloat(document.getElementById('costo').value);
    let producto = new Producto(codigo, nombre, cantidad, costo);
    let msg = document.getElementById('detalles');
    msg.innerHTML += `<h5>${miInventario.agregarInicio(producto)}</h5>`;
});

const btnPosicionar = document.getElementById('btnPosicionar');
btnPosicionar.addEventListener('click', () => {
    let codigo = parseInt(document.getElementById('codigo').value);
    let nombre = document.getElementById('nombre').value;
    let cantidad = parseInt(document.getElementById('cantidad').value);
    let costo = parseFloat(document.getElementById('costo').value);
    let producto = new Producto(codigo, nombre, cantidad, costo);
    let posicion = parseInt(document.getElementById('posicion').value);
    let msg = document.getElementById('detalles');
    let productoAgregado = miInventario.agregarEnposicion(producto, posicion);
    if (!productoAgregado) {
        msg.innerHTML += `<h5>Producto no agregado (posición inválida o código duplicado)</h5>`;
    } else {
        msg.innerHTML += `<h5>Producto agregado en la posición ${posicion}:</h5>` + producto.infoHtml();
    }
});
