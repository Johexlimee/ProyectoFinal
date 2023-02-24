'use strict';
import { Validacion } from "./validaciones.js";
const validacion = new Validacion();
const formuReg = document.getElementById('form-reg');
const btnRegistrar = document.getElementById('enviar');
const regValidacion = {
    user:false,
    correo:false,
    contraseña:false
}
formuReg.addEventListener("change",(e)=>{
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
        case "user":
            regValidacion.user = validacion.validUser(miValue);
            regValidacion.user ? validClass() : inValidClass();
            console.log(Object.values(regValidacion));
            break;
        case "correo":
            regValidacion.correo = validacion.validEmail(miValue);
            regValidacion.correo ? validClass() : inValidClass();
            console.log(Object.values(regValidacion));
            break;
        case "contraseña":
            regValidacion.contraseña = validacion.validUser(miValue);
            regValidacion.contraseña ? validClass(): inValidClass();
            console.log(Object.values(regValidacion));
            break;   
    }
});