'use strict';
import { Validacion } from "./validaciones.js";
const validacion = new Validacion();
// validacion del formulario de login
const formulario = document.getElementById('form');
const btn = document.getElementById('btnLogin');
//objeto de validacion
const formValidacion = {
    correo:false,
    contraseña:false
}
//validacion 
formulario.addEventListener("change",(e)=>{
    const inputId = e.target.id;
    const miValue = e.target.value;
    const miClass = e.target.classList;
    const validClass = ()=>{
        miClass.add("is-valid");
        miClass.remove("is-invalid");
    };
    const inValidClass = ()=>{
        miClass.add("is-invalid");
        miClass.remove("is-valid");
    };

    switch(inputId){
        case "correo":
            formValidacion.correo = validacion.validEmail(miValue);
            formValidacion.correo ? validClass() : inValidClass();
            console.log(Object.values(formValidacion));
            break;
        case "contraseña":
            formValidacion.contraseña = validacion.validPass(miValue);
            formValidacion.contraseña ? validClass(): inValidClass();
            console.log(Object.values(formValidacion));
            break;
        
    }

});