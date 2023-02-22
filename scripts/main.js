'use strict';

const btnDescript = document.getElementById('descripccion');
/*btnDescript.addEventListener('click', ()=>{
    const modalAlert = (btnDescript)=>{
        const alerta = document.createElement('div');
        const texto = document.createElement('p');
        const img = document.createElement('img');
        img.src = './img/boton-x.png';
        img.className="close";
        texto.setAttribute("class","textAlerta");
        alerta.setAttribute("id","alerta");
        alerta.setAttribute("class","alerta");
        texto.innerHTML = `<strong>${cad}</strong>`;
        alerta.appendChild(img);
        alerta.appendChild(texto);
        document.body.appendChild(alerta);
        img.onclick = function(){
            document.getElementById("alerta").remove();
        }
    
    }
    
});*/
/*btnDescript.addEventListener('click', ()=>{
    alert("Hola buenas tardes");
});
*/
const $form = document.getElementById('form');
$form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form, 
        headers: {
            'Accept': 'application/json'
        }
    })
    if (response.ok){
        this.reset();
        alert('Muchas tenkius por tus datos, te robaremos la cuenta');
    }
}
