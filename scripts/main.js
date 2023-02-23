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