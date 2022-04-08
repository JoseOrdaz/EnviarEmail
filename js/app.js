
//Variables
const btnEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail');
//Variables para campos

const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
//Expresion regular para validar email
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
eventListeners();



function eventListeners () {
    //Cuando la app arrnaca
    document.addEventListener("DOMContentLoaded", inciarApp);
    //Campos del formulario
    email.addEventListener("blur", validarFormulario);
    asunto.addEventListener("blur", validarFormulario);
    mensaje.addEventListener("blur", validarFormulario);
}


//Functions

function inciarApp (){
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed','opacity-50')
}

//Validar formulario
function validarFormulario(e){


    if(e.target.value.length > 0){

        //Elimna los errores
        const error = document.querySelector('p.error');
        if(error){
            error.remove();
        }
        e.target.classList.add('border-green-500');
        e.target.classList.remove('border-red-500');

    } else {
        e.target.classList.remove('border-green-500');
        e.target.classList.add('border-red-500');

        mostrarError('Todos los campos son obligatorios');
    }

    if(e.target.type === 'email'){
     
        if(er.test(e.target.value)){
            e.target.classList.add('border-green-500');
            e.target.classList.remove('border-red-500');


        } else {
            e.target.classList.remove('border-green-500');
            e.target.classList.add('border-red-500');
            mostrarError('El email no es valido');
        }

    }

    if(er.test(email.value) && asunto.value !== '' && mensaje.value !== ''){
       console.log('Pasas la validacion')
    } else {
        console.log('Hay campos para validar')
    }
}


function mostrarError(mensaje){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border','border-red-500', 'background-color-100', 'text-red-500', 'text-center', 'font-bold', 'p-2', 'my-2','error');

    const errores = document.querySelectorAll('.error');

    if(errores.length === 0){
    formulario.appendChild(mensajeError);
    }


}