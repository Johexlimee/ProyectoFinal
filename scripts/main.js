'use strict';

const btnDescript = document.getElementById('descripccion');
btnDescript.addEventListener('click', ()=>{
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
    
});

