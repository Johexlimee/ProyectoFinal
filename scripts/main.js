'use strict';

document.addEventListener("keyup", e=>{
    if (e.target.matches("#buscador")){
        document.querySelectorAll(".card").forEach(producto =>{
            producto.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ?producto.classList.remove("filt")
                :producto.classList.add("filt")
        })
    }
})

document.addEventListener("change", e=>{
    if (e.target.matches("#buscador")){
        document.querySelectorAll(".card").forEach(producto =>{
            producto.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ?producto.classList.remove("filt")
                :producto.classList.add("filt")
        })
    }
})

// Funciones para almacenar
function guardarAlmacenamientoLocal(llave, valor_a_guardar) {
    localStorage.setItem(llave, JSON.stringify(valor_a_guardar))
}
function obtenerAlmacenamientoLocal(llave) {
    const datos = JSON.parse(localStorage.getItem(llave))
    return datos
}
let productos = obtenerAlmacenamientoLocal('productos') || [];