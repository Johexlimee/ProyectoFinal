'use strict';
class Validacion{
    constructor(){};

    inputValid(input,regex){
        return input.match(regex)? true : false;
    };

    validUser(cad){
        const usersRX = /([a-zA-Z0-9.#$%&]{5,20})/g; // esta es mi expresion regular para un usuario el cual permite letras mayusculas y minusculas y numeros del 0 al 9 con un minimo de 5 caracteres y maximo 20 y permite caracteres #, $, %, &
        const response = this.inputValid(cad,usersRX);
        return response;
    }
    validPass(cad){
        const passRX = /([a-zA-Z0-9#$%&]{8,20})/g;
        const response = this.inputValid(cad,passRX);
        return response;
    }
    validEmail(cad){
        const mailRX = /^([\w.]+[^#$%&\/()='"!?¡¿]\w*-*)([@])(\w)+(\.[a-z]{2,3})$/g;// la expresion \. significa que el punto es obligatorio
        const response = this.inputValid(cad,mailRX);
        return response;
    }
    validarForm =(object) =>{
        const valores = Object.values(object);
        let respuesta = valores.findIndex(e => e === false);
        return respuesta;
    }
}
export {Validacion};