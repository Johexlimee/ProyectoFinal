'use strict';

const btnDescript = document.getElementById('descripccion');
/*btnDescript.addEventListener('click', ()=>{
    alert("Hola buenas tardes");
});
*/
const $form = document.getElementById('form');
$form.addEventListener('submit', handlesubmit);

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