import { conectionAPI } from "./conectionApi.js";
import { validateForm } from "./validation.js";
const form = document.querySelector('[data-form]');
const inputs = form.querySelectorAll('input');
const clearBtn = form.querySelector('#clearForm');

console.log(inputs);

form.addEventListener('submit', (e)=> createNewProduct(e));
clearBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    inputs.forEach((input)=>{
        input.value='';
    })
})

inputs.forEach((input)=>{
    input.addEventListener('blur', ()=> validateForm(input));
    input.addEventListener('invalid', e=> e.preventDefault());
});

const createNewProduct = (async(e)=>{
    e.preventDefault();
    const formData = {};
    inputs.forEach(input =>{
        formData[input.name] = input.value;
    });
    console.log(formData);
    try {
        await conectionAPI.newProduct(formData);
        window.location.href="/index.html";
    } catch (error) {
        console.log(error.message);
        alert(error.message);
    }
})