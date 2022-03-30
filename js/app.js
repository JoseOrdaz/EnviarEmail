
//Variables
const btnEnviar = document.querySelector('#enviar');

eventListeners();
function eventListeners () {
    document.addEventListener("DOMContentLoaded", inciarApp);
}


//Functions

function inciarApp (){
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed','opacity-50')
}