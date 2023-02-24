'use strict';

document.addEventListener("keyup", e=>{
    if (e.target.matches("#buscador")){
        document.querySelectorAll(".card").forEach(producto =>{
            producto.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ?producto.classList.remove("filt")
                :producto.classList.add("filt")
        });
    }
});

document.addEventListener("change", e=>{
    if (e.target.matches("#buscador")){
        document.querySelectorAll(".card").forEach(producto =>{
            producto.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ?producto.classList.remove("filt")
                :producto.classList.add("filt")
        });
    }
});

const descrip1 = document.getElementById("descripcion");
const descrip2 = document.getElementById("descripcion2"); 
const descrip3 = document.getElementById("descripcion3");
const descrip4 = document.getElementById("descripcion4");
const descrip5 = document.getElementById("descripcion5");
const descrip6 = document.getElementById("descripcion6"); 

descrip1.addEventListener("click",()=>{
    alert("Ak-47, plateado, común");
});
descrip2.addEventListener("click",()=>{
    alert("desert eagle, rojo, épico");
});
descrip3.addEventListener("click",()=>{
    alert("M4A1, celeste con negro, legendario");
});
descrip4.addEventListener("click",()=>{
    alert("MP5, rojo, poco común");
});
descrip5.addEventListener("click",()=>{
    alert("1000 pavos de fortnite");
});
descrip6.addEventListener("click",()=>{
    alert("M4A1, azul con morado, legendario");
});