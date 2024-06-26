import { errorTypes, messages } from "./customErrors.js";

export const validateForm = ((input)=>{
    let msg = '';
    errorTypes.forEach(error=>{
        if(input.validity[error]){
            msg = messages[input.name][error]; 
        }
    })
    const mensajeError = input.parentNode.querySelector('.error-msg');
    const valid = input.checkValidity();
    if(!valid){
        mensajeError.style.display = 'block';
        mensajeError.textContent = msg;
    }else{
        mensajeError.style.display = 'none';
        mensajeError.textContent = "";
    }
})